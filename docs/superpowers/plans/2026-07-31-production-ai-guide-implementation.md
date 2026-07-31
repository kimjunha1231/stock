# Production AI Guide Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 기존 `/ai-guide` 통합 페이지를 실제 서비스의 AI 데이터·처리·상황·학습·수식·LLM/RAG 운영 흐름을 처음부터 끝까지 설명하는 가이드로 재구성한다.

**Architecture:** 기존 `/ai-blueprint` 본문을 단일 source of truth로 유지하고 `/ai-guide`, `/formulas`는 재수출 방식으로 호환한다. 긴 정적 콘텐츠는 `src/lib/ai-guide-content.ts`로 분리하고, 단계·상황 카드는 접근 가능한 `<details>/<summary>` 컴포넌트로 렌더링한다. 기존 출처와 한글 수식은 유지하되 실제 서비스와 충돌하는 MVP 표현·영문 사용자 수식·중복 CTA를 제거한다.

**Tech Stack:** React 19, Next-compatible vinext, TypeScript/TSX, 기존 CSS 디자인 시스템, Node test runner, Sites vinext build/prerender/hosting.

## Global Constraints

- 대상 계열사는 현대웰니스, 현대리바트, 현대그린푸드 세 곳이다.
- 원천은 계열사별 Oracle 읽기 전용 View 세 개이고, 통합 Oracle은 공통 복제본과 AI 결과를 소유한다.
- 계열사 원천은 하루 1회 자동 동기화하고 권한 있는 사용자의 수동 갱신을 지원한다.
- 서비스는 계열사 원천 DB에 쓰지 않으며 주문·결제·배송·상품 등록을 실행하지 않는다.
- 수요예측은 공통 전역 모델에 계열사·카테고리·상품 특성과 검증된 보정값을 적용한다.
- 머신러닝은 수요·조건 반응·선택적 확률을 예측하고, 규칙·수식은 차단·위험·금액·순위를 결정한다.
- LLM은 구조화된 결과만 설명하고, RAG는 비정형 정책·법규·사례 근거만 검색한다.
- 사용자에게 보이는 수식은 한글 용어를 기본으로 한다.
- 신뢰도를 예상수량에 직접 곱하지 않고 보수·기본·낙관 예측 범위를 표시한다.
- `snapshot_id`, `model_version`, `feature_version`, `formula_version`, `policy_version`, `prompt_version`을 결과에 연결한다.
- 기존 사이트의 접근성, 모바일 표 스크롤, 키보드 펼침 카드 패턴을 유지한다.
- 구현 기준 문서는 `docs/superpowers/specs/2026-07-31-production-ai-guide-design.md`다.

---

## File Structure

### Create

- `explainer-site/src/lib/ai-guide-content.ts`
  - AI 처리 단계, 기술 책임, 필요 데이터, 계열사 프로필, 상황별 흐름, 학습 생명주기, 실패 대체, 결과 계약을 타입이 있는 정적 데이터로 제공한다.
- `explainer-site/src/components/ai-guide/ai-stage-card.tsx`
  - 단계 카드의 공통 마크업과 접근 가능한 펼침 동작을 담당한다.
- `explainer-site/src/components/ai-guide/scenario-card.tsx`
  - 상황별 `상황 → 판단 → 처리 → 화면 표시 → 다음 행동`을 일관된 구조로 렌더링한다.

### Modify

- `explainer-site/src/app/ai-blueprint/page.tsx`
  - 통합 가이드의 섹션 순서와 렌더링을 실제 서비스 흐름 기준으로 재구성한다.
- `explainer-site/src/app/globals.css`
  - 단계 탐색, 기술 책임, 데이터 등급, 상황 카드, 생명주기, 결과 계약을 위한 반응형 스타일을 추가한다.
- `explainer-site/src/lib/content.ts`
  - 메뉴 이름을 `AI 설계·운영 가이드`로 변경하고 기존 출처 레코드는 유지한다.
- `explainer-site/tests/rendered-html.test.mjs`
  - 통합 AI 가이드 세 주소의 핵심 콘텐츠와 호환성을 검증한다.

### Preserve

- `explainer-site/src/app/ai-guide/page.tsx`
- `explainer-site/src/app/formulas/page.tsx`
  - 두 파일은 계속 `../ai-blueprint/page`를 재수출한다.

---

### Task 1: Add the AI guide content contract test

**Files:**
- Modify: `explainer-site/tests/rendered-html.test.mjs`

**Interfaces:**
- Consumes: vinext worker output from `dist/server/index.js`.
- Produces: a route-level contract that later tasks must satisfy for `/ai-guide`, `/ai-blueprint`, and `/formulas`.

- [ ] **Step 1: Add a failing test for the unified production AI guide**

Append this exact test:

```js
test("serves one production AI guide across all compatible routes", async () => {
  for (const pathname of ["/ai-guide", "/ai-blueprint", "/formulas"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();

    assert.match(html, /실제 서비스 AI 처리 흐름/);
    assert.match(html, /머신러닝·수식·LLM·RAG의 역할/);
    assert.match(html, /총합적으로 필요한 데이터/);
    assert.match(html, /신규 상품/);
    assert.match(html, /계열사 동기화 실패/);
    assert.match(html, /머신러닝 학습·검증·운영/);
    assert.match(html, /최종 AI 결과 계약/);
    assert.doesNotMatch(html, /MVP 비용 프로필/);
  }
});
```

- [ ] **Step 2: Run the test and confirm the new contract fails**

Run:

```bash
cd explainer-site
npm test
```

Expected: the existing two tests pass and the new test fails because `실제 서비스 AI 처리 흐름` is not present.

- [ ] **Step 3: Commit the failing contract test**

```bash
git add explainer-site/tests/rendered-html.test.mjs
git commit -m "test: define production AI guide content contract"
```

---

### Task 2: Create typed AI guide content records

**Files:**
- Create: `explainer-site/src/lib/ai-guide-content.ts`

**Interfaces:**
- Consumes: approved copy and rules from `docs/superpowers/specs/2026-07-31-production-ai-guide-design.md`.
- Produces:
  - `TechnologyRole[]`
  - `RequiredDataRow[]`
  - `AffiliateAiProfile[]`
  - `AiStage[]`
  - `SituationPlaybook[]`
  - `LifecycleStep[]`
  - `FallbackRow[]`
  - `OutputContractRow[]`

- [ ] **Step 1: Define the exported types**

Create the file with these exact public types:

```ts
export type DataLevel = '필수' | '정확도 향상' | '후속 고도화';

export type TechnologyRole = {
  name: string;
  question: string;
  owns: string;
  excludes: string;
};

export type RequiredDataRow = {
  group: string;
  values: string;
  level: DataLevel;
  usedBy: string;
  missingPolicy: string;
};

export type AffiliateAiProfile = {
  affiliate: string;
  productTypes: string;
  extraInputs: string;
  strongestSignals: string;
  hardStops: string;
  costs: string;
  modelHandling: string;
};

export type AiStage = {
  id: string;
  title: string;
  owner: string;
  summary: string;
  required: string[];
  optional: string[];
  outputs: string[];
  fallback: string;
  next: string;
};

export type SituationPlaybook = {
  id: string;
  title: string;
  signal: string;
  decision: string;
  flow: string[];
  screen: string;
  nextAction: string;
};

export type LifecycleStep = {
  id: string;
  title: string;
  description: string;
};

export type FallbackRow = {
  situation: string;
  fallback: string;
  userMessage: string;
};

export type OutputContractRow = {
  group: string;
  fields: string;
  source: string;
};
```

- [ ] **Step 2: Add the six technology responsibility records**

Export `technologyRoles` with these rows:

```ts
export const technologyRoles: TechnologyRole[] = [
  { name: 'SQL·통계', question: '지금 상태와 변화량은 얼마인가?', owns: '재고 집계·판매속도·변화율·급등/급락', excludes: '복합 미래수요 예측' },
  { name: '머신러닝', question: '앞으로 얼마나 팔리고 조건에 어떻게 반응할까?', owns: '수요·할인/프로모션 반응·선택적 확률', excludes: '법규·금액·승인 판단' },
  { name: '정책·규칙', question: '이 전략을 제안해도 되는가?', owns: '법규·검사·소유권·기한·할인 한도·품질 차단', excludes: '판매량 생성' },
  { name: '수식 엔진', question: '전략 결과가 금액과 위험으로 얼마인가?', owns: '위험·매출·비용·회피비용·증분이익·순위', excludes: '자유로운 문장 생성' },
  { name: 'RAG·벡터 검색', question: '관련 정책·법규·사례 근거가 무엇인가?', owns: '비정형 문서 근거 검색', excludes: '재고·매출 숫자 조회' },
  { name: 'LLM', question: '계산 결과를 어떻게 쉽게 설명할까?', owns: '요약·근거 설명·주의사항·확인 질문', excludes: '숫자 변경·하드 차단 변경·자동 승인' },
];
```

- [ ] **Step 3: Add all required data rows**

Export `requiredDataRows` with exactly these groups and policies:

