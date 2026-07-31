import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';

const scopeCards = [
  ['문제', '3개 계열사의 상품은 처리기한, 소유권, 비용 구조가 다릅니다. 하나의 할인율로 처리하면 손실과 책임을 설명하기 어렵습니다.'],
  ['1차 사용자', '현대웰니스·현대리바트·현대그린푸드의 책임 담당자와 통합 운영·관리자입니다.'],
  ['핵심 가치', '위험재고 또는 처리기한 임박 상품을 찾고, 기준선 대비 처리 대안을 비교하며, 근거가 남는 승인 흐름을 제공합니다.'],
  ['사람과 AI', 'AI는 계산·비교·설명을 담당합니다. 가격·할인·수량·전략 조건 변경은 권한 있는 담당자가 승인하고 외부 시스템에 전달합니다.'],
];

const included = [
  '3개 계열사 상품·재고 공통 모델',
  '계열사별 위험 신호·하드 차단·비용 요소',
  '할인·쿠폰·포인트·기간·수량 시뮬레이션',
  '최대 3개 전략 후보와 기준선 대비 증분 기여현금이익',
  '승인·Teams 알림·외부 성과 회수·예측 오차 기록',
];

const deferred = [
  '교차 계열사 번들 전략의 외부 시스템 전달',
  '계열사 간 물리적 재고 이동·운송 실행',
  '고객용 공개 카탈로그·장바구니·결제·배송',
  '자동 모델 재학습과 무인 가격·재고 변경',
];

export default function PRDPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">05 · Product brief</span></Reveal><Reveal><h1>3개 계열사를 하나의<br /><em>판단 체계</em>로 연결합니다.</h1></Reveal><Reveal><p>서비스가 무엇을 공통으로 계산하고, 무엇을 계열사별로 다르게 검증하는지 한 장으로 정리합니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="prd-grid">{scopeCards.map(([title, body]) => <article className="prd-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}<article className="prd-card"><h3>P0·P1 포함 범위</h3><ul>{included.map((item) => <li key={item}>{item}</li>)}</ul></article><article className="prd-card"><h3>P2 후순위</h3><ul>{deferred.map((item) => <li key={item}>{item}</li>)}</ul></article></div></div></section>
    <section className="section-tight band"><div className="container split"><div><span className="eyebrow">Success metrics</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 20}}>많이 파는 것이 아니라,<br />더 나은 결정을 측정합니다.</h2><p className="lead">처리기한 임박 재고 규모, 기한 내 예상 처리율, 기준선 대비 <Link href="/glossary#incremental-profit" className="inline-link">증분이익</Link>, 회피된 비용, 예측 오차를 계열사별로 비교합니다.</p></div><Stagger className="metric-grid"><div className="metric-card"><span className="eyebrow">Metric 01</span><span className="metric-value">처리율</span><p>기한 안에 위험재고가 얼마나 줄었는가</p></div><div className="metric-card"><span className="eyebrow">Metric 02</span><span className="metric-value">증분이익</span><p>기준선보다 얼마나 나아졌는가</p></div><div className="metric-card"><span className="eyebrow">Metric 03</span><span className="metric-value">오차</span><p>예측과 외부 결과의 차이는 얼마인가</p></div></Stagger></div></section>
  </>;
}
