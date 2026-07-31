# 3개 계열사 통합 재고 의사결정 서비스 기능·데이터·수식 명세

작성 기준: 2026-07-30

대상 계열사: 현대웰니스, 현대리바트, 현대그린푸드

문서 상태: 요구사항·데이터 계약·계산 엔진 설계를 위한 기준 문서

> 이 문서는 “화면에 무엇을 보여줄 것인가”뿐 아니라, 어떤 데이터를 받아 어떤 규칙과 수식으로 계산하고 어떤 상태로 승인·기록할 것인지까지 정의한다. 실제 원가·수수료·공급사 계약·판매 이력은 내부 데이터 계약이 연결되기 전까지 미확정으로 취급한다.

> 범위 경계: 이 서비스는 주문·결제·배송·상품 등록을 실행하지 않는다. 외부 판매·정산 시스템의 이력은 수요예측과 성과 비교에 사용하고, 이 서비스는 적절한 할인·판매 방식·입고·처리 전략을 계산해 검토 자료로 전달한다.

## CAPABILITY

계열사 담당자가 소속 계열사의 상품·재고·외부 판매이력·비용 정보를 확인하고, 계열사와 카테고리에 맞는 위험재고 처리 전략을 비교·시뮬레이션·승인할 수 있는 통합 의사결정 서비스다. 데이터와 화면은 통합하지만 상품 단위, 처리기한, 법규, 비용, 위험 가중치와 하드 차단 조건은 계열사별 정책으로 분리한다.

서비스의 최종 결과는 “AI가 임의로 가격을 바꾸는 것”이 아니다. 결정론적 정책·수식 엔진이 실행 가능 여부와 손익을 계산하고, 예측 모델이 트렌드·판매량을 반영해 수요를 추정하며, LLM은 승인된 결과를 사람이 이해하기 쉬운 전략 설명으로 변환한다. 최종 가격·수량·실행은 권한 있는 담당자가 승인한다.

## CONSTRAINTS

### 고정 정책

- 3개 계열사의 데이터를 하나의 공통 조회 모델로 관리하되, 계열사·법인·점포·채널 권한은 분리한다.
- 원가는 일반 화면에 표시하지 않는다. 손익 계산과 감사 로그에는 원가 버전·출처·접근권한을 남긴다.
- 법규·소비기한·소유권·정책·필수 데이터 품질을 비용이 아닌 하드 차단 조건으로 처리한다.
- 필수값이 `unknown`이면 수익 순위를 계산하거나 실행 추천을 생성하지 않는다. 차단 사유와 확인 담당자를 표시한다.
- 전략 조건이 승인 후 변경되면 새 전략 버전을 만들고 재승인한다.
- Teams는 요청·결과 전달 채널이며 서비스의 승인 기록을 대체하지 않는다.
- LLM이 숫자·가격·수량·법적 판단을 직접 결정하지 않는다.

### 공통과 계열사별 분리 원칙

- 공통: 전략 실행 가능성, 예상 판매량, 매출, 변동비, 회피비용, 위험손실, 기준선 대비 증분이익, 승인·감사 상태.
- 계열사별: 재고 단위, 처리기한, 법규 필드, 비용 항목, 위험 신호, 가중치, 임계값, 허용 전략.
- 카테고리별: 가격 반응, 판매 속도 기준, 반품·폐기율, 보관 조건, 최소 잔여기한, 채널 정책.
- 상품별: 현재 수량·가격·기한·비용·상태·외부 판매 이력과 정책 버전.

### 데이터 준비 수준

- 공개 자료: 상품군·채널·법규·운영 특성의 근거로 사용한다.
- 내부 계약 필요: ERP/POS/WMS 원천, 검색·SNS 데이터 제공 범위, canonical 상품키, 원가·수수료·할인 부담, 회수·폐기 계약, 실제 판매 이력, 데이터 소유자와 갱신주기.
- 미보정 값: 수요 반응계수, 기준선, 위험 가중치, 등급 임계값은 예시값으로 운영하지 않고 `미확정` 또는 `입력 필요`로 표시한다.

