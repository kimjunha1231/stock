const { chromium } = require('playwright');

// === 가구 카테고리 정의 ===
const FURNITURE_CATEGORIES = [
  { id: 'C200000059', name: '소파', subs: [
    { id: 'C200000287', name: '패브릭소파' },
    { id: 'C200000281', name: '가죽소파' },
    { id: 'C200000283', name: '리클라이너소파' },
  ]},
  { id: 'C400001913', name: '거실장/거실테이블', subs: [
    { id: 'C400001922', name: '거실장' },
    { id: 'C400001923', name: '거실테이블' },
  ]},
  { id: 'C200000061', name: '식탁', subs: [
    { id: 'C200000293', name: '식탁세트' },
    { id: 'C200000292', name: '식탁' },
    { id: 'C200000294', name: '식탁의자' },
  ]},
  { id: 'C200000062', name: '침대/매트리스', subs: [
    { id: 'C200000299', name: '침대' },
    { id: 'C200000298', name: '매트리스' },
  ]},
  { id: 'C200000060', name: '옷장/드레스룸', subs: [
    { id: 'C200000291', name: '옷장' },
    { id: 'C400001921', name: '슬라이딩장' },
    { id: 'C200000288', name: '드레스룸' },
    { id: 'C200000289', name: '붙박이장' },
    { id: 'C400002069', name: '행거' },
  ]},
  { id: 'C400001914', name: '화장대/거울/스툴', subs: [
    { id: 'C400001920', name: '화장대' },
    { id: 'C400001918', name: '거울' },
    { id: 'C400001919', name: '스툴' },
  ]},
  { id: 'C400001915', name: '수납장/서랍장', subs: [
    { id: 'C400001916', name: '수납장' },
    { id: 'C400001917', name: '서랍장' },
  ]},
  { id: 'C200000064', name: '책상/책장', subs: [
    { id: 'C200000310', name: '책상' },
    { id: 'C200000312', name: '책장' },
  ]},
  { id: 'C200000309', name: '의자', subs: [
    { id: 'C200001023', name: '성인/사무용' },
    { id: 'C200001026', name: '학생/키즈용' },
    { id: 'C200001022', name: '다목적의자' },
    { id: 'C200001024', name: '의자ACC' },
  ]},
  { id: 'C200000063', name: '키즈/주니어', subs: [
    { id: 'C200000307', name: '침대' },
    { id: 'C200000303', name: '서랍장/수납장/옷장' },
    { id: 'C200000305', name: '책상' },
    { id: 'C200000306', name: '책장' },
    { id: 'C200000304', name: '의자' },
    { id: 'C200000302', name: '유아용품' },
    { id: 'C400002727', name: '유아매트' },
  ]},
  { id: 'C400002714', name: '마이스터 컬렉션', subs: [] },
];

const PAGE_SIZE = 100;

