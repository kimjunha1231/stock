'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { Reveal } from '@/components/reveal';
import { SourceNote } from '@/components/source-note';
import { sources } from '@/lib/content';

type AffiliateId = 'wellness' | 'travel' | 'livart' | 'greenfood';

type AffiliateProfile = {
  id: AffiliateId;
  label: string;
  short: string;
  accent: string;
  inventoryUnit: string;
  timeAxis: string;
  keyInputs: string[];
  variableCosts: string[];
  hardStops: string[];
  riskSignals: string[];
  sourceIds: string[];
  note: string;
};

type FormulaHelpTerm = {
  symbol: string;
  meaning: string;
  detail: string;
  glossaryId?: string;
};

type FormulaHelp = {
  id: string;
  label: string;
  title: string;
  intro: string;
  easy: string;
  formula: string;
  formulaKo: string;
  terms: FormulaHelpTerm[];
  takeaway: string;
};

const formulaHelps: Record<string, FormulaHelp> = {
  objective: {
    id: 'objective',
    label: '공통 목적함수',
    title: '이 전략이 기준선보다 실제로 나은가?',
    intro: '이 수식은 할인이나 묶음판매를 했을 때, 아무것도 하지 않는 것보다 실제로 더 나은지 확인합니다.',
    easy: '쉽게 말하면: 판매해서 번 돈에서 추가 비용과 실패 위험을 빼고, 평소보다 얼마나 더 좋아지는지 계산합니다.',
    formula: `M_inc(s) = feasible(s) × [
  Revenue_s - VariableCost_s
  + AvoidedCost_s
  - Cannibalization_s
  - RiskPenalty_s
  - AI_CaseCost_s
  - M_baseline
]`,
    formulaKo: `전략으로 새로 남는 돈 = 실행 가능 여부 × [
  할인 후 매출 - 이번 판매 때문에 더 드는 돈
  + 미리 처리해서 아낀 돈
  - 다른 판매를 뺏어서 생긴 손해
  - 실패했을 때 예상되는 손해
  - 전략을 검토하는 비용
  - 아무것도 바꾸지 않았을 때의 결과
]`,
    terms: [
      { symbol: 'M_inc(s)', meaning: '전략으로 새로 남는 돈', detail: '이 전략을 실행했을 때 평소보다 추가로 생기는 금액입니다.', glossaryId: 'incremental-profit' },
      { symbol: 'feasible(s)', meaning: '실제로 실행해도 되는지', detail: '법·재고·배송·데이터 조건이 모두 준비됐는지 확인합니다.', glossaryId: 'hard-stop' },
      { symbol: 'Revenue_s', meaning: '할인 후 매출', detail: '예상 판매량에 할인된 가격을 곱해 계산한 판매 금액입니다.' },
      { symbol: 'VariableCost_s', meaning: '이번 판매 때문에 더 드는 돈', detail: '배송비, 수수료, 포장비, 반품비처럼 이 전략을 해서 추가로 생기는 비용입니다.' },
      { symbol: 'AvoidedCost_s', meaning: '미리 처리해서 아낀 돈', detail: '보관비, 폐기비, 위약금처럼 상품을 빨리 처리해서 줄어드는 비용입니다.', glossaryId: 'avoidable-cost' },
      { symbol: 'Cannibalization_s', meaning: '다른 판매를 뺏어서 생긴 손해', detail: '할인 상품이 원래 팔릴 상품의 판매를 대신하면서 생기는 손실입니다.' },
      { symbol: 'RiskPenalty_s', meaning: '실패했을 때 예상되는 손해', detail: '반품·파손·취소 같은 일이 생길 가능성과 그때의 손해를 함께 계산합니다.' },
      { symbol: 'AI_CaseCost_s', meaning: '전략을 검토하는 비용', detail: 'AI 계산, 데이터 사용, 담당자 검토에 드는 비용입니다.', glossaryId: 'ai-decision-cost' },
      { symbol: 'M_baseline', meaning: '아무것도 바꾸지 않았을 때의 결과', detail: '할인이나 프로모션을 하지 않고 현재 방식대로 운영했을 때의 결과입니다.', glossaryId: 'baseline' },
    ],
    takeaway: '매출이 가장 큰 전략보다, 실제로 실행할 수 있고 평소보다 돈을 더 남기는 전략을 고릅니다.',
  },
  feasible: {
    id: 'feasible',
    label: '하드 차단 조건',
    title: '이익 계산 전에 실행할 수 있는지 확인합니다.',
    intro: '돈이 될 것 같아도 먼저 실행해도 되는 상품인지 확인합니다.',
    easy: '쉽게 말하면: 법적으로 판매할 수 있고, 재고·배송·데이터가 모두 준비된 경우에만 다음 계산으로 넘어갑니다.',
    formula: `feasible(s) = 1
  ownership_ok
  ∧ legal_ok
  ∧ freshness_ok
  ∧ capacity_ok
  ∧ data_quality_ok
else 0`,
    formulaKo: `실행 가능 여부 = 1
  누가 결정할 수 있는지 확인
  ∧ 팔아도 되는 상품인지 확인
  ∧ 데이터가 최신인지 확인
  ∧ 배송·처리할 여유가 있는지 확인
  ∧ 데이터를 믿어도 되는지 확인
그 외에는 0`,
    terms: [
      { symbol: 'ownership_ok', meaning: '누가 결정할 수 있는지', detail: '재고 주인과 할인·취소·폐기를 승인할 사람이 정해져 있는지 확인합니다.', glossaryId: 'ownership-model' },
      { symbol: 'legal_ok', meaning: '팔아도 되는 상품인지', detail: '필수 표시, 약관, 법적 제한을 지켰는지 확인합니다.', glossaryId: 'hard-stop' },
      { symbol: 'freshness_ok', meaning: '데이터가 최신인지', detail: '재고·예약·가격·소비기한 정보가 오래되지 않았는지 확인합니다.' },
      { symbol: 'capacity_ok', meaning: '배송·처리할 여유가 있는지', detail: '배송, 설치, 좌석, 객실, 냉장·냉동 공간이 부족하지 않은지 봅니다.', glossaryId: 'delivery-capacity' },
      { symbol: 'data_quality_ok', meaning: '데이터를 믿어도 되는지', detail: '빠진 값, 중복, 단위 오류가 없는지 확인합니다.' },
    ],
    takeaway: '하나라도 확인되지 않으면 예상 이익이 커도 바로 실행하지 않고 담당자 확인으로 보냅니다.',
  },
  demand: {
    id: 'demand',
    label: '예상 판매량 / 예약량',
    title: '얼마나 팔리거나 예약될 수 있는가?',
    intro: '할인이나 새로운 판매 채널을 사용했을 때 얼마나 팔릴지 예상합니다.',
    easy: '쉽게 말하면: 많이 팔릴 것처럼 보여도 실제 재고·좌석·객실·설치 가능 수량보다 크게 잡지 않습니다.',
    formula: `Q_s = min(Q_available,
  max(0, Q_base
    × F_time × F_price
    × F_channel × F_bundle
    × confidence))`,
    formulaKo: `전략 후 예상 판매량 = min(실제로 팔 수 있는 최대 수량,
  max(0, 평소에 팔리던 수량
    × 남은 시간의 영향 × 가격 변화의 영향
    × 판매 장소의 영향 × 묶음판매의 영향
    × 예측을 얼마나 믿을 수 있는지))`,
    terms: [
      { symbol: 'Q_s', meaning: '전략 후 팔릴 것으로 보는 수량', detail: '할인이나 묶음판매를 적용했을 때 예상되는 판매·예약 수량입니다.' },
      { symbol: 'Q_available', meaning: '실제로 팔 수 있는 최대 수량', detail: '판매 가능한 재고, 좌석, 객실, 설치 슬롯처럼 현재 제공할 수 있는 한도입니다.' },
      { symbol: 'Q_base', meaning: '평소에 팔리던 수량', detail: '같은 상품이 같은 기간에 보통 얼마나 팔렸는지를 기준으로 삼습니다.', glossaryId: 'sales-velocity' },
      { symbol: 'F_time', meaning: '남은 시간의 영향', detail: '소비기한, 출발일, 납기일까지 남은 시간이 판매량에 미치는 영향입니다.', glossaryId: 'dday' },
      { symbol: 'F_price', meaning: '가격을 바꿨을 때의 영향', detail: '할인·쿠폰을 적용하면 판매량이 얼마나 달라지는지 반영합니다.' },
      { symbol: 'F_channel', meaning: '어디서 파는지의 영향', detail: '자사몰, 매장, 제휴채널에 따라 노출과 수수료가 어떻게 달라지는지 반영합니다.' },
      { symbol: 'F_bundle', meaning: '묶어서 팔 때의 영향', detail: '관련 상품을 함께 팔았을 때 판매량이 늘어나는 효과를 반영합니다.' },
      { symbol: 'confidence', meaning: '예측을 얼마나 믿을 수 있는지', detail: '데이터가 부족할수록 예상 판매량을 안전하게 낮춰 계산합니다.', glossaryId: 'scenario' },
    ],
    takeaway: '예상 판매량은 희망사항이 아니라, 실제로 팔 수 있는 수량 안에서 보수적으로 계산합니다.',
  },
  revenue: {
    id: 'revenue',
    label: '매출·변동비',
    title: '판매한 뒤 실제로 남는 금액은 얼마인가?',
    intro: '상품을 팔아 들어오는 돈과, 그 판매 때문에 추가로 나가는 돈을 계산합니다.',
    easy: '쉽게 말하면: 고객이 결제한 금액에서 할인·쿠폰·배송·수수료 등을 빼고 실제로 남는 돈을 봅니다.',
    formula: `Revenue_s = Q_s × P_list × (1 - discount)
            - Q_s × (coupon + point + subsidy)

VariableCost_s = Q_s × (commission
  + payment + fulfillment + return_expected)
  + campaign_fixed_cost`,
    formulaKo: `할인 후 매출 = 예상 판매량 × 원래 판매가 × (1 - 할인율)
            - 예상 판매량 × (쿠폰 부담 + 포인트 부담 + 지원금)

이번 판매 때문에 더 드는 돈 = 예상 판매량 × (판매 수수료
  + 결제·예약 처리비 + 상품 전달 비용 + 예상 반품비)
  + 행사 준비에 드는 고정비`,
    terms: [
      { symbol: 'P_list', meaning: '원래 판매가', detail: '할인하기 전 상품의 기본 가격입니다.' },
      { symbol: 'discount', meaning: '할인율', detail: '원래 가격에서 몇 퍼센트를 깎는지 나타냅니다.' },
      { symbol: 'coupon / point', meaning: '쿠폰·포인트로 부담하는 금액', detail: '고객이 사용한 혜택 중 계열사나 판매채널이 실제로 부담하는 금액입니다.' },
      { symbol: 'subsidy', meaning: '함께 지원하는 금액', detail: '공급사나 채널이 프로모션을 위해 대신 부담하는 금액입니다.' },
      { symbol: 'commission', meaning: '판매 수수료', detail: '판매채널이나 예약·제휴사에 지불하는 수수료입니다.' },
      { symbol: 'payment', meaning: '결제·예약 처리비', detail: '결제, 발권, 예약 변경을 처리할 때 드는 비용입니다.' },
      { symbol: 'fulfillment', meaning: '상품을 전달하는 비용', detail: '포장, 배송, 설치, 냉장배송처럼 고객에게 보내는 데 드는 비용입니다.' },
      { symbol: 'return_expected', meaning: '반품·취소로 예상되는 비용', detail: '반품, 환불, 재배송이 일어날 가능성을 비용으로 계산합니다.', glossaryId: 'return-rate' },
      { symbol: 'campaign_fixed_cost', meaning: '행사 준비에 드는 고정비', detail: '광고, 기획, 시스템 설정처럼 판매량과 관계없이 드는 비용입니다.' },
    ],
    takeaway: '매출이 커 보여도 할인·수수료·배송비를 빼고 실제로 남는 금액을 확인해야 합니다.',
  },
  avoided: {
    id: 'avoided',
    label: '회피비용·하방',
    title: '처리해서 줄이는 비용과 실패 위험은 얼마인가?',
    intro: '상품을 지금 처리하지 않으면 나중에 생길 손해와, 전략이 실패했을 때의 손해를 따로 계산합니다.',
    easy: '쉽게 말하면: 지금 판매해서 보관비·폐기비·위약금을 줄일 수 있는지, 실패하면 얼마를 잃을지 함께 봅니다.',
    formula: `AvoidedCost_s = holding_avoided
  + disposal_avoided
  + supplier_penalty_avoided
  + capacity_loss_avoided

RiskPenalty_s = probability × impact`,
    formulaKo: `미리 처리해서 아낀 돈 = 보관비를 아낀 금액
  + 폐기비를 아낀 금액
  + 공급사 위약금을 아낀 금액
  + 기회를 놓치지 않아 아낀 금액

실패했을 때 예상되는 손해 = 실패 가능성 × 실패 손해`,
    terms: [
      { symbol: 'holding_avoided', meaning: '보관비를 아낀 금액', detail: '상품을 빨리 팔아서 창고·전시·냉장 공간을 덜 쓰게 된 금액입니다.', glossaryId: 'holding-cost' },
      { symbol: 'disposal_avoided', meaning: '폐기비를 아낀 금액', detail: '기한이 지나 버리거나 처리할 상품을 줄여서 절약한 금액입니다.', glossaryId: 'disposal-cost' },
      { symbol: 'supplier_penalty_avoided', meaning: '공급사 위약금을 아낀 금액', detail: '예약 취소나 납기 실패 때 공급사에 낼 뻔한 돈을 줄인 금액입니다.' },
      { symbol: 'capacity_loss_avoided', meaning: '기회를 놓치지 않아 아낀 금액', detail: '좌석·객실·설치 슬롯·배송 공간을 비워 두지 않아 생긴 이익입니다.' },
      { symbol: 'RiskPenalty_s', meaning: '실패했을 때 예상되는 손해', detail: '전략이 실패할 가능성과 실패했을 때의 손해를 곱한 값입니다.' },
      { symbol: 'probability × impact', meaning: '실패 가능성 × 실패 손해', detail: '예를 들어 반품이 일어날 확률에 반품 처리비를 곱합니다.' },
    ],
    takeaway: '지금 처리해서 정말 줄어드는 비용만 넣고, 막연한 손실은 임의로 더하지 않습니다.',
  },
  risk: {
    id: 'risk',
    label: '위험점수',
    title: '위험하다는 판단은 어떻게 점수로 바뀌는가?',
    intro: '여러 위험 신호를 하나의 점수로 바꿔서 어떤 상품부터 처리할지 정합니다.',
    easy: '쉽게 말하면: 소비기한이 얼마 남지 않았거나, 잘 안 팔리거나, 처리 비용이 큰 상품일수록 점수가 높아집니다.',
    formula: `RiskScore_i = 100 × Σ(w_k × z_ik)
Σw_k = 1

z_ik ∈ [0, 1]
등급 = 정상 / 주의 / 위험`,
    formulaKo: `상품의 위험 점수 = 100 × Σ(각 신호의 중요도 × 상품의 위험 정도)
각 신호의 중요도 합 = 1

상품의 위험 정도는 0~1 사이
등급 = 정상 / 주의 / 위험`,
    terms: [
      { symbol: 'RiskScore_i', meaning: '상품의 위험 점수', detail: '기한, 판매속도, 처리비용 같은 위험 신호를 합친 점수입니다.' },
      { symbol: 'w_k', meaning: '각 신호의 중요도', detail: '소비기한, 보관공간, 위약금 중 무엇을 더 중요하게 볼지 정합니다.' },
      { symbol: 'z_ik', meaning: '상품이 얼마나 위험한지', detail: '각 위험 신호를 0부터 1 사이의 숫자로 바꾼 값입니다.' },
      { symbol: 'Σw_k = 1', meaning: '중요도의 합은 1', detail: '모든 신호의 중요도를 합쳐서 상품끼리 공정하게 비교합니다.' },
      { symbol: '정상 / 주의 / 위험', meaning: '점수에 따른 안내', detail: '점수 구간에 따라 지금 처리할 필요가 있는지 나눕니다.' },
    ],
    takeaway: '위험점수는 먼저 볼 상품을 정하는 기준입니다. 법규나 판매 가능 여부를 대신 판단하지는 않습니다.',
  },
};