## IMPLEMENTATION CONTRACT

## 1. 사용자·권한·조직 기능

### F-01 로그인·세션

- 사용자: 담당 MD, 승인자, 그룹/계열사 전략 담당자, 관리자.
- 입력: 사번/이메일, 비밀번호 또는 조직 인증 결과, JWT 만료·갱신 정보.
- 기능: 로그인, 로그아웃, 토큰 갱신, 만료 세션 차단, 마지막 로그인 기록.
- 출력: 사용자 ID, 표시명, 소속 법인, 역할, 접근 가능한 계열사·점포·채널 범위.
- 규칙: JWT에는 최소 식별자와 역할만 담고, 세부 권한은 서버가 조회한다. 토큰 저장·갱신 방식과 만료시간은 보안 검토에서 확정한다.

### F-02 계열사·법인·점포·채널 권한

- 공통 권한 범위: `group`, `affiliate`, `legal_entity`, `store_or_center`, `channel`.
- 권한 역할: 조회자, 담당 MD, 승인자, 예외 검토자, 시스템 관리자.
- 담당 MD: 소속 범위 조회, 전략 작성·수정, 검토 요청, 실행 결과 확인.
- 승인자: 소속 범위 전략 승인·거절·재승인.
- 예외 검토자: 대규모 손실, 법규·브랜드 위험, 계열사 간 조정의 예외 검토.
- 관리자: 사용자·정책·데이터 계약·코드값·배치·연동 상태 관리.
- 규칙: 조회 권한과 승인 권한을 분리한다. 다른 계열사의 원가·민감 비용은 권한 없이는 노출하지 않는다.

### F-03 사용자·권한 감사

- 기록: 로그인, 권한 변경, 계열사 전환, 원가 조회 시도, 전략 생성·수정·승인·거절, 데이터 재처리.
- 필드: actor, action, target_type, target_id, before, after, reason, request_id, timestamp.
- 보존: 보존 기간은 조직 정책으로 확정하며 삭제·변경 불가 감사 로그로 관리한다.

## 2. 통합 기준정보·상품 관리

### F-04 계열사·법인·브랜드 기준정보

- 계열사와 운영 법인을 별도 식별한다. 브랜드명과 법인명이 같다고 가정하지 않는다.
- 관리값: 계열사 ID, 법인 ID, 브랜드 ID, 정산 주체, 기본 통화, 운영 상태, 담당 조직.
- 기능: 등록·수정·비활성화·이력 조회·중복 매핑 검증.

### F-05 상품·카테고리·옵션·SKU

- 공통 필드: product_id, sku_id, affiliate_id, legal_entity_id, brand_id, category_id, name, unit, status, list_price, sale_price.
- 옵션 필드: option_set, variant, bundle_eligible, channel_eligibility, return_policy_id.
- 내부 필드: cost_price, cost_version, settlement_rule_id. 원가는 서버 계산 전용.
- 기능: 검색·필터·상세 조회·상태 변경·계열사 원천키 매핑·중복/단위 검증.
- 규칙: 상품은 하나의 공통 ID를 사용하되 원천 시스템별 외부키를 별도 보관한다.

### F-06 카테고리별 정책 프로필

- 정책 키: affiliate_id, category_id, product_type, formula_profile_version.
- 정책값: 최소 잔여기한, 판매 속도 기준, 허용 할인 범위, 허용 채널, 반품·폐기 규칙, 위험 신호 가중치, 등급 임계값.
- 상태: draft → review → approved → active → retired.
- 규칙: 활성 정책은 전략·시뮬레이션 실행 시점에 snapshot으로 저장한다.

### F-07 법규·안전·판매 제한

