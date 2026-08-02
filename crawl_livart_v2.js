const { chromium } = require('playwright');

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
    const catsToCrawl = [cat, ...cat.subs];
    
    for (const sub of catsToCrawl) {
      let pageNo = 1;
      const seen = new Set();
      
      while (true) {
        const url = `https://living.hyundailivart.co.kr/cp/${sub.id}?sortBy=qty&pageNo=${pageNo}&pageSize=${PAGE_SIZE}&catSn=${sub.id}&catDept=1&pathCatSn=${sub.id}`;
        
        const page = await browser.newPage();
        page.setDefaultTimeout(15000);
        
        try {
          await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 10000 });
          await page.waitForTimeout(1500);
          
          const items = await page.evaluate(() => {
            // 리스트 페이지에서 직접 상품명, 가격, 이미지 추출
            const items = [];
            const blocks = document.querySelectorAll('[class*="product-item"]');
            
            blocks.forEach(block => {
              const snInput = block.querySelector('input[value^="P"]');
              if (!snInput) return;
              
              const goodsSn = snInput.value;
              
              // 상품명 - 여러 위치 시도
              let name = '';
              const nameEl = block.querySelector('.product-item-header__name, .pitem-header-product__name, [class*="name"]');
              if (nameEl) name = nameEl.textContent.trim();
              
              // 가격
              let price = '';
              const priceEl = block.querySelector('.price.first-price, [class*="price__real"], [class*="price__price"]');
              if (priceEl) price = priceEl.textContent.trim().replace(/[^0-9]/g, '');
              
              // 할인가
              let salePrice = '';
              const saleEl = block.querySelector('.price.final-price, .product-item-price__discount');
              if (saleEl) salePrice = saleEl.textContent.trim().replace(/[^0-9]/g, '');
              
              // 이미지
              let img = '';
              const imgEl = block.querySelector('img[src*="goods"]');
              if (imgEl) img = imgEl.getAttribute('src') || imgEl.getAttribute('data-src') || '';
              
              // 브랜드
              let brand = '';
              const brandEl = block.querySelector('.product-item-header__brand, [class*="brand"]');
              if (brandEl) brand = brandEl.textContent.trim();
              
              // 배지
              let badge = '';
              const badgeEl = block.querySelector('[class*="badge"], [class*="tag__item"]');
              if (badgeEl) badge = badgeEl.textContent.trim();
              
              items.push({ goodsSn, name, price, salePrice, img, brand, badge });
            });
            
            // data 속성에서도 추출
            const totalMatch = document.body.innerHTML.match(/name="totalCnt" value="(\d+)"/);
            const total = totalMatch ? parseInt(totalMatch[1]) : items.length;
            
            return { items, total };
          });
          
          if (items.items.length === 0) { await page.close(); break; }
          
          let newCount = 0;
          for (const item of items.items) {
            if (!seen.has(item.goodsSn)) {
              seen.add(item.goodsSn);
              allProducts.push({
                ...item,
                mainCategory: cat.name,
                subCategory: sub.name !== cat.name ? sub.name : '',
              });
              newCount++;
            }
          }
          
          console.log(`  [${sub.name}] pg${pageNo}: +${newCount} (total: ${items.total}, 누적: ${allProducts.length})`);
          await page.close();
          
          if (pageNo * PAGE_SIZE >= items.total || items.items.length < PAGE_SIZE) break;
          pageNo++;
        } catch (e) {
          console.log(`  [${sub.name}] pg${pageNo} err: ${e.message.slice(0, 60)}`);
          await page.close();
          break;
        }
      }
    }
  }
  
  // 중복 제거
  const uniqueMap = new Map();
  for (const p of allProducts) uniqueMap.set(p.goodsSn, p);
  const uniqueProducts = Array.from(uniqueMap.values());
  
  console.log(`\n=== 수집 완료: ${allProducts.length}개 → 중복제거 ${uniqueProducts.length}개 ===`);
  
  // CSV 작성
  const csvRows = ['goodsSn,상품명,정가,판매가,브랜드,대분류,중분류,썸네일URL,상품URL'];
  
  for (const p of uniqueProducts) {
    const row = [
      p.goodsSn,
      `"${(p.name || '').replace(/"/g, '""')}"`,
      p.price || '',
      p.salePrice || '',
      `"${(p.brand || '').replace(/"/g, '""')}"`,
      `"${p.mainCategory}"`,
      `"${p.subCategory}"`,
      `"${(p.img || '').replace(/"/g, '""')}"`,
      `https://living.hyundailivart.co.kr/p/${p.goodsSn}`,
    ];
    csvRows.push(row.join(','));
  }
  
  fs.writeFileSync('/Users/junha/coding/stock/livart_furniture.csv', '\ufeff' + csvRows.join('\n'), 'utf-8');
  
  // 샘플 출력
  console.log('\n=== 샘플 데이터 (첫 5개) ===');
  for (const p of uniqueProducts.slice(0, 5)) {
    console.log(`  ${p.goodsSn} | ${(p.name || '?').slice(0, 40)} | ${p.price || '?'}원`);
  }
  
  const elapsed = Math.round((Date.now() - startTime) / 1000);
  console.log(`\n=== 완료! ${elapsed}초 (${Math.round(elapsed/60)}분) ===`);
  console.log(`CSV: /Users/junha/coding/stock/livart_furniture.csv`);
  
  await browser.close();
}

main().catch(err => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