```ts
export const requiredDataRows: RequiredDataRow[] = [
  { group: '식별정보', values: '계열사·법인·카테고리·상품·SKU·로트·채널·원천키', level: '필수', usedBy: '전체 연결·집계·권한', missingPolicy: '매핑되지 않은 원천키를 격리' },
  { group: '시간정보', values: '발생시각·기준시각·영업일·요일·계절·행사기간', level: '필수', usedBy: '학습·예측·재현', missingPolicy: '시간축이 불명확하면 학습 제외' },
  { group: '판매정보', values: '순판매량·취소·반품·품절·판매가·할인액', level: '필수', usedBy: '학습 정답·판매속도', missingPolicy: '예측 부족 또는 전략 차단' },
  { group: '재고정보', values: '현재고·예약수량·가용재고·입고예정·보관일', level: '필수', usedBy: '판매 상한·위험·잔여재고', missingPolicy: '전략 수량 계산 차단' },
  { group: '가격·행사', values: '정상가·판매가·할인율·쿠폰·포인트·프로모션 노출', level: '필수', usedBy: '조건부 수요·매출', missingPolicy: '할인 반응 대신 기준수요만 제공' },
  { group: '비용정보', values: '수수료·배송·설치·보관·반품·파손·폐기·행사비', level: '필수', usedBy: '전략 손익', missingPolicy: '마진 순위 확정 차단' },
  { group: '상품 특성', values: '소비기한·보관조건·검사·회수·옵션·상품 유형', level: '필수', usedBy: '특성 예측·하드 차단', missingPolicy: '계열사 필수값 누락 시 차단' },
  { group: '트렌드', values: '검색·SNS·조회·찜·장바구니·변화율·출처·수집시각', level: '정확도 향상', usedBy: '트렌드·수요예측', missingPolicy: '검증된 중립값으로 미반영' },
  { group: '정책', values: '판매 가능 여부·최대 할인율·최소 잔여기한·허용 채널', level: '필수', usedBy: '차단·후보 생성', missingPolicy: '전략 생성 차단' },
  { group: '실제 결과', values: '실제 판매량·반품·잔여재고·실제 마진·실행 상태', level: '필수', usedBy: '운영 검증·재학습', missingPolicy: '성과 검증 미완료 표시' },
  { group: '재현정보', values: 'snapshot·모델·피처·수식·정책·프롬프트 버전', level: '필수', usedBy: '감사·재현·롤백', missingPolicy: '결과 확정 저장 금지' },
  { group: '문서', values: '법규·정책·상품 지침·과거 검토 사례', level: '후속 고도화', usedBy: 'RAG·LLM 근거', missingPolicy: '근거 없음 표시' },
];
```

- [ ] **Step 4: Add affiliate profiles**

Export three rows named `affiliateAiProfiles`. Each row must include the following exact distinctions:

```ts
export const affiliateAiProfiles: AffiliateAiProfile[] = [
  { affiliate: '현대웰니스', productTypes: '건강기능식품·영양제', extraInputs: '성분·기능·대상 고객·소비기한·보관·표시·회수', strongestSignals: '성분·건강 관심·검색·내부 조회·판매', hardStops: '표시·회수·판매 가능 상태·최소 잔여기한·품질', costs: '포장·검수·반품·회수·보관·폐기', modelHandling: '소비기한을 판매 가능 상한과 위험 입력으로 함께 사용' },
  { affiliate: '현대리바트', productTypes: '가구·리빙·옵션·모듈', extraInputs: '옵션·상품 유형·가격대·보관일·채널·비용 프로필', strongestSignals: '인테리어·이사·혼수·시즌·공간별 관심', hardStops: '판매 정책·비용 누락·할인 한도·소유권', costs: '배송·설치·보관·파손·재배송·반품·AS', modelHandling: '저빈도 SKU가 카테고리·가격대·옵션 패턴을 공유' },
  { affiliate: '현대그린푸드', productTypes: '신선·냉장·냉동·가공·케어푸드', extraInputs: '로트·소비기한·온도·검사·이력추적·채널', strongestSignals: '메뉴·제철·날씨·검색·내부 주문·판매', hardStops: '검사·소비기한·온도·이력추적·회수·판매 상태', costs: '콜드체인·피킹·포장·보냉재·반품·폐기', modelHandling: '상품군별 예측 기간과 보정값을 분리' },
];
```

- [ ] **Step 5: Add the fifteen processing stages**

Export `aiStages` in this exact order:

1. 계열사 데이터 수집
2. 공통 데이터 변환
3. 데이터 품질 확인
4. 트렌드 신호 생성
5. 머신러닝 수요예측
6. 계열사·카테고리별 보정
7. 하드 차단 확인
8. 위험점수 계산
9. 전략 후보 생성
10. 매출·비용·증분이익 계산
11. 목표별 전략 순위
12. RAG 근거 검색
13. LLM 설명
14. 실제 결과 비교
15. 모델·정책 개선

Use this exact stage contract. Split middle-dot lists into `string[]` values for `required`, `optional`, and `outputs`.

