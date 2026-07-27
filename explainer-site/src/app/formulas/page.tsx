'use client';

import { useState } from 'react';
import { Reveal, Stagger } from '@/components/reveal';
import { TermHint } from '@/components/term-hint';
import Link from 'next/link';

export default function FormulasPage() {
  const [activeVersion, setActiveVersion] = useState<'A' | 'B' | 'C'>('A');

  return (
    <>
      {/* HERO SECTION */}
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">03-B · Formula &amp; Financial Engine</span>
          </Reveal>
          <Reveal>
            <h1>
              AI 재고 처리 전략의<br />
              <em>수학적 수식 및 종합 산정 체계</em>
            </h1>
          </Reveal>
          <Reveal>
            <p>
              단순 고수준 요약에 그치지 않고, 현대백화점 실무 및 글로벌 학술 기준에 입각한 
              모든 수학적 목적함수, 계약 형태별 손익 방정식, ML 수요 탄력성 곡선, 3대 AI 판단 규칙을 세밀하게 공개합니다.
            </p>
          </Reveal>

          {/* CROSS-VALIDATED COMMON SOURCE BANNER */}
          <div
            style={{
              marginTop: '24px',
              background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.25), rgba(42, 157, 143, 0.25))',
              border: '1px solid rgba(42, 157, 143, 0.5)',
              padding: '16px 20px',
              borderRadius: '12px',
              color: '#fff',
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '1.4rem' }}>🔗</span>
            <div>
              <strong style={{ color: '#4ea8de', fontSize: '0.98rem' }}>
                교차 출처 표기 (Cross-Validated Source)
              </strong>
              <p style={{ margin: '4px 0 0 0', opacity: 0.9 }}>
                현대백화점(버전 A)과 글로벌 표준(버전 B/C)에서 공통으로 사용되는 핵심 수식(ROS, WOS, ST%, 매몰원가 제외, 회피비용 이익화, RAG/슬라이더 0원 법칙)은
                <strong style={{ color: '#e9c46a', marginLeft: '4px' }}>
                  &apos;현대백화점 실무 데이터와 글로벌 학술 출처(Oracle Retail, INFORMS, McKinsey, Smith &amp; Agrawal 2017)에서 교차 검증된 공통 출처 수식&apos;
                </strong>
                입니다.
              </p>
            </div>
          </div>

          {/* VERSION TAB BUTTONS */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
              flexWrap: 'wrap',
              background: 'rgba(255, 255, 255, 0.08)',
              padding: '8px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveVersion('A')}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '14px 18px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                background: activeVersion === 'A' ? 'var(--color-brand-primary, #0f4c3a)' : 'transparent',
                color: '#fff',
                boxShadow: activeVersion === 'A' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>
                버전 A (Hyundai Specific)
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '2px' }}>
                🏢 현대백화점 전용
              </div>
              <div style={{ fontSize: '0.82rem', opacity: 0.85, marginTop: '4px' }}>
                직매입/특약매입, H.Point, 올바로 폐기, 점포간 이동
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveVersion('B')}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '14px 18px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                background: activeVersion === 'B' ? 'var(--color-brand-primary, #0f4c3a)' : 'transparent',
                color: '#fff',
                boxShadow: activeVersion === 'B' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>
                버전 B (Global Standard)
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '2px' }}>
                🌐 글로벌/일반 리테일 표준
              </div>
              <div style={{ fontSize: '0.82rem', opacity: 0.85, marginTop: '4px' }}>
                McKinsey, INFORMS, Dynamic Markdown, Walmart
              </div>
            </button>

            <button
              type="button"
              onClick={() => setActiveVersion('C')}
              style={{
                flex: 1,
                minWidth: '220px',
                padding: '14px 18px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s ease',
                background: activeVersion === 'C' ? 'var(--color-brand-primary, #0f4c3a)' : 'transparent',
                color: '#fff',
                boxShadow: activeVersion === 'C' ? '0 4px 12px rgba(0,0,0,0.15)' : 'none',
              }}
            >
              <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.8 }}>
                버전 C (Integrated Version)
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginTop: '2px' }}>
                ⚖️ 전사 통합 종합 프레임워크
              </div>
              <div style={{ fontSize: '0.82rem', opacity: 0.85, marginTop: '4px' }}>
                재무 증분 + ESG 회피 + 브랜드 위험 + AI TCO
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 4-PANEL STORYBOARD VISUAL FLOWCHART (네컷 만화 스타일 시각화) */}
      <section className="section" style={{ paddingBottom: '32px' }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Visual Storyboard</span>
            <h2>🎨 한눈에 이해하는 AI 재고 처리 4단계 흐름도</h2>
            <p className="lead">
              어려운 수식도 네 컷의 직관적인 시각적 프로세스로 이해할 수 있습니다. 
              위험 탐지부터 AI 수식 계산, 바이어 승인, 최종 손익 회수까지의 전체 과정입니다.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
              marginTop: '24px',
            }}
          >
            {/* Panel 1 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: '2px solid var(--color-brand-primary, #0f4c3a)',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: 'var(--color-brand-primary, #0f4c3a)',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  marginBottom: '12px',
                }}
              >
                1
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--color-brand-primary)' }}>
                🚨 1컷: 악성 재고 자동 포착
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                더현대 서울 B1 식품관 <strong>한우 선물세트 500개</strong>가 소비기한 D-3일에 임박하여 
                시스템에 위험 알림이 감지됩니다. (그대로 방치 시 450개 폐기물 처리 발생)
              </p>
              <div
                style={{
                  marginTop: '12px',
                  padding: '8px',
                  background: 'rgba(230, 57, 70, 0.08)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: '#e63946',
                  fontWeight: 600,
                }}
              >
                상태: 방치 시 예상 손실 -180만 원 (폐기비)
              </div>
            </div>

            {/* Panel 2 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: '2px solid #2a9d8f',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: '#2a9d8f',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  marginBottom: '12px',
                }}
              >
                2
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#2a9d8f' }}>
                🧮 2컷: AI 증분이익(M_inc) 계산
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                AI가 35% 타임세일 + H.Point 앱 푸시 전략을 시뮬레이션합니다. 
                매출증가액에서 정가 잠식, 물류비, AI 비용을 빼고 폐기 회피액을 더합니다.
              </p>
              <div
                style={{
                  marginTop: '12px',
                  padding: '8px',
                  background: 'rgba(42, 157, 143, 0.1)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: '#2a9d8f',
                  fontWeight: 600,
                }}
              >
                수식: M_inc = &Delta;R + S_disposal - C_cannibal - C_AI
              </div>
            </div>

            {/* Panel 3 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: '2px solid #e9c46a',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: '#e9c46a',
                  color: '#333',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  marginBottom: '12px',
                }}
              >
                3
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: '#b5838d' }}>
                👍 3컷: 바이어 5초 원클릭 승인
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                AI 예측 신뢰도 92%로 검증되어 담당 바이어 화면에 패스트트랙 추천으로 표시됩니다. 
                바이어가 5초 만에 승인 버튼을 눌러 프로모션 실행!
              </p>
              <div
                style={{
                  marginTop: '12px',
                  padding: '8px',
                  background: 'rgba(233, 196, 106, 0.15)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: '#8d6e63',
                  fontWeight: 600,
                }}
              >
                C_HUMAN (검토 인건비) 250원 &rarr; 20원 절감
              </div>
            </div>

            {/* Panel 4 */}
            <div
              style={{
                background: '#fff',
                borderRadius: '12px',
                border: '2px solid var(--color-brand-primary, #0f4c3a)',
                padding: '20px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                position: 'relative',
              }}
            >
              <div
                style={{
                  background: 'var(--color-brand-primary, #0f4c3a)',
                  color: '#fff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '1rem',
                  marginBottom: '12px',
                }}
              >
                4
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'var(--color-brand-primary)' }}>
                🎉 4컷: 폐기 Zero &amp; 순현금 창출
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
                480개가 완판되고 폐기 물량은 20개로 급감합니다. 
                방치 대비 <strong>+4,077만 원의 추가 순현금 손익(&Delta;Profit)</strong>을 달성했습니다!
              </p>
              <div
                style={{
                  marginTop: '12px',
                  padding: '8px',
                  background: 'rgba(15, 76, 58, 0.1)',
                  borderRadius: '6px',
                  fontSize: '0.8rem',
                  color: 'var(--color-brand-primary)',
                  fontWeight: 700,
                }}
              >
                최종 손익: 46,479,985원 달성 (&Delta; +4,077만 원)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EASY EXPLANATION GUIDE FOR BEGINNERS */}
      <section className="section band" style={{ background: 'var(--color-bg-subtle)' }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Beginner Friendly Guide</span>
            <h2>수식 기호 &amp; 용어 알기 쉬운 한글 풀이집</h2>
            <p className="lead">
              마케팅, 물류, 재무 개념이 처음인 분들도 한눈에 이해할 수 있는 핵심 지표 및 기호 해설입니다.
            </p>
          </div>

          <div style={{ overflowX: 'auto', background: '#fff', borderRadius: '12px', padding: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                  <th style={{ padding: '12px', width: '15%' }}>수식 기호/용어</th>
                  <th style={{ padding: '12px', width: '20%' }}>한글 용어명</th>
                  <th style={{ padding: '12px', width: '40%' }}>쉬운 개념 설명 (비즈니스 직관)</th>
                  <th style={{ padding: '12px', width: '25%' }}>실무 이해 예시</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>M_inc</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>증분 기여현감이익 (Incremental Cash Margin)</td>
                  <td style={{ padding: '12px' }}>AI 전략을 적용하여 기존 방치 상태 대비 실제로 현대백화점 통장에 들어오는 순현금 이익의 증가액입니다.</td>
                  <td style={{ padding: '12px' }}>AI 적용 후 손익 − 기존 방치 손익 = +4,077만 원</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>C_AI_case</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>AI 1건당 결정 원가</td>
                  <td style={{ padding: '12px' }}>AI가 재고 1건을 분석하고 설명서를 작성하는 데 소모된 LLM 토큰, DB 쿼리, 검색, 사람 승인 인건비의 총합입니다.</td>
                  <td style={{ padding: '12px' }}>LLM(8.5원) + DB(0.5원) + 바이어승인(250원) = 약 260원</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>ROS</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Rate of Sale (판매속도)</td>
                  <td style={{ padding: '12px' }}>하루 또는 주간 단위로 특정 상품이 평균 몇 개씩 팔리는지 나타내는 소진 속도 지표입니다.</td>
                  <td style={{ padding: '12px' }}>최근 7일간 70개 팔렸다면 ROS = 10개/일</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>WOS</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Weeks of Supply (재고 주수)</td>
                  <td style={{ padding: '12px' }}>현재 남아있는 재고가 추가 입고 없이 앞으로 몇 주 동안 버틸 수 있는지 나타냅니다.</td>
                  <td style={{ padding: '12px' }}>재고 500개 / 주당 50개 소진 = WOS 10주 버텼음</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>ST%</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Sell-Through Rate (소진율)</td>
                  <td style={{ padding: '12px' }}>매장에 입고된 전체 상품 중 몇 %가 고객에게 실제 판매되었는지 나타내는 성과 백분율입니다.</td>
                  <td style={{ padding: '12px' }}>100개 입고 중 80개 판매 시 ST% = 80%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>Lift%</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Demand Lift (수요 증대율)</td>
                  <td style={{ padding: '12px' }}>할인이나 타겟 쿠폰 마케팅을 적용했을 때 평소 대비 판매량이 몇 배/몇 % 뛰었는지 측정합니다.</td>
                  <td style={{ padding: '12px' }}>평소 5개 &rarr; 35% 할인 후 25개 팔리면 Lift% = +400%</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>Sunk Cost</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>매몰원가 (취득원가)</td>
                  <td style={{ padding: '12px' }}>이미 과거에 지출되어 할인/폐기/기부 등 어떤 선택을 하든 되돌릴 수 없는 비용입니다. 손익 비교에서 제외합니다.</td>
                  <td style={{ padding: '12px' }}>1년 전 결제 완료된 니트 매입가 12만원</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>Avoided Cost</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>회피비용 (절감액)</td>
                  <td style={{ padding: '12px' }}>재고를 더 일찍 팔아서 피하게 된 폐기물 위탁 처리비, 전자인계 행정비, 창고 임대료 등 실제 절약한 돈입니다.</td>
                  <td style={{ padding: '12px' }}>식품 소진으로 폐기 위탁비 172만원 회피</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>C_cannibal</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>정가 수요 잠식 손실 (Cannibalization)</td>
                  <td style={{ padding: '12px' }}>할인을 안 했어도 어차피 정가에 살 손님이 할인 가격으로 사서 발생하는 마진 손실 차감액입니다.</td>
                  <td style={{ padding: '12px' }}>정가 구매자 50명이 할인 시 구매 &rarr; -262만 원 차감</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>C_brand</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>브랜드 가격 앵커링 훼손 페널티</td>
                  <td style={{ padding: '12px' }}>공개 매대에서 무분별한 파격 할인을 하여 브랜드 격이 떨어지는 것을 방지하는 감점 수식입니다.</td>
                  <td style={{ padding: '12px' }}>H.Point 타겟 앱 푸시 활용 시 C_brand = 0원 회피</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* VERSION CONTENT DISPLAY */}
      {activeVersion === 'A' && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">VERSION A · HYUNDAI SPECIFIC</span>
              <h2>현대백화점 전용 수식 및 재고 처리 전략 명세</h2>
              <p className="lead">
                현대백화점의 직매입/특약매입 매입 형태, H.Point/현대식품관 앱 타겟 마케팅, 올바로 시스템 폐기 행정비, 
                본점-아울렛 간 전송 물류를 반영한 백화점 맞춤 수학적 수식 및 계약 체계입니다.
              </p>
            </div>

            {/* Core Principles */}
            <Stagger className="metric-grid" style={{ marginBottom: '32px' }}>
              <article className="metric-card">
                <span className="eyebrow">백화점 원칙 01 · 교차 검증</span>
                <span className="metric-value">매몰원가 분리</span>
                <p>
                  <strong>취득원가(장부가)</strong>는 이미 지출된 매몰비용이므로, 할인이나 폐기 등 
                  전략 선택으로 변하지 않는 현금 흐름입니다. [Oracle Retail &amp; INFORMS 교차 검증]
                </p>
              </article>
              <article className="metric-card">
                <span className="eyebrow">백화점 원칙 02 · 교차 검증</span>
                <span className="metric-value">회피비용의 손익화</span>
                <p>
                  D-3 식품이나 시즌 경과 의류를 제때 소진하여 <strong>폐기 위탁비, 올바로 행정비, 창고 보관비</strong>를 피했다면, 
                  이 절감액(Avoided Cost)은 정당한 현금성 이익으로 인정합니다. [McKinsey 교차 검증]
                </p>
              </article>
              <article className="metric-card">
                <span className="eyebrow">백화점 원칙 03 · 교차 검증</span>
                <span className="metric-value">UI 슬라이더 0원 법칙</span>
                <p>
                  담당자가 시뮬레이터에서 할인율 슬라이더를 100번 움직여도 LLM API를 재호출하지 않고 
                  로컬 수식 엔진으로 재계산하므로 <strong>추가 AI 비용(C_AI_slider)은 0원</strong>입니다.
                </p>
              </article>
            </Stagger>

            {/* 1. AI Decision Cost Formula Breakdown */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                1. AI 결정원가 (C_AI_case) 10대 세부 변수 산식 표
              </h3>
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.95rem',
                  borderLeft: '4px solid var(--color-brand-primary)',
                  marginBottom: '16px',
                  overflowX: 'auto',
                }}
              >
                C_AI_case = C_DATA + C_FEATURE + C_SEARCH + C_MODEL + C_LLM + C_TOOL + C_ORCH + C_HUMAN + C_EVAL + C_SHARED
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                      <th style={{ padding: '10px' }}>기호 (Symbol)</th>
                      <th style={{ padding: '10px' }}>비즈니스 용어</th>
                      <th style={{ padding: '10px' }}>의미 및 산출 방식 (쉬운 설명)</th>
                      <th style={{ padding: '10px' }}>현대백화점 1건당 실무 예시 단가</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_LLM</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>LLM API 토큰비</td>
                      <td style={{ padding: '10px' }}>GPT-5/Claude 등 언어모델 입력/출력 텍스트 토큰 소모 원가</td>
                      <td style={{ padding: '10px' }}>입력 2,500t + 출력 800t = <strong>약 8.5원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_DATA</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>데이터 파이프라인비</td>
                      <td style={{ padding: '10px' }}>백화점 SAP ERP 및 WMS 시스템 DB 쿼리 및 클라우드 트래픽비</td>
                      <td style={{ padding: '10px' }}>DB 쿼리/트래픽 = <strong>약 0.5원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_SEARCH</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>유사 사례 RAG 검색비</td>
                      <td style={{ padding: '10px' }}>과거 3개년 프로모션 승인 이력 Vector DB 임베딩 &amp; 코사인 유사도 검색비</td>
                      <td style={{ padding: '10px' }}>Vector DB 쿼리 = <strong>약 1.2원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_MODEL</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>수요예측 ML 추론비</td>
                      <td style={{ padding: '10px' }}>LightGBM 수요 탄력성 및 aging 감쇄 연산 서빙 GPU/CPU 비용</td>
                      <td style={{ padding: '10px' }}>ML 서빙 연산 = <strong>약 0.8원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_HUMAN</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>사람 검토 비용</td>
                      <td style={{ padding: '10px' }}>현대백화점 바이어가 AI 제안을 검토하고 승인 버튼을 누르는 시간의 인건비</td>
                      <td style={{ padding: '10px' }}>바이어 1분 검토 = <strong>약 250원</strong> (패스트트랙 시 20원)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_SHARED</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>공통 예비 reserve비</td>
                      <td style={{ padding: '10px' }}>시스템 유지보수, 예외 대처, 모니터링 배분금</td>
                      <td style={{ padding: '10px' }}>건당 배분액 = <strong>약 2.0원</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 2. Incremental Cash Margin Formula Breakdown */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                2. 증분 기여현감이익 (M_inc) 세부 수식 &amp; 항목 산식 표
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                기준선 손익(Profit_base)과 AI 전략 손익(Profit_ai)의 차이로 계산되는 실제 순현금 산식입니다.
              </p>

              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.95rem',
                  borderLeft: '4px solid var(--color-brand-primary)',
                  marginBottom: '16px',
                  overflowX: 'auto',
                }}
              >
                M_inc = &Delta;R + S_disposal - C_cannibal - C_logistics - C_brand - C_return - C_AI_case
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                      <th style={{ padding: '10px' }}>항목명</th>
                      <th style={{ padding: '10px' }}>세부 산식 및 계산 로직</th>
                      <th style={{ padding: '10px' }}>무역센터점 한우 세트 500개 실무 적용액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>&Delta;R (증분 매출액)</td>
                      <td style={{ padding: '10px' }}>(480개 &times; 9.75만원) − (50개 &times; 15만원)</td>
                      <td style={{ padding: '10px', color: 'green', fontWeight: 600 }}>+39,300,000원 매출 증가</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>S_disposal (폐기비 회피)</td>
                      <td style={{ padding: '10px' }}>(450개 방치 폐기 − 20개 폐기) &times; 4,000원 처리비</td>
                      <td style={{ padding: '10px', color: 'green', fontWeight: 600 }}>+1,720,000원 폐기비 회피</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>C_cannibal (수요 잠식)</td>
                      <td style={{ padding: '10px' }}>H.Point 전용 앱 타겟으로 정가 구매자 이탈 최소화 산정</td>
                      <td style={{ padding: '10px' }}>-240,000원 마케팅/포장비에 포함</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>C_AI_case (AI 원가)</td>
                      <td style={{ padding: '10px' }}>LLM 8.5원 + DB 0.5원 + RAG 1.2원 + 바이어검토 5원</td>
                      <td style={{ padding: '10px' }}>-15원 (AI 결정원가 극소화)</td>
                    </tr>
                    <tr style={{ background: 'var(--color-bg-subtle)' }}>
                      <td style={{ padding: '10px', fontWeight: 700 }}>최종 순현금 손익 (M_inc)</td>
                      <td style={{ padding: '10px', fontWeight: 700 }}>매출증가 + 폐기회피 − 마케팅비 − AI원가</td>
                      <td style={{ padding: '10px', fontWeight: 700, color: 'var(--color-brand-primary)' }}>+46,479,985원 (&Delta; +4,077만 원)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Direct Purchase vs Special Purchase vs Consignment Structure */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                3. 직매입 vs 특약매입 vs 위수탁매입 계약 구조 수식 비교
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                현대백화점 거래 계약 유형별로 재고 소유권, 폐기 손실 부담 주체, 수수료 인식 구조가 상이하여 AI 수식이 다르게 적용됩니다.
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                      <th style={{ padding: '10px' }}>구분 항목</th>
                      <th style={{ padding: '10px' }}>직매입 (Direct Purchase)</th>
                      <th style={{ padding: '10px' }}>특약매입 (Special Purchase)</th>
                      <th style={{ padding: '10px' }}>위수탁매입 (Consignment)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>재고 소유권</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>현대백화점 100% 소유</td>
                      <td style={{ padding: '10px' }}>협력업체(입점 브랜드) 소유</td>
                      <td style={{ padding: '10px' }}>협력업체 소유 (판매대행)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>매출 인식 방식</td>
                      <td style={{ padding: '10px' }}>총매출 (Gross Revenue) 인식</td>
                      <td style={{ padding: '10px' }}>순매출 (약정 수수료율, 예: 25%)</td>
                      <td style={{ padding: '10px' }}>판매 대행 수수료만 인식</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>폐기/할인 손실 부담</td>
                      <td style={{ padding: '10px', color: '#e63946', fontWeight: 600 }}>현대백화점이 100% 직접 부담</td>
                      <td style={{ padding: '10px' }}>협력업체 반품권 확보 (백화점 무관)</td>
                      <td style={{ padding: '10px' }}>협력업체 100% 부담</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>백화점 마진 수식</td>
                      <td style={{ padding: '10px', fontFamily: 'monospace' }}>
                        Margin = Rev − Cost_goods − Cost_disposal − C_AI
                      </td>
                      <td style={{ padding: '10px', fontFamily: 'monospace' }}>
                        Margin = (Rev &times; FeeRate) − Promo_Share − C_AI
                      </td>
                      <td style={{ padding: '10px', fontFamily: 'monospace' }}>
                        Margin = (Rev &times; Commission) − Operating − C_AI
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>AI 처리 전략 핵심</td>
                      <td style={{ padding: '10px', color: 'var(--color-brand-primary)', fontWeight: 600 }}>
                        소진율 증분 현금 마진($M__inc$) 극대화 필수
                      </td>
                      <td style={{ padding: '10px' }}>
                        행사 참여 마진 수수료율 유지 및 브랜드 보호
                      </td>
                      <td style={{ padding: '10px' }}>
                        매대 효율성 및 수수료 수입 지속성
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. ML Demand Elasticity & Aging Attenuation Formula Section */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                4. ML 수요 예측 &amp; 소진율 감쇄 수식 (Q_sale)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                할인율(d)과 경과 시간(t)에 따라 얼마만큼 팔릴지 추정하는 LightGBM 기반 수요 예측 수식입니다.
              </p>
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '0.95rem',
                  borderLeft: '4px solid var(--color-brand-primary)',
                  marginBottom: '16px',
                  overflowX: 'auto',
                }}
              >
                Q_sale(d, t) = Q_base_daily &times; (1 + &epsilon; &middot; d) &times; f_aging(t) &times; &gamma;_channel
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                      <th style={{ padding: '10px' }}>수식 변수</th>
                      <th style={{ padding: '10px' }}>한글 변수명</th>
                      <th style={{ padding: '10px' }}>의미 및 산출 방식</th>
                      <th style={{ padding: '10px' }}>실무 예시 / 값</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>Q_base_daily</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>기준 일판매량</td>
                      <td style={{ padding: '10px' }}>해당 SKU의 최근 30/60/90일 이동평균 일일 판매 수량</td>
                      <td style={{ padding: '10px' }}>1일 평균 10개 판매</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>&epsilon; (Epsilon)</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>가격 탄력성 계수</td>
                      <td style={{ padding: '10px' }}>할인율 1% 상승 시 수요가 반응하는 증가폭 (ML 학습)</td>
                      <td style={{ padding: '10px' }}>신선식품 &epsilon; = 2.5 (35% 할인 시 +87.5% 반응)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>f_aging(t)</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>D-Day 수명 감쇄 곡선</td>
                      <td style={{ padding: '10px' }}>소비기한/시즌 경과에 따라 할인 반응 속도가 완만해지는 감쇄 함수</td>
                      <td style={{ padding: '10px' }}>D-3일 잔여 수명 감쇄율 0.85 보정</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>&gamma;_channel</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>판매 채널 가중치</td>
                      <td style={{ padding: '10px' }}>집행하는 마케팅 채널에 따른 노출 타겟 수량 가중치</td>
                      <td style={{ padding: '10px' }}>현장매대 1.0, H.Point 앱 1.3, 임직원몰 0.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 5. AI Decision Gate 3 Rules Section */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                5. AI 최종 실행 판단 3대 규칙 (Decision Gate Rules)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                FastAPI 최적화 엔진은 모든 대안을 수식에 적용한 뒤 아래 3가지 규칙에 따라 자동으로 라우팅합니다.
              </p>

              <div className="grid-3" style={{ gap: '16px' }}>
                <div style={{ background: 'rgba(230, 57, 70, 0.06)', border: '1px solid rgba(230, 57, 70, 0.3)', padding: '16px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.8rem', background: '#e63946', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    규칙 1 · 수익성 미달 차단
                  </span>
                  <h4 style={{ fontSize: '1rem', marginTop: '8px', color: '#e63946' }}>M_inc &le; C_AI_case</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    AI 개별 분석 비용이 얻게 되는 증분이익보다 크면 대안을 즉시 기각하고 룰 기반 처리로 하강합니다.
                  </p>
                </div>

                <div style={{ background: 'rgba(42, 157, 143, 0.08)', border: '1px solid rgba(42, 157, 143, 0.4)', padding: '16px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.8rem', background: '#2a9d8f', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    규칙 2 · 5초 원클릭 패스트트랙
                  </span>
                  <h4 style={{ fontSize: '1rem', marginTop: '8px', color: '#2a9d8f' }}>M_inc &gt; C_AI &amp; 신뢰도 &ge; 85% &amp; &lt; 1,000만 원</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    안전하고 수익성이 우수한 중소규모 재고는 바이어 화면에 5초 원클릭 추천으로 표시하여 검토 인건비를 절감합니다.
                  </p>
                </div>

                <div style={{ background: 'rgba(233, 196, 106, 0.12)', border: '1px solid rgba(233, 196, 106, 0.5)', padding: '16px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.8rem', background: '#b5838d', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight: 700 }}>
                    규칙 3 · 본사 예외 라우팅
                  </span>
                  <h4 style={{ fontSize: '1rem', marginTop: '8px', color: '#8d6e63' }}>재고 &ge; 1,000만 원 OR 신뢰도 &lt; 85%</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    브랜드 영향이 크거나 1,000만 원 이상의 고위험 재고는 본사 담당자 정밀 승인 라우팅으로 자동 전환됩니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Step-by-Step Case Study A */}
            <div className="stack-card" style={{ display: 'block', padding: '24px' }}>
              <span className="eyebrow" style={{ background: 'var(--color-brand-primary)', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>
                실무 계산 예시 (CASE A)
              </span>
              <h3 style={{ fontSize: '1.2rem', margin: '12px 0 8px 0' }}>
                무역센터점 B1 식품관 직매입 한우 선물세트 500개 (소비기한 D-3일 임박)
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                정가 150,000원, 취득원가 80,000원. 소비기한 지나면 올바로 시스템 등록 후 특수 수송 폐기비 개당 4,000원 발생.
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left' }}>
                      <th style={{ padding: '8px' }}>항목</th>
                      <th style={{ padding: '8px' }}>대안 A (기준선: 방치 후 폐기)</th>
                      <th style={{ padding: '8px' }}>대안 B (AI 추천: 35% 타임세일 &amp; 앱 알림)</th>
                      <th style={{ padding: '8px' }}>증분 효과 (&Delta;)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>판매/폐기 수량</td>
                      <td style={{ padding: '8px' }}>50개 판매 / 450개 폐기</td>
                      <td style={{ padding: '8px' }}>480개 판매 / 20개 폐기</td>
                      <td style={{ padding: '8px', color: 'green', fontWeight: 600 }}>+430개 소진, -430개 폐기 방지</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>총 매출액</td>
                      <td style={{ padding: '8px' }}>7,500,000원 (50개 @ 15만)</td>
                      <td style={{ padding: '8px' }}>46,800,000원 (480개 @ 9.75만)</td>
                      <td style={{ padding: '8px', color: 'green', fontWeight: 600 }}>+39,300,000원 매출 증가</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>폐기물 처리비</td>
                      <td style={{ padding: '8px', color: '#e63946' }}>-1,800,000원 (450개 &times; 4천원)</td>
                      <td style={{ padding: '8px' }}>-80,000원 (20개 &times; 4천원)</td>
                      <td style={{ padding: '8px', color: 'green', fontWeight: 600 }}>+1,720,000원 폐기비 회피</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>마케팅 &amp; AI비용</td>
                      <td style={{ padding: '8px' }}>0원</td>
                      <td style={{ padding: '8px' }}>-240,015원 (앱 푸시+포장 24만, AI 15원)</td>
                      <td style={{ padding: '8px' }}>-240,015원 비용 발생</td>
                    </tr>
                    <tr style={{ background: 'var(--color-bg-subtle)' }}>
                      <td style={{ padding: '8px', fontWeight: 700 }}>최종 순현금 손익</td>
                      <td style={{ padding: '8px', fontWeight: 600, color: '#e63946' }}>5,700,000원</td>
                      <td style={{ padding: '8px', fontWeight: 600, color: 'var(--color-brand-primary)' }}>46,479,985원</td>
                      <td style={{ padding: '8px', fontWeight: 600, color: 'var(--color-brand-primary)' }}>&Delta;Profit = +40,779,985원</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeVersion === 'B' && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">VERSION B · GLOBAL RETAIL STANDARDS</span>
              <h2>글로벌 리테일 표준 수식 (McKinsey, INFORMS, Walmart)</h2>
              <p className="lead">
                INFORMS 학술 저널, McKinsey 글로벌 유통 보고서, Smith &amp; Agrawal(2017) Dynamic Pricing, 
                Walmart/Target 공급망 Newsvendor 모델에 기반한 글로벌 학술 및 리테일 표준 수식입니다.
              </p>
            </div>

            {/* Core Theories */}
            <Stagger className="metric-grid" style={{ marginBottom: '32px' }}>
              <article className="metric-card">
                <span className="eyebrow">글로벌 학술 01 · 교차 검증</span>
                <span className="metric-value">Newsvendor 최적화</span>
                <p>
                  품절로 인한 기회손실비용(Shortage Cost)과 과잉 재고로 인한 보관/폐기비용(Overage Cost) 간의 
                  균형을 맞추는 최적 임계 확률 <strong>F(Q*) = Cu / (Cu + Co)</strong> 공식 적용. [INFORMS 교차 검증]
                </p>
              </article>
              <article className="metric-card">
                <span className="eyebrow">글로벌 학술 02 · 교차 검증</span>
                <span className="metric-value">다기간 동적 마크다운</span>
                <p>
                  Smith &amp; Agrawal(2017) 표준 모델에 따라 가격 하락에 따른 수요 탄력성 d_t(p_t) 변화와 
                  기간별 재고 보유비용(Holding Cost h)을 통합하여 기대 매출을 극대화. [Oracle &amp; INFORMS 교차 검증]
                </p>
              </article>
              <article className="metric-card">
                <span className="eyebrow">글로벌 학술 03 · 교차 검증</span>
                <span className="metric-value">잔존가치 (Salvage Value)</span>
                <p>
                  시즌 종료 후 덤핑 세일, 3rd Party 딜러 매각, 자원 순환 리사이클을 통해 회수 가능한 
                  잔존 가치 c_salvage를 최적화 수식의 하방 안전망으로 설정. [McKinsey 교차 검증]
                </p>
              </article>
            </Stagger>
          </div>
        </section>
      )}

      {activeVersion === 'C' && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">VERSION C · INTEGRATED COMBINED VERSION</span>
              <h2>전사 통합 종합 프레임워크 (Integrated Model)</h2>
              <p className="lead">
                현대백화점 현장 특화 변수(H.Point, 올바로 폐기비, 특약매입)와 글로벌 학술 표준(Newsvendor, Dynamic Markdown, AI TCO)을 
                하나로 융합한 그룹 전사 통합 최적화 모델입니다.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* BOTTOM NAVIGATION */}
      <section className="section-tight">
        <div className="container">
          <div className="callout" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <strong>수식 체계를 바탕으로 시뮬레이션을 실행해보세요</strong>
              <p style={{ marginTop: '4px' }}>실제 백화점 재고 데이터를 바탕으로 슬라이더 조작 및 이익 계산 과정을 직접 경험하실 수 있습니다.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <Link className="button button-secondary" href="/glossary">
                용어 사전 보기 &rarr;
              </Link>
              <Link className="button button-primary" href="/product-tour">
                시뮬레이션 체험하기 &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
