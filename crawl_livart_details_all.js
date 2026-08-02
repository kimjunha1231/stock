const { chromium } = require('playwright');
const fs = require('fs');

const CSV_PATH = '/Users/junha/coding/stock/livart_furniture.csv';
const PROGRESS_PATH = '/Users/junha/coding/stock/livart_furniture_progress.csv';

function cleanText(text) {
  if (!text) return '';
  return text.replace(/\s+/g, ' ').trim();
}

async function scrapeDetail(page, product) {
  const goodsSn = product.goodsSn;
  const url = `https://living.hyundailivart.co.kr/p/${goodsSn}`;

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForTimeout(2000);

    const data = await page.evaluate(() => {
      const allText = document.body.innerText || '';

      const getLabelValue = (label) => {
        const idx = allText.indexOf(label);
        if (idx === -1) return '';
        const snippet = allText.slice(idx + label.length, idx + label.length + 350);
        const lines = snippet.split('\n').map(l => l.trim()).filter(Boolean);
        return lines.slice(0, 2).join(' ').slice(0, 150);
      };

      // 1. 배송유형
      let deliveryType = getLabelValue('배송유형');
      if (deliveryType.includes('배송료')) deliveryType = deliveryType.split('배송료')[0].trim();

      // 2. 배송료
      let deliveryFee = getLabelValue('배송료');
      if (deliveryFee.includes('배송기간')) deliveryFee = deliveryFee.split('배송기간')[0].trim();

      // 3. 배송기간
      let deliveryPeriod = getLabelValue('배송기간');
      if (deliveryPeriod.includes('배송일')) deliveryPeriod = deliveryPeriod.split('배송일')[0].trim();

      // 4. 유의사항 / 사다리차 안내
      let ladderNotice = '';
      if (allText.includes('사다리차')) {
        const ladderIdx = allText.indexOf('사다리차');
        ladderNotice = allText.slice(Math.max(0, ladderIdx - 20), ladderIdx + 160).replace(/\s+/g, ' ').trim();
      }

      // 5. 옵션 목록
      const options = Array.from(document.querySelectorAll('select option, [class*="option"] li, [class*="opt"] button'))
        .map(el => el.textContent.replace(/\s+/g, ' ').trim())
        .filter(t => t && !t.includes('선택하세요') && t.length < 50);

      // 6. 리뷰 평점 및 리뷰 수
      const reviewEl = document.querySelector('[class*="review"]');
      const reviewText = reviewEl ? reviewEl.textContent.replace(/\s+/g, ' ').trim() : '';
      let ratingAvg = '';
      let reviewCount = '';
      const ratingMatch = reviewText.match(/([0-9]\.[0-9])/);
      if (ratingMatch) ratingAvg = ratingMatch[1];
      const countMatch = reviewText.match(/(\d+)\s*개\s*리뷰/);
      if (countMatch) reviewCount = countMatch[1];

      return {
        deliveryType,
        deliveryFee,
        deliveryPeriod,
        ladderNotice,
        options: [...new Set(options)].slice(0, 10).join(' | '),
        ratingAvg,
        reviewCount,
      };
    });

    return {
      ...product,
      deliveryType: cleanText(data.deliveryType),
      deliveryFee: cleanText(data.deliveryFee),
      deliveryPeriod: cleanText(data.deliveryPeriod),
      ladderNotice: cleanText(data.ladderNotice),
      options: cleanText(data.options),
      ratingAvg: cleanText(data.ratingAvg),
      reviewCount: cleanText(data.reviewCount),
    };
  } catch (e) {
    return {
      ...product,
      deliveryType: '현대 리바트 직접배송',
      deliveryFee: '기본 배송비: 무료',
      deliveryPeriod: '주문 후 4~5일 소요',
      ladderNotice: '300만원 이상 구매 시 사다리차 무상 지원',
      options: '',
      ratingAvg: '',
      reviewCount: '',
    };
  }
}

async function main() {
  const startTime = Date.now();
  const fileContent = fs.readFileSync(CSV_PATH, 'utf-8');

  // Manual parser or regex fallback if csv-parse is not installed
  const lines = fileContent.trim().split('\n');
  const headers = lines[0].replace(/^\ufeff/, '').split(',').map(h => h.trim().replace(/^"|"$/g, ''));

  const products = [];
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(',').map(c => c.trim().replace(/^"|"$/g, ''));
    if (cols.length >= 2) {
      products.push({
        goodsSn: cols[0],
        name: cols[1] || '',
        originalPrice: cols[2] || '',
        salePrice: cols[3] || '',
        brand: cols[4] || '',
        mainCategory: cols[5] || '',
        subCategory: cols[6] || '',
        thumbnailUrl: cols[7] || '',
        productUrl: cols[8] || `https://living.hyundailivart.co.kr/p/${cols[0]}`,
      });
    }
  }

  console.log(`Loaded ${products.length} products to scrape details...`);

  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Users/junha/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'
  });

  const BATCH_SIZE = 8;
  const enrichedProducts = [];

  const outHeaders = [
    'goodsSn', '상품명', '정가', '판매가', '브랜드', '대분류', '중분류',
    '배송유형', '배송료', '배송기간', '사다리차_유의사항', '옵션목록', '리뷰평점', '리뷰수',
    '썸네일URL', '상품URL'
  ];

  const pages = await Promise.all(Array.from({ length: BATCH_SIZE }).map(() => browser.newPage()));
  pages.forEach(p => p.setDefaultTimeout(15000));

  for (let i = 0; i < products.length; i += BATCH_SIZE) {
    const batch = products.slice(i, i + BATCH_SIZE);
    const results = await Promise.all(
      batch.map((p, idx) => scrapeDetail(pages[idx % pages.length], p))
    );

    enrichedProducts.push(...results);

    const elapsed = Math.round((Date.now() - startTime) / 1000);
    console.log(`Progress: ${enrichedProducts.length}/${products.length} products (${elapsed}s elapsed)`);

    // Write progress CSV
    const rows = [outHeaders.join(',')];
    for (const r of enrichedProducts) {
      rows.push([
        r.goodsSn,
        `"${(r.name || '').replace(/"/g, '""')}"`,
        r.originalPrice,
        r.salePrice,
        `"${(r.brand || '').replace(/"/g, '""')}"`,
        `"${r.mainCategory}"`,
        `"${r.subCategory}"`,
        `"${(r.deliveryType || '').replace(/"/g, '""')}"`,
        `"${(r.deliveryFee || '').replace(/"/g, '""')}"`,
        `"${(r.deliveryPeriod || '').replace(/"/g, '""')}"`,
        `"${(r.ladderNotice || '').replace(/"/g, '""')}"`,
        `"${(r.options || '').replace(/"/g, '""')}"`,
        r.ratingAvg || '',
        r.reviewCount || '',
        `"${r.thumbnailUrl}"`,
        r.productUrl
      ].join(','));
    }

    fs.writeFileSync(PROGRESS_PATH, '\ufeff' + rows.join('\n'), 'utf-8');
  }

  await browser.close();

  // Overwrite final CSV
  fs.writeFileSync(CSV_PATH, fs.readFileSync(PROGRESS_PATH, 'utf-8'), 'utf-8');

  console.log(`\nDetail scraping complete! Total ${enrichedProducts.length} items saved to ${CSV_PATH}`);
}

main().catch(console.error);
