# 전략 카드·세밀 시뮬레이션 UI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 전략 카탈로그와 세밀 조정 시뮬레이션을 분리하고, 더미 데이터 기반으로 할인·쿠폰·포인트·배송·기간·수량·번들 조건 변경 결과를 비교할 수 있는 P1 프론트엔드 흐름을 제공한다.

**Architecture:** `/strategy/[id]`는 전략 카드와 비교 선택만 담당하고, `/strategy/[id]/simulate`는 URL의 선택 전략 1~3개를 받아 조정 패널·비용 브레이크다운·다중 결과 차트·사후 대처를 렌더링한다. 조정값은 클라이언트 상태로 관리하며, AI 추천 원본과 사용자 조정안을 분리해 비교한다. 모든 계산은 더미 판매 반응 곡선과 비용 가정으로 결정론적으로 수행한다.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS, Lucide React, Recharts.

## Global Constraints

- 제품 범위는 현대백화점 더현대 서울 2F·3F·B1·1F 직매입 재고 중심으로 유지한다.
- 실제 가격·쿠폰·배송·재고를 실행하지 않고 시뮬레이션과 승인 UI만 제공한다.
- 결과의 1순위 지표는 기준선 대비 증분 기여현금이익이며, 최소마진율을 단독 최적화 기준으로 사용하지 않는다.
- 카드 본문 클릭과 차트 비교 체크박스는 서로 다른 동작으로 유지한다.
- 비교 전략은 최대 3개로 제한하고, AI 추천 원본 값은 사용자 조정과 별도로 보존한다.
- 직접 수정 가능한 값과 하드 가드레일(원가·재고·유통기한·소유권·최대 할인)을 구분한다.
- 디자인은 기존 라이트 Paper Technical 톤과 딥 파인 그린 액센트를 유지한다.

---

### Task 1: UI/UX 설계 문서에 대화 반영 기록 추가

**Files:**
- Modify: `docs/frontend-ui-ux-plan.md`

**Interfaces:**
- Produces: 전략 카탈로그/시뮬레이션 분리, 조정 가능 변수, 비용·가드레일·상태 규칙을 다음 구현의 기준으로 기록한다.

- [ ] **Step 1: 기존 단일 상세 비교 요구를 카탈로그와 시뮬레이션으로 분리한다.**

  `/strategy/[id]`에는 전략 카드·비교함·간단 KPI만 남기고, `/strategy/[id]/simulate`에 조정 패널·결과 차트·비용 브레이크다운·사후 대처를 둔다는 내용을 추가한다.

- [ ] **Step 2: P0/P1 조정 변수와 읽기 전용 가드레일을 문서화한다.**

  P0은 할인율, 쿠폰/포인트, 무료배송·배송비, 프로모션 기간, 적용 수량, 번들 조건으로 정하고, 광고·반품률·운영비 가정은 P1로 기록한다. 원가·현재고·유통기한·소유권은 읽기 전용으로 기록한다.

- [ ] **Step 3: 원본 추천과 사용자 조정 버전, 실제 실행 제한을 기록한다.**

  AI 원본과 사용자 조정안을 함께 비교하고, 승인 전에는 가격·쿠폰·재고를 자동 변경하지 않는다는 규칙을 추가한다.

- [ ] **Step 4: 문서 변경 내용을 검색해 범위 충돌이 없는지 확인한다.**

  Run: `rg -n "전 계열사|본사 승인|시뮬레이션|조정 패널|가드레일" docs/frontend-ui-ux-plan.md`

  Expected: 새 화면 흐름이 기존 전략 상세·시뮬레이션 설명과 모순 없이 함께 나타난다.

---

### Task 2: 전략 카드 목록을 시뮬레이션 진입점으로 전환

**Files:**
- Modify: `src/app/strategy/[id]/page.tsx`

**Interfaces:**
- Consumes: 기존 `scenarioGroups`, `selectedOptionIds`, `toggleCheckbox` 상태.
- Produces: 선택된 옵션을 `options` query로 전달하는 `/strategy/[id]/simulate` 링크와 최대 3개 비교함.

- [ ] **Step 1: 카드 클릭의 대표 선택 상태를 라우팅 동작으로 교체한다.**

  카드 본문과 `시뮬레이션 열기` 버튼은 `router.push`로 이동하고, 우측 비교 체크박스는 이벤트 전파를 막아 기존 토글만 수행한다.

- [ ] **Step 2: 비교 선택 최대 3개 제한과 비교 시작 바를 추가한다.**

  네 번째 옵션을 추가하려는 경우 기존 선택을 바꾸지 않고 안내 문구를 표시한다. 선택된 옵션 ID를 콤마로 직렬화해 시뮬레이션 경로로 전달한다.

- [ ] **Step 3: 한 화면에 모든 차트를 렌더링하던 영역을 제거하고 카드 KPI만 남긴다.**

  전략 카탈로그 하단에는 선택된 카드 수와 `비교 시뮬레이션 시작` 버튼만 표시해 정보 과밀을 줄인다.

- [ ] **Step 4: TypeScript와 프로덕션 빌드로 라우팅 변경을 검증한다.**

  Run: `npm run build`

  Expected: `/strategy/[id]`와 새 동적 경로가 타입 오류 없이 빌드된다.

---

### Task 3: 시뮬레이션 계산 모델과 조정 패널 구현

**Files:**
- Create: `src/lib/simulation.ts`
- Create: `src/app/strategy/[id]/simulate/page.tsx`

