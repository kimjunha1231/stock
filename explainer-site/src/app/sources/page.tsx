import { Reveal } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

export const metadata = {
  title: '출처 및 학술 근거 | InventoryOS',
  description: '3개 계열사 공식 자료와 법·정책·학술 근거를 연결한 통합 재고 수식 출처',
};

export default function SourcesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">07 · Sources &amp; Evidence</span>
          </Reveal>
          <Reveal>
            <h1>
              모든 설명에는<br />
              <em>명확한 출처 및 근거</em>가 있습니다.
            </h1>
          </Reveal>
          <Reveal>
            <p>
              현대웰니스·현대리바트·현대그린푸드의 공식 자료, 법·정책, 재고 최적화 학술 논문을
              수식의 입력 요소와 하드 차단 근거로 연결했습니다.
            </p>
          </Reveal>

          {/* CROSS VALIDATED NOTICE */}
          <div
            style={{
              marginTop: '24px',
              background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.3), rgba(42, 157, 143, 0.3))',
              border: '1px solid rgba(42, 157, 143, 0.5)',
              padding: '16px 20px',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '0.92rem',
            }}
          >
            <strong style={{ color: '#4ea8de', fontSize: '1rem' }}>
              🔗 교차 출처 표기 (Cross-Validated Source Standard)
            </strong>
            <p style={{ margin: '6px 0 0 0', opacity: 0.95 }}>
              /formulas의 목적함수와 수요식은 공개 학술 연구를 바탕으로 한 공통 구조이고,
              계열사별 상품·서비스 입력값과 법적 차단은 각 공식 자료·공공 규정으로 따로 검증합니다.
              공개 자료로 확정할 수 없는 원가·수수료·capacity는 화면에서 “내부 계약 필요”로 구분합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="source-intro">
            <div>
              <span className="eyebrow">Categorized Evidence</span>
              <h2>출처 및 학술 문헌 목록</h2>
            </div>
            <p>
              프로젝트 내부 손익 정책, 3개 계열사 공개 자료, 식약처·법제처·공정위 법·정책,
              그리고 INFORMS 리테일 최적화 논문을 투명하게 구분하여 표기합니다.
            </p>
          </div>

          <div className="source-grid">
            {sources.map((source) => (
              <article className="source-card" id={source.id} key={source.id}>
                <SourceNote source={source} />
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                  {source.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight band">
        <div className="container">
          <div className="callout">
            <strong>용어 및 수식 페이지 연결</strong>
            <p style={{ marginTop: '4px' }}>
              용어 사전(/glossary) 및 수식 체계(/formulas) 페이지에서 기호와 공식을 누르면 이 출처 목록의 해당 근거 항목으로 바로 이동합니다.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
