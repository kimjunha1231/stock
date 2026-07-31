import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

const modelRows = [
  ['모델 1', '트렌드 신호 계산기', '통계 계산', '검색·SNS·조회·판매 변화율을 정규화해 상승·유지·하락 신호 생성', '상품 키워드, 수집시각, 상대 검색지수, 언급량, 순판매량', '학습보다 데이터 품질·출처·중복 제거를 먼저 확인'],
  ['모델 2', '트렌드 반영 수요예측', '학습 모델', '기본수요에 트렌드·가격·프로모션·요일·계절 효과를 추가해 일별 예측', '판매·품절·반품·가격·프로모션·트렌드 자료', '기준모델과 시간순 검증(rolling-origin)을 거친 뒤 운영 반영'],
  ['엔진 1', '위험·하드 차단 엔진', '규칙 엔진', '법규·소유권·기한·배송·설치·검사·데이터 품질을 먼저 검사하고 위험점수 계산', '정책 프로필, 재고, 로트, 비용, 가능량', 'AI 학습 결과가 아니라 정해진 규칙으로 고정'],
  ['엔진 2', '전략·시뮬레이션 엔진', '수식 엔진', '허용된 후보의 예상 판매·매출·마진·잔여재고를 계산하고 목적별 순위화', '예측수요, 가격, 할인, 비용, 기준선, 정책 버전', '같은 입력이면 같은 결과가 나와야 함'],
  ['모델 3', 'AI 설명 도우미(LLM)', '생성형 AI', '계산 결과와 근거를 담당자가 이해할 문장과 확인 질문으로 변환', '계산 결과 데이터(JSON), 데이터 기간, 모델·정책 버전', '숫자·가격·수량을 새로 만들거나 바꾸지 않음'],
];

const productRows = [
  ['현대웰니스', '비타민·마그네슘·오메가3·콜라겐·세트', '성분·기능·대상·로트·소비기한·보관·표시', '소비기한·표시·회수·폐기', '잔여기한 기반 처리 속도·할인·묶음'],
  ['현대리바트', '거실·침실·주방 가구, 옵션·모듈 제품', '옵션·판매채널·배송권역·설치여부·비용정책', '배송비·설치비·보관비·예상 파손비·반품비·무료배송 기준', '비용을 반영해 할인·묶음·처리 전략 계산'],
  ['현대그린푸드', '농산물·수산물·축산물·가공식품·케어푸드', '로트·소비기한·온도·검사·이력추적·채널·콜드체인', '소비기한·검사·콜드체인·폐기', '로트별 소진·냉장/냉동 처리량·폐기 회피'],
];

const dbRows = [
  ['기준정보', 'affiliate(계열사) · legal_entity(법인) · channel(판매채널) · category(카테고리) · brand(브랜드)', '어느 계열사의 어떤 상품인지 공통 ID로 연결'],
  ['상품', 'product(상품) · product_option(상품 옵션) · sku(실제 판매 단위) · external_product_mapping(원천 코드 연결)', '상품 설명과 실제 판매 단위, 원천 시스템 코드를 보존'],
  ['재고', 'inventory_snapshot(재고 시점) · inventory_lot(로트) · inventory_movement(입출고 이력)', '현재고·예약분·가용수량·로트·입출고 이력 저장'],
  ['판매', 'sales_event(판매 기록) · promotion_event(프로모션 기록) · return_event(반품 기록)', '판매량·가격·할인·품절·반품을 날짜별로 저장'],
  ['AI 입력', 'trend_signal(트렌드 신호) · feature_snapshot(계산용 자료 묶음) · forecast_run(예측 실행 기록)', '트렌드 원천과 예측값·예측구간·모델 버전 저장'],
  ['전략', 'policy_profile(계열사 정책) · risk_assessment(위험 평가) · strategy_candidate(전략 후보) · simulation_run(시뮬레이션 기록)', '계열사 정책, 위험 이유, 후보와 시뮬레이션 결과 저장'],
  ['운영', 'model_version(모델 버전) · data_quality_issue(데이터 오류) · approval_event(승인 기록) · audit_log(변경 이력)', '재현·승인·오류·변경 이력 추적'],
];