- 공통 필드: legal_ok, restriction_type, evidence_id, valid_from, valid_to, checked_at, checked_by.
- 전략 차단 예: 리콜, 표시 누락, 소비기한·보관조건 미확인, 주문제작 취소·AS 정책 미확인, 비용 정책 미확인.
- 출력: 가능, 조건부 가능, 차단, 확인 필요.

## 3. 재고·외부 성과 데이터

### F-08 원천 데이터 연결·수집

- 원천 범위: ERP, POS, WMS, 검색·SNS 신호, 외부 판매·정산 시스템, 품질·검사 시스템.
- 수집 방식: API, 파일, 배치, 수동 업로드 중 계열사별 방식을 지정한다.
- 모든 수집에는 source_system, source_record_id, observed_at, received_at, batch_id를 붙인다.
- 실패 처리: 재시도, 중복 방지, 격리 저장, 부분 성공 보고, 마지막 정상 시각 표시.

### F-09 재고 스냅샷·로트·보류 수량

- 물리 재고: on_hand_qty, reserved_qty, available_qty, warehouse/store, lot_id, received_at.
- 외부 시스템에서 보류된 수량이 있으면 `reserved_qty`로 회수하되 주문·배송 상태를 이 서비스가 관리하지 않는다.
- 공통 계산 단위는 `Q_available`로 추상화하되 원래 단위와 변환 규칙을 저장한다.
- 기준시각이 다른 원천 데이터를 섞지 않도록 snapshot_id를 계산 입력에 포함한다.

### F-10 판매 이력

- 필드: transaction_id, product_or_offer_id, quantity, price, discount, coupon, channel, occurred_at, cancel_qty, return_qty, status.
- 외부 원천의 판매·취소·환불 결과를 구분해 회수한다.
- 판매 이력은 전략 효과 검증과 수요 예측의 label로 사용하며, 수기 입력을 원천 데이터로 간주하지 않는다.

### F-11 재고 변동·정산·비용 이력

- 변동 유형: 입고, 출고, 예약, 취소, 반품, 이동, 회수, 폐기, 조정.
- 비용 유형: 판매 수수료, 결제 처리비, 배송·설치·콜드체인, 반품·재배송, 보관, 폐기, 캠페인 고정비.
- 각 금액은 amount, currency, cost_owner, source, version, effective_at을 저장한다.

### F-12 데이터 품질·신선도

- 검사: 필수값, 중복, 단위, 음수 수량, 가격 순서, 시간 순서, 외부키 매핑, 기한·마감 역전.
- 상태: accepted, accepted_with_warning, quarantined, rejected.
- 화면: 품질 점수, 누락 필드, 기준시각, 담당자, 재검증 예정시각.
- 규칙: `quarantined` 또는 핵심 필드 `unknown`이면 추천·승인 버튼을 비활성화한다.

## 4. 통합 재고 조회·대시보드

### F-13 통합 홈 대시보드

- KPI: 전체 가용 수량, 재고금액, 위험·주의·정상 비율, 장기재고, 판매 부진, 미확정 데이터 건수.
- 필터: 계열사, 법인, 점포/센터, 채널, 카테고리, 브랜드, 기한 구간, 위험 등급.
- 기능: KPI 클릭 시 목록으로 drill-down, 기준시각 표시, 데이터 지연 배지, CSV 내보내기.

### F-14 통합 재고 목록

- 컬럼: 상품/SKU, 계열사, 카테고리, 전략 대상 수량, 판매속도, 남은 기한/납기, 위험점수, 차단 사유, 마지막 갱신.
- 기능: 정렬·필터·컬럼 저장·대량 선택·상세 이동.
- 원가: 권한이 없으면 금액을 숨기고 위험·수량·판매속도 중심으로 표시한다.

### F-15 상품 상세

- 탭: 기본정보, 재고·로트, 외부 성과 추이, 비용 요약, 위험 진단, 전략 이력, 감사 이력.
- 그래프: 기간별 판매량, 가격·할인, 재고 잔량, 취소·반품, 기한 압박.
- 액션: 위험 진단 보기, 전략 생성 요청, 기존 전략 비교.

