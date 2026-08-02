import pathlib

# Update explainer-site/src/app/tech-stack/page.tsx
site_page = pathlib.Path('explainer-site/src/app/tech-stack/page.tsx')

backend_table_html = """            <div className="stack-card" style={{ display: 'block', padding: '24px', marginBottom: '32px' }}>
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
                      <td style={{ padding: '10px' }}>엔터프라이즈 REST API 서비스, 멀티스레드 동시 요청 처리 및 트랜잭션 보장</td>
                      <td style={{ padding: '10px' }}>
                        • Virtual Threads로 I/O 처리량 극대화<br />
                        • 안정적인 대기업 엔터프라이즈 생태계<br />
                        • 강력한 멀티스레드 트랜잭션 처리
                      </td>
                      <td style={{ padding: '10px' }}>
                        <strong>vs Node.js / Python</strong><br />
                        SAP ERP/WMS 사내 인프라 연동 시 최고의 안정성과 트랜잭션 보장
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Spring Data JPA + QueryDSL 5.x</td>
                      <td style={{ padding: '10px' }}>재고 도메인 CRUD 및 다중 조건 동적 필터링 검색 (층, 카테고리, D-Day 등)</td>
                      <td style={{ padding: '10px' }}>
                        • Q-Class 자바 코드 기반 컴파일 타임 쿼리 검증<br />
                        • 오타 및 리팩터링 오류 사전 차단<br />
                        • 복잡한 동적 필터 조건 선언적 구현
                      </td>
                      <td style={{ padding: '10px' }}>
                        <strong>vs Native SQL / MyBatis</strong><br />
                        문자열 SQL 오류 위험 없이 안전한 자바 코드로 복잡한 검색 쿼리 작성
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Explicit Transition Service</td>
                      <td style={{ padding: '10px' }}>위험탐지➔검토➔승인➔실행➔완료 전이 통제, @Version 낙관적 잠금 및 감사 이력 기록</td>
                      <td style={{ padding: '10px' }}>
                        • 동일 재고 이중 승인 동시성 문제 완벽 방지<br />
                        • 모든 승인 주체·시각의 불변 감사 로그 확보<br />
                        • 1달 구축에 특화된 직관적 전이 제어
                      </td>
                      <td style={{ padding: '10px' }}>
                        <strong>vs Spring State Machine</strong><br />
                        무거운 프레임워크 오버헤드 없이 Enum + DB 낙관적 잠금으로 확실한 방어
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight: 600 }}>Spring Batch 5 + Spring @Scheduled</td>
                      <td style={{ padding: '10px' }}>매일 새벽 02시 전체 점포 직매입 재고 일일 손실액 및 위험도 자동 스냅샷 집계</td>
                      <td style={{ padding: '10px' }}>
                        • 실패 시 장애 지점부터 재시작(Restart) 보장<br />
                        • 청크(Chunk) 기반 대용량 트랜잭션 분할<br />
                        • 새벽 시간대 시스템 자원 효율적 활용
                      </td>
                      <td style={{ padding: '10px' }}>
                        <strong>vs Quartz 복합 구성</strong><br />
                        단일 배치 책임으로 복잡성을 낮추고 대용량 스냅샷 집계 안정성 확보
                      </td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <td style={{ padding: '10px', fontWeight 600 }}>Spring Security OAuth2 / OIDC</td>
                      <td style={{ padding: '10px' }}>사내 SSO/IdP 연동, 점포 담당자 vs 본사 예외 승인자 역할 기반 접근 권한(RBAC) 통제</td>
                      <td style={{ padding: '10px' }}>
                        • 사내 계정 SSO 원클릭 인증 연동<br />
                        • 역할별 최소 권한(RBAC) 엄격 적용<br />
                        • 승인 권한 없는 사용자의 조작 차단
                      </td>
                      <td style={{ padding: '10px' }}>
                        <strong>vs 커스텀 JWT 자체 발급</strong><br />
                        엔터프라이즈 사내 IdP 표준을 사용하여 토큰 탈취 및 보안 리스크 차단
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>"""

print("Backend table prepared")
