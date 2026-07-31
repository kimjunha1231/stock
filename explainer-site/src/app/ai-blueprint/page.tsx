import Link from 'next/link';
import { AiStageCard } from '@/components/ai-guide/ai-stage-card';
import { ScenarioCard } from '@/components/ai-guide/scenario-card';
import { Reveal } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import {
  affiliateAiProfiles,
  aiStages,
  fallbackRows,
  modelLifecycle,
  outputContractRows,
  requiredDataRows,
  situationPlaybooks,
  technologyRoles,
} from '@/lib/ai-guide-content';
import { sources } from '@/lib/content';

const formulaCards = [
  {
    id: 'feasible',
    label: '01 · 먼저 막을 것부터 확인',
    title: '실행 가능 여부',
    formula: `실행 가능 여부(전략) = 소유권 확인
  × 법적·표시 조건 확인
  × 처리기한 확인
  × 계열사 정책 확인
  × 데이터 품질 확인

각 항목: 통과 = 1, 미통과 = 0`,
    plain: '돈이 될 것 같아도 소유권·법적 제한·기한·계열사 정책·데이터 품질을 모두 확인한 뒤에만 전략 후보로 비교합니다.',
    inputs: '소유권, 전략 적용 가능 여부, 소비기한·검사 상태, 할인·처리 정책, 데이터 누락 여부',
    affiliate: '웰니스·그린푸드는 기한·표시·검사, 리바트는 판매 정책과 비용 누락을 확인합니다.',
    source: '정책·검사·소유권·품질 snapshot',
    usedBy: '전략 후보 차단',
    missingPolicy: '확인되지 않은 항목도 차단',
    version: '적용 정책·수식 버전',
  },
  {
    id: 'trend',
    label: '02 · 외부 관심을 숫자로 변환',
    title: '트렌드 점수',
    formula: `트렌드 점수(상품) = Σ(신호별 가중치 × 신호별 점수)
신호별 가중치의 합 = 1

신호별 점수 = 검색·SNS·조회·판매 변화의 0~1 점수`,
    plain: '검색량만 보지 않고 SNS 언급, 상품 조회·찜·장바구니, 실제 판매 변화가 같은 방향인지 함께 봅니다.',
    inputs: '신호별 변화율, 출처, 수집시각, 신호별 신뢰도, 계열사·카테고리 가중치',
    affiliate: '웰니스는 성분·건강 관심, 리바트는 인테리어·시즌, 그린푸드는 메뉴·제철·날씨 신호를 연결합니다.',
    source: '검색·SNS·조회·판매 신호',
    usedBy: '수요예측 외생 피처',
    missingPolicy: '검증된 중립값으로 미반영',
    version: '피처·수식 버전',
  },
  {
    id: 'demand',
    label: '03 · 얼마나 팔릴지 계산',
    title: '트렌드를 반영한 수요예측',
    formula: `기본 예상수요(상품·기간) = 최소값(
  가용재고,
  최대값(0, 기본수요
    × 트렌드 효과 × 가격 효과
    × 프로모션 효과 × 계절 효과)
)

예측 범위 = 보수 예측(10%) ~ 기본 예측(50%) ~ 낙관 예측(90%)`,
    plain: '평소 판매량에 트렌드·가격·프로모션·계절 효과를 반영하고, 한 숫자가 아니라 보수·기본·낙관 범위를 함께 제공합니다.',
    inputs: '품절 보정 판매량, 재고, 트렌드, 가격·할인율, 행사 효과, 요일·계절, 상품 특성',
    affiliate: '공통 모델이 계열사·카테고리·상품 특성을 입력받고, 검증된 경우에만 그룹별 보정값을 적용합니다.',
    source: '판매·재고·가격·행사·시간 피처',
    usedBy: '위험·잔여재고·전략 판매량',
    missingPolicy: '승인 기준모델 또는 예측 부족',
    version: '모델·피처 버전',
  },
  {
    id: 'cost',
    label: '04 · 판매 때문에 더 드는 돈 계산',
    title: '매출과 변동비',
    formula: `전략 매출 = 예상 판매수량 × 정상 판매가 × (1 - 할인율)
  - 예상 판매수량 × (쿠폰 부담 + 포인트 부담 + 지원금)

전략 변동비 = 예상 판매수량 × (채널 수수료
  + 결제 수수료 + 주문 처리비
  + 예상 반품비)
  + 행사 고정비`,
    plain: '할인 후 매출에서 쿠폰·포인트·수수료·배송·설치·반품처럼 이번 전략 때문에 달라지는 금액을 계산합니다.',
    inputs: '정상가, 할인율, 쿠폰·포인트 부담, 채널 수수료, 결제비, 배송비, 설치비, 반품·재배송비, 행사 고정비',
    affiliate: '리바트는 설치·재배송, 그린푸드는 콜드체인·보냉재, 웰니스는 포장·검수·회수 비용을 반영합니다.',
    source: '전략 조건·예상수량·비용 snapshot',
    usedBy: '손익·증분이익',
    missingPolicy: '필수 비용 누락 시 마진 순위 차단',
    version: '비용 정책·수식 버전',
  },
  {
    id: 'risk',
    label: '05 · 위험도를 같은 척도로 비교',
    title: '위험점수',
    formula: `위험점수(상품) = 100 × Σ(신호별 가중치 × 신호별 위험값)
신호별 가중치의 합 = 1
신호별 위험값 = 0~1

등급 = 정상 / 주의 / 위험`,
    plain: '소비기한 압박, 느린 판매, 높은 보관·폐기비처럼 다른 위험 신호를 같은 0~100점 척도로 합칩니다.',
    inputs: '기한 압박, 판매속도, 재고금액, 보관일, 예상 폐기·파손·반품비, 예측 불확실성',
    affiliate: '웰니스·그린푸드는 기한과 폐기, 리바트는 보관·파손·반품, 그린푸드는 콜드체인·폐기 가중치를 높입니다.',
    source: '예측수요·기한·비용·가중치',
    usedBy: '우선순위·위험등급',
    missingPolicy: '가중치 누락 시 평가 차단',
    version: '정책·수식 버전',
  },
  {
    id: 'objective',
    label: '06 · 전략 후보를 최종 비교',
    title: '증분 기여현금이익',
    formula: `증분 기여현금이익(전략) = 실행 가능 여부 × [
  전략 매출 - 전략 변동비
  + 피할 수 있는 비용
  - 기존 판매 잠식 비용
  - 위험 손실 비용
  - AI 사용 비용
  - 아무것도 하지 않을 때의 기준선 이익
]`,
    plain: '아무것도 하지 않을 때보다 이번 전략이 실제로 더 남기는 돈을 계산합니다. 실행 불가 후보는 처음부터 비교하지 않습니다.',
    inputs: '실행 가능 여부, 예상 판매량, 매출, 변동비, 회피비용, 잠식·위험, 기준선 결과',
    affiliate: '공통 계산 뼈대는 유지하고 계열사·카테고리·SKU의 비용·정책 프로필만 다르게 적용합니다.',
    source: '매출·변동비·회피비용·잠식·위험·기준선',
    usedBy: '목표별 전략 순위',
    missingPolicy: '기준선 또는 비용 누락 시 확정 차단',
    version: 'snapshot·정책·수식 버전',
  },
];