| ID | 담당 | 필수 입력 | 선택 입력 | 출력 | 실패 처리 | 다음 전달 |
| --- | --- | --- | --- | --- | --- | --- |
| 01 | Spring Batch | 읽기 전용 View·원천 기준시각 | 변경 건수·삭제 표시 | 계열사별 수집 snapshot | 마지막 성공 snapshot 유지 | 원천키와 수집시각 |
| 02 | 변환 규칙 | 원천키·코드·단위·시간 | 계열사 설명값 | 공통 상품·SKU·로트·판매·재고 | 매핑 실패 행 격리 | 공통 ID 데이터 |
| 03 | 품질 규칙 | 상품·재고·판매·가격·정책 필수값 | 지연 허용시간 | 통과·경고·차단·사유 | 필수 조합 누락 시 전략 차단 | 품질 상태와 사용 가능 데이터 |
| 04 | SQL·통계 | 검색·SNS·조회·판매 변화 | 찜·장바구니·날씨 | 상승·유지·하락·변화율·출처 | 중립값으로 미반영 | 검증된 트렌드 피처 |
| 05 | 머신러닝 | 판매·재고·가격·행사·시간·식별 피처 | 트렌드·날씨·상품 확장 피처 | 보수·기본·낙관 예상수요·예측 범위 | 승인 기준모델 사용 | 조건별 예상 판매량 |
| 06 | 보정 규칙 | 공통 모델 예측·계열사·카테고리 | 검증된 편향 통계 | 보정 예측·보정 버전 | 보정 미적용 | 최종 수요예측 |
| 07 | 정책 엔진 | 소유권·법규·검사·기한·정책·품질 | RAG 정책 링크 | 실행 가능 여부·차단 코드 | 미확인도 차단으로 처리 | 허용 후보만 전달 |
| 08 | 수식 엔진 | 예측수요·가용재고·기한·비용·가중치 | 선택 확률 모델 | 위험점수·등급·신호별 기여 | 정책 가중치 누락 시 차단 | 위험과 우선순위 입력 |
| 09 | 후보 생성기 | 허용 수량·할인·기간·쿠폰·채널 | 번들·프로모션 선택지 | 유한한 전략 후보 목록 | 허용 조합이 없으면 후보 없음 | 시나리오별 입력 |
| 10 | 수식 엔진 | 예상수량·가격·비용·회피비용·기준선 | 잠식·확률 비용 | 매출·변동비·회피비용·증분이익 | 비용 누락 시 마진 순위 차단 | 비교 가능한 손익 |
| 11 | 순위 규칙 | 허용 후보·손익·잔여재고·위험 | 사용자 목표 | 최대마진·빠른소진·최대매출·위험최소화 순위 | 후보 없음 표시 | 상위 후보와 하방 결과 |
| 12 | RAG | 정책·법규·상품 지침·사례 문서 | 의미 기반 임베딩 | 문서 제목·근거 구간·링크 | 근거 없음 | 인용 가능한 문서 근거 |
| 13 | LLM | 계산 결과·버전·근거 문서 | 사용자 표현 수준 | 요약·권장 행동·위험·질문 | 고정 문장 템플릿 | 설명과 근거 |
| 14 | 검증 배치 | 예상값·실제 판매·잔여재고·이익·실행 상태 | 외부 사건 원인 | 오차·달성률·원인 코드 | 실제 결과 미수집 표시 | 모델·정책 평가 자료 |
| 15 | 운영 검토 | 검증지표·데이터 드리프트·정책 성과 | 후보 모델 | 재학습·보정·유지·롤백 결정 | 이전 승인 모델 유지 | 새 승인 버전 또는 현행 유지 |

No record may contain an empty array or blank string.

- [ ] **Step 6: Add all twelve situation playbooks**

Export `situationPlaybooks` with these IDs and titles:

```ts
const situationTitles = [
  ['new-product', '신규 상품'],
  ['short-history', '판매이력 부족'],
  ['trend-spike', '트렌드 급등'],
  ['trend-drop', '트렌드 급락'],
  ['expiry-pressure', '소비기한 임박'],
  ['slow-moving', '느린 판매·높은 재고'],
  ['discount-gap', '할인 이력 부족'],
  ['low-confidence', '낮은 예측 신뢰도'],
  ['sync-failure', '계열사 동기화 실패'],
  ['hard-stop', '정책·검사·소유권 차단'],
  ['scenario-change', '사용자의 조건 변경'],
  ['outcome-gap', '예상과 실제의 큰 차이'],
] as const;
```

Use these exact decisions and flows. `screen` must append `데이터 기준시각과 사용 버전 표시` to every scenario. `nextAction` must not imply automatic purchase, sale, price change, or approval.

