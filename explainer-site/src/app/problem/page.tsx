import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';

const contexts = [
  { name: '현대웰니스', tag: '건강기능식품', color: 'blue', title: '잔여기한과 표시 조건을 함께 봅니다.', body: '로트·소비기한·보관조건·기능성 표시가 확인된 상품만 할인·쿠폰 전략 후보로 올립니다.', signal: '잔여기한 · 보관조건 · 클레임 검토' },
  { name: '현대리바트', tag: '가구·리빙', color: 'violet', title: '상품 수량보다 설치와 공간이 중요합니다.', body: '부피·보관일·배송·설치·파손·AS capacity를 함께 보지 않으면 할인으로 수요를 늘려도 실행할 수 없습니다.', signal: '공간 점유 · 설치 슬롯 · 회수비' },
  { name: '현대그린푸드', tag: '식품·콜드체인', color: 'orange', title: '안전과 소비기한이 비용보다 먼저입니다.', body: '로트·소비기한·온도등급·검사 상태와 냉장·냉동 배송 capacity를 확인한 뒤 처리 대안을 비교합니다.', signal: '소비기한 · 온도 · 폐기·배송 capacity' },
];

export default function ProblemPage() {
  return <>
      <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">01 · The problem</span></Reveal><Reveal><h1>3개 계열사의 상품은<br /><em>위험해지는 이유가 다릅니다.</em></h1></Reveal><Reveal><p>상품·채널·처리기한·계약 조건에 따라 비용과 위험이 달라집니다. 통합 서비스는 같은 수식을 쓰되, 계열사별 입력과 차단 기준을 다르게 적용합니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Different context, different loss</span><h2>재고가 어려운 이유는<br />상품이 아니라 맥락입니다.</h2></div><Stagger className="role-grid">{contexts.map((item) => <article className={`role-card ${item.color === 'blue' ? 'featured' : ''}`} key={item.name}><span className="role-label">{item.tag}</span><h3>{item.name}</h3><h3>{item.title}</h3><p>{item.body}</p><p style={{marginTop: 19, fontSize: 11, color: item.color === 'blue' ? '#cfe0ff' : undefined}}>관찰 신호 · {item.signal}</p></article>)}</Stagger></div></section>
    <section className="section-tight band"><div className="container split"><div><span className="eyebrow">What changes</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 20}}>통합은 같은 결론이 아니라,<br />같은 언어를 갖는 것입니다.</h2><p className="lead">각 계열사 담당자는 자사의 비용·권한·capacity로 판단하고, 통합 운영은 위험 규모·처리율·<Link href="/glossary#incremental-profit" className="inline-link">증분이익</Link> 같은 공통 지표로 결과를 비교합니다.</p></div><div className="callout"><strong>우리가 만들지 않는 것</strong><p>통합 장바구니, 소비자 결제, 승인 없는 가격·수량 변경, 통합 운영의 일괄 승인. 이 서비스는 쇼핑몰이 아니라 의사결정 지원 도구입니다.</p></div></div></section>
  </>;
}
