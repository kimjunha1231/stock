# 3개 계열사 통합 AI 판매전략·시뮬레이션 조사 메모

작성 기준: 2026-07-30
범위: 현대웰니스, 현대리바트, 현대그린푸드
목적: 서로 다른 상품·서비스를 하나의 위험재고 탐지와 AI 판매전략 계산에 넣기 위한 입력 계약과 수식의 기준선 정의

## 1. 먼저 고정할 원칙

3개 계열사의 계산 구조는 하나로 통일하되, `재고 단위`, `처리기한`, `변동비`, `하드 차단 조건`과 트렌드 신호 가중치는 계열사별로 다르게 입력한다. 이 서비스는 판매·주문·배송을 실행하지 않고, 외부 시스템에서 실행할 전략 후보를 비교한다. 따라서 “같은 수식”은 목적함수와 계산 순서가 같다는 뜻이지, 모든 계열사가 같은 변수와 임계값을 쓴다는 뜻은 아니다.

다음 항목은 현재 공개 자료만으로 확정할 수 없는 내부 데이터다.

- 계열사별 소유권·정산 구조와 원가/수수료 부담률
- ERP·POS·WMS와 검색·SNS 데이터의 canonical 상품키·배치 주기
- 실제 할인 한도, 쿠폰·포인트 부담 주체, 프로모션 승인권자
- 공급사별 반품·회수·폐기 계약
- 상품별 수요 탄력성, 판매예측 모델 버전, AI 호출 단가

위 값은 문서의 예시값으로 넣지 않고, 데이터 계약이 연결되기 전까지 `미확정` 또는 `입력 필요` 상태로 둔다.

## 2. 공통 계산 프레임

### 2.1 전략 실행 가능성

```text
feasible(s) = 1
  if ownership_ok
  and legal_ok
  and freshness_ok
  and policy_ok
  and data_quality_ok
else 0
```

하드 차단 조건이 0이면 예상 이익이 높아도 전략 후보에서 제외한다. 식품 소비기한·보관방법, 건강기능식품 표시·주의사항, 리바트의 배송·설치 비용 정책처럼 비용보다 먼저 확인하는 값이다.

### 2.2 수요·판매량

```text
Q_s = min(Q_available, max(0,
      Q_base × F_time × F_price × F_channel × F_bundle × confidence))
```

- `Q_available`: 보류 수량을 제외한 전략 계산용 현재 재고
- `Q_base`: 동일 상품·채널·기간의 기준 판매량
- `F_time`: 남은 판매일/처리기한까지의 시간 효과
- `F_price`: 할인·쿠폰·포인트가 만드는 가격 반응
- `F_channel`: 앱·매장·B2B·제휴채널별 노출 효과
- `F_bundle`: 묶음 구성으로 인한 보완/대체 효과. 교차 계열사 번들은 현재 P2로 둔다.
- `confidence`: 예측 신뢰도와 하방 시나리오를 반영하는 보수 계수

수요함수의 재고·가격 의존성은 Smith & Agrawal의 INFORMS 논문을 공통 이론 근거로 삼는다. 다만 논문의 일반 리테일 가정이 3개 계열사의 계약·규제·비용 정책을 자동으로 보장하지는 않으므로, 실제 적용 조건은 별도 정책 검증으로 관리한다.

### 2.3 증분 기여현금이익

```text
Revenue_s = Q_s × P_list × (1 - discount)
            - Q_s × (coupon + point + affiliate_subsidy)

VariableCost_s = Q_s × (commission + payment + fulfillment
                         + return_expected + channel_fee)
                 + campaign_fixed_cost

AvoidedCost_s = avoided_holding
              + avoided_disposal

M_s = Revenue_s - VariableCost_s
      + AvoidedCost_s
      - Cannibalization_s
      - RiskPenalty_s
      - AI_CaseCost_s

M_inc(s) = feasible(s) × (M_s - M_baseline)
```