const strategyBuildRows = [
  ['최대 마진', '증분 기여현금이익이 가장 큰 후보', '할인폭을 낮게 시작하고 변동비·반품·회피비용을 모두 반영', '최소 마진·하방 손실 한도 미달 제외'],
  ['빠른 소진', '처리기한 안의 예상 잔여재고가 가장 작은 후보', '할인·채널·기간과 보관·폐기 회피비용을 반영', '기한 안에 처리되지 않으면 제외'],
  ['최대 매출', '예상 판매수량 × 할인 후 가격이 가장 큰 후보', '트렌드·프로모션·채널 효과를 반영', '마진 하한과 정책 제한 유지'],
  ['위험 최소화', '위험점수·예상 손실·폐기량이 가장 많이 줄어드는 후보', '기한·파손·콜드체인·반품 비용을 반영', '실제로 줄어드는 비용만 인정'],
];

const llmInputRows = [
  ['상품·데이터', '계열사·카테고리·SKU, 데이터 기준시각과 충분성'],
  ['예측', '보수·기본·낙관 예상 판매량과 소진일'],
  ['정책·위험', '차단 결과, 위험 신호별 값과 정책 버전'],
  ['전략·손익', '전략 조건, 매출·비용·회피비용·증분이익'],
  ['문서 근거', 'RAG가 찾은 문서 제목·근거 구간·링크'],
];

