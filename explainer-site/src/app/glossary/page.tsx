import { GlossaryBrowser } from '@/components/glossary-browser';
import Link from 'next/link';

export default function GlossaryPage() {
  return <section className="section"><div className="container glossary-layout"><div className="glossary-intro"><span className="eyebrow">Reference</span><h1>용어<br />사전</h1><p>본문에서 파란색으로 표시된 용어를 누르면 이 사전의 해당 항목으로 바로 이동합니다.</p><div className="callout" style={{marginTop: 24}}><strong>읽는 순서</strong><p>기본 개념 → 재무 기준 → AI·운영 순으로 보면 의사결정 흐름이 자연스럽게 연결됩니다.</p></div><div className="callout" style={{marginTop: 16, borderLeftColor: 'var(--color-brand-primary)'}}><strong>수식 &amp; 계산 체계</strong><p>AI 결정원가 및 증분이익 수식이 궁금하시면 <Link href="/formulas" style={{textDecoration: 'underline', fontWeight: 600}}>수식 및 계산 페이지</Link>를 참고하세요.</p></div></div><GlossaryBrowser /></div></section>;
}