const profileRows = [
  ['현대웰니스', 'wellness_product_profile', '성분·기능·대상·로트·소비기한·보관조건·표시·회수상태', '소비기한 임박·표시 누락·회수·폐기비용'],
  ['현대리바트', 'livart_product_profile', '옵션·판매채널·배송권역·설치여부·비용정책', '배송·설치·보관·예상 파손·반품·AS 비용'],
  ['현대그린푸드', 'greenfood_product_profile', '로트·소비기한·온도구분·검사·이력추적·채널·콜드체인', '보관·배송·검사·폐기·반품 비용'],
];

const costProfileRows = [
  ['sku_cost_profile', '상품별 비용', 'sku_id·보관비 일단가·배송비·무료배송 기준금액·설치비·예상 파손비·예상 반품비·폐기비·할인 한도', '특정 상품만 다른 비용을 저장합니다.'],
  ['affiliate_policy_profile', '계열사·카테고리 기본 비용', 'affiliate_id·category_id·기본 배송비·기본 설치비·기본 보관비·기본 파손비·기본 반품비·무료배송 기준·적용기간·정책 버전', 'SKU별 값이 없을 때 사용할 기본값입니다.'],
  ['strategy_cost_snapshot', '계산 당시 비용 복사본', 'snapshot_id·sku_id·배송비·설치비·보관비·예상 파손비·예상 반품비·폐기비·적용 정책 버전', '정책이 바뀌어도 과거 전략 결과를 다시 계산할 수 있게 합니다.'],
];

const costCalculationRows = [
  ['배송비', '주문금액 ≥ 무료배송 기준금액이면 0원, 아니면 기본 배송비 + 지역 추가비', '할인 전략에서 무료배송 비용까지 이익에 반영'],
  ['설치비', '설치가 필요하면 설치비, 필요하지 않으면 0원', '현대리바트의 할인·묶음 전략에 반영'],
  ['보관비', '보관비 일단가 × 보관일수', '빠른 처리로 줄일 수 있는 비용은 회피비용으로 반영'],
  ['예상 파손·반품비', '예상 파손비 + 예상 반품비', '과거 비율을 쓰더라도 최종 계산에는 금액으로 변환'],
  ['최종 전략 이익', '할인 후 매출 − 배송비 − 설치비 − 보관비 − 파손·반품비 − 프로모션비 + 회피 폐기비용', '기준선과 비교해 목적별 전략 순위를 계산'],
];

const guideFormulaRows = [
  ['트렌드 신호', '검색관심도 변화 + SNS 언급량 변화 + 판매량 변화 + 조회·찜·장바구니 변화', '검색량만 급증해도 판매·재고 데이터가 부족하면 자동 입고로 확정하지 않음'],
  ['수요예측', '기본수요 + 트렌드 효과 + 가격 효과 + 프로모션 효과 + 계절·요일 효과 + 계열사·카테고리 효과', '처음에는 기준모델과 비교하고, 예측 범위와 데이터 부족 상태를 함께 표시'],
  ['위험 판단', '위험점수 0~100 + 법규·소유권·기한·배송·설치·검사 하드 차단', '점수가 낮아도 판매 불가 조건이면 추천 후보에서 제외'],
  ['전략 목적함수', '할인 후 매출 − 수수료 − 배송·설치비 − 프로모션비 − 반품비 + 회피 보관·폐기비용 − 잠식 − 위험손실', '기준선과 비교해 최대 마진·빠른 소진·최대 매출·위험 최소화 순위를 따로 계산'],
];

const operationSteps = [
  ['01', '원천 데이터 수집', 'ERP·POS·WMS·판매채널에서 상품·재고·판매 자료를 가져옵니다.'],
  ['02', '상품·SKU 통합', '계열사 원천 코드를 공통 상품·SKU ID와 연결합니다.'],
  ['03', '품질·트렌드 확인', '품절·반품·오류를 정리하고 검색·SNS·판매 변화를 계산합니다.'],
  ['04', '수요예측', '기본수요와 트렌드·가격·프로모션·계절 효과로 앞으로의 판매량을 예측합니다.'],
  ['05', '위험·전략 계산', '하드 차단 후 전략 후보별 매출·비용·마진·잔여재고를 계산합니다.'],
  ['06', '설명·승인·성과 회수', 'AI가 결과를 쉽게 설명하고 담당자가 승인한 뒤 실제 결과를 다시 저장합니다.'],
];