## 5. 위험재고 탐지

### F-16 위험점수 계산

- 공통 신호: 처리기한 압박, 판매속도 부족, 전략 대상 수량 대비 수요, 재고가치·보관·폐기 비용, 데이터 불확실성.
- 계열사 신호는 아래 수식 프로필에서 정의한다.
- 결과: score 0–100, grade, contributing_signals, hard_stop, policy_version.
- 실행 주기: 일 1회 기본, 내부 데이터 갱신 빈도에 따라 추가 주기 검토.

### F-17 위험 이유·우선순위

- 이유는 “소비기한 14일 남음”, “배송·설치 비용 미확인”, “트렌드 급락”처럼 원천값과 함께 표시한다.
- 위험점수는 처리 순서이며, 법규·소유권·데이터 미확인을 상쇄하지 않는다.
- 사용자 액션: 확인, 전략 생성, 보류 사유 입력, 예외 검토 요청.

## 6. 전략 후보 생성·AI 추천

### F-18 전략 입력·목표 선택

- 목표: 순마진 방어, 빠른 소진, 최대 매출, 위험 최소화.
- 허용 입력: 적용 수량, 할인율, 쿠폰·포인트, 처리 기간, 판매 방식, 배송·설치 예상비, 묶음 여부, 캠페인 비용.
- 계열사별 금지 조합: 법규 위반, 할인 한도 초과, 필수 비용·정책 미확인.

### F-19 전략 후보 생성

- MVP: 허용된 할인율·처리 기간·수량·판매 방식의 유한 조합을 생성한다.
- 순서: 하드 차단 → 예상량 계산 → 손익 계산 → 기준선 비교 → 목적별 정렬 → 최대 3개 후보.
- 후보마다 입력 snapshot, 정책 버전, 수식 버전, 예상 결과, 신뢰도, 주요 위험을 저장한다.
- LLM은 후보의 숫자를 새로 계산하거나 수정하지 않는다.

### F-20 AI 추천 결과

- 출력: 전략명, 적용 대상, 조건, 예상 판매·매출·이익·잔여량·소진기간, 하방 위험, 추천 이유, 사용 데이터 기간.
- 모델 경계:
  - 정책/수식 엔진: feasible, 비용, M_inc, RiskScore.
  - 예측 모델: Q_base, 가격·기간·채널 반응, 예측 구간.
  - LLM: 상위 후보 설명, 누락 질문, 담당자용 실행 안내.
- 실패: 모델 timeout, 구조화 출력 오류, 데이터 부족, 비용 한도 초과는 추천 실패 또는 계산 결과만 제공으로 degrade한다.

## 7. 전략 시뮬레이션

### F-21 조건 변경

- 화면 입력: 수량, 할인율, 쿠폰, 포인트, 처리 기간, 배송·설치 예상비, 프로모션 비용, 번들 구성·가격.
- 검증: 수량 범위, 할인 상한, 처리 기간·소비기한, 판매 방식 정책, 하드 차단.
- 변경 시 원본 추천값과 사용자 변경값을 구분한다.

### F-22 시뮬레이션 결과

- 결과: 예상 판매량, 매출, 변동비, 예상 이익, 마진율, 소진기간, 행사 종료 잔량, 회피비용, 위험손실.
- 비교: 기준선, 원본 추천, 사용자 조정안, 보수·기본·낙관 시나리오.
- 결과 상태: calculated, blocked, incomplete, failed.
- `blocked` 결과는 순위와 승인 버튼을 제공하지 않는다.

## 8. 계열사별 계산 프로필

### F-23 현대웰니스

- 대상 단위: SKU·lot.
- 필수 입력: lot_id, expiry_at, storage_condition, function_claim_class, return_eligible, supplier_recovery_rate.
- 주요 비용: 배송·포장·결제 수수료, 쿠폰·포인트 부담, 반품 검수, 회수·폐기.
- 하드 차단: 소비기한·보관조건·필수 표시·주의사항·판매 권한 미확인, 리콜/품질 보류.
- 위험 신호: 잔여기한, 느린 판매속도, 예상 폐기비, 표시·보관정보 누락.

