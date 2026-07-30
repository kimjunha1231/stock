import { Reveal } from '@/components/reveal';
import { screenshots } from '@/lib/content';
import { ScreenshotCard } from '@/components/screenshot-card';
import Image from 'next/image';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

export default function ProductTourPage() {
  return <>
    <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">06 · Product tour</span></Reveal><Reveal><h1>설명은 화면에서<br /><em>확신</em>이 됩니다.</h1></Reveal><Reveal><p>현재 운영 앱의 실제 화면을 기준으로, 담당자가 어떤 정보로 판단하고 어디서 승인하는지 따라가 봅니다.</p></Reveal></div></section>
    <section className="section"><div className="container"><div className="section-heading"><span className="eyebrow">A guided tour</span><h2>숫자 → 후보 → 시뮬레이션 → 결과</h2><p>각 화면은 별개의 기능이 아니라 한 번의 의사결정 루프를 구성합니다.</p></div><div className="screen-grid">{screenshots.map((item, index) => <Reveal key={item.src}><ScreenshotCard item={item} index={index} /></Reveal>)}</div></div></section>
    <section className="section visual-section"><div className="container"><div className="visual-panel compact-visual"><div className="visual-copy"><span className="eyebrow">The whole system</span><h2>화면은 따로가 아니라<br />한 흐름입니다.</h2><p>대시보드에서 찾은 위험재고가 전략 후보, 담당자 승인, 배송·회수, 결과 회수로 이어집니다.</p><SourceNote source={sources.find((source) => source.id === 'project-simulation')!} /></div><div className="visual-frame"><Image src="/visuals/ai-inventory-flow.png" alt="재고 관제 화면에서 AI 비교와 사람 승인, 실행 결과로 이어지는 전체 시스템 도식" width={1700} height={956} /></div></div></div></section>
    <section className="section-tight band"><div className="container"><div className="callout"><strong>캡처를 보는 방법</strong><p>화면에 보이는 숫자는 실제 운영 화면의 데모 데이터입니다. 핵심은 AI가 자동으로 확정하는 것이 아니라, 근거와 후보를 제시하고 각 계열사의 책임 담당자가 승인하는 구조입니다.</p></div></div></section>
  </>;
}
