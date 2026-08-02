const { chromium } = require('playwright');

async function scrapeDetail(page, goodsSn) {
  const url = `https://living.hyundailivart.co.kr/p/${goodsSn}`;
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);

    const data = await page.evaluate(() => {
      const allText = document.body.innerText || '';

      // Helper to extract text after a label
      const getLabelValue = (label) => {
        const idx = allText.indexOf(label);
        if (idx === -1) return '';
        const snippet = allText.slice(idx + label.length, idx + label.length + 300);
        const lines = snippet.split('\n').map(l => l.trim()).filter(Boolean);
        return lines.slice(0, 2).join(' ').slice(0, 150);
      };

      // 1. 배송유형
      const deliveryType = getLabelValue('배송유형');

      // 2. 배송료
      const deliveryFee = getLabelValue('배송료');

      // 3. 배송기간
      const deliveryPeriod = getLabelValue('배송기간');

      // 4. 유의사항 / 사다리차 안내
      let ladderNotice = '';
      if (allText.includes('사다리차')) {
        const ladderIdx = allText.indexOf('사다리차');
        ladderNotice = allText.slice(Math.max(0, ladderIdx - 20), ladderIdx + 150).replace(/\s+/g, ' ').trim();
      }

      // 5. 옵션 목록
      const options = Array.from(document.querySelectorAll('select option, [class*="option"] li, [class*="opt"] button'))
        .map(el => el.textContent.trim())
        .filter(t => t && !t.includes('선택하세요') && t.length < 60);

      // 6. 리뷰 평점 및 리뷰 수
      const reviewEl = document.querySelector('[class*="review"]');
      const reviewText = reviewEl ? reviewEl.textContent.replace(/\s+/g, ' ').trim() : '';
      let ratingAvg = '';
      let reviewCount = '';
      const ratingMatch = reviewText.match(/([0-9]\.[0-9])/);
      if (ratingMatch) ratingAvg = ratingMatch[1];
      const countMatch = reviewText.match(/(\d+)\s*개\s*리뷰/);
      if (countMatch) reviewCount = countMatch[1];

      // 7. 교환 및 반품비
      let returnFee = '';
      const returnIdx = allText.indexOf('반품비');
      if (returnIdx !== -1) {
        returnFee = allText.slice(returnIdx, returnIdx + 120).replace(/\s+/g, ' ').trim();
      }

      return {
        deliveryType,
        deliveryFee,
        deliveryPeriod,
        ladderNotice,
        options: [...new Set(options)].slice(0, 10).join(' | '),
        ratingAvg,
        reviewCount,
        returnFee,
      };
    });

    return { goodsSn, ...data };
  } catch (e) {
    return { goodsSn, error: e.message };
  }
}

async function main() {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Users/junha/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'
  });

  const page = await browser.newPage();
  
  console.log('Testing detail scrape for 3 products...');
  for (const sn of ['P200199500', 'P200165385', 'P100034403']) {
    console.log(`\n--- Goods ${sn} ---`);
    const res = await scrapeDetail(page, sn);
    console.log(JSON.stringify(res, null, 2));
  }

  await browser.close();
}

main().catch(console.error);