### F-24 현대리바트

- 대상 단위: 제품·옵션·프로젝트·WIP.
- 필수 입력: option, lead_time_days, install_required, delivery_fee, install_fee, damage_rate, return_rate, as_cost.
- 주요 비용: 보관·전시 공간, 라스트마일, 설치, 파손·재배송·회수, 반품·AS.
- 하드 차단: 주문제작 생산상태·반품·AS·배송·설치 비용 정책 미확인.
- 위험 신호: 보관일, 납기 지연, 파손·반품·AS 비용.

### F-25 현대그린푸드

- 대상 단위: SKU·lot·배송센터.
- 필수 입력: expiry_at, temperature_class, storage_condition, origin, traceability_id, inspection_status, disposal_cost.
- 주요 비용: 피킹·포장, 냉장·냉동 배송, 보냉재·에너지, 회수·폐기, 채널 수수료·반품.
- 하드 차단: 소비기한·보관조건·HACCP/이력추적·검사 보류 정보 미확인.
- 위험 신호: 소비기한, 예상 폐기량, 온도 이탈, 냉장·냉동 비용.

## 9. 수식·계산 엔진

### 공통 수식 인터페이스

```text
feasible(a,c,p,s) = 1
  if all hard-stop checks are pass
else 0
```

```text
Q_expected(a,c,p,s)
  = min(Q_available,
        max(0, Q_base
          × F_time × F_price × F_channel × F_bundle))
```

`confidence`는 수량에 임의로 곱하지 않고, 예측 구간·표본 부족·캘리브레이션 상태를 표시하는 메타데이터로 저장한다.

```text
Revenue_s = Q_expected × P_list × (1 - discount)
            - Q_expected × (coupon + point + subsidy)

VariableCost_s = Q_expected × (commission + channel_fee
                                + payment + fulfillment + return_expected)
                 + campaign_fixed_cost

AvoidedCost_s = avoided_holding + avoided_disposal

M_s = Revenue_s - VariableCost_s + AvoidedCost_s
      - Cannibalization_s - RiskPenalty_s - AI_CaseCost_s

M_inc(s) = feasible × (M_s - M_baseline)
```

### 기준선

`M_baseline`은 단순히 “현재 가격 유지”가 아니다. 프로모션을 하지 않아도 실행 가능한 정상 판매, 회수, 기부, 폐기 등의 대안 중 계열사 기준으로 가장 유리한 결과를 frozen snapshot으로 저장한다.

### 위험점수

```text
RiskScore_i = 100 × Σ(w_k × z_ik)
Σw_k = 1
z_ik ∈ [0, 1]
```

가중치와 임계값은 계열사·카테고리·정책 버전별로 저장하고 실제 폐기·잔여재고·마진 손실 outcome으로 보정한다.

## 10. 데이터 모델 구성

### 공통 핵심 테이블

- `affiliate`, `legal_entity`, `store_or_center`, `channel`
- `user`, `role`, `permission_scope`, `user_scope`
- `brand`, `category`, `product`, `product_option`, `sku`
- `external_product_mapping`
- `inventory_snapshot`, `inventory_lot`, `strategy_cost_snapshot`
- `sales_event`, `inventory_movement`
- `cost_snapshot`, `settlement_rule`, `policy_profile`, `formula_profile`
- `risk_assessment`, `risk_signal`, `risk_threshold`
- `strategy`, `strategy_candidate`, `strategy_parameter`, `simulation_run`, `simulation_result`
- `approval_request`, `approval_event`, `execution_record`, `performance_result`
- `data_quality_issue`, `batch_run`, `model_version`, `notification`, `audit_log`

### 계열사 확장 테이블 또는 JSON 속성

