'use client';

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
              1개월 내에 처음부터 신규 개발하여 현대백화점 현장에 즉시 투입할 생산급(Production-Grade) 기술 스택입니다.
              각 기술 스택이 <strong>무엇을 수행하는지(역할)</strong>와 <strong>어떤 장점이 있는지(Benefits)</strong>를 한눈에 알기 쉽게 정립했습니다.
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
              { id: 'database', label: '🗄️ DB &amp; 캐시' },
              { id: 'ai', label: '🤖 AI &amp; 수리 최적화' },
              { id: 'observability', label: '📊 관제 &amp; 품질' },
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

          <div className="callout" style={{ marginTop: '20px', background: 'rgba(255,255,255,0.96)', color: 'var(--color-text)', borderLeft: '4px solid var(--color-brand-primary)' }}>
            <strong>1개월 신규 개발 생산 스택 (From-Scratch Blueprint)</strong>
            <p style={{ marginTop: '6px' }}>
              프론트엔드는 <b>React 19 + Vite + TypeScript</b>를 기본으로 구축합니다. Spring Boot, FastAPI, PostgreSQL, Redis 및 
              관제 도구를 연결하여 1달 만에 엔터프라이즈급 B2B 오퍼레이션 타워를 완성합니다.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL FEATURE BANNER: EXPLICIT STATE TRANSITION SERVICE EXPLAINED */}
      <section className="section-tight" style={{ paddingTop: '32px' }}>
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(15, 76, 58, 0.08), rgba(42, 157, 143, 0.12))',
              border: '2px solid var(--color-brand-primary, #0f4c3a)',
              borderRadius: '12px',
              padding: '24px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <span style={{ fontSize: '1.5rem' }}>⚡</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0, color: 'var(--color-brand-primary)' }}>
                💡 백엔드 핵심 지표: &apos;명시적 상태전이 서비스 (Explicit Transition Service)&apos;란 무엇인가요?
              </h3>
            </div>
            <p style={{ fontSize: '0.92rem', color: 'var(--color-text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
              무겁고 복잡한 외부 State Machine 프레임워크 오버헤드 대신, **Java Enum + 도메인 전이 서비스 + DB 낙관적 잠금(@Version) + 불변 감사 테이블(Audit Log)**을 결합한 초고속 검증 패턴입니다.
            </p>

            <div className="grid-3" style={{ gap: '16px' }}>
              <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-brand-primary)', display: 'block', marginBottom: '4px' }}>
                  1. 허용 전이 단계 강제 (State Guard)
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  <code>위험탐지 &rarr; 검토중 &rarr; 승인요청 &rarr; 승인완료 &rarr; 실행 &rarr; 종료</code>의 순방향으로만 전이를 허용하고, 이미 종료된 재고가 역방향으로 조작되는 오류를 선언적으로 100% 차단합니다.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-brand-primary)', display: 'block', marginBottom: '4px' }}>
                  2. 동시 승인 이중 처리 완벽 방어
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  2명의 담당자가 동일한 재고에 승인을 동시에 누르더라도 DB의 <code>@Version</code> 낙관적 잠금으로 첫 번째 승인만 반영하고 두 번째 충돌 요청은 안전하게 거부시킵니다.
                </p>
              </div>

              <div style={{ background: '#fff', padding: '16px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <strong style={{ color: 'var(--color-brand-primary)', display: 'block', marginBottom: '4px' }}>
                  3. 불변 감사 로그 (Audit Trail)
                </strong>
                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>
                  상태가 바뀔 때마다 <code>(SKU ID, 이전 상태, 변경 상태, 승인자 사번, 승인 시각, AI 추천 신뢰도)</code>를 별도 이력 테이블에 불변(Immutable) 기록하여 책임 추적성을 확보합니다.
                </p>
              </div>
            </div>
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
              운영 화면의 반응성과 계산의 재현성, 승인·감사 가능성을 우선합니다. 특정 도구가 정확도를 자동으로 보장하지 않으므로 입력·모델·검증 절차를 함께 설계합니다.
            </p>
          </div>

          <Stagger className="metric-grid" style={{ marginBottom: '40px' }}>
            <article className="metric-card">
              <span className="eyebrow">원칙 01 · 프론트엔드</span>
              <span className="metric-value">React 19 + Vite</span>
              <p>
                B2B 운영 도구에 필요한 빠른 HMR·빌드와 클라이언트 60fps 시뮬레이션을 단순하게 구성합니다.
              </p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">원칙 02 · 백엔드</span>
              <span className="metric-value">Spring Boot 3.4 API</span>
              <p>
                Java 21 가상 스레드와 Spring Boot로 REST API, 권한, 낙관적 잠금 승인, 불변 감사 로그를 완벽히 처리합니다.
              </p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">원칙 03 · 데이터베이스</span>
              <span className="metric-value">PostgreSQL 16+ JSONB</span>
              <p>
                정규화 RDBMS 이력 보장 + 시뮬레이션 사후 대처 트리(Fallback Action Plan) 유연 저장을 위한 JSONB &amp; GIN 인덱스 적용.
              </p>
            </article>
            <article className="metric-card">
              <span className="eyebrow">원칙 04 · AI 마이크로서비스</span>
              <span className="metric-value">Python FastAPI + ML</span>
              <p>
                PuLP MILP solver로 증분 기여이익 최적화를 풀고, LightGBM으로 가격 탄력성을 검증합니다.
              </p>
            </article>
          </Stagger>

          {/* 1. FRONTEND STACK TABLE */}
          {(activeTab === 'all' || activeTab === 'frontend') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                💻 1. 프론트엔드 (Frontend) 기술 스택 역할 &amp; 핵심 장점
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px', width: '20%' }}>기술 스택</th>
                      <th style={{ padding: '10px', width: '30%' }}>무엇을 하는가? (주요 역할 &amp; 기능)</th>
                      <th style={{ padding: '10px', width: '25%' }}>핵심 장점 (Key Benefits)</th>
                      <th style={{ padding: '10px', width: '25%' }}>비교 대안 &amp; 트레이드오프</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>React 19 + Vite + TypeScript</td>
                      <td style={{ padding: '10px' }}>B2B 오퍼레이션 타워 SPA 구현, 초고속 빌드 및 실시간 시뮬레이션 연산</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 초고속 HMR 모듈 교체<br />
                        • 타입 안정성으로 런타임 에러 차단<br />
                        • 60fps 슬라이더 반응 속도
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Next.js</strong><br />SEO가 불필요한 사내 B2B 도구이므로 빌드·배포 단순성이 높은 Vite 선택</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>TanStack Query v5</td>
                      <td style={{ padding: '10px' }}>재고 목록 API 캐싱, 상세 진단 비동기 로딩, AI 전략 생성 백그라운드 폴링</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 중복 API 요청 자동 제거<br />
                        • 백그라운드 자동 갱신(Refetch)<br />
                        • 네트워크 상태 선언적 관리
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Custom fetch</strong><br />캐시 무효화 및 재시도 로직 표준화로 개발 공수 50% 절감</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Zustand</td>
                      <td style={{ padding: '10px' }}>수천 개 SKU Multi-Select 장바구니, 파라미터 조율 슬라이더의 전역 화면 공유</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • Selector 기반 불필요한 리렌더링 방지<br />
                        • Boilerplate 없는 직관적 상태 정의<br />
                        • 초경량 번들 사이즈 (약 1KB)
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Context API / Redux</strong><br />전체 리렌더링 이슈 없이 대규모 필터 및 선택 상태 정밀 제어</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>TanStack Table v8</td>
                      <td style={{ padding: '10px' }}>수천 개 직매입 SKU 스티키 헤더, 컬럼 정렬, 다중 선택, 페이징 데이터 표기</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • DOM 초고속 가상화(Virtualization)<br />
                        • Headless 구조로 100% 자율 디자인<br />
                        • 수만 건 데이터 대용량 정렬 지원
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Basic Table / AG Grid</strong><br />무거운 AG Grid 대신 가볍고 렌더링 속도가 빠른 라이브러리 선택</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Recharts</td>
                      <td style={{ padding: '10px' }}>할인율 vs 증분 기여이익 vs 예상 소진율 듀얼 축 실시간 차트 시각화</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • React 컴포넌트 라이프사이클 완전 통합<br />
                        • SVG 기반 매끄러운 듀얼 축 그래프<br />
                        • 실시간 파라미터 변경 즉시 갱신
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Chart.js / D3</strong><br />React 친화적 커스텀 툴팁 및 듀얼 축 반응형 차트 손쉽게 구축</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Tailwind CSS v4 + shadcn/ui</td>
                      <td style={{ padding: '10px' }}>현대백화점 시그니처 그린(#0F4C3A) 디자인 토큰, 모달, 승인 상태 배지 UI</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 일관된 브랜드 토큰 시스템 유지<br />
                        • WCAG AA 접근성 검증 완료<br />
                        • 소스코드 직접 소유로 자유로운 커스텀
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs MUI / Styled Components</strong><br />CSS 런타임 오버헤드 없이 빌드 타임 스타일 컴파일로 속도 극대화</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. BACKEND STACK TABLE */}
          {(activeTab === 'all' || activeTab === 'backend') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                ⚙️ 2. 백엔드 (Backend) 기술 스택 역할 &amp; 핵심 장점
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px', width: '20%' }}>기술 스택</th>
                      <th style={{ padding: '10px', width: '30%' }}>무엇을 하는가? (주요 역할 &amp; 기능)</th>
                      <th style={{ padding: '10px', width: '25%' }}>핵심 장점 (Key Benefits)</th>
                      <th style={{ padding: '10px', width: '25%' }}>비교 대안 &amp; 트레이드오프</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Java 21 + Spring Boot 3.4</td>
                      <td style={{ padding: '10px' }}>엔터프라이즈 REST API 서비스, 멀티스레드 동시 동시 요청 처리 및 트랜잭션 보장</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • Virtual Threads로 I/O 처리량 극대화<br />
                        • 안정적인 대기업 엔터프라이즈 생태계<br />
                        • 강력한 멀티스레드 트랜잭션 처리
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Node.js / Python</strong><br />SAP ERP/WMS 사내 인프라 연동 시 최고의 안정성과 트랜잭션 보장</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Spring Data JPA + QueryDSL 5.x</td>
                      <td style={{ padding: '10px' }}>재고 도메인 CRUD 및 다중 조건 동적 필터링 검색 (층, 카테고리, D-Day 등)</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • Q-Class 자바 코드 기반 컴파일 타임 쿼리 검증<br />
                        • 오타 및 리팩터링 오류 사전 차단<br />
                        • 복잡한 동적 필터 조건 선언적 구현
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Native SQL / MyBatis</strong><br />문자열 SQL 오류 위험 없이 안전한 자바 코드로 복잡한 검색 쿼리 작성</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Explicit Transition Service</td>
                      <td style={{ padding: '10px' }}>위험탐지➔검토➔승인➔실행➔완료 전이 통제, @Version 낙관적 잠금 및 감사 이력 기록</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 동일 재고 이중 승인 동시성 문제 완벽 방어<br />
                        • 모든 승인 주체·시각의 불변 감사 로그 확보<br />
                        • 1달 구축에 특화된 직관적 전이 제어
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Spring State Machine</strong><br />무거운 프레임워크 오버헤드 없이 Enum + DB 낙관적 잠금으로 확실한 방어</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Spring Batch 5 + Spring @Scheduled</td>
                      <td style={{ padding: '10px' }}>매일 새벽 02시 전체 점포 직매입 재고 일일 손실액 및 위험도 자동 스냅샷 집계</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 실패 시 장애 지점부터 재시작(Restart) 보장<br />
                        • 청크(Chunk) 기반 대용량 트랜잭션 분할<br />
                        • 새벽 시간대 시스템 자원 효율적 활용
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Quartz 복합 구성</strong><br />단일 배치 책임으로 복잡성을 낮추고 대용량 스냅샷 집계 안정성 확보</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Spring Security OAuth2 / OIDC</td>
                      <td style={{ padding: '10px' }}>사내 SSO/IdP 연동, 점포 담당자 vs 본사 예외 승인자 역할 기반 접근 권한(RBAC) 통제</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 사내 계정 SSO 원클릭 인증 연동<br />
                        • 역할별 최소 권한(RBAC) 엄격 적용<br />
                        • 승인 권한 없는 사용자의 조작 차단
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs 커스텀 JWT 자체 발급</strong><br />엔터프라이즈 사내 IdP 표준을 사용하여 토큰 탈취 및 보안 리스크 차단</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. DATABASE STACK TABLE */}
          {(activeTab === 'all' || activeTab === 'database') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                🗄️ 3. 데이터베이스 &amp; 캐시 (Database &amp; Cache) 역할 &amp; 핵심 장점
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px', width: '20%' }}>기술 스택</th>
                      <th style={{ padding: '10px', width: '30%' }}>무엇을 하는가? (주요 역할 &amp; 기능)</th>
                      <th style={{ padding: '10px', width: '25%' }}>핵심 장점 (Key Benefits)</th>
                      <th style={{ padding: '10px', width: '25%' }}>비교 대안 &amp; 트레이드오프</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>PostgreSQL 16+ JSONB</td>
                      <td style={{ padding: '10px' }}>재고·판매·원가·승인 이력 정규화 저장 + 시뮬레이션 파라미터 및 사후 대처 트리 JSONB 저장</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 관계형 ACID 트랜잭션 완벽 보장<br />
                        • JSONB GIN 인덱싱으로 비정형 검색 고속화<br />
                        • 스키마 변경 없이 파라미터 확장
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs MySQL / MongoDB</strong><br />RDBMS의 트랜잭션 안정성과 NoSQL의 유연성을 단일 DB에서 통합 제공</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Redis 7.x TTL Cache</td>
                      <td style={{ padding: '10px' }}>위험 재고 집계 지표 및 LLM 전략 설명 문장 TTL 캐싱, 비동기 작업 상태 공유</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 초당 수만 건 인메모리 고속 읽기<br />
                        • TTL 자동 만료로 데이터 신선도 유지<br />
                        • 동일 시나리오 중복 LLM 비용 0원화
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs JVM Heap Memory</strong><br />다중 서버 분산 환경에서도 동일한 캐시 데이터를 공유하고 메모리 한도 관리</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. AI STACK TABLE */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                🤖 4. AI &amp; 수리 최적화 마이크로서비스 역할 &amp; 핵심 장점
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px', width: '20%' }}>기술 스택</th>
                      <th style={{ padding: '10px', width: '30%' }}>무엇을 하는가? (주요 역할 &amp; 기능)</th>
                      <th style={{ padding: '10px', width: '25%' }}>핵심 장점 (Key Benefits)</th>
                      <th style={{ padding: '10px', width: '25%' }}>비교 대안 &amp; 트레이드오프</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Python 3.11+ + FastAPI</td>
                      <td style={{ padding: '10px' }}>수리 최적화 및 ML 수요예측 연산 전용 고성능 독립 마이크로서비스 연동</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 파이썬 머신러닝 생태계 100% 활용<br />
                        • Async비동기 웹 프레임워크 초고속 응답<br />
                        • Spring Boot와 독립적 스케일링
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs Spring AI 단독</strong><br />수리 최적화(PuLP) 및 ML 전문 라이브러리를 직접 서빙하여 정밀 연산</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>PuLP / HiGHS MILP Solver</td>
                      <td style={{ padding: '10px' }}>보관비, 폐기비, 정가 잠식, 수송비, 브랜드 페널티 제약을 정수 조건으로 푼 증분이익 최적화 연산</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 수억 가지 대안 중 글로벌 최적해 탐색<br />
                        • 정수 제약 조건(채널/할인단계) 반영<br />
                        • 증분 기여현감이익(M_inc) 극대화
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs 단순 규칙(Rule-based)</strong><br />단순 룰 기반 대비 25% 이상 높은 재무적 순현금 개선액 도출</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>scikit-learn / LightGBM</td>
                      <td style={{ padding: '10px' }}>과거 3개년 판매 이력 기반 수요 가격 탄력성 및 aging 감쇄 곡선 추정 ML 모델</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 정형 데이터 예측에서 최고의 정확도<br />
                        • 초고속 모델 학습 및 추론 속도<br />
                        • 특성 중요도(Feature Importance) 제공
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs RAG / Vector DB</strong><br />정형 수치 예측은 딥러닝/Vector DB보다 정교한 회귀/시계열 ML 모델 사용</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>LLM Provider Adapter</td>
                      <td style={{ padding: '10px' }}>현업 바이어용 정밀 진단 사유, 시나리오 추천 배경, 실행 가이드 자동 작성 (OpenAI/Gemini/Ollama)</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • JSON Schema 강제로 파싱 에러 0%<br />
                        • 백화점 격식 템플릿 표준화<br />
                        • PII 마스킹으로 사내 보안 준수
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs 단일 모델 고정</strong><br />어댑터 패턴으로 AI 공급자를 설정 하나로 자유롭게 교체 및 비용 제어</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 5. OBSERVABILITY STACK TABLE */}
          {(activeTab === 'all' || activeTab === 'observability') && (
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--color-brand-primary)' }}>
                📊 5. 관제, 모니터링 &amp; 품질 검증 역할 &amp; 핵심 장점
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)', textAlign: 'left' }}>
                      <th style={{ padding: '10px', width: '20%' }}>기술 스택</th>
                      <th style={{ padding: '10px', width: '30%' }}>무엇을 하는가? (주요 역할 &amp; 기능)</th>
                      <th style={{ padding: '10px', width: '25%' }}>핵심 장점 (Key Benefits)</th>
                      <th style={{ padding: '10px', width: '25%' }}>비교 대안 &amp; 트레이드오프</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Sentry</td>
                      <td style={{ padding: '10px' }}>프론트엔드/백엔드 실시간 런타임 에러 캡처 및 슬랙 알림 감지</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 에러 발생 즉시 정확한 코드 라인 추적<br />
                        • 사용자 브라우저/동작 이력 재현 지원<br />
                        • 슬랙 실시간 결함 알림 연동
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs 단순 서버 로그 파일</strong><br />사용자 영향도를 실시간 파악하여 장애 대응 시간을 90% 감축</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Prometheus + Grafana</td>
                      <td style={{ padding: '10px' }}>서버 CPU, 메모리, DB 커넥션 풀, API RPS/Latency 실시간 대시보드 시각화</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 가상 스레드 및 DB 커넥션 풀 정밀 모니터링<br />
                        • 직관적인 실시간 관제 대시보드<br />
                        • 임계치 초과 시 경보 알림
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs CloudWatch 전적으로 의존</strong><br />오픈소스 기반으로 세밀한 백엔드 애플리케이션 메트릭까지 정밀 측정</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>OpenTelemetry + Jaeger</td>
                      <td style={{ padding: '10px' }}>React ➔ Spring Boot ➔ FastAPI ➔ PostgreSQL 구간 단일 TraceID 분산 트레이싱</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • 마이크로서비스 간 지연 병목 구간 한눈에 식별<br />
                        • 단일 TraceID로 전 구간 호출 흐름 추적<br />
                        • 성능 저하 원인 정밀 진단
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs 분리된 개별 로그 관찰</strong><br />분산 서비스 환경에서 병목 지점을 수초 만에 디버깅</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>k6 Load Testing</td>
                      <td style={{ padding: '10px' }}>승인·검색·시뮬레이션 API의 SLA 기준 P95/P99 Latency &amp; TPS 부하 성능 검증</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        • JS 기반 부하 시나리오 스크립트 작성<br />
                        • CI/CD 파이프라인 자동 성능 회귀 검증<br />
                        • 초고성능 부하 생성 능력
                      </td>
                      <td style={{ padding: '10px' }}><strong>vs JMeter / Locust</strong><br />가볍고 빠르게 CI에서 성능 회귀를 검증할 수 있는 개발 친화적 도구</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* BOTTOM NAVIGATION */}
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
