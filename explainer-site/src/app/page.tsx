import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger } from '@/components/reveal';
import { TermHint } from '@/components/term-hint';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

const painPoints = [
  ['◌', '보관', '장기보관 재고가 공간과 현금을 계속 묶습니다.'],
  ['⌁', '처리기한', '소비기한·납기·설치일처럼 상품마다 처리 가능한 시간이 다릅니다.'],
  ['▱', '사이즈', '같은 상품도 색상·사이즈별 판매속도와 잔여수량이 다릅니다.'],
  ['⌂', '브랜드', '큰 폭의 할인은 정상판매와 브랜드 가격 기준을 함께 흔들 수 있습니다.'],
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Reveal><span className="hero-note"><i /> 3개 계열사 통합 AI 재고 의사결정 플랫폼</span></Reveal>
            <Reveal><h1 className="display">재고를 없애는 게 아니라, <em>손실을 줄이는 판단</em>을 만듭니다.</h1></Reveal>
            <Reveal><p className="lead">현대웰니스·현대리바트·현대그린푸드의 상품과 재고를 통합해, AI가 비용·위험·처리기한을 비교하고 계열사 담당자가 승인할 수 있는 다음 수를 설명합니다.</p></Reveal>
            <Reveal><div className="actions"><Link className="button primary" href="/ai-guide">AI 기능 길라잡이 <span>→</span></Link><Link className="button secondary" href="/capabilities">기능 명세 보기</Link></div></Reveal>
            <div className="hero-proof"><div className="proof-item"><strong>3개</strong><span>서로 다른 계열사 상품 맥락</span></div><div className="proof-item"><strong>6단계</strong><span>탐지에서 결과 회수까지</span></div><div className="proof-item"><strong>1개의 원칙</strong><span>사람이 최종 승인</span></div></div>
          </div>
          <div className="hero-visual" aria-label="AI 재고 의사결정 흐름 그래픽">
            <div className="decision-orbit"><div className="orbit-ring"><div className="orbit-core"><div className="core-card"><strong>AI</strong><span>근거를 비교하고<br />다음 수를 제안합니다</span></div></div><div className="orbit-node node-one"><strong>위험재고</strong><span>기한·비용·공간</span></div><div className="orbit-node node-two"><strong>전략 후보</strong><span>할인 · 폐기 · 기부</span></div><div className="orbit-node node-three"><strong>담당자 승인</strong><span>책임 있는 실행</span></div><div className="orbit-node node-four"><strong>성과 회수</strong><span>예측을 다음 판단으로</span></div><i className="orbit-dot one" /><i className="orbit-dot two" /><i className="orbit-dot three" /></div></div>
          </div>
        </div>
      </section>

      <div className="logo-strip"><div className="container logo-strip-inner"><span>Built for integrated affiliate operations</span><b>현대웰니스</b><b>현대리바트</b><b>현대그린푸드</b></div></div>

      <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">The problem</span><h2>같은 재고라도,<br />손실이 생기는 이유는 다릅니다.</h2><p>모든 계열사 상품·서비스에 하나의 할인율과 처리 규칙을 적용하면 실제 비용과 책임이 사라집니다. 이 서비스는 상품의 맥락과 계약 조건을 함께 읽는 것에서 시작합니다.</p></div><Stagger className="pain-grid">{painPoints.map(([icon, title, body]) => <article className="pain-card" key={title}><div className="pain-icon">{icon}</div><h3>{title}</h3><p>{body}</p></article>)}</Stagger></div></section>

      <section className="section band"><div className="container"><div className="section-heading"><span className="eyebrow">The decision loop</span><h2>추천보다 중요한 것은<br /><em>판단의 근거</em>입니다.</h2><p>AI는 가격과 재고를 확정하지 않습니다. <TermHint id="risk-stock" />를 찾고, <TermHint id="baseline" /> 대비 어떤 전략이 유리한지 보여주며, 계열사 담당자가 승인할 수 있게 만듭니다.</p></div><div className="flow">{[['01','발견','위험 신호를 찾습니다'],['02','비교','실행 가능한 대안을 나눕니다'],['03','시뮬레이션','비용과 하방을 계산합니다'],['04','승인','계열사 담당자가 결정합니다'],['05','실행','운영 담당자가 처리합니다'],['06','학습','결과를 다음 판단에 반영합니다']].map(([num,title,body]) => <div className="flow-step" key={num}><div className="flow-number">{num}</div><strong>{title}</strong><span>{body}</span></div>)}</div></div></section>

      <section className="section visual-section"><div className="container"><div className="visual-panel"><div className="visual-copy"><span className="eyebrow">Picture the loop</span><h2>네 컷으로 보는<br />한 번의 재고 판단</h2><p>이미지 안의 짧은 한글만 따라가도 흐름을 이해할 수 있습니다. 자세한 개념은 아래 용어 사전과 근거 위치에서 확인합니다.</p><div className="visual-caption-grid"><div><b>발견</b><span>기한·속도·소유권</span></div><div><b>비교</b><span>기준선 대비 순가치</span></div><div><b>승인·실행</b><span>사람 책임과 결과 회수</span></div></div><SourceNote source={sources.find((source) => source.id === 'project-policy')!} /></div><div className="visual-frame"><Image src="/visuals/comic-flow.png" alt="발견, 비교, 승인, 실행의 네 단계로 표현한 AI 재고 처리 도식" width={1750} height={855} priority /></div></div></div></section>

      <section className="section"><div className="container split"><div><span className="eyebrow">A clear boundary</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 22}}>AI가 더 똑똑해질수록,<br />사람의 책임선은 더 선명해야 합니다.</h2><p className="lead">하드 차단 조건은 비용보다 먼저 적용합니다. 안전·소유권·용량을 확인한 뒤에야 이익 비교를 시작합니다.</p><Link className="button secondary" href="/ai-guide" style={{marginTop: 28}}>AI 기능 길라잡이 보기 →</Link></div><div className="rule-card"><span className="eyebrow">Decision policy</span><h3>추천은 AI가,<br />승인은 사람이.</h3><p>예상 증분이익만 보여주지 않습니다. 신뢰도, 하방 결과, 처리기한 이후 잔여재고까지 함께 보여줍니다.</p><div className="rule-code">if 안전·소유권·용량·데이터 품질 위반<br />→ 후보에서 제외<br /><br />else<br />→ 기준선 대비 위험조정 결과 비교</div></div></div></section>

      <section className="section-tight band"><div className="container"><div className="section-heading"><span className="eyebrow">Start with clarity</span><h2>먼저 AI 기능을 이해하고,<br />그다음 기능 명세를 확인합니다.</h2><p>트렌드 신호·수요예측·위험재고·전략 계산을 한 흐름으로 정리했습니다.</p><div className="actions"><Link className="button primary" href="/ai-guide">AI 기능 길라잡이</Link><Link className="button secondary" href="/glossary">용어 사전 열기</Link></div></div></div></section>
    </>
  );
}
