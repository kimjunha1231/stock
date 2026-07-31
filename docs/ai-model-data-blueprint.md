# AI 모델·통합 상품/재고 데이터 설계서

작성 기준: 2026-07-31  
적용 범위: 현대웰니스·현대리바트·현대그린푸드

이 문서는 세 계열사의 실제 상품군 차이를 DB와 AI 계산에 반영하기 위한 개발 기준입니다. 상품 원천 데이터는 하나의 공통 모델로 모으되, 계열사·카테고리별 속성, 비용, 위험 신호, 허용 전략은 별도 프로필로 관리합니다.

## 1. 먼저 결론

초기에는 AI 모델을 계열사별로 여러 개 만들지 않습니다.

| 구분 | 권장 방식 | 이유 |
| --- | --- | --- |
| 트렌드 감지 | 공통 신호 계산기 + 계열사별 키워드·가중치 | 검색·SNS 지수는 상대값일 수 있어 판매량과 함께 해석해야 함 |
| 수요예측 | 공통 글로벌 모델 + 계열사·카테고리 피처 | 상품별 데이터가 적어도 카테고리·계열사 패턴을 공유할 수 있음 |
| 위험재고 | 규칙·가중치 기반 결정론적 엔진 | 법규·소비기한·설치·검사 조건은 학습 결과가 아니라 차단 규칙이어야 함 |
| 전략 추천 | 후보 생성 + 수식/최적화 엔진 | 같은 입력이면 같은 손익 결과가 나와야 승인·감사를 할 수 있음 |
| 설명 | LLM 1개를 공통 어댑터로 사용 | LLM은 계산된 결과를 쉽게 설명하고 누락 질문만 작성 |

따라서 MVP의 핵심은 **수요예측 모델 1개, 트렌드 신호 계산 1개, 결정론적 위험·손익 엔진 1개, 설명용 LLM 1개**입니다. LLM이 가격이나 수량을 직접 결정하지 않도록 분리합니다.

## 2. AI 기능과 작동 방식

### AI-01 트렌드 신호 감지

검색·SNS·조회·판매량을 날짜와 상품 키로 묶어 급증·급락을 찾습니다.

```text
relative_search_t = 검색 관심도(0~100 또는 내부 검색량을 정규화한 값)
social_t          = 상품명·카테고리 언급량과 감성/상호작용 변화
sales_t           = 품절 보정 순판매량
views_t           = 상품 조회·찜·장바구니 변화

trend_signal_t = clip(
    w_search × robust_z(relative_search_t)
  + w_social × robust_z(social_t)
  + w_sales  × robust_z(sales_t)
  + w_views  × robust_z(views_t),
  -3, 3)
```

