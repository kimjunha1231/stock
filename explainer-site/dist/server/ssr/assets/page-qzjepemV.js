import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import Link from "./link-BjpPdlMN.js";
import { n as Stagger, t as Reveal } from "./reveal-ASYv3BuO.js";
//#region src/app/tech-stack/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function TechStackPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "03-C · Tech Stack & Architecture Spec"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"현대백화점 B2B AI 재고 수익 최적화",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "전체 기술 스택 및 아키텍처 명세서" })
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "새로 구축할 React 19 + Vite 운영 화면을 중심으로, Spring Boot·FastAPI·PostgreSQL·Redis·ML/LLM 계층을 실제 운영 조건에 맞게 선택하는 기준과 트레이드오프를 설명합니다. 아래 내용은 기존 코드가 아니라 재구축 목표 스택입니다." }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						style: {
							display: "flex",
							gap: "8px",
							marginTop: "28px",
							flexWrap: "wrap",
							background: "rgba(255, 255, 255, 0.08)",
							padding: "8px",
							borderRadius: "12px",
							border: "1px solid rgba(255, 255, 255, 0.15)"
						},
						children: [
							{
								id: "all",
								label: "🌐 전체 종합"
							},
							{
								id: "frontend",
								label: "💻 프론트엔드"
							},
							{
								id: "backend",
								label: "⚙️ 백엔드"
							},
							{
								id: "database",
								label: "🗄️ DB & 캐시"
							},
							{
								id: "ai",
								label: "🤖 AI & 수리 최적화"
							},
							{
								id: "observability",
								label: "📊 관제 & 품질"
							}
						].map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setActiveTab(tab.id),
							style: {
								flex: 1,
								minWidth: "120px",
								padding: "10px 14px",
								borderRadius: "8px",
								border: "none",
								cursor: "pointer",
								fontSize: "0.9rem",
								fontWeight: 600,
								transition: "all 0.2s ease",
								background: activeTab === tab.id ? "var(--color-brand-primary, #0f4c3a)" : "transparent",
								color: "#fff",
								boxShadow: activeTab === tab.id ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
							},
							children: tab.label
						}, tab.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "callout",
						style: {
							marginTop: "20px",
							background: "rgba(255,255,255,0.96)",
							color: "var(--color-text)",
							borderLeft: "4px solid var(--color-brand-primary)"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "재구축 기준선" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: { marginTop: "6px" },
							children: [
								"프론트엔드는 ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "React 19 + Vite + TypeScript" }),
								"를 확정 기본값으로 둡니다. Spring Boot/FastAPI/PostgreSQL/Redis와 TanStack Query·Zustand·ML·LLM·관제 도구는 실데이터 규모, 보안, SLA를 확인하며 단계적으로 도입합니다. 표에 ‘조건부’라고 표시된 항목은 지금 당장 모두 추가하지 않습니다."
							]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "ARCHITECTURE HIGHLIGHTS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "시스템 핵심 아키텍처 4대 특징" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "운영 화면의 반응성과 계산의 재현성, 승인·감사 가능성을 우선합니다. 특정 도구가 정확도를 자동으로 보장하지 않으므로 입력·모델·검증 절차를 함께 설계합니다."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
						className: "metric-grid",
						style: { marginBottom: "40px" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "원칙 01 · 프론트엔드"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "React 19 + Vite"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "내부 운영 도구에 필요한 빠른 HMR·빌드와 클라이언트 시뮬레이션을 단순하게 구성합니다. 전역 상태는 서버 상태와 UI 상태를 분리한 뒤 필요한 범위에서만 Zustand를 도입합니다." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "원칙 02 · 백엔드"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "Spring Boot API + 계약 우선"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Java 21 가상 스레드와 Spring Boot로 API·권한·승인·감사를 처리합니다. CRUD·동적 검색은 QueryDSL을 기본으로 두고, 대용량 집계는 검증된 read model 또는 SQL로 제한해 매퍼 중복을 줄입니다." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "원칙 03 · 데이터베이스"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "PostgreSQL 16+ JSONB"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "RDBMS 정규화 테이블 구조를 100% 유지하면서, 시뮬레이션 조율 이력 및 소진율 구간별(90-100%, 70-89%) 사후 대처 트리(Fallback Action Plan)를 JSONB 컬럼에 유연하게 저장 및 GIN 인덱싱." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "원칙 04 · AI 마이크로서비스"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "Python FastAPI + ML"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Spring Boot와 분리된 독립 파이썬 연산 서비스. OR-Tools/HiGHS 또는 PuLP+solver로 제약 최적화를 수행하고, LightGBM으로 가격 반응을 검증하며, Provider Adapter를 통해 설명 모델을 교체합니다." })
								]
							})
						]
					}),
					(activeTab === "all" || activeTab === "frontend") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.2rem",
								marginBottom: "16px",
								color: "var(--color-brand-primary)"
							},
							children: "💻 1. 프론트엔드 (Frontend) 기술 스택 & 트레이드오프"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { overflowX: "auto" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: "0.9rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										borderBottom: "2px solid var(--color-border)",
										background: "var(--color-bg-subtle)",
										textAlign: "left"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "기술 스택"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "필요성 & 개발 기능"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "비교 대안 및 선택 이유"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "트레이드오프 (Trade-off)"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "React 19 + Vite + TypeScript"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "B2B 오퍼레이션 타워 SPA 구축, 초고속 HMR 및 빌드"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Next.js" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"SEO보다 API 분리·배포 단순성·클라이언트 시뮬레이션이 중요하므로 Vite를 기본 선택"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "SSR·서버 액션이 필요해지면 BFF 또는 프레임워크를 재검토"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "TanStack Query v5 (도입 예정)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "재고 API 캐싱, 상세진단 비동기 로딩, 전략생성 백그라운드 폴링"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Custom Fetch / Redux Thunk" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"서버 데이터의 자동 캐싱, 리프레시, 상태 관리를 선언적 코드로 처리"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "실제 API 계약이 확정된 뒤 도입. mock 단계에는 과함"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "URL Search Params"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "층(2F~1F), 카테고리, D-Day 필터링 상태의 URL 연동"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs In-memory state" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"새로고침, 뒤로가기, URL 링크 공유 시에도 필터 조건이 100% 유지됨"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "URL 길이가 다소 길어질 수 있음"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Zustand (도입 후보)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "시뮬레이션 슬라이더 60fps 실시간 차트 연동, Multi-Select 장바구니, 전략 비교함"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Context API / Redux" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Context API의 전체 불필요 리렌더링 문제를 Selector 기반 정밀 타겟 구독으로 완벽 해결"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "서버 상태와 UI 상태를 먼저 분리하고 필요한 화면에만 사용"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "TanStack Table v8"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "수천 개 직매입 SKU 스티키 헤더, 컬럼 정렬, 다중 선택, 페이징"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Basic Table / AG Grid" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"가볍고 Headless하여 디자인 자유도가 높으며 초고속 가상화(Virtualization) 지원"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "shadcn/ui와 조합하여 직접 스타일링 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Recharts"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "할인율 vs 증분이익 vs 예상 판매량 듀얼 축 차트, 위험도 스태킹 바"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Chart.js / D3.js" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"React 컴포넌트 친화적이며 SVG 기반으로 듀얼 축 및 실시간 데이터 업데이트가 매끄러움"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "D3 대비 대량 캔버스 연산 제약 존재"
											})
										]
									})
								] })]
							})
						})]
					}),
					(activeTab === "all" || activeTab === "backend") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.2rem",
								marginBottom: "16px",
								color: "var(--color-brand-primary)"
							},
							children: "⚙️ 2. 백엔드 (Backend) 기술 스택 & 트레이드오프"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { overflowX: "auto" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: "0.9rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										borderBottom: "2px solid var(--color-border)",
										background: "var(--color-bg-subtle)",
										textAlign: "left"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "기술 스택"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "필요성 & 개발 기능"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "비교 대안 및 선택 이유"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "트레이드오프 (Trade-off)"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Java 21 + Spring Boot 3.x (목표)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "REST API, 권한·승인·감사·재고 도메인 로직"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Node.js / Python 단일 백엔드" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"트랜잭션·배치·보안 생태계를 한곳에서 관리하고 FastAPI는 계산 서비스로 분리"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "Spring Boot와 FastAPI 간 계약·타임아웃·재시도 설계 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Spring Data JPA + QueryDSL 5.x (목표)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "도메인 CRUD 및 다중 조건 동적 필터링 검색 (컴파일 타임 안전성)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Plain JPA / Native SQL" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"Q-Class 기반 자바 코드로 동적 쿼리를 안전하게 작성하여 리팩터링에 강함"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "JPA와 SQL 매퍼를 동시에 넣기 전에 조회 모델·인덱스 기준을 정함"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "MyBatis 3.5+"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "층별/카테고리별 손실 집계 리포트, Window Function/CTE 대용량 통계 SQL"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs JPA 단독 사용" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"복잡한 집계 SQL을 XML 원시 쿼리로 자유롭게 최적화하여 실행 계획 제어"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "XML 매핑 파일 관리 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "명시적 상태전이 서비스 (MVP)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "위험탐지➔검토➔승인➔실행➔완료 상태와 허용 전이·감사 이력 관리"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs State Machine 프레임워크" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"초기 고정 흐름은 Enum·전이 서비스·낙관적 잠금으로 단순하게 시작"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "병렬 승인·동적 전이가 늘어날 때만 State Machine 도입"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Spring Batch 5 + 스케줄러 1종 선택"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "매일 새벽 02시 전 점포 직매입 재고 일일 손실액 및 위험도 자동 갱신"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs @Scheduled / Quartz / Kubernetes CronJob" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"단일·다중 인스턴스와 재시작 요구를 먼저 확인한 뒤 하나를 선택"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "Batch와 Quartz를 동시에 쓰면 중복 실행 책임이 겹침"
											})
										]
									})
								] })]
							})
						})]
					}),
					(activeTab === "all" || activeTab === "database") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.2rem",
								marginBottom: "16px",
								color: "var(--color-brand-primary)"
							},
							children: "🗄️ 3. 데이터베이스 & 캐시 (Database & Cache) 기술 스택"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { overflowX: "auto" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: "0.9rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										borderBottom: "2px solid var(--color-border)",
										background: "var(--color-bg-subtle)",
										textAlign: "left"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "기술 스택"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "필요성 & 개발 기능"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "비교 대안 및 선택 이유"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "트레이드오프 (Trade-off)"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid var(--color-border)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px",
												fontWeight: 600
											},
											children: "PostgreSQL 16+ (목표)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: { padding: "10px" },
											children: "재고·판매·원가·승인 이력은 정규화하고 실행 파라미터·설명 payload만 JSONB로 보조 저장"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											style: { padding: "10px" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs MySQL / Oracle" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"관계형 조회·감사와 JSONB 유연성을 함께 확보"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px",
												color: "var(--color-text-muted)"
											},
											children: "파티션·인덱스·백업·보존기간을 함께 설계"
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid var(--color-border)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px",
												fontWeight: 600
											},
											children: "Redis 7.x (선택적 캐시)"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: { padding: "10px" },
											children: "위험재고 집계·LLM 설명의 짧은 TTL 캐시와 작업 상태 공유"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											style: { padding: "10px" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs In-memory HashMap" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
												"분산 환경에서 데이터 공유 가능 및 TTL 기반 자동 만료 지원"
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: "10px",
												color: "var(--color-text-muted)"
											},
											children: "원본 데이터가 아님. 캐시 키 버전·무효화·stampede 방지와 메모리 한도 필요"
										})
									]
								})] })]
							})
						})]
					}),
					(activeTab === "all" || activeTab === "ai") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.2rem",
								marginBottom: "16px",
								color: "var(--color-brand-primary)"
							},
							children: "🤖 4. AI & 수리 최적화 마이크로서비스 (AI Service)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { overflowX: "auto" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: "0.9rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										borderBottom: "2px solid var(--color-border)",
										background: "var(--color-bg-subtle)",
										textAlign: "left"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "기술 스택"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "필요성 & 개발 기능"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "비교 대안 및 선택 이유"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "트레이드오프 (Trade-off)"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Python 3.11+ + FastAPI (목표)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "수리 최적화 연산 및 ML 예측 전용 독립 마이크로서비스"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs Spring AI 단독" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"파이썬 생태계의 머신러닝/수리 최적화 전용 라이브러리를 직접 활용 가능"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "Spring Boot와의 HTTP 통신 제어 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "OR-Tools/HiGHS 또는 PuLP + solver (조건부)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "보관·폐기·할인·물류 제약을 포함한 증분 기여현금이익 최적화"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs 직접 작성 알고리즘" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"할인 단계·수량·채널 선택이 정수 제약이면 MILP solver를 사용"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "‘100% 정확’이 아니라 모델·허용오차·입력 품질을 기록하고 infeasible을 처리"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "scikit-learn / LightGBM + 시계열 검증"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "과거 판매 이력 기반 수요 가격 탄력성 및 소진율 추정 ML 예측"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs RAG / Vector DB" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"정형 숫자는 회귀·시계열 모델의 대상이며 할인 내생성·누수·불확실성 구간을 검증"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "백테스트·콜드스타트 보정·모델 드리프트 모니터링 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "LLM Provider Adapter (조건부)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "현업 담당자용 정밀 진단 사유, 시나리오 추천 배경, 사후 대처 실행 가이드 문장 작성"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs 특정 모델 고정" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"OpenAI·Gemini·Ollama 등을 어댑터로 교체하고 모델명·가격·한도를 설정으로 관리"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "PII 마스킹·구조화 출력 검증·프롬프트 주입 방어·토큰 예산·fallback 필요"
											})
										]
									})
								] })]
							})
						})]
					}),
					(activeTab === "all" || activeTab === "observability") && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.2rem",
								marginBottom: "16px",
								color: "var(--color-brand-primary)"
							},
							children: "📊 5. 관제, 모니터링, Sentry 및 품질 검증 (Observability & Testing)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: { overflowX: "auto" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: "0.9rem"
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										borderBottom: "2px solid var(--color-border)",
										background: "var(--color-bg-subtle)",
										textAlign: "left"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "기술 스택"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "필요성 & 개발 기능"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "비교 대안 및 선택 이유"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: "10px" },
											children: "트레이드오프 (Trade-off)"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Sentry"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "프론트엔드/백엔드 실시간 런타임 에러 캡처 및 슬랙 알림"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs 로그 파일 직접 확인" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"에러 발생 시 정확한 파일/라인 수, 콜스택, 사용자 동작 이력을 실시간 전달"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "무료 플랜 트래픽 한도 (월 5,000건)"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Prometheus + Grafana"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "서버 CPU, 메모리, DB 커넥션 풀, API RPS/Latency 실시간 시각화 관제"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs CloudWatch 의존" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"무료 오픈소스로 가상 스레드 및 커넥션 풀 지표를 정밀 모니터링"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "프로메테우스 에이전트 셋업 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "Loki + Promtail"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "Logback JSON 로깅 수집 및 Grafana를 통한 중앙 로그 검색"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs ELK Stack" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"엘라스틱서치 대비 메모리 사용량이 1/10 수준으로 매우 가볍고 직관적임"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "전체 텍스트 색인 기능은 단순함"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "OpenTelemetry + Jaeger"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "React➔Spring Boot➔FastAPI➔PostgreSQL 구간 분산 트레이싱 추적"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs 로그 분리 관찰" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"단일 TraceID로 서비스 간 병목 구간을 한눈에 식별 가능"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "TraceID 전파 헤더 셋업 필요"
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: { borderBottom: "1px solid var(--color-border)" },
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													fontWeight: 600
												},
												children: "k6 (목표)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: { padding: "10px" },
												children: "승인·검색·시뮬레이션 API의 SLA에 따른 P95/P99·오류율·처리량 측정"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
												style: { padding: "10px" },
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "vs JMeter / Locust" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
													"실제 피크 사용자와 목표 SLO에서 부하 시나리오를 산정"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												style: {
													padding: "10px",
													color: "var(--color-text-muted)"
												},
												children: "동시 사용자 500명은 임의 기준이 아니며 운영 데이터로 재산정"
											})
										]
									})
								] })]
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							style: {
								fontSize: "1.2rem",
								marginBottom: "16px",
								color: "var(--color-brand-primary)"
							},
							children: "🧠 AI 예측 정확도 & 퀄리티 극대화 4대 디벨롭 전략"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid-2",
							style: { gap: "16px" },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "var(--color-bg-subtle)",
										padding: "16px",
										borderRadius: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										style: {
											fontSize: "1rem",
											color: "var(--color-brand-primary)",
											marginBottom: "6px"
										},
										children: "1. ML 특성 공학 & 탄력성 곡선 보정"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontSize: "0.88rem",
											color: "var(--color-text-muted)"
										},
										children: "보관일수, 유통기한 D-Day, 과거 30/60/90일 판매 이동평균, 계절성, 할인율을 조합해 LightGBM 모델을 학습시킵니다. 할인율 상승 시 소진율 증가폭이 완만해지는 가격 탄력성 감쇄 곡선을 수학적으로 보정하여 현실적인 소진율을 추정합니다."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "var(--color-bg-subtle)",
										padding: "16px",
										borderRadius: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										style: {
											fontSize: "1rem",
											color: "var(--color-brand-primary)",
											marginBottom: "6px"
										},
										children: "2. 신규/비인기 SKU 콜드스타트 방지"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontSize: "0.88rem",
											color: "var(--color-text-muted)"
										},
										children: "과거 판매 이력이 부족한 신규 상품은 '동일 브랜드 ➔ 동일 카테고리 ➔ 동일 가격대' 유사 상품의 탄력성을 가중 평균하여 예측값을 보완하고, 표본 부족 시 담당자에게 '신뢰도 65% 경고'를 함께 표시합니다."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "var(--color-bg-subtle)",
										padding: "16px",
										borderRadius: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										style: {
											fontSize: "1rem",
											color: "var(--color-brand-primary)",
											marginBottom: "6px"
										},
										children: "3. LLM 구조화 출력 & Redis 캐시"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontSize: "0.88rem",
											color: "var(--color-text-muted)"
										},
										children: "LLM 호출 시 지정된 JSON 포맷만 반환하도록 강제하여 파싱 에러를 차단하며, 백화점 오퍼레이션 격식 템플릿을 적용합니다. 동일 재고 조건의 설명 문장은 모델·프롬프트·데이터 버전이 포함된 키로 Redis에 캐싱할 수 있습니다. 캐시 적중도 0초는 아니며 TTL·무효화·민감정보 보호를 함께 적용합니다."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										background: "var(--color-bg-subtle)",
										padding: "16px",
										borderRadius: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										style: {
											fontSize: "1rem",
											color: "var(--color-brand-primary)",
											marginBottom: "6px"
										},
										children: "4. 피드백 재학습 루프 (Closed-Loop)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											fontSize: "0.88rem",
											color: "var(--color-text-muted)"
										},
										children: "실제 실행된 프로모션 결과(판매량, 증분이익)를 DB로 회수하여 예측 오차와 편향을 기록하고, 시간순 백테스트와 승인된 배포 절차를 거쳐 모델을 업데이트합니다. 검증 게이트 없는 자동 재학습은 실행하지 않습니다."
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px",
							marginBottom: "32px"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									fontSize: "1.2rem",
									marginBottom: "8px",
									color: "var(--color-brand-primary)"
								},
								children: "✅ 구축 전에 반드시 고정할 운영 기준"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "var(--color-text-muted)",
									marginBottom: "16px"
								},
								children: "기술 이름보다 아래 계약과 통제 항목이 재고 의사결정의 품질과 비용을 좌우합니다."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid-2",
								style: { gap: "16px" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "var(--color-bg-subtle)",
											padding: "16px",
											borderRadius: "8px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											style: {
												color: "var(--color-brand-primary)",
												marginBottom: "6px"
											},
											children: "데이터 계약·품질"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontSize: "0.88rem",
												color: "var(--color-text-muted)"
											},
											children: "SKU·점포·소유권·원가·재고 스냅샷의 기준시각, 단위, 결측·중복·지연 처리와 재현 가능한 입력 버전을 정의합니다."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "var(--color-bg-subtle)",
											padding: "16px",
											borderRadius: "8px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											style: {
												color: "var(--color-brand-primary)",
												marginBottom: "6px"
											},
											children: "보안·승인·감사"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontSize: "0.88rem",
												color: "var(--color-text-muted)"
											},
											children: "사내 IdP/OIDC, 역할별 최소권한, 승인 전 가격 변경 금지, 모든 입력·추천·승인·실행 이벤트의 감사 로그를 고정합니다."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "var(--color-bg-subtle)",
											padding: "16px",
											borderRadius: "8px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											style: {
												color: "var(--color-brand-primary)",
												marginBottom: "6px"
											},
											children: "모델 검증·안전장치"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontSize: "0.88rem",
												color: "var(--color-text-muted)"
											},
											children: "시간순 백테스트, 기준선 대비 증분이익 검증, 신뢰구간·드리프트·infeasible·fallback과 사람 승인 조건을 둡니다."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										style: {
											background: "var(--color-bg-subtle)",
											padding: "16px",
											borderRadius: "8px"
										},
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											style: {
												color: "var(--color-brand-primary)",
												marginBottom: "6px"
											},
											children: "비용·신뢰성 예산"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											style: {
												fontSize: "0.88rem",
												color: "var(--color-text-muted)"
											},
											children: "LLM 토큰·배치·DB·캐시 비용을 건당 추적하고, API timeout·재시도·멱등성·회로차단·백업·복구 목표를 정합니다."
										})]
									})
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "callout",
					style: {
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
						flexWrap: "wrap",
						gap: "16px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "기술 스택 명세서를 바탕으로 시뮬레이터를 확인해보세요" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { marginTop: "4px" },
						children: "상세 시뮬레이션 조율 기능과 사후 대처 트리가 실제 UI에서 어떻게 연동되는지 살펴볼 수 있습니다."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: "12px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "button button-secondary",
							href: "/formulas",
							children: "수식 체계 보기 →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "button button-primary",
							href: "/product-tour",
							children: "제품 화면 둘러보기 →"
						})]
					})]
				})
			})
		})
	] });
}
//#endregion
export { TechStackPage as default };