- Wellness: lot·expiry·storage·function claim·return eligibility.
- Livart: option·lead time·install required·delivery/install fee·damage/AS.
- Green Food: lot·expiry·temperature·traceability·inspection·disposal cost.

핵심 조회·조인에 사용하는 필드는 정규화 테이블로 두고, 계열사별 확장 속성은 변경 빈도와 검색 필요성에 따라 별도 테이블 또는 Oracle JSON 컬럼을 선택한다. 정책과 계산 결과에는 항상 `policy_version`, `formula_version`, `snapshot_id`, `model_version`을 기록한다.

## 11. 상태 전이

### 데이터

`received → validating → accepted / accepted_with_warning / quarantined / rejected`

### 위험 진단

`detected → acknowledged → in_review → strategy_requested → resolved / suppressed`

### 전략

`draft → generated → edited → submitted → approved / rejected → handed_off → outcome_received / failed / cancelled`

조건·수량·가격·정책 버전이 바뀌면 기존 승인 상태를 유지하지 않고 새 버전으로 되돌린다.

### Teams 전달

`not_requested → requested → sent → delivered / failed → retrying / exhausted`

Teams 전송 성공은 서비스 승인 성공과 별도 상태로 보관한다.

## 12. API·배치 인터페이스

### 조회 API

- `GET /api/v1/affiliates`
- `GET /api/v1/products?affiliateId=&categoryId=&status=`
- `GET /api/v1/inventory?affiliateId=&riskGrade=&asOf=`
- `GET /api/v1/inventory/{id}/history`
- `GET /api/v1/risk-assessments/{id}`

### 전략·시뮬레이션 API

- `POST /api/v1/strategies/recommend`: 승인된 snapshot과 목표로 후보 생성 요청.
- `POST /api/v1/strategies/{id}/simulate`: 조건 변경 시 결정론적 결과 계산.
- `GET /api/v1/strategies/{id}`: 후보·수식·근거·버전 조회.
- `POST /api/v1/strategies/{id}/submit`: 검토 요청.
- `POST /api/v1/strategies/{id}/approve` 또는 `/reject`: 권한 있는 승인자 처리.

### 배치·운영 API

- `POST /api/v1/batches/inventory-refresh`
- `POST /api/v1/batches/risk-recalculate`
- `GET /api/v1/batches/{id}`
- `POST /api/v1/notifications/teams/{id}/retry`
- `GET /api/v1/performances/{strategyId}`

모든 API는 `request_id`, 표준 오류 코드, 권한 범위, 기준시각, 버전 정보를 응답에 포함한다. 계산 API는 같은 입력 snapshot·정책·버전에서 같은 결과를 반환해야 한다.

## 13. 알림·감사·관제

- 알림: 신규 위험재고, 데이터 차단, 전략 검토 요청, 승인·거절, 번들 구성 부족, Teams 실패, 배치 실패.
- Sentry: 화면·API 오류와 사용자 흐름.
- ELK: 요청 ID·계열사·배치·전략 ID 기반 구조화 로그.
- Prometheus/Grafana: API 지연, 오류율, 배치 성공률, 데이터 신선도, 추천 차단율, Teams 성공률, AI 호출 비용.
- 운영 화면: 실패 재시도, 격리 데이터 확인, 정책 버전 비교, 계산 결과 재현.

## 14. 단계별 범위

### P0 — 기반과 대표 수직 슬라이스

- 권한·조직 범위
- 공통 상품·재고·외부 성과 이력 모델
- 계열사별 필수 입력과 하드 차단
- 결정론적 위험점수·시뮬레이션 엔진
- 그린푸드 로트/소비기한 또는 리바트 배송·설치 비용 중 대표 수직 슬라이스 1개 완성
- 계산 결과·버전·감사 로그

### P1 — 4계열사 확장과 사람 승인