이미 발생해 전략으로 바뀌지 않는 취득원가는 `M_inc`의 변동 비용으로 다시 차감하지 않는다. 원가를 화면에 보여주지 않는 경우에도 서버 계산과 감사 로그에는 원가 버전·출처·접근권한을 남긴다.

### 2.4 위험점수

```text
RiskScore_i = 100 × Σ(w_k × z_ik),  Σw_k = 1
```

`z_ik`는 계열사별로 정의한 0~1 정규화 신호다. 공통 신호는 처리기한 압박, 판매속도 부족, 재고가치, 수요 불확실성, 보관·폐기·반품 비용이며, 등급 임계값과 가중치는 버전으로 저장한다. 점수보다 하드 차단이 우선한다.

## 3. 계열사별 조사 결과와 입력 요소

### 3.1 현대웰니스

#### 공개 자료에서 확인한 사실

- [현대웰니스 공식몰](https://www.hyundaiwellness.com/)은 건강기능식품·영양제 중심으로 브랜드, 성분, 기능, 대상, 선물세트 등의 분류를 제공한다.
- 공식 상품 목록에는 판매수량, 판매가, 소비기한이 보이고 `임박`·`타임세일` 같은 상태 표현이 함께 사용된다.
- 현대백화점그룹 공개 페이지에서 현대웰니스가 현대바이오랜드의 공식몰로 연결된다. 법인·정산 주체는 실제 데이터 계약에서 확인해야 한다.
- [식품안전나라 건강기능식품 안내](https://www.foodsafetykorea.go.kr/portal/board/boardDetail.do?bbs_no=bbs001&menu_grp=MENU_NEW01&menu_no=3120&ntctxt_no=21776)는 인정된 기능성·섭취방법·주의사항·유통기한 확인을 요구한다. [건강기능식품에 관한 법률](https://www.law.go.kr/LSW/lsInfoP.do?ancYnChk=0&lsId=009353)과 함께 표시·리콜·클레임 상태를 판매전략보다 먼저 검증한다.

#### 상품·재고 입력

`sku_id`, `brand_id`, `category`, `lot_id`, `on_hand_qty`, `reserved_qty`, `list_price`, `sale_price`, `expiry_at`, `storage_condition`, `function_claim_class`, `channel`, `return_eligible`, `supplier_recovery_rate`.

#### 전략에 반영할 비용·제약

- 남은 소비기한과 최소 잔여기한: 날짜가 임박한 상품은 할인 후보가 될 수 있지만, 표시·보관·기능성 정보가 확인되지 않으면 차단한다.
- 반품·검수·재판매 가능성: 건강기능식품은 개봉 여부와 상품군 정책을 분리한다.
- 채널 수수료·쿠폰·포인트·배송비와 공급사 회수/폐기 비용.
- 과장된 건강 효능 표현은 전략 설명에 사용하지 않고, 승인된 상품 속성만 근거로 삼는다.

#### 계열사별 위험 신호

```text
z_expiry = max(0, 1 - days_to_expiry / expiry_alert_window)
z_velocity = max(0, 1 - ROS / target_ROS)
z_stock_value = normalized(on_hand_qty × cost)
z_claim_or_storage_gap = 1 if required claim/storage data missing else 0
```

`z_claim_or_storage_gap = 1`이면 점수와 무관하게 `판매전략 생성 불가`로 표시한다.

### 3.2 현대리바트

#### 공개 자료에서 확인한 사실

- [현대리바트 공식 상품 페이지](https://company.hyundailivart.co.kr/p/P200086559?buyNow=P200086559)는 설치 2일 전부터 설치 당일까지 기사 연락을 시도하며, 연락이 되지 않으면 배송이 연기될 수 있다고 안내한다.
- [현대리바트 오피스 카탈로그](https://www.hyundailivart.co.kr/UserFiles/home/ko/brand/2020_OFFICE.pdf)는 제품군과 배송·설치·AS를 함께 설명한다.
- [현대리바트 법인사업](https://company.hyundailivart.co.kr/ko/corporation)은 대량 납품·계약별 납기를, [스마트워크센터](https://company.hyundailivart.co.kr/ko/smartWorkCenter)는 생산·물류 비용과 상품 상태를 확인하는 보조 근거다.
- 따라서 가구는 상품 수량만으로 손익을 판단하지 않고, 배송·설치 비용과 반품/파손/AS를 함께 계산해야 한다.

#### 상품·재고 입력

`sku_id`, `model_id`, `option_set`, `on_hand_qty`, `reserved_qty`, `lead_time_days`, `install_required`, `delivery_fee`, `install_fee`, `damage_rate`, `return_rate`, `as_cost`, `list_price`, `sale_price`.

#### 전략에 반영할 비용·제약

- 보관 공간·부피·중량에 따른 `holding_cost`와 창고/전시 공간의 대체가치.
- 라스트마일 배송, 설치 인건비, 사전 실측·시공, 파손·재배송·회수·AS.
- 주문제작/옵션 상품은 취소·반품 가능 여부와 생산 착수 여부를 하드 차단으로 구분한다.
- 배송·설치 비용 정책이 없으면 비용 미반영 경고를 표시하고 담당자 확인 상태로 둔다.

#### 계열사별 위험 신호

```text
z_age = normalized(days_in_warehouse)
z_damage = normalized(expected_damage_and_return_cost)
```

### 3.3 현대그린푸드

#### 공개 자료에서 확인한 사실

- [현대그린푸드 식자재 유통](https://www.hyundaigreenfood.com/po/fb/fdb/FBFDB01L.hgc)은 급식·외식·유통 사업장에 농·수·축산물과 가공식품 등을 공급한다고 설명한다.
- [현대그린푸드 사전예약 서비스](https://www.hyundaigreenfood.com/po/pr/ntn/PRNTN02V.hg?bbsSqPk=193712)는 제철 농·수·축산물을 미리 예약받고 배송 전 수량을 확정하는 구조를 소개한다.
- [현대그린푸드 리테일 사업](https://hyundaigreenfood.com/po/fb/rtb/FBRTB01L.hgc)은 오프라인·온라인·홈쇼핑·케어푸드 채널을 구분하고, [식품위생연구소](https://hyundaigreenfood.com/po/is/fdr/ISFDR02L.hgc)는 검사·보류·해제·리콜 상태를 별도 관리한다.
- [식품 등의 표시·광고에 관한 법률](https://www.law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1030102807)은 식품의 소비기한·보관방법, 건강기능식품의 소비기한·보관방법·주의사항 표시를 요구한다.
- [식약처 소비기한 보관방법 안내](https://www.mfds.go.kr/brd/m_1105/view.do?seq=33674)는 소비기한과 냉장·냉동 보관조건을 함께 취급하도록 안내한다.

#### 상품·재고 입력

`sku_id`, `lot_id`, `product_type`, `on_hand_qty`, `reserved_qty`, `expiry_at`, `temperature_class`, `storage_condition`, `origin`, `traceability_id`, `inspection_status`, `waste_rate`, `disposal_cost`, `supplier_recovery_rate`, `list_price`, `sale_price`.

#### 전략에 반영할 비용·제약

- 소비기한·보관조건·HACCP/이력추적 관련 필드가 없으면 판매전략을 만들지 않는다.
- 냉장·냉동 포장, 피킹, 배송, 아이스팩/보냉재, 회수·폐기와 음식물류 처리 비용.
- 사전예약 상품은 주문 마감일과 처리기한을 별도 필드로 저장해 수요와 폐기 위험을 계산한다.
- 폐기 회피금액은 실제 폐기·운송·처리 계약 단가로만 산정하고, 회계상 손상차손과 섞지 않는다.

#### 계열사별 위험 신호

```text
z_expiry = max(0, 1 - days_to_expiry / expiry_alert_window)
z_temp_gap = 1 if storage_condition_not_verified else 0
z_waste = normalized(expected_waste_qty × disposal_cost_per_unit)
z_cold_chain = normalized(cold_chain_cost + expected_waste_cost)
```

## 4. 통합 수식 페이지에서 보여줄 화면 구조

1. `공통 목적함수`: 3개 계열사에 공통 적용되는 `M_inc`와 하드 차단.
2. `공통 수요식`: 보류 수량을 제외한 전략 대상 재고를 `Q_available` 하나로 추상화.
3. `비용 측정`: 판매 변동비, 이행/물류비, 보관비, 폐기, 반품·파손, 잠식, AI 원가.
4. `계열사 탭`: 현대웰니스·현대리바트·현대그린푸드별 입력값·위험 신호·차단 조건.
5. `시뮬레이션 계약`: 할인율·쿠폰·포인트·처리 기간·수량을 바꾸고, 예상 판매량·매출·증분 기여현금이익·잔여재고를 다시 계산.
6. `근거 링크`: 각 계열사 카드의 공식 자료, 법령, 학술 논문을 화면에서 바로 연다. 데이터 계약으로 확인되지 않은 값은 “내부 계약 필요”로 표시.

## 5. 구현 범위와 보류

- 현재 MVP에서는 교차 계열사 번들 전략과 외부 실행 연계를 P2로 둔다. 수식 페이지에는 확장식을 설명하되, 주문·상품 등록 실행 버튼은 제공하지 않는다.
- Teams는 승인 기록을 대체하지 않는 알림·서비스 링크 채널로 둔다.
- 실제 원가·정산·수수료를 연결하기 전에는 화면에 더미 숫자를 사실처럼 표시하지 않는다.
- LLM은 모델과 보존/학습 정책이 확정되기 전까지 설명 생성용 adapter로 격리하고, AI 호출 원가를 `AI_CaseCost`로 별도 기록한다.

## 6. 법인·브랜드 매핑과 추가 검증 자료

공개 자료상 브랜드와 운영 법인이 항상 같은 문자열은 아니다. 따라서 권한·정산·감사 키를 화면 브랜드명으로만 만들지 않는다.

- 현대웰니스 브랜드는 [현대웰니스 공식몰](https://www.hyundaiwellness.com/)과 footer의 [현대바이오랜드 법인정보](https://www.rexremall.com/)를 함께 확인한다. canonical 모델에는 `brand_id=HYUNDAI_WELLNESS`, `legal_entity_id=HYUNDAI_BIOLAND`처럼 분리된 키를 둔다.
- 리바트의 B2B·프로젝트 상품은 [법인사업](https://company.hyundailivart.co.kr/ko/corporation)과 [스마트워크센터](https://company.hyundailivart.co.kr/ko/smartWorkCenter)의 납기·배송·설치 비용을 별도 입력으로 둔다.
- 그린푸드의 [리테일 사업](https://hyundaigreenfood.com/po/fb/rtb/FBRTB01L.hgc)과 [식품위생연구소](https://hyundaigreenfood.com/po/is/fdr/ISFDR02L.hgc)는 채널별 재고와 검사·보류 상태를 분리하는 근거로 사용한다.

수식의 이론 근거는 [Smith & Agrawal (2017)](https://pubsonline.informs.org/doi/abs/10.1287/msom.2016.0609), [Chen·Pang·Pan (2014)](https://pubsonline.informs.org/doi/10.1287/opre.2014.1261), [Hu·Shum·Yu (2016)](https://pubsonline.informs.org/doi/10.1287/opre.2015.1439)를 사용한다. 이 논문들은 가격·재고·처분·잠식의 최적화 근거이지, 특정 계열사의 법적 판매 가능성을 대신 판정하지 않는다.
