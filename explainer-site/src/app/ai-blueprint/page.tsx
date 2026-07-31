import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

const sequenceSteps = [
  ['01', '기준 잡기', '외부 자료와 프로젝트 요구사항을 구분하고, 무엇을 사실로 사용할지 정합니다.'],
  ['02', '상품·계열사 정리', '3개 계열사의 상품군과 비용·위험 차이를 공통 구조에 연결합니다.'],
  ['03', 'ERD·DB 설계', '상품·SKU·재고·판매·비용·예측·전략이 어떤 키로 이어지는지 정합니다.'],
  ['04', '데이터 준비', '원천 데이터를 모으고 품절·반품·오류를 정리해 계산 가능한 상태로 만듭니다.'],
  ['05', 'AI 기능 실행', '트렌드 → 수요예측 → 위험판단 → 전략계산 순서로 처리합니다.'],
  ['06', '학습·검증', '기준모델과 비교하고 미래 데이터를 섞지 않아도 성능이 좋아지는지 확인합니다.'],
  ['07', '화면·승인', '결과를 쉬운 말로 설명하고 담당자가 확인·승인합니다.'],
  ['08', '실제 결과 회수', '판매·매출·잔여재고를 저장해 다음 예측과 정책 개선에 사용합니다.'],
];

const affiliateRows = [
  ['현대웰니스', '비타민·마그네슘·오메가3·콜라겐·건강식품', 'product → sku → lot', '성분·기능·대상·소비기한·보관조건·표시·회수상태', '보관비·폐기비·반품비·할인 제한', '소비기한·표시·회수 상태'],
  ['현대리바트', '거실·침실·주방 가구·옵션·모듈 제품', 'product → sku → cost profile', '옵션·판매채널·배송권역·설치여부·비용정책', '배송비·설치비·보관비·예상 파손비·반품비·무료배송 기준', '비용 정책·배송·설치 조건'],
  ['현대그린푸드', '농산물·수산물·축산물·가공식품·케어푸드', 'product → sku → lot', '로트·소비기한·온도구분·검사·이력추적·채널·콜드체인', '보관·배송·검사·폐기·반품 비용', '소비기한·보관·검사·콜드체인'],
];

const commonDbRows = [
  ['기준정보', 'affiliate · legal_entity · channel · category · brand', '계열사·법인·채널·카테고리를 공통 ID로 관리'],
  ['상품', 'product · product_option · sku · external_product_mapping', '공통 상품, 옵션, 실제 재고 단위, 원천 코드 연결'],
  ['재고', 'inventory_snapshot · inventory_lot · inventory_movement', '현재고·예약분·가용수량·로트·입출고 흐름 저장'],
  ['판매', 'sales_event · promotion_event · return_event', '판매량·가격·할인·품절·반품을 날짜별로 저장'],
  ['AI 입력', 'trend_signal · feature_snapshot · forecast_run', '트렌드 원천·계산자료·예측값·예측 범위 저장'],
  ['전략', 'policy_profile · risk_assessment · strategy_candidate · simulation_run', '정책·위험 이유·전략 후보·시뮬레이션 저장'],
  ['운영', 'model_version · data_quality_issue · approval_event · audit_log', '재현·오류·승인·변경 이력 저장'],
];

const erdRelations = [
  ['계열사 → 상품', 'affiliate 1 : N product', '한 계열사가 여러 공통 상품을 가질 수 있습니다.'],
  ['상품 → SKU', 'product 1 : N sku', '색상·용량·옵션·판매 단위가 다르면 SKU를 나눕니다.'],
  ['SKU → 재고·판매', 'sku 1 : N inventory_snapshot / sales_event', '재고와 판매는 기준시각·발생시각을 가진 이력입니다.'],
  ['SKU → AI 입력', 'sku 1 : N trend_signal / forecast_run', '트렌드 원천과 예측 실행 결과를 연결합니다.'],
  ['SKU → 비용', 'sku 1 : 0..1 sku_cost_profile', '상품별 비용이 다를 때만 개별 비용 프로필을 둡니다.'],
  ['전략 → 실행 이력', 'strategy_candidate → simulation_run → approval_event', '추천·시뮬레이션·승인을 서로 다른 기록으로 남깁니다.'],
];