const llmOutputRows = [
  ['한 문장 요약', '무슨 변화가 있고 무엇을 검토할지'],
  ['권장 행동', '입고 검토·유지·할인 검토·처리 우선 등'],
  ['숫자 근거', '입력에 실제로 포함된 예측·위험·손익 값'],
  ['하방 위험', '보수 시나리오와 손실 가능성'],
  ['부족 데이터', '결과에 영향을 주는 미수집·대체값'],
  ['확인 질문', '담당자가 승인 전 확인할 항목'],
  ['문서 출처', '정책·법규·지침의 근거 링크'],
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
        <Reveal><span className="eyebrow">실제 서비스 AI 설계·운영 가이드</span></Reveal>
        <Reveal><h1>데이터가 들어와<br /><em>전략이 설명될 때까지</em></h1></Reveal>
        <Reveal><p>어떤 값이 필요하고, 머신러닝·수식·LLM·RAG가 어디에서 작동하며, 상황별로 무엇을 해야 하는지 한 흐름으로 설명합니다.</p></Reveal>
        <div className="actions" style={{ marginTop: 26 }}><Link className="button primary" href="#ai-flow">AI 흐름부터 보기 →</Link><Link className="button secondary" href="#required-data">필요 데이터 보기</Link></div>
      </div>
    </section>

    <nav className="ai-guide-anchor-nav" aria-label="AI 가이드 섹션">
      <div className="container">
        <a href="#ai-flow">전체 흐름</a><a href="#technology-roles">기술 역할</a><a href="#required-data">필요 데이터</a><a href="#affiliate-ai">계열사 적용</a><a href="#situations">상황별 처리</a><a href="#model-lifecycle">학습·검증</a><a href="#formula-engine">수식</a><a href="#llm-rag">LLM·RAG</a><a href="#fallbacks">실패 대응</a><a href="#output-contract">결과 계약</a>
      </div>
    </nav>

    <section className="section ai-guide-flow-section" id="ai-flow">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">01 · 전체 처리 순서</span><h2>실제 서비스 AI 처리 흐름<br /><em>데이터에서 전략까지</em></h2><p>한 단계의 결과가 다음 단계의 입력이 됩니다. 펼침 카드를 열면 필요한 값·결과·실패 시 처리까지 확인할 수 있습니다.</p></div>
        <div className="ai-guide-flow-rail" aria-label="AI 처리 단계 요약">{aiStages.map((stage) => <a className="ai-guide-flow-step" href={`#ai-stage-${stage.id}`} key={stage.id}><b>{stage.id}</b><span>{stage.title}</span></a>)}</div>
        <div className="ai-stage-grid">{aiStages.map((stage) => <div id={`ai-stage-${stage.id}`} key={stage.id}><AiStageCard stage={stage} open={stage.id === '05' || stage.id === '10'} /></div>)}</div>
        <div className="blueprint-guide-rule blueprint-guide-rule-green"><strong>데이터베이스 경계</strong><p>현대웰니스·현대리바트·현대그린푸드의 Oracle 원천 DB는 읽기 전용 View로 연결하고, 통합 Oracle에는 공통 복제본과 AI 결과만 저장합니다. 하루 1회 자동 동기화와 필요 시 수동 갱신을 지원하며 계열사 원천에는 쓰지 않습니다.</p></div>
      </div>
    </section>

    <section className="section band" id="technology-roles">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">02 · 책임 분리</span><h2>머신러닝·수식·LLM·RAG의 역할<br /><em>책임을 나눕니다</em></h2><p>모든 것을 생성형 AI로 처리하지 않습니다. 각 기술이 잘하는 일과 하면 안 되는 일을 분리합니다.</p></div>
        <div className="ai-technology-grid">{technologyRoles.map((item) => <article className="ai-technology-card" key={item.name}><span>{item.name}</span><h3>{item.question}</h3><p><b>담당</b>{item.owns}</p><p><b>담당하지 않음</b>{item.excludes}</p></article>)}</div>
      </div>
    </section>

    <section className="section" id="required-data">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">03 · 입력 데이터</span><h2>총합적으로 필요한 데이터<br /><em>무엇을 가지고 있어야 할까</em></h2><p>계열사 원천 확정값과 통합 계산값, 머신러닝 예측값을 구분합니다. 값이 없을 때의 처리도 함께 정합니다.</p></div>
        <div className="ai-data-level-legend" aria-label="데이터 중요도"><span className="ai-data-level is-required">필수</span><span className="ai-data-level is-helpful">정확도 향상</span><span className="ai-data-level is-later">후속 고도화</span></div>
        <SimpleTable caption="AI에 총합적으로 필요한 데이터" headers={['데이터 묶음', '필요한 값', '등급', '사용 단계', '없을 때 처리']} rows={requiredDataRows.map((item) => [item.group, item.values, item.level, item.usedBy, item.missingPolicy])} className="ai-required-data-table" />
        <div className="ai-value-origin-grid"><strong>값의 출처를 함께 표시합니다</strong>{['계열사 원천 확정값', '통합 시스템 계산값', '머신러닝 예측값', '정책 기본값', '사용자 시뮬레이션 조정값', '미수집 또는 대체 처리값'].map((item) => <span key={item}>{item}</span>)}</div>
      </div>
    </section>

    <section className="section band" id="affiliate-ai">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">04 · 공통 모델과 차이 반영</span><h2>계열사별 ML 세 개가 아니라<br /><em>공통 모델과 검증된 보정</em></h2><p>계열사 이름만으로 모델을 분리하지 않습니다. 공통 모델이 계열사·카테고리·상품 특성을 입력받아 다르게 예측합니다.</p></div>
        <div className="ai-affiliate-model-rule"><span>공통 계산 구조</span><pre>최종 예상수요 = 공통 수요예측 모델 결과 × 계열사·카테고리별 검증 보정값</pre><p>특정 상품군에서 별도 모델의 개선 효과가 여러 시간순 검증에서 반복될 때만 모델을 분리합니다.</p></div>
        <div className="blueprint-source-layout"><div className="blueprint-source-main"><SimpleTable caption="계열사별 AI 입력과 처리 차이" headers={['계열사', '대표 상품군', '추가 입력', '강한 신호', '하드 차단', '비용', '모델 처리']} rows={affiliateAiProfiles.map((item) => [item.affiliate, item.productTypes, item.extraInputs, item.strongestSignals, item.hardStops, item.costs, item.modelHandling])} className="blueprint-affiliate-formula-table" /></div><SourceRail ids={['affiliate-wellness', 'affiliate-livart-product', 'affiliate-greenfood', 'food-label-law']} note="공식 계열사 상품·사업 자료와 법·정책 자료에서 확인한 차이를 입력과 정책으로 바꿨습니다." /></div>
      </div>
    </section>

    <section className="section" id="situations">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">05 · 상황별 플레이북</span><h2>상황이 달라지면<br /><em>이렇게 처리합니다</em></h2><p>정상 흐름만 설명하지 않습니다. 신규 상품·데이터 부족·트렌드 변화·동기화 실패처럼 실제로 생기는 상황을 각각 정의합니다.</p></div>
        <div className="ai-scenario-grid">{situationPlaybooks.map((scenario) => <ScenarioCard scenario={scenario} key={scenario.id} />)}</div>
      </div>
    </section>

    <section className="section band" id="model-lifecycle">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">06 · 머신러닝 운영</span><h2>머신러닝 학습·검증·운영<br /><em>모델을 안전하게 바꾸는 법</em></h2><p>복잡한 모델을 만드는 것보다 미래 데이터 누출을 막고 기준모델보다 안정적으로 좋아지는지 확인하는 것이 먼저입니다.</p></div>
        <div className="ai-lifecycle-grid">{modelLifecycle.map((step) => <article key={step.id}><span>{step.id}</span><strong>{step.title}</strong><p>{step.description}</p></article>)}</div>
        <div className="blueprint-guide-rule"><strong>운영 모델 승인 규칙</strong><p>미래 데이터는 입력에 포함하지 않고, 기준모델과 반드시 비교하며, 정확도는 전체뿐 아니라 계열사·카테고리별로 평가합니다. 문제가 생기면 이전 승인 모델로 되돌릴 수 있어야 합니다.</p></div>
      </div>
    </section>

    <section className="section blueprint-formula-section" id="formula-engine">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">07 · 수식 연결</span><h2>머신러닝 예측값을<br /><em>비용과 이익으로 바꿉니다</em></h2><p>머신러닝이 수량과 확률을 예측하면, 정책과 수식 엔진이 차단·위험·매출·비용·증분이익을 재현 가능하게 계산합니다.</p></div>
        <div className="blueprint-formula-order" aria-label="전략 계산 순서"><span><b>1</b> 차단</span><i>→</i><span><b>2</b> 트렌드</span><i>→</i><span><b>3</b> 수요</span><i>→</i><span><b>4</b> 비용</span><i>→</i><span><b>5</b> 위험</span><i>→</i><span><b>6</b> 이익·순위</span></div>
        <div className="blueprint-formula-card-grid">{formulaCards.map((card) => <details className="blueprint-formula-card" key={card.id} open={card.id === 'demand' || card.id === 'objective'}>
          <summary><span>{card.label}</span><strong>{card.title}</strong><em>수식과 적용 방법 보기</em></summary>
          <div className="blueprint-formula-card-body"><pre><code>{card.formula}</code></pre><p className="blueprint-formula-plain"><b>쉽게 말하면</b>{card.plain}</p><div className="blueprint-formula-meta"><div><span>필요한 입력값</span><p>{card.inputs}</p></div><div><span>계열사별 적용</span><p>{card.affiliate}</p></div><div><span>입력값 출처</span><p>{card.source}</p></div><div><span>결과 사용처</span><p>{card.usedBy}</p></div><div><span>누락 시 처리</span><p>{card.missingPolicy}</p></div><div><span>재현 버전</span><p>{card.version}</p></div></div></div>
        </details>)}</div>
        <div className="blueprint-guide-section-heading"><span>목표별 순위</span><h3>같은 후보도<br /><em>목표에 따라 다르게 봅니다</em></h3></div>
        <SimpleTable caption="목표별 전략 순위" headers={['목표', '선택 기준', '더 크게 보는 값', '제외 기준']} rows={strategyBuildRows} />
        <SourceRail ids={['project-policy', 'google-trends-help', 'social-demand-informs', 'markdown-paper', 'markdown-perishable']} note="프로젝트 정책과 수요·재고·가격 연구를 예측과 수식의 책임 경계로 정리했습니다." />
      </div>
    </section>

    <section className="section band" id="llm-rag">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">08 · 설명과 문서 근거</span><h2>LLM은 설명하고<br /><em>RAG는 근거를 찾습니다</em></h2><p>재고·판매·비용 숫자는 Oracle과 계산 API에서 가져오고, 정책·법규·지침 같은 비정형 문서만 RAG로 검색합니다.</p></div>
        <div className="ai-llm-boundary"><article><span>정형 숫자</span><h3>Oracle·머신러닝·수식</h3><p>재고, 판매량, 가격, 예측, 위험점수, 비용과 이익을 제공합니다.</p></article><article><span>비정형 근거</span><h3>RAG·벡터 검색</h3><p>정책, 법규, 상품 지침과 과거 사례에서 관련 구간과 링크를 찾습니다.</p></article><article><span>자연어 설명</span><h3>LLM</h3><p>숫자와 근거를 바꾸지 않고 요약·주의사항·질문을 만듭니다.</p></article></div>
        <div className="blueprint-guide-two-column"><div><div className="blueprint-guide-section-heading"><span>LLM 입력</span><h3>받아야 하는<br /><em>구조화 값</em></h3></div><SimpleTable caption="LLM 입력 계약" headers={['묶음', '값']} rows={llmInputRows} /></div><div><div className="blueprint-guide-section-heading"><span>LLM 출력</span><h3>내보내는<br /><em>설명 항목</em></h3></div><SimpleTable caption="LLM 출력 계약" headers={['묶음', '값']} rows={llmOutputRows} /></div></div>
        <div className="blueprint-guide-rule blueprint-guide-rule-green"><strong>숫자 보호 규칙</strong><p>LLM 출력은 정해진 JSON 구조로 검증합니다. 입력에 없는 수치를 생성하거나 차단 결과를 바꾸면 해당 결과를 폐기하고 고정 설명 템플릿을 사용합니다.</p></div>
      </div>
    </section>

    <section className="section" id="fallbacks">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">09 · 실패와 데이터 부족</span><h2>일부 기능이 실패해도<br /><em>전체 판단은 멈추지 않습니다</em></h2><p>마지막 성공 데이터·기준모델·고정 설명 템플릿을 사용하되, 대체 처리 사실과 기준시각을 숨기지 않습니다.</p></div>
        <SimpleTable caption="장애와 데이터 부족 시 대체 처리" headers={['상황', '대체 처리', '사용자 표시']} rows={fallbackRows.map((item) => [item.situation, item.fallback, item.userMessage])} className="ai-fallback-table" />
      </div>
    </section>

    <section className="section band" id="output-contract">
      <div className="container">
        <div className="section-heading"><span className="eyebrow">10 · 최종 산출물</span><h2>최종 AI 결과 계약<br /><em>한 건에 함께 저장할 값</em></h2><p>전략 한 건을 다시 설명하고 재현하려면 다음 결과가 함께 저장되어야 합니다.</p></div>
        <SimpleTable caption="최종 AI 결과 데이터 계약" headers={['결과 묶음', '필드', '값의 출처']} rows={outputContractRows.map((item) => [item.group, item.fields, item.source])} className="ai-output-contract-table" />
        <div className="blueprint-methodology-result"><strong>운영 전 내부 확정</strong><p>계열사 View 컬럼명, 비용 계약, 예측 기간, 최소 학습량, 위험 가중치, 전략 임계값, LLM 공급자와 문서 권한은 실제 내부 데이터·정책 담당자와 확정합니다. 값이 없으면 임의의 숫자 대신 `운영 확정 필요`로 표시합니다.</p></div>
        <div className="blueprint-guide-section-heading"><span>전체 출처</span><h3>각 기준의 원문을<br /><em>직접 확인할 수 있습니다</em></h3></div>
        <div className="formula-source-links">{sourceIds.map((id) => { const source = sources.find((item) => item.id === id); return source ? <SourceNote key={id} source={source} /> : null; })}</div>
      </div>
    </section>
  </>;
}
