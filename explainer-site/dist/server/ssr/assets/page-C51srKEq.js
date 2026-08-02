import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import { n as Stagger, t as Reveal } from "./reveal-ASYv3BuO.js";
import { r as mvpMenu } from "./content-o_pnFOF9.js";
//#region src/app/capabilities/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var tracks = [
	{
		id: "all",
		label: "전체 기능",
		hint: "공통 기능과 계열사별 확장"
	},
	{
		id: "common",
		label: "공통 서비스",
		hint: "권한·데이터·전략·운영"
	},
	{
		id: "wellness",
		label: "현대웰니스",
		hint: "로트·소비기한·표시"
	},
	{
		id: "livart",
		label: "현대리바트",
		hint: "배송·설치 비용·AS"
	},
	{
		id: "greenfood",
		label: "현대그린푸드",
		hint: "식품·콜드체인·검사"
	}
];
var capabilities = [
	{
		id: "F-01",
		track: "common",
		title: "사용자·권한·감사",
		phase: "P0",
		summary: "담당자가 자기 계열사 범위에서만 조회·수정·승인하도록 권한을 나누고 모든 작업을 기록합니다.",
		inputs: [
			"사용자·역할",
			"계열사·법인·점포·채널 범위",
			"JWT 세션"
		],
		outputs: [
			"조회·수정·승인 가능 범위",
			"권한 거부 사유",
			"감사 로그"
		],
		rule: "원가·승인 권한과 일반 조회 권한을 분리하고, 승인 후 조건 변경은 재승인으로 전환"
	},
	{
		id: "F-02",
		track: "common",
		title: "상품·카테고리·SKU 기준정보",
		phase: "P0",
		summary: "3개 계열사의 서로 다른 상품키를 공통 상품·브랜드·카테고리·옵션·SKU 구조로 연결합니다.",
		inputs: [
			"원천 상품키",
			"상품·브랜드·카테고리",
			"옵션·판매 단위",
			"법인·정산 주체"
		],
		outputs: [
			"canonical product_id·sku_id",
			"원천키 매핑 상태",
			"중복·단위 오류"
		],
		rule: "브랜드명과 운영 법인을 같은 값으로 가정하지 않고 별도 식별자로 관리"
	},
	{
		id: "F-03",
		track: "common",
		title: "재고·판매 데이터 수집",
		phase: "P0",
		summary: "ERP·POS·WMS·정산 원천에서 기준시각이 있는 스냅샷과 이력을 받아 계산에 사용합니다.",
		inputs: [
			"원천 시스템",
			"배치·API·파일",
			"상품키 매핑",
			"수집 기준시각"
		],
		outputs: [
			"재고 snapshot",
			"판매 이벤트",
			"재고 변동 이력",
			"수집 실패·재시도 상태"
		],
		rule: "source_record_id와 snapshot_id로 중복을 막고 원천부터 결과까지 추적 가능해야 함"
	},
	{
		id: "F-04",
		track: "common",
		title: "데이터 품질·신선도 관리",
		phase: "P0",
		summary: "누락·중복·단위 오류·기준시각 지연을 찾아 계산 가능 여부를 먼저 판정합니다.",
		inputs: [
			"필수 필드 규칙",
			"갱신 주기",
			"원천별 품질 기준"
		],
		outputs: [
			"accepted / warning / quarantined / rejected",
			"누락 필드",
			"재검증 시각·담당자"
		],
		rule: "핵심값이 unknown이면 수익 순위와 AI 추천을 만들지 않고 입력 필요 상태로 표시"
	},
	{
		id: "F-05",
		track: "common",
		title: "통합 재고 대시보드·검색",
		phase: "P0",
		summary: "계열사 전체 현황에서 위험 상품 상세까지 내려가며 처리 우선순위를 좁힙니다.",
		inputs: [
			"계열사·카테고리·채널",
			"위험등급·기한·판매속도",
			"기준시각"
		],
		outputs: [
			"수량·재고금액",
			"정상·주의·위험 비율",
			"장기·판매부진 목록",
			"CSV"
		],
		rule: "원가 권한이 없으면 원가를 숨기고 위험·수량·속도와 기준시각을 우선 표시"
	},
	{
		id: "F-06",
		track: "common",
		title: "위험재고 탐지",
		phase: "P0",
		summary: "공통 위험점수 골격에 계열사별 신호·가중치·임계값을 적용해 먼저 처리할 대상을 찾습니다.",
		inputs: [
			"처리기한",
			"판매속도·가용재고",
			"보관·폐기·배송·설치비",
			"데이터 품질"
		],
		outputs: [
			"0–100 점수",
			"정상·주의·위험 등급",
			"기여 신호",
			"하드 차단 사유"
		],
		rule: "점수보다 법규·소유권·필수 데이터 품질 차단을 먼저 적용"
	},
	{
		id: "F-07",
		track: "common",
		title: "정책·수식 프로필 관리",
		phase: "P0",
		summary: "계열사·카테고리별 비용 항목, 허용 범위, 위험 가중치와 계산식을 버전으로 관리합니다.",
		inputs: [
			"affiliate_id·category_id",
			"정책 버전",
			"가중치·임계값",
			"할인·채널 제한"
		],
		outputs: [
			"active formula profile",
			"정책 비교 이력",
			"계산 snapshot"
		],
		rule: "전략 결과에는 policy_version·formula_version·snapshot_id를 항상 저장"
	},
	{
		id: "F-08",
		track: "common",
		title: "전략 후보 생성·AI 추천",
		phase: "P1",
		summary: "허용된 할인·기간·수량·판매 방식 조합을 만들고 수식 엔진으로 순위를 정한 뒤 AI가 이유를 설명합니다.",
		inputs: [
			"목표: 순마진·빠른 소진·최대 매출",
			"허용 action space",
			"수요 예측",
			"정책 profile"
		],
		outputs: [
			"최대 3개 후보",
			"예상 결과·신뢰도",
			"하방 위험",
			"추천 이유"
		],
		rule: "LLM은 숫자를 계산·수정하지 않고, 계산이 끝난 후보의 설명과 확인 질문만 생성하며 외부 판매 시스템을 호출하지 않음"
	},
	{
		id: "F-09",
		track: "common",
		title: "전략 시뮬레이션",
		phase: "P0",
		summary: "담당자가 조건을 바꾸면 기준선·추천안·조정안을 같은 기준으로 다시 계산합니다.",
		inputs: [
			"수량·할인율·기간",
			"쿠폰·포인트·배송·설치 예상비",
			"판매 방식·번들",
			"캠페인 비용"
		],
		outputs: [
			"예상 판매·매출",
			"변동비·이익·마진율",
			"소진기간·잔량",
			"회피비용·위험손실"
		],
		rule: "조건·정책·snapshot이 바뀌면 새 simulation_run으로 저장하고 기존 승인과 분리하며, 판매 실행은 외부 시스템의 책임"
	},
	{
		id: "F-10",
		track: "common",
		title: "검토·승인·Teams 전달",
		phase: "P1",
		summary: "담당자가 추천안을 수정해 검토를 요청하고, 승인 결과와 전략 조건을 Teams로 전달합니다.",
		inputs: [
			"전략 버전",
			"승인자",
			"적용 조건",
			"Teams 채널 매핑"
		],
		outputs: [
			"승인·거절·재승인 상태",
			"전달 성공·실패·재시도",
			"승인 감사 로그"
		],
		rule: "Teams 성공은 서비스 승인 성공과 별도 상태이며, 이 서비스는 주문·가격변경·상품등록을 실행하지 않음"
	},
	{
		id: "F-11",
		track: "common",
		title: "외부 성과 회수·예상 대비 비교",
		phase: "P1",
		summary: "외부 판매·정산 시스템에서 결과를 받아 예측 오차와 원인을 기록합니다. 이 서비스가 판매를 실행하지는 않습니다.",
		inputs: [
			"approved strategy revision",
			"외부 판매·정산 결과",
			"비교 기간",
			"원인 코드"
		],
		outputs: [
			"예상 vs 실제",
			"달성률·오차",
			"잔여·폐기 결과",
			"모델 검증 데이터"
		],
		rule: "실제값이 없으면 임의 숫자를 표시하지 않고 미수집 상태로 표시"
	},
	{
		id: "F-12",
		track: "common",
		title: "운영·이력·관제",
		phase: "P1",
		summary: "데이터 동기화부터 위험분석·전략·Teams 전송까지의 이력을 남기고, 시스템 오류는 운영자가 확인합니다.",
		inputs: [
			"배치·분석·전략 이벤트",
			"request_id·batch_id",
			"모니터링 기준"
		],
		outputs: [
			"기능별 실행 이력",
			"Sentry·ELK 로그",
			"Prometheus/Grafana 지표",
			"실패 원인·재시도 상태"
		],
		rule: "업무 알림은 꼭 필요한 상태만 보여주고, 개발·배치 오류는 Grafana와 운영 로그로 확인"
	},
	{
		id: "F-13",
		track: "common",
		title: "교차 계열사 번들 전략·재고 이동 검토",
		phase: "P2",
		summary: "서로 다른 계열사의 상품을 묶거나 재고 이동안을 비교하는 확장 기능입니다. 실제 상품 등록·이동은 하지 않습니다.",
		inputs: [
			"구성 상품·수량",
			"현재 재고",
			"예상 이동비",
			"매출 배분 규칙"
		],
		outputs: [
			"번들 적용 가능 수량",
			"배분 매출·마진",
			"품절·법적 제한",
			"승인 검토 자료"
		],
		rule: "P0/P1에서는 전략 계산과 검토 자료만 준비하고 외부 시스템 실행은 하지 않음"
	},
	{
		id: "F-15",
		track: "common",
		title: "수요예측",
		phase: "P0",
		summary: "최근 판매 흐름을 바탕으로 앞으로 얼마나 팔릴지 계산해 위험재고 판단과 전략 시뮬레이션에 전달합니다.",
		inputs: [
			"최근 판매이력",
			"품절·취소·반품 정보",
			"할인·프로모션·시즌 조건"
		],
		outputs: [
			"기본 일일수요",
			"조건 반영 예상 판매량",
			"예상 소진일",
			"예측 기준·신뢰 상태"
		],
		rule: "판매이력이 부족한 상품은 같은 카테고리 평균을 사용하거나 예측 부족 상태로 표시"
	}
];
var capabilityDetails = {
	"F-01": {
		micro: [
			"로그인·로그아웃·토큰 갱신",
			"역할·계열사·점포 범위 조회",
			"페이지·API 권한 가드",
			"원가·승인 권한 분리",
			"로그인·권한 변경 감사 기록"
		],
		considerations: [
			"세션 만료·강제 로그아웃 처리",
			"다른 계열사 데이터와 민감 비용의 교차 노출 방지",
			"권한 없는 요청의 사유와 request_id 기록"
		],
		done: [
			"담당 MD가 자기 범위만 조회",
			"승인자만 승인 API 호출",
			"권한 변경과 거부 요청이 감사 로그에 남음"
		]
	},
	"F-02": {
		micro: [
			"계열사·법인·브랜드·카테고리 등록",
			"원천 상품키와 canonical ID 매핑",
			"상품·옵션·SKU 생성·수정·비활성화",
			"중복 SKU·단위·가격 순서 검증",
			"기준정보 변경 이력 조회"
		],
		considerations: [
			"브랜드명과 정산·운영 법인을 분리",
			"같은 상품의 계열사별 원천키를 잃지 않음",
			"비활성 SKU의 과거 이력과 전략 결과를 보존"
		],
		done: [
			"3개 계열사의 상품을 공통 검색",
			"원천키로 원본을 추적",
			"중복·단위 오류를 저장 전에 차단"
		]
	},
	"F-03": {
		micro: [
			"원천별 API·파일·배치 수집",
			"수집 batch와 기준 snapshot 생성",
			"중복 레코드 멱등 처리",
			"부분 성공·실패 건 격리",
			"재시도·마지막 정상 수집 시각 표시"
		],
		considerations: [
			"ERP/POS/WMS의 갱신 주기 차이",
			"타임존·통화·수량 단위 변환",
			"원천 장애 중 이전 snapshot을 잘못 최신값으로 사용하지 않음"
		],
		done: [
			"같은 원천 데이터를 두 번 받아도 중복되지 않음",
			"실패한 원천만 재시도",
			"계산 결과에서 원천 레코드까지 추적"
		]
	},
	"F-04": {
		micro: [
			"필수 필드·형식·범위 검사",
			"중복·음수 수량·가격 역전 검사",
			"기한·설치일·기준시각 검사",
			"품질 결과와 누락 필드 표시",
			"격리 데이터 재검증·승인"
		],
		considerations: [
			"unknown과 실제 0을 구분",
			"품질 경고와 실행 차단을 구분",
			"누가 언제 재검증해야 하는지 담당자 지정"
		],
		done: [
			"필수값 누락 상품은 추천 불가",
			"품질 상태가 대시보드에 표시",
			"격리 데이터가 정상 데이터에 섞이지 않음"
		]
	},
	"F-05": {
		micro: [
			"전체 KPI·정상/위험 비율",
			"계열사·카테고리·채널 필터",
			"위험 목록에서 상품 상세 drill-down",
			"판매·재고·비용 추이 차트",
			"권한별 CSV 내보내기"
		],
		considerations: [
			"모든 KPI의 기준시각과 데이터 지연 표시",
			"재고 수량과 비용 정보를 서로 다른 의미로 표시",
			"원가 권한에 따른 금액 마스킹"
		],
		done: [
			"홈에서 위험 규모를 확인",
			"필터 결과와 상세 목록 수가 일치",
			"데이터가 오래되면 지연 배지 표시"
		]
	},
	"F-06": {
		micro: [
			"계열사별 위험 신호 정규화",
			"가중치·임계값 적용",
			"위험 등급 산출",
			"점수에 기여한 신호 설명",
			"일괄·수동 위험 재분석"
		],
		considerations: [
			"점수보다 하드 차단을 먼저 적용",
			"건강기능식품·가구·식품의 위험 의미를 동일하게 취급하지 않음",
			"가중치·임계값 변경 시 이전 결과 재현"
		],
		done: [
			"상품별 점수·등급·근거가 표시",
			"차단 상품은 점수와 별도로 실행 불가",
			"배치 실패와 마지막 성공 시각 확인"
		]
	},
	"F-07": {
		micro: [
			"계열사·카테고리 formula profile 생성",
			"비용 항목·허용 할인·채널 설정",
			"가중치·임계값 버전 관리",
			"정책 검토·승인·활성화",
			"이전 버전 비교·회귀"
		],
		considerations: [
			"활성 profile을 임의 수정하지 않고 새 버전 생성",
			"정책 소유자와 승인자를 지정",
			"계산 결과에 사용한 profile snapshot 보존"
		],
		done: [
			"계열사·카테고리별 다른 계산 정책 적용",
			"승인 전 draft가 운영 계산에 사용되지 않음",
			"과거 전략을 당시 profile로 재현"
		]
	},
	"F-08": {
		micro: [
			"목표별 허용 action space 정의",
			"할인·기간·수량·채널 조합 생성",
			"하드 차단 후보 제거",
			"결정론적 손익 순위 정렬",
			"상위 3개 후보 설명·질문 생성"
		],
		considerations: [
			"LLM이 숫자를 만들거나 수정하지 않음",
			"후보가 하나도 없을 때 차단 이유 표시",
			"예측 모델·LLM 실패 시 계산 결과만 제공"
		],
		done: [
			"같은 snapshot에서 같은 후보가 재현",
			"추천 후보에 사용 데이터·버전이 표시",
			"최종 실행은 담당자 승인 전 불가"
		]
	},
	"F-09": {
		micro: [
			"추천값과 사용자 조정값 분리",
			"수량·할인·기간·비용 입력 검증",
			"조건 변경 즉시 재계산",
			"기준선·추천안·조정안 비교",
			"시뮬레이션 저장·공유"
		],
		considerations: [
			"소비기한·정책상 허용 범위를 넘는 조건 차단",
			"반품·수수료·배송·회피비용 중복 차감 금지",
			"입력 조건과 결과 버전을 함께 저장"
		],
		done: [
			"조건을 바꿨을 때 결과가 즉시 변경",
			"차단 조건은 계산 결과와 구분",
			"승인 대상은 저장된 simulation_run으로 재현"
		]
	},
	"F-10": {
		micro: [
			"담당자 전략 수정·버전 생성",
			"승인자 지정·검토 요청",
			"승인·거절·재승인·사유 입력",
			"Teams 메시지 생성·전송",
			"전송 실패·재시도·결과 조회"
		],
		considerations: [
			"Teams 성공을 서비스 승인으로 간주하지 않음",
			"승인 후 조건 변경 시 재승인",
			"승인자 권한과 계열사 범위 확인"
		],
		done: [
			"승인 상태가 서비스에 남음",
			"Teams 메시지에 조건·예상값·상세 링크 포함",
			"실패한 전송을 운영자가 재시도"
		]
	},
	"F-11": {
		micro: [
			"승인 전략과 외부 결과 매칭",
			"판매·매출·마진 결과 회수",
			"실제 잔량·폐기 결과 회수",
			"예상 대비 오차·달성률 계산",
			"오차 원인 코드와 검증 데이터 저장"
		],
		considerations: [
			"실제값이 없으면 임의 대체 숫자 금지",
			"전략 버전·비교 기간·원천 결과를 연결",
			"결과 데이터의 정산 확정 여부 표시"
		],
		done: [
			"전략별 예상·실제 비교 가능",
			"오차 원인을 계열사별로 분류",
			"검증된 결과만 이후 예측 모델에 사용"
		]
	},
	"F-12": {
		micro: [
			"계열사 데이터 동기화 이력 저장",
			"위험재고 분석 이력 저장",
			"수요예측·AI 전략 생성 이력 저장",
			"전략 수정·Teams 전송 이력 저장",
			"배치·API·AI 오류 모니터링",
			"재시도·멱등키·실패 원인 기록"
		],
		considerations: [
			"업무 알림을 과도하게 만들지 않고 필요한 상태만 표시",
			"request_id·batch_id·strategy_id로 앞뒤 결과 연결",
			"민감한 원가·개인정보가 로그와 Teams에 남지 않음"
		],
		done: [
			"각 기능의 실행 시각·결과·담당 범위가 남음",
			"실패 원인과 마지막 정상 상태 확인",
			"운영자가 실패 건을 재시도하고 결과 추적"
		]
	},
	"F-13": {
		micro: [
			"구성 상품 검색·번들 편집",
			"구성 수량·가격·비용 입력",
			"품절·법적 제한 검증",
			"계열사별 매출·마진 배분 계산",
			"번들 검토 자료 저장"
		],
		considerations: [
			"P0/P1 실행과 P2 확장을 화면에서 명확히 구분",
			"구성품 하나의 품절·차단이 전체 전략에 미치는 영향",
			"교차 계열사 정산·책임 주체"
		],
		done: [
			"번들 적용 가능 수량이 구성품 기준으로 계산",
			"배분 규칙과 검토 이력 보존",
			"외부 판매 시스템 실행 버튼이 없음"
		]
	},
	"F-15": {
		micro: [
			"최근 28일 판매이력 조회",
			"취소·반품·품절일을 구분",
			"최근 기간별 평균 판매량 계산",
			"할인·프로모션·시즌·요일 보정",
			"판매기간별 예상량·소진일 계산",
			"예측에 사용한 기준 저장"
		],
		considerations: [
			"품절일을 판매 부진으로 잘못 계산하지 않음",
			"신규 상품은 카테고리 평균 또는 예측 부족으로 표시",
			"예상량이 현재 가용 재고를 넘지 않도록 제한",
			"실제 판매 처리 조건은 외부 시스템의 책임으로 구분"
		],
		done: [
			"상품별 예상 판매량과 계산 기준이 표시",
			"판매이력이 부족하면 상태가 명확히 표시",
			"같은 입력과 버전으로 결과를 다시 계산 가능"
		]
	}
};
function CapabilityDetailModal({ capability, onClose }) {
	const details = capabilityDetails[capability.id];
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") onClose();
		};
		const previousOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [onClose]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "capability-modal-overlay",
		role: "presentation",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "capability-modal",
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": `capability-modal-title-${capability.id}`,
			onClick: (event) => event.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-modal-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-modal-meta",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capability-id",
							children: capability.id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseBadge, { phase: capability.phase })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: `capability-modal-title-${capability.id}`,
						children: capability.title
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "capability-modal-close",
						"aria-label": "기능 상세 닫기",
						onClick: onClose,
						children: "×"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "capability-modal-summary",
					children: capability.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-modal-contract",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "필요 요소" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: capability.inputs.join(" · ") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "결과" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: capability.outputs.join(" · ") })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-modal-section",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-modal-section-title",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "capability-label",
							children: "세부 기능"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "이 기능을 실제 화면과 서버에서 나눠 만들 때 필요한 작은 단위입니다." })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "capability-detail-table-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "capability-detail-table",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: "세부 기능과 고려 요소, 완료 기준"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "번호"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "세부 기능"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "고려할 요소"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "완료 기준"
									})
								] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: details.micro.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: String(index + 1).padStart(2, "0") }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: item }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: details.considerations[index] ?? "앞 단계의 데이터와 연결되는지 확인" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: details.done[index] ?? "오류·빈 상태에서도 사용자가 다음 행동을 알 수 있음" })
								] }, item)) })
							]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-modal-done",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "capability-label",
						children: "범위 메모"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
						"현재는 ",
						capability.phase === "P2" ? "화면과 데이터 구조를 우선 준비하는 후순위 범위" : "핵심 시연과 검증을 위해 구현하는 범위",
						"입니다."
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "실제 외부 시스템 연동이나 운영 정책이 확정되면 해당 세부 기준을 다시 확인합니다." })] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-modal-rule",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "핵심 운영 규칙" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: capability.rule })]
				})
			]
		})
	});
}
var affiliateProfiles = [
	{
		id: "wellness",
		name: "현대웰니스",
		unit: "SKU·lot",
		color: "green",
		focus: "소비기한과 표시·보관조건",
		fields: "lot_id · expiry_at · storage_condition · function_claim_class · return_eligible",
		costs: "배송·포장·수수료 · 쿠폰·포인트 · 반품 검수 · 회수·폐기",
		stop: "기한·표시·보관·리콜·판매 권한이 확인되지 않으면 차단",
		signal: "잔여기한 · 판매속도 · 예상 폐기비 · 표시정보 누락"
	},
	{
		id: "livart",
		name: "현대리바트",
		unit: "제품·옵션·프로젝트",
		color: "amber",
		focus: "배송·설치 비용·AS",
		fields: "option · lead_time · install_required · delivery_fee · install_fee · as_cost",
		costs: "보관·전시 · 배송·설치 · 파손·재배송·회수 · 반품·AS",
		stop: "주문제작·반품·AS 정책과 필수 상품 정보가 없으면 차단",
		signal: "보관일 · 납기지연 · 파손·AS 비용"
	},
	{
		id: "greenfood",
		name: "현대그린푸드",
		unit: "SKU·lot·센터",
		color: "teal",
		focus: "소비기한·콜드체인·검사 비용",
		fields: "expiry_at · temperature_class · traceability_id · inspection_status · disposal_cost",
		costs: "피킹·포장 · 냉장·냉동 · 보냉재·에너지 · 회수·폐기 · 채널 수수료",
		stop: "기한·보관·HACCP·검사 정보가 없으면 차단",
		signal: "기한 압박 · 폐기량 · 온도 이탈 · 콜드체인 비용"
	}
];
var architectureLayers = [
	[
		"01",
		"원천 데이터",
		"ERP·POS·WMS·정산에서 기준시각이 있는 snapshot과 이력을 받습니다."
	],
	[
		"02",
		"정책·하드 차단",
		"계열사·카테고리 profile로 전략 적용 가능 여부와 필수값을 먼저 확인합니다."
	],
	[
		"03",
		"예측·수식 엔진",
		"판매이력·비용·기준선·위험을 결정론적으로 계산합니다."
	],
	[
		"04",
		"AI 설명·사람 승인",
		"LLM은 계산 결과를 설명하고 담당 MD가 최종 조건을 승인합니다."
	],
	[
		"05",
		"전달·성과 회수",
		"Teams로 전략을 전달하고 외부 판매·정산 결과를 받아 다음 정책과 모델을 검증합니다."
	]
];
var formulaRows = [
	[
		"실행 가능 여부",
		"모든 하드 차단 조건이 통과해야 1, 하나라도 모르면 0",
		"unknown은 추천·승인 차단"
	],
	[
		"예상 판매량",
		"min(전략 대상 재고, 기준량 × 시간효과 × 가격효과 × 판매 방식 효과 × 번들효과)",
		"confidence는 수량에 곱하지 않고 예측 구간·표본 상태로 표시"
	],
	[
		"증분 기여현금이익",
		"매출 − 변동비 + 회피비용 − 잠식 − 위험손실 − AI 원가 − 기준선",
		"원가·수수료·반품 중복 차감 금지"
	],
	[
		"위험점수",
		"100 × Σ(신호별 가중치 × 상품별 위험값)",
		"가중치·임계값은 계열사·카테고리별 버전 관리"
	]
];
var inventoryColumns = [
	[
		"계열사",
		"상품이 어느 계열사에 속하는지",
		"필터와 권한 범위를 판단합니다."
	],
	[
		"상품 코드",
		"통합 상품 코드와 계열사 원천 코드",
		"상품 상세·원천 데이터 추적에 사용합니다."
	],
	[
		"상품명·카테고리",
		"상품명, 브랜드, 공통 카테고리, 옵션 요약",
		"같은 이름의 상품을 구분하고 상세로 이동합니다."
	],
	[
		"추천 판매 방식",
		"할인·쿠폰·번들·외부 채널 등 비교한 전략 후보",
		"어떤 방식이 적절한지 검토합니다."
	],
	[
		"재고 상태·전략 대상 수량",
		"현재고에서 보류 수량을 뺀 전략 계산 수량",
		"전략을 적용할 범위를 정합니다."
	],
	[
		"기준 가격·소진예상",
		"기준 가격, 최근 판매속도, 예상 소진일",
		"할인·추가입고·처리 우선순위를 정합니다."
	],
	[
		"위험 태그·추천 행동",
		"위험 등급, 판단 이유, 다음 검토 행동",
		"담당자가 바로 확인할 대상을 찾습니다."
	]
];
var inventoryMockRows = [
	[
		"현대웰니스",
		"WEL-VIT-001",
		"멀티비타민 데일리",
		"건강기능식품 · 영양",
		"운영중",
		"320개",
		"18일",
		"위험",
		"소비기한 임박 · 할인 검토"
	],
	[
		"현대리바트",
		"LIV-SOF-204",
		"모듈형 패브릭 소파",
		"가구 · 거실 · 설치",
		"운영중",
		"12개",
		"74일",
		"주의",
		"배송·설치 비용 확인"
	],
	[
		"현대그린푸드",
		"GFD-SEA-031",
		"손질 고등어 800g",
		"식품 · 수산 · 냉동",
		"검토 필요",
		"86개",
		"4일",
		"위험",
		"검사 결과 확인"
	]
];
var detailFields = [
	[
		"상단 요약",
		"상품명·계열사·카테고리·SKU·상품 상태·위험 태그",
		"현재 어떤 상품을 보고 있는지 즉시 이해"
	],
	[
		"핵심 지표",
		"판매가·가용재고·최근 판매속도·예상 소진일·처리기한",
		"재고를 얼마나 빨리 처리해야 하는지 판단"
	],
	[
		"옵션·로트",
		"색상·사이즈·용량·로트별 수량·소비기한·보관조건",
		"상품 전체가 아닌 실제 SKU·로트 단위로 확인"
	],
	[
		"AI 위험 분석",
		"위험점수·등급·판단 이유·사용한 기준시각·데이터 상태",
		"추천이 나온 이유와 부족한 자료를 확인"
	],
	[
		"재고·외부 성과 이력",
		"입고·외부 판매·반품·조정·프로모션 결과와 추이",
		"외부 시스템 결과를 예측과 비교하고 원인을 찾음"
	],
	[
		"다음 행동",
		"할인 검토·추가입고 검토·전략 시뮬레이션·승인 요청",
		"상세 화면에서 다음 단계로 바로 이동"
	]
];
var stateRows = [
	[
		"데이터",
		"received",
		"validating",
		"accepted / warning / quarantined / rejected"
	],
	[
		"위험 진단",
		"detected",
		"acknowledged",
		"in_review → strategy_requested → resolved / suppressed"
	],
	[
		"전략",
		"draft",
		"generated / edited",
		"submitted → approved / rejected → handed_off → outcome_received / failed"
	],
	[
		"Teams",
		"not_requested",
		"requested",
		"sent → delivered / failed → retrying / exhausted"
	]
];
var functionalSpecGroups = [
	{
		id: "01",
		title: "사용자 및 인증",
		rows: [
			[
				"AUTH-001",
				"담당자 로그인",
				"담당자",
				"등록된 더미 계정의 아이디와 비밀번호로 서비스에 들어갑니다.",
				"MVP"
			],
			[
				"AUTH-002",
				"로그인 실패 안내",
				"시스템",
				"아이디 또는 비밀번호가 맞지 않으면 이유를 쉽게 안내하고 재입력을 받습니다.",
				"MVP"
			],
			[
				"AUTH-003",
				"JWT Access Token 발급",
				"시스템",
				"로그인 성공 시 화면과 API 요청에 사용할 인증 토큰을 발급합니다.",
				"MVP"
			],
			[
				"AUTH-004",
				"로그인 상태 유지",
				"담당자",
				"화면을 이동해도 로그인 상태를 유지하고 사용자 이름과 소속 범위를 보여줍니다.",
				"MVP"
			],
			[
				"AUTH-005",
				"토큰 만료 처리",
				"시스템",
				"토큰이 만료되면 현재 작업을 보호하고 다시 로그인하도록 안내합니다.",
				"MVP"
			],
			[
				"AUTH-006",
				"로그아웃",
				"담당자",
				"현재 세션을 종료하고 로그인 화면으로 돌아갑니다.",
				"MVP"
			],
			[
				"AUTH-007",
				"계열사 조회 범위 확인",
				"시스템",
				"사용자에게 허용된 계열사 범위 안에서만 상품·재고·전략을 조회합니다.",
				"MVP"
			],
			[
				"AUTH-008",
				"원가 접근 차단",
				"시스템",
				"원가는 화면과 일반 API 응답에 포함하지 않고 내부 손익 계산에서만 사용합니다.",
				"MVP"
			],
			[
				"AUTH-009",
				"더미 계정 관리",
				"관리자",
				"회원가입 없이 발표용 담당자 계정을 미리 등록해 사용합니다.",
				"MVP"
			],
			[
				"AUTH-010",
				"인증 이력 저장",
				"시스템",
				"로그인·로그아웃·실패 시각과 사용자 범위를 감사 이력으로 남깁니다.",
				"P1"
			]
		]
	},
	{
		id: "02",
		title: "계열사·상품·기준정보",
		rows: [
			[
				"BASE-001",
				"계열사 목록 조회",
				"담당자",
				"현대웰니스·현대리바트·현대그린푸드 목록을 확인합니다.",
				"MVP"
			],
			[
				"BASE-002",
				"계열사 필터 선택",
				"담당자",
				"전체 또는 특정 계열사를 선택해 이후 화면의 범위를 바꿉니다.",
				"MVP"
			],
			[
				"BASE-003",
				"상품 목록 조회",
				"담당자",
				"공통 상품 ID, 상품명, 계열사, 카테고리, 판매상태를 목록으로 봅니다.",
				"MVP"
			],
			[
				"BASE-004",
				"상품 상세 조회",
				"담당자",
				"상품 설명, 브랜드, 옵션, 가격, 판매 가능 여부, 계열사 원천코드를 확인합니다.",
				"MVP"
			],
			[
				"BASE-005",
				"카테고리 조회",
				"담당자",
				"가구·건강기능식품·식품 등 공통 카테고리와 원천 카테고리를 구분해 봅니다.",
				"MVP"
			],
			[
				"BASE-006",
				"브랜드 조회",
				"담당자",
				"상품에 연결된 브랜드와 브랜드별 상품 수를 확인합니다.",
				"MVP"
			],
			[
				"BASE-007",
				"상품 옵션 조회",
				"담당자",
				"색상·크기·용량·구성 등 상품별 선택 조건을 확인합니다.",
				"MVP"
			],
			[
				"BASE-008",
				"SKU 상세 조회",
				"담당자",
				"실제로 재고를 세는 가장 작은 단위의 수량·가격·기한·상태를 봅니다.",
				"MVP"
			],
			[
				"BASE-009",
				"원천 상품코드 연결",
				"시스템",
				"각 계열사의 상품코드와 통합 상품·SKU ID를 연결해 원본을 추적합니다.",
				"MVP"
			],
			[
				"BASE-010",
				"전략 제한 정보 조회",
				"담당자",
				"소비기한·검사·법적 표시·정책 등 전략 제한 사유를 확인합니다.",
				"MVP"
			],
			[
				"BASE-011",
				"상품 이미지 조회",
				"담당자",
				"상품 목록과 상세에서 저장된 대표 이미지를 보여줍니다.",
				"P2"
			],
			[
				"BASE-012",
				"기준정보 변경 이력",
				"관리자",
				"상품·카테고리·SKU 상태가 언제 바뀌었는지 기록합니다.",
				"P1"
			]
		]
	},
	{
		id: "03",
		title: "계열사 데이터 수집·동기화",
		rows: [
			[
				"DATA-001",
				"계열사 원천 데이터 수집",
				"시스템",
				"각 계열사의 상품·재고·판매 데이터를 정해진 방식으로 가져옵니다.",
				"MVP"
			],
			[
				"DATA-002",
				"공통 형식 변환",
				"시스템",
				"계열사마다 다른 필드명과 단위를 통합 상품·SKU·재고 형식으로 바꿉니다.",
				"MVP"
			],
			[
				"DATA-003",
				"원천코드 매핑 검증",
				"시스템",
				"통합 ID와 원천 ID가 제대로 연결됐는지 확인하고 매핑되지 않은 건을 표시합니다.",
				"MVP"
			],
			[
				"DATA-004",
				"재고 스냅샷 저장",
				"시스템",
				"특정 시각의 현재 재고를 기준 시각과 함께 저장합니다.",
				"MVP"
			],
			[
				"DATA-005",
				"판매이력 추가 저장",
				"시스템",
				"새로운 판매 이력만 추가하고 기존 이력은 다시 저장하지 않습니다.",
				"MVP"
			],
			[
				"DATA-006",
				"재고 변동이력 저장",
				"시스템",
				"입고·판매·조정으로 수량이 바뀐 흐름을 기록합니다.",
				"MVP"
			],
			[
				"DATA-007",
				"일 1회 자동 동기화",
				"시스템",
				"Spring Batch로 하루 한 번 전체 계열사 데이터를 갱신합니다.",
				"MVP"
			],
			[
				"DATA-008",
				"마지막 갱신 시각 표시",
				"담당자",
				"대시보드와 재고표에 데이터가 언제 갱신됐는지 보여줍니다.",
				"MVP"
			],
			[
				"DATA-009",
				"중복 수집 방지",
				"시스템",
				"같은 원천 이력을 다시 받아도 source_record_id 기준으로 중복을 막습니다.",
				"P1"
			],
			[
				"DATA-010",
				"부분 실패 격리",
				"시스템",
				"한 계열사 수집이 실패해도 다른 계열사 작업은 계속하고 실패 범위를 남깁니다.",
				"P1"
			],
			[
				"DATA-011",
				"수동 갱신 실행",
				"담당자",
				"시연 또는 긴급 확인을 위해 갱신 버튼으로 배치를 요청합니다.",
				"P1"
			],
			[
				"DATA-012",
				"수집 오류 안내",
				"운영자",
				"필수값 누락·단위 오류·연동 실패를 원인과 함께 확인합니다.",
				"P1"
			]
		]
	},
	{
		id: "04",
		title: "통합 재고 조회",
		rows: [
			[
				"INV-001",
				"통합 재고 테이블 조회",
				"담당자",
				"3개 계열사의 상품과 SKU를 한 표에서 비교하고 처리 대상을 찾습니다.",
				"MVP"
			],
			[
				"INV-002",
				"계열사별 재고 조회",
				"담당자",
				"현대웰니스·현대리바트·현대그린푸드별로 필터링합니다.",
				"MVP"
			],
			[
				"INV-003",
				"상품명·코드 검색",
				"담당자",
				"상품명, 통합 상품코드, 계열사 원천코드로 원하는 행을 찾습니다.",
				"MVP"
			],
			[
				"INV-004",
				"카테고리·브랜드 필터",
				"담당자",
				"카테고리와 브랜드를 조합해 조회 범위를 좁힙니다.",
				"MVP"
			],
			[
				"INV-005",
				"위험등급 필터",
				"담당자",
				"정상·주의·위험 등급 중 원하는 상품만 확인합니다.",
				"MVP"
			],
			[
				"INV-006",
				"보관기간·판매속도 필터",
				"담당자",
				"오래 보관됐거나 판매속도가 느린 상품을 찾습니다.",
				"MVP"
			],
			[
				"INV-007",
				"재고수량·기준일 필터",
				"담당자",
				"수량 범위와 조회일을 지정해 재고를 확인합니다.",
				"MVP"
			],
			[
				"INV-008",
				"재고표 정렬",
				"담당자",
				"재고수량·위험점수·보관기간·판매속도·소진예상일 순으로 정렬합니다.",
				"MVP"
			],
			[
				"INV-009",
				"페이지네이션",
				"담당자",
				"상품이 많아도 페이지 단위로 빠르게 조회합니다.",
				"MVP"
			],
			[
				"INV-010",
				"재고표 핵심 열 표시",
				"담당자",
				"계열사·상품·SKU·현재수량·판매속도·위험등급·소진예상일을 표시합니다.",
				"MVP"
			],
			[
				"INV-011",
				"상품·SKU 상세 이동",
				"담당자",
				"표의 행을 누르면 상품 정보와 해당 SKU의 이력 화면으로 이동합니다.",
				"MVP"
			],
			[
				"INV-012",
				"판매·재고 추이 조회",
				"담당자",
				"상세 화면에서 기간별 판매량과 재고량 변화를 차트로 확인합니다.",
				"MVP"
			],
			[
				"INV-014",
				"CSV 내보내기",
				"담당자",
				"현재 필터 결과를 파일로 내려받아 검토 자료로 사용합니다.",
				"P1"
			],
			[
				"INV-015",
				"조회 상태 처리",
				"시스템",
				"로딩·데이터 없음·연동 지연·오류 상태를 각각 안내합니다.",
				"MVP"
			]
		]
	},
	{
		id: "05",
		title: "대시보드·통계",
		rows: [
			[
				"DASH-001",
				"전체 재고 수량 KPI",
				"담당자",
				"전체 계열사의 현재 재고 수량을 요약합니다.",
				"MVP"
			],
			[
				"DASH-002",
				"전체 재고 금액 KPI",
				"담당자",
				"화면에는 판매가 기준 금액을 표시하고 원가는 노출하지 않습니다.",
				"MVP"
			],
			[
				"DASH-003",
				"정상·주의·위험 비율",
				"담당자",
				"전체 상품 중 위험등급별 비중을 카드와 차트로 보여줍니다.",
				"MVP"
			],
			[
				"DASH-004",
				"계열사별 위험 규모",
				"담당자",
				"3개 계열사의 위험 상품 수와 위험 금액을 비교합니다.",
				"MVP"
			],
			[
				"DASH-005",
				"우선 처리 TOP 5",
				"담당자",
				"위험점수와 처리기한을 기준으로 오늘 먼저 볼 상품을 보여줍니다.",
				"MVP"
			],
			[
				"DASH-006",
				"최근 갱신 상태",
				"담당자",
				"정상 갱신·지연·실패 상태와 마지막 성공 시각을 표시합니다.",
				"MVP"
			],
			[
				"STAT-007",
				"기간별 판매량 차트",
				"담당자",
				"최근 7일·30일 등 기간별 판매량 변화를 보여줍니다.",
				"MVP"
			],
			[
				"STAT-008",
				"기간별 재고 변화 차트",
				"담당자",
				"재고가 줄었는지 늘었는지 계열사와 카테고리별로 비교합니다.",
				"MVP"
			],
			[
				"STAT-009",
				"장기재고 순위",
				"담당자",
				"보관기간이 긴 상품을 순서대로 확인합니다.",
				"MVP"
			],
			[
				"STAT-010",
				"판매부진 순위",
				"담당자",
				"판매속도가 낮고 재고가 남은 상품을 확인합니다.",
				"MVP"
			],
			[
				"STAT-011",
				"전략 성과 요약",
				"담당자",
				"전략별 예상 결과와 실제 결과를 요약해 비교합니다.",
				"P1"
			]
		]
	},
	{
		id: "06",
		title: "위험재고·수요예측",
		rows: [
			[
				"RISK-001",
				"위험점수 계산",
				"시스템",
				"재고수량·판매속도·보관기간과 계열사별 위험 신호를 점수로 계산합니다.",
				"MVP"
			],
			[
				"RISK-002",
				"위험등급 분류",
				"시스템",
				"점수 기준에 따라 정상·주의·위험으로 분류합니다.",
				"MVP"
			],
			[
				"RISK-003",
				"위험 판단 이유 표시",
				"담당자",
				"소비기한 임박·판매속도 저하·보관·폐기 비용 상승 등 이유를 쉽게 보여줍니다.",
				"MVP"
			],
			[
				"RISK-004",
				"하드 차단 검증",
				"시스템",
				"법적 제한·기한·필수 데이터가 없으면 추천 전에 차단합니다.",
				"MVP"
			],
			[
				"RISK-005",
				"계열사별 위험 요소 적용",
				"시스템",
				"웰니스·그린푸드는 소비기한, 리바트는 보관·파손·AS 비용을 반영합니다.",
				"MVP"
			],
			[
				"RISK-006",
				"위험재고 상세 조회",
				"담당자",
				"위험 상품의 현재 상태·비용·과거 판매·재고 흐름을 확인합니다.",
				"MVP"
			],
			[
				"RISK-007",
				"위험분석 배치 실행",
				"시스템",
				"재고 동기화가 끝난 뒤 위험점수를 자동으로 다시 계산합니다.",
				"MVP"
			],
			[
				"RISK-008",
				"위험점수 이력 조회",
				"담당자",
				"날짜별 점수와 등급이 어떻게 바뀌었는지 확인합니다.",
				"P1"
			],
			[
				"DEMAND-001",
				"최근 판매이력 조회",
				"시스템",
				"예측에 사용할 상품별 최근 판매 이력을 가져옵니다.",
				"MVP"
			],
			[
				"DEMAND-002",
				"순판매량 계산",
				"시스템",
				"취소·반품은 제외하고 실제 판매된 수량을 계산합니다.",
				"MVP"
			],
			[
				"DEMAND-003",
				"품절일 제외",
				"시스템",
				"팔고 싶어도 재고가 없었던 날은 판매부진으로 계산하지 않습니다.",
				"MVP"
			],
			[
				"DEMAND-004",
				"기간별 평균 판매량",
				"시스템",
				"최근 7일·14일·28일의 평균 판매량을 계산합니다.",
				"MVP"
			],
			[
				"DEMAND-005",
				"가중이동평균 수요",
				"시스템",
				"최근 기간에 더 큰 비중을 주어 기본 일일수요를 계산합니다.",
				"MVP"
			],
			[
				"DEMAND-006",
				"할인·프로모션 보정",
				"시스템",
				"할인율·쿠폰·프로모션에 따른 판매 증가 계수를 반영합니다.",
				"MVP"
			],
			[
				"DEMAND-007",
				"시즌·요일 보정",
				"시스템",
				"주말·성수기·비수기 등 시점별 판매 차이를 반영합니다.",
				"P1"
			],
			[
				"DEMAND-008",
				"예상 판매량 계산",
				"담당자",
				"판매기간을 기준으로 예상 판매수량과 남을 수량을 보여줍니다.",
				"MVP"
			],
			[
				"DEMAND-009",
				"예상 소진일 계산",
				"담당자",
				"현재 재고를 예상 판매속도로 나누어 소진까지 남은 기간을 보여줍니다.",
				"MVP"
			],
			[
				"DEMAND-010",
				"예측 부족 상태 표시",
				"시스템",
				"판매이력이 부족한 신규 상품은 카테고리 평균 또는 데이터 부족으로 표시합니다.",
				"MVP"
			]
		]
	},
	{
		id: "07",
		title: "AI 전략·시뮬레이션",
		rows: [
			[
				"AI-001",
				"전략 생성 요청",
				"담당자",
				"위험재고 상세에서 최신 데이터 기준으로 AI 전략 생성을 요청합니다.",
				"MVP"
			],
			[
				"AI-002",
				"전략 입력자료 준비",
				"시스템",
				"상품·재고·판매·수요예측·정책·비용을 전략 계산에 전달합니다.",
				"MVP"
			],
			[
				"AI-003",
				"전략 후보 생성",
				"시스템",
				"허용된 할인·기간·수량·채널 조합을 만들고 차단 조건을 먼저 제거합니다.",
				"MVP"
			],
			[
				"AI-004",
				"할인 판매 전략",
				"AI",
				"할인율과 판매기간을 조합한 상품 처리안을 제안합니다.",
				"MVP"
			],
			[
				"AI-005",
				"쿠폰·프로모션 전략",
				"AI",
				"쿠폰·포인트·기간 한정 행사 적용안을 제안합니다.",
				"MVP"
			],
			[
				"AI-006",
				"판매 방식 전략",
				"AI",
				"현재 방식과 외부 채널 활용안을 비교해 적절한 판매 방식을 제안합니다. 실제 등록은 하지 않습니다.",
				"P1"
			],
			[
				"AI-007",
				"번들 전략 제안",
				"AI",
				"다른 계열사 상품과 묶었을 때의 후보와 이유를 제안합니다.",
				"P1"
			],
			[
				"AI-008",
				"목적별 전략 제공",
				"담당자",
				"마진 극대화·빠른 완판·최대 매출 중 목적별 후보를 제공합니다.",
				"MVP"
			],
			[
				"AI-009",
				"예상 결과 제공",
				"시스템",
				"전략별 예상 판매량·매출·이익·잔여재고를 계산합니다.",
				"MVP"
			],
			[
				"AI-010",
				"추천 이유 작성",
				"AI",
				"계산 결과를 바꾸지 않고 담당자가 이해하기 쉬운 이유와 주의사항을 작성합니다.",
				"MVP"
			],
			[
				"AI-011",
				"전략 초안 저장",
				"담당자",
				"추천 전략과 사용한 데이터·수식 버전을 저장합니다.",
				"MVP"
			],
			[
				"AI-012",
				"AI 실패 대체 처리",
				"시스템",
				"LLM이 실패해도 결정론적 계산 결과와 실패 원인을 보여줍니다.",
				"P1"
			],
			[
				"SIM-001",
				"시뮬레이션 수량 변경",
				"담당자",
				"전략을 적용할 상품 수량을 직접 바꿔봅니다.",
				"MVP"
			],
			[
				"SIM-002",
				"할인율·기간 변경",
				"담당자",
				"할인율과 판매기간을 변경해 결과를 즉시 다시 계산합니다.",
				"MVP"
			],
			[
				"SIM-003",
				"비용 조건 변경",
				"담당자",
				"쿠폰·포인트·배송비·프로모션 비용을 입력합니다.",
				"MVP"
			],
			[
				"SIM-004",
				"입력값 유효성 검사",
				"시스템",
				"재고 초과·음수 가격·허용범위 밖 할인·0일 기간을 막습니다.",
				"MVP"
			],
			[
				"SIM-005",
				"결과 즉시 재계산",
				"시스템",
				"조건 변경 후 예상 판매량·매출·이익·마진율을 다시 계산합니다.",
				"MVP"
			],
			[
				"SIM-006",
				"기준선 대비 비교",
				"담당자",
				"아무 조치가 없을 때와 추천안·수정안을 나란히 비교합니다.",
				"MVP"
			],
			[
				"SIM-007",
				"잔여재고·회피비용 계산",
				"시스템",
				"행사 후 잔여재고와 줄어드는 보관·폐기 비용을 계산합니다.",
				"MVP"
			],
			[
				"SIM-008",
				"음수 마진 경고",
				"시스템",
				"판매가 손실이 있어도 폐기보다 유리한지 판단할 수 있도록 경고합니다.",
				"MVP"
			],
			[
				"SIM-009",
				"시뮬레이션 저장",
				"담당자",
				"최종 조건과 결과를 simulation run으로 저장해 다시 열 수 있게 합니다.",
				"MVP"
			]
		]
	},
	{
		id: "08",
		title: "번들·검토·성과·운영",
		rows: [
			[
				"BND-001",
				"번들 후보 추천",
				"시스템",
				"위험재고를 기준으로 함께 판매할 수 있는 다른 계열사 상품을 찾습니다.",
				"P1"
			],
			[
				"BND-002",
				"번들 구성 편집",
				"담당자",
				"구성 상품을 추가·삭제하고 상품별 구성수량을 정합니다.",
				"P1"
			],
			[
				"BND-003",
				"번들 판매가격 설정",
				"담당자",
				"번들 전체 판매가격과 할인 혜택을 입력합니다.",
				"P1"
			],
			[
				"BND-004",
				"번들 적용 가능수량 계산",
				"시스템",
				"구성품 중 가장 적게 남은 수량을 기준으로 전략에 적용할 번들 수를 계산합니다.",
				"P1"
			],
			[
				"BND-005",
				"번들 제한 검증",
				"시스템",
				"품절·법적 제한·기한·중복 상품 포함 여부를 확인합니다.",
				"P1"
			],
			[
				"BND-006",
				"번들 매출·마진 계산",
				"시스템",
				"번들 가격과 구성 비용을 기준으로 예상 매출·마진을 계산합니다.",
				"P1"
			],
			[
				"BND-007",
				"번들 임시 저장",
				"담당자",
				"완성 전 번들 구성을 임시 저장하고 다시 편집합니다.",
				"P1"
			],
			[
				"REVIEW-001",
				"전략 수정·버전 생성",
				"담당자",
				"AI 추천안을 수정하면 새 버전으로 저장하고 이전 결과를 보존합니다.",
				"MVP"
			],
			[
				"REVIEW-002",
				"Teams 검토 요청",
				"담당자",
				"상품·조건·예상 결과·추천 이유를 Teams로 보냅니다.",
				"MVP"
			],
			[
				"REVIEW-003",
				"Teams 전송 상태 확인",
				"담당자",
				"작성 중·전송 완료·전송 실패 상태를 서비스에서 확인합니다.",
				"MVP"
			],
			[
				"REVIEW-004",
				"외부 실행 경계 확인",
				"시스템",
				"승인·거절 기록과 전략 전달까지만 제공하고, 주문·결제·배송·상품 등록은 외부 시스템에서 처리합니다.",
				"MVP"
			],
			[
				"PERF-001",
				"예상 결과 저장",
				"시스템",
				"전략별 예상 판매량·매출·마진·잔여재고를 저장합니다.",
				"P1"
			],
			[
				"PERF-002",
				"더미 실제 결과 저장",
				"시스템",
				"발표용 판매이력으로 실제 판매량·매출·마진을 저장합니다.",
				"P1"
			],
			[
				"PERF-003",
				"예상·실제 비교",
				"담당자",
				"예상과 실제의 판매량·매출·마진·잔여재고 차이를 보여줍니다.",
				"P1"
			],
			[
				"PERF-004",
				"달성률·예측 오차",
				"시스템",
				"목표 달성률과 수량·백분율 기준 예측 오차를 계산합니다.",
				"P1"
			],
			[
				"PERF-005",
				"전략 성과 차트",
				"담당자",
				"전략 목적과 계열사별 성과를 차트로 비교합니다.",
				"P1"
			],
			[
				"OPS-001",
				"동기화 이력 조회",
				"운영자",
				"계열사별 배치 시작·완료·실패·처리 건수를 확인합니다.",
				"P1"
			],
			[
				"OPS-002",
				"분석·예측 이력 조회",
				"운영자",
				"위험분석과 수요예측 실행 결과와 사용 버전을 확인합니다.",
				"P1"
			],
			[
				"OPS-003",
				"전략 생성·수정 이력",
				"운영자",
				"누가 언제 어떤 전략을 만들고 수정했는지 남깁니다.",
				"P1"
			],
			[
				"OPS-004",
				"오류·모니터링 상태",
				"운영자",
				"Sentry·ELK·Prometheus·Grafana에서 시스템 오류와 배치 상태를 확인합니다.",
				"P1"
			]
		]
	}
];
function PhaseBadge({ phase }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: `capability-phase capability-phase-${phase.toLowerCase()}`,
		children: phase
	});
}
function CapabilitiesPage() {
	const [activeTrack, setActiveTrack] = (0, import_react.useState)("all");
	const [query, setQuery] = (0, import_react.useState)("");
	const [openCapabilityId, setOpenCapabilityId] = (0, import_react.useState)(null);
	const currentTrack = tracks.find((track) => track.id === activeTrack) ?? tracks[0];
	const selectedCapability = openCapabilityId ? capabilities.find((capability) => capability.id === openCapabilityId) ?? null : null;
	const visibleCapabilities = (0, import_react.useMemo)(() => {
		const normalizedQuery = query.trim().toLowerCase();
		return capabilities.filter((capability) => {
			const matchesTrack = activeTrack === "all" || capability.track === activeTrack || activeTrack === "common" && capability.track === "common";
			const matchesQuery = !normalizedQuery || `${capability.id} ${capability.title} ${capability.summary} ${capability.inputs.join(" ")} ${capability.outputs.join(" ")}`.toLowerCase().includes(normalizedQuery);
			return matchesTrack && matchesQuery;
		});
	}, [activeTrack, query]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-hero capability-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container capability-hero-grid",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "06 · Capability specification"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"기획을 기능 단위로",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "구현 가능한 화면" }),
						"으로 펼칩니다."
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "3개 계열사의 데이터와 서비스 책임을 한 문서에 연결했습니다. 공통 기능은 함께 보고, 계열사별 필수 입력·하드 차단·비용은 분리해서 확인합니다." }) })
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-hero-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Read this page as"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "기능 → 데이터 → 계산 → 승인" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "각 기능 카드를 누르지 않아도 입력값, 출력값, 운영 규칙을 한 번에 확인할 수 있습니다." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "capability-mini-flow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "원천" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "정책" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "수식" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "승인" })
							]
						})
					]
				}) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section capability-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-stats",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "14" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "기능 계약" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "계열사 프로필" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "서비스 레이어" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "P0 → P2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "단계별 범위" })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading capability-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Capability map"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"필요한 기능을",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "관심 범위별로" }),
								" 살펴봅니다."
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "공통 서비스에서 계열사별 계산 요소까지, 각 카드에 입력·출력·운영 규칙을 함께 적었습니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-toolbar",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "capability-tabs",
							role: "tablist",
							"aria-label": "기능 범위 필터",
							children: tracks.map((track) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								role: "tab",
								"aria-selected": activeTrack === track.id,
								className: activeTrack === track.id ? "is-active" : "",
								onClick: () => setActiveTrack(track.id),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: track.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: track.hint })]
							}, track.id))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "capability-search",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "기능 검색"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: query,
									onChange: (event) => setQuery(event.target.value),
									placeholder: "기능·입력·출력 검색"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									"aria-hidden": "true",
									children: "⌕"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "capability-filter-note",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: currentTrack.label }),
							" · ",
							currentTrack.hint,
							" · ",
							visibleCapabilities.length,
							"개 기능 표시"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "capability-table-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "capability-table",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: "기능별 상세 명세 표. 상세 보기를 누르면 고려 요소와 완료 기준을 확인할 수 있습니다."
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "ID"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "기능명"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "적용 범위"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "단계"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "작은 기능 단위"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "핵심 입력 · 결과"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "상세"
									})
								] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: visibleCapabilities.map((capability) => {
									const details = capabilityDetails[capability.id];
									const trackLabel = tracks.find((track) => track.id === capability.track)?.label ?? "공통 서비스";
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "capability-id",
											children: capability.id
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "capability-table-title",
											onClick: () => setOpenCapabilityId(capability.id),
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: capability.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: capability.summary })]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `capability-table-scope capability-table-scope-${capability.track}`,
											children: trackLabel
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseBadge, { phase: capability.phase }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "capability-table-list",
											children: details.micro.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "capability-table-contract",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "입력" }), capability.inputs.join(" · ")] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "결과" }), capability.outputs.join(" · ")] })]
										}) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											className: "capability-table-detail",
											onClick: () => setOpenCapabilityId(capability.id),
											children: ["상세 보기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", {
												"aria-hidden": "true",
												children: "↗"
											})]
										}) })
									] }, capability.id);
								}) })
							]
						})
					}),
					visibleCapabilities.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-empty",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "검색 결과가 없습니다." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "다른 기능명이나 입력 요소로 검색해 보세요." })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section capability-section mvp-menu-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "MVP screen map"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"메뉴는 역할별로 나누고,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "대시보드와 재고표는 분리합니다." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "대시보드는 처음 들어왔을 때 핵심 지표와 우선 처리 대상을 보여줍니다. 통합 재고는 상품과 SKU를 찾아보고 필터링하는 작업 화면입니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mvp-menu-table-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "mvp-menu-table",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
									className: "sr-only",
									children: "MVP 메뉴별 역할과 세부 기능"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "메뉴"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "화면 역할"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										scope: "col",
										children: "이 메뉴에서 하는 일"
									})
								] }) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: mvpMenu.map((menu) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: menu.id === "01" || menu.id === "02" ? "mvp-menu-emphasis" : void 0,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "mvp-menu-number",
												children: menu.id
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: menu.label }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: menu.kind })
										] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: menu.purpose }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: menu.features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: feature }, feature)) }) })
									]
								}, menu.id)) })
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mvp-menu-note",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "화면을 나누는 기준" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "대시보드" }),
							"는 숫자를 요약해 “무엇을 볼지” 결정하고, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "통합 재고" }),
							"는 표·검색·필터로 “어떤 상품을 처리할지” 찾습니다."
						] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section capability-section inventory-design-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "재고 화면 설계"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"통합 재고 표와",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "상품 상세 화면을 이렇게 구성합니다." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "첨부해주신 재고표·상세 화면의 흐름을 참고하되, 현재 프로젝트 기준인 3개 계열사 통합·원가 비노출·SKU 단위 조회로 다시 정리한 목업입니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inventory-design-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "inventory-design-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inventory-mockup inventory-mockup-table",
								role: "img",
								"aria-label": "3개 계열사 통합 재고 조회 화면 목업",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-mock-top",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "통합 재고 조회" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "기준시각 2026.06.10 09:00" })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-mock-filters",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "전체 계열사⌄" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "전체 상품군⌄" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "전체 위험도⌄" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "상품명·코드 검색" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "inventory-mock-table-wrap",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "inventory-mock-table",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: [
												"계열사",
												"상품 코드",
												"상품명·카테고리",
												"추천 판매 방식",
												"상품 상태",
												"전략 대상 수량",
												"소진예상",
												"위험",
												"추천 행동"
											].map((head) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: head }, head)) }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: inventoryMockRows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((cell, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												className: index === 7 ? `inventory-mock-risk inventory-mock-risk-${cell === "위험" ? "danger" : cell === "주의" ? "warning" : "safe"}` : void 0,
												children: index === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: cell }) : index === 7 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cell }) : cell
											}, `${row[1]}-${index}`)) }, row[1])) })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-mock-foot",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "원가·취득원가는 기본 화면에 표시하지 않음" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "행을 누르면 상품 상세 →" })]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "screen-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "screen-meta",
										children: "화면 01 · 목록 화면"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "통합 재고 조회" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "계열사·상품·SKU를 한 표에서 비교하고, 위험도·소진예상일·추천 행동으로 처리 우선순위를 찾습니다." })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "inventory-design-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inventory-mockup inventory-mockup-detail",
								role: "img",
								"aria-label": "상품 상세 조회 화면 목업",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-detail-header",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "inventory-detail-icon",
												children: "H"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WEL-VIT-001 · 현대웰니스" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "멀티비타민 데일리" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "건강기능식품 · 영양 · 운영중" })
											] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "×" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-detail-tabs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "상품 기본정보" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "AI 위험 분석·기준선" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "재고·외부 성과 이력" })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-detail-stats",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "판매가" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "₩39,000" })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "가용재고" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "320개" })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "예상 소진" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "18일" })] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: "위험 등급" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-danger",
												children: "위험"
											})] })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-detail-panels",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inventory-detail-panel",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "옵션·로트별 재고" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "총 320개" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "기본형 · 30정" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "210개" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "기본형 · 60정" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "110개" })] })] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inventory-detail-panel",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "최근 흐름" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "최근 30일" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "순판매량" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "17개 소진" })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "입고 이력" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "+189개" })] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "위험 이유" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
													className: "text-danger",
													children: "소비기한 임박"
												})] })
											] })]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inventory-detail-action",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "추천: 할인 전략 검토" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											children: "AI 전략 수립으로 이동"
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "screen-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "screen-meta",
										children: "화면 02 · 상세 화면"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "상품 상세 조회" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "목록에서 선택한 SKU의 옵션·로트·판매 흐름·위험 이유를 확인하고, 전략 시뮬레이션으로 바로 이동합니다." })
								]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inventory-design-spec-grid",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "목록 컬럼"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"통합 재고 표에",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "보여줄 항목" })
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "functional-spec-table-wrap",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "functional-spec-table",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
										className: "sr-only",
										children: "통합 재고 표 컬럼 설명"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											children: "컬럼"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											children: "무엇을 보여주나"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											children: "왜 필요한가"
										})
									] }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: inventoryColumns.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: row[0] }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row[1] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row[2] })
									] }, row[0])) })
								]
							})
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "section-heading",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "상세 구성"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
								"상품 상세에서",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "확인할 항목" })
							] })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "functional-spec-table-wrap",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "functional-spec-table",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
										className: "sr-only",
										children: "상품 상세 화면 구성 설명"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											children: "영역"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											children: "표시 내용"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											scope: "col",
											children: "사용 목적"
										})
									] }) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: detailFields.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: row[0] }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row[1] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: row[2] })
									] }, row[0])) })
								]
							})
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-callout inventory-design-rule",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "공통 화면 규칙" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "원가·취득원가" }), "는 기본 목록과 상세 화면에 표시하지 않고 서버 계산에만 사용합니다. 계열사마다 다른 값은 같은 컬럼 안에서 배지·상세 필드로 나누어 보여주며, 모든 수량·위험·추천에는 기준시각과 데이터 상태를 함께 표시합니다."] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight band capability-section functional-spec-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Detailed functional specification"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"기능 ID 단위로",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "개발 범위를 쪼갭니다." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "큰 메뉴를 실제 개발·테스트할 수 있는 작은 기능으로 나눴습니다. 우선순위는 MVP에서 꼭 필요한 기능인지, 이후 확장 기능인지 구분한 값입니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "functional-spec-summary",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: functionalSpecGroups.reduce((total, group) => total + group.rows.length, 0) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "상세 기능" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: functionalSpecGroups.length }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "기능 영역" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "명세 표 열" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "MVP·P1·P2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "우선순위" })] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "functional-spec-groups",
						children: functionalSpecGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "functional-spec-group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "functional-spec-group-heading",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "functional-spec-group-number",
										children: group.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: group.title }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [group.rows.length, "개 기능"] })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "functional-spec-table-wrap",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									className: "functional-spec-table",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("caption", {
											className: "sr-only",
											children: [group.title, " 상세 기능 명세"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												children: "기능 ID"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												children: "기능명"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												children: "주체"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												children: "설명"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												scope: "col",
												children: "우선순위"
											})
										] }) }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: group.rows.map(([id, title, actor, description, priority]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: id }) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `functional-spec-actor functional-spec-actor-${actor === "시스템" ? "system" : actor === "담당자" ? "owner" : actor === "AI" ? "ai" : actor === "고객" ? "customer" : "ops"}`,
												children: actor
											}) }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: description }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `functional-spec-priority functional-spec-priority-${priority.toLowerCase()}`,
												children: priority
											}) })
										] }, id)) })
									]
								})
							})]
						}, group.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-callout",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "명세를 읽는 방법" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "MVP" }),
							"는 이번 시연에서 반드시 동작해야 하는 기능, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "P1" }),
							"은 핵심 흐름을 보완하는 기능, ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "P2" }),
							"는 고객 공개·실제 연동처럼 후순위로 두는 기능입니다. “주체”는 해당 기능을 사용하는 사람 또는 자동으로 처리하는 시스템을 뜻합니다."
						] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight band capability-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Affiliate profiles"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "같은 화면, 다른 계산 기준" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "상품과 서비스는 한곳에서 관리하지만, 실제 전략을 계산하는 필수 요소는 계열사별로 달라집니다." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "affiliate-profile-grid",
					children: affiliateProfiles.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `affiliate-profile affiliate-profile-${profile.color}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "affiliate-profile-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capability-id",
									children: profile.unit
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "affiliate-profile-dot",
									"aria-hidden": "true"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: profile.name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: profile.focus }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "필수 입력" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: profile.fields })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "주요 비용" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: profile.costs })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "차단 기준" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: profile.stop })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", { children: "위험 신호" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: profile.signal })] })
							] })
						]
					}, profile.id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section capability-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Service architecture"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"기능은 이 순서로",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "서로 연결됩니다." })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "AI 추천은 마지막에 놓입니다. 먼저 원천 데이터와 정책을 검증하고, 숫자 계산이 끝난 뒤 사람이 승인합니다." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "capability-layer-grid",
					children: architectureLayers.map(([num, title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: num }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })
					] }, num))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight band capability-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Formula contract"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"수식은 공통 골격,",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"변수는 계열사 프로필"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "수식의 이름과 계산 순서는 통일하지만, 처리기한·비용·위험 신호는 계열사와 카테고리별 profile에서 가져옵니다. 실제 판매·배송·주문 실행은 외부 시스템에서 담당합니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "formula-contract-grid",
						children: formulaRows.map(([name, formula, rule]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "formula-contract-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "capability-label",
									children: name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: formula }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: rule })
							]
						}, name))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-callout",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "계산 결과의 필수 버전" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
							"모든 전략 결과에는 ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "snapshot_id · formula_version · policy_version · model_version" }),
							"을 남겨 같은 입력으로 결과를 재현할 수 있어야 합니다."
						] })]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section capability-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container capability-two-column",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Lifecycle"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
							"데이터와 전략은",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "상태로 추적" }),
							"합니다."
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "화면에 보이는 추천 하나가 어느 단계에서 막혔는지, 누가 다음 검토를 해야 하는지 상태로 확인합니다." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "state-list",
					children: stateRows.map(([name, start, middle, end]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "state-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: name }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: start }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: middle }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { children: "→" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: end })
						]
					}, name))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "capability-api-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Interface surface"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", { children: [
							"서비스가 제공하는",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"주요 인터페이스"
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "GET" }), " 상품·재고·위험·이력 조회"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "POST" }), " 전략 추천 요청·시뮬레이션"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "POST" }), " 검토 요청·승인·거절"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "POST" }), " 재고 갱신·위험 재분석 배치"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "GET" }), " 외부 성과 결과와 예상 비교"] })
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "모든 응답은 request_id, 기준시각, 권한 범위, 정책·수식 버전을 포함합니다. 주문·결제·배송 실행 API는 제공하지 않습니다." })
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight band capability-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "Delivery boundary"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", { children: [
								"이번 프로젝트에서 먼저",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "검증할 것" })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "전체 기능을 한 번에 운영 기능으로 만들지 않고, 대표 수직 슬라이스에서 데이터·계산·승인·성과 회수를 끝까지 검증합니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
						className: "delivery-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseBadge, { phase: "P0" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "기반과 계산" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "권한, 공통 모델, 데이터 품질, 하드 차단, 결정론적 위험점수·시뮬레이션." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseBadge, { phase: "P1" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "추천과 승인" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "후보 생성, 담당자 수정, 승인·Teams 전달, 실제 결과 회수와 오차 비교." })
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhaseBadge, { phase: "P2" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "확장" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "교차 계열사 번들, 재고 이동, 고객용 카탈로그, 자동 재학습·모델 배포." })
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "capability-open",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "구현 전 확정할 질문" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "원천 시스템·데이터 소유자 · 대표 카테고리 · 기준선 · 수요 이력 기간 · 위험 가중치 · LLM 보존·비용 정책" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "button primary",
							href: "/prd",
							children: ["제품 범위 보기 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "→" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "button secondary",
							href: "/formulas",
							children: "수식 및 계산 보기"
						})]
					})
				]
			})
		}),
		selectedCapability && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CapabilityDetailModal, {
			capability: selectedCapability,
			onClose: () => setOpenCapabilityId(null)
		})
	] });
}
//#endregion
export { CapabilitiesPage as default };