| ID | 감지 신호 | 판단 | 처리 흐름 | 화면 핵심 | 다음 행동 |
| --- | --- | --- | --- | --- | --- |
| new-product | 판매이력 없음 | 유사 집단으로만 초기 예측 가능 | 유사 계열사/카테고리 선택 → 집단 패턴 사용 → 넓은 예측 범위 → 낮은 신뢰 | 유사 집단·범위·부족 데이터 | 담당자 확인 |
| short-history | 학습 최소기간 미충족 | 복잡한 모델보다 기준모델 우선 | 기준모델 계산 → 카테고리 평균 비교 → 더 안정적인 결과 선택 → 부족 기간 기록 | 사용 기간·모델·신뢰 | 데이터 축적 후 재평가 |
| trend-spike | 검색·SNS 급등 | 실제 조회·판매 동행 여부 확인 | 외부 신호 확인 → 내부 행동 확인 → 수요예측 반영 → 재고/리드타임/기한 검토 | 동행 신호·예측 범위 | 추가 입고 또는 프로모션 검토 |
| trend-drop | 트렌드·조회·판매 하락 | 일시적 계절성인지 반복 하락인지 구분 | 기간 비교 → 계절 보정 → 미소진 위험 계산 → 처리 후보 비교 | 하락 기간·잔여재고·하방 | 처리 전략 검토 |
| expiry-pressure | 최소 잔여기한 접근 | 판매 가능한 로트만 계산 | 로트 검사 → 판매 가능 수량 확정 → 기한 내 수요 계산 → 폐기비 비교 | 판매 가능 로트·남은 기한·폐기량 | 기한 내 처리안 검토 |
| slow-moving | 재고일수 상승 | 재고금액만이 아니라 품절 보정 속도 확인 | 속도 보정 → 예상수요 → 조건별 잔여재고 → 증분이익 비교 | 재고일수·속도·잔여재고 | 목표별 후보 비교 |
| discount-gap | 할인 반응 이력 부족 | 집단 평균만 제한적으로 사용 | 상품 반응 미사용 → 카테고리 평균 → 범위 확대 → 손실안 경고 | 대체값·범위·손실 가능성 | 보수 조건부터 검토 |
| low-confidence | 예측 범위 과다 | 점 예측 확정 금지 | Q10/Q50/Q90 표시 → 하방 손익 → 손익분기 → 데이터 부족 표시 | 세 구간·하방·손익분기 | 담당자 판단 |
| sync-failure | 계열사 배치 실패 | 최신성 기준 초과 여부 확인 | 실패 격리 → 마지막 snapshot → 지연시간 계산 → 전략 허용/차단 | 실패 계열사·지연시간·마지막 성공 | 부분 재실행 |
| hard-stop | 정책·검사·소유권 미통과 | 이익과 관계없이 차단 | 차단 평가 → 코드 저장 → 근거 연결 → 후보 제외 | 차단 코드·이유·근거 | 원천/정책 확인 |
| scenario-change | 할인·기간·수량 변경 | 같은 snapshot으로 공정 비교 | 변경값 저장 → 조건부 수요 추론 → 수식 재계산 → 원안 차이 | 원안/변경안·예측·손익 | 변경안 검토 |
| outcome-gap | 예상·실제 차이 큼 | 모델·데이터·실행 원인을 분리 | 오차 계산 → 원인 코드 → 모델/정책 분기 → 재검증 | 오차·원인·영향 | 보정·재학습 또는 정책 수정 검토 |

- [ ] **Step 7: Add lifecycle, fallback, and output contract records**

Export:

- `modelLifecycle`: 학습 snapshot → 누출 검사 → 기준모델 → 공통 ML → 시간순 검증 → 계열사·카테고리 평가 → 보정 평가 → 기존 모델 비교 → 승인 모델 → 추론 → 모니터링 → 재학습/롤백.
- `fallbackRows`: 계열사 DB, 트렌드, ML 서버, 데이터 부족, 정책, 비용, RAG, LLM, 예측 오차 급증의 9개 상황.
- `outputContractRows`: 식별, 데이터 상태, 트렌드, 예측, 차단, 위험, 전략, 손익, 설명, 재현, 검증의 11개 결과 묶음.

Use the exact user-facing Korean terms from design spec sections 10, 13, and 14. Do not add product execution states.

- [ ] **Step 8: Commit the content model**

```bash
git add explainer-site/src/lib/ai-guide-content.ts
git commit -m "feat: add production AI guide content model"
```

---

### Task 3: Build reusable accessible AI guide cards

**Files:**
- Create: `explainer-site/src/components/ai-guide/ai-stage-card.tsx`
- Create: `explainer-site/src/components/ai-guide/scenario-card.tsx`

**Interfaces:**
- Consumes: `AiStage`, `SituationPlaybook` from `@/lib/ai-guide-content`.
- Produces: `AiStageCard`, `ScenarioCard` server components with native details/summary behavior.

- [ ] **Step 1: Create `AiStageCard`**

```tsx
import type { AiStage } from '@/lib/ai-guide-content';

export function AiStageCard({ stage, open = false }: { stage: AiStage; open?: boolean }) {
  return <details className="ai-stage-card" open={open}>
    <summary>
      <span>{stage.id}</span>
      <strong>{stage.title}</strong>
      <em>{stage.owner}</em>
    </summary>
    <div className="ai-stage-card-body">
      <p className="ai-stage-summary">{stage.summary}</p>
      <div className="ai-stage-contract-grid">
        <section><h4>반드시 필요한 값</h4><ul>{stage.required.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h4>있으면 더 정확한 값</h4><ul>{stage.optional.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <section><h4>이 단계가 만드는 값</h4><ul>{stage.outputs.map((item) => <li key={item}>{item}</li>)}</ul></section>
      </div>
      <div className="ai-stage-handoff"><p><b>문제가 생기면</b>{stage.fallback}</p><p><b>다음 단계로</b>{stage.next}</p></div>
    </div>
  </details>;
}
```

