import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

const modelRows = [
  ['모델 1', '트렌드 신호 계산기', '검색·SNS·조회·판매 변화율을 정규화해 상승·유지·하락 신호 생성', '상품 키워드, 수집시각, 상대 검색지수, 언급량, 순판매량', '학습보다 데이터 품질·출처·중복 제거를 먼저 확인'],
  ['모델 2', '트렌드 반영 수요예측', '기본수요에 트렌드·가격·프로모션·요일·계절 효과를 추가해 일별 예측', '판매·품절·반품·가격·프로모션·트렌드 피처', '기준모델과 rolling-origin 검증을 거친 뒤 운영 반영'],
  ['엔진 1', '위험·하드 차단 엔진', '법규·소유권·기한·배송·설치·검사·데이터 품질을 먼저 검사하고 위험점수 계산', '정책 프로필, 재고, 로트, 비용, 가능량', 'AI 학습 결과가 아니라 결정론적 규칙으로 고정'],
  ['엔진 2', '전략·시뮬레이션 엔진', '허용된 후보의 예상 판매·매출·마진·잔여재고를 계산하고 목적별 순위화', '예측수요, 가격, 할인, 비용, 기준선, 정책 버전', '같은 입력이면 같은 결과가 나와야 함'],
  ['모델 3', 'LLM 설명기', '계산 결과와 근거를 담당자가 이해할 문장과 확인 질문으로 변환', '계산 결과 JSON, 데이터 기간, 모델·정책 버전', '숫자·가격·수량을 새로 만들거나 바꾸지 않음'],
];

const productRows = [
  ['현대웰니스', '비타민·마그네슘·오메가3·콜라겐·세트', '성분·기능·대상·로트·소비기한·보관·표시', '소비기한·표시·회수·폐기', '잔여기한 기반 처리 속도·할인·묶음'],
  ['현대리바트', '거실·침실·주방 가구, 옵션·모듈 제품', '크기·중량·색상·옵션·창고·배송권역·설치 슬롯', '공간·배송·설치·파손·AS', '설치·배송 가능량을 넘지 않는 판매·공급'],
  ['현대그린푸드', '농산물·수산물·축산물·가공식품·케어푸드', '로트·소비기한·온도·검사·이력추적·채널·콜드체인', '소비기한·검사·콜드체인·폐기', '로트별 소진·냉장/냉동 처리량·폐기 회피'],
];

const dbRows = [
  ['기준정보', 'affiliate · legal_entity · channel · category · brand', '어느 계열사의 어떤 상품인지 공통 ID로 연결'],
  ['상품', 'product · product_option · sku · external_product_mapping', '상품 설명과 실제 판매 단위, 원천 시스템 코드를 보존'],
  ['재고', 'inventory_snapshot · inventory_lot · inventory_movement', '현재고·예약분·가용수량·로트·입출고 이력 저장'],
  ['판매', 'sales_event · promotion_event · return_event', '판매량·가격·할인·품절·반품을 날짜별로 저장'],
  ['AI 입력', 'trend_signal · feature_snapshot · forecast_run', '트렌드 원천과 예측값·예측구간·모델 버전 저장'],
  ['전략', 'policy_profile · risk_assessment · strategy_candidate · simulation_run', '계열사 정책, 위험 이유, 후보와 시뮬레이션 결과 저장'],
  ['운영', 'model_version · data_quality_issue · approval_event · audit_log', '재현·승인·오류·변경 이력 추적'],
];

const strategyRows = [
  ['최대 마진', 'M_inc가 가장 큰 후보', '판매가·할인·수수료·배송·반품·회피비용', '최소 마진 미만이면 제외'],
  ['빠른 소진', '처리기한 안의 소진기간·잔여재고', '예측 판매량·현재고·처리기한·입고 리드타임', '기한 안에 처리 불가하면 제외'],
  ['최대 매출', '예상 판매수량 × 실판매가', '가격·수량·기간·채널 노출·프로모션', '마진 하한·법적 제한 확인'],
  ['위험 최소화', '회피비용 − 위험손실', '소비기한·보관·파손·배송·폐기 비용', '실제로 줄어드는 비용만 반영'],
];

