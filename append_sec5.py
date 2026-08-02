import sys

path = "docs/architecture-and-tech-stack.md"
with open(path, "r", encoding="utf-8") as f:
    text = f.read()

text = text.split("## 5. 최적화 연산 엔진")[0].strip()

sec5 = """

---

## 5. 최적화 연산 엔진 수학적 목적함수, 수요 예측 수식 및 AI 판단 규칙

현대백화점 AI 재고 처리 시스템(InventoryOS)의 최적화 연산 엔진(FastAPI + PuLP/HiGHS MILP Solver)에 실제로 탑재되는 핵심 수학적 목적함수와 ML 수요 예측 수식, 3대 AI 판단 규칙 명세입니다.

### 5.1 AI 핵심 목적함수: 증분 기여현감이익 ($M_{\\text{inc}}$) 극대화
AI는 단순 겉보기 매출이 아니라, **AI 전략을 실행했을 때 최종적으로 현대백화점 통장에 남는 순현금**을 극대화하도록 계산합니다.

$$\\max M_{\\text{inc}} = \\Delta R + S_{\\text{disposal}} - C_{\\text{cannibal}} - C_{\\text{logistics}} - C_{\\text{brand}} - C_{\\text{return}} - C_{\\text{AI\\_case}}$$

| 기호 | 변수/항목명 | 세부 산식 및 산출 방식 | 실무 반영 이유 및 의미 |
| :--- | :--- | :--- | :--- |
| $\\Delta R$ | **증분 매출액** | $(P_{\\text{sale}} \\times Q_{\\text{sale}}) - (P_{\\text{base}} \\times Q_{\\text{base}})$ | 기준선(방치) 대비 할인가로 추가 판매하여 발생한 순증가 매출 |
| $S_{\\text{disposal}}$ | **폐기물 처리비 회피액** | $\\Delta Q_{\\text{sojin}} \\times \\text{단당 폐기물 처리비}$ | 임박 재고를 소진함으로써 회피한 올바로 시스템 등록 및 특수 폐기비 수입 효과 |
| $C_{\\text{cannibal}}$ | **정가 수요 잠식 손실** | $Q_{\\text{sale}} \\times \\alpha_{\\text{cannibal}} \\times (P_{\\text{정가}} - P_{\\text{할인가}})$ | **할인 안 했어도 정가에 샀을 고객**($\\alpha$)이 할인가로 구매하여 발생한 마진 손실 차감 |
| $C_{\\text{logistics}}$ | **물류·재포장 비용** | $Q_{\\text{sale}} \\times (\\text{수송비} + \\text{스페셜 스티커/포장비})$ | 아울렛 이송 수송비, 매대 스티커 부착, 임직원몰 패키징 등 현장 발생 원가 |
| $C_{\\text{brand}}$ | **브랜드 훼손 페널티** | $Q_{\\text{sale}} \\times P_{\\text{정가}} \\times \\beta_{\\text{channel}} \\times \\lambda_{\\text{frequency}}$ | 공개 매대 파격 할인 시 **브랜드 가격 앵커링 훼손 감점** (앱 푸시/전용몰 이용 시 $\\beta=0$으로 회피) |
| $C_{\\text{return}}$ | **반품 및 CS 충당금** | $Q_{\\text{sale}} \\times r_{\\text{return}} \\times (P_{\\text{할인가}} + \\text{CS 처리비})$ | 소비기한 임박/이월 상품 구매 고객의 신선도 불만/반품 확률($r$)에 대비한 예비비 |
| $C_{\\text{AI\\_case}}$ | **AI 1건당 결정 원가** | $C_{\\text{LLM}} + C_{\\text{DATA}} + C_{\\text{SEARCH}} + C_{\\text{HUMAN}}$ | LLM 토큰비(8.5원) + DB인프라비(0.5원) + RAG비(1.2원) + 바이어 1분 검토비(250원) |

---

### 5.2 ML 수요 예측 및 소진율 감쇄 수식 ($Q_{\\text{sale}}$)
할인율($d$)과 경과 시간($t$)에 따라 얼마만큼 팔릴지 추정하는 LightGBM 기반 수요예측 수식입니다.

$$Q_{\\text{sale}}(d, t) = Q_{\\text{base\\_daily}} \\times \\left(1 + \\varepsilon \\cdot d\\right) \\times f_{\\text{aging}}(t) \\times \\gamma_{\\text{channel}}$$

* $Q_{\\text{base\\_daily}}$: 해당 SKU의 최근 30/60/90일 이동평균 일판매량
* $\\varepsilon$: **가격 탄력성 계수** (할인율 1% 증가 시 수요 증가폭, 카테고리별 ML 학습)
* $f_{\\text{aging}}(t)$: **D-Day 잔여 수명 감쇄 함수** (소비기한/시즌 경과에 따라 수요 반응도가 완만해지는 가격 탄력성 감쇄 곡선)
* $\\gamma_{\\text{channel}}$: **판매 채널 가중치** (현장 매대 1.0, H.Point 앱 푸시 1.3, 사내 임직원몰 0.8 등)

---

### 5.3 AI 최종 실행 판단 3대 규칙 (Decision Gate Rules)
FastAPI 최적화 엔진은 모든 대안을 위 수식에 넣은 뒤 아래 3가지 규칙에 따라 자동 분류합니다.

1. **규칙 1 (수익성 미달 차단)**: $M_{\\text{inc}} \\le C_{\\text{AI\\_case}}$ 이면 AI 대안을 기각하고 룰 기반 처리로 하강 (배보다 배꼽이 큰 개별 분석 방지).
2. **규칙 2 (AI 신뢰도 기반 패스트트랙)**: $M_{\\text{inc}} > C_{\\text{AI\\_case}}$ 이고 **AI 신뢰도 $\\ge 85\\%$ & 재고 규모 $< 1,000\\text{만 원}$** 이면 바이어 화면에 **'5초 원클릭 승인 추천'**으로 노출 ($C_{\\text{HUMAN}}$ 인건비 극소화).
3. **규칙 3 (리스크 예외 라우팅)**: **재고 규모 $\\ge 1,000\\text{만 원}$ 또는 신뢰도 $< 85\\%$** 인 고위험 재고는 본사 담당자 정밀 검토로 자동 라우팅.
"""

text += sec5
with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Updated docs/architecture-and-tech-stack.md cleanly!")