const aiFunctionRows = [
  ['AI-01', '트렌드 신호 수집·해석', '검색·SNS·판매·조회 변화가 갑자기 늘거나 줄었는지 감지', '검색어 추이·SNS 언급량·판매량·조회수·프로모션 노출량', '상승·하락 신호·변화율·출처·수집시각', '“검색과 판매가 2주 연속 늘었습니다. 입고 확대를 검토하세요.”'],
  ['AI-02', '트렌드 반영 수요예측', '평소 판매 흐름에 트렌드·계절·요일·가격·프로모션 효과를 반영', '판매이력·품절·반품·가격·할인·시즌·요일·트렌드 점수', '예상 일판매량·예측 범위·예상 소진일·신뢰 상태', '판매 이력이 부족하면 “예측 부족”으로 표시하고 자동 입고하지 않음'],
  ['AI-03', '위험재고 탐지', '판매속도·남은 기한·비용·데이터 품질로 위험 정도를 계산', '현재고·예상수요·보관일·소비기한·보관비·폐기비·품질상태', '위험점수 0~100·정상/주의/위험·판단 이유', '법규·소유권·기한·설치·검사 문제는 점수보다 먼저 추천 차단'],
  ['AI-04', '판매전략 후보 추천', '목표에 맞춰 할인·쿠폰·채널·번들·처리 시점을 조합', '예상수요·허용 할인·채널 비용·재고·처리기한·정책', '최대 3개 전략·예상 판매·매출·이익·잔여재고·추천 이유', '숫자는 수식 엔진이 계산하고 AI는 설명만 작성'],
  ['AI-05', '전략 시뮬레이션·설명', '수량·할인율·기간·비용을 바꾸며 기준선·추천안·수정안을 비교', '시뮬레이션 조건·정책 버전·기준 시점 자료·수요예측', '예상 판매·매출·마진·소진기간·잔여재고·회피비용', '조건을 바꿀 때마다 같은 수식으로 즉시 다시 계산'],
];

const forecastingSteps = [
  ['1. 데이터 모으기', '상품·SKU별 판매량, 품절, 가격·할인, 프로모션, 반품·취소, 재고·입고 이력을 최소 28일 이상 쌓습니다.'],
  ['2. 트렌드 신호 만들기', '검색·SNS·조회수는 날짜와 출처를 함께 저장하고 전주 대비 변화율과 7일 이동평균을 계산합니다.'],
  ['3. 학습용 정답 만들기', '예측 기준일 이후 실제 7일·14일 판매량을 연결합니다. 품절로 못 판 날은 판매 부진으로 학습하지 않습니다.'],
  ['4. 모델 학습·비교하기', '카테고리 평균·이동평균을 기준으로 두고 트렌드 변수를 추가한 모델의 오차가 줄어드는지 비교합니다.'],
  ['5. 시간 순서로 검증하기', '과거로 학습하고 이후 기간으로 검증하며 미래 데이터를 섞지 않습니다. 계열사·카테고리별 오차도 따로 봅니다.'],
  ['6. 운영에 연결하기', '예측값·예측 범위·사용 기간·모델 버전을 저장하고 신뢰도가 낮으면 보수적 규칙 결과로 대체합니다.'],
  ['7. 실제 결과로 점검하기', '전략 실행 후 실제 판매·매출·잔여재고와 예측을 비교합니다. 검증 전 자동 재학습·자동 입고는 하지 않습니다.'],
];

