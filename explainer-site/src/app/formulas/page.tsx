'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { Reveal } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

type AffiliateId = 'wellness' | 'travel' | 'livart' | 'greenfood';

type AffiliateProfile = {
  id: AffiliateId;
  label: string;
  short: string;
  accent: string;
  inventoryUnit: string;
  timeAxis: string;
  keyInputs: string[];
  variableCosts: string[];
  hardStops: string[];
  riskSignals: string[];
  sourceIds: string[];
  note: string;
};

const profiles: AffiliateProfile[] = [
  {
    id: 'wellness',
    label: '현대웰니스',
    short: '건강기능식품·영양제',
    accent: '#15825f',
    inventoryUnit: '로트별 판매 가능 수량(Q_available)',
    timeAxis: '소비기한·최소 잔여기한',
    keyInputs: ['SKU·브랜드·성분·기능·대상', '로트·소비기한·보관조건', '재고·예약·판매속도', '채널별 가격·쿠폰·배송'],
    variableCosts: ['배송·포장·결제 수수료', '쿠폰·포인트 부담액', '반품 검수·재판매 비용', '회수·폐기 또는 공급사 회수 비용'],
    hardStops: ['소비기한·보관조건 미확인', '필수 상품 표시·주의사항 누락', '판매 권한·공급사 회수 조건 미확인'],
    riskSignals: ['잔여기한 압박', '느린 ROS·낮은 소진율', '임박 로트의 예상 폐기비', '건강 관련 설명의 근거 부족'],
    sourceIds: ['affiliate-wellness', 'food-label-law'],
    note: '공식몰의 상품 분류·소비기한·임박 표시는 날짜와 상품 속성을 별도 입력해야 한다는 근거로 사용합니다. 실제 할인 한도와 정산 부담률은 내부 계약 데이터가 필요합니다.',
  },
  {
    id: 'travel',
    label: '더현대트래블',
    short: '항공·호텔·패키지·부가서비스',
    accent: '#2563eb',
    inventoryUnit: '예약 가능 좌석·객실·서비스 슬롯',
    timeAxis: '출발일·발권/예약 마감',
    keyInputs: ['상품·공급사·출발일', '총/예약/잔여 capacity', '수수료·공급가·환율 snapshot', '취소·환불·노쇼 규정'],
    variableCosts: ['발권·결제·상담 처리비', '공급사 취소·위약금', '제휴채널 수수료', '환율·변경·재예약 비용'],
    hardStops: ['출발일·예약 마감 누락', '공급사 규정·capacity 불일치', '환불/위약금 규정 미확인'],
    riskSignals: ['출발일까지 남은 일수', 'capacity 잔량 또는 과소/과대 예약', '취소위약금 노출', '환율·공급가 변동성'],
    sourceIds: ['affiliate-travel', 'travel-dispute'],
    note: '여행은 물리 재고가 아니므로 소비기한·폐기비를 그대로 적용하지 않습니다. 미판매 capacity와 임박 출발의 공급사 위약금·기회비용을 회피비용으로 계산합니다.',
  },
  {
    id: 'livart',
    label: '현대리바트',
    short: '가구·리빙·인테리어',
    accent: '#b87818',
    inventoryUnit: '제품·옵션·프로젝트 단위 재고',
    timeAxis: '창고 보관일·납기·설치일',
    keyInputs: ['모델·옵션·부피·중량', '창고·전시·프로젝트 상태', '생산/배송/설치 lead time', '지역별 설치 슬롯·AS 이력'],
    variableCosts: ['창고·전시 공간 대체가치', '라스트마일·설치 인건비', '파손·재배송·회수 비용', '반품·AS·주문제작 취소 비용'],
    hardStops: ['설치 슬롯·배송 가능 지역 없음', '주문제작 생산 착수 상태 불명', '소유권·반품·AS 조건 미확인'],
    riskSignals: ['부피×장기보관일', '납기 대비 생산 지연', '설치 capacity 부족', '파손·반품·AS 비용 상승'],
    sourceIds: ['affiliate-livart-product', 'affiliate-livart-catalog'],
    note: '공식 상품 페이지의 설치 연락·배송 연기 안내와 카탈로그의 배송·설치·AS 범위를 반영합니다. 제품 수량만 늘리는 전략은 설치 capacity를 넘으면 차단합니다.',
  },
  {
    id: 'greenfood',
    label: '현대그린푸드',
    short: '식자재·리테일·케어푸드',
    accent: '#0f766e',
    inventoryUnit: '로트·소비기한별 식품 수량',
    timeAxis: '소비기한·주문 마감·배송일',
    keyInputs: ['SKU·로트·원산지·추적번호', '소비기한·온도등급·보관조건', '채널·점포·고객사 수요', '주문 마감·냉장/냉동 배송 capacity'],
    variableCosts: ['피킹·포장·냉장/냉동 배송', '보냉재·에너지·회수 비용', '폐기·음식물 처리·증빙', '채널 수수료·할인·반품'],
    hardStops: ['소비기한·보관조건 미확인', '검사·HACCP·추적 상태 이상', '냉장/냉동 배송 capacity 없음'],
    riskSignals: ['소비기한 압박', '예상 폐기량×처리단가', '콜드체인 capacity 부족', '사전예약 마감과 배송일 불일치'],
    sourceIds: ['affiliate-greenfood', 'affiliate-greenfood-reservation', 'food-label-law', 'mfds-storage'],
    note: '식자재 공급과 사전예약 서비스는 수량·마감일·배송일을 함께 관리해야 합니다. 소비기한과 보관조건은 비용보다 먼저 검증하는 법정 입력입니다.',
  },
];

