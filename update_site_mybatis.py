import pathlib

content = """'use client';

import { useState } from 'react';
import { Reveal, Stagger } from '@/components/reveal';
import Link from 'next/link';

export default function TechStackPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'frontend' | 'backend' | 'database' | 'ai' | 'observability'>('all');

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">03-C · Tech Stack &amp; Architecture Spec</span>
          </Reveal>
          <Reveal>
            <h1>
              현대백화점 B2B AI 재고 수익 최적화<br />
              <em>전체 기술 스택 및 아키텍처 명세서</em>
            </h1>
          </Reveal>
          <Reveal>
            <p>
              React 19 SPA, Java 21 Spring Boot Virtual Threads, MyBatis 단독 데이터 접근 계층, PostgreSQL JSONB, Python FastAPI 수리 최적화 엔진,
              Sentry 및 Prometheus/Loki/Jaeger 분산 관제까지 플랫폼 구축에 필요한 모든 기술의 선택 이유와 트레이드오프를 상세히 제공합니다.
            </p>
          </Reveal>

          {/* TAB BUTTONS */}
          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '28px',
              flexWrap: 'wrap',
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '8px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            {[
              { id: 'all', label: '🌐 전체 종합' },
              { id: 'frontend', label: '💻 프론트엔드' },
              { id: 'backend', label: '⚙️ 백엔드' },
              { id: 'database', label: '🗄️ DB & 캐시' },
              { id: 'ai', label: '🤖 AI & 수리 최적화' },
              { id: 'observability', label: '📊 관제 & 품질' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  transition: 'all 0.2s ease',
                  background: activeTab === tab.id ? 'var(--color-brand-primary, #0f4c3a)' : 'transparent',
                  color: '#fff',
                  boxShadow: activeTab === tab.id ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 1: ARCHITECTURE HIGHLIGHTS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">ARCHITECTURE HIGHLIGHTS</span>
            <h2>시스템 핵심 아키텍처 4대 특징</h2>
            <p className="lead">
              대기업 엔터프라이즈 환경에서의 안정성, 초고속 60fps 시뮬레이션 반응성, 100% 무결한 수학적 수식 연산을 보장합니다.
            </p>
          </div>

          <Stagger className="metric-grid" style={{ marginBottom: '40px' }}>
            <article className="metric-card">
              <span className="eyebrow">원칙 01 · 프론트엔드</span>
              <span className="metric-value">React 19 + Zustand</span>
              <p>
                Next.js SSR 오버헤드 없이 Vite 기반 SPA로 오퍼레이션 타워 구축. Selector 기반 정밀 타겟 구독으로 
                슬라이더 조율 시 불필요한 전체 리렌더링을 차단하고 60fps 매끄러운 연동 보장.
              </p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">원칙 02 · 백엔드</span>
              <span className="metric-value">Virtual Threads + MyBatis 단독</span>
              <p>
                Java 21 가상 스레드로 동시 시뮬레이션 요청 처리. JPA를 배제하고 MyBatis 3.5+를 단독 채택하여 
                백화점/유통 ERP의 복잡한 SQL, CTE, 윈도우 함수를 개발자가 100% 직접 최적화 및 튜닝.
              </p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">원칙 03 · 데이터베이스</span>
              <span className="metric-value">PostgreSQL 16+ JSONB</span>
              <p>
                RDBMS 정규화 테이블 구조를 100% 유지하면서, 시뮬레이션 조율 이력 및 소진율 구간별(90-100%, 70-89%) 
                사후 대처 트리(Fallback Action Plan)를 JSONB 컬럼에 유연하게 저장 및 GIN 인덱싱.
              </p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">원칙 04 · AI 마이크로서비스</span>
              <span className="metric-value">Python FastAPI + ML</span>
              <p>
                Spring Boot와 분리된 독립 파이썬 연산 서비스. PuLP/SciPy로 최적 마진율을 100% 정확한 수학 공식으로 산출하고, 
                LightGBM으로 가격 탄력성을 학습하며, Gemini/GPT-4o-mini로 현업용 사유 작성.
              </p>
            </article>
          </Stagger>

          {/* TRADE-OFF TABLES BASED ON TAB */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                💻 1. 프론트엔드 (Frontend) 기술 스택 &amp; 트레이드오프
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px' }}>기술 스택</th>
                      <th style={{ padding: '10px' }}>필요성 &amp; 개발 기능</th>
                      <th style={{ padding: '10px' }}>비교 대안 및 선택 이유</th>
                      <th style={{ padding: '10px' }}>트레이드오프 (Trade-off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>React 19 + Vite</td>
                      <td style={{ padding: '10px' }}>B2B 오퍼레이션 타워 SPA 구축, 초고속 HMR 및 빌드</td>
                      <td style={{ padding: '10px' }}><strong>vs Next.js (SSR)</strong><br />B2B 내부 시스템으로 SEO가 필요 없으며 SSR 오버헤드 없이 빠른 빌드와 클라이언트 SPA 상태 유지가 뛰어남</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>SEO 미지원 (B2B 시스템이므로 무관)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>TanStack Query v5</td>
                      <td style={{ padding: '10px' }}>재고 API 캐싱, 상세진단 비동기 로딩, 전략생성 백그라운드 폴링</td>
                      <td style={{ padding: '10px' }}><strong>vs Custom Fetch / Redux Thunk</strong><br />서버 데이터의 자동 캐싱, 리프레시, 상태 관리를 선언적 코드로 처리</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>클라이언트 UI 상태는 별도 전역 스토어 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>URL Search Params</td>
                      <td style={{ padding: '10px' }}>층(2F~1F), 카테고리, D-Day 필터링 상태의 URL 연동</td>
                      <td style={{ padding: '10px' }}><strong>vs In-memory state</strong><br />새로고침, 뒤로가기, URL 링크 공유 시에도 필터 조건이 100% 유지됨</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>URL 길이가 다소 길어질 수 있음</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Zustand</td>
                      <td style={{ padding: '10px' }}>시뮬레이션 슬라이더 60fps 실시간 차트 연동, Multi-Select 장바구니, 전략 비교함</td>
                      <td style={{ padding: '10px' }}><strong>vs Context API / Redux</strong><br />Context API의 전체 불필요 리렌더링 문제를 Selector 기반 정밀 타겟 구독으로 완벽 해결</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>스토어 구조 분리 관리 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>TanStack Table v8</td>
                      <td style={{ padding: '10px' }}>수천 개 직매입 SKU 스티키 헤더, 컬럼 정렬, 다중 선택, 페이징</td>
                      <td style={{ padding: '10px' }}><strong>vs Basic Table / AG Grid</strong><br />가볍고 Headless하여 디자인 자유도가 높으며 초고속 가상화(Virtualization) 지원</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>shadcn/ui와 조합하여 직접 스타일링 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Recharts</td>
                      <td style={{ padding: '10px' }}>할인율 vs 증분이익 vs 예상 판매량 듀얼 축 차트, 위험도 스태킹 바</td>
                      <td style={{ padding: '10px' }}><strong>vs Chart.js / D3.js</strong><br />React 컴포넌트 친화적이며 SVG 기반으로 듀얼 축 및 실시간 데이터 업데이트가 매끄러움</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>D3 대비 대량 캔버스 연산 제약 존재</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                ⚙️ 2. 백엔드 (Backend) 기술 스택 &amp; 트레이드오프
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px' }}>기술 스택</th>
                      <th style={{ padding: '10px' }}>필요성 &amp; 개발 기능</th>
                      <th style={{ padding: '10px' }}>비교 대안 및 선택 이유</th>
                      <th style={{ padding: '10px' }}>트레이드오프 (Trade-off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Java 21 + Spring Boot 3.3</td>
                      <td style={{ padding: '10px' }}>RESTful API, 가상 스레드(Virtual Threads) 기반 동시 요청 고성능 처리</td>
                      <td style={{ padding: '10px' }}><strong>vs Node.js / Python</strong><br />대기업 엔터프라이즈 환경에서의 안정성, 멀티스레드 동시성, 풍부한 생태계</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>Node.js 대비 초기 메모리 점유율 존재</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>MyBatis 3.5+ (단독 채택, JPA 미사용)</td>
                      <td style={{ padding: '10px' }}><strong>[단독 데이터 접근 계층]</strong> 재고 CRUD, 다중 조건 동적 필터링, 대용량 손실 집계 리포트, Window Function/CTE SQL 등 전체 DB 처리 전담</td>
                      <td style={{ padding: '10px' }}><strong>vs JPA + QueryDSL / JPA 단독</strong><br />JPA와 SQL 매퍼 동시 도입에 따른 복잡도를 배제하고, 개발자가 SQL을 100% 직접 작성 및 제어·튜닝 가능. 동적 쿼리는 MyBatis &lt;if&gt;, &lt;choose&gt;, &lt;where&gt; 태그 활용</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>XML 매핑 파일 작성 및 쿼리 관리 필요 (자바 오타 컴파일 체크 미지원)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Spring State Machine</td>
                      <td style={{ padding: '10px' }}>위험탐지➔검토➔본사승인➔실행➔완료 상태 전이 규칙 엄격 제어</td>
                      <td style={{ padding: '10px' }}><strong>vs Enum + If/Else</strong><br />상태 점프나 오작동을 차단하고 상태 변경 이벤트를 체계적으로 후킹함</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>초기 트랜지션 구조 복잡도</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Spring Batch 5 + Quartz</td>
                      <td style={{ padding: '10px' }}>매일 새벽 02시 전 점포 직매입 재고 일일 손실액 및 위험도 자동 갱신</td>
                      <td style={{ padding: '10px' }}><strong>vs Spring @Scheduled</strong><br />Quartz DB 락(Clustering)을 통해 서버 이중화 시 중복 배치 실행 사고 완벽 방지</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>Quartz DB 테이블 생성 및 설정 필요</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                🗄️ 3. 데이터베이스 &amp; 캐시 (Database &amp; Cache) 기술 스택
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px' }}>기술 스택</th>
                      <th style={{ padding: '10px' }}>필요성 &amp; 개발 기능</th>
                      <th style={{ padding: '10px' }}>비교 대안 및 선택 이유</th>
                      <th style={{ padding: '10px' }}>트레이드오프 (Trade-off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>PostgreSQL 16+</td>
                      <td style={{ padding: '10px' }}>관계형 데이터 정규화 저장 + 시뮬레이션 파라미터 및 사후대처 트리 JSONB 저장</td>
                      <td style={{ padding: '10px' }}><strong>vs MySQL 8.0 / Oracle 19c</strong><br />100% 무료 오픈소스이면서 오라클급 CBO 최적화기 및 JSONB GIN 인덱싱 지원</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>MySQL 대비 관리 숙련도 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Redis 7.x</td>
                      <td style={{ padding: '10px' }}>실시간 위험재고 카운트 캐싱, 세션 관리, LLM 문장 생성 결과 Caching (0초 응답)</td>
                      <td style={{ padding: '10px' }}><strong>vs In-memory HashMap</strong><br />분산 환경에서 데이터 공유 가능 및 TTL 기반 자동 만료 지원</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>메모리 관리 및 인메모리 휘발성 대비 필요</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'ai') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                🤖 4. AI &amp; 수리 최적화 마이크로서비스 (AI Service)
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px' }}>기술 스택</th>
                      <th style={{ padding: '10px' }}>필요성 &amp; 개발 기능</th>
                      <th style={{ padding: '10px' }}>비교 대안 및 선택 이유</th>
                      <th style={{ padding: '10px' }}>트레이드오프 (Trade-off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Python 3.11+ + FastAPI</td>
                      <td style={{ padding: '10px' }}>수리 최적화 연산 및 ML 예측 전용 독립 마이크로서비스</td>
                      <td style={{ padding: '10px' }}><strong>vs Spring AI 단독</strong><br />파이썬 생태계의 머신러닝/수리 최적화 전용 라이브러리를 직접 활용 가능</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>Spring Boot와의 HTTP 통신 제어 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>PuLP / SciPy</td>
                      <td style={{ padding: '10px' }}>보관비·폐기비·쿠폰 비용 반영 증분 기여현감이익 극대화 최적 할인율 계산</td>
                      <td style={{ padding: '10px' }}><strong>vs 직접 작성 알고리즘</strong><br />검증된 수리 방정식 최적화 엔진으로 오차 없는 정확한 마진 지점 산출</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>방정식 제약조건 정의 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>scikit-learn / LightGBM</td>
                      <td style={{ padding: '10px' }}>과거 판매 이력 기반 수요 가격 탄력성 및 소진율 추정 ML 예측</td>
                      <td style={{ padding: '10px' }}><strong>vs RAG / Vector DB</strong><br />정형 숫자의 과거 데이터 학습에는 벡터 DB보다 ML 회귀 모델이 100% 정확함</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>과거 데이터 품질 관리가 중요함</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Gemini 1.5 / Ollama / GPT-4o-mini</td>
                      <td style={{ padding: '10px' }}>현업 담당자용 정밀 진단 사유, 시나리오 추천 배경, 사후 대처 실행 가이드 문장 작성</td>
                      <td style={{ padding: '10px' }}><strong>vs 로컬 LLM 파인튜닝</strong><br />API 호출만으로 고품질 문장을 0원에 가깝게 활용 가능 (Gemini 하루 1,500회 무료)</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>외부 네트워크 연동 필요 (Ollama 대체 가능)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {(activeTab === 'all' || activeTab === 'observability') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                📊 5. 관제, 모니터링, Sentry 및 품질 검증 (Observability &amp; Testing)
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px' }}>기술 스택</th>
                      <th style={{ padding: '10px' }}>필요성 &amp; 개발 기능</th>
                      <th style={{ padding: '10px' }}>비교 대안 및 선택 이유</th>
                      <th style={{ padding: '10px' }}>트레이드오프 (Trade-off)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Sentry</td>
                      <td style={{ padding: '10px' }}>프론트엔드/백엔드 실시간 런타임 에러 캡처 및 슬랙 알림</td>
                      <td style={{ padding: '10px' }}><strong>vs 로그 파일 직접 확인</strong><br />에러 발생 시 정확한 파일/라인 수, 콜스택, 사용자 동작 이력을 실시간 전달</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>무료 플랜 트래픽 한도 (월 5,000건)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Prometheus + Grafana</td>
                      <td style={{ padding: '10px' }}>서버 CPU, 메모리, DB 커넥션 풀, API RPS/Latency 실시간 시각화 관제</td>
                      <td style={{ padding: '10px' }}><strong>vs CloudWatch 의존</strong><br />무료 오픈소스로 가상 스레드 및 커넥션 풀 지표를 정밀 모니터링</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>프로메테우스 에이전트 셋업 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Loki + Promtail</td>
                      <td style={{ padding: '10px' }}>Logback JSON 로깅 수집 및 Grafana를 통한 중앙 로그 검색</td>
                      <td style={{ padding: '10px' }}><strong>vs ELK Stack</strong><br />엘라스틱서치 대비 메모리 사용량이 1/10 수준으로 매우 가볍고 직관적임</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>전체 텍스트 색인 기능은 단순함</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>OpenTelemetry + Jaeger</td>
                      <td style={{ padding: '10px' }}>React➔Spring Boot➔FastAPI➔PostgreSQL 구간 분산 트레이싱 추적</td>
                      <td style={{ padding: '10px' }}><strong>vs 로그 분리 관찰</strong><br />단일 TraceID로 서비스 간 병목 구간을 한눈에 식별 가능</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>TraceID 전파 헤더 셋업 필요</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>k6</td>
                      <td style={{ padding: '10px' }}>동시 접속자 500명 부하 상황에서의 P95 Latency 및 TPS 측정</td>
                      <td style={{ padding: '10px' }}><strong>vs JMeter / Locust</strong><br />자바스크립트 스크립트로 작성하기 쉬우며 리소스 소비가 극히 적음</td>
                      <td style={{ padding: '10px', color: 'var(--color-text-muted)' }}>CLI 중심 조작 환경</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* AI OPTIMIZATION STRATEGIES */}
          <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
              🧠 AI 예측 정확도 &amp; 퀄리티 극대화 4대 디벨롭 전략
            </h3>
            <div className="grid-2" style={{ gap: '16px' }}>
              <div style={{ background: 'var(--color-bg-subtle)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-brand-primary)', marginBottom: '6px' }}>
                  1. ML 특성 공학 &amp; 탄력성 곡선 보정
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  보관일수, 유통기한 D-Day, 과거 30/60/90일 판매 이동평균, 계절성, 할인율을 조합해 LightGBM 모델을 학습시킵니다.
                  할인율 상승 시 소진율 증가폭이 완만해지는 가격 탄력성 감쇄 곡선을 수학적으로 보정하여 현실적인 소진율을 추정합니다.
                </p>
              </div>

              <div style={{ background: 'var(--color-bg-subtle)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-brand-primary)', marginBottom: '6px' }}>
                  2. 신규/비인기 SKU 콜드스타트 방지
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  과거 판매 이력이 부족한 신규 상품은 &apos;동일 브랜드 ➔ 동일 카테고리 ➔ 동일 가격대&apos; 유사 상품의 탄력성을 가중 평균하여
                  예측값을 보완하고, 표본 부족 시 담당자에게 &apos;신뢰도 65% 경고&apos;를 함께 표시합니다.
                </p>
              </div>

              <div style={{ background: 'var(--color-bg-subtle)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-brand-primary)', marginBottom: '6px' }}>
                  3. LLM 구조화 출력 &amp; Redis 0초 캐싱
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  LLM 호출 시 지정된 JSON 포맷만 반환하도록 강제하여 파싱 에러를 차단하며, 백화점 오퍼레이션 격식 템플릿을 적용합니다.
                  동일 재고 조건의 설명 문장은 Redis에 캐싱하여 0초 응답을 보장합니다.
                </p>
              </div>

              <div style={{ background: 'var(--color-bg-subtle)', padding: '16px', borderRadius: '8px' }}>
                <h4 style={{ fontSize: '1rem', color: 'var(--color-brand-primary)', marginBottom: '6px' }}>
                  4. 피드백 재학습 루프 (Closed-Loop)
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)' }}>
                  실제 실행된 프로모션 결과(실제 판매량, 증분이익)를 DB로 회수하여 AI 예상치와의 오차(MAPE)를 기록하고,
                  매월 파이썬 ML 모델이 스스로 재학습하여 정밀도를 지속적으로 향상시킵니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM NAVIGATION */}
      <section className="section-tight">
        <div className="container">
          <div className="callout" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <strong>기술 스택 명세서를 바탕으로 시뮬레이터를 확인해보세요</strong>
              <p style={{ marginTop: '4px' }}>상세 시뮬레이션 조율 기능과 사후 대처 트리가 실제 UI에서 어떻게 연동되는지 살펴볼 수 있습니다.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Link className="button button-secondary" href="/formulas">
                수식 체계 보기 &rarr;
              </Link>
              <Link className="button button-primary" href="/product-tour">
                제품 화면 둘러보기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"""

pathlib.Path('explainer-site/src/app/tech-stack/page.tsx').write_text(content, encoding='utf-8')
print("Updated explainer-site/src/app/tech-stack/page.tsx with MyBatis Only")