const strategyRows = [
  ['최대 마진', '기준선보다 추가 이익(M_inc)이 가장 큰 후보', '판매가·할인·수수료·배송·반품·회피비용', '최소 마진 미만이면 제외'],
  ['빠른 소진', '처리기한 안의 소진기간·잔여재고', '예측 판매량·현재고·처리기한·입고 리드타임', '기한 안에 처리 불가하면 제외'],
  ['최대 매출', '예상 판매수량 × 실판매가', '가격·수량·기간·채널 노출·프로모션', '마진 하한·법적 제한 확인'],
  ['위험 최소화', '회피비용 − 위험손실', '소비기한·보관·파손·배송·폐기 비용', '실제로 줄어드는 비용만 반영'],
];

const sourceIds = ['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'google-trends-help', 'social-demand-informs', 'forecasting-tscv', 'forecasting-hierarchy', 'markdown-paper', 'markdown-perishable', 'food-label-law'];

function SourceRail({ ids, note }: { ids: string[]; note: string }) {
  const sourceItems = ids.map((id) => sources.find((source) => source.id === id)).filter(Boolean);
  return <aside className="blueprint-source-rail" aria-label="관련 출처">
    <span className="blueprint-source-kicker">이 내용의 출처</span>
    <strong>근거를 바로 확인하세요</strong>
    <p>{note}</p>
    <div className="blueprint-source-list">{sourceItems.map((source) => source ? <SourceNote key={source.id} source={source} /> : null)}</div>
  </aside>;
}

export default function AiBlueprintPage() {
  return <>
    <section className="page-hero capability-hero">
      <div className="container">
        <Reveal><span className="eyebrow">AI 기능·데이터·개발 가이드</span></Reveal>
        <Reveal><h1>AI가 무엇을 보고,<br /><em>어떻게 추천하는지 한 번에 이해합니다.</em></h1></Reveal>
        <Reveal><p>AI 기능, 계열사별 상품 데이터, Oracle 저장 구조, 통합 재고 화면, 수식, 학습·검증 순서를 하나로 연결했습니다. 처음 보는 팀원도 이 페이지를 읽고 개발 흐름을 설명할 수 있도록 구성했습니다.</p></Reveal>
        <div className="actions" style={{ marginTop: 26 }}><Link className="button primary" href="/ai-guide">AI 기능 길라잡이 보기 →</Link><Link className="button secondary" href="/formulas">수식 및 계산 보기</Link></div>
      </div>
    </section>

    <section className="section blueprint-team-guide-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">팀원용 상세 설계 가이드</span><h2>처음 읽는 팀원도<br /><em>이 페이지 하나로 이해합니다.</em></h2><p>이 프로젝트는 계열사마다 AI를 따로 만드는 것이 아니라, 공통 계산 흐름에 계열사·상품별 정책 프로필을 끼워 넣는 구조입니다.</p></div>
        <div className="blueprint-decision-grid"><article><span>01</span><strong>학습 모델 1개</strong><p>판매·품절·가격·프로모션·트렌드를 함께 보는 공통 수요예측 모델입니다.</p></article><article><span>02</span><strong>통계 계산 1개</strong><p>검색·SNS·조회·판매량 변화로 트렌드 상승·유지·하락을 계산합니다.</p></article><article><span>03</span><strong>설명용 AI 1개</strong><p>수식 엔진이 계산한 결과만 받아 담당자에게 쉬운 말로 설명합니다.</p></article><article><span>04</span><strong>규칙·수식 엔진</strong><p>위험 차단과 손익 계산은 같은 입력에 같은 결과가 나오도록 고정합니다.</p></article></div>
        <div className="blueprint-guide-rule"><strong>가장 중요한 분리 원칙</strong><p>AI 설명 도우미가 가격·수량을 직접 정하지 않습니다. <b>수요예측 → 위험·하드 차단 → 전략 수식 계산 → AI 설명 → 담당자 승인</b> 순서로 작동합니다.</p></div>

        <div className="blueprint-guide-section-heading"><span>AI 기능별 상세</span><h3>필요한 자료부터<br /><em>화면에 보일 결과까지</em></h3><p>아래 표는 “무슨 AI인가”보다 실제 개발자가 연결해야 할 입력·결과·예외를 기준으로 정리했습니다.</p></div>
        <div className="blueprint-guide-table-wrap blueprint-ai-function-table-wrap"><table className="blueprint-guide-table"><caption className="sr-only">AI 기능별 입력·결과·사용 방식</caption><thead><tr><th scope="col">ID</th><th scope="col">기능</th><th scope="col">하는 일</th><th scope="col">필요 자료</th><th scope="col">결과</th><th scope="col">팀원이 기억할 점</th></tr></thead><tbody>{aiFunctionRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <code>{cell}</code> : index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>

        <div className="blueprint-guide-section-heading"><span>계열사별 상품 프로필</span><h3>공통 상품 테이블에<br /><em>각 계열사 필드를 덧붙입니다.</em></h3><p>실제 상품군이 다르기 때문에 소비기한·설치·콜드체인 같은 값은 계열사 확장 프로필에 저장합니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><div className="blueprint-guide-table-wrap"><table className="blueprint-guide-table"><caption className="sr-only">계열사별 확장 프로필과 위험 요소</caption><thead><tr><th scope="col">계열사</th><th scope="col">확장 프로필</th><th scope="col">저장할 핵심 필드</th><th scope="col">전략에서 먼저 보는 위험</th></tr></thead><tbody>{profileRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : index === 1 ? <code>{cell}</code> : cell}</td>)}</tr>)}</tbody></table></div><div className="blueprint-guide-rule blueprint-guide-rule-green"><strong>MVP에서 가구 크기 필드는 저장하지 않습니다.</strong><p>가로·세로·높이·부피를 계산하기보다, 전략에 직접 필요한 배송비·설치비·보관비·예상 파손비·반품비·무료배송 기준금액을 비용 프로필에 저장합니다. 나중에 실제 배송 연동에서 크기가 필요해질 때만 별도 필드로 확장합니다.</p></div></div><SourceRail ids={['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'food-label-law']} note="공식 계열사 상품·사업 자료를 기준으로 필요한 필드를 나눈 이유입니다." /></div>

        <div className="blueprint-guide-section-heading"><span>비용 프로필 저장 방식</span><h3>원인을 추측하기보다<br /><em>계산에 쓸 비용을 저장합니다.</em></h3><p>상품별 비용이 다르면 SKU 값으로 저장하고, 공통 비용은 계열사·카테고리 기본 정책으로 저장합니다.</p></div>
        <div className="blueprint-guide-table-wrap"><table className="blueprint-guide-table"><caption className="sr-only">비용 프로필 DB 저장 방식</caption><thead><tr><th scope="col">저장 영역</th><th scope="col">뜻</th><th scope="col">저장할 컬럼 후보</th><th scope="col">사용 방식</th></tr></thead><tbody>{costProfileRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <code>{cell}</code> : index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>

        <div className="blueprint-guide-section-heading"><span>비용이 계산되는 방식</span><h3>DB 값이 전략 점수로<br /><em>어떻게 연결되는지</em></h3></div>
        <div className="blueprint-guide-table-wrap"><table className="blueprint-guide-table"><caption className="sr-only">비용 항목별 계산 방식</caption><thead><tr><th scope="col">비용 항목</th><th scope="col">계산 방식</th><th scope="col">전략에서 쓰는 이유</th></tr></thead><tbody>{costCalculationRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>

        <div className="blueprint-guide-two-column"><div><div className="blueprint-guide-section-heading"><span>공통 ID 기준</span><h3>DB는 이 키로<br /><em>끝까지 연결합니다.</em></h3></div><div className="blueprint-key-list"><div><code>product_id</code><span>공통 상품 단위</span><p>계열사가 달라도 같은 상품 개념으로 묶는 ID입니다.</p></div><div><code>sku_id</code><span>실제 재고·판매 단위</span><p>용량·색상·사이즈·로트가 다르면 별도 SKU로 관리합니다.</p></div><div><code>source_sku_id</code><span>원천 시스템 코드</span><p>각 계열사의 ERP·POS·WMS 원본을 추적하는 코드입니다.</p></div><div><code>policy_profile</code><span>계열사·카테고리 정책</span><p>가중치·임계값·허용 전략·비용 계산 조건을 버전으로 저장합니다.</p></div></div></div><div><div className="blueprint-guide-section-heading"><span>개발자가 보는 입력·결과</span><h3>계산을 바꿔도<br /><em>근거가 남아야 합니다.</em></h3></div><div className="blueprint-rule-card"><p><b>입력</b> 상품·SKU·재고·판매·가격·프로모션·트렌드·계열사 정책·비용</p><p><b>결과</b> 예측수요·위험점수·차단사유·전략 후보·예상 매출·마진·잔여재고</p><p><b>필수 기록</b> 기준시각·데이터 상태·model_version·formula_version·policy_version·snapshot_id</p><p><b>보류 조건</b> 데이터가 부족하거나 법규·기한·설치·검사·콜드체인 확인이 안 되면 “확인 필요”로 표시</p></div></div></div>

        <div className="blueprint-guide-section-heading"><span>수식을 읽는 순서</span><h3>검색량 하나가 아니라<br /><em>여러 신호를 합쳐 판단합니다.</em></h3><p>아래 표는 수식의 기술 이름보다 “무엇을 보고, 어떤 결정을 돕는지”를 먼저 설명합니다.</p></div>
        <div className="blueprint-guide-table-wrap"><table className="blueprint-guide-table"><caption className="sr-only">AI 기능별 수식과 적용 원칙</caption><thead><tr><th scope="col">계산 영역</th><th scope="col">쉽게 말한 계산 구조</th><th scope="col">적용할 때 지킬 점</th></tr></thead><tbody>{guideFormulaRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>

        <div className="blueprint-guide-section-heading"><span>개발·운영 흐름</span><h3>데이터가 들어와<br /><em>성과로 돌아오는 순서</em></h3></div>
        <div className="blueprint-operation-flow">{operationSteps.map(([num, title, body]) => <article key={num}><span>{num}</span><strong>{title}</strong><p>{body}</p></article>)}</div>
        <div className="blueprint-guide-section-heading"><span>수요예측 학습 체크리스트</span><h3>모델은 복잡하게 만들기보다<br /><em>검증 가능한 순서로 키웁니다.</em></h3><p>기준모델보다 실제 오차가 줄었는지 확인한 뒤 다음 단계로 넘어갑니다.</p></div>
        <div className="blueprint-guide-table-wrap"><table className="blueprint-guide-table"><caption className="sr-only">수요예측 모델 학습 체크리스트</caption><thead><tr><th scope="col">단계</th><th scope="col">팀원이 할 일</th></tr></thead><tbody>{forecastingSteps.map((row) => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td>{row[1]}</td></tr>)}</tbody></table></div>
        <div className="blueprint-guide-rule blueprint-guide-rule-green"><strong>MVP에서 자동화하지 않는 것</strong><p>자동 입고·자동 가격변경·자동 판매 등록은 하지 않습니다. 추천과 시뮬레이션 결과를 담당자가 확인하고 승인한 뒤 실제 운영으로 넘깁니다.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">추천 구성</span><h2>AI를 5개로 나누되,<br /><em>모델은 최소화합니다.</em></h2><p>트렌드와 수요를 예측하고, 위험·손익 계산은 재현 가능한 엔진으로 고정합니다. AI 설명 도우미는 마지막 설명 단계에만 둡니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><div className="capability-detail-table-wrap"><table className="capability-detail-table"><caption className="sr-only">AI 모델과 결정론적 엔진의 역할</caption><thead><tr><th scope="col">구분</th><th scope="col">모델·엔진</th><th scope="col">AI 여부</th><th scope="col">하는 일</th><th scope="col">필요 자료</th><th scope="col">운영 원칙</th></tr></thead><tbody>{modelRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div></div><SourceRail ids={['google-trends-help', 'social-demand-informs', 'forecasting-tscv', 'forecasting-hierarchy']} note="검색·SNS 신호와 예측 검증 방식을 정한 근거입니다." /></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">계열사별 상품 정리</span><h2>실제 상품군을 보면<br /><em>필요한 필드가 달라집니다.</em></h2><p>공식몰·사업 페이지에서 확인되는 대표 상품과 운영 조건을 기준으로 DB 확장 필드를 정합니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><div className="functional-spec-table-wrap"><table className="functional-spec-table"><caption className="sr-only">계열사별 대표 상품군과 전략 입력</caption><thead><tr><th scope="col">계열사</th><th scope="col">대표 상품군</th><th scope="col">상품·재고 필드</th><th scope="col">위험·비용 필드</th><th scope="col">전략에 반영</th></tr></thead><tbody>{productRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div></div><SourceRail ids={['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'food-label-law']} note="공식 계열사 자료와 식품 표시 규정을 참고한 상품 필드입니다." /></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">공통 데이터 구조</span><h2>DB는 공통 테이블과<br /><em>계열사 확장 프로필</em>로 나눕니다.</h2><p>상품을 한 표에 억지로 맞추지 않고, 공통 ID로 연결한 뒤 계열사에만 필요한 속성은 별도 프로필로 저장합니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><div className="functional-spec-table-wrap"><table className="functional-spec-table"><caption className="sr-only">Oracle 공통 테이블 구성</caption><thead><tr><th scope="col">영역</th><th scope="col">테이블</th><th scope="col">저장 목적</th></tr></thead><tbody>{dbRows.map((row) => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td><code>{row[1]}</code></td><td>{row[2]}</td></tr>)}</tbody></table></div><div className="capability-callout"><strong>중요한 키</strong><p><code>product_id</code>는 공통 상품, <code>sku_id</code>는 실제 판매·재고 단위, <code>source_sku_id</code>는 계열사 원천 코드입니다. 같은 이름의 상품이라도 SKU·옵션·로트가 다르면 반드시 별도 행으로 관리합니다.</p></div></div><SourceRail ids={['project-types', 'project-policy']} note="공통 ID와 권한·정책을 분리하는 프로젝트 설계 근거입니다." /></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">통합 재고 화면</span><h2>통합 재고는<br /><em>이 항목으로 보여줍니다.</em></h2><p>담당자는 원가를 보지 않고도 무엇을 먼저 확인해야 하는지 알 수 있어야 합니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><div className="strategy-goal-table-wrap"><table className="strategy-goal-table"><caption className="sr-only">통합 재고 화면 컬럼</caption><thead><tr><th scope="col">표시 항목</th><th scope="col">공통 의미</th><th scope="col">계열사별 예시</th><th scope="col">사용 목적</th></tr></thead><tbody>{[['계열사·카테고리', '어느 조직·상품군인지', '웰니스/영양제 · 리바트/거실가구 · 그린푸드/농산물', '필터·권한 범위'], ['상품·SKU·옵션', '실제 판매 단위', '용량·색상·사이즈·로트까지 표시', '상품 상세 이동'], ['현재 가용수량', '현재고 − 예약/보류분', '리바트 설치 가능량, 그린푸드 콜드체인 가능량 배지', '판매·입고 가능 범위'], ['판매속도·예상수요', '최근 순판매량과 예측 일일량', '트렌드 효과 적용 여부와 예측 구간', '소진일·입고 판단'], ['트렌드', '상승·유지·하락과 변화율', '검색·SNS·판매 신호별 출처·수집시각', '수요 변화 조기 발견'], ['처리기한·가능량', '기한과 운영 제약', '소비기한, 보관일, 설치일, 검사, 배송창', '하드 차단·위험 이유'], ['위험점수·차단 상태', '0~100 점수와 실행 가능 여부', '표시 누락·검사 보류·설치 슬롯 부족', '우선순위·보류'], ['추천 다음 행동·기준시각', '검토용 행동과 데이터 신선도', '추가 입고 검토·할인 검토·유지·처리 우선', '담당자 승인·감사']].map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div></div><SourceRail ids={['project-types', 'project-simulation']} note="통합 재고에 표시할 공통 상태와 계산 결과의 기준입니다." /></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">전략 계산 기준</span><h2>상품별 전략은<br /><em>프로필을 바꿔 적용합니다.</em></h2><p>공통 목적함수는 유지하고, 각 계열사의 하드 차단·비용·시간축·가중치를 정책 프로필에서 읽습니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><div className="strategy-goal-table-wrap"><table className="strategy-goal-table"><caption className="sr-only">목표별 전략 계산 기준</caption><thead><tr><th scope="col">목표</th><th scope="col">순위 기준</th><th scope="col">주요 입력</th><th scope="col">제외 기준</th></tr></thead><tbody>{strategyRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
        <div className="formula-contract-grid" style={{ marginTop: 22 }}><article className="formula-contract-card"><span className="capability-label">하드 차단</span><code>{`feasible = ownership_ok ∧ legal_ok ∧ freshness_ok
           ∧ capacity_ok ∧ data_quality_ok`}</code><p>하나라도 확인되지 않으면 이익이 큰 후보도 추천하지 않습니다.</p></article><article className="formula-contract-card"><span className="capability-label">수요·입고</span><code>{`recommended_inbound = clip(
  target_stock - available - open_inbound,
  0, 공급·보관·처리 가능량)`}</code><p>트렌드 상승은 추가 입고 검토 신호이며 자동 확정이 아닙니다.</p></article><article className="formula-contract-card"><span className="capability-label">증분이익</span><code>{`M_inc = feasible × (M_strategy - M_baseline)`}</code><p>할인 후 매출, 변동비, 회피비용, 잠식·위험·AI 원가를 기준선과 비교합니다.</p></article></div></div><SourceRail ids={['markdown-paper', 'markdown-perishable', 'markdown-cannibalization']} note="가격·재고·폐기비용·잠식효과를 함께 계산하는 연구 근거입니다." /></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">학습·검증 순서</span><h2>모델은 이 순서로<br /><em>검증하고 운영합니다.</em></h2><p>상품군마다 데이터 양과 리스크가 다르므로, 복잡한 모델보다 기준모델 대비 개선 여부를 먼저 봅니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><Stagger className="stack">{[['01', '품절·반품 보정', '품절일을 판매 부진으로 학습하지 않고, 취소·반품과 정상 판매를 분리합니다.'], ['02', '기준모델 만들기', '계절 기준모델·가중 이동평균·지수평활(ETS) 중 성능이 좋은 기준모델을 둡니다.'], ['03', '트렌드 자료 추가', '검색·SNS·조회·판매 신호를 추가하고 상품군별 가중치와 지연 효과를 비교합니다.'], ['04', '시간 순서 검증', '미래 데이터를 섞지 않는 시간순 검증(rolling-origin)으로 예측 오차와 예측 범위를 측정합니다.'], ['05', '계층 보정', 'SKU 예측 합계가 카테고리·계열사·전체 집계와 맞는지 확인합니다.'], ['06', '운영·재학습', '모델 버전·계산 자료·예측 오차를 저장하고 실제 결과가 쌓인 뒤 재학습합니다.']].map(([num, title, body]) => <article className="stack-card" key={num}><div className="stack-icon">{num}</div><div><strong>{title}</strong><p>{body}</p></div><b>모델</b></article>)}</Stagger>
        <div className="capability-callout"><strong>보류 조건</strong><p>트렌드와 판매 데이터가 상품에 정확히 매핑되지 않거나, 소비기한·검사·설치·콜드체인 정보가 없으면 해당 추천을 “예측 부족/확인 필요”로 표시합니다. 자동 입고·자동 가격변경은 검증 이후 단계입니다.</p></div></div><SourceRail ids={['forecasting-tscv', 'forecasting-hierarchy', 'forecasting-predictors']} note="기준모델, 시간순 검증, 계층 보정을 정한 예측 방법론입니다." /></div>
      </div>
    </section>

    <section className="section-tight">
      <div className="container"><div className="section-heading"><span className="eyebrow">이 설계에 참고한 출처</span><h2>근거 자료를<br /><em>계산 옆에 남깁니다.</em></h2><p>공식 상품·사업 자료와 수요예측·재고 최적화 연구를 함께 참고했습니다.</p></div><div className="formula-source-links">{sourceIds.map((id) => { const source = sources.find((item) => item.id === id); return source ? <SourceNote key={id} source={source} /> : null; })}</div></div>
    </section>
  </>;
}
