import Link from 'next/link';
import Image from 'next/image';
import { Reveal, Stagger } from '@/components/reveal';
import { TermHint } from '@/components/term-hint';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

const steps = [
  ['01', '위험 신호 발견', '보관일수, D-day, 반품률, 공간 점유와 같은 신호를 점포·카테고리별 규칙으로 읽습니다.'],
  ['02', '처리 후보 비교', '할인·타임세일·아울렛·기부·폐기 등 실제로 가능한 대안만 남깁니다.'],
  ['03', '결과 시뮬레이션', '처리율, 비용, 잔여재고와 하방 시나리오를 함께 계산합니다.'],
  ['04', '담당자 승인', 'AI가 설명한 근거를 현대백화점 재고 담당자가 확인하고 일반 전략을 승인합니다.'],
  ['05', '실행과 기록', '운영팀이 처리하고 판매·반품·폐기·정산 결과를 회수합니다.'],
  ['06', '다음 판단에 반영', '예측 오차와 승인된 우수 사례를 다음 전략의 근거로 축적합니다.'],
];

export default function WorkflowPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">02 · The workflow</span></Reveal><Reveal><h1>좋은 판단은<br /><em>다음 행동</em>까지 연결됩니다.</h1></Reveal><Reveal><p>탐지부터 실행 결과 회수까지 한 번의 루프로 이어집니다. 화면마다 담당자가 무엇을 확인하고 어떤 책임을 지는지 분명하게 보여줍니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">From signal to action</span><h2>6개의 장면으로 보는<br />한 번의 의사결정</h2><p>AI가 모든 일을 대신하는 자동화가 아니라, 사람의 판단이 더 빨라지고 설명 가능해지는 흐름입니다.</p></div><Stagger className="stack">{steps.map(([num,title,body], index) => <div className="stack-card" key={num}><div className="stack-icon">{num}</div><div><strong>{title}</strong><p>{body}</p></div><b>{index === 3 ? 'HUMAN' : index === 4 ? 'EXECUTE' : 'AI + DATA'}</b></div>)}</Stagger></div></section>
    <section className="section visual-section"><div className="container"><div className="visual-panel visual-panel-reverse"><div className="visual-frame"><Image src="/visuals/inventory-triage.png" alt="신선식품, 시즌 패션, 리빙 상품을 위험도별로 나누고 판매·배송·회수로 연결하는 도식" width={1700} height={956} /></div><div className="visual-copy"><span className="eyebrow">Read the branches</span><h2>모든 상품에<br />같은 다음 수를 주지 않습니다.</h2><p>신선식품은 안전·기한·배송을 먼저 보고, 시즌 패션은 브랜드·노출을 보고, 리빙은 공간·회수 capacity를 봅니다.</p><div className="visual-caption-grid"><div><b>신선</b><span>안전 → 당일·근거리</span></div><div><b>시즌</b><span>노출 → 제한 혜택</span></div><div><b>리빙</b><span>공간 → 회수·기부</span></div></div><SourceNote source={sources.find((source) => source.id === 'hds-service')!} /></div></div></div></section>
    <section className="section band"><div className="container split"><div><span className="eyebrow">The comparison</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 20}}>매출이 아니라,<br />기준선보다 나아졌는가.</h2><p className="lead"><TermHint id="baseline" />을 기준으로 전략을 비교하고, <TermHint id="contribution-cash" />과 회피되는 비용을 함께 보여줍니다.</p><Link className="button primary" href="/ai-judgment" style={{marginTop: 28}}>판단 기준 자세히 보기 →</Link></div><div className="rule-card"><span className="eyebrow">One decision, three views</span><h3>기대값만 보지<br />않습니다.</h3><p>보수적·기본·낙관 시나리오와 결과를 바꾸는 핵심 변수를 함께 표시합니다.</p><div className="rule-code">기본 시나리오&nbsp;&nbsp; +₩29.1M<br />보수적 시나리오&nbsp; +₩11.4M<br />하방 리스크&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 폐기 18% 가능</div></div></div></section>
  </>;
}
