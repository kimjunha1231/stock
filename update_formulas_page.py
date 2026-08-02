import sys

path = "explainer-site/src/app/formulas/page.tsx"
with open(path, "r", encoding="utf-8") as f:
    code = f.read()

# Check if Q_sale section exists, if not, let's inject it into Version A section
q_sale_section = """
            {/* 3. ML Demand Elasticity & Aging Attenuation Formula Section */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                3. ML 수요 예측 &amp; 소진율 감쇄 수식 (Q_sale)
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
                      <td style={{ padding: '10px', fontWeight 600 }}>가격 탄력성 계수</td>
                      <td style={{ padding: '10px' }}>할인율 1% 상승 시 수요가 반응하는 증가폭 (ML 학습)</td>
                      <td style={{ padding: '10px' }}>신선식품 &epsilon; = 2.5 (35% 할인 시 +87.5% 반응)</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight 600 }}>f_aging(t)</td>
                      <td style={{ padding: '10px', fontWeight 600 }}>D-Day 수명 감쇄 곡선</td>
                      <td style={{ padding: '10px' }}>소비기한/시즌 경과에 따라 할인 반응 속도가 완만해지는 감쇄 함수</td>
                      <td style={{ padding: '10px' }}>D-3일 잔여 수명 감쇄율 0.85 보정</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontFamily: 'monospace', fontWeight 600 }}>&gamma;_channel</td>
                      <td style={{ padding: '10px', fontWeight 600 }}>판매 채널 가중치</td>
                      <td style={{ padding: '10px' }}>집행하는 마케팅 채널에 따른 노출 타겟 수량 가중치</td>
                      <td style={{ padding: '10px' }}>현장매대 1.0, H.Point 앱 1.3, 임직원몰 0.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4. AI Decision Gate 3 Rules Section */}
            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--color-brand-primary)' }}>
                4. AI 최종 실행 판단 3대 규칙 (Decision Gate Rules)
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
                  <span style={{ fontSize: '0.8rem', background: '#2a9d8f', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight 700 }}>
                    규칙 2 · 5초 원클릭 패스트트랙
                  </span>
                  <h4 style={{ fontSize: '1rem', marginTop: '8px', color: '#2a9d8f' }}>M_inc &gt; C_AI &amp; 신뢰도 &ge; 85% &amp; &lt; 1,000만 원</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    안전하고 수익성이 우수한 중소규모 재고는 바이어 화면에 5초 원클릭 추천으로 표시하여 검토 인건비를 절감합니다.
                  </p>
                </div>

                <div style={{ background: 'rgba(233, 196, 106, 0.12)', border: '1px solid rgba(233, 196, 106, 0.5)', padding: '16px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '0.8rem', background: '#b5838d', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontWeight 700 }}>
                    규칙 3 · 본사 예외 라우팅
                  </span>
                  <h4 style={{ fontSize: '1rem', marginTop: '8px', color: '#8d6e63' }}>재고 &ge; 1,000만 원 OR 신뢰도 &lt; 85%</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginTop: '4px' }}>
                    브랜드 영향이 크거나 1,000만 원 이상의 고위험 재고는 본사 담당자 정밀 승인 라우팅으로 자동 전환됩니다.
                  </p>
                </div>
              </div>
            </div>
"""

target_marker = '{/* Incremental Cash Margin Formula Breakdown */}'
if target_marker in code and 'ML 수요 예측 &amp; 소진율 감쇄 수식 (Q_sale)' not in code:
    code = code.replace(target_marker, q_sale_section + "\n            " + target_marker)
    with open(path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Successfully added Q_sale and Decision Gate 3 Rules sections to formulas/page.tsx!")
else:
    print("Marker found or already updated.")