const profiles: AffiliateProfile[] = [
  {
    id: 'wellness',
    label: '현대웰니스',
    short: '건강기능식품·영양제',
    accent: '#15825f',
    inventoryUnit: '로트별 판매 가능 수량(Q_available)',
    timeAxis: '소비기한·최소 잔여기한',
    keyInputs: ['SKU·브랜드·성분·기능·대상', '로트·소비기한·보관조건', '재고·예약·판매속도', '채널별 가격·쿠폰·배송'],
    variableCosts: ['배송·포장·결제 수수료', '쿠폰·포인트 부담액', '반품 검수·재판매 비용', '회수·폐기 또는 공급사 회수 비용'],
    hardStops: ['소비기한·보관조건 미확인', '필수 상품 표시·주의사항 누락', '판매 권한·공급사 회수 조건 미확인'],
    riskSignals: ['잔여기한 압박', '느린 ROS·낮은 소진율', '임박 로트의 예상 폐기비', '건강 관련 설명의 근거 부족'],
    sourceIds: ['affiliate-wellness', 'wellness-foodsafety', 'wellness-law', 'food-label-standards'],
    note: '공식몰의 상품 분류·소비기한·임박 표시는 날짜와 상품 속성을 별도 입력해야 한다는 근거로 사용합니다. 실제 할인 한도와 정산 부담률은 내부 계약 데이터가 필요합니다.',
  },
  {
    id: 'travel',
    label: '더현대트래블',
    short: '항공·호텔·패키지·부가서비스',
    accent: '#2563eb',
    inventoryUnit: '예약 가능 좌석·객실·서비스 슬롯',
    timeAxis: '출발일·발권/예약 마감',
    keyInputs: ['상품·공급사·출발일', '총/예약/잔여 capacity', '수수료·공급가·환율 snapshot', '취소·환불·노쇼 규정'],
    variableCosts: ['발권·결제·상담 처리비', '공급사 취소·위약금', '제휴채널 수수료', '환율·변경·재예약 비용'],
    hardStops: ['출발일·예약 마감 누락', '공급사 규정·capacity 불일치', '환불/위약금 규정 미확인'],
    riskSignals: ['출발일까지 남은 일수', 'capacity 잔량 또는 과소/과대 예약', '취소위약금 노출', '환율·공급가 변동성'],
    sourceIds: ['affiliate-travel', 'travel-exhibition', 'travel-cancel', 'travel-easylaw'],
    note: '여행은 물리 재고가 아니므로 소비기한·폐기비를 그대로 적용하지 않습니다. 미판매 capacity와 임박 출발의 공급사 위약금·기회비용을 회피비용으로 계산합니다.',
  },
  {
    id: 'livart',
    label: '현대리바트',
    short: '가구·리빙·인테리어',
    accent: '#b87818',
    inventoryUnit: '제품·옵션·프로젝트 단위 재고',
    timeAxis: '창고 보관일·납기·설치일',
    keyInputs: ['모델·옵션·부피·중량', '창고·전시·프로젝트 상태', '생산/배송/설치 lead time', '지역별 설치 슬롯·AS 이력'],
    variableCosts: ['창고·전시 공간 대체가치', '라스트마일·설치 인건비', '파손·재배송·회수 비용', '반품·AS·주문제작 취소 비용'],
    hardStops: ['설치 슬롯·배송 가능 지역 없음', '주문제작 생산 착수 상태 불명', '소유권·반품·AS 조건 미확인'],
    riskSignals: ['부피×장기보관일', '납기 대비 생산 지연', '설치 capacity 부족', '파손·반품·AS 비용 상승'],
    sourceIds: ['affiliate-livart-product', 'affiliate-livart-catalog', 'livart-corporation', 'livart-smart-factory'],
    note: '공식 상품 페이지의 설치 연락·배송 연기 안내와 카탈로그의 배송·설치·AS 범위를 반영합니다. 제품 수량만 늘리는 전략은 설치 capacity를 넘으면 차단합니다.',
  },
  {
    id: 'greenfood',
    label: '현대그린푸드',
    short: '식자재·리테일·케어푸드',
    accent: '#0f766e',
    inventoryUnit: '로트·소비기한별 식품 수량',
    timeAxis: '소비기한·주문 마감·배송일',
    keyInputs: ['SKU·로트·원산지·추적번호', '소비기한·온도등급·보관조건', '채널·거점·고객사 수요', '주문 마감·냉장/냉동 배송 capacity'],
    variableCosts: ['피킹·포장·냉장/냉동 배송', '보냉재·에너지·회수 비용', '폐기·음식물 처리·증빙', '채널 수수료·할인·반품'],
    hardStops: ['소비기한·보관조건 미확인', '검사·HACCP·추적 상태 이상', '냉장/냉동 배송 capacity 없음'],
    riskSignals: ['소비기한 압박', '예상 폐기량×처리단가', '콜드체인 capacity 부족', '사전예약 마감과 배송일 불일치'],
    sourceIds: ['affiliate-greenfood', 'affiliate-greenfood-reservation', 'greenfood-retail', 'greenfood-lab', 'food-label-standards', 'mfds-storage', 'food-expiry-setting'],
    note: '식자재 공급과 사전예약 서비스는 수량·마감일·배송일을 함께 관리해야 합니다. 소비기한과 보관조건은 비용보다 먼저 검증하는 법정 입력입니다.',
  },
];