- [ ] **Step 2: Create `ScenarioCard`**

```tsx
import type { SituationPlaybook } from '@/lib/ai-guide-content';

export function ScenarioCard({ scenario }: { scenario: SituationPlaybook }) {
  return <details className="ai-scenario-card">
    <summary><span>상황별 처리</span><strong>{scenario.title}</strong><em>{scenario.signal}</em></summary>
    <div className="ai-scenario-card-body">
      <p className="ai-scenario-decision"><b>판단 기준</b>{scenario.decision}</p>
      <ol>{scenario.flow.map((step) => <li key={step}>{step}</li>)}</ol>
      <div className="ai-scenario-result"><p><b>화면 표시</b>{scenario.screen}</p><p><b>다음 행동</b>{scenario.nextAction}</p></div>
    </div>
  </details>;
}
```

- [ ] **Step 3: Run TypeScript build**

```bash
cd explainer-site
npm run build
```

Expected: build succeeds even though the new components are not yet imported.

- [ ] **Step 4: Commit the components**

```bash
git add explainer-site/src/components/ai-guide
git commit -m "feat: add accessible AI guide cards"
```

---

### Task 4: Recompose the unified AI guide page

**Files:**
- Modify: `explainer-site/src/app/ai-blueprint/page.tsx`
- Modify: `explainer-site/src/lib/content.ts`

**Interfaces:**
- Consumes: all exported content arrays, `AiStageCard`, `ScenarioCard`, existing `Reveal`, `SourceNote`, and `sources`.
- Produces: the single production AI guide rendered by three compatible routes.

- [ ] **Step 1: Replace page-local duplicated content with imports**

Import:

```tsx
import { AiStageCard } from '@/components/ai-guide/ai-stage-card';
import { ScenarioCard } from '@/components/ai-guide/scenario-card';
import {
  affiliateAiProfiles,
  aiStages,
  fallbackRows,
  modelLifecycle,
  outputContractRows,
  requiredDataRows,
  situationPlaybooks,
  technologyRoles,
} from '@/lib/ai-guide-content';
```

Keep existing `formulaCards`, `strategyBuildRows`, source helpers, and source IDs until their sections are rendered in the new order. Remove the old `sequenceSteps`, `affiliateRows`, `commonDbRows`, `erdRelations`, `dataSteps`, `aiRows`, `forecastSteps`, and `inventoryRows` after their information is represented by the new content module.

- [ ] **Step 2: Build the page hero and anchor navigation**

The hero must use:

```tsx
<span className="eyebrow">실제 서비스 AI 설계·운영 가이드</span>
<h1>데이터가 들어와<br /><em>전략이 설명될 때까지</em></h1>
<p>어떤 값이 필요하고, 머신러닝·수식·LLM·RAG가 어디에서 작동하며, 상황별로 무엇을 해야 하는지 한 흐름으로 설명합니다.</p>
```

Render anchor links for `#ai-flow`, `#technology-roles`, `#required-data`, `#affiliate-ai`, `#situations`, `#model-lifecycle`, `#formula-engine`, `#llm-rag`, `#fallbacks`, and `#output-contract`.

Render only one CTA row. Remove the duplicated actions currently present in the hero.

- [ ] **Step 3: Render the full processing flow**

Create `<section id="ai-flow">` with heading `실제 서비스 AI 처리 흐름`. Render a compact numbered rail from `aiStages`, followed by `AiStageCard` for all stages. Open stages `05` and `10` by default so the ML and formula handoff is immediately visible.

- [ ] **Step 4: Render technology roles and the required data table**

Create:

- `<section id="technology-roles">` with heading `머신러닝·수식·LLM·RAG의 역할` and six responsibility cards.
- `<section id="required-data">` with heading `총합적으로 필요한 데이터` and a `SimpleTable` with columns `데이터 묶음`, `필요한 값`, `등급`, `사용 단계`, `없을 때 처리`.

Add a legend for `필수`, `정확도 향상`, `후속 고도화`. Include the value-origin list: 계열사 원천 확정값, 통합 계산값, 머신러닝 예측값, 정책 기본값, 사용자 조정값, 미수집/대체값.

Map the object records to `SimpleTable` rows exactly as follows:

```tsx
<SimpleTable
  caption="AI 기능별 기술 책임"
  headers={['구분', '답하는 질문', '담당', '담당하지 않음']}
  rows={technologyRoles.map((item) => [item.name, item.question, item.owns, item.excludes])}
/>

<SimpleTable
  caption="AI에 총합적으로 필요한 데이터"
  headers={['데이터 묶음', '필요한 값', '등급', '사용 단계', '없을 때 처리']}
  rows={requiredDataRows.map((item) => [item.group, item.values, item.level, item.usedBy, item.missingPolicy])}
/>
```

- [ ] **Step 5: Render affiliate application and situation playbooks**

Create:

- `<section id="affiliate-ai">` with the common-model equation in Korean and a table generated from `affiliateAiProfiles`.
- `<section id="situations">` with heading `상황이 달라지면 이렇게 처리합니다` and all twelve `ScenarioCard` records.

The common-model equation must read:

```text
최종 예상수요 =
공통 수요예측 모델 결과
× 계열사·카테고리별 검증 보정값
```

Add a note that separate models are created only after repeated time-based validation proves an improvement.

Render the affiliate table with:

```tsx
<SimpleTable
  caption="계열사별 AI 입력과 처리 차이"
  headers={['계열사', '대표 상품군', '추가 입력', '강한 신호', '하드 차단', '비용', '모델 처리']}
  rows={affiliateAiProfiles.map((item) => [
    item.affiliate,
    item.productTypes,
    item.extraInputs,
    item.strongestSignals,
    item.hardStops,
    item.costs,
    item.modelHandling,
  ])}
/>
```

- [ ] **Step 6: Render model lifecycle and formulas in processing order**

Create `<section id="model-lifecycle">` with heading `머신러닝 학습·검증·운영` and all lifecycle steps. Include the rules:

- future data is never included in training inputs;
- baseline comparison is mandatory;
- evaluation is shown by affiliate and category;
- model rollback preserves the previous approved model.

Move the existing Korean formula cards under `<section id="formula-engine">`. Extend each local `formulaCards` record with `source`, `usedBy`, `missingPolicy`, and `version`, then render those four values in the metadata grid.

Use these exact values:

| 수식 | 입력값 출처 | 결과 사용처 | 누락 처리 | 버전 표시 |
| --- | --- | --- | --- | --- |
| 실행 가능 여부 | 정책·검사·소유권·품질 snapshot | 전략 후보 차단 | 확인되지 않은 항목도 차단 | 적용 정책·수식 버전 |
| 트렌드 점수 | 검색·SNS·조회·판매 신호 | 수요예측 외생 피처 | 검증된 중립값으로 미반영 | 피처·수식 버전 |
| 수요예측 | 판매·재고·가격·행사·시간 피처 | 위험·잔여재고·전략 판매량 | 승인 기준모델 또는 예측 부족 | 모델·피처 버전 |
| 매출과 변동비 | 전략 조건·예상수량·비용 snapshot | 손익·증분이익 | 필수 비용 누락 시 마진 순위 차단 | 비용 정책·수식 버전 |
| 위험점수 | 예측수요·기한·비용·가중치 | 우선순위·위험등급 | 가중치 누락 시 평가 차단 | 정책·수식 버전 |
| 증분 기여현금이익 | 매출·변동비·회피비용·잠식·위험·기준선 | 목표별 전략 순위 | 기준선 또는 비용 누락 시 확정 차단 | snapshot·정책·수식 버전 |

The demand formula must continue to show 10%/50%/90% prediction ranges rather than multiplying by confidence.

- [ ] **Step 7: Render LLM/RAG, fallbacks, and the final output contract**

Create:

- `<section id="llm-rag">` with structured numeric data vs unstructured document separation, the LLM input/output contract, and the sentence `입력에 없는 수치를 생성하면 결과를 폐기합니다.`
- `<section id="fallbacks">` with a table generated from `fallbackRows`.
- `<section id="output-contract">` with heading `최종 AI 결과 계약` and a table generated from `outputContractRows`.

Keep the existing methodology/source section last and change its framing from MVP validation to `운영 전 내부 데이터·정책 확정`.

Use these exact table mappings:

```tsx
<SimpleTable
  caption="장애와 데이터 부족 시 대체 처리"
  headers={['상황', '대체 처리', '사용자 표시']}
  rows={fallbackRows.map((item) => [item.situation, item.fallback, item.userMessage])}
/>

<SimpleTable
  caption="최종 AI 결과 데이터 계약"
  headers={['결과 묶음', '필드', '값의 출처']}
  rows={outputContractRows.map((item) => [item.group, item.fields, item.source])}
/>
```

- [ ] **Step 8: Update navigation copy**

In `src/lib/content.ts`, change the visible route label for `/ai-guide` to `AI 설계·운영 가이드`. Do not add separate visible navigation items for `/ai-blueprint` or `/formulas`.

- [ ] **Step 9: Run the contract test**

```bash
cd explainer-site
npm test
```

Expected: all three tests pass and all three compatible routes contain the required production AI guide strings.

- [ ] **Step 10: Commit the page composition**