const sourceById = (id: string) => sources.find((source) => source.id === id);

function FormulaBlock({ children }: { children: React.ReactNode }) {
  return <pre className="formula-code"><code>{children}</code></pre>;
}

function SourceLinks({ ids }: { ids: string[] }) {
  return (
    <div className="formula-source-links">
      <span>근거 링크</span>
      {ids.map((id) => {
        const source = sourceById(id);
        return source ? <SourceNote key={id} source={source} /> : null;
      })}
    </div>
  );
}

export const metadata = {
  title: '계열사 통합 수식 | InventoryOS',
  description: '현대웰니스·더현대트래블·현대리바트·현대그린푸드의 상품/서비스 특성을 공통 목적함수로 계산하는 AI 재고 처리 수식',
};

export default function FormulasPage() {
  const [activeId, setActiveId] = useState<AffiliateId>('wellness');
  const active = useMemo(() => profiles.find((profile) => profile.id === activeId) ?? profiles[0], [activeId]);

  return (
    <>
      <section className="page-hero formula-hero">
        <div className="container">
          <Reveal><span className="eyebrow">03-B · Integrated Formula Engine</span></Reveal>
          <Reveal>
            <h1>네 계열사를 하나의<br /><em>판단 수식으로 연결합니다.</em></h1>
          </Reveal>
          <Reveal>
            <p>
              목적함수와 계산 순서는 통일하고, 재고 단위·처리기한·capacity·비용·하드 차단은 계열사별로 다르게 입력합니다.
              공개 자료로 확인한 사실과 내부 데이터 계약이 필요한 값을 화면에서 분리해 표시합니다.
            </p>
          </Reveal>
          <div className="formula-hero-points">
            <span><b>01</b> 공통 목적함수</span>
            <span><b>02</b> 계열사별 입력계약</span>
            <span><b>03</b> 출처·가정 분리</span>
          </div>
        </div>
      </section>

      <section className="section formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">01 · One objective</span>
            <h2>공통 목적함수는 하나입니다.</h2>
            <p>수량 상품과 예약 capacity 모두 “기준선보다 실제로 더 나아지는가”를 같은 방식으로 비교합니다.</p>
          </div>
          <div className="formula-main-grid">
            <div className="formula-panel formula-panel-dark">
              <span className="formula-label">증분 기여현금이익</span>
              <FormulaBlock>{`M_inc(s) = feasible(s) × [
  Revenue_s - VariableCost_s
  + AvoidedCost_s
  - Cannibalization_s
  - RiskPenalty_s
  - AI_CaseCost_s
  - M_baseline
]`}</FormulaBlock>
              <p>이미 발생한 취득원가는 매몰원가로 분리합니다. 원가를 화면에 노출하지 않아도 서버 계산·감사 로그에는 원가 버전과 접근권한을 남깁니다.</p>
              <SourceLinks ids={['project-policy', 'markdown-paper', 'markdown-perishable', 'markdown-cannibalization']} />
            </div>
            <div className="formula-panel">
              <span className="formula-label">전략 실행 가능성</span>
              <FormulaBlock>{`feasible(s) = 1
  ownership_ok
  ∧ legal_ok
  ∧ freshness_ok
  ∧ capacity_ok
  ∧ data_quality_ok
else 0`}</FormulaBlock>
              <p>하드 차단 조건이 0이면 이익이 큰 후보도 추천하지 않습니다. 식품의 소비기한, 여행의 취소 규정, 리바트의 설치 슬롯, 웰니스 상품의 표시·보관정보가 여기에 들어갑니다.</p>
              <SourceLinks ids={['project-policy', 'food-label-standards', 'travel-easylaw']} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight band formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">02 · Demand &amp; cost</span>
            <h2>판매량과 비용을 같은 기준선에서 다시 계산합니다.</h2>
          </div>
          <div className="formula-three-grid">
            <article className="formula-panel">
              <span className="formula-number">01</span>
              <h3>예상 판매량 / 예약량</h3>
              <FormulaBlock>{`Q_s = min(Q_available,
  max(0, Q_base
    × F_time × F_price
    × F_channel × F_bundle
    × confidence))`}</FormulaBlock>
              <p><code>Q_available</code>은 웰니스·그린푸드의 실재고일 수도, 트래블의 좌석·객실·슬롯일 수도 있습니다.</p>
            </article>
            <article className="formula-panel">
              <span className="formula-number">02</span>
              <h3>매출·변동비</h3>
              <FormulaBlock>{`Revenue_s = Q_s × P_list × (1 - discount)
            - Q_s × (coupon + point + subsidy)

VariableCost_s = Q_s × (commission
  + payment + fulfillment + return_expected)
  + campaign_fixed_cost`}</FormulaBlock>
              <p>쿠폰·포인트·배송·설치·콜드체인·발권·환불처럼 전략 때문에 변하는 현금만 분리합니다.</p>
            </article>
            <article className="formula-panel">
              <span className="formula-number">03</span>
              <h3>회피비용·하방</h3>
              <FormulaBlock>{`AvoidedCost_s = holding_avoided
  + disposal_avoided
  + supplier_penalty_avoided
  + capacity_loss_avoided

RiskPenalty_s = probability × impact`}</FormulaBlock>
              <p>트래블은 disposal을 쓰지 않고 공급사 위약금·capacity 기회비용을 넣습니다. 그린푸드는 실제 처리계약 단가를 사용합니다.</p>
            </article>
          </div>
          <SourceLinks ids={['markdown-paper', 'markdown-perishable', 'project-simulation', 'travel-easylaw']} />
        </div>
      </section>

      <section className="section formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">03 · Affiliate model</span>
            <h2>계열사마다 달라지는 것은 입력값입니다.</h2>
            <p>아래 탭은 현재 공개 자료에서 확인한 상품 특성과, 실제 데이터 연결 때 추가로 받아야 할 필드를 구분해 보여줍니다.</p>
          </div>

          <div className="affiliate-tabs" role="tablist" aria-label="계열사 수식 선택">
            {profiles.map((profile) => (
              <button
                type="button"
                key={profile.id}
                role="tab"
                aria-selected={activeId === profile.id}
                className={activeId === profile.id ? 'affiliate-tab active' : 'affiliate-tab'}
                onClick={() => setActiveId(profile.id)}
                style={{ '--tab-accent': profile.accent } as React.CSSProperties}
              >
                <strong>{profile.label}</strong>
                <span>{profile.short}</span>
              </button>
            ))}
          </div>

          <article className="affiliate-detail" style={{ '--affiliate-accent': active.accent } as React.CSSProperties}>
            <div className="affiliate-detail-head">
              <div>
                <span className="pill" style={{ color: active.accent, background: `${active.accent}16` }}>ACTIVE MODEL</span>
                <h3>{active.label}</h3>
                <p>{active.note}</p>
              </div>
              <div className="affiliate-unit">
                <span>재고 단위</span>
                <strong>{active.inventoryUnit}</strong>
                <span>시간축</span>
                <strong>{active.timeAxis}</strong>
              </div>
            </div>
            <div className="affiliate-detail-grid">
              <div>
                <h4>필수 입력 요소</h4>
                <ul>{active.keyInputs.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>비용 측정 요소</h4>
                <ul>{active.variableCosts.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>하드 차단</h4>
                <ul className="danger-list">{active.hardStops.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>위험 신호</h4>
                <ul>{active.riskSignals.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <SourceLinks ids={active.sourceIds} />
          </article>
        </div>
      </section>

      <section className="section-tight formula-section band">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">04 · Risk score</span>
            <h2>위험점수는 공통, 신호는 계열사별입니다.</h2>
            <p>등급 임계값과 가중치는 버전으로 저장하고, 하드 차단은 점수 계산보다 먼저 적용합니다.</p>
          </div>
          <div className="risk-layout">
            <div className="formula-panel formula-panel-dark">
              <span className="formula-label">0–100 위험점수</span>
              <FormulaBlock>{`RiskScore_i = 100 × Σ(w_k × z_ik)
Σw_k = 1

z_ik ∈ [0, 1]
등급 = 정상 / 주의 / 위험`}</FormulaBlock>
              <p>예: 처리기한 압박, 판매속도 부족, 재고가치, 수요 불확실성, capacity 부족을 계열사별로 정규화합니다.</p>
            </div>
            <div className="risk-cards">
              <div><strong>웰니스·그린푸드</strong><span>잔여기한 · 보관조건 · 예상 폐기량</span></div>
              <div><strong>더현대트래블</strong><span>출발일까지 · 예약률 · 위약금</span></div>
              <div><strong>현대리바트</strong><span>부피·보관일 · 설치 슬롯 · 파손/AS</span></div>
            </div>
          </div>
          <SourceLinks ids={['project-policy', 'food-label-law', 'mfds-storage']} />
        </div>
      </section>

      <section className="section formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">05 · Simulation contract</span>
            <h2>시뮬레이션은 이 순서로 재현됩니다.</h2>
            <p>담당자가 바꾸는 값과 시스템이 지켜야 하는 값을 분리해, 승인 전·후 결과를 같은 버전으로 추적합니다.</p>
          </div>
          <div className="simulation-flow">
            {[
              ['01', '기준선 snapshot', '현재 재고/capacity, 가격, 수요기간, 원가 버전을 고정'],
              ['02', '조정값 입력', '할인율·쿠폰·포인트·기간·적용수량을 검증'],
              ['03', '하드 차단', '소유권·법규·처리기한·배송/설치 capacity를 확인'],
              ['04', '예상치 계산', '판매량·매출·비용·회피비용·잔여재고/잔여 capacity 산출'],
              ['05', '후보 비교', '보수·기본·낙관 시나리오와 기준선 대비 M_inc 비교'],
            ].map(([number, title, body]) => (
              <div className="simulation-step" key={number}>
                <span>{number}</span><strong>{title}</strong><p>{body}</p>
              </div>
            ))}
          </div>
          <div className="simulation-result">
            <div>
              <span className="eyebrow">결과로 보여줄 값</span>
              <h3>예상 판매량 · 예상 매출 · 증분 기여현금이익 · 마진율 · 소진일/잔여 capacity · 회피비용</h3>
            </div>
            <p>승인된 전략은 revision과 데이터 cutoff를 함께 저장하고, 실제 판매·예약 결과가 연결되면 예측 오차를 비교합니다.</p>
          </div>
          <SourceLinks ids={['project-simulation', 'project-policy']} />
        </div>
      </section>

      <section className="section-tight formula-section band">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">06 · Scope &amp; evidence</span>
            <h2>통합은 하되, 아직 확정되지 않은 것은 숨기지 않습니다.</h2>
          </div>
          <div className="evidence-grid">
            <article className="evidence-card"><span className="pill">P0</span><h3>이번 MVP에서 계산</h3><p>네 계열사 상품/서비스의 공통 목적함수, 위험점수, 계열사별 입력·비용·하드 차단, 출처 링크와 시뮬레이션 결과.</p></article>
            <article className="evidence-card"><span className="pill">P2</span><h3>확장으로 보류</h3><p>교차 계열사 묶음판매, 재고 이동·공동 프로모션, 고객용 공개 카탈로그는 소유권·정산·권한 계약 확인 뒤 활성화합니다.</p></article>
            <article className="evidence-card"><span className="pill">DATA</span><h3>내부 계약 필요</h3><p>실제 원가·수수료·쿠폰 부담·capacity·반품·폐기 단가·수요 탄력성은 공식 공개 자료로 확정하지 않고 원천 시스템 연결 후 버전 관리합니다.</p></article>
          </div>
          <div className="actions">
            <Link className="button primary" href="/sources">전체 출처 목록 열기 →</Link>
            <Link className="button secondary" href="/glossary">용어·기호 사전 보기</Link>
            <Link className="button secondary" href="/prd">제품 범위와 정책 보기</Link>
          </div>
        </div>
      </section>
    </>
  );
}