const costRows = [
  ['sku_cost_profile', '상품별 비용', 'sku_id·보관비 일단가·배송비·무료배송 기준금액·설치비·예상 파손비·예상 반품비·폐기비·할인 한도', 'SKU별 예외 비용'],
  ['affiliate_policy_profile', '계열사·카테고리 기본값', 'affiliate_id·category_id·기본 배송비·기본 설치비·기본 보관비·기본 파손비·기본 반품비·무료배송 기준·적용기간·정책 버전', 'SKU 값이 없을 때 사용'],
  ['strategy_cost_snapshot', '계산 당시 복사본', 'snapshot_id·sku_id·배송비·설치비·보관비·예상 파손비·예상 반품비·폐기비·정책 버전', '과거 결과 재현'],
];

const dataSteps = [
  ['01', '원천 수집', 'ERP·POS·WMS·판매채널에서 상품·재고·판매 자료를 가져옵니다.'],
  ['02', '공통 변환', '계열사 원천 코드·단위·날짜를 공통 상품·SKU 형식으로 바꿉니다.'],
  ['03', '품질 검사', '누락·중복·음수 수량·가격 오류·기준시각 지연을 찾아 격리합니다.'],
  ['04', '판매 보정', '품절일·취소·반품을 분리해 판매 부진으로 잘못 학습하지 않습니다.'],
  ['05', '트렌드 생성', '검색·SNS·조회·판매 변화와 출처·수집시각을 저장합니다.'],
  ['06', '스냅샷 확정', '계산에 사용한 데이터 상태와 기준시각을 고정합니다.'],
];

const aiRows = [
  ['AI-01', '트렌드 신호', '통계 계산', '검색·SNS·조회·판매 변화를 합쳐 상승·유지·하락 신호 생성', '검색량만 급증하고 판매·재고가 부족하면 자동 입고로 확정하지 않음'],
  ['AI-02', '수요예측', '학습 모델', '기본수요에 트렌드·가격·프로모션·계절·요일 효과 추가', '예측값·범위·소진일·신뢰 상태를 함께 표시'],
  ['AI-03', '위험재고', '규칙 엔진', '소비기한·법규·소유권·데이터 품질과 위험점수 계산', '판매 불가 조건은 점수보다 먼저 차단'],
  ['AI-04', '전략 후보', '수식 엔진', '할인·쿠폰·채널·번들·기간별 손익을 계산하고 순위화', '같은 입력이면 같은 결과가 나와야 함'],
  ['AI-05', '결과 설명', '생성형 AI', '계산된 후보와 근거를 담당자가 이해하는 문장으로 변환', '가격·수량·점수를 새로 만들거나 변경하지 않음'],
];

const formulaRows = [
  ['트렌드 신호', '검색관심도 변화 + SNS 언급량 변화 + 판매량 변화 + 조회·찜·장바구니 변화', '신호별 출처와 수집시각을 함께 저장'],
  ['수요예측', '기본수요 + 트렌드 효과 + 가격 효과 + 프로모션 효과 + 계절·요일 효과', '기준모델보다 좋아지는지 시간순으로 검증'],
  ['실행 가능 여부', '소유권 확인 ∧ 판매 가능 ∧ 법적 제한 없음 ∧ 데이터 정상', '하나라도 모르면 추천·승인하지 않음'],
  ['비용 계산', '배송비 + 설치비 + 보관비 + 예상 파손비 + 예상 반품비 + 프로모션비', 'SKU 비용이 없으면 계열사 기본 정책을 사용'],
  ['전략 이익', '할인 후 매출 − 비용 + 회피한 보관·폐기비용 − 잠식 − 위험손실', '기준선과 비교해 목적별 전략을 순위화'],
];

const strategyRows = [
  ['최대 마진', '기준선보다 추가 이익이 가장 큰 전략', '판매가·할인·배송·설치·보관·반품·폐기 비용', '최소 마진 미만 제외'],
  ['빠른 소진', '정해진 기간 안에 재고를 가장 빨리 줄이는 전략', '예상 판매량·처리기한·보관비·폐기비', '기한 안에 처리 불가하면 제외'],
  ['최대 매출', '전체 판매 금액이 가장 커지는 전략', '가격·수량·기간·채널·프로모션', '마진 하한·법적 제한 확인'],
  ['위험 최소화', '폐기·보관·파손·반품 손실을 가장 많이 줄이는 전략', '회피비용·위험손실·처리기한', '실제로 줄어드는 비용만 반영'],
];

