// Generated Crawling Data & Statistics
export interface CrawledProduct {
  id: string;
  name: string;
  brand: string;
  mainCategory: string;
  subCategory?: string;
  priceOriginal?: string;
  priceSale?: string;
  discountPct?: string;
  status?: string;
  badge?: string;
  url?: string;
  imageUrl?: string;
  extra?: Record<string, string>;
}

export interface AffiliateCrawlSummary {
  affiliateId: string;
  name: string;
  totalCount: number;
  columnCount: number;
  columns: string[];
  categories: Record<string, number>;
  brands: Record<string, number>;
  samples: CrawledProduct[];
}

export const greenfoodData: AffiliateCrawlSummary = {
  affiliateId: 'greenfood',
  name: '현대그린푸드',
  totalCount: 735,
  columnCount: 20,
  columns: ["수집_순서", "대분류", "소분류", "카테고리_경로", "상품_ID", "브랜드", "상품명", "상품_설명", "판매상태", "상품_배지", "할인율_pct", "정가_원", "판매가_원", "배송조건", "상품_URL", "이미지_URL", "목록_페이지", "페이지_내_순서", "수집일시", "출처_URL"],
  categories: {
    "식재료": 172,
    "샐러드&디저트&분식": 134,
    "메인요리&반찬": 98,
    "맞춤 도시락": 75,
    "국&탕&찌개": 71,
    "밥&면&죽": 71,
    "시니어": 54,
    "주방용품": 22,
    "건강식품": 11,
    "간편식단(냉동)": 9
  },
  brands: {
    "현대그린푸드": 735
  },
  samples: [
  {
    "id": "175695",
    "name": "고혈압식단 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "고혈압식단",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175695",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/BCB5AF25BA6F4783A7024925931DD5E4.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 고혈압식단",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175690",
    "name": "단백질식단(냉동) 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "단백질식단(냉동)",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동|고단백",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175690",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/17EC345C91F64F29B16C6B6C0E81E52A.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 단백질식단(냉동)",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175694",
    "name": "당뇨식단 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "당뇨식단",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175694",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/28ADE251518B4878A039012CD5D74B9D.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 당뇨식단",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175697",
    "name": "신장질환식단(투석환자용) 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "신장질환식단",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175697",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/E9006B63245E414383BB562501CCD056.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 신장질환식단",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175698",
    "name": "신장질환식단(비투석환자용) 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "신장질환식단(비투석)",
    "priceOriginal": "",
    "priceSale": "10000",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175698",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/F190F47A981B4EF5AC2B1DE93FA02908.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 신장질환식단(비투석)",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175696",
    "name": "암환자식단 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "암환자식단",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175696",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/E989F4FB2220471BAECE7E1A45C1D4F0.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 암환자식단",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175691",
    "name": "저당식단(냉동) 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "저당식단(냉동)",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동|저당",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175691",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/62D4561F195248278AA735EFAC217415.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 저당식단(냉동)",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175692",
    "name": "저속식단(냉동) 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "저속식단(냉동)",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175692",
    "imageUrl": "https://image.greating.co.kr/IL/item/202605/29/F5C11D479DC54BD0BED61DCFD0AA9D08.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 저속식단(냉동)",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175693",
    "name": "저콜레스테롤(냉동) 5일 패키지",
    "brand": "현대그린푸드",
    "mainCategory": "간편식단(냉동)",
    "subCategory": "저콜레스테롤식단(냉동)",
    "priceOriginal": "",
    "priceSale": "10500",
    "discountPct": "",
    "status": "판매 중",
    "badge": "냉동",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175693",
    "imageUrl": "https://image.greating.co.kr/IL/item/202607/27/A6EDFC23FE794341A42F530B67447192.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 간편식단(냉동) / 저콜레스테롤식단(냉동)",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175771",
    "name": "[닥터브라이언] 비오틴 구미 5000 복숭아맛 젤리 100구미",
    "brand": "현대그린푸드",
    "mainCategory": "건강식품",
    "subCategory": "비타민&영양제",
    "priceOriginal": "",
    "priceSale": "13900",
    "discountPct": "",
    "status": "판매 중",
    "badge": "투명",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175771",
    "imageUrl": "https://image.greating.co.kr/IL/item/202606/10/475920F185A14E50A7D6BEB1A31FFE83.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 건강식품 / 비타민&영양제",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175770",
    "name": "[닥터브라이언] 비타민C&D 3000 복숭아맛 100구미",
    "brand": "현대그린푸드",
    "mainCategory": "건강식품",
    "subCategory": "비타민&영양제",
    "priceOriginal": "",
    "priceSale": "14900",
    "discountPct": "",
    "status": "판매 중",
    "badge": "투명",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175770",
    "imageUrl": "https://image.greating.co.kr/IL/item/202606/10/2F828A52C6AF4B609A22120381BB919D.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 건강식품 / 비타민&영양제",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "175772",
    "name": "[닥터브라이언] 써니업 비타민D 파인애플맛 젤리 100구미",
    "brand": "현대그린푸드",
    "mainCategory": "건강식품",
    "subCategory": "비타민&영양제",
    "priceOriginal": "",
    "priceSale": "13900",
    "discountPct": "",
    "status": "판매 중",
    "badge": "투명",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=175772",
    "imageUrl": "https://image.greating.co.kr/IL/item/202606/10/B49242886E5F43EE9A595B5AC335F68D.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 건강식품 / 비타민&영양제",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "173507",
    "name": "[메리루스] 나이트 멀티미네랄 30ml*14포",
    "brand": "현대그린푸드",
    "mainCategory": "건강식품",
    "subCategory": "비타민&영양제",
    "priceOriginal": "35000",
    "priceSale": "31500",
    "discountPct": "10",
    "status": "판매 중",
    "badge": "",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=173507",
    "imageUrl": "https://image.greating.co.kr/IL/item/202603/24/65019814E97C49199597062EC5FCC2D7.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 건강식품 / 비타민&영양제",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "173506",
    "name": "[메리루스] 모닝 멀티비타민 30ml*14포",
    "brand": "현대그린푸드",
    "mainCategory": "건강식품",
    "subCategory": "비타민&영양제",
    "priceOriginal": "35000",
    "priceSale": "31500",
    "discountPct": "10",
    "status": "판매 중",
    "badge": "",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=173506",
    "imageUrl": "https://image.greating.co.kr/IL/item/202603/24/D1C3DFB908464E5EA4342DE1E47F118C.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 건강식품 / 비타민&영양제",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  },
  {
    "id": "169009",
    "name": "[체크오] 아르타민 부스트 패션후르츠 10g*14포",
    "brand": "현대그린푸드",
    "mainCategory": "건강식품",
    "subCategory": "비타민&영양제",
    "priceOriginal": "33000",
    "priceSale": "29700",
    "discountPct": "10",
    "status": "판매 중",
    "badge": "",
    "url": "https://www.greating.co.kr/market/marketDetail?itemId=169009",
    "imageUrl": "https://image.greating.co.kr/IL/item/202511/20/29673835A8134B1F847BB47E151F4D6C.jpg?RS=400x400",
    "extra": {
      "배송조건": "4만원 이상 무료배송",
      "카테고리_경로": "건강마켓 / 건강식품 / 비타민&영양제",
      "수집일시": "2026-07-31T16:17:05+09:00"
    }
  }
]
};

