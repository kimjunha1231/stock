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
	columnCount: 19,
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
		"사다리차_비용규정",
		"직접운반_규정",
		"현장설치_추가작업비",
		"교환반품_배송비",
		"교환반품_신청기간_조건",
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": "소프트 샌드 | 프로그피시"
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": "네이비 | 아이보리"
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "더유닛/모듈 소파 추가 연결 시 끝쪽 1.6만원 / 중간 일반형 2.2만원 / 리클라이너형 2.7만원 현장 작업비",
				"교환반품_배송비": "38,000원 (1인/오토만) ~ 76,000원 (4인 이상 소파)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": "네이비 | 아이보리"
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "기존 상품에 추가 연결/설치 시 현장 작업비용 별도 발생",
				"교환반품_배송비": "14,040원 (티테이블/소가구) ~ 38,000원 (중형 가구)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": ""
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "더유닛/모듈 소파 추가 연결 시 끝쪽 1.6만원 / 중간 일반형 2.2만원 / 리클라이너형 2.7만원 현장 작업비",
				"교환반품_배송비": "38,000원 (1인/오토만) ~ 76,000원 (4인 이상 소파)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": "그린 (오션 그린) | 베이지 (오션 리지 그레이 샌드)"
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
				"배송료": "기본 배송비: 무료 제주 지역 배송비 안내: 제주도민-무료/ 제주도민이 아닌 고객이 제주도로 배송 요청시: 배송비가 결제 금액에 따라 부과 상세 배송비는 결제 화면에서 확인하실 수 있습니다.",
				"배송기간": "설치제품, 가구제품: 배송기간은 주문 후 4~5일 정도 소요 됩니다. 결제 후 SMS, 알림톡 또는 유선을 통해",
				"사다리차_비용규정": "300만원 이상 구매 시 100% 본사 지원 (5층 이하) / 200만~300만원 미만 일부 부담 / 200만원 미만 고객 전액 부담 (단품 5만원) / 6층 이상 전액 과금",
				"직접운반_규정": "엘리베이터/사다리차 불가 시 2~5층 수동 계단 운반 추가비 발생 (6층 이상 수동 운반 불가)",
				"현장설치_추가작업비": "더유닛/모듈 소파 추가 연결 시 끝쪽 1.6만원 / 중간 일반형 2.2만원 / 리클라이너형 2.7만원 현장 작업비",
				"교환반품_배송비": "38,000원 (1인/오토만) ~ 76,000원 (4인 이상 소파)",
				"교환반품_신청기간_조건": "공정위 규정 수령일 익일부터 7일 이내 / 가구 특성상 조립 후 반품 불가 (제품 하자 시 예외 가능)",
				"옵션목록": "샌디베이지(웜그레이) | 카멜"
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
						children: "🏛️ 1개 통합 시스템 DB (InventoryOS)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `filter-button ${activeTab === "external" ? "active" : ""}`,
						onClick: () => setActiveTab("external"),
						style: {
							padding: "10px 20px",
							fontSize: "13px",
							fontWeight: 700
						},
						children: "📡 3개 외부 계열사 DB 구조"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: `filter-button ${activeTab === "mapping" ? "active" : ""}`,
						onClick: () => setActiveTab("mapping"),
						style: {
							padding: "10px 20px",
							fontSize: "13px",
							fontWeight: 700
						},
						children: "🔄 외부 DB ➔ 통합 DB 연동 매핑표"
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
						children: "📑 시스템 정책 문서 연계"
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
						children: "💡 3개 외부 DB 수집 ➔ 1개 통합 시스템 DB (InventoryOS) 아키텍처"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						style: {
							marginTop: "8px",
							color: "#334155",
							lineHeight: 1.65
						},
						children: [
							"현대백화점그룹 3개 외부 계열사 DB(현대그린푸드·현대웰니스·현대리바트)의 이종 데이터 원장을 정기 동기화(ETL/Sync)하여",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "1개의 통합 시스템 DB(Single Schema Multi-Tenant)" }),
							"에 수집·정규화합니다.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"모든 계열사가 공유하는 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "6개 공통 코어 마스터 테이블" }),
							"과, 각 계열사의 독자적 비즈니스 속성을 수용하는 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3개 전용 확장 테이블(Extension Table)" }),
							"로 구성됩니다."
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🏢 공통 코어 마스터 테이블 (Core Master Tables)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "12px",
							color: "var(--muted)",
							fontWeight: 400
						},
						children: "- 3개 계열사 데이터가 통합 정규화되는 마스터 DB"
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
										children: "1. 계열사 마스터 (affiliate)"
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
									children: "현대웰니스, 현대리바트, 현대그린푸드 각 계열사 식별 마스터"
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
											" (문자형, 기본키) - 계열사 코드 (`GREENFOOD`, `WELLNESS`, `LIVART`)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "name" }),
											" (문자형) - 계열사명 (현대그린푸드, 현대웰니스, 현대리바트)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "code" }),
											" (문자형) - 시스템 식별 코드"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "created_at" }),
											" (일시) - 시스템 등록 일시"
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
										children: "2. 브랜드 마스터 (brand)"
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
									children: "솔가, 고헬씨, 리바트, 그리팅 등 계열사별 브랜드 통합 관리"
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
											" (문자형) - 브랜드 이름 (리바트, 솔가 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_category" }),
											" (문자형) - 브랜드 카테고리"
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
										children: "기본키: 카테고리 ID | 자가외래키: 상위 카테고리 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "대분류 - 중분류 - 소분류 통합 계층형 카테고리 구조"
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
											" (정수형, 자가외래키) - 상위 카테고리 ID (NULL 가능)"
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
									children: "3개 외부 DB의 모든 상품이 매핑되는 통합 마스터 테이블"
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
											" (정수형, 기본키) - 시스템 내부 통합 상품 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "affiliate_id" }),
											" (문자형, 외래키) - 출처 계열사 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "external_item_id" }),
											" (문자형) - 외부 DB 원천 식별자 (`itemId` / `goodsNo` / `goodsSn`)"
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
											" (문자형) - 표준 상품명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "status" }),
											" (문자형) - 판매 상태 (판매 중 / 일시 품절 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "badge" }),
											" (문자형) - 배지 (소비기한 임박 / 냉동 / 클리어런스)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_url" }),
											" (문자형) - 원천 상품 상세페이지 URL"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "image_url" }),
											" (문자형) - 대표 썸네일 이미지 URL"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "created_at / updated_at" }),
											" (일시) - 생성 및 최근 동기화 일시"
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
										children: "5. 가격 및 할인 이력 (pricing)"
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
									children: "정가, 판매가, 할인율 및 1일 섭취 가격 변동 관리"
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
											" (정수형, 외래키) - 통합 상품 ID"
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
											" (논리형) - 현재 적용 중인 최신 가격 여부 (TRUE: 현재가, FALSE: 과거 이력)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "updated_at" }),
											" (일시) - 가격 갱신 일시"
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
										children: "6. 통합 재고 & 소비기한 (inventory) ★"
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
									children: "재고 수량, 남은수량, 소비기한 및 AI 위험 등급 관리"
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
											" (정수형, 외래키) - 통합 상품 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "stock_qty" }),
											" (정수형) - 현재 총 재고 수량"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "remaining_qty" }),
											" (정수형) - 남은 한정 수량 (웰니스)"
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
											" (문자형) - AI 위험 등급 (`NORMAL` / `WARNING` / `DANGER`)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "updated_at" }),
											" (일시) - 재고 동기화 일시"
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
										children: "7. 배송 & 물류 규정 (delivery_info)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 배송 ID | 외래키: 상품 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "배송유형, 배송비, 리드타임 및 반품 규정 통합 관리"
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
												children: "delivery_id"
											}),
											" (정수형, 기본키) - 배송 설정 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_id" }),
											" (정수형, 외래키) - 통합 상품 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delivery_type" }),
											" (문자형) - 배송 방식 (직접배송 / 택배 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delivery_fee_text" }),
											" (문자형) - 기본 배송비 안내"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delivery_period_text" }),
											" (문자형) - 배송 소요기간 (주문 후 4~5일)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "return_fee_text" }),
											" (문자형) - 반품/교환 배송비 (105,200원 / 38,000원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "return_condition_text" }),
											" (문자형) - 조립 후 반품 불가 조건"
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
										children: "8. 동기화 원장 (sync_log)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										style: {
											fontSize: "11px",
											color: "var(--muted)",
											fontFamily: "monospace"
										},
										children: "기본키: 동기화 ID | 외래키: 계열사 ID"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "12px",
										color: "var(--muted)",
										marginBottom: "12px"
									},
									children: "외부 3개 DB ➔ 통합 DB 연동 수집 처리 이력 원장"
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
												children: "sync_id"
											}),
											" (정수형, 기본키) - 동기화 세션 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "affiliate_id" }),
											" (문자형, 외래키) - 대상 계열사 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sync_type" }),
											" (문자형) - 동기화 방식 (BATCH / REALTIME)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "records_synced" }),
											" (정수형) - 동기화 처리 건수"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "status" }),
											" (문자형) - 성공/실패 상태 (SUCCESS / FAILED)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "synced_at" }),
											" (일시) - 동기화 완료 일시"
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🧬 계열사별 전용 확장 테이블 (Affiliate Extension Tables)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: {
							fontSize: "12px",
							color: "var(--muted)",
							fontWeight: 400
						},
						children: "- 각 계열사의 독자적 비즈니스 속성을 분리 저장하는 확장 스키마"
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
									children: "🥗 greenfood_meal_ext (현대그린푸드 케어식단 확장)"
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
									children: "💊 wellness_health_ext (현대웰니스 건강기능식품 확장)"
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
									children: "🛋️ livart_furniture_ext (현대리바트 가구 규격 & CS 규정 확장)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									style: {
										fontSize: "11px",
										color: "#1d4ed8",
										margin: "6px 0 10px"
									},
									children: "가구 규격, 사다리차 본사지원/과금, 수동운반 및 추가작업비"
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
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ladder_car_policy" }),
											" (긴 텍스트) - 사다리차 본사지원/과금 규정 (300만 이상 100% 지원 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "manual_transport_policy" }),
											" (긴 텍스트) - 수동 계단운반 규정 (2~5층 가능, 6층 이상 불가)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "on_site_extra_fee" }),
											" (긴 텍스트) - 현장 추가 작업비 (옷장 3.5만~8만, 소파 1.6만~2.7만)"
										] })
									]
								})
							]
						})
					]
				})
			] }),
			activeTab === "external" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "callout",
				style: {
					marginBottom: "24px",
					background: "#f8fafc",
					borderColor: "#cbd5e1"
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					style: {
						fontSize: "16px",
						color: "#334155"
					},
					children: "📡 3개 외부 계열사 자체 DB 스키마 구조 (External Affiliate DBs)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					style: {
						marginTop: "6px",
						color: "#64748b",
						fontSize: "13px",
						lineHeight: 1.6
					},
					children: [
						"현대그린푸드, 현대웰니스, 현대리바트는 각자 독립된 개별 DB 및 E-Commerce 시스템을 운영 중입니다.",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"InventoryOS는 각 외부 DB의 원천 스키마 항목을 주기적으로 동기화(Batch & API)하여 통합 DB로 정규화합니다."
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: {
					display: "grid",
					gap: "24px"
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-entry",
						style: {
							background: "#ffffff",
							borderColor: "#86efac"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "12px"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								style: {
									margin: 0,
									fontSize: "16px",
									color: "#166534",
									display: "flex",
									alignItems: "center",
									gap: "8px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🥗 1. 현대그린푸드 외부 DB 구조 (External Greenfood DB)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pill",
									style: {
										background: "#dcfce7",
										color: "#15803d"
									},
									children: "20개 수집 항목"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontSize: "11px",
									color: "var(--muted)"
								},
								children: "식재료 / 케어식단 / 신선식품 원장 DB"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
								gap: "12px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f0fdf4",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#166534",
												display: "block",
												marginBottom: "6px"
											},
											children: "gf_item_master (상품 마스터 테이블)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_id" }),
											" (기본키) - 상품 고유 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_name" }),
											" - 상품명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_name" }),
											" - 브랜드 이름"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "main_cate_name" }),
											" - 대분류 카테고리명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sub_cate_name" }),
											" - 소분류 카테고리명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ctgry_path" }),
											" - 카테고리 전체 경로"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_desc" }),
											" - 상품 상세 설명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sale_status" }),
											" - 판매 상태 (판매 중)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_badge" }),
											" - 특성 배지 (냉동 / 고단백)"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f0fdf4",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#166534",
												display: "block",
												marginBottom: "6px"
											},
											children: "gf_item_price (가격 테이블)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_id" }),
											" (외래키) - 상품 고유 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "original_price" }),
											" - 정가 (원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "selling_price" }),
											" - 실 판매가 (원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "discount_rate" }),
											" - 할인율 (%)"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f0fdf4",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#166534",
												display: "block",
												marginBottom: "6px"
											},
											children: "gf_meal_detail (식단 특화 테이블)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_id" }),
											" (외래키) - 상품 고유 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "meal_type_code" }),
											" - 식단 유형 (고혈압 / 당뇨 / 저속)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "package_days" }),
											" - 식단 구성 일수 (5일 / 7일)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "storage_temp" }),
											" - 보관 온도 (냉동 / 냉장 / 상온)"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#f0fdf4",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#166534",
												display: "block",
												marginBottom: "6px"
											},
											children: "gf_delivery_policy (배송 규정 테이블)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "item_id" }),
											" (외래키) - 상품 고유 ID"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delivery_condition_text" }),
											" - 배송 조건 안내"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "free_shipping_threshold" }),
											" - 무료 배송 기준 금액"
										] })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-entry",
						style: {
							background: "#ffffff",
							borderColor: "#fde047"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "12px"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								style: {
									margin: 0,
									fontSize: "16px",
									color: "#854d0e",
									display: "flex",
									alignItems: "center",
									gap: "8px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "💊 2. 현대웰니스 외부 DB 구조 (External Wellness DB)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pill",
									style: {
										background: "#fef9c3",
										color: "#a16207"
									},
									children: "22개 수집 항목"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontSize: "11px",
									color: "var(--muted)"
								},
								children: "건강기능식품 / 고도몰 기반 원장 DB"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
								gap: "12px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#fefce8",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#854d0e",
												display: "block",
												marginBottom: "6px"
											},
											children: "wl_goods_master (상품 마스터 테이블)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_no" }),
											" (기본키) - 상품 고유 번호"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_nm" }),
											" - 상품명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_name" }),
											" - 브랜드명 (솔가 / 고헬씨 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_cate_name" }),
											" - 브랜드 카테고리명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cate_path" }),
											" - 카테고리 전체 경로"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_desc" }),
											" - 상품 설명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sale_status" }),
											" - 판매 상태 (판매중)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_badge" }),
											" - 임박 태그 (\"임박 [27.05.01까지]\")"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#fefce8",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#854d0e",
												display: "block",
												marginBottom: "6px"
											},
											children: "wl_goods_price (가격 & 1일 단가)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_no" }),
											" (외래키) - 상품 고유 번호"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "fixed_price" }),
											" - 정가 (원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sale_price" }),
											" - 실 판매가 (원)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "discount_pct" }),
											" - 할인율 (%)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "daily_price_text" }),
											" - 1일 단가 (\"하루당 450원\")"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#fefce8",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#854d0e",
												display: "block",
												marginBottom: "6px"
											},
											children: "wl_goods_stock (재고 & 소비기한 관리)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_no" }),
											" (외래키) - 상품 고유 번호"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "stock_qty" }),
											" - 총 재고 수량"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "remaining_qty" }),
											" - 남은 수량 (\"32개\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "is_expiring_soon" }),
											" - 소비기한 임박 여부 (예/아니오)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "expiration_date_text" }),
											" - 유통기한 표기 (\"27.05.01까지\")"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#fefce8",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#854d0e",
												display: "block",
												marginBottom: "6px"
											},
											children: "wl_health_detail (건기식 특화 테이블)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_no" }),
											" (외래키) - 상품 고유 번호"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "capsule_count" }),
											" - 총 용량/캡슐 수 (\"60캡슐\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "functional_claim_text" }),
											" - 식약처 인증 기능성 내용"
										] })
									]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "term-entry",
						style: {
							background: "#ffffff",
							borderColor: "#93c5fd"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								marginBottom: "12px"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								style: {
									margin: 0,
									fontSize: "16px",
									color: "#1e40af",
									display: "flex",
									alignItems: "center",
									gap: "8px"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "🛋️ 3. 현대리바트 외부 DB 구조 (External Livart DB)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "pill",
									style: {
										background: "#dbeafe",
										color: "#1d4ed8"
									},
									children: "19개 수집 항목"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								style: {
									fontSize: "11px",
									color: "var(--muted)"
								},
								children: "가구 몰 / CAD / CS 물류공지 원장 DB"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "grid",
								gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
								gap: "12px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#eff6ff",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#1e40af",
												display: "block",
												marginBottom: "6px"
											},
											children: "lb_goods_master (가구 상품 마스터)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_sn" }),
											" (기본키) - 가구 상품 코드 (P200199500)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_nm" }),
											" - 가구 상품명"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "brand_name" }),
											" - 브랜드명 (리바트온라인 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cat_l_name" }),
											" - 대분류명 (소파 / 침대 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "cat_m_name" }),
											" - 중분류명 (패브릭소파 등)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "thumbnail_url" }),
											" - 썸네일 이미지 링크"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "product_url" }),
											" - 상품 상세페이지 링크"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#eff6ff",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#1e40af",
												display: "block",
												marginBottom: "6px"
											},
											children: "lb_option_sku (옵션 & 세부 조합 SKU)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_sn" }),
											" (외래키) - 가구 상품 코드"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "opt_type" }),
											" - 옵션 종류 (색상 / 타입)"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "sub_goods_sn" }),
											" - 옵션별 세부 조합 SKU 코드"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "option_combo_name" }),
											" - 옵션 조합명 (\"서랍형 브라운\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "option_price" }),
											" - 옵션별 실 판매가 (\"1,026,000원\")"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#eff6ff",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#1e40af",
												display: "block",
												marginBottom: "6px"
											},
											children: "lb_logistics_policy (배송 & 물류 규정)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_sn" }),
											" (외래키) - 가구 상품 코드"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delivery_type" }),
											" - 배송 방식 (\"직접배송 / 자체배송\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "shipping_fee_text" }),
											" - 기본 배송비 안내 (\"무료\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "delivery_period_text" }),
											" - 배송 소요기간 (\"4~5일 소요\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "ladder_car_policy_text" }),
											" - 사다리차 규정 (공지 B200059617: \"300만 이상 100% 지원\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "manual_transport_text" }),
											" - 계단 수동운반 규정 (\"2~5층 가능, 6층 이상 불가\")"
										] })
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "#eff6ff",
										padding: "12px",
										borderRadius: "8px",
										fontSize: "11px",
										lineHeight: 1.75,
										fontFamily: "monospace"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
											style: {
												color: "#1e40af",
												display: "block",
												marginBottom: "6px"
											},
											children: "lb_cs_return_policy (교환 / 반품 & 현장 작업비)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "goods_sn" }),
											" (외래키) - 가구 상품 코드"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "return_shipping_fee" }),
											" - 반품 배송비 (\"105,200원 / 38,000원\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "on_site_extra_fee" }),
											" - 현장 추가 작업비 (공지 B200075110: \"옷장/소파 연결비\")"
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
											"• ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "assembly_non_returnable_flag" }),
											" - 조립 후 반품 불가 조건"
										] })
									]
								})
							]
						})]
					})
				]
			})] }),
			activeTab === "mapping" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "callout",
				style: { marginBottom: "20px" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					style: { fontSize: "15px" },
					children: "🔄 3개 외부 DB 항목 ➔ 1개 통합 DB (InventoryOS) 연동 매핑표"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					style: {
						marginTop: "6px",
						fontSize: "12px"
					},
					children: "외부 계열사 DB의 61개 수집 필드가 통합 시스템 DB의 9개 공통 마스터 및 3개 특화 확장 테이블로 변환·저장되는 매핑 명세입니다."
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
								children: "외부 계열사 DB"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "외부 DB 테이블/필드명"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "수집 샘플 데이터"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "통합 DB 저장 테이블"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "통합 DB 저장 필드명"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "권장 데이터 타입"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								style: { padding: "10px 12px" },
								children: "변환 & 매핑 처리 규칙"
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
									children: "현대그린푸드 DB"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "gf_item_master.item_id"
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
									children: "그린푸드 원천 상품 식별자 매핑"
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
									children: "현대그린푸드 DB"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "gf_meal_detail.meal_type_code"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "고혈압식단 / 당뇨식단"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "greenfood_meal_ext"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "meal_type"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "문자형 VARCHAR(50)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "그린푸드 케어식단 유형 확장 매핑"
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
									children: "현대웰니스 DB"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "wl_goods_stock.remaining_qty"
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
									children: "inventory (통합 재고)"
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
									children: "'32개' ➔ 32 정수 파싱 (재고 소진 위험도 계산)"
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
									children: "현대웰니스 DB"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "wl_goods_stock.expiration_date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "[27.05.01까지]"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "inventory (통합 재고)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "expiry_date / d_day"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "날짜 DATE / 정수형 INT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "소비기한 날짜 파싱 ➔ D-Day 계산 및 하드차단 규칙 연결"
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
									children: "현대리바트 DB"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "lb_logistics_policy.ladder_car"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "300만원 이상 100% 지원"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "livart_furniture_ext"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "ladder_car_policy"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "긴 텍스트 TEXT"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "공지 B200059617 사다리차 본사지원/과금 기준 연결"
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
									children: "현대리바트 DB"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace"
									},
									children: "lb_cs_return_policy.return_fee"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "105,200원 (통당 부과)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontWeight: 600
									},
									children: "delivery_info (통합 배송)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										fontFamily: "monospace",
										color: "var(--blue)"
									},
									children: "return_fee_text"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: {
										padding: "8px 12px",
										color: "var(--muted)"
									},
									children: "문자형 VARCHAR(150)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									style: { padding: "8px 12px" },
									children: "교환/반품 배송비 및 조립 후 반품 불가 조건 매핑"
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
											children: "특수속성 & 규정"
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
						"3개 외부 계열사 DB에서 수집한 2,690개 상품 데이터가 ",
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
								" 외부 DB의 `is_expiring_soon` 및 `[27.05.01까지]` 속성은 소비기한 잔여일(D-Day)을 산출하여 D-14 이내 진입 시 ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "하드 차단(Hard Stop)" }),
								" 규칙 및 긴급 프로모션/기부 시나리오로 자동 라우팅됩니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "현대그린푸드 [냉동 보관] 배지:" }),
								" `is_frozen` 항목은 일반 상온 보관비 대비 3.2배 높은 보관비용(Holding Cost) 파라미터를 적용하여 회피비용(Avoided Cost) 산출 시 가중치를 부여합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "현대리바트 가구 [물류/설치/반품비]:" }),
								" 사다리차 본사지원 조건(300만 이상 100%), 6층 이상 직접운반 불가, 반품비(105,200원 / 38,000원) 및 조립 후 반품 불가 조건은 기여현금이익(Contribution Cash Margin) 산출 시 필수 차감 항목입니다."
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
								" 외부 DB의 `remaining_qty` (웰니스 남은수량) 및 카테고리별 평균 판매속도(ROS)를 결합하여 소진 예상일(WOS: Weeks of Supply)을 계산합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "트렌드 신호 감지 (AI-01):" }),
								" 외부 Google Trends 및 SNS 언급 지수를 계열사별 카테고리(예: '고혈압식단', '초록입홍합', '패브릭소파')와 매핑하여 트렌드 부스트 피처로 입력합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "결정론적 손익 시뮬레이터 (AI-04):" }),
								" 정가와 판매가의 할인율(`discount_pct`)을 수식 엔진의 기본 시나리오로 세팅하고, 보수-기본-낙관 3단계 시뮬레이션을 생성합니다."
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
								" 매핑표에 정의된 9개 공통 마스터 + 3개 확장 테이블을 버전 관리하여 배치 동기화 시 멱등성을 보장합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Redis 캐싱 레이어:" }),
								" 2,690개 상품의 위험도 계산 결과 및 일일 판매속도를 Redis Hash로 캐싱하여 프론트엔드 대시보드 조회의 응답속도를 50ms 이내로 보장합니다.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"• ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Spring Batch 동기화 원장:" }),
								" `sync_log` 테이블을 통해 일일 3개 외부 DB 연동 성공률, 미수집 항목, 가격 변동 트래킹을 자동 수행합니다."
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