**Interfaces:**
- `SimulationControls`: `discountRate`, `couponRate`, `pointRate`, `shippingSubsidy`, `freeShipping`, `campaignDays`, `appliedQuantity`, `bundleEnabled`, `bundleDiscountRate`.
- `SimulationResult`: `expectedSalesQty`, `expectedRevenue`, `discountCost`, `couponCost`, `pointCost`, `shippingCost`, `operationCost`, `returnCost`, `storageCost`, `avoidedDisposalCost`, `baselineContribution`, `incrementalContribution`, `remainingQty`, `liquidationDays`, `confidenceScore`, `warningMessages`.
- `simulateOption(option, controls)`: 더미 반응 곡선과 비용 가정으로 `SimulationResult`를 반환한다.

- [ ] **Step 1: 조정 가능한 입력과 기본값을 정의한다.**

  AI 추천값을 기본값으로 복사하고, 배송·운영비는 더미 가정값으로 분리한다. 원가·현재고·유통기한은 결과 계산에만 사용하고 입력 컨트롤로 노출하지 않는다.

- [ ] **Step 2: 비선형 판매 반응과 비용을 계산한다.**

  할인·쿠폰·포인트·무료배송을 단순 합산하지 않고, 유효 혜택과 기간·번들 보정 계수를 사용해 예상 판매량을 계산한다. 수수료·배송·운영·반품·보관·폐기 회피 비용을 비용 브레이크다운으로 산출한다.

- [ ] **Step 3: 증분 기여현금이익과 가드레일 경고를 계산한다.**

  기준선 대비 증분이익을 계산하고, 음수 이익·최대 할인 초과·기한 내 미소진·배송비 과다 부담을 경고 배열로 반환한다.

- [ ] **Step 4: 조정 패널을 구현한다.**

  슬라이더와 숫자 입력을 함께 제공하고, AI 추천값으로 되돌리기·사용자 조정안 저장·번들 토글·배송비 지원을 지원한다. 입력 변경 시 결과와 차트가 즉시 갱신된다.

- [ ] **Step 5: 시뮬레이션 결과 요약과 비용 브레이크다운을 구현한다.**

  예상 판매량·소진일·잔여재고·매출·증분 기여현금이익·신뢰도와 비용 항목을 결과 패널에 표시한다.

---

### Task 4: 전략 비교 차트와 사후 대처 연동

**Files:**
- Modify: `src/app/strategy/[id]/simulate/page.tsx`
- Reuse: `src/app/strategy/[id]/page.tsx`의 `buildFallbackSteps` 로직을 공통 계산 모듈로 이동하거나 동일 규칙으로 재사용한다.

**Interfaces:**
- Consumes: 최대 3개의 `SimulationResult`와 조정된 `SimulationControls`.
- Produces: 비교 차트, AI 원본/조정값 비교, 퍼센트 구간별 fallback action plan.

- [ ] **Step 1: 선택 전략 1~3개의 할인율·판매량·증분이익 곡선을 생성한다.**

  한 그래프에 최대 3개의 조정 결과와 AI 추천 기준선을 표시하고, 선택 전략이 없거나 잘못된 ID이면 케이스의 최우선 추천 1개로 안전하게 대체한다.

- [ ] **Step 2: AI 추천과 사용자 조정값 비교표를 추가한다.**

  할인율, 무료배송, 기간, 판매량, 증분이익, 소진일을 원본/조정값으로 나란히 표시한다.

- [ ] **Step 3: 조정 결과에 맞춰 사후 대처 단계를 다시 계산한다.**

  90–100%, 70–89%, 50–69%, 30–49%, 0–29% 구간의 trigger·추가 혜택·번들 전환·손실 방어를 조정된 할인율과 소진기간에 맞춰 표시한다.

- [ ] **Step 4: 저장/승인 액션의 상태를 명확히 표시한다.**

  저장은 `사용자 조정 초안`, 승인 전에는 실제 실행이 발생하지 않는다는 안내를 표시한다. 승인 시 선택한 조정안의 요약을 확인한다.

---

### Task 5: 검증과 문서·UI 회귀 확인

**Files:**
- Verify: `docs/frontend-ui-ux-plan.md`
- Verify: `src/app/strategy/[id]/page.tsx`
- Verify: `src/app/strategy/[id]/simulate/page.tsx`
- Verify: `src/lib/simulation.ts`

- [ ] **Step 1: 타입 및 프로덕션 빌드를 실행한다.**

  Run: `npm run build`

  Expected: Compiled successfully, 타입 오류 0개.

- [ ] **Step 2: 주요 라우트 응답을 확인한다.**

  Run: `curl -sS -o /dev/null -w '%{http_code}\n' http://127.0.0.1:3001/strategy/CASE-2026-001` 및 `curl -sS -o /dev/null -w '%{http_code}\n' 'http://127.0.0.1:3001/strategy/CASE-2026-001/simulate?options=OPT-PROFIT-1,OPT-FAST-1'`

  Expected: 두 요청 모두 `200`.

- [ ] **Step 3: 범위·가드레일·조정 항목 문자열을 확인한다.**

  Run: `rg -n "AI 추천값|사용자 조정|증분 기여|배송비|손실 방어|90–100|비교 시뮬레이션" src/app/strategy src/lib/simulation.ts docs/frontend-ui-ux-plan.md`

  Expected: 구현과 문서에 동일한 용어가 사용된다.