const sourceById = (id: string) => sources.find((source) => source.id === id);

function FormulaBlock({ children }: { children: React.ReactNode }) {
  return <pre className="formula-code"><code>{children}</code></pre>;
}

function SourceLinks({ ids }: { ids: string[] }) {
  return (
    <div className="formula-source-links">
      <span>근거 링크</span>
      {ids.map((id) => {
        const source = sourceById(id);
        return source ? <SourceNote key={id} source={source} /> : null;
      })}
    </div>
  );
}

function FormulaHelpButton({ help, onOpen }: { help: FormulaHelp; onOpen: (helpId: string) => void }) {
  return (
    <button
      type="button"
      className="formula-help-button"
      aria-label={`${help.title} 설명 열기`}
      title="수식 용어 설명 열기"
      onClick={() => onOpen(help.id)}
    >
      <span aria-hidden="true">?</span> 용어 설명
    </button>
  );
}

function FormulaHelpModal({ help, onClose }: { help: FormulaHelp; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="formula-help-overlay" role="presentation" onClick={onClose}>
      <section
        className="formula-help-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`formula-help-title-${help.id}`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="formula-help-modal-header">
          <div>
            <span className="eyebrow">Formula glossary · {help.label}</span>
            <h2 id={`formula-help-title-${help.id}`}>{help.title}</h2>
          </div>
          <button type="button" className="formula-help-close" aria-label="설명 닫기" onClick={onClose}>×</button>
        </div>
        <p className="formula-help-intro">{help.intro}</p>
        <p className="formula-help-plain">{help.easy}</p>
        <div className="formula-help-layout">
          <div className="formula-help-formula-column">
            <span className="formula-help-section-label">기호로 표시한 수식</span>
            <pre className="formula-help-formula"><code>{help.formula}</code></pre>
            <span className="formula-help-section-label formula-help-section-label-ko">한글로 읽는 수식</span>
            <pre className="formula-help-formula formula-help-formula-ko"><code>{help.formulaKo}</code></pre>
            <div className="formula-help-takeaway"><strong>한 줄 요약</strong><p>{help.takeaway}</p></div>
          </div>
          <div className="formula-help-terms-column">
            <span className="formula-help-section-label">용어를 쉽게 풀면</span>
            <div className="formula-help-terms">
              {help.terms.map((term) => (
                <article key={term.symbol} className="formula-help-term">
                  <code>{term.symbol}</code>
                  <div>
                    <strong><span className="formula-help-term-label">쉬운 뜻</span>{term.meaning}</strong>
                    <p>{term.detail}</p>
                    {term.glossaryId && <Link href={`/glossary#${term.glossaryId}`} onClick={onClose}>용어 사전에서 자세히 보기 →</Link>}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export const metadata = {
  title: '계열사 통합 수식 | InventoryOS',
  description: '현대웰니스·더현대트래블·현대리바트·현대그린푸드의 상품/서비스 특성을 공통 목적함수로 계산하는 AI 재고 처리 수식',
};

export default function FormulasPage() {
  const [activeId, setActiveId] = useState<AffiliateId>('wellness');
  const [openHelpId, setOpenHelpId] = useState<string | null>(null);
  const active = useMemo(() => profiles.find((profile) => profile.id === activeId) ?? profiles[0], [activeId]);
  const openHelp = (helpId: string) => setOpenHelpId(helpId);
  const closeHelp = () => setOpenHelpId(null);
  const activeHelp = openHelpId ? formulaHelps[openHelpId] : null;

  return (
    <>
      <section className="page-hero formula-hero">
        <div className="container">
          <Reveal><span className="eyebrow">03-B · Integrated Formula Engine</span></Reveal>
          <Reveal>
            <h1>네 계열사를 하나의<br /><em>판단 수식으로 연결합니다.</em></h1>
          </Reveal>
          <Reveal>
            <p>
              목적함수와 계산 순서는 통일하고, 재고 단위·처리기한·capacity·비용·하드 차단은 계열사별로 다르게 입력합니다.
              공개 자료로 확인한 사실과 내부 데이터 계약이 필요한 값을 화면에서 분리해 표시합니다.
            </p>
          </Reveal>
          <div className="formula-hero-points">
            <span><b>01</b> 공통 목적함수</span>
            <span><b>02</b> 계열사별 입력계약</span>
            <span><b>03</b> 출처·가정 분리</span>
          </div>
        </div>
      </section>

      <section className="section formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">01 · One objective</span>
            <h2>공통 목적함수는 하나입니다.</h2>
            <p>수량 상품과 예약 capacity 모두 “기준선보다 실제로 더 나아지는가”를 같은 방식으로 비교합니다. 각 카드 오른쪽 위의 <strong>용어 설명</strong> 버튼을 누르면 기호를 쉬운 말로 풀어볼 수 있습니다.</p>
          </div>
          <div className="formula-main-grid">
            <div className="formula-panel formula-panel-dark formula-panel-with-help">
              <FormulaHelpButton help={formulaHelps.objective} onOpen={openHelp} />
              <span className="formula-label">증분 기여현금이익</span>
              <FormulaBlock>{`M_inc(s) = feasible(s) × [
  Revenue_s - VariableCost_s
  + AvoidedCost_s
  - Cannibalization_s
  - RiskPenalty_s
  - AI_CaseCost_s
  - M_baseline
]`}</FormulaBlock>
              <p>이미 발생한 취득원가는 매몰원가로 분리합니다. 원가를 화면에 노출하지 않아도 서버 계산·감사 로그에는 원가 버전과 접근권한을 남깁니다.</p>
              <SourceLinks ids={['project-policy', 'markdown-paper', 'markdown-perishable', 'markdown-cannibalization']} />
            </div>
            <div className="formula-panel formula-panel-with-help">
              <FormulaHelpButton help={formulaHelps.feasible} onOpen={openHelp} />
              <span className="formula-label">전략 실행 가능성</span>
              <FormulaBlock>{`feasible(s) = 1
  ownership_ok
  ∧ legal_ok
  ∧ freshness_ok
  ∧ capacity_ok
  ∧ data_quality_ok
else 0`}</FormulaBlock>
              <p>하드 차단 조건이 0이면 이익이 큰 후보도 추천하지 않습니다. 식품의 소비기한, 여행의 취소 규정, 리바트의 설치 슬롯, 웰니스 상품의 표시·보관정보가 여기에 들어갑니다.</p>
              <SourceLinks ids={['project-policy', 'food-label-standards', 'travel-easylaw']} />
            </div>
          </div>
        </div>
      </section>

      <section className="section-tight band formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">02 · Demand &amp; cost</span>
            <h2>판매량과 비용을 같은 기준선에서 다시 계산합니다.</h2>
          </div>
          <div className="formula-three-grid">
            <article className="formula-panel formula-panel-with-help">
              <FormulaHelpButton help={formulaHelps.demand} onOpen={openHelp} />
              <span className="formula-number">01</span>
              <h3>예상 판매량 / 예약량</h3>
              <FormulaBlock>{`Q_s = min(Q_available,
  max(0, Q_base
    × F_time × F_price
    × F_channel × F_bundle
    × confidence))`}</FormulaBlock>
              <p><code>Q_available</code>은 웰니스·그린푸드의 실재고일 수도, 트래블의 좌석·객실·슬롯일 수도 있습니다.</p>
            </article>
            <article className="formula-panel formula-panel-with-help">
              <FormulaHelpButton help={formulaHelps.revenue} onOpen={openHelp} />
              <span className="formula-number">02</span>
              <h3>매출·변동비</h3>
              <FormulaBlock>{`Revenue_s = Q_s × P_list × (1 - discount)
            - Q_s × (coupon + point + subsidy)

VariableCost_s = Q_s × (commission
  + payment + fulfillment + return_expected)
  + campaign_fixed_cost`}</FormulaBlock>
              <p>쿠폰·포인트·배송·설치·콜드체인·발권·환불처럼 전략 때문에 변하는 현금만 분리합니다.</p>
            </article>
            <article className="formula-panel formula-panel-with-help">
              <FormulaHelpButton help={formulaHelps.avoided} onOpen={openHelp} />
              <span className="formula-number">03</span>
              <h3>회피비용·하방</h3>
              <FormulaBlock>{`AvoidedCost_s = holding_avoided
  + disposal_avoided
  + supplier_penalty_avoided
  + capacity_loss_avoided

RiskPenalty_s = probability × impact`}</FormulaBlock>
              <p>트래블은 disposal을 쓰지 않고 공급사 위약금·capacity 기회비용을 넣습니다. 그린푸드는 실제 처리계약 단가를 사용합니다.</p>
            </article>
          </div>
          <SourceLinks ids={['markdown-paper', 'markdown-perishable', 'project-simulation', 'travel-easylaw']} />
        </div>
      </section>

      <section className="section formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">03 · Affiliate model</span>
            <h2>계열사마다 달라지는 것은 입력값입니다.</h2>
            <p>아래 탭은 현재 공개 자료에서 확인한 상품 특성과, 실제 데이터 연결 때 추가로 받아야 할 필드를 구분해 보여줍니다.</p>
          </div>

          <div className="affiliate-tabs" role="tablist" aria-label="계열사 수식 선택">
            {profiles.map((profile) => (
              <button
                type="button"
                key={profile.id}
                role="tab"
                aria-selected={activeId === profile.id}
                className={activeId === profile.id ? 'affiliate-tab active' : 'affiliate-tab'}
                onClick={() => setActiveId(profile.id)}
                style={{ '--tab-accent': profile.accent } as React.CSSProperties}
              >
                <strong>{profile.label}</strong>
                <span>{profile.short}</span>
              </button>
            ))}
          </div>

          <article className="affiliate-detail" style={{ '--affiliate-accent': active.accent } as React.CSSProperties}>
            <div className="affiliate-detail-head">
              <div>
                <span className="pill" style={{ color: active.accent, background: `${active.accent}16` }}>ACTIVE MODEL</span>
                <h3>{active.label}</h3>
                <p>{active.note}</p>
              </div>
              <div className="affiliate-unit">
                <span>재고 단위</span>
                <strong>{active.inventoryUnit}</strong>
                <span>시간축</span>
                <strong>{active.timeAxis}</strong>
              </div>
            </div>
            <div className="affiliate-detail-grid">
              <div>
                <h4>필수 입력 요소</h4>
                <ul>{active.keyInputs.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>비용 측정 요소</h4>
                <ul>{active.variableCosts.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>하드 차단</h4>
                <ul className="danger-list">{active.hardStops.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div>
                <h4>위험 신호</h4>
                <ul>{active.riskSignals.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <SourceLinks ids={active.sourceIds} />
          </article>
        </div>
      </section>

      <section className="section-tight formula-section band">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">04 · Risk score</span>
            <h2>위험점수는 공통, 신호는 계열사별입니다.</h2>
            <p>등급 임계값과 가중치는 버전으로 저장하고, 하드 차단은 점수 계산보다 먼저 적용합니다.</p>
          </div>
          <div className="risk-layout">
            <div className="formula-panel formula-panel-dark formula-panel-with-help">
              <FormulaHelpButton help={formulaHelps.risk} onOpen={openHelp} />
              <span className="formula-label">0–100 위험점수</span>
              <FormulaBlock>{`RiskScore_i = 100 × Σ(w_k × z_ik)
Σw_k = 1

z_ik ∈ [0, 1]
등급 = 정상 / 주의 / 위험`}</FormulaBlock>
              <p>예: 처리기한 압박, 판매속도 부족, 재고가치, 수요 불확실성, capacity 부족을 계열사별로 정규화합니다.</p>
            </div>
            <div className="risk-cards">
              <div><strong>웰니스·그린푸드</strong><span>잔여기한 · 보관조건 · 예상 폐기량</span></div>
              <div><strong>더현대트래블</strong><span>출발일까지 · 예약률 · 위약금</span></div>
              <div><strong>현대리바트</strong><span>부피·보관일 · 설치 슬롯 · 파손/AS</span></div>
            </div>
          </div>
          <SourceLinks ids={['project-policy', 'food-label-law', 'mfds-storage']} />
        </div>
      </section>

      <section className="section formula-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">05 · Simulation contract</span>
            <h2>시뮬레이션은 이 순서로 재현됩니다.</h2>
            <p>담당자가 바꾸는 값과 시스템이 지켜야 하는 값을 분리해, 승인 전·후 결과를 같은 버전으로 추적합니다.</p>
          </div>
          <div className="simulation-flow">
            {[
              ['01', '기준선 snapshot', '현재 재고/capacity, 가격, 수요기간, 원가 버전을 고정'],
              ['02', '조정값 입력', '할인율·쿠폰·포인트·기간·적용수량을 검증'],
              ['03', '하드 차단', '소유권·법규·처리기한·배송/설치 capacity를 확인'],
              ['04', '예상치 계산', '판매량·매출·비용·회피비용·잔여재고/잔여 capacity 산출'],
              ['05', '후보 비교', '보수·기본·낙관 시나리오와 기준선 대비 M_inc 비교'],
            ].map(([number, title, body]) => (
              <div className="simulation-step" key={number}>
                <span>{number}</span><strong>{title}</strong><p>{body}</p>
              </div>
            ))}
          </div>
          <div className="simulation-result">
            <div>
              <span className="eyebrow">결과로 보여줄 값</span>
              <h3>예상 판매량 · 예상 매출 · 증분 기여현금이익 · 마진율 · 소진일/잔여 capacity · 회피비용</h3>
            </div>
            <p>승인된 전략은 revision과 데이터 cutoff를 함께 저장하고, 실제 판매·예약 결과가 연결되면 예측 오차를 비교합니다.</p>
          </div>
          <SourceLinks ids={['project-simulation', 'project-policy']} />
        </div>
      </section>

      <section className="section-tight formula-section band">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">06 · Scope &amp; evidence</span>
            <h2>통합은 하되, 아직 확정되지 않은 것은 숨기지 않습니다.</h2>
          </div>
          <div className="evidence-grid">
            <article className="evidence-card"><span className="pill">P0</span><h3>이번 MVP에서 계산</h3><p>네 계열사 상품/서비스의 공통 목적함수, 위험점수, 계열사별 입력·비용·하드 차단, 출처 링크와 시뮬레이션 결과.</p></article>
            <article className="evidence-card"><span className="pill">P2</span><h3>확장으로 보류</h3><p>교차 계열사 묶음판매, 재고 이동·공동 프로모션, 고객용 공개 카탈로그는 소유권·정산·권한 계약 확인 뒤 활성화합니다.</p></article>
            <article className="evidence-card"><span className="pill">DATA</span><h3>내부 계약 필요</h3><p>실제 원가·수수료·쿠폰 부담·capacity·반품·폐기 단가·수요 탄력성은 공식 공개 자료로 확정하지 않고 원천 시스템 연결 후 버전 관리합니다.</p></article>
          </div>
          <div className="actions">
            <Link className="button primary" href="/sources">전체 출처 목록 열기 →</Link>
            <Link className="button secondary" href="/glossary">용어·기호 사전 보기</Link>
            <Link className="button secondary" href="/prd">제품 범위와 정책 보기</Link>
          </div>
        </div>
      </section>

      {activeHelp && <FormulaHelpModal help={activeHelp} onClose={closeHelp} />}
    </>
  );
}
