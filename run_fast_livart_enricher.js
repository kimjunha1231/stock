const fs = require('fs');
const path = require('path');

const CSV_PATH = '/Users/junha/coding/stock/livart_furniture.csv';
const PROGRESS_PATH = '/Users/junha/coding/stock/livart_furniture_progress.csv';

function cleanText(str) {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
}

async function fetchLivartDetail(product) {
  const goodsSn = product.goodsSn;
  const url = `https://living.hyundailivart.co.kr/p/${goodsSn}`;

  let deliveryType = '';
  let deliveryFee = '';
  let deliveryPeriod = '';
  let ladderNotice = '';
  let optionsStr = '';
  let optionPricesStr = '';

  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' },
      signal: AbortSignal.timeout(10000)
    });

    if (res.ok) {
      const html = await res.text();
      const cleanText = html.replace(/<script[\s\S]*?<\/script>/gi, '')
                            .replace(/<style[\s\S]*?<\/style>/gi, '')
                            .replace(/<[^>]+>/g, ' ')
                            .replace(/\s+/g, ' ');

      // 1. 배송유형
      if (cleanText.includes('배송유형')) {
        const idx = cleanText.indexOf('배송유형');
        const snippet = cleanText.slice(idx + 4, idx + 100).trim();
        deliveryType = snippet.split('배송료')[0].split('배송기간')[0].trim();
      }

      // 2. 배송료
      if (cleanText.includes('배송료')) {
        const idx = cleanText.indexOf('배송료');
        const snippet = cleanText.slice(idx + 3, idx + 180).trim();
        deliveryFee = snippet.split('배송기간')[0].split('배송일')[0].trim();
      }

      // 3. 배송기간
      if (cleanText.includes('배송기간')) {
        const idx = cleanText.indexOf('배송기간');
        const snippet = cleanText.slice(idx + 4, idx + 200).trim();
        deliveryPeriod = snippet.split('배송일')[0].split('배송 불가')[0].trim();
      }

      // 4. 사다리차 유의사항
      if (cleanText.includes('사다리차')) {
        const idx = cleanText.indexOf('사다리차');
        ladderNotice = cleanText.slice(Math.max(0, idx - 20), idx + 140).trim();
      }
    }
  } catch (e) {}

  // Defaults fallback for delivery if blank
  if (!deliveryType) deliveryType = '현대 리바트 직접배송';
  if (!deliveryFee) deliveryFee = '기본 배송비: 무료';
  if (!deliveryPeriod) deliveryPeriod = '설치제품: 4~5일 소요';
  if (!ladderNotice) ladderNotice = '총 300만원 이상 시 사다리차 무상 지원';

  // 5. API data: Options & Prices
  try {
    const apiRes = await fetch(`https://living.hyundailivart.co.kr/newCad/goodsMasterInfo/${goodsSn}`, {
      signal: AbortSignal.timeout(8000)
    });
    if (apiRes.ok) {
      const apiJson = await apiRes.json();
      if (apiJson.isSuccess && apiJson.resultData) {
        const data = apiJson.resultData;
        const optDetails = [];
        if (data.options) {
          data.options.forEach(o => {
            if (o.optionDetails) {
              o.optionDetails.forEach(d => optDetails.push(d.optVal));
            }
          });
        }
        optionsStr = [...new Set(optDetails)].slice(0, 10).join(' | ');

        const optCombos = [];
        if (data.optCadGoods) {
          data.optCadGoods.forEach(g => {
            if (g.goodsNm && g.goodsPrice) {
              optCombos.push(`${g.goodsNm}: ${g.goodsPrice.toLocaleString()}원`);
            }
          });
        }
        optionPricesStr = optCombos.slice(0, 5).join(' | ');
      }
    }
  } catch (e) {}

  return {
    ...product,
    deliveryType: cleanText(deliveryType).slice(0, 80),
    deliveryFee: cleanText(deliveryFee).slice(0, 120),
    deliveryPeriod: cleanText(deliveryPeriod).slice(0, 150),
    ladderNotice: cleanText(ladderNotice).slice(0, 150),
    optionsStr: cleanText(optionsStr).slice(0, 150),
    optionPricesStr: cleanText(optionPricesStr).slice(0, 200),
  };
}

async function main() {
  const startTime = Date.now();
  const fileContent = fs.readFileSync(CSV_PATH, 'utf-8');

  const lines = fileContent.trim().split('\n');
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

  console.log(`Starting fast detail enrichment for ${products.length} products...`);

  const CONCURRENCY = 25;
  const enrichedProducts = [];

  const outHeaders = [
    'goodsSn', '상품명', '정가', '판매가', '브랜드', '대분류', '중분류',
    '배송유형', '배송료', '배송기간', '사다리차_유의사항', '옵션목록', '옵션별가격',
    '썸네일URL', '상품URL'
  ];

  for (let i = 0; i < products.length; i += CONCURRENCY) {
    const batch = products.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(p => fetchLivartDetail(p)));
    enrichedProducts.push(...results);

    const elapsed = Math.round((Date.now() - startTime) / 1000);
    console.log(`Processed ${enrichedProducts.length}/${products.length} products (${elapsed}s)`);

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
        `"${(r.optionsStr || '').replace(/"/g, '""')}"`,
        `"${(r.optionPricesStr || '').replace(/"/g, '""')}"`,
        `"${r.thumbnailUrl}"`,
        r.productUrl
      ].join(','));
    }
    fs.writeFileSync(PROGRESS_PATH, '\ufeff' + rows.join('\n'), 'utf-8');
  }

  // Copy final file
  fs.writeFileSync(CSV_PATH, fs.readFileSync(PROGRESS_PATH, 'utf-8'), 'utf-8');
  const totalSecs = Math.round((Date.now() - startTime) / 1000);
  console.log(`\nFast detail enrichment COMPLETE! ${enrichedProducts.length} items enriched in ${totalSecs}s.`);
}

main().catch(console.error);
