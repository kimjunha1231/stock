import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
//#region src/lib/crawling-data.ts
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var greenfoodData = {
	affiliateId: "greenfood",
	name: "현대그린푸드",
	totalCount: 735,
	columnCount: 20,
	columns: [
		"수집_순서",
		"대분류",
		"소분류",
		"카테고리_경로",
		"상품_ID",
		"브랜드",
		"상품명",
		"상품_설명",
		"판매상태",
		"상품_배지",
		"할인율_pct",
		"정가_원",
		"판매가_원",
		"배송조건",
		"상품_URL",
		"이미지_URL",
		"목록_페이지",
		"페이지_내_순서",
		"수집일시",
		"출처_URL"
	],
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
	brands: { "현대그린푸드": 735 },
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
var wellnessData = {
	affiliateId: "wellness",
	name: "현대웰니스",
	totalCount: 145,
	columnCount: 22,
	columns: [
		"수집_순서",
		"대분류",
		"브랜드_카테고리",
		"카테고리_경로",
		"상품_ID",
		"브랜드",
		"상품명",
		"상품_설명",
		"판매상태",
		"상품_배지",
		"1일_가격",
		"할인율_pct",
		"정가_원",
		"판매가_원",
		"남은수량",
		"상품_URL",
		"이미지_URL",
		"목록_페이지",
		"페이지번호",
		"페이지_내_순서",
		"수집일시",
		"출처_URL"
	],
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
var livartData = {
	affiliateId: "livart",
	name: "현대리바트",
	totalCount: 1810,
	columnCount: 15,
	columns: [
		"goodsSn",
		"상품명",
		"정가",
		"판매가",
		"브랜드",
		"대분류",
		"중분류",
		"배송유형",
		"배송료",
		"배송기간",
		"사다리차_유의사항",
		"옵션목록",
		"옵션별가격",
		"썸네일URL",
		"상품URL"
	],
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
//#endregion
//#region src/app/crawling-data/crawling-explorer.tsx
var import_jsx_runtime = require_jsx_runtime();
function CrawlingExplorer() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("erd");
	const [selectedAffiliate, setSelectedAffiliate] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const affiliates = [
		greenfoodData,
		wellnessData,
		livartData
	];
	const getFilteredSamples = (data) => {
		if (!searchQuery.trim()) return data.samples;
		const q = searchQuery.toLowerCase();
		return data.samples.filter((s) => s.name.toLowerCase().includes(q) || s.brand.toLowerCase().includes(q) || s.mainCategory.toLowerCase().includes(q) || s.subCategory && s.subCategory.toLowerCase().includes(q) || s.id.toLowerCase().includes(q));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "crawling-explorer",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "filter-row",
				style: {
					marginBottom: "24px",
					justifyContent: "center"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `filter-button ${activeTab === "erd" ? "active" : ""}`,
						onClick: () => setActiveTab("erd"),
						style: {
							padding: "10px 20px",
							fontSize: "13px",
							fontWeight: 700
						},
						children: "📐 추천 데이터베이스 구조 (ERD 설계)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `filter-button ${activeTab === "mapping" ? "active" : ""}`,
						onClick: () => setActiveTab("mapping"),
						style: {
							padding: "10px 20px",
							fontSize: "13px",
							fontWeight: 700
						},
						children: "🔄 수집 데이터 ➔ DB 항목 대응표 (매핑)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `filter-button ${activeTab === "data" ? "active" : ""}`,
						onClick: () => setActiveTab("data"),
						style: {
							padding: "10px 20px",
							fontSize: "13px",
							fontWeight: 700
						},
						children: "📊 3개 계열사 크롤링 수집 원본 (2,690건)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `filter-button ${activeTab === "docs" ? "active" : ""}`,
						onClick: () => setActiveTab("docs"),
						style: {
							padding: "10px 20px",
							fontSize: "13px",
							fontWeight: 700
						},
						children: "📑 재고 관리 정책 & 규칙 연계"
					})
				]
			}),
			activeTab === "erd" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "callout",
					style: {
						marginBottom: "28px",
						background: "#eff6ff",
						borderColor: "#bfdbfe"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
						style: {
							fontSize: "16px",
							color: "#1e40af"
						},
						children: "💡 InventoryOS 통합 데이터베이스 설계 방향"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: "8px",
							color: "#334155",
							lineHeight: 1.65
						},
						children: [
							"현대백화점그룹 3개 계열사(현대그린푸드·현대웰니스·현대리바트)의 서로 다른 상품 및 재고 정보를 하나의 시스템에서 효율적으로 다루기 위한",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "단일 스키마 다중 테넌트 구조 (Single Schema Multi-Tenant)" }),
							"입니다.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"모든 계열사가 함께 쓰는 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "공통 핵심 테이블 6개" }),
							"를 중심으로 구성하고, 각 계열사만의 고유 정보(식단 패키지, 건강기능식품 섭취법/1일가격, 가구 크기/설치비)는",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "계열사 전용 확장 테이블 (Extension Table)" }),
							"로 연결해 확장성과 유지보수성을 극대화했습니다."
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					style: {
						fontSize: "18px",
						marginBottom: "16px",
						display: "flex",
						alignItems: "center",
						gap: "8px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏢 공통 핵심 테이블 (Core Tables)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "12px",
							color: "var(--muted)",
							fontWeight: 400
						},
						children: "- 3개 계열사가 공통으로 사용하는 기본 데이터 구조"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
						gap: "20px",
						marginBottom: "36px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#ffffff",
								borderColor: "#cbd5e1"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "12px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											background: "#dbeafe",
											color: "#1e40af",
											fontSize: "11px"
										},
										children: "1. 계열사 정보 (affiliate)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키(PK): 계열사 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "현대웰니스, 현대리바트, 현대그린푸드 각 계열사의 기본 정보"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f8fafc",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.7,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "#1e40af" },
												children: "affiliate_id"
											}),
											" (문자형, 기본키) - 계열사 식별 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "name" }),
											" (문자형) - 계열사명 (현대그린푸드 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "code" }),
											" (문자형) - 식별 코드 (GREENFOOD / WELLNESS / LIVART)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "created_at" }),
											" (일시) - 등록 일시"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#ffffff",
								borderColor: "#cbd5e1"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "12px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											background: "#dbeafe",
											color: "#1e40af",
											fontSize: "11px"
										},
										children: "2. 브랜드 정보 (brand)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 브랜드 ID | 외래키: 계열사 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "솔가, 고헬씨, 리바트키즈, 그리팅 등 상품 브랜드 마스터"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f8fafc",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.7,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "#1e40af" },
												children: "brand_id"
											}),
											" (정수형, 기본키) - 브랜드 식별 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "affiliate_id" }),
											" (문자형, 외래키) - 소속 계열사 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_name" }),
											" (문자형) - 브랜드 이름 (리바트 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_category" }),
											" (문자형) - 브랜드 분류"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#ffffff",
								borderColor: "#cbd5e1"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "12px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											background: "#dbeafe",
											color: "#1e40af",
											fontSize: "11px"
										},
										children: "3. 카테고리 (category)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 카테고리 ID | 외래키: 상위 카테고리 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "대분류 - 중분류 - 소분류 계층형 카테고리 구조"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f8fafc",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.7,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "#1e40af" },
												children: "category_id"
											}),
											" (정수형, 기본키) - 카테고리 식별 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "parent_id" }),
											" (정수형, 외래키) - 상위 카테고리 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "affiliate_id" }),
											" (문자형, 외래키) - 계열사 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "name" }),
											" (문자형) - 카테고리명 (소파, 식재료 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "category_depth" }),
											" (정수형) - 카테고리 단계 (1:대, 2:중, 3:소)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "full_path" }),
											" (문자형) - 전체 경로 (건강마켓 > 간편식단)"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#ffffff",
								borderColor: "#2563eb",
								borderWidth: "2px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "12px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											background: "#2563eb",
											color: "#ffffff",
											fontSize: "11px"
										},
										children: "4. 통합 상품 마스터 (product) ★"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 상품 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "3개 계열사의 모든 상품이 통합 저장되는 메인 테이블"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f8fafc",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.7,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "#2563eb" },
												children: "product_id"
											}),
											" (정수형, 기본키) - 시스템 통합 상품 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "affiliate_id" }),
											" (문자형, 외래키) - 소속 계열사 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "external_item_id" }),
											" (문자형) - 원출처 상품코드 (itemId / goodsNo / goodsSn)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_id" }),
											" (정수형, 외래키) - 브랜드 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "category_id" }),
											" (정수형, 외래키) - 카테고리 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_name" }),
											" (문자형) - 상품 이름"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "description" }),
											" (긴 텍스트) - 상품 설명 / 특징"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "status" }),
											" (문자형) - 판매 상태 (판매 중 / 일시 품절 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "badge" }),
											" (문자형) - 상품 배지 (소비기한 임박 / 냉동 / 클리어런스)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_url" }),
											" (문자형) - 상품 상세페이지 링크"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "image_url" }),
											" (문자형) - 대표 이미지 링크"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "created_at" }),
											" (일시) - 데이터 수집/생성 일시"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#ffffff",
								borderColor: "#cbd5e1"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "12px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											background: "#dbeafe",
											color: "#1e40af",
											fontSize: "11px"
										},
										children: "5. 가격 및 할인 정보 (pricing)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 가격 ID | 외래키: 상품 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "정가, 판매가, 할인율 및 1일 단위 섭취 가격 변동 관리"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f8fafc",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.7,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "#1e40af" },
												children: "pricing_id"
											}),
											" (정수형, 기본키) - 가격 기록 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_id" }),
											" (정수형, 외래키) - 상품 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "original_price" }),
											" (금액/숫자형) - 정가 (원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "selling_price" }),
											" (금액/숫자형) - 실판매가 (원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "discount_pct" }),
											" (숫자형) - 할인율 (%)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "daily_price_text" }),
											" (문자형) - 1일 가격 (예: 하루당 450원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "is_active" }),
											" (논리형) - 현재 적용 중인 가격 여부"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "updated_at" }),
											" (일시) - 가격 변경 일시"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#ffffff",
								borderColor: "#10b981",
								borderWidth: "2px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
										marginBottom: "12px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											background: "#10b981",
											color: "#ffffff",
											fontSize: "11px"
										},
										children: "6. 재고 및 소비기한 (inventory) ★"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 재고 ID | 외래키: 상품 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "재고 수량, 소비기한, 보관조건 및 위험재고 등급 관리"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f8fafc",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.7,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												style: { color: "#10b981" },
												children: "inventory_id"
											}),
											" (정수형, 기본키) - 재고 기록 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_id" }),
											" (정수형, 외래키) - 상품 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "stock_qty" }),
											" (정수형) - 현재 총 재고 수량"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "remaining_qty" }),
											" (정수형) - 한정 수량 / 남은 수량 (웰니스)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "storage_condition" }),
											" (문자형) - 보관 조건 (냉동 / 냉장 / 상온)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "expiry_date" }),
											" (날짜) - 소비기한 / 유통기한 날짜"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "d_day" }),
											" (정수형) - 소비기한 잔여 일수 (D-Day)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "risk_grade" }),
											" (문자형) - 위험 등급 (정상 / 주의 / 위험)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "updated_at" }),
											" (일시) - 재고 갱신 일시"
										] })
									]
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					style: {
						fontSize: "18px",
						marginBottom: "16px",
						display: "flex",
						alignItems: "center",
						gap: "8px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧬 계열사별 전용 확장 테이블 (Extension Tables)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "12px",
							color: "var(--muted)",
							fontWeight: 400
						},
						children: "- 각 계열사의 특수한 상품 정보를 보완하는 전용 스키마"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "grid",
						gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
						gap: "20px",
						marginBottom: "32px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#f0fdf4",
								borderColor: "#86efac"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										color: "#166534",
										fontSize: "14px"
									},
									children: "🥗 greenfood_meal_plan (현대그린푸드 케어식단 특화)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "11px",
										color: "#15803d",
										margin: "6px 0 10px"
									},
									children: "식단 유형, 5일/7일 패키지 구성, 영양성분 정보"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										color: "#166534",
										lineHeight: 1.7
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_id" }),
											" (기본키 / 외래키 ➔ product)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "meal_type" }),
											" (문자형) - 식단 종류 (고혈압 / 당뇨 / 저속식단)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "package_days" }),
											" (정수형) - 패키지 구성 일수 (5일 / 7일)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "is_frozen" }),
											" (논리형) - 냉동 보관 식단 여부"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "nutrition_summary" }),
											" (문자형) - 주요 영양성분 요약"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#fefce8",
								borderColor: "#fde047"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										color: "#854d0e",
										fontSize: "14px"
									},
									children: "💊 wellness_product_detail (현대웰니스 건강기능식품 특화)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "11px",
										color: "#a16207",
										margin: "6px 0 10px"
									},
									children: "캡슐 수, 1일 섭취 원가, 유통기한 임박 표시"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										color: "#854d0e",
										lineHeight: 1.7
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_id" }),
											" (기본키 / 외래키 ➔ product)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "capsule_count" }),
											" (정수형) - 총 용량/캡슐 수 (60캡슐 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "daily_price_amount" }),
											" (금액) - 1일 섭취 원가 수치 (450원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "is_expiring_soon" }),
											" (논리형) - 소비기한 임박 여부 (예/아니오)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "expiry_note" }),
											" (문자형) - 유통기한 표기 (27.05.01까지 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "functional_claim" }),
											" (긴 텍스트) - 식약처 인증 기능성 내용"
										] })
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "term-entry",
							style: {
								background: "#eff6ff",
								borderColor: "#93c5fd"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										color: "#1e40af",
										fontSize: "14px"
									},
									children: "🛋️ livart_furniture_spec (현대리바트 가구 규격 특화)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "11px",
										color: "#1d4ed8",
										margin: "6px 0 10px"
									},
									children: "가구 가로 크기, 소재, 사용 인원수, 전문 설치 필요 여부"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "11px",
										fontFamily: "monospace",
										color: "#1e40af",
										lineHeight: 1.7
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_id" }),
											" (기본키 / 외래키 ➔ product)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "width_mm" }),
											" (정수형) - 가로 크기 (mm 단위, 예: 3310mm)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "capacity_person" }),
											" (정수형) - 사용 인원 (4인용, 3인용 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "material_type" }),
											" (문자형) - 주요 소재 (패브릭 / 가죽 / 원목)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "requires_installation" }),
											" (논리형) - 전문 기사 설치 필요 여부"
										] })
									]
								})
							]
						})
					]
				})
			] }),
			activeTab === "mapping" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "callout",
				style: { marginBottom: "20px" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					style: { fontSize: "15px" },
					children: "🔄 원본 크롤링 항목 ➔ 데이터베이스(DB) 매핑 상세표"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						marginTop: "6px",
						fontSize: "12px"
					},
					children: "수집된 51개 원본 컬럼이 9개 정규화 DB 테이블 및 3개 특화 확장 테이블로 변환되는 표준 매핑 명세입니다."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: {
					overflowX: "auto",
					borderRadius: "12px",
					border: "1px solid var(--line)",
					background: "var(--white)"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					style: {
						width: "100%",
						borderCollapse: "collapse",
						fontSize: "12px",
						textAlign: "left"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						style: {
							background: "#f8fafc",
							borderBottom: "1px solid var(--line)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "출처 계열사"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "원본 컬럼명"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "수집 샘플 값"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "저장 대상 DB 테이블"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "저장 대상 DB 필드명"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "권장 데이터 타입"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "설명 & 변환 처리 규칙"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#16a34a"
									},
									children: "현대그린푸드"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "상품_ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "175695"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "product (통합 상품)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "external_item_id"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "문자형 VARCHAR(64)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "그린푸드 공식 몰 고유 상품 번호 (itemId)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#16a34a"
									},
									children: "현대그린푸드"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "대분류 / 소분류"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "간편식단 / 고혈압식단"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "category (카테고리)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "category_id"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "정수형 BIGINT (외래키)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "계층형 카테고리 트리에 자동 매핑 생성"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#16a34a"
									},
									children: "현대그린푸드"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "정가_원 / 판매가_원"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "10,500원"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "pricing (가격 정보)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "original_price / selling_price"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "금액형 DECIMAL(12,2)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "숫자 변환 및 할인율 자동 산출 파이프라인"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#16a34a"
									},
									children: "현대그린푸드"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "상품_배지"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "냉동 | 고단백"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "inventory / greenfood_ext"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "storage_condition / is_frozen"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "문자형 / 불리언(논리형)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "냉동 보관 조건 파싱 (상온 대비 보관비 가중치 부여)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#d97706"
									},
									children: "현대웰니스"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "상품_ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "1000000904"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "product (통합 상품)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "external_item_id"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "문자형 VARCHAR(64)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "고도몰 원천 상품 번호 (goodsNo)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#d97706"
									},
									children: "현대웰니스"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "남은수량"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "32개"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "inventory (재고)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "remaining_qty"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "정수형 INT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "'32개' ➔ 32 정수 파싱 (재고 위험도 계산 입력)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#d97706"
									},
									children: "현대웰니스"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "1일_가격"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "하루당 450원"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "wellness_ext (웰니스 특화)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "daily_price_amount"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "금액형 DECIMAL(10,2)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "1일 섭취 단가 수치 파싱 (고객 마케팅 시뮬레이션용)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#d97706"
									},
									children: "현대웰니스"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "상품_배지 (임박)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "임박 [27.05.01까지]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "inventory / wellness_ext"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "expiry_date / is_expiring_soon"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "날짜 DATE / 불리언(논리형)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "소비기한 날짜(2027-05-01) 파싱 ➔ D-Day 계산 및 차단 정책 연동"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#2563eb"
									},
									children: "현대리바트"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "goodsSn"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "P200165385"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "product (통합 상품)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "external_item_id"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "문자형 VARCHAR(64)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "리바트몰 공식 goodsSn 코드"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#2563eb"
									},
									children: "현대리바트"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "상품명 규격 파싱"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "w3310 패브릭 소파(4인용)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "livart_ext (리바트 특화)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "width_mm / material / capacity"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "정수형 / 문자형 / 정수형"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "상품명에서 가로 크기(3310mm), 소재(패브릭), 인용수(4인용) 추출 정규화"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: { borderBottom: "1px solid #f1f5f9" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 700,
										color: "#2563eb"
									},
									children: "현대리바트"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "대분류 / 중분류"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "소파 / 패브릭소파"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "category (카테고리)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "category_id"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "정수형 BIGINT (외래키)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "리바트 가구 카테고리 계층 매핑"
								})
							]
						})
					] })]
				})
			})] }),
			activeTab === "data" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "flex",
					gap: "12px",
					marginBottom: "20px",
					flexWrap: "wrap",
					alignItems: "center"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						display: "flex",
						gap: "6px"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `filter-button ${selectedAffiliate === "all" ? "active" : ""}`,
							onClick: () => setSelectedAffiliate("all"),
							children: "전체 계열사 (2,690건)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `filter-button ${selectedAffiliate === "greenfood" ? "active" : ""}`,
							onClick: () => setSelectedAffiliate("greenfood"),
							children: "🥗 현대그린푸드 (735건)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `filter-button ${selectedAffiliate === "wellness" ? "active" : ""}`,
							onClick: () => setSelectedAffiliate("wellness"),
							children: "💊 현대웰니스 (145건)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: `filter-button ${selectedAffiliate === "livart" ? "active" : ""}`,
							onClick: () => setSelectedAffiliate("livart"),
							children: "🛋️ 현대리바트 (1,810건)"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "text",
					className: "search-box",
					placeholder: "상품명, 브랜드, 카테고리, 상품ID로 검색...",
					value: searchQuery,
					onChange: (e) => setSearchQuery(e.target.value),
					style: {
						maxWidth: "320px",
						margin: 0
					}
				})]
			}), affiliates.filter((a) => selectedAffiliate === "all" || selectedAffiliate === a.affiliateId).map((aff) => {
				const samples = getFilteredSamples(aff);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "term-entry",
					style: {
						marginBottom: "28px",
						background: "var(--white)"
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "16px",
								borderBottom: "1px solid var(--line)",
								paddingBottom: "12px"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								style: {
									fontSize: "20px",
									margin: 0,
									display: "flex",
									alignItems: "center",
									gap: "8px"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: aff.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "pill",
										children: [aff.totalCount.toLocaleString(), "개 수집"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "source-note",
										style: { margin: 0 },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "source-kind",
												children: "컬럼"
											}),
											" ",
											aff.columnCount,
											"개 필드"
										]
									})
								]
							}) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: { marginBottom: "16px" },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									fontSize: "11px",
									fontWeight: 800,
									color: "var(--muted)",
									marginBottom: "6px"
								},
								children: [
									"수집 원본 컬럼 구조 (",
									aff.columns.length,
									"개):"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									display: "flex",
									flexWrap: "wrap",
									gap: "6px"
								},
								children: aff.columns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: {
										padding: "4px 8px",
										background: "#f1f5f9",
										border: "1px solid #e2e8f0",
										borderRadius: "6px",
										fontSize: "11px",
										fontFamily: "ui-monospace, monospace",
										color: "#334155"
									},
									children: col
								}, col))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								overflowX: "auto",
								borderRadius: "12px",
								border: "1px solid var(--line)"
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: "12px",
									textAlign: "left"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										background: "#f8fafc",
										borderBottom: "1px solid var(--line)"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "상품ID"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "상품명"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "브랜드"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "카테고리 (대 / 소)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "정가 / 판매가"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "상태 / 배지"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px 12px" },
											children: "특수속성"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: samples.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 7,
									style: {
										padding: "20px",
										textAlign: "center",
										color: "var(--muted)"
									},
									children: "검색 결과가 없습니다."
								}) }) : samples.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid #f1f5f9" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px 12px",
												fontFamily: "ui-monospace, monospace",
												fontWeight: 700,
												color: "var(--blue)"
											},
											children: s.id
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px 12px",
												fontWeight: 600,
												maxWidth: "240px"
											},
											children: s.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
												href: s.url,
												target: "_blank",
												rel: "noreferrer",
												style: {
													color: "inherit",
													textDecoration: "underline"
												},
												children: s.name
											}) : s.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px 12px",
												color: "#475569"
											},
											children: s.brand || "-"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											style: { padding: "10px 12px" },
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: { fontWeight: 600 },
												children: s.mainCategory
											}), s.subCategory && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: {
													color: "var(--muted)",
													fontSize: "11px"
												},
												children: [" > ", s.subCategory]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											style: { padding: "10px 12px" },
											children: [s.priceOriginal && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													textDecoration: s.priceSale ? "line-through" : "none",
													color: "var(--muted)",
													fontSize: "11px"
												},
												children: [parseInt(s.priceOriginal).toLocaleString(), "원"]
											}), s.priceSale ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												style: {
													fontWeight: 700,
													color: "#059669"
												},
												children: [
													parseInt(s.priceSale).toLocaleString(),
													"원",
													s.discountPct && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														style: {
															color: "#dc2626",
															marginLeft: "4px",
															fontSize: "11px"
														},
														children: [
															"(",
															s.discountPct,
															"%)"
														]
													})
												]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												style: { color: "var(--muted)" },
												children: "-"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											style: { padding: "10px 12px" },
											children: [s.status && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													padding: "2px 6px",
													borderRadius: "4px",
													background: "#e0f2fe",
													color: "#0369a1",
													fontSize: "10px",
													marginRight: "4px"
												},
												children: s.status
											}), s.badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												style: {
													padding: "2px 6px",
													borderRadius: "4px",
													background: "#fef3c7",
													color: "#b45309",
													fontSize: "10px"
												},
												children: s.badge
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px 12px",
												fontSize: "11px",
												color: "var(--muted)"
											},
											children: s.extra ? Object.entries(s.extra).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", { children: [k, ":"] }),
												" ",
												v
											] }, k)) : "-"
										})
									]
								}, s.id)) })]
							})
						})
					]
				}, aff.affiliateId);
			})] }),
			activeTab === "docs" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "callout",
				style: { marginBottom: "24px" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					style: { fontSize: "16px" },
					children: "📑 InventoryOS 시스템 설계 문서 (`docs/*.md`) 연결 및 분석"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: { marginTop: "6px" },
					children: [
						"크롤링으로 수집한 3개 계열사의 2,690개 상품 데이터가 ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "프로젝트 설계서와 의사결정 정책" }),
						"에 어떻게 반영되는지 검증한 결과입니다."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: "20px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-entry",
						style: { background: "#ffffff" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "16px",
								margin: "0 0 10px",
								color: "var(--blue-dark)"
							},
							children: "1. `decision-policy.md` (손익 & 하드 차단 정책 연계)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.6,
								color: "var(--muted)"
							},
							children: [
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "현대웰니스 [소비기한 임박] 배지:" }),
								" 크롤링 데이터의 `상품_배지: 임박` 및 `[27.05.01까지]` 속성은 소비기한 잔여일(D-Day)을 산출하여 D-14 이내 진입 시 ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "하드 차단(Hard Stop)" }),
								" 규칙 및 긴급 프로모션/기부 시나리오로 자동 라우팅됩니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "현대그린푸드 [냉동 보관] 배지:" }),
								" `상품_배지: 냉동` 항목은 일반 상온 보관비 대비 3.2배 높은 보관비용(Holding Cost) 파라미터를 적용하여 회피비용(Avoided Cost) 산출 시 가중치를 부여합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "현대리바트 가구 [설치/배송]:" }),
								" 가구 특성상 단순 할인이 아닌 배송·설치비 및 반품 리스크 비용이 크므로 기여현금이익(Contribution Cash Margin) 계산 시 배송비용 모델을 결합합니다."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-entry",
						style: { background: "#ffffff" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "16px",
								margin: "0 0 10px",
								color: "var(--blue-dark)"
							},
							children: "2. `ai-model-data-blueprint.md` (AI 수요예측 및 위험엔진 연계)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.6,
								color: "var(--muted)"
							},
							children: [
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "위험재고 탐지 (AI-03):" }),
								" 크롤링된 `남은수량` (웰니스) 및 카테고리별 평균 판매속도(ROS)를 결합하여 소진 예상일(WOS: Weeks of Supply)을 계산합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "트렌드 신호 감지 (AI-01):" }),
								" 외부 Google Trends 및 SNS 언급 지수를 계열사별 카테고리(예: '고혈압식단', '초록입홍합', '패브릭소파')와 매핑하여 트렌드 부스트 피처로 입력합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "결정론적 손익 시뮬레이터 (AI-04):" }),
								" 정가와 판매가의 할인율(`할인율_pct`)을 수식 엔진의 기본 시나리오로 세팅하고, 보수-기본-낙관 3단계 시뮬레이션을 생성합니다."
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-entry",
						style: { background: "#ffffff" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "16px",
								margin: "0 0 10px",
								color: "var(--blue-dark)"
							},
							children: "3. `architecture-and-tech-stack.md` (DB & 인프라 연계)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								fontSize: "13px",
								lineHeight: 1.6,
								color: "var(--muted)"
							},
							children: [
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Oracle RDBMS + Flyway:" }),
								" 매핑표에 정의된 12개 테이블을 버전 관리하여 배치 동기화 시 멱등성을 보장합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Redis 캐싱 레이어:" }),
								" 2,690개 상품의 위험도 계산 결과 및 일일 판매속도를 Redis Hash로 캐싱하여 프론트엔드 대시보드 조회의 응답속도를 50ms 이내로 보장합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Spring Batch 수집 이력:" }),
								" `crawl_log` 테이블을 통해 일일 수집 성공률, 미수집 항목, 가격 변동 트래킹을 자동 수행합니다."
							]
						})]
					})
				]
			})] })
		]
	});
}
//#endregion
export { CrawlingExplorer };