```bash
git add explainer-site/src/app/ai-blueprint/page.tsx explainer-site/src/lib/content.ts explainer-site/tests/rendered-html.test.mjs
git commit -m "feat: recompose production AI guide"
```

---

### Task 5: Add responsive AI guide styling and final verification

**Files:**
- Modify: `explainer-site/src/app/globals.css`
- Generated by build: `explainer-site/dist/**`

**Interfaces:**
- Consumes: class names emitted by Task 3 and Task 4.
- Produces: responsive, keyboard-visible, readable production AI guide UI.

- [ ] **Step 1: Add flow and anchor navigation styles**

Add focused styles for:

```css
.ai-guide-anchor-nav
.ai-guide-flow-rail
.ai-guide-flow-step
.ai-stage-card
.ai-stage-card-body
.ai-stage-contract-grid
.ai-stage-handoff
```

Desktop requirements:

- anchor navigation wraps within the container;
- flow rail uses a horizontal scroll area without clipping labels;
- stage cards use a two-column grid where space permits;
- summary has a visible `:focus-visible` outline;
- open state has stronger border and shadow, not color alone.

- [ ] **Step 2: Add role, data, scenario, lifecycle, and output styles**

Add focused styles for:

```css
.ai-technology-grid
.ai-technology-card
.ai-data-level-legend
.ai-data-level
.ai-affiliate-model-rule
.ai-scenario-grid
.ai-scenario-card
.ai-scenario-card-body
.ai-scenario-result
.ai-lifecycle-grid
.ai-fallback-table
.ai-output-contract-table
```

Use the existing blue/green system. Warning and blocked states must include Korean text labels. Do not add decorative images or animations.

- [ ] **Step 3: Add tablet and mobile rules**

At the existing tablet breakpoint:

- technology and scenario grids become two columns;
- stage contract grids become two columns;
- lifecycle uses three columns.

At the existing mobile breakpoint:

- all grids become one column;
- anchor navigation and flow rail remain horizontally scrollable;
- summary metadata wraps below the title;
- all interactive summaries retain at least a 44px touch target;
- tables keep horizontal scrolling and readable cell padding.

- [ ] **Step 4: Run lint and tests**

```bash
cd explainer-site
npm run lint
npm test
```

Expected: lint reports no errors, build succeeds, prerender succeeds for all routes, and three Node tests pass.

- [ ] **Step 5: Verify built HTML content**

Run:

```bash
rg -n "실제 서비스 AI 처리 흐름|총합적으로 필요한 데이터|최종 AI 결과 계약" \
  explainer-site/dist/client/ai-guide/index.html \
  explainer-site/dist/client/ai-blueprint/index.html \
  explainer-site/dist/client/formulas/index.html
```

Expected: all three phrases appear in all three files.

Run:

```bash
rg -n "MVP 비용 프로필|Q_available|M_inc\(s\)|confidence\)" \
  explainer-site/dist/client/ai-guide/index.html
```

Expected: no matches.

- [ ] **Step 6: Commit verified source and generated output**

```bash
git add explainer-site/src/app/globals.css explainer-site/dist
git commit -m "style: finish production AI guide"
```

---

### Task 6: Publish the validated production AI guide

**Files:**
- Read: `explainer-site/.openai/hosting.json`
- Package: validated `explainer-site/dist/**` and hosting metadata

**Interfaces:**
- Consumes: the exact pushed commit SHA from Task 5.
- Produces: a saved Sites version and successful production deployment at the existing public URL.

- [ ] **Step 1: Confirm only intended source and build changes are committed**

```bash
git status --short
git log -5 --oneline
```

Expected: unrelated existing untracked files remain untouched; AI guide changes are committed.

- [ ] **Step 2: Push the exact validated commit to the existing Sites source repository**

Use the existing project ID from `.openai/hosting.json` and a short-lived source repository credential. Keep the token out of Git configuration and output.

- [ ] **Step 3: Package the site with the Sites helper**

```bash
bash /Users/junha/.codex/plugins/cache/openai-bundled/sites/0.1.33/scripts/package-site.sh \
  explainer-site \
  /private/tmp/heydi-stock-production-ai-guide.tar.gz
```

Expected: the archive path is returned and contains the validated `dist` output.

- [ ] **Step 4: Save one Sites version**

Call `save_site_version` with the existing project ID, exact pushed commit SHA, and the archive from Step 3. Retain the returned opaque version ID.

- [ ] **Step 5: Deploy the saved version to the existing public site**

Use the thread's existing public-deployment approval for the same site and deploy the saved version. Poll the returned deployment ID until `status` is `succeeded` or `failed`.

- [ ] **Step 6: Report the production URL**

Expected URL:

```text
https://heydi-stock-pro-mvp.fullstackquestion.chatgpt.site/ai-guide
```

Report that `/ai-blueprint` and `/formulas` show the same unified guide.