const forecastSteps = [
  ['01', '기준모델', '카테고리 평균·이동평균·지수평활을 기준으로 둡니다.'],
  ['02', '학습 자료', '최소 28일 판매·품절·가격·프로모션·반품·재고 이력을 모읍니다.'],
  ['03', '정답 연결', '기준일 이후 7일·14일 실제 판매량을 정답으로 연결합니다.'],
  ['04', '시간순 검증', '미래 데이터를 섞지 않고 계열사·카테고리별 오차를 확인합니다.'],
  ['05', '계층 보정', 'SKU 합계가 카테고리·계열사·전체 합계와 맞는지 확인합니다.'],
  ['06', '운영·재학습', '예측 오차가 쌓인 뒤 모델 버전과 함께 재학습합니다.'],
];

const inventoryRows = [
  ['계열사·카테고리', '어느 조직과 상품군인지', '필터·권한 범위'],
  ['상품·SKU·옵션', '실제 판매·재고 단위', '상품 상세 이동'],
  ['가용재고·판매속도', '현재고 − 예약분, 최근 정상 판매량', '소진일·입고 판단'],
  ['예상수요·트렌드', '예측 일판매량과 상승·유지·하락 신호', '수요 변화 조기 확인'],
  ['처리기한·비용', '소비기한·배송·설치·보관·반품·폐기 조건', '하드 차단·손익 계산'],
  ['위험·추천 행동', '점수·등급·판단 이유·다음 행동', '담당자 확인·승인'],
  ['기준시각·데이터 상태', '언제의 어떤 품질 데이터인지', '결과 신뢰도·감사'],
];

const methodologyRows = [
  ['공식 계열사 자료', '상품군·운영 조건 확인', 'DB 프로필·비용·하드 차단'],
  ['법·정책 자료', '판매 전에 지켜야 하는 조건 확인', '추천 차단·표시·소비기한 규칙'],
  ['검색·SNS 연구', '외부 신호가 수요예측에 도움 되는지 확인', '트렌드 피처·가중치 검증'],
  ['시계열 방법론', '미래 데이터 없이 예측 검증', '기준모델·시간순 검증·계층 보정'],
  ['재고·가격 연구', '가격·재고·폐기·반품 비용 구성 확인', '전략 목적함수·후보 순위'],
  ['프로젝트 요구사항', '3개 계열사·원가 비노출·승인 범위 확정', '화면·ERD·권한·운영 흐름'],
];

