import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import Link from "./link-BjpPdlMN.js";
import { n as Stagger, t as Reveal } from "./reveal-ASYv3BuO.js";
//#region src/app/formulas/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function FormulasPage() {
	const [activeVersion, setActiveVersion] = (0, import_react.useState)("A");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "03-B · Formula & Financial Engine"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"AI 재고 처리 전략의",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "수학적 수식 및 산정 체계" })
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "수식의 각 변수와 비즈니스 의미, 글로벌 학술 기준부터 현대백화점 현장 적용까지 초보자도 한눈에 알 수 있도록 3가지 버전별 상세 설명과 산출 방식을 제공합니다." }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							marginTop: "24px",
							background: "linear-gradient(135deg, rgba(15, 76, 129, 0.25), rgba(42, 157, 143, 0.25))",
							border: "1px solid rgba(42, 157, 143, 0.5)",
							padding: "16px 20px",
							borderRadius: "12px",
							color: "#fff",
							fontSize: "0.92rem",
							display: "flex",
							alignItems: "center",
							gap: "12px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: { fontSize: "1.4rem" },
							children: "🔗"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							style: {
								color: "#4ea8de",
								fontSize: "0.98rem"
							},
							children: "교차 출처 표기 (Cross-Validated Source)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							style: {
								margin: "4px 0 0 0",
								opacity: .9
							},
							children: [
								"현대백화점(버전 A)과 글로벌 표준(버전 B/C)에서 중복으로 나오는 공통 핵심 수식(ROS, WOS, ST%, 매몰원가 제외, 회피비용 이익화, RAG 0원 수식)은",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									style: {
										color: "#e9c46a",
										marginLeft: "4px"
									},
									children: "'현대백화점 실무 데이터와 글로벌 학술 출처(Oracle Retail, INFORMS, McKinsey, Smith & Agrawal 2017)에서 교차 검증된 공통 출처 수식'"
								}),
								"입니다."
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: "12px",
							marginTop: "24px",
							flexWrap: "wrap",
							background: "rgba(255, 255, 255, 0.08)",
							padding: "8px",
							borderRadius: "12px",
							border: "1px solid rgba(255, 255, 255, 0.15)"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveVersion("A"),
								style: {
									flex: 1,
									minWidth: "220px",
									padding: "14px 18px",
									borderRadius: "8px",
									border: "none",
									cursor: "pointer",
									textAlign: "left",
									transition: "all 0.2s ease",
									background: activeVersion === "A" ? "var(--color-brand-primary, #0f4c81)" : "transparent",
									color: "#fff",
									boxShadow: activeVersion === "A" ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "0.78rem",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											opacity: .8
										},
										children: "버전 A (Hyundai Specific)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "1.05rem",
											fontWeight: 700,
											marginTop: "2px"
										},
										children: "🏢 현대백화점 전용"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "0.82rem",
											opacity: .85,
											marginTop: "4px"
										},
										children: "직매입/특약매입, H.Point, 올바로 폐기, 점포간 이동"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveVersion("B"),
								style: {
									flex: 1,
									minWidth: "220px",
									padding: "14px 18px",
									borderRadius: "8px",
									border: "none",
									cursor: "pointer",
									textAlign: "left",
									transition: "all 0.2s ease",
									background: activeVersion === "B" ? "var(--color-brand-primary, #0f4c81)" : "transparent",
									color: "#fff",
									boxShadow: activeVersion === "B" ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "0.78rem",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											opacity: .8
										},
										children: "버전 B (Global Standard)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "1.05rem",
											fontWeight: 700,
											marginTop: "2px"
										},
										children: "🌐 글로벌/일반 리테일 표준"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "0.82rem",
											opacity: .85,
											marginTop: "4px"
										},
										children: "McKinsey, INFORMS, Dynamic Markdown, Walmart"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActiveVersion("C"),
								style: {
									flex: 1,
									minWidth: "220px",
									padding: "14px 18px",
									borderRadius: "8px",
									border: "none",
									cursor: "pointer",
									textAlign: "left",
									transition: "all 0.2s ease",
									background: activeVersion === "C" ? "var(--color-brand-primary, #0f4c81)" : "transparent",
									color: "#fff",
									boxShadow: activeVersion === "C" ? "0 4px 12px rgba(0,0,0,0.15)" : "none"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "0.78rem",
											textTransform: "uppercase",
											letterSpacing: "0.05em",
											opacity: .8
										},
										children: "버전 C (Integrated Version)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "1.05rem",
											fontWeight: 700,
											marginTop: "2px"
										},
										children: "⚖️ 전사 통합 종합 프레임워크"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: {
											fontSize: "0.82rem",
											opacity: .85,
											marginTop: "4px"
										},
										children: "재무 증분 + ESG 회피 + 브랜드 위험 + AI TCO"
									})
								]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section band",
			style: { background: "var(--color-bg-subtle)" },
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "Beginner Friendly Guide"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "수식 기호 & 용어 알기 쉬운 한글 풀이집" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead",
							children: "마케팅, 물류, 재무 개념이 처음인 분들도 한눈에 이해할 수 있는 핵심 지표 및 기호 해설입니다."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						overflowX: "auto",
						background: "#fff",
						borderRadius: "12px",
						padding: "16px",
						boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						style: {
							width: "100%",
							borderCollapse: "collapse",
							fontSize: "0.92rem"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							style: {
								borderBottom: "2px solid var(--color-border)",
								background: "var(--color-bg-subtle)"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									style: {
										padding: "12px",
										width: "15%"
									},
									children: "수식 기호/용어"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									style: {
										padding: "12px",
										width: "20%"
									},
									children: "한글 용어명"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									style: {
										padding: "12px",
										width: "40%"
									},
									children: "쉬운 개념 설명 (비즈니스 직관)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									style: {
										padding: "12px",
										width: "25%"
									},
									children: "실무 이해 예시"
								})
							]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "ROS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "Rate of Sale (판매속도)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "하루 또는 주간 단위로 특정 상품이 평균 몇 개씩 팔리는지 나타내는 소진 속도 지표입니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "최근 7일간 70개 팔렸다면 ROS = 10개/일"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "WOS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "Weeks of Supply (재고 주수)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "현재 남아있는 재고가 추가 입고 없이 앞으로 몇 주 동안 버틸 수 있는지 나타냅니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "재고 500개 / 주당 50개 소진 = WOS 10주 버텼음"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "ST%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "Sell-Through Rate (소진율)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "매장에 입고된 전체 상품 중 몇 %가 고객에게 실제 판매되었는지 나타내는 성과 백분율입니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "100개 입고 중 80개 판매 시 ST% = 80%"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "Lift%"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "Demand Lift (수요 증대율)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "할인이나 타겟 쿠폰 마케팅을 적용했을 때 평소 대비 판매량이 몇 배/몇 % 뛰었는지 측정합니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "평소 5개 → 35% 할인 후 25개 팔리면 Lift% = +400%"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "Sunk Cost"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "매몰원가 (취득원가)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "이미 과거에 지출되어 할인/폐기/기부 등 어떤 선택을 하든 되돌릴 수 없는 비용입니다. 손익 비교에서 제외합니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "1년 전 결제 완료된 니트 매입가 12만원"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "Avoided Cost"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "회피비용 (절감액)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "재고를 더 일찍 팔아서 피하게 된 폐기물 위탁 처리비, 전자인계 행정비, 창고 임대료 등 실제 절약한 돈입니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "식품 소진으로 폐기 위탁비 172만원 회피"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "ΔProfit"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "Delta Profit (증분이익)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "아무 프로모션도 하지 않는 '기준선' 대비, AI 전략을 실행하여 추가로 개선된 순현금 손익액입니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "AI 전략 손익(4,648만원) − 기준선 손익(570만원) = +4,078만원"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "C_LLM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "LLM API 토큰 비용"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "AI가 백화점 재고를 분석하고 추천 사유를 사람 언어로 작성할 때 발생하는 계산 원가입니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "입력 2,500t + 출력 800t = 1건당 약 8.5원"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								style: { borderBottom: "1px solid var(--color-border)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontFamily: "monospace",
											fontWeight: 600
										},
										children: "Cash_AI"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: {
											padding: "12px",
											fontWeight: 600
										},
										children: "AI 순현금 손익"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "할인 판매 매출에서 가변 마케팅/물류비를 빼고, 회피 폐기비를 더한 뒤 AI 판단 원가를 차감한 최종 순현금 이익입니다."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										style: { padding: "12px" },
										children: "매출 − 물류비 + 회피폐기비 − AI원가"
									})
								]
							})
						] })]
					})
				})]
			})
		}),
		activeVersion === "A" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "VERSION A · HYUNDAI SPECIFIC"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "현대백화점 전용 수식 및 재고 처리 전략" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "현대백화점의 직매입/특약매입 매입 형태, H.Point/현대식품관 앱 타겟 마케팅, 올바로 시스템 폐기 행정비, 본점-아울렛 간 전송 물류를 반영한 백화점 맞춤 수식 체계입니다."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
						className: "metric-grid",
						style: { marginBottom: "32px" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "백화점 원칙 01 · 교차 검증"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "매몰원가 분리"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "취득원가(장부가)" }), "는 이미 지출된 매몰비용이므로, 할인이나 폐기 등 전략 선택으로 변하지 않는 현금 흐름입니다. [Oracle Retail & INFORMS 교차 검증]"] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "백화점 원칙 02 · 교차 검증"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "회피비용의 손익화"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"D-3 식품이나 시즌 경과 의류를 제때 소진하여 ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "폐기 위탁비, 올바로 행정비, 창고 보관비" }),
										"를 피했다면, 이 절감액(Avoided Cost)은 정당한 현금성 이익으로 인정합니다. [McKinsey 교차 검증]"
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "백화점 원칙 03 · 교차 검증"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "UI 슬라이더 0원 법칙"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"담당자가 시뮬레이터에서 할인율 슬라이더를 100번 움직여도 LLM API를 재호출하지 않고 로컬 수식 엔진으로 재계산하므로 ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "추가 AI 비용(C_AI_slider)은 0원" }),
										"입니다."
									] })
								]
							})
						]
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
									marginBottom: "12px",
									color: "var(--color-brand-primary)"
								},
								children: "1. AI 결정원가 (C_AI_case) 산식 및 변수 정의"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									background: "var(--color-bg-subtle)",
									padding: "16px",
									borderRadius: "8px",
									fontFamily: "monospace",
									fontSize: "1rem",
									borderLeft: "4px solid var(--color-brand-primary)",
									marginBottom: "16px",
									overflowX: "auto"
								},
								children: "C_AI_case = C_DATA + C_FEATURE + C_SEARCH + C_MODEL + C_LLM + C_TOOL + C_ORCH + C_HUMAN + C_EVAL + C_SHARED"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { overflowX: "auto" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									style: {
										width: "100%",
										borderCollapse: "collapse",
										fontSize: "0.92rem"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: {
											borderBottom: "2px solid var(--color-border)",
											background: "var(--color-bg-subtle)"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "기호 (Symbol)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "비즈니스 용어"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "의미 및 계산 방법 (쉬운 설명)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "현대백화점 실무 1건당 예시 단가"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "C_LLM"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "LLM API 토큰비"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "GPT-5/Claude 등 초거대언어모델에 입력한 재고 정보 및 출력된 전략 설명서 토큰 비용"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													style: { padding: "10px" },
													children: ["입력 2,500t + 출력 800t = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "약 8.5원" })]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "C_DATA"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "데이터 파이프라인비"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "백화점 SAP ERP 및 WMS 창고 시스템에서 재고·보관일수를 조회하는 DB 쿼리 소모비"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													style: { padding: "10px" },
													children: ["DB 서버 클라우드 트래픽 = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "약 0.5원" })]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "C_SEARCH"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "유사 사례 RAG 검색비"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "과거 3개년 아울렛 이월/타임세일 승인 이력 Vector DB 임베딩 및 유사도 검색 비용"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													style: { padding: "10px" },
													children: ["Vector DB 쿼리 = ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "약 1.2원" })]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "C_HUMAN"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "사람 검토 비용"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "백화점 바이어/담당자가 AI 제안안을 검토하고 승인 버튼을 누르는 1분 동안의 인건비"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
													style: { padding: "10px" },
													children: [
														"바이어 분당 시급 = ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "약 250원" }),
														" (선택 산정)"
													]
												})
											]
										})
									] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid-2",
						style: {
							gap: "20px",
							marginBottom: "32px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack-card",
							style: {
								display: "block",
								padding: "20px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: {
										fontSize: "1.1rem",
										marginBottom: "12px",
										color: "var(--color-brand-primary)"
									},
									children: "2. 백화점 손익 및 증분이익 (ΔProfit)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "0.9rem",
										marginBottom: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "기준선 손익 (Profit_base):" }), " 프로모션 없이 기존 방침대로 방치 후 폐기 시의 현금 유입/유출."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontFamily: "monospace",
										background: "var(--color-bg-subtle)",
										padding: "10px",
										borderRadius: "6px",
										fontSize: "0.9rem",
										marginBottom: "12px"
									},
									children: "Profit_base = Revenue_base - Cost_waste_base"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "0.9rem",
										marginBottom: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "AI 전략 손익 (Profit_ai):" }), " 타겟 할인으로 늘어난 매출에서 마케팅·물류비를 빼고, 회피 폐기비를 더한 손익."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontFamily: "monospace",
										background: "var(--color-bg-subtle)",
										padding: "10px",
										borderRadius: "6px",
										fontSize: "0.9rem",
										marginBottom: "12px"
									},
									children: "Profit_ai = Revenue_ai - Cost_promo + AvoidedWaste - C_AI_case"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontSize: "0.9rem",
										fontWeight: 700,
										color: "var(--color-brand-primary)"
									},
									children: "ΔProfit = Profit_ai - Profit_base"
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "stack-card",
							style: {
								display: "block",
								padding: "20px"
							},
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									style: {
										fontSize: "1.1rem",
										marginBottom: "12px",
										color: "var(--color-brand-primary)"
									},
									children: "3. 직매입 vs 특약매입 구조 차이"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "0.88rem",
										marginBottom: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "직매입 (Direct Purchase):" }), " 백화점이 재고 소유권을 100% 가짐. 매출 전체를 인식하며, 미판매 폐기 손실도 백화점 현금 흐름에 직접 반영됨."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontFamily: "monospace",
										background: "var(--color-bg-subtle)",
										padding: "8px",
										borderRadius: "4px",
										fontSize: "0.85rem",
										marginBottom: "12px"
									},
									children: "HDS_Margin_direct = Revenue - Cost_goods - Cost_disposal"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: {
										fontSize: "0.88rem",
										marginBottom: "8px"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "특약매입 (Special Purchase):" }), " 협력업체가 재고 소유. 백화점은 약정 수수료율(예: 25%)만 이익으로 가져가며, 반품권이 확보되어 있음."]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									style: {
										fontFamily: "monospace",
										background: "var(--color-bg-subtle)",
										padding: "8px",
										borderRadius: "4px",
										fontSize: "0.85rem"
									},
									children: "HDS_Margin_special = Revenue × FeeRate - HDS_Promo_Share"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								style: {
									background: "#0f4c81",
									color: "#fff",
									padding: "4px 8px",
									borderRadius: "4px"
								},
								children: "실무 계산 예시 (Case A)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									fontSize: "1.2rem",
									margin: "12px 0 8px 0"
								},
								children: "무역센터점 B1 식품관 직매입 한우 선물세트 500개 (소비기한 D-3일 임박)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: "0.9rem",
									color: "var(--color-text-muted)",
									marginBottom: "16px"
								},
								children: "정가 150,000원, 취득원가 80,000원. 소비기한 지나면 올바로 시스템 등록 후 특수 수송 폐기비 개당 4,000원 발생."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
											textAlign: "left"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "항목"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "대안 A (기준선: 방치 후 폐기)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "대안 B (AI 추천: 35% 타임세일 & 앱 알림)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "증분 효과 (Δ)"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "판매/폐기 수량"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "50개 판매 / 450개 폐기"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "480개 판매 / 20개 폐기"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														color: "green",
														fontWeight: 600
													},
													children: "+430개 소진, -430개 폐기 방지"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "총 매출액"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "7,500,000원 (50개 @ 15만)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "46,800,000원 (480개 @ 9.75만)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														color: "green",
														fontWeight: 600
													},
													children: "+39,300,000원 매출 증가"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "폐기물 처리비"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														color: "#e63946"
													},
													children: "-1,800,000원 (450개 × 4천원)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "-80,000원 (20개 × 4천원)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														color: "green",
														fontWeight: 600
													},
													children: "+1,720,000원 폐기비 회피"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "마케팅 & AI비용"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "0원"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "-240,015원 (앱 푸시+포장 24만, AI 15원)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "-240,015원 비용 발생"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { background: "var(--color-bg-subtle)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 700
													},
													children: "최종 순현금 손익"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600,
														color: "#e63946"
													},
													children: "5,700,000원"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600,
														color: "var(--color-brand-primary)"
													},
													children: "46,479,985원"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600,
														color: "var(--color-brand-primary)"
													},
													children: "ΔProfit = +40,779,985원"
												})
											]
										})
									] })]
								})
							})
						]
					})
				]
			})
		}),
		activeVersion === "B" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "VERSION B · GLOBAL RETAIL STANDARDS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "글로벌 리테일 표준 수식 (McKinsey, INFORMS, Walmart)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "INFORMS 학술 저널, McKinsey 글로벌 유통 보고서, Smith & Agrawal(2017) Dynamic Pricing, Walmart/Target 공급망 Newsvendor 모델에 기반한 글로벌 학술 및 리테일 표준 수식입니다."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
						className: "metric-grid",
						style: { marginBottom: "32px" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "글로벌 학술 01 · 교차 검증"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "Newsvendor 최적화"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"품절로 인한 기회손실비용(Shortage Cost)과 과잉 재고로 인한 보관/폐기비용(Overage Cost) 간의 균형을 맞추는 최적 임계 확률 ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "F(Q*) = Cu / (Cu + Co)" }),
										" 공식 적용. [INFORMS 교차 검증]"
									] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "글로벌 학술 02 · 교차 검증"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "다기간 동적 마크다운"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Smith & Agrawal(2017) 표준 모델에 따라 가격 하락에 따른 수요 탄력성 d_t(p_t) 변화와 기간별 재고 보유비용(Holding Cost h)을 통합하여 기대 매출을 극대화. [Oracle & INFORMS 교차 검증]" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "metric-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "글로벌 학술 03 · 교차 검증"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "metric-value",
										children: "잔존가치 (Salvage Value)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "시즌 종료 후 덤핑 세일, 3rd Party 딜러 매각, 자원 순환 리사이클을 통해 회수 가능한 잔존 가치 c_salvage를 최적화 수식의 하방 안전망으로 설정. [McKinsey 교차 검증]" })
								]
							})
						]
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
									marginBottom: "12px",
									color: "var(--color-brand-primary)"
								},
								children: "1. 글로벌 다기간 동적 마크다운 (Dynamic Markdown Optimization) 수식"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: {
									background: "var(--color-bg-subtle)",
									padding: "16px",
									borderRadius: "8px",
									fontFamily: "monospace",
									fontSize: "0.95rem",
									borderLeft: "4px solid var(--color-brand-primary)",
									marginBottom: "16px",
									overflowX: "auto"
								},
								children: [
									"max ∑",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "t=1" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", { children: "T" }),
									" E[ p",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "t" }),
									" · d",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "t" }),
									"(p",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "t" }),
									", s",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "t" }),
									") - h · I",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "t" }),
									" - c",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "salvage" }),
									" · max(0, I",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("sub", { children: "T" }),
									") ]"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { overflowX: "auto" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									style: {
										width: "100%",
										borderCollapse: "collapse",
										fontSize: "0.92rem"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: {
											borderBottom: "2px solid var(--color-border)",
											background: "var(--color-bg-subtle)"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "수식 기호"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "학술 변수명"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "의미 및 개념 설명 (McKinsey / INFORMS)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "글로벌 유통 기업 적용 단위"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "p_t"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "Period Price"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "기간 t에서의 최적 할인 판매 가격 (예: 1주차 정가, 2주차 20% off, 3주차 40% off)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "달러 ($) / 원화 (₩)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "d_t(p_t, s_t)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "Demand Function"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "가격 p_t와 계절성/요일/날씨 신호 s_t에 따른 확률적 예상 수요 수량"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "판매 수량 (Units)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "h · I_t"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "Holding Cost"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "기간 t 동안 잔여 재고 I_t를 창고 및 매장에 보관하면서 발생하는 단위당 보유 비용"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "단위당 하루 보유비 ($/unit/day)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "c_salvage"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontWeight: 600
													},
													children: "Salvage Value"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "최종 기간 T 이후 남은 미소진 재고 I_T를 외부 딜러 매각 또는 리사이클로 회수하는 단위당 잔존가치"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "단위당 회수금액 ($/unit)"
												})
											]
										})
									] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stack-card",
						style: {
							display: "block",
							padding: "24px"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								style: {
									background: "#2a9d8f",
									color: "#fff",
									padding: "4px 8px",
									borderRadius: "4px"
								},
								children: "글로벌 실무 계산 예시 (Case B)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								style: {
									fontSize: "1.2rem",
									margin: "12px 0 8px 0"
								},
								children: "Walmart/Global Fashion 브랜드 의류 이월재고 1,000개 다기간 최적화"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									fontSize: "0.9rem",
									color: "var(--color-text-muted)",
									marginBottom: "16px"
								},
								children: "정가 $100, 원가 $40. 3주간의 동적 마크다운(1주차 $100 → 2주차 $70 → 3주차 $50 → Salvage $10) 적용 시뮬레이션."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
											textAlign: "left"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "기간 (Period)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "가격 (Price p_t)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "예상 판매량 (d_t)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "기간 매출 (Revenue)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "재고 보유비 (h · I_t)"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "8px" },
												children: "누적 순수익"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "1주차 (정가)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$100"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "300개"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$30,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "-$700 (700개 × $1/wk)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$29,300"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "2주차 (30% off)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$70"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "400개"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$28,000"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "-$300 (300개 × $1/wk)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "+$27,700 (누적 $57,000)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "3주차 (50% off)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$50"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "250개"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$12,500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "-$50 (50개 × $1/wk)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "+$12,450 (누적 $69,450)"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600
													},
													children: "종료 후 (Salvage)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$10 (c_salvage)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "50개 (매각)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$500"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "8px" },
													children: "$0"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "8px",
														fontWeight: 600,
														color: "var(--color-brand-primary)"
													},
													children: "총 $69,950 회수"
												})
											]
										})
									] })]
								})
							})
						]
					})
				]
			})
		}),
		activeVersion === "C" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "VERSION C · INTEGRATED COMBINED VERSION"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "전사 통합 종합 프레임워크 (Integrated Model)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead",
								children: "현대백화점 현장 특화 변수(H.Point, 올바로 폐기비, 특약매입)와 글로벌 학술 표준(Newsvendor, Dynamic Markdown, AI TCO)을 하나로 융합한 그룹 전사 통합 최적화 모델입니다."
							})
						]
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
									marginBottom: "12px",
									color: "var(--color-brand-primary)"
								},
								children: "1. 전사 통합 최종 순가치 (Net Value Final) 산식"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									background: "var(--color-bg-subtle)",
									padding: "16px",
									borderRadius: "8px",
									fontFamily: "monospace",
									fontSize: "0.95rem",
									borderLeft: "4px solid var(--color-brand-primary)",
									marginBottom: "16px",
									overflowX: "auto"
								},
								children: "NetValue_final = ΔProfit_financial + AvoidedCost_ESG - RiskPenalty_brand - TCO_AI_total"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: { overflowX: "auto" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
									style: {
										width: "100%",
										borderCollapse: "collapse",
										fontSize: "0.92rem"
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
										style: {
											borderBottom: "2px solid var(--color-border)",
											background: "var(--color-bg-subtle)"
										},
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "통합 구성 요소"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "포함되는 산하 수식 및 변수"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: { padding: "10px" },
												children: "통합 모델에서의 가치 및 역할 (교차 출처)"
											})
										]
									}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "ΔProfit_financial"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "Revenue_ai - Cost_logistics - Profit_base"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "순수 재무적 현금 개선액 [현대백화점 직매입/특약매입 & Oracle Retail 교차]"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "AvoidedCost_ESG"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "Cost_waste_saved + Cost_carbon_credit"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "폐기물 감축 및 자원순환(Project100)으로 인한 ESG 비재무 회피 가치 [McKinsey 교차]"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "RiskPenalty_brand"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "ExcessDiscount_Rate × Brand_Image_Index"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "과도한 무차별 할인으로 고급 백화점 브랜드 이미지가 실추되는 위험 감정 산식"
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											style: { borderBottom: "1px solid var(--color-border)" },
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														padding: "10px",
														fontFamily: "monospace",
														fontWeight: 600
													},
													children: "TCO_AI_total"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "C_AI_case (LLM + Pipeline + RAG + Human-in-loop)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: { padding: "10px" },
													children: "AI 시스템을 운영하고 판단을 내리는 데 투입된 총 소유 비용 (TCO) [OpenAI & McKinsey]"
												})
											]
										})
									] })]
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "callout",
						style: { borderLeftColor: "var(--color-brand-primary)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "⚖️ 통합 AI ROI 산정 공식 (Cross-Validated Integrated ROI)" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: {
									fontFamily: "monospace",
									fontSize: "1.1rem",
									marginTop: "8px",
									fontWeight: 700
								},
								children: "ROI_integrated (%) = ( NetValue_final ÷ TCO_AI_total ) × 100%"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								style: {
									marginTop: "8px",
									fontSize: "0.9rem",
									color: "var(--color-text-muted)"
								},
								children: "재무적 이익뿐 아니라 ESG 폐기 회피 가치와 브랜드 위험 차감액을 모두 종합하여, AI 투입 비용 1원 대비 그룹 전체에 창출된 실질 순가치의 비율을 정밀 산출합니다."
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
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "수식 체계를 바탕으로 시뮬레이션을 실행해보세요" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: { marginTop: "4px" },
						children: "실제 백화점 재고 데이터를 바탕으로 슬라이더 조작 및 이익 계산 과정을 직접 경험하실 수 있습니다."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							display: "flex",
							gap: "12px"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "button button-secondary",
							href: "/glossary",
							children: "용어 사전 보기 →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							className: "button button-primary",
							href: "/product-tour",
							children: "시뮬레이션 체험하기 →"
						})]
					})]
				})
			})
		})
	] });
}
//#endregion
export { FormulasPage as default };
