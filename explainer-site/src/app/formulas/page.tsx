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
              <em>수학적 수식 및 산정 체계</em>
            </h1>
          </Reveal>
          <Reveal>
            <p>
              수식의 각 변수와 비즈니스 의미, 글로벌 학술 기준부터 현대백화점 현장 적용까지
              초보자도 한눈에 알 수 있도록 3가지 버전별 상세 설명과 산출 방식을 제공합니다.
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
                현대백화점(버전 A)과 글로벌 표준(버전 B/C)에서 중복으로 나오는 공통 핵심 수식(ROS, WOS, ST%, 매몰원가 제외, 회피비용 이익화, RAG 0원 수식)은
                <strong style={{ color: '#e9c46a', marginLeft: '4px' }}>
                  '현대백화점 실무 데이터와 글로벌 학술 출처(Oracle Retail, INFORMS, McKinsey, Smith &amp; Agrawal 2017)에서 교차 검증된 공통 출처 수식'
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
                background: activeVersion === 'A' ? 'var(--color-brand-primary, #0f4c81)' : 'transparent',
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
                background: activeVersion === 'B' ? 'var(--color-brand-primary, #0f4c81)' : 'transparent',
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
                background: activeVersion === 'C' ? 'var(--color-brand-primary, #0f4c81)' : 'transparent',
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
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>&Delta;Profit</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>Delta Profit (증분이익)</td>
                  <td style={{ padding: '12px' }}>아무 프로모션도 하지 않는 '기준선' 대비, AI 전략을 실행하여 추가로 개선된 순현금 손익액입니다.</td>
                  <td style={{ padding: '12px' }}>AI 전략 손익(4,648만원) − 기준선 손익(570만원) = +4,078만원</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>C_LLM</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>LLM API 토큰 비용</td>
                  <td style={{ padding: '12px' }}>AI가 백화점 재고를 분석하고 추천 사유를 사람 언어로 작성할 때 발생하는 계산 원가입니다.</td>
                  <td style={{ padding: '12px' }}>입력 2,500t + 출력 800t = 1건당 약 8.5원</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '12px', fontFamily: 'monospace', fontWeight: 600 }}>Cash_AI</td>
                  <td style={{ padding: '12px', fontWeight: 600 }}>AI 순현금 손익</td>
                  <td style={{ padding: '12px' }}>할인 판매 매출에서 가변 마케팅/물류비를 빼고, 회피 폐기비를 더한 뒤 AI 판단 원가를 차감한 최종 순현금 이익입니다.</td>
                  <td style={{ padding: '12px' }}>매출 − 물류비 + 회피폐기비 − AI원가</td>
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
              <h2>현대백화점 전용 수식 및 재고 처리 전략</h2>
              <p className="lead">
                현대백화점의 직매입/특약매입 매입 형태, H.Point/현대식품관 앱 타겟 마케팅, 올바로 시스템 폐기 행정비, 
                본점-아울렛 간 전송 물류를 반영한 백화점 맞춤 수식 체계입니다.
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

            {/* AI Decision Cost Formula */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                1. AI 결정원가 (C_AI_case) 산식 및 변수 정의
              </h3>
              <div
                style={{
                  background: 'var(--color-bg-subtle)',
                  padding: '16px',
                  borderRadius: '8px',
                  fontFamily: 'monospace',
                  fontSize: '1rem',
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
                      <th style={{ padding: '10px' }}>의미 및 계산 방법 (쉬운 설명)</th>
                      <th style={{ padding: '10px' }}>현대백화점 실무 1건당 예시 단가</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_LLM</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>LLM API 토큰비</td>
                      <td style={{ padding: '10px' }}>GPT-5/Claude 등 초거대언어모델에 입력한 재고 정보 및 출력된 전략 설명서 토큰 비용</td>
                      <td style={{ padding: '10px' }}>입력 2,500t + 출력 800t = <strong>약 8.5원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_DATA</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>데이터 파이프라인비</td>
                      <td style={{ padding: '10px' }}>백화점 SAP ERP 및 WMS 창고 시스템에서 재고·보관일수를 조회하는 DB 쿼리 소모비</td>
                      <td style={{ padding: '10px' }}>DB 서버 클라우드 트래픽 = <strong>약 0.5원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_SEARCH</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>유사 사례 RAG 검색비</td>
                      <td style={{ padding: '10px' }}>과거 3개년 아울렛 이월/타임세일 승인 이력 Vector DB 임베딩 및 유사도 검색 비용</td>
                      <td style={{ padding: '10px' }}>Vector DB 쿼리 = <strong>약 1.2원</strong></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>C_HUMAN</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>사람 검토 비용</td>
                      <td style={{ padding: '10px' }}>백화점 바이어/담당자가 AI 제안안을 검토하고 승인 버튼을 누르는 1분 동안의 인건비</td>
                      <td style={{ padding: '10px' }}>바이어 분당 시급 = <strong>약 250원</strong> (선택 산정)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Financial Profit & ROI */}
            <div className="grid-2" style={{ gap: '20px', marginBottom: '32px' }}>
              <div className="stack-card" style={{ display: 'block', padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                  2. 백화점 손익 및 증분이익 (&Delta;Profit)
                </h3>
                <div style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                  <strong>기준선 손익 (Profit_base):</strong> 프로모션 없이 기존 방침대로 방치 후 폐기 시의 현금 유입/유출.
                </div>
                <div style={{ fontFamily: 'monospace', background: 'var(--color-bg-subtle)', padding: '10px', borderRadius: '6px', fontSize: '0.9rem', marginBottom: '12px' }}>
                  Profit_base = Revenue_base - Cost_waste_base
                </div>
                <div style={{ fontSize: '0.9rem', marginBottom: '8px' }}>
                  <strong>AI 전략 손익 (Profit_ai):</strong> 타겟 할인으로 늘어난 매출에서 마케팅·물류비를 빼고, 회피 폐기비를 더한 손익.
                </div>
                <div style={{ fontFamily: 'monospace', background: 'var(--color-bg-subtle)', padding: '10px', borderRadius: '6px', fontSize: '0.9rem', marginBottom: '12px' }}>
                  Profit_ai = Revenue_ai - Cost_promo + AvoidedWaste - C_AI_case
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-brand-primary)' }}>
                  &Delta;Profit = Profit_ai - Profit_base
                </div>
              </div>

              <div className="stack-card" style={{ display: 'block', padding: '20px' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                  3. 직매입 vs 특약매입 구조 차이
                </h3>
                <div style={{ fontSize: '0.88rem', marginBottom: '8px' }}>
                  <strong>직매입 (Direct Purchase):</strong> 백화점이 재고 소유권을 100% 가짐. 매출 전체를 인식하며, 미판매 폐기 손실도 백화점 현금 흐름에 직접 반영됨.
                </div>
                <div style={{ fontFamily: 'monospace', background: 'var(--color-bg-subtle)', padding: '8px', borderRadius: '4px', fontSize: '0.85rem', marginBottom: '12px' }}>
                  HDS_Margin_direct = Revenue - Cost_goods - Cost_disposal
                </div>
                <div style={{ fontSize: '0.88rem', marginBottom: '8px' }}>
                  <strong>특약매입 (Special Purchase):</strong> 협력업체가 재고 소유. 백화점은 약정 수수료율(예: 25%)만 이익으로 가져가며, 반품권이 확보되어 있음.
                </div>
                <div style={{ fontFamily: 'monospace', background: 'var(--color-bg-subtle)', padding: '8px', borderRadius: '4px', fontSize: '0.85rem' }}>
                  HDS_Margin_special = Revenue &times; FeeRate - HDS_Promo_Share
                </div>
              </div>
            </div>

            {/* Step-by-Step Case Study A */}
            <div className="stack-card" style={{ display: 'block', padding: '24px' }}>
              <span className="eyebrow" style={{ background: '#0f4c81', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>
                실무 계산 예시 (Case A)
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

            {/* Dynamic Markdown & Newsvendor Formulas */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                1. 글로벌 다기간 동적 마크다운 (Dynamic Markdown Optimization) 수식
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
                max &sum;<sub>t=1</sub><sup>T</sup> E[ p<sub>t</sub> &middot; d<sub>t</sub>(p<sub>t</sub>, s<sub>t</sub>) - h &middot; I<sub>t</sub> - c<sub>salvage</sub> &middot; max(0, I<sub>T</sub>) ]
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                      <th style={{ padding: '10px' }}>수식 기호</th>
                      <th style={{ padding: '10px' }}>학술 변수명</th>
                      <th style={{ padding: '10px' }}>의미 및 개념 설명 (McKinsey / INFORMS)</th>
                      <th style={{ padding: '10px' }}>글로벌 유통 기업 적용 단위</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>p_t</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Period Price</td>
                      <td style={{ padding: '10px' }}>기간 t에서의 최적 할인 판매 가격 (예: 1주차 정가, 2주차 20% off, 3주차 40% off)</td>
                      <td style={{ padding: '10px' }}>달러 ($) / 원화 (₩)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>d_t(p_t, s_t)</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Demand Function</td>
                      <td style={{ padding: '10px' }}>가격 p_t와 계절성/요일/날씨 신호 s_t에 따른 확률적 예상 수요 수량</td>
                      <td style={{ padding: '10px' }}>판매 수량 (Units)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>h &middot; I_t</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Holding Cost</td>
                      <td style={{ padding: '10px' }}>기간 t 동안 잔여 재고 I_t를 창고 및 매장에 보관하면서 발생하는 단위당 보유 비용</td>
                      <td style={{ padding: '10px' }}>단위당 하루 보유비 ($/unit/day)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>c_salvage</td>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Salvage Value</td>
                      <td style={{ padding: '10px' }}>최종 기간 T 이후 남은 미소진 재고 I_T를 외부 딜러 매각 또는 리사이클로 회수하는 단위당 잔존가치</td>
                      <td style={{ padding: '10px' }}>단위당 회수금액 ($/unit)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step-by-Step Case Study B */}
            <div className="stack-card" style={{ display: 'block', padding: '24px' }}>
              <span className="eyebrow" style={{ background: '#2a9d8f', color: '#fff', padding: '4px 8px', borderRadius: '4px' }}>
                글로벌 실무 계산 예시 (Case B)
              </span>
              <h3 style={{ fontSize: '1.2rem', margin: '12px 0 8px 0' }}>
                Walmart/Global Fashion 브랜드 의류 이월재고 1,000개 다기간 최적화
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '16px' }}>
                정가 $100, 원가 $40. 3주간의 동적 마크다운(1주차 $100 &rarr; 2주차 $70 &rarr; 3주차 $50 &rarr; Salvage $10) 적용 시뮬레이션.
              </p>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', textAlign: 'left' }}>
                      <th style={{ padding: '8px' }}>기간 (Period)</th>
                      <th style={{ padding: '8px' }}>가격 (Price p_t)</th>
                      <th style={{ padding: '8px' }}>예상 판매량 (d_t)</th>
                      <th style={{ padding: '8px' }}>기간 매출 (Revenue)</th>
                      <th style={{ padding: '8px' }}>재고 보유비 (h &middot; I_t)</th>
                      <th style={{ padding: '8px' }}>누적 순수익</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>1주차 (정가)</td>
                      <td style={{ padding: '8px' }}>$100</td>
                      <td style={{ padding: '8px' }}>300개</td>
                      <td style={{ padding: '8px' }}>$30,000</td>
                      <td style={{ padding: '8px' }}>-$700 (700개 &times; $1/wk)</td>
                      <td style={{ padding: '8px' }}>$29,300</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>2주차 (30% off)</td>
                      <td style={{ padding: '8px' }}>$70</td>
                      <td style={{ padding: '8px' }}>400개</td>
                      <td style={{ padding: '8px' }}>$28,000</td>
                      <td style={{ padding: '8px' }}>-$300 (300개 &times; $1/wk)</td>
                      <td style={{ padding: '8px' }}>+$27,700 (누적 $57,000)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>3주차 (50% off)</td>
                      <td style={{ padding: '8px' }}>$50</td>
                      <td style={{ padding: '8px' }}>250개</td>
                      <td style={{ padding: '8px' }}>$12,500</td>
                      <td style={{ padding: '8px' }}>-$50 (50개 &times; $1/wk)</td>
                      <td style={{ padding: '8px' }}>+$12,450 (누적 $69,450)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>종료 후 (Salvage)</td>
                      <td style={{ padding: '8px' }}>$10 (c_salvage)</td>
                      <td style={{ padding: '8px' }}>50개 (매각)</td>
                      <td style={{ padding: '8px' }}>$500</td>
                      <td style={{ padding: '8px' }}>$0</td>
                      <td style={{ padding: '8px', fontWeight: 600, color: 'var(--color-brand-primary)' }}>총 $69,950 회수</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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

            {/* Integrated Math Model */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                1. 전사 통합 최종 순가치 (Net Value Final) 산식
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
                NetValue_final = &Delta;Profit_financial + AvoidedCost_ESG - RiskPenalty_brand - TCO_AI_total
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
                      <th style={{ padding: '10px' }}>통합 구성 요소</th>
                      <th style={{ padding: '10px' }}>포함되는 산하 수식 및 변수</th>
                      <th style={{ padding: '10px' }}>통합 모델에서의 가치 및 역할 (교차 출처)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>&Delta;Profit_financial</td>
                      <td style={{ padding: '10px' }}>Revenue_ai - Cost_logistics - Profit_base</td>
                      <td style={{ padding: '10px' }}>순수 재무적 현금 개선액 [현대백화점 직매입/특약매입 &amp; Oracle Retail 교차]</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>AvoidedCost_ESG</td>
                      <td style={{ padding: '10px' }}>Cost_waste_saved + Cost_carbon_credit</td>
                      <td style={{ padding: '10px' }}>폐기물 감축 및 자원순환(Project100)으로 인한 ESG 비재무 회피 가치 [McKinsey 교차]</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>RiskPenalty_brand</td>
                      <td style={{ padding: '10px' }}>ExcessDiscount_Rate &times; Brand_Image_Index</td>
                      <td style={{ padding: '10px' }}>과도한 무차별 할인으로 고급 백화점 브랜드 이미지가 실추되는 위험 감정 산식</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight: 600 }}>TCO_AI_total</td>
                      <td style={{ padding: '10px' }}>C_AI_case (LLM + Pipeline + RAG + Human-in-loop)</td>
                      <td style={{ padding: '10px' }}>AI 시스템을 운영하고 판단을 내리는 데 투입된 총 소유 비용 (TCO) [OpenAI &amp; McKinsey]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Integrated ROI Formula */}
            <div className="callout" style={{ borderLeftColor: 'var(--color-brand-primary)' }}>
              <strong>⚖️ 통합 AI ROI 산정 공식 (Cross-Validated Integrated ROI)</strong>
              <div style={{ fontFamily: 'monospace', fontSize: '1.1rem', marginTop: '8px', fontWeight: 700 }}>
                ROI_integrated (%) = ( NetValue_final &divide; TCO_AI_total ) &times; 100%
              </div>
              <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
                재무적 이익뿐 아니라 ESG 폐기 회피 가치와 브랜드 위험 차감액을 모두 종합하여, 
                AI 투입 비용 1원 대비 그룹 전체에 창출된 실질 순가치의 비율을 정밀 산출합니다.
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
