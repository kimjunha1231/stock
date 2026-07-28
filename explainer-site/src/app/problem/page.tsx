import Link from 'next/link';
import { Reveal, Stagger } from '@/components/reveal';

const contexts = [
  { name: '점포별 고객층', tag: '판매속도', color: 'blue', title: '같은 상품도 팔리는 속도가 다릅니다.', body: '점포 위치·고객층·노출에 따라 동일 SKU의 판매속도와 남는 사이즈가 달라집니다. 1차는 현재 점포의 수요 신호를 정확하게 읽습니다.', signal: '최근 판매속도 · 노출 · 사이즈 분포' },
  { name: '시즌·브랜드', tag: '가격·공간', color: 'mint', title: '가격을 지키면서 공간을 비워야 합니다.', body: '시즌이 지난 프리미엄 상품은 할인만으로 해결되지 않습니다. 보관 공간의 대체가치와 브랜드 가격 훼손을 함께 봐야 합니다.', signal: '보관일수 · 시즌 경과 · 공간 대체가치' },
  { name: '식품·처리기한', tag: '안전·기한', color: 'violet', title: '오늘의 처리 가능성이 내일의 손실을 바꿉니다.', body: '식품을 확장할 때는 소비기한·보관조건·품질검사·폐기·회수 가능성을 비용보다 먼저 확인합니다.', signal: 'D-day · 품질 · 폐기·회수 조건' },
  { name: '점포 간 이동', tag: 'P2 후순위', color: 'orange', title: '이동은 검증된 다음 단계입니다.', body: '다른 점포의 판매속도가 더 빠른지, 이동비와 수신 용량을 감당할 수 있는지 확인한 뒤 후순위 기능으로 추가합니다.', signal: '이동비 · 수신 용량 · 이동 후 판매속도' },
];

export default function ProblemPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">01 · The problem</span></Reveal><Reveal><h1>현대백화점 안에서도<br /><em>재고가 어려운 이유는 다릅니다.</em></h1></Reveal><Reveal><p>점포·상품군·시즌·처리기한에 따라 비용과 위험이 달라집니다. 1차는 현재 점포의 직매입 재고를 정확하게 판단하고, 점포 간 이동은 검증 후 확장합니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">Different context, different loss</span><h2>재고가 어려운 이유는<br />상품이 아니라 맥락입니다.</h2></div><Stagger className="role-grid">{contexts.map((item) => <article className={`role-card ${item.color === 'blue' ? 'featured' : ''}`} key={item.name}><span className="role-label">{item.tag}</span><h3>{item.name}</h3><h3>{item.title}</h3><p>{item.body}</p><p style={{marginTop: 19, fontSize: 11, color: item.color === 'blue' ? '#cfe0ff' : undefined}}>관찰 신호 · {item.signal}</p></article>)}</Stagger></div></section>
    <section className="section-tight band"><div className="container split"><div><span className="eyebrow">What changes</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 20}}>통합은 같은 결론이 아니라,<br />같은 언어를 갖는 것입니다.</h2><p className="lead">각 현대백화점 점포/부서는 자사의 비용과 권한으로 판단합니다. 본사는 위험 규모·처리율·<Link href="/glossary#incremental-profit" className="inline-link">증분이익</Link> 같은 공통 지표로 결과를 비교합니다.</p></div><div className="callout"><strong>우리가 만들지 않는 것</strong><p>통합 장바구니, 소비자 결제, 승인 없는 가격 변경, 본사의 모든 전략 일괄 승인. 이 서비스는 쇼핑몰이 아니라 의사결정 지원 도구입니다.</p></div></div></section>
  </>;
}