async function crawlCategoryProducts(browser, cat) {
  const allProducts = new Map();
  
  for (const sub of [cat, ...cat.subs]) {
    const catId = sub.id;
    const catName = sub.name;
    let pageNo = 1;
    
    while (true) {
      const url = `https://living.hyundailivart.co.kr/cp/${catId}?sortBy=qty&pageNo=${pageNo}&pageSize=${PAGE_SIZE}&catSn=${catId}&catDept=1&pathCatSn=${catId}`;
      
      const page = await browser.newPage();
      page.setDefaultTimeout(20000);
      
      try {
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
        await page.waitForTimeout(2000);
        
        const html = await page.content();
        
        const totalMatch = html.match(/name="totalCnt" value="(\d+)"/);
        const total = totalMatch ? parseInt(totalMatch[1]) : 0;
        
        const goodsSns = [...html.matchAll(/criteo-goodsSn" value="(P\d+)"/g)].map(m => m[1]);
        
        if (goodsSns.length === 0) { await page.close(); break; }
        
        for (const sn of goodsSns) {
          if (!allProducts.has(sn)) {
            allProducts.set(sn, {
              goodsSn: sn,
              url: `https://living.hyundailivart.co.kr/p/${sn}`,
              mainCategory: cat.name,
              subCategory: catName !== cat.name ? catName : '',
            });
          }
        }
        
        console.log(`  [${catName}] Page ${pageNo}: ${goodsSns.length} (total: ${total}, unique: ${allProducts.size})`);
        await page.close();
        
        if (pageNo * PAGE_SIZE >= total || goodsSns.length < PAGE_SIZE) break;
        pageNo++;
      } catch (e) {
        console.log(`  [${catName}] Page ${pageNo} err: ${e.message.slice(0, 80)}`);
        await page.close();
        break;
      }
    }
  }
  
  return Array.from(allProducts.values());
}

async function scrapeDetail(page, product) {
  try {
    await page.goto(product.url, { waitUntil: 'domcontentloaded', timeout: 20000 });
    await page.waitForTimeout(3000);
    
    return await page.evaluate(() => {
      // 상품명 (og:title)
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const name = ogTitle ? ogTitle.getAttribute('content') : '';
      
      // 정가
      const origEl = document.querySelector('.price.first-price');
      const origPrice = origEl ? origEl.textContent.trim().replace(/[^0-9]/g, '') : '';
      
      // 판매가 (할인 적용된 가격)
      const saleEl = document.querySelector('.price.final-price');
      let salePrice = '';
      if (saleEl) {
        const raw = saleEl.textContent.trim();
        const num = raw.replace(/[^0-9]/g, '');
        salePrice = num;
      }
      
      // 이미지
      const imgEl = document.querySelector('.pitem-header-photo .xzoom');
      const thumbnail = imgEl ? (imgEl.getAttribute('src') || '') : '';
      
      return { name, original_price: origPrice, sale_price: salePrice, thumbnail };
    });
  } catch (e) {
    return { name: '', original_price: '', sale_price: '', thumbnail: '' };
  }
}

async function main() {
  const startTime = Date.now();
  const fs = require('fs');
  
  const browser = await chromium.launch({ 
    headless: true,
    executablePath: '/Users/junha/Library/Caches/ms-playwright/chromium-1234/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing'
  });
  
  console.log('=== 1단계: 카테고리별 상품 링크 수집 ===');
  const allProducts = [];
  for (const cat of FURNITURE_CATEGORIES) {
    console.log(`\n카테고리: ${cat.name}`);
    const products = await crawlCategoryProducts(browser, cat);
    allProducts.push(...products);
    console.log(`  => ${products.length}개 추가 (누적: ${allProducts.length})`);
  }
  
  // 중복 제거
  const uniqueMap = new Map();
  for (const p of allProducts) uniqueMap.set(p.goodsSn, p);
  const uniqueProducts = Array.from(uniqueMap.values());
  
  console.log(`\n=== 중복 제거 후 총 ${uniqueProducts.length}개 상품 ===`);
  
  // 2단계: 상세 정보 수집 (병렬 처리, 브라우저 컨텍스트 공유)
  console.log('\n=== 2단계: 상품 상세 정보 수집 ===');
  
  // CSV 헤더
  const csvRows = ['goodsSn,상품명,정가,판매가,대분류,중분류,썸네일URL,상품URL'];
  
  //worker page를 미리 만들어두고 재사용
  const detailPage = await browser.newPage();
  detailPage.setDefaultTimeout(20000);
  
  let done = 0;
  for (const product of uniqueProducts) {
    const detail = await scrapeDetail(detailPage, product);
    
    const row = [
      product.goodsSn,
      `"${(detail.name || '').replace(/"/g, '""')}"`,
      detail.original_price || '',
      detail.sale_price || '',
      `"${product.mainCategory}"`,
      `"${product.subCategory}"`,
      `"${(detail.thumbnail || '').replace(/"/g, '""')}"`,
      product.url,
    ];
    csvRows.push(row.join(','));
    
    done++;
    if (done % 100 === 0 || done === uniqueProducts.length) {
      const elapsed = Math.round((Date.now() - startTime) / 1000);
      console.log(`  진행: ${done}/${uniqueProducts.length} (${elapsed}초)`);
      // 중간 저장
      fs.writeFileSync('/Users/junha/coding/stock/livart_furniture_progress.csv', '\ufeff' + csvRows.join('\n'), 'utf-8');
    }
  }
  
  await detailPage.close();
  await browser.close();
  
  // 최종 저장
  fs.writeFileSync('/Users/junha/coding/stock/livart_furniture.csv', '\ufeff' + csvRows.join('\n'), 'utf-8');
  
  const totalTime = Math.round((Date.now() - startTime) / 1000);
  console.log(`\n=== 완료! ===`);
  console.log(`수집 상품: ${uniqueProducts.length}개`);
  console.log(`CSV: /Users/junha/coding/stock/livart_furniture.csv`);
  console.log(`소요 시간: ${totalTime}초 (${Math.round(totalTime/60)}분)`);
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