Google Trends는 절대 검색량이 아니라 상대 관심도이므로, “검색량이 몇 건”이라고 화면에 표시하지 않고 비교 지수·변화율·수집 시각을 표시합니다. 내부 검색량이 있으면 절대량과 상대지수를 함께 저장합니다. [Google Trends 데이터 안내](https://support.google.com/trends/answer/4365533?hl=ko), [Google Trends API](https://developers.google.com/search/apis/trends)

SNS·검색 데이터를 수요예측에 결합할 수 있다는 근거는 패션 소매 3개 기업의 실증 연구와 IBM 연구에서 확인됩니다. 다만 상품군이 다르므로 가중치는 우리 데이터로 검증해야 합니다. [INFORMS 연구](https://pubsonline.informs.org/doi/10.1287/msom.2023.1193), [IBM Research](https://research.ibm.com/publications/can-social-media-trends-improve-demand-forecast)

### AI-02 트렌드 반영 수요예측

기본수요에 트렌드·가격·프로모션·요일·계절 효과를 추가하고, 예측 구간도 함께 계산합니다.

```text
Q_base(t) = 계층별 기본 수요 예측

log(Q_hat(t)) = log(Q_base(t))
  + β_trend × trend_signal_t
  + β_price  × price_change_t
  + β_promo  × promotion_exposure_t
  + β_season × season_features_t
  + β_channel × channel_features_t

Q_forecast(h) = max(0, exp(log(Q_hat(t+h))))
```

추천 순서는 다음과 같습니다.

1. 기준모델: 계절 naive·가중이동평균·ETS 중 데이터에 맞는 모델
2. 피처 모델: LightGBM/XGBoost 계열의 전역 모델에 계열사·카테고리·채널·트렌드 피처 추가
3. 예측 구간: quantile regression 또는 conformal prediction으로 보수·기본·낙관 범위 생성
4. 계층 보정: SKU 예측 합계가 카테고리·계열사·전체 집계와 맞도록 reconciliation

미래 시점을 섞지 않는 rolling-origin 검증을 사용하고, MAE/WAPE/MASE 또는 RMSSE와 예측구간 coverage를 함께 봅니다. [OTexts 시계열 교차검증](https://otexts.com/fpp3/tscv.html), [계층형 예측](https://otexts.com/fpp3/hierarchical.html), [예측 변수 선택](https://otexts.com/fpp3/selecting-predictors.html)

### AI-03 위험재고 탐지

법규·소유권·데이터 품질·배송/설치/검사 가능 여부를 먼저 하드 차단하고, 통과한 상품만 점수화합니다.

```text
RiskScore_i = 100 × Σ_k (w_k × z_ik)
Σ_k w_k = 1, 0 ≤ z_ik ≤ 1

days_cover_i = available_qty_i / max(Q_forecast_daily_i, ε)
```

공통 신호는 처리기한 압박, 느린 판매속도, 남은 재고, 보관·폐기·반품 비용입니다. 계열사별 신호는 아래 표를 추가합니다.

### AI-04 전략 후보 추천

LLM에게 바로 “할인율을 정해 달라”고 요청하지 않습니다. 수식 엔진이 허용 조합을 만들고 계산한 뒤 상위 후보를 LLM이 설명합니다.

```text
feasible(s) = ownership_ok ∧ legal_ok ∧ freshness_ok
              ∧ capacity_ok ∧ data_quality_ok

Revenue_s = Q_s × sale_price_s - discount_cost_s - benefit_cost_s
VariableCost_s = commission_s + fulfillment_s + return_expected_s
AvoidedCost_s = holding_avoided_s + disposal_avoided_s
M_s = Revenue_s - VariableCost_s + AvoidedCost_s
      - cannibalization_s - risk_penalty_s - ai_case_cost_s
M_inc(s) = feasible(s) × (M_s - M_baseline)
```

가격·재고가 함께 변하는 마크다운 문제는 재고 수준에 따른 가격 경로와 배분을 함께 봐야 한다는 연구를 근거로 합니다. 소비기한 상품은 가격·주문·처분을 함께 최적화해야 한다는 연구를 참고합니다. [Smith & Agrawal (2017)](https://pubsonline.informs.org/doi/abs/10.1287/msom.2016.0609), [Chen·Pang·Pan (2014)](https://pubsonline.informs.org/doi/10.1287/opre.2014.1261)

### AI-05 입고·추가 공급 추천

트렌드 상승이 곧바로 발주 확정은 아닙니다. 예측수요, 리드타임, 안전재고, 이미 들어오는 물량, 처리 가능량을 함께 계산합니다.

```text
forecast_lead = Σ_{d=1..lead_time} Q_forecast(d)
safety_stock  = z_service × σ_lead
target_stock  = forecast_lead + safety_stock

recommended_inbound = clip(
    target_stock - available_qty - open_inbound_qty,
    0,
    supplier_capacity,
    storage_capacity,
    delivery_or_install_capacity)
```

리바트는 `storage_capacity`와 `install_capacity`, 그린푸드는 `cold_chain_capacity`, 웰니스는 `expiry_window`와 공급사 회수 조건이 상한이 됩니다. 예측 오차가 큰 상품은 안전재고를 크게 잡는 대신 “추가 입고 검토” 상태로 낮춰 담당자가 확인합니다.

### AI-06 설명·질문 생성

LLM 입력에는 계산된 숫자, 데이터 기간, 모델 버전, 정책 버전, 차단 결과만 넣습니다. 출력은 다음 JSON 구조로 제한합니다.

```json
{
  "summary": "검색 관심도와 순판매량이 2주 연속 상승했습니다.",
  "recommendation": "추가 입고 검토",
  "evidence": ["검색지수 +42%", "순판매량 +31%", "현재 소진예상 5일"],
  "risks": ["공급 리드타임 8일", "보수 예측 구간에서는 잔여재고 가능"],
  "questions": ["추가 입고 가능 수량과 소비기한을 확인했나요?"]
}
```

## 3. 계열사별 상품군·DB 확장 필드

공식 자료에서 확인되는 대표 상품·사업 맥락은 다음과 같습니다.

- 현대웰니스 공식몰에는 비타민·마그네슘·오메가3·콜라겐 등 영양제와 세트 상품, 임박 표시가 보입니다. 따라서 `ingredient`, `function_claim`, `target_group`, `lot`, `expiry_at`, `storage_condition`, `claim_review_status`가 중요합니다. [현대웰니스 공식몰](https://www.hyundaiwellness.com/)
- 현대리바트 상품은 거실·침실·주방 등 공간별 제품, 옵션·사이즈·컬러와 배송·설치·반품/AS가 결합된 구조입니다. 따라서 `dimension`, `weight`, `option_set`, `warehouse_location`, `delivery_zone`, `install_required`, `install_slot_available`, `damage_rate`, `as_cost`가 필요합니다. [리바트 상품 페이지](https://living.hyundailivart.co.kr/p/P100022920), [리바트 고객센터](https://www.hyundailivart.co.kr/csCenter/main)
- 현대그린푸드는 식자재 유통, 리테일, 건강식 등 다양한 채널과 농산물·수산물·축산물·글로벌상품을 운영합니다. 따라서 `lot`, `expiry_at`, `temperature_class`, `traceability_id`, `inspection_status`, `channel`, `delivery_window`, `cold_chain_capacity`가 중요합니다. [식자재 유통](https://www.hyundaigreenfood.com/po/fb/fdb/FBFDB01L.hgc), [리테일 사업](https://hyundaigreenfood.com/po/fb/rtb/FBRTB01L.hgc)

식품·건강기능식품은 소비기한·보관방법·표시·주의사항을 판매 가능 여부와 분리해 검증해야 합니다. [식품 등의 표시·광고에 관한 법률](https://law.go.kr/lsInfoP.do?lsiSeq=202703), [식품안전나라 소비기한 안내](https://www.foodsafetykorea.go.kr/portal/board/boardDetail.do?bbs_no=bbs001&menu_grp=MENU_NEW01&menu_no=3120&ntctxt_no=1093173)

## 4. Oracle 공통 테이블과 계열사 확장 테이블

### 4.1 공통 기준정보

```text
affiliate(affiliate_id, name, status)
legal_entity(legal_entity_id, affiliate_id, name)
channel(channel_id, affiliate_id, channel_type, fee_profile_id)
category(category_id, parent_id, canonical_name)
brand(brand_id, legal_entity_id, name)
product(product_id, affiliate_id, brand_id, category_id, name, product_type, status)
product_option(option_id, product_id, option_name, option_value)
sku(sku_id, product_id, source_system, source_sku_id, uom, list_price, sale_price, status)
```

### 4.2 재고·판매·신호

```text
inventory_snapshot(snapshot_id, sku_id, location_id, observed_at,
                  on_hand_qty, reserved_qty, available_qty, inbound_qty)
inventory_lot(lot_id, sku_id, received_at, expiry_at, storage_condition,
              inspection_status, available_qty)
sales_event(event_id, sku_id, channel_id, occurred_at, qty, net_sales,
            discount_amount, cancel_qty, return_qty, stockout_flag)
inventory_movement(movement_id, sku_id, movement_type, qty, occurred_at, reason)
trend_signal(signal_id, sku_id, keyword, source_type, observed_at,
             raw_value, normalized_value, change_rate, confidence)
forecast_run(run_id, sku_id, horizon, forecast_at, q10, q50, q90,
             model_version, feature_snapshot_id, status)
```

### 4.3 계열사별 확장

```text
wellness_sku_profile(sku_id, ingredient_json, function_claim_json,
                     target_group, expiry_alert_days, storage_condition,
                     claim_review_status, supplier_recovery_rate)

livart_sku_profile(sku_id, dimension_json, weight, warehouse_location,
                   delivery_zone, lead_time_days, install_required,
                   install_capacity, damage_rate, return_rate, as_cost)

greenfood_sku_profile(sku_id, temperature_class, storage_condition,
                      origin, traceability_id, inspection_status,
                      delivery_window, cold_chain_capacity, waste_rate)
```

확장 테이블은 `sku_id`를 외래키로 사용하고, 조회·집계에 자주 쓰는 값은 컬럼으로, 자주 바뀌거나 계열사만 쓰는 상세 속성은 JSON으로 둡니다. 원천 상품 코드와 공통 `product_id/sku_id` 매핑은 반드시 보존합니다.

## 5. 통합 재고 화면에서 보여줄 컬럼

원가를 숨기는 담당자 화면 기준입니다.

| 컬럼 | 공통 의미 | 계열사별 표시 예 |
| --- | --- | --- |
| 계열사·카테고리 | 어느 조직·상품군인지 | 웰니스/영양제, 리바트/거실가구, 그린푸드/농산물 |
| 상품·SKU | 실제 판매 단위 | 용량·색상·사이즈·로트까지 구분 |
| 현재 가용수량 | `on_hand - reserved` | 리바트는 설치 가능량, 그린푸드는 콜드체인 가능량 배지 추가 |
| 판매속도·예상수요 | 최근 순판매량과 예측 일일량 | 트렌드 효과가 적용됐는지 표시 |
| 트렌드 | 상승·유지·하락, 변화율 | 검색·SNS·판매 신호별 출처와 수집시각 |
| 처리기한 | 위험을 바꾸는 시간 | 웰니스/그린푸드는 소비기한, 리바트는 보관일·납기·설치일 |
| 위험점수·등급 | 0~100, 정상·주의·위험 | 기여 신호를 클릭하면 원천값 표시 |
| 차단 상태 | 판매·추천 가능 여부 | 표시 누락, 검사 보류, 설치 슬롯 부족 등 |
| 추천 다음 행동 | 검토용 결과 | 추가 입고 검토, 할인 검토, 유지, 처리 우선 |
| 데이터 기준시각 | 결과가 언제 기준인지 | snapshot·forecast run 시간 |

## 6. 상품별·계열사별 전략 조건 적용

### 공통 입력

`sku_id`, 현재 가용수량, 판매가, 원가(서버 전용), 최근 순판매량, 예측수요, 트렌드 신호, 채널 수수료, 배송·처리비, 반품률, 보관비, 폐기비, 정책 버전, 기준선 snapshot.

### 현대웰니스

소비기한·표시·기능성 설명이 하드 차단입니다. 전략은 잔여기한이 짧을수록 할인·묶음·채널 전환의 처리 속도를 우선하고, 건강 관련 문구는 승인된 상품 속성만 사용합니다.

### 현대리바트

가격 할인보다 공간·설치·배송·파손 비용을 함께 봅니다. 같은 모델이라도 옵션·크기·지역·설치 슬롯이 다르면 별도 SKU 전략을 만들고, 설치 가능량을 넘는 수요 증대 후보는 차단합니다.

### 현대그린푸드

소비기한·온도·검사·이력추적·콜드체인이 하드 차단입니다. 트렌드 상승 시에도 냉장·냉동 처리량과 폐기 가능성을 먼저 확인하고, 신선식품은 로트별 선입선출과 남은 기한을 반영합니다.

## 7. 개발 순서

1. 세 계열사 원천 상품·SKU 코드와 공통 매핑 테이블을 확정합니다.
2. 판매·재고·품절·반품·가격·프로모션 데이터를 일 단위로 적재합니다.
3. 외부 검색·SNS 데이터는 동의·라이선스·수집 주기와 함께 저장합니다.
4. 기준 수요예측을 만든 뒤 트렌드 피처를 추가해 rolling-origin 검증합니다.
5. 하드 차단과 위험점수 엔진을 고정하고, 전략 후보 계산을 연결합니다.
6. 계열사별 정책 프로필을 적용해 같은 SKU라도 다른 전략 조건으로 계산합니다.
7. 통합 재고 표에서 근거·예측 구간·추천 다음 행동을 확인하게 합니다.
8. 승인·실행 후 실제 판매·잔여재고를 회수해 모델 오차와 정책 효과를 비교합니다.

## 8. 모델 도입 보류 조건

- 검색·SNS 신호의 상품 매핑이 불안정하면 트렌드 효과를 0으로 두고 판매이력만 사용
- 판매이력이 너무 짧거나 품절 보정이 안 되면 “예측 부족”으로 표시
- 계열사별 원가·처리비·소유권이 확정되지 않으면 마진 순위를 만들지 않음
- 식품 표시·검사·보관조건, 리바트 설치·배송 가능량이 없으면 해당 후보를 차단
- 실제 결과가 충분히 쌓이기 전에는 자동 입고·자동 가격변경을 실행하지 않음
