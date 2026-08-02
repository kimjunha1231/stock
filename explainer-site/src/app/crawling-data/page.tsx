import { Reveal } from '@/components/reveal';
import { CrawlingExplorer } from './crawling-explorer';

export const metadata = {
  title: '크롤링 데이터 & ERD 설계 | InventoryOS',
  description: '현대백화점그룹 3개 계열사(현대그린푸드·현대웰니스·현대리바트) 2,690건 실제 크롤링 원본 데이터 분석 및 통합 DB/ERD 설계 추천',
};

export default function CrawlingDataPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">08 · 크롤링 데이터 &amp; 데이터베이스 설계</span>
          </Reveal>
          <Reveal>
            <h1>
              3개 계열사 크롤링 데이터 분석 및<br />
              <em>통합 데이터베이스(ERD) 설계 추천</em>
            </h1>
          </Reveal>
          <Reveal>
            <p>
              현대그린푸드(735건), 현대웰니스(145건), 현대리바트(1,810건)의 총 2,690건 실제 크롤링 수집 데이터를 분석하고,
              InventoryOS 재고 의사결정 시스템 구축에 필요한 <strong>단일 스키마 다중 테넌트(Single Schema Multi-Tenant) ERD</strong>를 친숙한 한글 명세로 정리했습니다.
            </p>
          </Reveal>

          {/* Key Metric Highlights */}
          <div className="proof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '32px' }}>
            <div className="proof-item" style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '14px', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 700 }}>총 수집 상품 수</span>
              <strong style={{ fontSize: '28px', color: 'var(--blue)', display: 'block', margin: '4px 0 2px' }}>2,690개</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>그린푸드 735 · 웰니스 145 · 리바트 1,810</span>
            </div>
            <div className="proof-item" style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '14px', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 700 }}>수집 항목 (컬럼)</span>
              <strong style={{ fontSize: '28px', color: '#059669', display: 'block', margin: '4px 0 2px' }}>총 58개 필드</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>그린푸드 20 · 웰니스 22 · 리바트 16</span>
            </div>
            <div className="proof-item" style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '14px', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 700 }}>추천 DB 테이블</span>
              <strong style={{ fontSize: '28px', color: '#7c3aed', display: 'block', margin: '4px 0 2px' }}>9 + 3개 테이블</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>6개 핵심 공통 + 3개 계열사 확장</span>
            </div>
            <div className="proof-item" style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '14px', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 700 }}>의사결정 정책 연계</span>
              <strong style={{ fontSize: '28px', color: '#d97706', display: 'block', margin: '4px 0 2px' }}>100% 한글 매핑</strong>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>decision-policy.md &amp; AI Blueprint</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="container">
          <CrawlingExplorer />
        </div>
      </section>
    </>
  );
}
