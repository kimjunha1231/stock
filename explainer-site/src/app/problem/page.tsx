import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';

const subsidiaries = [
  { name: '현대백화점', tag: '시즌·브랜드', color: 'blue', title: '가격을 지키면서 공간을 비워야 합니다.', body: '시즌이 지난 프리미엄 상품은 할인만으로 해결되지 않습니다. 보관 공간의 대체가치와 브랜드 가격 훼손을 함께 봐야 합니다.', signal: '보관일수 · 시즌 경과 · 공간 대체가치' },
  { name: '현대그린푸드', tag: '신선·안전', color: 'mint', title: '오늘의 처리 가능성이 내일의 손실을 바꿉니다.', body: '냉장·냉동 전력, 유통기한, 식품안전과 당일 소진 시간이 재고의 우선순위를 결정합니다.', signal: 'D-day · 온도 · 폐기·회수 조건' },
  { name: '현대홈쇼핑', tag: '방송·반품', color: 'violet', title: '방송이 끝난 뒤에도 비용은 끝나지 않습니다.', body: '잔여재고를 볼 때 판매량만이 아니라 반품률, 정산 지연, 다음 방송 슬롯의 기회비용까지 확인합니다.', signal: '방송 잔량 · 반품률 · 정산 시점' },
  { name: '현대리바트', tag: '부피·설치', color: 'orange', title: '상품 하나가 차지하는 운영 용량이 큽니다.', body: '가구는 단순 할인보다 보관 공간, 설치·회수 가능량, 파손과 예약 취소 조건이 더 큰 제약이 됩니다.', signal: '부피 · 설치 용량 · 파손·회수' },
];

export default function ProblemPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">01 · The problem</span></Reveal><Reveal><h1>하나의 재고 기준으로는<br /><em>네 가지 현실</em>을 설명할 수 없습니다.</h1></Reveal><Reveal><p>악성재고라는 같은 이름 아래에 서로 다른 비용·기한·운영 책임이 있습니다. 먼저 이 차이를 인정해야 올바른 판단이 시작됩니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Different context, different loss</span><h2>재고가 어려운 이유는<br />상품이 아니라 맥락입니다.</h2></div><Stagger className="role-grid">{subsidiaries.map((item) => <article className={`role-card ${item.color === 'blue' ? 'featured' : ''}`} key={item.name}><span className="role-label">{item.tag}</span><h3>{item.name}</h3><h3>{item.title}</h3><p>{item.body}</p><p style={{marginTop: 19, fontSize: 11, color: item.color === 'blue' ? '#cfe0ff' : undefined}}>관찰 신호 · {item.signal}</p></article>)}</Stagger></div></section>
    <section className="section-tight band"><div className="container split"><div><span className="eyebrow">What changes</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 20}}>통합은 같은 결론이 아니라,<br />같은 언어를 갖는 것입니다.</h2><p className="lead">각 현대백화점 점포/부서는 자사의 비용과 권한으로 판단합니다. 본사는 위험 규모·처리율·<Link href="/glossary#incremental-profit" className="inline-link">증분이익</Link> 같은 공통 지표로 결과를 비교합니다.</p></div><div className="callout"><strong>우리가 만들지 않는 것</strong><p>통합 장바구니, 소비자 결제, 승인 없는 가격 변경, 본사의 모든 전략 일괄 승인. 이 서비스는 쇼핑몰이 아니라 의사결정 지원 도구입니다.</p></div></div></section>
  </>;
}
