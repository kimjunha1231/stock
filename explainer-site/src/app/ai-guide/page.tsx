import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';

const aiFunctions = [
  {
    id: 'AI-01',
    title: '트렌드 신호 수집·해석',
    purpose: '검색량, SNS 언급량, 판매량이 갑자기 늘거나 줄어드는지 찾아 수요 변화의 시작을 알려줍니다.',
    inputs: '검색어 추이·SNS 언급량·판매량·조회수·프로모션 노출량',
    output: '상승·하락 신호, 변화율, 신호의 출처와 수집 시각',
    formula: 'TrendScore = 0.35×검색량 변화 + 0.25×SNS 변화 + 0.30×판매량 변화 + 0.10×조회수 변화',
    use: '예: “두바이쫀득쿠키 검색량과 판매량이 2주 연속 급증했습니다. 입고량을 늘릴지 검토하세요.”',
  },
  {
    id: 'AI-02',
    title: '트렌드 반영 수요예측',
    purpose: '평소 판매 흐름에 트렌드 신호, 계절, 요일, 가격·프로모션 효과를 더해 앞으로 팔릴 양을 예상합니다.',
    inputs: '판매이력·품절·반품·가격·할인·시즌·요일·TrendScore',
    output: '예상 일일 판매량, 예측 구간, 예상 소진일, 신뢰 상태',
    formula: '예상수요 = 기본수요 × (1 + 트렌드효과) × 시즌효과 × 가격효과 × 채널효과',
    use: '트렌드가 상승해도 실제 판매 이력이 부족하면 “예측 부족”으로 표시하고 입고 확대를 자동 확정하지 않습니다.',
  },
  {
    id: 'AI-03',
    title: '위험재고 탐지',
    purpose: '현재 재고가 언제 위험해지는지 판매속도, 남은 기한, 비용, 데이터 품질로 점수화합니다.',
    inputs: '현재고·예상수요·보관일·소비기한·보관비·폐기비·품질상태',
    output: '위험점수 0~100, 정상·주의·위험 등급, 점수에 기여한 이유',
    formula: 'RiskScore = 100 × Σ(신호 중요도 × 상품별 위험 정도)',
    use: '법규·소유권·소비기한·설치·검사 문제가 있으면 점수 순위보다 먼저 “추천 차단”으로 처리합니다.',
  },
  {
    id: 'AI-04',
    title: '판매전략 후보 추천',
    purpose: '담당자가 고른 목표에 맞춰 할인·쿠폰·채널·번들·처리 시점을 조합하고 후보를 만듭니다.',
    inputs: '예상수요·허용 할인·채널 비용·재고·처리기한·계열사 정책',
    output: '최대 3개 전략, 예상 판매·매출·이익·잔여재고, 추천 이유',
    formula: '전략점수 = 증분 기여현금이익 − 위험손실 − AI 처리원가',
    use: 'LLM은 계산된 숫자를 만들지 않고, 계산 결과를 쉬운 문장으로 설명하고 확인할 항목을 알려줍니다.',
  },
  {
    id: 'AI-05',
    title: '전략 시뮬레이션·설명',
    purpose: '수량·할인율·기간·비용을 바꿔 보면서 기준선, 추천안, 담당자 수정안을 같은 방식으로 비교합니다.',
    inputs: '시뮬레이션 조건·정책 버전·데이터 snapshot·수요예측 결과',
    output: '예상 판매량·매출·마진율·소진기간·잔여재고·회피비용',
    formula: '증분이익 = 전략 결과 − 기준선 결과',
    use: '슬라이더를 움직일 때는 수식 엔진이 즉시 다시 계산하고, 승인 가능한 결과만 담당자에게 보여줍니다.',
  },
];

const affiliateRows = [
  ['현대웰니스', '건강기능식품·영양제', '성분·기능·대상, 로트·소비기한, 보관조건, 표시·주의사항', '소비기한 임박, 표시 누락, 회수·폐기 비용', '안전·표시·소비기한이 확인되지 않으면 추천하지 않음'],
  ['현대리바트', '가구·리빙·인테리어', '제품 크기·옵션, 창고 공간, 배송·설치 슬롯, 파손·AS 이력', '공간 점유, 배송·설치, 회수·재배송, 파손·AS', '설치·배송 가능량과 계약 조건을 확인한 뒤 판매량을 늘림'],
  ['현대그린푸드', '식품·식자재·케어푸드', '로트·소비기한, 온도등급, 검사 상태, 냉장·냉동 배송 가능량', '콜드체인, 보관·폐기, 배송·포장, 검사·리콜', '검사·보관조건·소비기한이 맞지 않으면 판매·추천을 차단'],
];

