import { Reveal } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

export const metadata = {
  title: '출처 및 학술 근거 | InventoryOS',
  description: '현대백화점 실무 데이터와 글로벌 학술 출처(Oracle Retail, INFORMS, McKinsey, Smith & Agrawal 2017)의 교차 검증 근거',
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
              모든 설명과 수식에는<br />
              <em>명확한 출처 및 근거</em>가 있습니다.
            </h1>
          </Reveal>
          <Reveal>
            <p>
              현대백화점 실무 데이터와 글로벌 학술 표준(Oracle Retail, INFORMS, McKinsey, Smith &amp; Agrawal 2017)에서 
              교차 검증된 수식과 원가 기준의 명확한 문헌 및 시스템 출처를 기록했습니다.
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
              본 웹사이트와 수식 체계(/formulas)에 수록된 공통 핵심 수식(ROS, WOS, ST%, 매몰원가 제외, 회피비용 이익화, RAG 0원 수식)은
              <strong> '현대백화점 실무 데이터와 글로벌 학술 출처(Oracle Retail, INFORMS, McKinsey, Smith &amp; Agrawal 2017)에서 교차 검증된 공통 출처 수식'</strong>
              으로 엄격하게 검증하여 반영되었습니다.
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
              프로젝트 내부 손익 정책, 현대백화점 공개 보고서 및 서비스 제도, 올바로/식약처 법·정책 기준, 
              그리고 글로벌 리테일 학술 저널 출처를 투명하게 구분하여 표기합니다.
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