export const wellnessData: AffiliateCrawlSummary = {
  affiliateId: 'wellness',
  name: '현대웰니스',
  totalCount: 145,
  columnCount: 22,
  columns: ["수집_순서", "대분류", "브랜드_카테고리", "카테고리_경로", "상품_ID", "브랜드", "상품명", "상품_설명", "판매상태", "상품_배지", "1일_가격", "할인율_pct", "정가_원", "판매가_원", "남은수량", "상품_URL", "이미지_URL", "목록_페이지", "페이지번호", "페이지_내_순서", "수집일시", "출처_URL"],
  categories: {
    "솔가": 96,
    "에그몬트": 14,
    "고헬씨": 12,
    "리바이리": 12,
    "퓨리탄프라이드": 7,
    "바이탈프로틴": 4
  },
  brands: {
    "솔가": 96,
    "에그몬트": 14,
    "고헬씨": 12,
    "리바이리": 12,
    "퓨리탄프라이드": 7,
    "바이탈프로틴": 4
  },
  samples: [
  {
    "id": "1000000904",
    "name": "고 오이스터 + 아연 원 어 데이 60캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "27000",
    "priceSale": "13500",
    "discountPct": "50",
    "status": "판매중",
    "badge": "임박",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000904",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000904/image/main/1000000904_main_071.jpg",
    "extra": {
      "1일_가격": "하루당 450원",
      "남은수량": "32개",
      "상품_설명": "흡수율 높은 미네랄, 글루콘산 아연으로 정상적인 면역기능·세포분열"
    }
  },
  {
    "id": "1000001159",
    "name": "고 뉴질랜드 초록입홍합 추출오일(15g/30캡슐)",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "35000",
    "priceSale": "21000",
    "discountPct": "40",
    "status": "판매중",
    "badge": "",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000001159",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000001159/image/main/1000001159_main_042.jpg",
    "extra": {
      "1일_가격": "하루당 1,167원",
      "남은수량": "1999개",
      "상품_설명": "뉴질랜드 청정해역에서 온 초록입홍합"
    }
  },
  {
    "id": "1000001157",
    "name": "고 비타민D3 1000IU 비타민C 아연 플러스 60캡슐",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "41500",
    "priceSale": "29050",
    "discountPct": "30",
    "status": "판매중",
    "badge": "",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000001157",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000001157/image/main/1000001157_main_03.jpg",
    "extra": {
      "1일_가격": "하루당 692원",
      "남은수량": "1993개",
      "상품_설명": "항산화·뼈건강·면역기능 트리플케어"
    }
  },
  {
    "id": "1000000910",
    "name": "고 크릴오일 1,500MG 30캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "52000",
    "priceSale": "26000",
    "discountPct": "50",
    "status": "판매중",
    "badge": "임박",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000910",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000910/image/main/1000000910_main_057.jpg",
    "extra": {
      "1일_가격": "하루당 1,733원",
      "남은수량": "∞개",
      "상품_설명": "풍부한 인지질이 함유되어 있는 남극해 크릴오일 100%"
    }
  },
  {
    "id": "1000001160",
    "name": "고 뉴질랜드 초록입홍합 추출오일(30g/60캡슐)",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "65000",
    "priceSale": "45500",
    "discountPct": "30",
    "status": "판매중",
    "badge": "",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000001160",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000001160/image/main/1000001160_main_032.jpg",
    "extra": {
      "1일_가격": "하루당 1,083원",
      "남은수량": "1989개",
      "상품_설명": "뉴질랜드 청정해역에서 온 초록입홍합"
    }
  },
  {
    "id": "1000000902",
    "name": "고 감마리놀렌산 달맞이꽃종자유 220캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "69000",
    "priceSale": "34500",
    "discountPct": "50",
    "status": "판매중",
    "badge": "임박",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000902",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000902/image/main/1000000902_main_099.jpg",
    "extra": {
      "1일_가격": "하루당 941원",
      "남은수량": "∞개",
      "상품_설명": "여성을 위한 달맞이꽃종자유 감마리놀렌산 함유 유지"
    }
  },
  {
    "id": "1000000903",
    "name": "고 스쿠알렌 1,000MG 180캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "70000",
    "priceSale": "5000",
    "discountPct": "93",
    "status": "판매중",
    "badge": "임박, 초특가",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000903",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000903/image/main/1000000903_main_035.jpg",
    "extra": {
      "1일_가격": "하루당 3,889원",
      "남은수량": "2000개",
      "상품_설명": "심해상어의 간유에서 추출한 강력한 항산화"
    }
  },
  {
    "id": "1000000913",
    "name": "고 피쉬오일 1,500MG 210캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "77000",
    "priceSale": "38500",
    "discountPct": "50",
    "status": "판매중",
    "badge": "임박",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000913",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000913/image/main/1000000913_main_099.jpg",
    "extra": {
      "1일_가격": "하루당 733원",
      "남은수량": "∞개",
      "상품_설명": "혈행·눈·기억력 4중 기능성 오메가-3"
    }
  },
  {
    "id": "1000000911",
    "name": "고 대마종자유 1,100MG 100캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "78000",
    "priceSale": "39000",
    "discountPct": "50",
    "status": "판매중",
    "badge": "임박",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000911",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000911/image/main/1000000911_main_033.jpg",
    "extra": {
      "1일_가격": "하루당 780원",
      "남은수량": "1983개",
      "상품_설명": "다양한 영양성분을 담고있는 프리미엄 식물성 오일"
    }
  },
  {
    "id": "1000001158",
    "name": "고 피쉬오일 비타민D3 1000IU 90캡슐",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "79000",
    "priceSale": "47400",
    "discountPct": "40",
    "status": "판매중",
    "badge": "",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000001158",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000001158/image/main/1000001158_main_02.jpg",
    "extra": {
      "1일_가격": "하루당 878원",
      "남은수량": "1998개",
      "상품_설명": "혈액순환&뼈건강 복합케어"
    }
  },
  {
    "id": "1000000909",
    "name": "고 크릴오일 1,500MG 60캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "98000",
    "priceSale": "49000",
    "discountPct": "50",
    "status": "판매중",
    "badge": "임박",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000909",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000909/image/main/1000000909_main_048.jpg",
    "extra": {
      "1일_가격": "하루당 1,633원",
      "남은수량": "∞개",
      "상품_설명": "풍부한 인지질이 함유되어 있는 남극해 크릴오일 100%"
    }
  },
  {
    "id": "1000000912",
    "name": "고 피쉬오일 1,500MG 420캡슐 [27.05.01까지]",
    "brand": "고헬씨",
    "mainCategory": "브랜드별",
    "subCategory": "고헬씨",
    "priceOriginal": "135000",
    "priceSale": "10000",
    "discountPct": "93",
    "status": "판매중",
    "badge": "임박, 초특가",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000912",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000912/image/main/1000000912_main_05.jpg",
    "extra": {
      "1일_가격": "하루당 643원",
      "남은수량": "500개",
      "상품_설명": "혈행·눈·기억력 4중 기능성 오메가-3"
    }
  },
  {
    "id": "1000000851",
    "name": "릴리프 비건 핸드크림 50ml [27.05.26까지]",
    "brand": "리바이리",
    "mainCategory": "브랜드별",
    "subCategory": "리바이리",
    "priceOriginal": "20000",
    "priceSale": "8000",
    "discountPct": "60",
    "status": "판매중",
    "badge": "특가",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000851",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000851/image/main/1000000851_main_04.jpg",
    "extra": {
      "1일_가격": "",
      "남은수량": "978개",
      "상품_설명": "착 붙는 보습감, 숲향, 비건핸드크림"
    }
  },
  {
    "id": "1000000725",
    "name": "콤부차 배리옴 마일드 포밍 클렌저 120ml [27.06.03까지]",
    "brand": "리바이리",
    "mainCategory": "브랜드별",
    "subCategory": "리바이리",
    "priceOriginal": "24000",
    "priceSale": "9000",
    "discountPct": "63",
    "status": "판매중",
    "badge": "특가",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000725",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000725/image/main/1000000725_main_073.jpg",
    "extra": {
      "1일_가격": "",
      "남은수량": "3689개",
      "상품_설명": "진정세안, 촉촉, 비건클렌저"
    }
  },
  {
    "id": "1000000730",
    "name": "콤부차 배리옴 릴리프 마스크 22ml 5매",
    "brand": "리바이리",
    "mainCategory": "브랜드별",
    "subCategory": "리바이리",
    "priceOriginal": "30000",
    "priceSale": "21000",
    "discountPct": "30",
    "status": "판매중",
    "badge": "",
    "url": "https://www.hyundaiwellness.com/goods/goods_view.php?goodsNo=1000000730",
    "imageUrl": "https://godomall.speedycdn.net/6d2b060d60576fe9f819c1f78b1b5bab/goods/1000000730/image/main/1000000730_main_067.jpg",
    "extra": {
      "1일_가격": "",
      "남은수량": "2992개",
      "상품_설명": "진정보습, 밀착, 비건마스크"
    }
  }
]
};