const trainingSteps = [
  ['1. 데이터 모으기', '상품·SKU별 일자 판매량, 품절 여부, 가격·할인, 프로모션, 반품·취소, 재고·입고 이력을 최소 28일 이상 쌓습니다.'],
  ['2. 트렌드 신호 만들기', '검색·SNS·조회수는 날짜와 출처를 함께 저장하고, 전주 대비 변화율과 7일 이동평균을 계산합니다.'],
  ['3. 학습용 정답 만들기', '예측 기준일 이후 실제 7일·14일 판매량을 정답으로 연결합니다. 품절로 못 판 날은 판매 부진으로 학습하지 않습니다.'],
  ['4. 모델 학습·비교하기', '처음에는 카테고리 평균·이동평균을 기준모델로 두고, 트렌드 변수를 추가한 모델의 오차가 실제로 줄어드는지 비교합니다.'],
  ['5. 시간 순서로 검증하기', '과거 데이터로 학습하고 이후 기간으로 검증합니다. 미래 데이터를 섞지 않고, 계열사·카테고리별 오차를 따로 봅니다.'],
  ['6. 운영에 연결하기', '예측값·예측 구간·사용 데이터 기간·모델 버전을 함께 저장하고, 신뢰도가 낮으면 보수적인 규칙 기반 결과로 대체합니다.'],
  ['7. 실제 결과로 점검하기', '전략 실행 후 실제 판매·매출·잔여재고와 예측을 비교해 오차 원인을 기록합니다. 충분한 검증 전에는 자동 재학습·자동 입고를 하지 않습니다.'],
];