const sourceIds = ['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'google-trends-help', 'social-demand-informs', 'forecasting-tscv', 'forecasting-hierarchy', 'markdown-paper', 'markdown-perishable', 'food-label-law'];

export default function AiBlueprintPage() {
  return <>
    <section className="page-hero capability-hero">
      <div className="container">
        <Reveal><span className="eyebrow">AI model &amp; data blueprint</span></Reveal>
        <Reveal><h1>계열사와 상품이 달라도<br /><em>같은 기준으로 연결하는 설계</em></h1></Reveal>
        <Reveal><p>AI 모델, Oracle 데이터 구조, 통합 재고 표, 계열사별 전략 조건을 한 문서에 묶었습니다. 공통 엔진을 재사용하되 상품 특성은 프로필로 분리하는 것이 핵심입니다.</p></Reveal>
        <div className="actions" style={{ marginTop: 26 }}><Link className="button primary" href="/ai-guide">AI 기능 길라잡이 보기 →</Link><Link className="button secondary" href="/formulas">수식 및 계산 보기</Link></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Recommended architecture</span><h2>AI를 5개로 나누되,<br /><em>모델은 최소화합니다.</em></h2><p>트렌드와 수요를 예측하고, 위험·손익 계산은 재현 가능한 엔진으로 고정합니다. LLM은 마지막 설명 단계에만 둡니다.</p></div>
        <div className="capability-detail-table-wrap"><table className="capability-detail-table"><caption className="sr-only">AI 모델과 결정론적 엔진의 역할</caption><thead><tr><th scope="col">구분</th><th scope="col">모델·엔진</th><th scope="col">하는 일</th><th scope="col">필요 자료</th><th scope="col">운영 원칙</th></tr></thead><tbody>{modelRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Affiliate product map</span><h2>실제 상품군을 보면<br /><em>필요한 필드가 달라집니다.</em></h2><p>공식몰·사업 페이지에서 확인되는 대표 상품과 운영 조건을 기준으로 DB 확장 필드를 정합니다.</p></div>
        <div className="functional-spec-table-wrap"><table className="functional-spec-table"><caption className="sr-only">계열사별 대표 상품군과 전략 입력</caption><thead><tr><th scope="col">계열사</th><th scope="col">대표 상품군</th><th scope="col">상품·재고 필드</th><th scope="col">위험·비용 필드</th><th scope="col">전략에 반영</th></tr></thead><tbody>{productRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Canonical data model</span><h2>DB는 공통 테이블과<br /><em>계열사 확장 프로필</em>로 나눕니다.</h2><p>상품을 한 표에 억지로 맞추지 않고, 공통 ID로 연결한 뒤 계열사에만 필요한 속성은 별도 프로필로 저장합니다.</p></div>
        <div className="functional-spec-table-wrap"><table className="functional-spec-table"><caption className="sr-only">Oracle 공통 테이블 구성</caption><thead><tr><th scope="col">영역</th><th scope="col">테이블</th><th scope="col">저장 목적</th></tr></thead><tbody>{dbRows.map((row) => <tr key={row[0]}><td><strong>{row[0]}</strong></td><td><code>{row[1]}</code></td><td>{row[2]}</td></tr>)}</tbody></table></div>
        <div className="capability-callout"><strong>중요한 키</strong><p><code>product_id</code>는 공통 상품, <code>sku_id</code>는 실제 판매·재고 단위, <code>source_sku_id</code>는 계열사 원천 코드입니다. 같은 이름의 상품이라도 SKU·옵션·로트가 다르면 반드시 별도 행으로 관리합니다.</p></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Unified inventory view</span><h2>통합 재고는<br /><em>이 컬럼으로 보여줍니다.</em></h2><p>담당자는 원가를 보지 않고도 무엇을 먼저 확인해야 하는지 알 수 있어야 합니다.</p></div>
        <div className="strategy-goal-table-wrap"><table className="strategy-goal-table"><caption className="sr-only">통합 재고 화면 컬럼</caption><thead><tr><th scope="col">표시 항목</th><th scope="col">공통 의미</th><th scope="col">계열사별 예시</th><th scope="col">사용 목적</th></tr></thead><tbody>{[['계열사·카테고리', '어느 조직·상품군인지', '웰니스/영양제 · 리바트/거실가구 · 그린푸드/농산물', '필터·권한 범위'], ['상품·SKU·옵션', '실제 판매 단위', '용량·색상·사이즈·로트까지 표시', '상품 상세 이동'], ['현재 가용수량', '현재고 − 예약/보류분', '리바트 설치 가능량, 그린푸드 콜드체인 가능량 배지', '판매·입고 가능 범위'], ['판매속도·예상수요', '최근 순판매량과 예측 일일량', '트렌드 효과 적용 여부와 예측 구간', '소진일·입고 판단'], ['트렌드', '상승·유지·하락과 변화율', '검색·SNS·판매 신호별 출처·수집시각', '수요 변화 조기 발견'], ['처리기한·가능량', '기한과 운영 제약', '소비기한, 보관일, 설치일, 검사, 배송창', '하드 차단·위험 이유'], ['위험점수·차단 상태', '0~100 점수와 실행 가능 여부', '표시 누락·검사 보류·설치 슬롯 부족', '우선순위·보류'], ['추천 다음 행동·기준시각', '검토용 행동과 데이터 신선도', '추가 입고 검토·할인 검토·유지·처리 우선', '담당자 승인·감사']].map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Strategy contract</span><h2>상품별 전략은<br /><em>프로필을 바꿔 적용합니다.</em></h2><p>공통 목적함수는 유지하고, 각 계열사의 하드 차단·비용·시간축·가중치를 정책 프로필에서 읽습니다.</p></div>
        <div className="strategy-goal-table-wrap"><table className="strategy-goal-table"><caption className="sr-only">목표별 전략 계산 기준</caption><thead><tr><th scope="col">목표</th><th scope="col">순위 기준</th><th scope="col">주요 입력</th><th scope="col">제외 기준</th></tr></thead><tbody>{strategyRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
        <div className="formula-contract-grid" style={{ marginTop: 22 }}><article className="formula-contract-card"><span className="capability-label">하드 차단</span><code>{`feasible = ownership_ok ∧ legal_ok ∧ freshness_ok
           ∧ capacity_ok ∧ data_quality_ok`}</code><p>하나라도 확인되지 않으면 이익이 큰 후보도 추천하지 않습니다.</p></article><article className="formula-contract-card"><span className="capability-label">수요·입고</span><code>{`recommended_inbound = clip(
  target_stock - available - open_inbound,
  0, 공급·보관·처리 가능량)`}</code><p>트렌드 상승은 추가 입고 검토 신호이며 자동 확정이 아닙니다.</p></article><article className="formula-contract-card"><span className="capability-label">증분이익</span><code>{`M_inc = feasible × (M_strategy - M_baseline)`}</code><p>할인 후 매출, 변동비, 회피비용, 잠식·위험·AI 원가를 기준선과 비교합니다.</p></article></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Training &amp; validation</span><h2>모델은 이 순서로<br /><em>검증하고 운영합니다.</em></h2><p>상품군마다 데이터 양과 리스크가 다르므로, 복잡한 모델보다 기준모델 대비 개선 여부를 먼저 봅니다.</p></div>
        <Stagger className="stack">{[['01', '품절·반품 보정', '품절일을 판매 부진으로 학습하지 않고, 취소·반품과 정상 판매를 분리합니다.'], ['02', '기준모델 만들기', '계절 naive·가중이동평균·ETS 중 성능이 좋은 기준모델을 둡니다.'], ['03', '트렌드 피처 추가', '검색·SNS·조회·판매 신호를 추가하고 상품군별 가중치와 지연 효과를 비교합니다.'], ['04', '시간 순서 검증', 'rolling-origin으로 미래 데이터를 섞지 않고 MAE·WAPE·MASE/RMSSE·구간 coverage를 측정합니다.'], ['05', '계층 보정', 'SKU 예측 합계가 카테고리·계열사·전체 집계와 맞는지 확인합니다.'], ['06', '운영·재학습', '모델 버전·피처 스냅샷·예측 오차를 저장하고 실제 결과가 쌓인 뒤 재학습합니다.']].map(([num, title, body]) => <article className="stack-card" key={num}><div className="stack-icon">{num}</div><div><strong>{title}</strong><p>{body}</p></div><b>MODEL</b></article>)}</Stagger>
        <div className="capability-callout"><strong>보류 조건</strong><p>트렌드와 판매 데이터가 상품에 정확히 매핑되지 않거나, 소비기한·검사·설치·콜드체인 정보가 없으면 해당 추천을 “예측 부족/확인 필요”로 표시합니다. 자동 입고·자동 가격변경은 검증 이후 단계입니다.</p></div>
      </div>
    </section>

    <section className="section-tight">
      <div className="container"><div className="section-heading"><span className="eyebrow">Sources used in this design</span><h2>근거 자료를<br /><em>계산 옆에 남깁니다.</em></h2><p>공식 상품·사업 자료와 수요예측·재고 최적화 연구를 함께 참고했습니다.</p></div><div className="formula-source-links">{sourceIds.map((id) => { const source = sources.find((item) => item.id === id); return source ? <SourceNote key={id} source={source} /> : null; })}</div></div>
    </section>
  </>;
}
