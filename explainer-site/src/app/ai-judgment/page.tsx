import { Reveal, Stagger } from '@/components/reveal';
import { TermHint } from '@/components/term-hint';
import Image from 'next/image';
import Link from 'next/link';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

const aiCards = [
  ['계산합니다', '비용·처리율·잔여재고·기한', '전략 때문에 변하는 현금 흐름과 회피비용을 계산합니다.'],
  ['비교합니다', '기준선 대비 증분 결과', '가장 잘 팔리는 안이 아니라 기준선보다 나은 안을 찾습니다.'],
  ['설명합니다', '근거·신뢰도·하방 결과', '추천을 바꾸는 핵심 변수와 데이터 기간을 함께 표시합니다.'],
];

export default function AIJudgmentPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">03 · AI judgment</span></Reveal><Reveal><h1>AI에게 맡기는 것은<br /><em>결정</em>이 아니라 비교입니다.</h1></Reveal><Reveal><p>AI는 점포·카테고리별 정책과 데이터를 바탕으로 대안을 계산하고 설명합니다. 가격·할인·재고 처리는 권한 있는 담당자가 승인해야 실행됩니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">AI's role</span><h2>AI는 세 가지 일을<br />정확히 합니다.</h2></div><Stagger className="metric-grid">{aiCards.map(([eyebrow,title,body]) => <article className="metric-card" key={title}><span className="eyebrow">{eyebrow}</span><span className="metric-value">{title}</span><p>{body}</p></article>)}</Stagger></div></section>
    <section className="section visual-section"><div className="container"><div className="visual-panel"><div className="visual-copy"><span className="eyebrow">AI cost, made visible</span><h2>AI도 공짜가 아닙니다.<br />원가를 층층이 봅니다.</h2><p>재고 처리 전략의 할인·배송비와 AI가 판단을 만드는 비용은 분리해 기록해야 합니다. 사람 검토와 실패 reserve까지 포함해야 실제 순가치를 알 수 있습니다.</p><div className="visual-caption-grid"><div><b>데이터·검색</b><span>원천·유사상품·정책</span></div><div><b>모델·LLM</b><span>예측·설명·예외 요약</span></div><div><b>사람·reserve</b><span>승인·하방 대비</span></div></div><SourceNote source={sources.find((source) => source.id === 'project-simulation')!} /></div><div className="visual-frame"><Image src="/visuals/ai-cost-stack.png" alt="데이터부터 사람 승인과 실패 reserve까지 AI 결정원가를 층으로 표현한 도식" width={1700} height={956} /></div></div></div></section>
    <section className="section-tight"><div className="container"><div className="callout" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px'}}><div><strong>AI 결정원가 및 증분이익 수식 체계</strong><p>AI 결정원가(C_AI_case)와 손익, ROI의 세부 산식 및 실무 계산 사례를 확인하세요.</p></div><Link href="/formulas" className="button button-primary" style={{fontSize: '0.9rem'}}>수식 및 계산 페이지 보기 &rarr;</Link></div></div></section>
    <section className="section band"><div className="container split"><div><span className="eyebrow">Guardrails first</span><h2 className="section-heading" style={{marginTop: 14, marginBottom: 20}}>이익보다 먼저<br />멈춰야 할 조건이 있습니다.</h2><p className="lead"><TermHint id="hard-stop" />는 비용이 아무리 좋아도 후보에서 제외합니다. 안전·소유권·물류 용량·데이터 품질은 최적화 대상이 아니라 전제조건입니다.</p></div><div className="stack"><div className="stack-card"><div className="stack-icon">01</div><div><strong>식품안전·유통기한</strong><p>법규와 품질을 위반하는 전략은 추천하지 않습니다.</p></div><b>BLOCK</b></div><div className="stack-card"><div className="stack-icon">02</div><div><strong>소유권·처리 권한</strong><p>누가 승인하고 비용을 부담하는지 확인합니다.</p></div><b>BLOCK</b></div><div className="stack-card"><div className="stack-icon">03</div><div><strong>하방 결과와 불확실성</strong><p>예상값만으로 유리하다고 가정하지 않습니다.</p></div><b>SHOW</b></div></div></div></section>
    <section className="section-tight"><div className="container"><div className="callout"><strong>사람의 통제선</strong><p>현대백화점 재고 담당자는 일반 전략을 승인하고 결과에 책임집니다. 본사는 공동 프로모션·추가 예산·그룹 위험·합의 실패 같은 예외만 검토합니다.</p></div></div></section>
  </>;
}