export const livartData: AffiliateCrawlSummary = {
  affiliateId: 'livart',
  name: '현대리바트',
  totalCount: 1810,
  columnCount: 15,
  columns: ["goodsSn", "상품명", "정가", "판매가", "브랜드", "대분류", "중분류", "배송유형", "배송료", "배송기간", "사다리차_유의사항", "옵션목록", "옵션별가격", "썸네일URL", "상품URL"],
  categories: {
    "키즈/주니어": 418,
    "책상/책장": 370,
    "옷장/드레스룸": 216,
    "식탁": 212,
    "침대/매트리스": 171,
    "소파": 167,
    "거실장/거실테이블": 84,
    "수납장/서랍장": 53,
    "화장대/거울/스툴": 47,
    "마이스터 컬렉션": 37,
    "의자": 35
  },
  brands: {
    "리바트": 1481,
    "리바트키즈": 103,
    "리바트 세계가구": 88,
    "리바트하움": 65,
    "리바트 마이스터 컬렉션": 49,
    "리바트집테리어": 10,
    "리바트오피스": 8,
    "리첸": 5,
    "Magis": 1
  },
  samples: [
  {
    "id": "P200165385",
    "name": "마가리트 3시트 w3310 패브릭 소파(4인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "5280000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200165385",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200165385/GM43266527_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "소프트 샌드 | 프로그피시",
      "옵션별가격": "마가리트 4인 패브릭 소파 자이언트 프로그피시: 5,280,000원 | 마가리트 4인 패브릭 소파 자이언트 소프트 샌드: 5,280,000원"
    }
  },
  {
    "id": "P200165386",
    "name": "아르베(ARBRE) w2140 패브릭 소파(3인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "3290000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200165386",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200165386/GM43241713_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200165387",
    "name": "아르베(ARBRE) 1시트 w1170 패브릭 소파(1인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "1980000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200165387",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200165387/GM43249908_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200165392",
    "name": "베이(Bae) w2110 패브릭 소파(3인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "1740000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200165392",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200165392/GM43255295_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200165393",
    "name": "베이(Bae) 1시트 w1020 패브릭 소파(1인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "924000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200165393",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200165393/GM43256779_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200189253",
    "name": "버밀리온 1시트 w980 패브릭 소파(1인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "1890000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200189253",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200189253/GM43674168_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200189309",
    "name": "프레지던스 w3200 가죽 소파(4인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "10660000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200189309",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200189309/GM43678006_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200191349",
    "name": "미키마우스 1시트 w890 패브릭 소파(1인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "1670000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200191349",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200191349/GM43720616_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "네이비 | 아이보리",
      "옵션별가격": "미키마우스 1인 패브릭 소파 아이보리: 1,670,000원 | 미키마우스 1인 패브릭 소파 네이비: 1,670,000원"
    }
  },
  {
    "id": "P200194552",
    "name": "룬드 원목 스툴",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "화장대/거울/스툴",
    "subCategory": "",
    "priceOriginal": "315000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200194552",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200194552/GM43802619_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200191352",
    "name": "미키마우스 1인 패브릭 소파 리본 쿠션",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "소파",
    "subCategory": "",
    "priceOriginal": "71000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200191352",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200191352/GM43720635_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "네이비 | 아이보리",
      "옵션별가격": "미키마우스 1인 패브릭 소파 리본 쿠션 아이보리: 71,000원 | 미키마우스 1인 패브릭 소파 리본 쿠션 네이비: 71,000원"
    }
  },
  {
    "id": "P200198883",
    "name": "플리츠 2시트 w3000 세미에닐린 가죽 소파 (4인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "6300000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200198883",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200198883/GM43987294_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200198484",
    "name": "세렌 2시트 w3100 패브릭 소파 일반형(4인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "3090000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200198484",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200198484/GM43950868_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200198241",
    "name": "세렌 2시트 w3520 패브릭 소파 카우치형(4인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "마이스터 컬렉션",
    "subCategory": "",
    "priceOriginal": "3480000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200198241",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200198241/GM43942574_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "",
      "옵션별가격": ""
    }
  },
  {
    "id": "P200189315",
    "name": "프레지던스 1시트 w1065 패브릭 소파 Ⅰ 등받이 일체형(1인용)",
    "brand": "리바트 마이스터 컬렉션",
    "mainCategory": "소파",
    "subCategory": "",
    "priceOriginal": "1340000",
    "priceSale": "",
    "url": "https://living.hyundailivart.co.kr/p/P200189315",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200189315/GM43678036_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "그린 (오션 그린) | 베이지 (오션 리지 그레이 샌드)",
      "옵션별가격": "프레지던스 1인 패브릭 소파 Ⅰ 등받이 일체형 베이지: 1,340,000원"
    }
  },
  {
    "id": "P200187605",
    "name": "[클리어런스] 그래비티 3시트 w2805 가죽 소파(4인용)",
    "brand": "리바트",
    "mainCategory": "소파",
    "subCategory": "",
    "priceOriginal": "17410001262500",
    "priceSale": "27",
    "url": "https://living.hyundailivart.co.kr/p/P200187605",
    "imageUrl": "https://static.hyundailivart.co.kr/upload_mall/goods/P200187605/GM43615079_img.jpg?RS=0X250&CS=250X250&AO=1",
    "extra": {
      "배송유형": "현대 리바트 직접배송",
      "배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
      "사다리차_유의사항": "생될 수 있습니다. 내용 더 보기 (사다리차 비용, 엘리베이터 사용료, 지게차 사용료 등 / 입구 협소 등의 이유로 발생) ※ 총 결제금액 300만 원 이상인 경우, 사다리차 필요시 전액 무상 지원됩니다. 엘리베이터나 사다리차 사용이 불가한 현장 상황으로 엔지니어가 직",
      "옵션목록": "샌디베이지(웜그레이) | 카멜",
      "옵션별가격": "그래비티 소파 천연가죽 4인 웜그레이: 1,329,000원 | 그래비티 소파 천연가죽 4인 카멜: 1,329,000원"
    }
  }
]
};
