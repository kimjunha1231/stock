import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import { n as Stagger, t as Reveal } from "./reveal-ASYv3BuO.js";
//#region src/app/tech-stack/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var stacks = {
	frontend: {
		label: "프론트엔드",
		summary: "4개 계열사의 상품·재고·예약 capacity를 같은 화면 언어로 비교하는 운영 UI",
		items: [
			[
				"React 19 + JavaScript + HTML/CSS",
				"화면과 컴포넌트",
				"계열사별 데이터 차이를 재사용 가능한 화면으로 표현"
			],
			[
				"Tailwind CSS + shadcn/ui",
				"스타일·접근성",
				"공통 디자인 토큰과 키보드 접근 가능한 운영 컴포넌트"
			],
			[
				"TanStack Query + Zustand",
				"상태 관리",
				"서버 상태 캐시와 시뮬레이션·필터 UI 상태 분리"
			],
			[
				"React Router (react-router-dom)",
				"페이지 이동",
				"대시보드·상품·위험재고·전략·승인 흐름 라우팅"
			],
			[
				"TanStack Table",
				"대용량 표",
				"계열사·채널·상품·로트·예약 capacity 필터/정렬/페이지네이션"
			],
			[
				"Vite + pnpm",
				"빌드·패키지",
				"빠른 개발 피드백과 재현 가능한 의존성 관리"
			],
			[
				"Playwright + Vitest",
				"검증",
				"핵심 사용자 흐름 E2E와 계산·상태 단위 테스트"
			]
		]
	},
	backend: {
		label: "백엔드",
		summary: "인증·권한·배치·시뮬레이션·승인 이력을 하나의 API 경계로 관리",
		items: [
			[
				"Java 17",
				"런타임",
				"현재 프로젝트 기준 엔터프라이즈 JVM 버전"
			],
			[
				"Spring Boot 3.5.16",
				"API·애플리케이션",
				"계열사·상품·재고·전략·승인 도메인 구성"
			],
			[
				"Spring Security + JWT",
				"인증·인가",
				"계열사·채널·역할 scope를 서버에서 검증"
			],
			[
				"Spring Batch",
				"정기 처리",
				"재고 갱신·위험 분석·판매 결과 집계와 재실행 관리"
			],
			[
				"Flyway",
				"스키마 변경",
				"Oracle 스키마를 버전과 마이그레이션으로 추적"
			],
			[
				"MyBatis",
				"데이터 접근",
				"공통 상품키·로트·예약·재고·이력 조회 SQL을 명시적으로 관리"
			],
			[
				"JUnit",
				"단위·통합 테스트",
				"권한·계산·상태 전이·배치 멱등성 검증"
			]
		]
	},
	data: {
		label: "데이터",
		summary: "정형 원장과 빠른 조회 계층을 분리해 계산의 재현성과 응답성을 함께 확보",
		items: [
			[
				"Oracle",
				"업무 원장",
				"상품·옵션·SKU·재고·판매·비용·승인·감사 이력 저장"
			],
			[
				"Redis",
				"캐시·단기 상태",
				"대시보드 집계·세션·중복 요청 키·임시 시뮬레이션 캐시"
			],
			[
				"공통 canonical 모델",
				"통합 기준",
				"계열사 원천키와 공통 상품/서비스·capacity 키를 매핑"
			],
			[
				"이력·lineage",
				"증빙",
				"원천 시각·버전·단위·결측·중복·계산 버전을 보존"
			]
		]
	},
	infra: {
		label: "인프라·운영",
		summary: "배포·트래픽·파일·알림·부하·관제를 운영 가능한 단위로 분리",
		items: [
			[
				"Docker + Docker Compose",
				"실행 환경",
				"개발·테스트·운영 구성 차이를 줄이는 컨테이너화"
			],
			[
				"Jenkins + Git/GitHub",
				"CI/CD",
				"테스트·빌드·배포와 변경 이력 관리"
			],
			[
				"Nginx",
				"웹 진입점",
				"정적 자산·API 라우팅·TLS 종료·기본 보호"
			],
			[
				"AWS S3",
				"파일·증빙",
				"첨부·배치 산출물·감사 증빙을 비공개 저장"
			],
			[
				"k6",
				"부하 테스트",
				"대시보드·시뮬레이션·배치 API의 성능 기준 검증"
			],
			[
				"Microsoft Teams API",
				"승인 알림",
				"승인 요청·결과와 서비스 링크를 전달하며 기록은 서비스에 남김"
			]
		]
	},
	ai: {
		label: "AI·모니터링",
		summary: "계산은 결정론적으로, 설명은 검증 가능한 근거와 비용을 남기는 구조",
		items: [
			[
				"Spring AI",
				"AI adapter",
				"모델 공급자 변경을 격리하고 전략 설명·요약을 호출"
			],
			[
				"LLM 모델",
				"미정·선정 필요",
				"품질·비용·보존·학습 사용·리전 정책 검토 후 결정"
			],
			[
				"Vector DB",
				"미정·선정 필요",
				"정책·상품 속성·과거 승인 사례 검색 필요성 검증 후 결정"
			],
			[
				"Sentry",
				"애플리케이션 오류",
				"프론트·백엔드 예외와 사용자 영향 추적"
			],
			[
				"Elasticsearch / Logstash / Kibana",
				"로그 분석",
				"배치·권한·Teams 전달·계산 원장 탐색과 보존"
			],
			[
				"Prometheus / Grafana",
				"지표·대시보드",
				"API 지연·배치 신선도·큐·외부 연동 성공률 관찰"
			]
		]
	}
};
function TechStackPage() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("all");
	const tabs = [
		["all", "전체"],
		["frontend", "프론트엔드"],
		["backend", "백엔드"],
		["data", "데이터"],
		["infra", "인프라·운영"],
		["ai", "AI·모니터링"]
	];
	const visible = activeTab === "all" ? Object.entries(stacks) : [[activeTab, stacks[activeTab]]];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "03-C · Tech stack & architecture"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"4개 계열사 통합 서비스를 위한",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "현재 기술 스택" })
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "상품·재고·예약 capacity를 공통 모델로 연결하고, 권한·계산·승인·증빙을 분리해 운영합니다. 아래 목록은 현재 합의된 스택만 반영합니다." }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-hero-points",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "공통" }), " React 19 · Java 17 · Oracle"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "검증" }), " Playwright · Vitest · k6"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "관제" }), " Sentry · ELK · Prometheus/Grafana"] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "affiliate-tabs",
						role: "tablist",
						"aria-label": "기술 영역 선택",
						children: tabs.map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": activeTab === id,
							className: activeTab === id ? "affiliate-tab active" : "affiliate-tab",
							onClick: () => setActiveTab(id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: id === "all" ? "전체 아키텍처" : stacks[id].summary })]
						}, id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Architecture map"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "기술은 기능 경계를 따라 배치합니다." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "계열사별 차이는 데이터 계약과 정책으로 흡수하고, 인증·계산·승인·관제는 공통 플랫폼으로 관리합니다." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "tech-stack-sections",
					children: visible.map(([id, stack]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "stack-card",
						style: {
							display: "block",
							padding: 24
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: {
								display: "flex",
								justifyContent: "space-between",
								alignItems: "baseline",
								gap: 16,
								flexWrap: "wrap"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									fontSize: "1.3rem",
									margin: "8px 0"
								},
								children: stack.label
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									color: "var(--muted)",
									fontSize: 12,
									margin: 0,
									maxWidth: 520
								},
								children: stack.summary
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: {
								overflowX: "auto",
								marginTop: 18
							},
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: {
									width: "100%",
									borderCollapse: "collapse",
									fontSize: 12
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: {
										borderBottom: "2px solid var(--line)",
										textAlign: "left"
									},
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: 10 },
											children: "기술"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: 10 },
											children: "역할"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
											style: { padding: 10 },
											children: "적용 기준"
										})
									]
								}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: stack.items.map(([technology, role, use]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: { borderBottom: "1px solid var(--line)" },
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: 10,
												fontWeight: 700
											},
											children: technology
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: 10,
												color: "var(--blue)"
											},
											children: role
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: {
												padding: 10,
												color: "var(--muted)"
											},
											children: use
										})
									]
								}, technology)) })]
							})
						})]
					}, id))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "Decision rules"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "기술보다 먼저 지키는 운영 원칙" })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
					className: "metric-grid",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "metric-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "01 · 권한"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "metric-value",
									children: "서버 검증"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "계열사·채널·역할 scope와 원가·마진 필드 노출을 API에서 강제합니다." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "metric-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "02 · 계산"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "metric-value",
									children: "재현성"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "기준선 snapshot, 데이터 cutoff, 수식·모델 버전을 함께 저장합니다." })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "metric-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "03 · AI"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "metric-value",
									children: "Fail closed"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "법규·소유권·신선도·capacity·데이터 품질이 확인되지 않으면 추천하지 않습니다." })
							]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { TechStackPage as default };
