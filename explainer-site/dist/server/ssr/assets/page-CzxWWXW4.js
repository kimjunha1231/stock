import { t as require_jsx_runtime, w as __toESM, y as require_react } from "../index.js";
import Link from "./link-BjpPdlMN.js";
import { t as Reveal } from "./reveal-ASYv3BuO.js";
import { i as sources } from "./content-DZpSpqS0.js";
//#region src/components/source-note.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
function SourceNote({ source }) {
	const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "source-kind",
			children: source.kind
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: source.title }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: source.location })
	] });
	return source.url?.startsWith("http") ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "source-note",
		href: source.url,
		target: "_blank",
		rel: "noreferrer",
		children: [content, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "↗"
		})]
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		className: "source-note",
		href: source.url ?? "/sources",
		children: [content, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			children: "→"
		})]
	});
}
//#endregion
//#region src/app/formulas/page.tsx
var profiles = [
	{
		id: "wellness",
		label: "현대웰니스",
		short: "건강기능식품·영양제",
		accent: "#15825f",
		inventoryUnit: "로트별 판매 가능 수량(Q_available)",
		timeAxis: "소비기한·최소 잔여기한",
		keyInputs: [
			"SKU·브랜드·성분·기능·대상",
			"로트·소비기한·보관조건",
			"재고·예약·판매속도",
			"채널별 가격·쿠폰·배송"
		],
		variableCosts: [
			"배송·포장·결제 수수료",
			"쿠폰·포인트 부담액",
			"반품 검수·재판매 비용",
			"회수·폐기 또는 공급사 회수 비용"
		],
		hardStops: [
			"소비기한·보관조건 미확인",
			"필수 상품 표시·주의사항 누락",
			"판매 권한·공급사 회수 조건 미확인"
		],
		riskSignals: [
			"잔여기한 압박",
			"느린 ROS·낮은 소진율",
			"임박 로트의 예상 폐기비",
			"건강 관련 설명의 근거 부족"
		],
		sourceIds: [
			"affiliate-wellness",
			"wellness-foodsafety",
			"wellness-law",
			"food-label-standards"
		],
		note: "공식몰의 상품 분류·소비기한·임박 표시는 날짜와 상품 속성을 별도 입력해야 한다는 근거로 사용합니다. 실제 할인 한도와 정산 부담률은 내부 계약 데이터가 필요합니다."
	},
	{
		id: "travel",
		label: "더현대트래블",
		short: "항공·호텔·패키지·부가서비스",
		accent: "#2563eb",
		inventoryUnit: "예약 가능 좌석·객실·서비스 슬롯",
		timeAxis: "출발일·발권/예약 마감",
		keyInputs: [
			"상품·공급사·출발일",
			"총/예약/잔여 capacity",
			"수수료·공급가·환율 snapshot",
			"취소·환불·노쇼 규정"
		],
		variableCosts: [
			"발권·결제·상담 처리비",
			"공급사 취소·위약금",
			"제휴채널 수수료",
			"환율·변경·재예약 비용"
		],
		hardStops: [
			"출발일·예약 마감 누락",
			"공급사 규정·capacity 불일치",
			"환불/위약금 규정 미확인"
		],
		riskSignals: [
			"출발일까지 남은 일수",
			"capacity 잔량 또는 과소/과대 예약",
			"취소위약금 노출",
			"환율·공급가 변동성"
		],
		sourceIds: [
			"affiliate-travel",
			"travel-exhibition",
			"travel-cancel",
			"travel-easylaw"
		],
		note: "여행은 물리 재고가 아니므로 소비기한·폐기비를 그대로 적용하지 않습니다. 미판매 capacity와 임박 출발의 공급사 위약금·기회비용을 회피비용으로 계산합니다."
	},
	{
		id: "livart",
		label: "현대리바트",
		short: "가구·리빙·인테리어",
		accent: "#b87818",
		inventoryUnit: "제품·옵션·프로젝트 단위 재고",
		timeAxis: "창고 보관일·납기·설치일",
		keyInputs: [
			"모델·옵션·부피·중량",
			"창고·전시·프로젝트 상태",
			"생산/배송/설치 lead time",
			"지역별 설치 슬롯·AS 이력"
		],
		variableCosts: [
			"창고·전시 공간 대체가치",
			"라스트마일·설치 인건비",
			"파손·재배송·회수 비용",
			"반품·AS·주문제작 취소 비용"
		],
		hardStops: [
			"설치 슬롯·배송 가능 지역 없음",
			"주문제작 생산 착수 상태 불명",
			"소유권·반품·AS 조건 미확인"
		],
		riskSignals: [
			"부피×장기보관일",
			"납기 대비 생산 지연",
			"설치 capacity 부족",
			"파손·반품·AS 비용 상승"
		],
		sourceIds: [
			"affiliate-livart-product",
			"affiliate-livart-catalog",
			"livart-corporation",
			"livart-smart-factory"
		],
		note: "공식 상품 페이지의 설치 연락·배송 연기 안내와 카탈로그의 배송·설치·AS 범위를 반영합니다. 제품 수량만 늘리는 전략은 설치 capacity를 넘으면 차단합니다."
	},
	{
		id: "greenfood",
		label: "현대그린푸드",
		short: "식자재·리테일·케어푸드",
		accent: "#0f766e",
		inventoryUnit: "로트·소비기한별 식품 수량",
		timeAxis: "소비기한·주문 마감·배송일",
		keyInputs: [
			"SKU·로트·원산지·추적번호",
			"소비기한·온도등급·보관조건",
			"채널·거점·고객사 수요",
			"주문 마감·냉장/냉동 배송 capacity"
		],
		variableCosts: [
			"피킹·포장·냉장/냉동 배송",
			"보냉재·에너지·회수 비용",
			"폐기·음식물 처리·증빙",
			"채널 수수료·할인·반품"
		],
		hardStops: [
			"소비기한·보관조건 미확인",
			"검사·HACCP·추적 상태 이상",
			"냉장/냉동 배송 capacity 없음"
		],
		riskSignals: [
			"소비기한 압박",
			"예상 폐기량×처리단가",
			"콜드체인 capacity 부족",
			"사전예약 마감과 배송일 불일치"
		],
		sourceIds: [
			"affiliate-greenfood",
			"affiliate-greenfood-reservation",
			"greenfood-retail",
			"greenfood-lab",
			"food-label-standards",
			"mfds-storage",
			"food-expiry-setting"
		],
		note: "식자재 공급과 사전예약 서비스는 수량·마감일·배송일을 함께 관리해야 합니다. 소비기한과 보관조건은 비용보다 먼저 검증하는 법정 입력입니다."
	}
];
var sourceById = (id) => sources.find((source) => source.id === id);
function FormulaBlock({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
		className: "formula-code",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children })
	});
}
function SourceLinks({ ids }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "formula-source-links",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "근거 링크" }), ids.map((id) => {
			const source = sourceById(id);
			return source ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceNote, { source }, id) : null;
		})]
	});
}
var metadata = {
	title: "계열사 통합 수식 | InventoryOS",
	description: "현대웰니스·더현대트래블·현대리바트·현대그린푸드의 상품/서비스 특성을 공통 목적함수로 계산하는 AI 재고 처리 수식"
};
function FormulasPage() {
	const [activeId, setActiveId] = (0, import_react.useState)("wellness");
	const active = (0, import_react.useMemo)(() => profiles.find((profile) => profile.id === activeId) ?? profiles[0], [activeId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "page-hero formula-hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow",
						children: "03-B · Integrated Formula Engine"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
						"네 계열사를 하나의",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "판단 수식으로 연결합니다." })
					] }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "목적함수와 계산 순서는 통일하고, 재고 단위·처리기한·capacity·비용·하드 차단은 계열사별로 다르게 입력합니다. 공개 자료로 확인한 사실과 내부 데이터 계약이 필요한 값을 화면에서 분리해 표시합니다." }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-hero-points",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "01" }), " 공통 목적함수"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "02" }), " 계열사별 입력계약"] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "03" }), " 출처·가정 분리"] })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section formula-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "01 · One objective"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "공통 목적함수는 하나입니다." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "수량 상품과 예약 capacity 모두 “기준선보다 실제로 더 나아지는가”를 같은 방식으로 비교합니다." })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "formula-main-grid",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-panel formula-panel-dark",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "formula-label",
								children: "증분 기여현금이익"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, { children: `M_inc(s) = feasible(s) × [
  Revenue_s - VariableCost_s
  + AvoidedCost_s
  - Cannibalization_s
  - RiskPenalty_s
  - AI_CaseCost_s
  - M_baseline
]` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "이미 발생한 취득원가는 매몰원가로 분리합니다. 원가를 화면에 노출하지 않아도 서버 계산·감사 로그에는 원가 버전과 접근권한을 남깁니다." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { ids: [
								"project-policy",
								"markdown-paper",
								"markdown-perishable",
								"markdown-cannibalization"
							] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-panel",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "formula-label",
								children: "전략 실행 가능성"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, { children: `feasible(s) = 1
  ownership_ok
  ∧ legal_ok
  ∧ freshness_ok
  ∧ capacity_ok
  ∧ data_quality_ok
else 0` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "하드 차단 조건이 0이면 이익이 큰 후보도 추천하지 않습니다. 식품의 소비기한, 여행의 취소 규정, 리바트의 설치 슬롯, 웰니스 상품의 표시·보관정보가 여기에 들어갑니다." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { ids: [
								"project-policy",
								"food-label-standards",
								"travel-easylaw"
							] })
						]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight band formula-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "02 · Demand & cost"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "판매량과 비용을 같은 기준선에서 다시 계산합니다." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "formula-three-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "formula-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "formula-number",
										children: "01"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "예상 판매량 / 예약량" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, { children: `Q_s = min(Q_available,
  max(0, Q_base
    × F_time × F_price
    × F_channel × F_bundle
    × confidence))` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", { children: "Q_available" }), "은 웰니스·그린푸드의 실재고일 수도, 트래블의 좌석·객실·슬롯일 수도 있습니다."] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "formula-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "formula-number",
										children: "02"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "매출·변동비" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, { children: `Revenue_s = Q_s × P_list × (1 - discount)
            - Q_s × (coupon + point + subsidy)

VariableCost_s = Q_s × (commission
  + payment + fulfillment + return_expected)
  + campaign_fixed_cost` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "쿠폰·포인트·배송·설치·콜드체인·발권·환불처럼 전략 때문에 변하는 현금만 분리합니다." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "formula-panel",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "formula-number",
										children: "03"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "회피비용·하방" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, { children: `AvoidedCost_s = holding_avoided
  + disposal_avoided
  + supplier_penalty_avoided
  + capacity_loss_avoided

RiskPenalty_s = probability × impact` }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "트래블은 disposal을 쓰지 않고 공급사 위약금·capacity 기회비용을 넣습니다. 그린푸드는 실제 처리계약 단가를 사용합니다." })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { ids: [
						"markdown-paper",
						"markdown-perishable",
						"project-simulation",
						"travel-easylaw"
					] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section formula-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "03 · Affiliate model"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "계열사마다 달라지는 것은 입력값입니다." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "아래 탭은 현재 공개 자료에서 확인한 상품 특성과, 실제 데이터 연결 때 추가로 받아야 할 필드를 구분해 보여줍니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "affiliate-tabs",
						role: "tablist",
						"aria-label": "계열사 수식 선택",
						children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "tab",
							"aria-selected": activeId === profile.id,
							className: activeId === profile.id ? "affiliate-tab active" : "affiliate-tab",
							onClick: () => setActiveId(profile.id),
							style: { "--tab-accent": profile.accent },
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: profile.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.short })]
						}, profile.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "affiliate-detail",
						style: { "--affiliate-accent": active.accent },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "affiliate-detail-head",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										style: {
											color: active.accent,
											background: `${active.accent}16`
										},
										children: "ACTIVE MODEL"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: active.label }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: active.note })
								] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "affiliate-unit",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "재고 단위" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: active.inventoryUnit }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "시간축" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: active.timeAxis })
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "affiliate-detail-grid",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "필수 입력 요소" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: active.keyInputs.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "비용 측정 요소" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: active.variableCosts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) })] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "하드 차단" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "danger-list",
										children: active.hardStops.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", { children: "위험 신호" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", { children: active.riskSignals.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: item }, item)) })] })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { ids: active.sourceIds })
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight formula-section band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "04 · Risk score"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "위험점수는 공통, 신호는 계열사별입니다." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "등급 임계값과 가중치는 버전으로 저장하고, 하드 차단은 점수 계산보다 먼저 적용합니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "risk-layout",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "formula-panel formula-panel-dark",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "formula-label",
									children: "0–100 위험점수"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormulaBlock, { children: `RiskScore_i = 100 × Σ(w_k × z_ik)
Σw_k = 1

z_ik ∈ [0, 1]
등급 = 정상 / 주의 / 위험` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "예: 처리기한 압박, 판매속도 부족, 재고가치, 수요 불확실성, capacity 부족을 계열사별로 정규화합니다." })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "risk-cards",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "웰니스·그린푸드" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "잔여기한 · 보관조건 · 예상 폐기량" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "더현대트래블" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "출발일까지 · 예약률 · 위약금" })] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "현대리바트" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "부피·보관일 · 설치 슬롯 · 파손/AS" })] })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { ids: [
						"project-policy",
						"food-label-law",
						"mfds-storage"
					] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section formula-section",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "05 · Simulation contract"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "시뮬레이션은 이 순서로 재현됩니다." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "담당자가 바꾸는 값과 시스템이 지켜야 하는 값을 분리해, 승인 전·후 결과를 같은 버전으로 추적합니다." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "simulation-flow",
						children: [
							[
								"01",
								"기준선 snapshot",
								"현재 재고/capacity, 가격, 수요기간, 원가 버전을 고정"
							],
							[
								"02",
								"조정값 입력",
								"할인율·쿠폰·포인트·기간·적용수량을 검증"
							],
							[
								"03",
								"하드 차단",
								"소유권·법규·처리기한·배송/설치 capacity를 확인"
							],
							[
								"04",
								"예상치 계산",
								"판매량·매출·비용·회피비용·잔여재고/잔여 capacity 산출"
							],
							[
								"05",
								"후보 비교",
								"보수·기본·낙관 시나리오와 기준선 대비 M_inc 비교"
							]
						].map(([number, title, body]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "simulation-step",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: number }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: title }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: body })
							]
						}, number))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "simulation-result",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "결과로 보여줄 값"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "예상 판매량 · 예상 매출 · 증분 기여현금이익 · 마진율 · 소진일/잔여 capacity · 회피비용" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "승인된 전략은 revision과 데이터 cutoff를 함께 저장하고, 실제 판매·예약 결과가 연결되면 예측 오차를 비교합니다." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceLinks, { ids: ["project-simulation", "project-policy"] })
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-tight formula-section band",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "section-heading",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow",
							children: "06 · Scope & evidence"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "통합은 하되, 아직 확정되지 않은 것은 숨기지 않습니다." })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "evidence-grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "evidence-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										children: "P0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "이번 MVP에서 계산" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "네 계열사 상품/서비스의 공통 목적함수, 위험점수, 계열사별 입력·비용·하드 차단, 출처 링크와 시뮬레이션 결과." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "evidence-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										children: "P2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "확장으로 보류" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "교차 계열사 묶음판매, 재고 이동·공동 프로모션, 고객용 공개 카탈로그는 소유권·정산·권한 계약 확인 뒤 활성화합니다." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "evidence-card",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "pill",
										children: "DATA"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "내부 계약 필요" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "실제 원가·수수료·쿠폰 부담·capacity·반품·폐기 단가·수요 탄력성은 공식 공개 자료로 확정하지 않고 원천 시스템 연결 후 버전 관리합니다." })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "actions",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "button primary",
								href: "/sources",
								children: "전체 출처 목록 열기 →"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "button secondary",
								href: "/glossary",
								children: "용어·기호 사전 보기"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								className: "button secondary",
								href: "/prd",
								children: "제품 범위와 정책 보기"
							})
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { FormulasPage as default, metadata };