const sourceIds = ['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'food-label-law', 'google-trends-help', 'social-demand-informs', 'forecasting-tscv', 'forecasting-hierarchy', 'markdown-paper', 'markdown-perishable'];

function SourceRail({ ids, note }: { ids: string[]; note: string }) {
  return <aside className="blueprint-source-rail" aria-label="관련 출처">
    <span className="blueprint-source-kicker">이 내용의 출처</span><strong>근거를 바로 확인하세요</strong><p>{note}</p>
    <div className="blueprint-source-list">{ids.map((id) => { const source = sources.find((item) => item.id === id); return source ? <SourceNote key={id} source={source} /> : null; })}</div>
  </aside>;
}

function SimpleTable({ caption, headers, rows, className = '' }: { caption: string; headers: string[]; rows: string[][]; className?: string }) {
  return <div className={`blueprint-guide-table-wrap ${className}`}><table className="blueprint-guide-table"><caption className="sr-only">{caption}</caption><thead><tr>{headers.map((header) => <th scope="col" key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>;
}

export default function AiBlueprintPage() {
  return <>
    <section className="page-hero capability-hero">
      <div className="container">
        <Reveal><span className="eyebrow">AI 기능·데이터·개발 가이드</span></Reveal>
        <Reveal><h1>처음 읽는 팀원도<br /><em>순서대로 이해하는 AI 재고 전략</em></h1></Reveal>
        <Reveal><p>자료를 왜 참고했는지, 어떤 데이터를 DB에 넣는지, AI가 어떤 순서로 계산하는지, 화면에서 무엇을 보여주는지 한 흐름으로 정리했습니다.</p></Reveal>
        <div className="actions" style={{ marginTop: 26 }}><Link className="button primary" href="/capabilities">기능 명세 보기 →</Link><Link className="button secondary" href="/formulas">수식 상세 보기</Link></div>
      </div>
    </section>

    <section className="section blueprint-sequence-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">읽는 순서</span><h2>이 페이지는<br /><em>이 순서로 보면 됩니다.</em></h2><p>각 단계의 결과가 다음 단계의 입력이 됩니다. 먼저 DB를 만들고, 그 다음 AI 계산을 붙입니다.</p></div>
        <div className="blueprint-sequence-grid">{sequenceSteps.map(([num, title, body]) => <article key={num}><span>{num}</span><strong>{title}</strong><p>{body}</p></article>)}</div>
      </div>
    </section>

    <section className="section blueprint-team-guide-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">01 · 기준 잡기</span><h2>AI를 여러 개 만들기보다<br /><em>공통 모델과 정책을 조합합니다.</em></h2><p>초기에는 계열사별 AI 모델을 따로 학습하지 않습니다. 데이터가 적은 상품도 공통 패턴을 활용하고, 계열사 차이는 정책 프로필과 비용 프로필에서 처리합니다.</p></div>
        <div className="blueprint-decision-grid"><article><span>01</span><strong>학습 모델 1개</strong><p>판매·품절·가격·프로모션·트렌드를 함께 보는 공통 수요예측 모델입니다.</p></article><article><span>02</span><strong>통계 계산 1개</strong><p>검색·SNS·조회·판매 변화로 트렌드 상승·유지·하락을 계산합니다.</p></article><article><span>03</span><strong>설명용 AI 1개</strong><p>수식 엔진이 계산한 결과만 받아 담당자에게 쉬운 말로 설명합니다.</p></article><article><span>04</span><strong>규칙·수식 엔진</strong><p>위험 차단과 손익 계산은 같은 입력에 같은 결과가 나오도록 고정합니다.</p></article></div>
        <div className="blueprint-guide-rule"><strong>핵심 분리 원칙</strong><p><b>수요예측 → 위험·하드 차단 → 전략 수식 계산 → AI 설명 → 담당자 승인</b> 순서입니다. AI 설명 도우미는 가격·수량을 직접 정하지 않습니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><SimpleTable caption="계열사별 상품과 전략 입력" headers={['계열사', '대표 상품군', '공통 DB 연결', '추가 필드', '비용·위험', '전략에서 먼저 확인']} rows={affiliateRows} /></div><SourceRail ids={['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'food-label-law']} note="공식 계열사 상품·사업 자료에서 확인한 운영 차이를 반영했습니다." /></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">02 · ERD·DB 설계</span><h2>공통 테이블과<br /><em>계열사 확장·비용 프로필</em></h2><p>DB는 “어떤 자료가 필요한가”와 “어떤 키로 연결되는가”를 먼저 정합니다. 화면에 보이지 않는 원가도 계산용 데이터로 저장합니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><SimpleTable caption="공통 DB 테이블과 저장 목적" headers={['영역', '테이블·컬럼 후보', '저장 목적']} rows={commonDbRows} /><div className="blueprint-guide-rule blueprint-guide-rule-green"><strong>MVP 비용 프로필</strong><p>가구의 가로·세로·높이·부피는 저장하지 않습니다. 배송비·무료배송 기준금액·설치비·보관비·예상 파손비·예상 반품비·폐기비를 SKU별 또는 계열사 기본 정책으로 저장합니다.</p></div></div><SourceRail ids={['project-types', 'project-policy']} note="프로젝트 요구사항과 공통 ID 원칙을 DB 구조로 바꾼 부분입니다." /></div>
        <div className="blueprint-guide-section-heading"><span>ERD 관계</span><h3>어떤 테이블이<br /><em>어떻게 연결되는지</em></h3></div>
        <div className="blueprint-erd-grid">{erdRelations.map(([title, relation, body]) => <article key={title}><strong>{title}</strong><code>{relation}</code><p>{body}</p></article>)}</div>
        <div className="blueprint-guide-section-heading"><span>비용 프로필</span><h3>계산에 직접 쓰는 값을<br /><em>어디에 저장하는지</em></h3></div>
        <SimpleTable caption="비용 프로필 저장 구조" headers={['저장 영역', '뜻', '주요 컬럼 후보', '사용 방식']} rows={costRows} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">03 · 데이터 준비</span><h2>원천 데이터를<br /><em>계산 가능한 상태로 만듭니다.</em></h2><p>AI보다 먼저 상품 코드·날짜·수량·판매 상태를 정리합니다. 데이터가 부족하면 추천하지 않는 것도 결과입니다.</p></div>
        <div className="blueprint-operation-flow">{dataSteps.map(([num, title, body]) => <article key={num}><span>{num}</span><strong>{title}</strong><p>{body}</p></article>)}</div>
        <div className="blueprint-guide-rule"><strong>고정해야 하는 기록</strong><p>모든 계산에는 기준시각·데이터 상태·<code>model_version</code>·<code>formula_version</code>·<code>policy_version</code>·<code>snapshot_id</code>를 남깁니다.</p></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">04 · AI 기능 실행</span><h2>각 기능은<br /><em>입력과 결과가 다릅니다.</em></h2><p>AI라고 부르더라도 실제로 학습하는 기능, 규칙으로 처리하는 기능, 설명만 하는 기능을 구분합니다.</p></div>
        <SimpleTable caption="AI 기능별 입력·결과·운영 원칙" headers={['ID', '기능', '종류', '하는 일', '팀원이 기억할 점']} rows={aiRows} className="blueprint-ai-function-table-wrap" />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">05 · 수식·전략</span><h2>신호를 모아<br /><em>비용과 이익으로 비교합니다.</em></h2><p>검색량 하나로 결론을 내리지 않고, 예측·위험·직접 비용·회피 비용을 같은 기준선과 비교합니다.</p></div>
        <SimpleTable caption="계산 영역별 구조" headers={['계산 영역', '쉽게 말한 구조', '적용 원칙']} rows={formulaRows} />
        <div className="blueprint-guide-section-heading"><span>목표별 순위</span><h3>담당자가 목표를 고르면<br /><em>순위 기준이 바뀝니다.</em></h3></div>
        <SimpleTable caption="전략 목표별 판단 기준" headers={['목표', '쉬운 뜻', '중요하게 보는 값', '제외 기준']} rows={strategyRows} />
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">06 · 학습·검증</span><h2>기준모델보다 좋아지는지<br /><em>시간순으로 검증합니다.</em></h2><p>복잡한 모델을 먼저 붙이지 않습니다. 데이터가 쌓이면 기준모델 → 트렌드 피처 → 계층 보정 순으로 확장합니다.</p></div>
        <SimpleTable caption="수요예측 학습·검증 순서" headers={['단계', '팀원이 할 일']} rows={forecastSteps} />
        <div className="blueprint-guide-rule blueprint-guide-rule-green"><strong>자동화 경계</strong><p>자동 입고·자동 가격변경·자동 판매 등록은 하지 않습니다. 검증된 추천과 시뮬레이션 결과를 담당자가 확인하고 승인합니다.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">07 · 화면·승인</span><h2>DB와 계산 결과를<br /><em>담당자 화면에 이렇게 보여줍니다.</em></h2><p>원가는 기본 화면에 보이지 않고, 위험·비용·추천 행동·기준시각을 중심으로 보여줍니다.</p></div>
        <SimpleTable caption="통합 재고 화면 표시 컬럼" headers={['표시 항목', '공통 의미', '사용 목적']} rows={inventoryRows} />
        <div className="blueprint-guide-rule"><strong>승인 흐름</strong><p>전략 후보 생성 → 담당자 조건 수정 → 수식 재계산 → 추천 이유·하방 결과 확인 → 승인 요청 → 승인 이력 저장 → 실제 결과 회수</p></div>
      </div>
    </section>

    <section className="section blueprint-methodology-section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">08 · 근거와 적용 방법</span><h2>자료를 그대로 복사하지 않고<br /><em>기준·필드·계산으로 바꿉니다.</em></h2><p>공식 자료는 관리 대상을, 법·정책 자료는 차단 조건을, 연구는 계산·검증 방법을 정하고, 프로젝트 요구사항과 내부 데이터가 최종값을 확정합니다.</p></div>
        <SimpleTable caption="참고 자료를 설계로 바꾸는 방법" headers={['자료 묶음', '검토한 기준', '사이트에 반영한 결과']} rows={methodologyRows} />
        <div className="blueprint-methodology-result"><strong>확정 전 주의사항</strong><p>현재 사이트의 테이블·필드·수식은 개발 기준안입니다. 실제 운영 전에는 각 계열사의 ERP·POS·WMS·재무 데이터로 필드명·단위·금액·가중치·임계값을 확정해야 합니다.</p></div>
        <div className="blueprint-guide-section-heading"><span>전체 출처</span><h3>각 자료의 원문을<br /><em>직접 확인할 수 있습니다.</em></h3></div>
        <div className="formula-source-links">{sourceIds.map((id) => { const source = sources.find((item) => item.id === id); return source ? <SourceNote key={id} source={source} /> : null; })}</div>
      </div>
    </section>
  </>;
}