export default function AiGuidePage() {
  return <>
    <section className="page-hero capability-hero">
      <div className="container">
        <Reveal><span className="eyebrow">AI feature guide</span></Reveal>
        <Reveal><h1>AI가 무엇을 보고,<br /><em>어떻게 추천하는지</em> 한눈에 봅니다.</h1></Reveal>
        <Reveal><p>이 페이지는 개발자가 기능을 구현할 때 필요한 입력·계산·결과·예외 처리를 한 흐름으로 정리한 길라잡이입니다. AI는 상품을 마음대로 바꾸지 않고, 근거 있는 후보를 만들어 담당자의 판단을 돕습니다.</p></Reveal>
        <div className="actions" style={{ marginTop: 26 }}><Link className="button primary" href="/ai-blueprint">AI 모델·데이터 설계 보기 →</Link><Link className="button secondary" href="/formulas">수식과 한글 설명 보기</Link></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">One operating loop</span><h2>신호를 읽고,<br /><em>수요와 재고를 함께 봅니다.</em></h2><p>트렌드가 발견되면 바로 입고나 할인으로 확정하지 않습니다. 데이터 품질과 계열사별 제한을 확인한 뒤 수요예측, 위험점수, 전략 계산 순서로 진행합니다.</p></div>
        <Stagger className="stack">{[['01', '외부·내부 신호 수집', '검색량·SNS·판매량·재고·프로모션을 같은 날짜 기준으로 모읍니다.'], ['02', '트렌드 판정', '급증·급락·일시적 노출을 구분하고 신호의 출처와 강도를 남깁니다.'], ['03', '수요예측', '평소 수요에 트렌드·시즌·가격 효과를 반영해 예상 판매량과 범위를 만듭니다.'], ['04', '위험·전략 계산', '하드 차단을 먼저 적용하고, 남은 후보를 증분이익과 목표별 점수로 비교합니다.'], ['05', '설명·승인', 'AI는 이유를 쉬운 문장으로 설명하고, 담당자가 조건을 확인해 승인합니다.'], ['06', '결과 회수', '실제 판매·매출·잔여재고를 연결해 예측 오차와 다음 기준을 업데이트합니다.']].map(([num, title, body]) => <div className="stack-card" key={num}><div className="stack-icon">{num}</div><div><strong>{title}</strong><p>{body}</p></div><b>{num === '05' ? 'HUMAN' : 'AI + DATA'}</b></div>)}</Stagger>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Function by function</span><h2>개발할 때는<br /><em>이 표대로 연결합니다.</em></h2><p>각 기능은 “필요한 자료 → 계산 → 화면에 보여줄 결과 → 실패 시 처리” 순서로 구현합니다.</p></div>
        <div className="capability-detail-table-wrap"><table className="capability-detail-table"><caption className="sr-only">AI 기능별 입력, 결과, 수식, 작동 예시</caption><thead><tr><th scope="col">ID</th><th scope="col">기능</th><th scope="col">필요 자료</th><th scope="col">계산·결과</th><th scope="col">실제 사용 방식</th></tr></thead><tbody>{aiFunctions.map((item) => <tr key={item.id}><td>{item.id}</td><td><strong>{item.title}</strong><p style={{ margin: '8px 0 0', fontWeight: 400 }}>{item.purpose}</p></td><td>{item.inputs}</td><td><code>{item.formula}</code><p style={{ margin: '8px 0 0', color: '#17734f' }}>{item.output}</p></td><td>{item.use}</td></tr>)}</tbody></table></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Affiliate-specific inputs</span><h2>공통 AI 위에<br /><em>계열사별 정보를 얹습니다.</em></h2><p>수식의 뼈대는 공통으로 사용하지만, 어떤 신호를 중요하게 볼지와 차단 조건은 상품 특성에 맞게 다르게 설정합니다.</p></div>
        <div className="functional-spec-table-wrap"><table className="functional-spec-table"><caption className="sr-only">계열사별 AI 입력과 위험 기준</caption><thead><tr><th scope="col">계열사</th><th scope="col">대표 상품</th><th scope="col">AI에 넣을 핵심 자료</th><th scope="col">주요 비용·위험 신호</th><th scope="col">먼저 확인할 조건</th></tr></thead><tbody>{affiliateRows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
      </div>
    </section>

    <section className="section band">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Demand forecasting playbook</span><h2>수요예측 모델은<br /><em>이 순서로 학습합니다.</em></h2><p>처음부터 복잡한 모델을 붙이지 않고, 기준모델과 트렌드 반영 모델을 같은 기간에 비교해 실제 개선 여부를 확인합니다.</p></div>
        <Stagger className="stack">{trainingSteps.map(([title, body]) => <article className="stack-card" key={title}><div className="stack-icon">✓</div><div><strong>{title}</strong><p>{body}</p></div><b>GUIDE</b></article>)}</Stagger>
        <div className="callout" style={{ marginTop: 22 }}><strong>자동화의 경계</strong><p>트렌드 신호는 입고 확대·할인·채널 전환을 “검토할 이유”로 제공합니다. 법적 제한, 재고 소유권, 공급·설치·콜드체인 가능량, 데이터 품질이 확인되지 않으면 전략 후보에서 제외하고 담당자 확인으로 보냅니다.</p></div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">Strategy goals</span><h2>담당자는 목적을 먼저 고릅니다.</h2><p>같은 상품이라도 “얼마를 남길지”, “언제까지 줄일지”, “얼마나 팔지”에 따라 추천 결과가 달라집니다.</p></div>
        <div className="strategy-goal-table-wrap"><table className="strategy-goal-table"><caption className="sr-only">AI 전략 목표별 판단 기준</caption><thead><tr><th scope="col">목표</th><th scope="col">쉬운 뜻</th><th scope="col">중요하게 보는 값</th><th scope="col">필요 자료</th><th scope="col">안전 기준</th></tr></thead><tbody>{[['최대 마진', '팔고 나서 실제로 가장 많이 남는 안', '증분 기여현금이익·마진율', '판매가·할인·수수료·배송·반품·회피비용', '최소 마진·최소 판매량'], ['빠른 소진', '정해진 기간 안에 재고를 가장 빨리 줄이는 안', '예상 판매량·소진기간', '현재고·판매기간·수요예측·처리기한', '기한 내 처리 가능 여부'], ['최대 매출', '전체 판매 금액이 가장 커지는 안', '예상 판매수량 × 판매가격', '가격·수량·기간·채널 노출·프로모션', '마진 하한·법적 제한'], ['위험 최소화', '폐기·보관·파손 같은 손실을 가장 많이 줄이는 안', '회피비용·위험손실', '보관일·기한·폐기·반품·파손 비용', '실제로 줄어드는 비용만 반영']].map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={`${row[0]}-${index}`}>{index === 0 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>
      </div>
    </section>
  </>;
}