- 네 계열사 대표 카테고리 확장
- 후보 생성기·목표별 최대 3개 전략
- 담당자 수정·승인·Teams 전달
- 실제 판매·정산 결과 회수
- 예상값과 실제값 비교·오차 원인 기록
- LLM 설명 adapter를 제한적으로 연결

### P2 — 확장 기능

- 교차 계열사 번들 구성·재고 예약·매출 배분
- 계열사 간 재고 이동 추천
- 자동 재학습·모델 배포
- 고급 채널 최적화와 공동 프로모션

## 15. 검증 기준

### 수식·도메인 테스트

- 각 계열사·대표 카테고리별 고정 입력 벡터와 기대 결과를 만든다.
- 하드 차단 하나라도 실패하면 추천·승인이 차단되는지 확인한다.
- 원가·반품·수수료·회피비용 중복 계산이 없는지 확인한다.
- baseline snapshot이 바뀌면 이전 결과가 재현되지 않는 것이 아니라 버전별로 재현되는지 확인한다.
- 보수·기본·낙관 시나리오의 결과 순서와 손익분기 조건을 확인한다.

### 데이터·권한 테스트

- 계열사 담당자가 다른 계열사의 민감 비용을 조회할 수 없는지 확인한다.
- 누락·중복·지연·단위 오류 데이터가 격리되는지 확인한다.
- 원천 레코드에서 계산 결과까지 추적 가능한지 확인한다.

### E2E 테스트

`로그인 → 계열사 선택 → 위험상품 조회 → 전략 생성 → 조건 변경 → 시뮬레이션 → 수정 → 승인 요청 → 승인/거절 → Teams 전달 → 실제 결과 입력 → 성과 비교`를 대표 시나리오로 검증한다.

## NON-GOALS

- 초기 단계에서 AI가 가격·재고·폐기를 자동 실행하는 기능.
- 내부 데이터 계약 없이 공개 자료만으로 실제 이익을 확정하는 기능.
- 계열사 간 재고 이동과 교차 계열사 번들을 P0 기본 전략으로 취급하는 것.
- LLM이 원가·법규·수요·위험점수를 임의로 산출하거나 수정하는 것.
- 실제 판매·정산 원천 없이 예측 오차와 AI 학습 효과를 확정하는 것.

## OPEN QUESTIONS

- 각 계열사의 ERP/POS/WMS/검색·SNS/정산 원천과 데이터 소유자는 누구인가?
- 대표 카테고리와 1차 수직 슬라이스는 무엇인가?
- `M_baseline`의 대안 목록·시간창·승인자는 누구인가?
- 수요 예측에 사용할 최소 이력 기간, cold-start fallback, 계절성 기준은 무엇인가?
- 카테고리별 가격·채널·번들 반응계수와 위험 가중치를 어떤 데이터로 보정할 것인가?
- AI/LLM 모델, 데이터 보존·반출 정책, 호출 비용 상한은 무엇인가?
- Teams 채널·수신자 매핑과 재시도 정책은 무엇인가?
- 실제값 미수집 시 화면에 `미수집`을 표시할지, 데모용 mock 모드를 별도로 제공할지?

## HANDOFF

현재 문서는 기능·데이터·계산·상태·검증 요구사항을 정리한 요구사항 기준이다. 실제 구현 전 다음 순서가 필요하다.

1. 계열사별 데이터 계약과 대표 카테고리를 확정한다.
2. formula profile, baseline, action space, hard-stop 상태를 결정한다.
3. P0 대표 수직 슬라이스의 Oracle/Flyway/MyBatis 데이터 모델과 결정론적 계산 엔진을 설계한다.
4. 고정 테스트 벡터와 과거 데이터 backtest를 통과시킨다.
5. 검증된 계산 결과에 한해 예측 모델과 LLM 설명 adapter를 연결한다.

따라서 이 문서는 **바로 AI 개발을 시작하는 문서가 아니라, 데이터 계약·정책·수식 확정 후 구현으로 넘기기 위한 기준 문서**다.
