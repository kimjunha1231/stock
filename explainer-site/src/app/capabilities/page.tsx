'use client';

import { useEffect, useMemo, useState } from 'react';
import { Reveal, Stagger } from '@/components/reveal';

type Track = 'all' | 'common' | 'wellness' | 'travel' | 'livart' | 'greenfood';
type Phase = 'P0' | 'P1' | 'P2';

type CapabilityCard = {
  id: string;
  track: Exclude<Track, 'all'>;
  title: string;
  summary: string;
  phase: Phase;
  inputs: string[];
  outputs: string[];
  rule: string;
};

const tracks: { id: Track; label: string; hint: string }[] = [
  { id: 'all', label: '전체 기능', hint: '공통 기능과 계열사별 확장' },
  { id: 'common', label: '공통 서비스', hint: '권한·데이터·전략·운영' },
  { id: 'wellness', label: '현대웰니스', hint: '로트·소비기한·표시' },
  { id: 'travel', label: '더현대트래블', hint: '예약·출발일·capacity' },
  { id: 'livart', label: '현대리바트', hint: '배송·설치·AS' },
  { id: 'greenfood', label: '현대그린푸드', hint: '식품·콜드체인·검사' },
];

const capabilities: CapabilityCard[] = [
  {
    id: 'F-01', track: 'common', title: '사용자·권한·감사', phase: 'P0',
    summary: '담당자가 자기 계열사 범위에서만 조회·수정·승인하도록 권한을 나누고 모든 작업을 기록합니다.',
    inputs: ['사용자·역할', '계열사·법인·점포·채널 범위', 'JWT 세션'],
    outputs: ['조회·수정·승인 가능 범위', '권한 거부 사유', '감사 로그'],
    rule: '원가·승인 권한과 일반 조회 권한을 분리하고, 승인 후 조건 변경은 재승인으로 전환',
  },
  {
    id: 'F-02', track: 'common', title: '상품·카테고리·SKU 기준정보', phase: 'P0',
    summary: '네 계열사의 서로 다른 상품키를 공통 상품·브랜드·카테고리·옵션·SKU 구조로 연결합니다.',
    inputs: ['원천 상품키', '상품·브랜드·카테고리', '옵션·판매 단위', '법인·정산 주체'],
    outputs: ['canonical product_id·sku_id', '원천키 매핑 상태', '중복·단위 오류'],
    rule: '브랜드명과 운영 법인을 같은 값으로 가정하지 않고 별도 식별자로 관리',
  },
  {
    id: 'F-03', track: 'common', title: '재고·예약·판매 데이터 수집', phase: 'P0',
    summary: 'ERP·POS·WMS·예약·정산 원천에서 기준시각이 있는 스냅샷과 이력을 받아 계산에 사용합니다.',
    inputs: ['원천 시스템', '배치·API·파일', '상품키 매핑', '수집 기준시각'],
    outputs: ['재고·capacity snapshot', '판매·예약 이벤트', '재고 변동 이력', '수집 실패·재시도 상태'],
    rule: 'source_record_id와 snapshot_id로 중복을 막고 원천부터 결과까지 추적 가능해야 함',
  },
  {
    id: 'F-04', track: 'common', title: '데이터 품질·신선도 관리', phase: 'P0',
    summary: '누락·중복·단위 오류·기준시각 지연을 찾아 계산 가능 여부를 먼저 판정합니다.',
    inputs: ['필수 필드 규칙', '갱신 주기', '원천별 품질 기준'],
    outputs: ['accepted / warning / quarantined / rejected', '누락 필드', '재검증 시각·담당자'],
    rule: '핵심값이 unknown이면 수익 순위와 AI 추천을 만들지 않고 입력 필요 상태로 표시',
  },
  {
    id: 'F-05', track: 'common', title: '통합 재고 대시보드·검색', phase: 'P0',
    summary: '계열사 전체 현황에서 위험 상품 상세까지 내려가며 처리 우선순위를 좁힙니다.',
    inputs: ['계열사·카테고리·채널', '위험등급·기한·판매속도', '기준시각'],
    outputs: ['수량·capacity·재고금액', '정상·주의·위험 비율', '장기·판매부진 목록', 'CSV'],
    rule: '원가 권한이 없으면 원가를 숨기고 위험·수량·속도와 기준시각을 우선 표시',
  },
  {
    id: 'F-06', track: 'common', title: '위험재고 탐지', phase: 'P0',
    summary: '공통 위험점수 골격에 계열사별 신호·가중치·임계값을 적용해 먼저 처리할 대상을 찾습니다.',
    inputs: ['처리기한·출발일', '판매속도·가용량', '보관·폐기·위약금', '데이터 품질'],
    outputs: ['0–100 점수', '정상·주의·위험 등급', '기여 신호', '하드 차단 사유'],
    rule: '점수보다 법규·소유권·capacity·데이터 품질 차단을 먼저 적용',
  },
  {
    id: 'F-07', track: 'common', title: '정책·수식 프로필 관리', phase: 'P0',
    summary: '계열사·카테고리별 비용 항목, 허용 범위, 위험 가중치와 계산식을 버전으로 관리합니다.',
    inputs: ['affiliate_id·category_id', '정책 버전', '가중치·임계값', '할인·채널 제한'],
    outputs: ['active formula profile', '정책 비교 이력', '계산 snapshot'],
    rule: '전략 결과에는 policy_version·formula_version·snapshot_id를 항상 저장',
  },
  {
    id: 'F-08', track: 'common', title: '전략 후보 생성·AI 추천', phase: 'P1',
    summary: '허용된 할인·기간·수량·채널 조합을 만들고 수식 엔진으로 순위를 정한 뒤 AI가 이유를 설명합니다.',
    inputs: ['목표: 순마진·빠른 소진·최대 매출', '허용 action space', '수요 예측', '정책 profile'],
    outputs: ['최대 3개 후보', '예상 결과·신뢰도', '하방 위험', '추천 이유'],
    rule: 'LLM은 숫자를 계산·수정하지 않고, 계산이 끝난 후보의 설명과 확인 질문만 생성',
  },
  {
    id: 'F-09', track: 'common', title: '전략 시뮬레이션', phase: 'P0',
    summary: '담당자가 조건을 바꾸면 기준선·추천안·조정안을 같은 기준으로 다시 계산합니다.',
    inputs: ['수량·할인율·기간', '쿠폰·포인트·배송비', '채널·번들', '캠페인 비용'],
    outputs: ['예상 판매·매출', '변동비·이익·마진율', '소진기간·잔량', '회피비용·위험손실'],
    rule: '조건·정책·snapshot이 바뀌면 새 simulation_run으로 저장하고 기존 승인과 분리',
  },
  {
    id: 'F-10', track: 'common', title: '검토·승인·Teams 전달', phase: 'P1',
    summary: '담당자가 추천안을 수정해 검토를 요청하고, 승인 결과와 실행 조건을 Teams로 전달합니다.',
    inputs: ['전략 버전', '승인자', '적용 조건', 'Teams 채널 매핑'],
    outputs: ['승인·거절·재승인 상태', '전달 성공·실패·재시도', '승인 감사 로그'],
    rule: 'Teams 성공은 서비스 승인 성공과 별도 상태이며, 승인 기록은 서비스가 소유',
  },
  {
    id: 'F-11', track: 'common', title: '실행 이력·예상 대비 실제 성과', phase: 'P1',
    summary: '승인 전략의 실제 판매·매출·마진·잔량을 회수해 예측 오차와 원인을 기록합니다.',
    inputs: ['approved strategy revision', '판매·예약·정산 결과', '실행 기간', '원인 코드'],
    outputs: ['예상 vs 실제', '달성률·오차', '잔여·폐기·위약금 결과', '모델 검증 데이터'],
    rule: '실제값이 없으면 임의 숫자를 표시하지 않고 미수집 상태로 표시',
  },
  {
    id: 'F-12', track: 'common', title: '운영·이력·관제', phase: 'P1',
    summary: '데이터 동기화부터 위험분석·전략·Teams 전송까지의 이력을 남기고, 시스템 오류는 운영자가 확인합니다.',
    inputs: ['배치·분석·전략 이벤트', 'request_id·batch_id', '모니터링 기준'],
    outputs: ['기능별 실행 이력', 'Sentry·ELK 로그', 'Prometheus/Grafana 지표', '실패 원인·재시도 상태'],
    rule: '업무 알림은 꼭 필요한 상태만 보여주고, 개발·배치 오류는 Grafana와 운영 로그로 확인',
  },
  {
    id: 'F-13', track: 'common', title: '교차 계열사 번들·재고 이동', phase: 'P2',
    summary: '서로 다른 계열사의 상품을 묶거나 재고를 이동하는 확장 기능입니다.',
    inputs: ['구성 상품·수량', '재고 예약', '이동비·수신 capacity', '매출 배분 규칙'],
    outputs: ['번들 판매 가능 수량', '배분 매출·마진', '품절·판매 제한', '승인 절차'],
    rule: 'P0/P1에서는 실행하지 않고 계산·데이터 경계만 준비',
  },
  {
    id: 'F-14', track: 'common', title: '고객용 읽기 전용 상품 조회', phase: 'P2',
    summary: '위험재고 할인상품과 승인된 번들상품을 고객에게 보여주는 확장 화면입니다.',
    inputs: ['approved strategy', '판매 가능 재고', '공개 가격·혜택', '법적 표시'],
    outputs: ['상품 목록·상세', '할인·번들 정보', '재고 부족·판매 제한 상태'],
    rule: '초기에는 장바구니·결제 없이 조회 화면만 준비',
  },
  {
    id: 'F-15', track: 'common', title: '수요예측', phase: 'P0',
    summary: '최근 판매 흐름을 바탕으로 앞으로 얼마나 팔릴지 계산해 위험재고 판단과 전략 시뮬레이션에 전달합니다.',
    inputs: ['최근 판매이력', '품절·취소·반품 정보', '할인·프로모션·시즌 조건'],
    outputs: ['기본 일일수요', '조건 반영 예상 판매량', '예상 소진일', '예측 기준·신뢰 상태'],
    rule: '판매이력이 부족한 상품은 같은 카테고리 평균을 사용하거나 예측 부족 상태로 표시',
  },
];

type CapabilityDetails = {
  micro: string[];
  considerations: string[];
  done: string[];
};

const capabilityDetails: Record<string, CapabilityDetails> = {
  'F-01': {
    micro: ['로그인·로그아웃·토큰 갱신', '역할·계열사·점포 범위 조회', '페이지·API 권한 가드', '원가·승인 권한 분리', '로그인·권한 변경 감사 기록'],
    considerations: ['세션 만료·강제 로그아웃 처리', '다른 계열사 데이터와 민감 비용의 교차 노출 방지', '권한 없는 요청의 사유와 request_id 기록'],
    done: ['담당 MD가 자기 범위만 조회', '승인자만 승인 API 호출', '권한 변경과 거부 요청이 감사 로그에 남음'],
  },
  'F-02': {
    micro: ['계열사·법인·브랜드·카테고리 등록', '원천 상품키와 canonical ID 매핑', '상품·옵션·SKU 생성·수정·비활성화', '중복 SKU·단위·가격 순서 검증', '기준정보 변경 이력 조회'],
    considerations: ['브랜드명과 정산·운영 법인을 분리', '같은 상품의 계열사별 원천키를 잃지 않음', '비활성 SKU의 과거 이력과 전략 결과를 보존'],
    done: ['네 계열사의 상품을 공통 검색', '원천키로 원본을 추적', '중복·단위 오류를 저장 전에 차단'],
  },
  'F-03': {
    micro: ['원천별 API·파일·배치 수집', '수집 batch와 기준 snapshot 생성', '중복 레코드 멱등 처리', '부분 성공·실패 건 격리', '재시도·마지막 정상 수집 시각 표시'],
    considerations: ['ERP/POS/WMS/예약의 갱신 주기 차이', '타임존·통화·수량 단위 변환', '원천 장애 중 이전 snapshot을 잘못 최신값으로 사용하지 않음'],
    done: ['같은 원천 데이터를 두 번 받아도 중복되지 않음', '실패한 원천만 재시도', '계산 결과에서 원천 레코드까지 추적'],
  },
  'F-04': {
    micro: ['필수 필드·형식·범위 검사', '중복·음수 수량·가격 역전 검사', '기한·예약 마감·기준시각 검사', '품질 결과와 누락 필드 표시', '격리 데이터 재검증·승인'],
    considerations: ['unknown과 실제 0을 구분', '품질 경고와 실행 차단을 구분', '누가 언제 재검증해야 하는지 담당자 지정'],
    done: ['필수값 누락 상품은 추천 불가', '품질 상태가 대시보드에 표시', '격리 데이터가 정상 데이터에 섞이지 않음'],
  },
  'F-05': {
    micro: ['전체 KPI·정상/위험 비율', '계열사·카테고리·채널 필터', '위험 목록에서 상품 상세 drill-down', '판매·재고·capacity 추이 차트', '권한별 CSV 내보내기'],
    considerations: ['모든 KPI의 기준시각과 데이터 지연 표시', '물리 재고와 예약 capacity를 같은 숫자로 오해하지 않음', '원가 권한에 따른 금액 마스킹'],
    done: ['홈에서 위험 규모를 확인', '필터 결과와 상세 목록 수가 일치', '데이터가 오래되면 지연 배지 표시'],
  },
  'F-06': {
    micro: ['계열사별 위험 신호 정규화', '가중치·임계값 적용', '위험 등급 산출', '점수에 기여한 신호 설명', '일괄·수동 위험 재분석'],
    considerations: ['점수보다 하드 차단을 먼저 적용', '식품·여행·가구의 위험 의미를 동일하게 취급하지 않음', '가중치·임계값 변경 시 이전 결과 재현'],
    done: ['상품별 점수·등급·근거가 표시', '차단 상품은 점수와 별도로 실행 불가', '배치 실패와 마지막 성공 시각 확인'],
  },
  'F-07': {
    micro: ['계열사·카테고리 formula profile 생성', '비용 항목·허용 할인·채널 설정', '가중치·임계값 버전 관리', '정책 검토·승인·활성화', '이전 버전 비교·회귀'],
    considerations: ['활성 profile을 임의 수정하지 않고 새 버전 생성', '정책 소유자와 승인자를 지정', '계산 결과에 사용한 profile snapshot 보존'],
    done: ['계열사·카테고리별 다른 계산 정책 적용', '승인 전 draft가 운영 계산에 사용되지 않음', '과거 전략을 당시 profile로 재현'],
  },
  'F-08': {
    micro: ['목표별 허용 action space 정의', '할인·기간·수량·채널 조합 생성', '하드 차단 후보 제거', '결정론적 손익 순위 정렬', '상위 3개 후보 설명·질문 생성'],
    considerations: ['LLM이 숫자를 만들거나 수정하지 않음', '후보가 하나도 없을 때 차단 이유 표시', '예측 모델·LLM 실패 시 계산 결과만 제공'],
    done: ['같은 snapshot에서 같은 후보가 재현', '추천 후보에 사용 데이터·버전이 표시', '최종 실행은 담당자 승인 전 불가'],
  },
  'F-09': {
    micro: ['추천값과 사용자 조정값 분리', '수량·할인·기간·비용 입력 검증', '조건 변경 즉시 재계산', '기준선·추천안·조정안 비교', '시뮬레이션 저장·공유'],
    considerations: ['소비기한·출발일·설치 capacity를 넘는 조건 차단', '반품·수수료·배송·회피비용 중복 차감 금지', '입력 조건과 결과 버전을 함께 저장'],
    done: ['조건을 바꿨을 때 결과가 즉시 변경', '차단 조건은 계산 결과와 구분', '승인 대상은 저장된 simulation_run으로 재현'],
  },
  'F-10': {
    micro: ['담당자 전략 수정·버전 생성', '승인자 지정·검토 요청', '승인·거절·재승인·사유 입력', 'Teams 메시지 생성·전송', '전송 실패·재시도·결과 조회'],
    considerations: ['Teams 성공을 서비스 승인으로 간주하지 않음', '승인 후 조건 변경 시 재승인', '승인자 권한과 계열사 범위 확인'],
    done: ['승인 상태가 서비스에 남음', 'Teams 메시지에 조건·예상값·상세 링크 포함', '실패한 전송을 운영자가 재시도'],
  },
  'F-11': {
    micro: ['승인 전략과 실제 거래 매칭', '판매·예약·매출·마진 회수', '실제 잔량·폐기·위약금 기록', '예상 대비 오차·달성률 계산', '오차 원인 코드와 검증 데이터 저장'],
    considerations: ['실제값이 없으면 임의 대체 숫자 금지', '전략 버전·실행 기간·원천 거래를 연결', '결과 데이터의 정산 확정 여부 표시'],
    done: ['전략별 예상·실제 비교 가능', '오차 원인을 계열사별로 분류', '검증된 결과만 이후 예측 모델에 사용'],
  },
  'F-12': {
    micro: ['계열사 데이터 동기화 이력 저장', '위험재고 분석 이력 저장', '수요예측·AI 전략 생성 이력 저장', '전략 수정·Teams 전송 이력 저장', '배치·API·AI 오류 모니터링', '재시도·멱등키·실패 원인 기록'],
    considerations: ['업무 알림을 과도하게 만들지 않고 필요한 상태만 표시', 'request_id·batch_id·strategy_id로 앞뒤 결과 연결', '민감한 원가·개인정보가 로그와 Teams에 남지 않음'],
    done: ['각 기능의 실행 시각·결과·담당 범위가 남음', '실패 원인과 마지막 정상 상태 확인', '운영자가 실패 건을 재시도하고 결과 추적'],
  },
  'F-13': {
    micro: ['구성 상품 검색·번들 편집', '구성 수량·판매가·재고 예약', '품절·법적 제한 검증', '계열사별 매출·마진 배분', '번들 승인·판매 제한 상태'],
    considerations: ['P0/P1 실행과 P2 확장을 화면에서 명확히 구분', '구성품 하나의 품절·차단이 전체 판매에 미치는 영향', '교차 계열사 정산·책임 주체'],
    done: ['판매 가능 수량이 구성품 기준으로 계산', '배분 규칙과 승인 이력 보존', 'P2 실행 버튼이 초기에는 비활성화'],
  },
  'F-14': {
    micro: ['승인 상품 목록·상세 조회', '공개 가격·혜택·재고 상태 표시', '법적 표시·주의사항 노출', '재고 부족·판매 제한 표시', '장바구니·결제 없이 읽기 전용 제공'],
    considerations: ['승인되지 않은 상품·원가·내부 위험정보 노출 금지', '고객용 문구와 담당자용 계산 근거 분리', '실시간 재고 부족 시 표시 상태 갱신'],
    done: ['고객이 승인된 상품만 조회', '판매 제한 사유가 안전한 문구로 표시', 'P2 범위임을 운영 화면과 데이터에 표시'],
  },
  'F-15': {
    micro: ['최근 28일 판매이력 조회', '취소·반품·품절일을 구분', '최근 기간별 평균 판매량 계산', '할인·프로모션·시즌·요일 보정', '판매기간별 예상량·소진일 계산', '예측에 사용한 기준 저장'],
    considerations: ['품절일을 판매 부진으로 잘못 계산하지 않음', '신규 상품은 카테고리 평균 또는 예측 부족으로 표시', '예상량이 현재 가용 재고를 넘지 않도록 제한', '계열사별 단위와 예약 capacity를 구분'],
    done: ['상품별 예상 판매량과 계산 기준이 표시', '판매이력이 부족하면 상태가 명확히 표시', '같은 입력과 버전으로 결과를 다시 계산 가능'],
  },
};

function CapabilityDetailModal({ capability, onClose }: { capability: CapabilityCard; onClose: () => void }) {
  const details = capabilityDetails[capability.id];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return <div className="capability-modal-overlay" role="presentation" onClick={onClose}>
    <section className="capability-modal" role="dialog" aria-modal="true" aria-labelledby={`capability-modal-title-${capability.id}`} onClick={(event) => event.stopPropagation()}>
      <div className="capability-modal-header"><div><div className="capability-modal-meta"><span className="capability-id">{capability.id}</span><PhaseBadge phase={capability.phase} /></div><h2 id={`capability-modal-title-${capability.id}`}>{capability.title}</h2></div><button type="button" className="capability-modal-close" aria-label="기능 상세 닫기" onClick={onClose}>×</button></div>
      <p className="capability-modal-summary">{capability.summary}</p>
      <div className="capability-modal-contract"><div><span>필요 요소</span><strong>{capability.inputs.join(' · ')}</strong></div><div><span>결과</span><strong>{capability.outputs.join(' · ')}</strong></div></div>
      <div className="capability-modal-section"><div className="capability-modal-section-title"><span className="capability-label">세부 기능</span><p>이 기능을 실제 화면과 서버에서 나눠 만들 때 필요한 작은 단위입니다.</p></div><div className="capability-detail-table-wrap"><table className="capability-detail-table"><caption className="sr-only">세부 기능과 고려 요소, 완료 기준</caption><thead><tr><th scope="col">번호</th><th scope="col">세부 기능</th><th scope="col">고려할 요소</th><th scope="col">완료 기준</th></tr></thead><tbody>{details.micro.map((item, index) => <tr key={item}><td>{String(index + 1).padStart(2, '0')}</td><td>{item}</td><td>{details.considerations[index] ?? '앞 단계의 데이터와 연결되는지 확인'}</td><td>{details.done[index] ?? '오류·빈 상태에서도 사용자가 다음 행동을 알 수 있음'}</td></tr>)}</tbody></table></div></div>
      <div className="capability-modal-done"><span className="capability-label">범위 메모</span><ul><li>현재는 {capability.phase === 'P2' ? '화면과 데이터 구조를 우선 준비하는 후순위 범위' : '핵심 시연과 검증을 위해 구현하는 범위'}입니다.</li><li>실제 외부 시스템 연동이나 운영 정책이 확정되면 해당 세부 기준을 다시 확인합니다.</li></ul></div>
      <div className="capability-modal-rule"><span>핵심 운영 규칙</span><p>{capability.rule}</p></div>
    </section>
  </div>;
}

const affiliateProfiles = [
  { id: 'wellness', name: '현대웰니스', unit: 'SKU·lot', color: 'green', focus: '소비기한과 표시·보관조건', fields: 'lot_id · expiry_at · storage_condition · function_claim_class · return_eligible', costs: '배송·포장·수수료 · 쿠폰·포인트 · 반품 검수 · 회수·폐기', stop: '기한·표시·보관·리콜·판매 권한이 확인되지 않으면 차단', signal: '잔여기한 · 판매속도 · 예상 폐기비 · 표시정보 누락' },
  { id: 'travel', name: '더현대트래블', unit: 'offer·좌석·객실·slot', color: 'blue', focus: '출발일과 예약 capacity', fields: 'departure_at · booking_cutoff_at · capacity · supplier_id · cancellation_rule_id', costs: '발권·상담 · 제휴수수료 · 환율 · 변경·재예약 · 공급사 위약금', stop: '예약 마감·공급사 규정·환불조건·capacity가 없으면 차단', signal: '출발 임박도 · fill rate · 취소비 · 규정 누락' },
  { id: 'livart', name: '현대리바트', unit: '제품·옵션·프로젝트', color: 'amber', focus: '배송·설치·AS capacity', fields: 'dimension · weight · lead_time · install_slot · delivery_zone · as_cost', costs: '보관·전시 · 배송·설치 · 파손·재배송·회수 · 반품·AS', stop: '배송권역·설치 슬롯·주문제작·AS 조건이 없으면 차단', signal: '부피×보관일 · 납기지연 · 설치 부족 · 파손·AS 비용' },
  { id: 'greenfood', name: '현대그린푸드', unit: 'SKU·lot·센터', color: 'teal', focus: '소비기한·콜드체인·검사', fields: 'expiry_at · temperature_class · traceability_id · delivery_window · inspection_status', costs: '피킹·포장 · 냉장·냉동 · 보냉재·에너지 · 회수·폐기 · 채널 수수료', stop: '기한·보관·HACCP·검사·콜드체인이 없으면 차단', signal: '기한 압박 · 폐기량 · 온도 이탈 · 배송 capacity' },
];

const architectureLayers = [
  ['01', '원천 데이터', 'ERP·POS·WMS·예약·정산에서 기준시각이 있는 snapshot과 이력을 받습니다.'],
  ['02', '정책·하드 차단', '계열사·카테고리 profile로 판매 가능 여부와 필수값을 먼저 확인합니다.'],
  ['03', '예측·수식 엔진', '판매량·capacity·비용·기준선·위험을 결정론적으로 계산합니다.'],
  ['04', 'AI 설명·사람 승인', 'LLM은 계산 결과를 설명하고 담당 MD가 최종 조건을 승인합니다.'],
  ['05', '실행·성과 회수', 'Teams로 전달하고 실제 결과를 받아 다음 정책과 모델을 검증합니다.'],
];

const formulaRows = [
  ['실행 가능 여부', '모든 하드 차단 조건이 통과해야 1, 하나라도 모르면 0', 'unknown은 추천·승인 차단'],
  ['예상 판매·예약량', 'min(가용량, 기준량 × 시간효과 × 가격효과 × 채널효과 × 번들효과)', 'confidence는 수량에 곱하지 않고 예측 구간·표본 상태로 표시'],
  ['증분 기여현금이익', '매출 − 변동비 + 회피비용 − 잠식 − 위험손실 − AI 원가 − 기준선', '원가·수수료·반품 중복 차감 금지'],
  ['위험점수', '100 × Σ(신호별 가중치 × 상품별 위험값)', '가중치·임계값은 계열사·카테고리별 버전 관리'],
];

const stateRows = [
  ['데이터', 'received', 'validating', 'accepted / warning / quarantined / rejected'],
  ['위험 진단', 'detected', 'acknowledged', 'in_review → strategy_requested → resolved / suppressed'],
  ['전략', 'draft', 'generated / edited', 'submitted → approved / rejected → scheduled → executing → completed / failed'],
  ['Teams', 'not_requested', 'requested', 'sent → delivered / failed → retrying / exhausted'],
];

function PhaseBadge({ phase }: { phase: Phase }) {
  return <span className={`capability-phase capability-phase-${phase.toLowerCase()}`}>{phase}</span>;
}

export default function CapabilitiesPage() {
  const [activeTrack, setActiveTrack] = useState<Track>('all');
  const [query, setQuery] = useState('');
  const [openCapabilityId, setOpenCapabilityId] = useState<string | null>(null);
  const currentTrack = tracks.find((track) => track.id === activeTrack) ?? tracks[0];
  const selectedCapability = openCapabilityId ? capabilities.find((capability) => capability.id === openCapabilityId) ?? null : null;
  const visibleCapabilities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return capabilities.filter((capability) => {
      const matchesTrack = activeTrack === 'all' || capability.track === activeTrack || (activeTrack === 'common' && capability.track === 'common');
      const matchesQuery = !normalizedQuery || `${capability.id} ${capability.title} ${capability.summary} ${capability.inputs.join(' ')} ${capability.outputs.join(' ')}`.toLowerCase().includes(normalizedQuery);
      return matchesTrack && matchesQuery;
    });
  }, [activeTrack, query]);

  return (
    <>
      <section className="page-hero capability-hero">
        <div className="container capability-hero-grid">
          <div>
            <Reveal><span className="eyebrow">06 · Capability specification</span></Reveal>
            <Reveal><h1>기획을 기능 단위로<br /><em>구현 가능한 화면</em>으로 펼칩니다.</h1></Reveal>
            <Reveal><p>네 계열사의 데이터와 서비스 책임을 한 문서에 연결했습니다. 공통 기능은 함께 보고, 계열사별 필수 입력·하드 차단·비용은 분리해서 확인합니다.</p></Reveal>
          </div>
          <Reveal><div className="capability-hero-card"><span className="eyebrow">Read this page as</span><strong>기능 → 데이터 → 계산 → 승인</strong><p>각 기능 카드를 누르지 않아도 입력값, 출력값, 운영 규칙을 한 번에 확인할 수 있습니다.</p><div className="capability-mini-flow"><span>원천</span><i>→</i><span>정책</span><i>→</i><span>수식</span><i>→</i><span>승인</span></div></div></Reveal>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="capability-stats">
            <div><strong>15</strong><span>기능 계약</span></div>
            <div><strong>4</strong><span>계열사 프로필</span></div>
            <div><strong>5</strong><span>서비스 레이어</span></div>
            <div><strong>P0 → P2</strong><span>단계별 범위</span></div>
          </div>
          <div className="section-heading capability-heading"><span className="eyebrow">Capability map</span><h2>필요한 기능을<br /><em>관심 범위별로</em> 살펴봅니다.</h2><p>공통 서비스에서 계열사별 계산 요소까지, 각 카드에 입력·출력·운영 규칙을 함께 적었습니다.</p></div>
          <div className="capability-toolbar">
            <div className="capability-tabs" role="tablist" aria-label="기능 범위 필터">
              {tracks.map((track) => <button key={track.id} type="button" role="tab" aria-selected={activeTrack === track.id} className={activeTrack === track.id ? 'is-active' : ''} onClick={() => setActiveTrack(track.id)}><strong>{track.label}</strong><span>{track.hint}</span></button>)}
            </div>
            <label className="capability-search"><span className="sr-only">기능 검색</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="기능·입력·출력 검색" /><span aria-hidden="true">⌕</span></label>
          </div>
          <p className="capability-filter-note"><strong>{currentTrack.label}</strong> · {currentTrack.hint} · {visibleCapabilities.length}개 기능 표시</p>
          <div className="capability-table-wrap">
            <table className="capability-table">
              <caption className="sr-only">기능별 상세 명세 표. 상세 보기를 누르면 고려 요소와 완료 기준을 확인할 수 있습니다.</caption>
              <thead><tr><th scope="col">ID</th><th scope="col">기능명</th><th scope="col">적용 범위</th><th scope="col">단계</th><th scope="col">작은 기능 단위</th><th scope="col">핵심 입력 · 결과</th><th scope="col">상세</th></tr></thead>
              <tbody>
                {visibleCapabilities.map((capability) => {
                  const details = capabilityDetails[capability.id];
                  const trackLabel = tracks.find((track) => track.id === capability.track)?.label ?? '공통 서비스';
                  return <tr key={capability.id}>
                    <td><span className="capability-id">{capability.id}</span></td>
                    <td><button type="button" className="capability-table-title" onClick={() => setOpenCapabilityId(capability.id)}><strong>{capability.title}</strong><span>{capability.summary}</span></button></td>
                    <td><span className={`capability-table-scope capability-table-scope-${capability.track}`}>{trackLabel}</span></td>
                    <td><PhaseBadge phase={capability.phase} /></td>
                    <td><ul className="capability-table-list">{details.micro.map((item) => <li key={item}>{item}</li>)}</ul></td>
                    <td><div className="capability-table-contract"><span><b>입력</b>{capability.inputs.join(' · ')}</span><span><b>결과</b>{capability.outputs.join(' · ')}</span></div></td>
                    <td><button type="button" className="capability-table-detail" onClick={() => setOpenCapabilityId(capability.id)}>상세 보기 <b aria-hidden="true">↗</b></button></td>
                  </tr>;
                })}
              </tbody>
            </table>
          </div>
          {visibleCapabilities.length === 0 && <div className="capability-empty"><strong>검색 결과가 없습니다.</strong><p>다른 기능명이나 입력 요소로 검색해 보세요.</p></div>}
        </div>
      </section>

      <section className="section-tight band capability-section">
        <div className="container"><div className="section-heading"><span className="eyebrow">Affiliate profiles</span><h2>같은 화면, 다른 계산 기준</h2><p>상품과 서비스는 한곳에서 관리하지만, 실제 전략을 계산하는 필수 요소는 계열사별로 달라집니다.</p></div><div className="affiliate-profile-grid">{affiliateProfiles.map((profile) => <article className={`affiliate-profile affiliate-profile-${profile.color}`} key={profile.id}><div className="affiliate-profile-head"><span className="capability-id">{profile.unit}</span><span className="affiliate-profile-dot" aria-hidden="true" /></div><h3>{profile.name}</h3><strong>{profile.focus}</strong><dl><div><dt>필수 입력</dt><dd>{profile.fields}</dd></div><div><dt>주요 비용</dt><dd>{profile.costs}</dd></div><div><dt>차단 기준</dt><dd>{profile.stop}</dd></div><div><dt>위험 신호</dt><dd>{profile.signal}</dd></div></dl></article>)}</div></div>
      </section>

      <section className="section capability-section">
        <div className="container"><div className="section-heading"><span className="eyebrow">Service architecture</span><h2>기능은 이 순서로<br /><em>서로 연결됩니다.</em></h2><p>AI 추천은 마지막에 놓입니다. 먼저 원천 데이터와 정책을 검증하고, 숫자 계산이 끝난 뒤 사람이 승인합니다.</p></div><div className="capability-layer-grid">{architectureLayers.map(([num, title, body]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div></div>
      </section>

      <section className="section-tight band capability-section">
        <div className="container"><div className="section-heading"><span className="eyebrow">Formula contract</span><h2>수식은 공통 골격,<br />변수는 계열사 프로필</h2><p>수식의 이름과 계산 순서는 통일하지만, 처리기한·capacity·비용·위험 신호는 계열사와 카테고리별 profile에서 가져옵니다.</p></div><div className="formula-contract-grid">{formulaRows.map(([name, formula, rule]) => <article className="formula-contract-card" key={name}><span className="capability-label">{name}</span><code>{formula}</code><p>{rule}</p></article>)}</div><div className="capability-callout"><strong>계산 결과의 필수 버전</strong><p>모든 전략 결과에는 <code>snapshot_id · formula_version · policy_version · model_version</code>을 남겨 같은 입력으로 결과를 재현할 수 있어야 합니다.</p></div></div>
      </section>

      <section className="section capability-section">
        <div className="container capability-two-column"><div><div className="section-heading"><span className="eyebrow">Lifecycle</span><h2>데이터와 전략은<br /><em>상태로 추적</em>합니다.</h2><p>화면에 보이는 추천 하나가 어느 단계에서 막혔는지, 누가 다음 처리를 해야 하는지 상태로 확인합니다.</p></div><div className="state-list">{stateRows.map(([name, start, middle, end]) => <div className="state-row" key={name}><strong>{name}</strong><span>{start}</span><i>→</i><span>{middle}</span><i>→</i><b>{end}</b></div>)}</div></div><div className="capability-api-card"><span className="eyebrow">Interface surface</span><h3>서비스가 제공하는<br />주요 인터페이스</h3><ul><li><code>GET</code> 상품·재고·위험·이력 조회</li><li><code>POST</code> 전략 추천 요청·시뮬레이션</li><li><code>POST</code> 검토 요청·승인·거절</li><li><code>POST</code> 재고 갱신·위험 재분석 배치</li><li><code>GET</code> 예상 결과와 실제 성과 비교</li></ul><p>모든 응답은 request_id, 기준시각, 권한 범위, 정책·수식 버전을 포함합니다.</p></div></div>
      </section>

      <section className="section-tight band capability-section">
        <div className="container"><div className="section-heading"><span className="eyebrow">Delivery boundary</span><h2>이번 프로젝트에서 먼저<br /><em>검증할 것</em></h2><p>전체 기능을 한 번에 운영 기능으로 만들지 않고, 대표 수직 슬라이스에서 데이터·계산·승인·성과 회수를 끝까지 검증합니다.</p></div><Stagger className="delivery-grid"><article><PhaseBadge phase="P0" /><h3>기반과 계산</h3><p>권한, 공통 모델, 데이터 품질, 하드 차단, 결정론적 위험점수·시뮬레이션.</p></article><article><PhaseBadge phase="P1" /><h3>추천과 승인</h3><p>후보 생성, 담당자 수정, 승인·Teams 전달, 실제 결과 회수와 오차 비교.</p></article><article><PhaseBadge phase="P2" /><h3>확장</h3><p>교차 계열사 번들, 재고 이동, 고객용 카탈로그, 자동 재학습·모델 배포.</p></article></Stagger><div className="capability-open"><strong>구현 전 확정할 질문</strong><span>원천 시스템·데이터 소유자 · 대표 카테고리 · 기준선 · 수요 이력 기간 · 위험 가중치 · LLM 보존·비용 정책</span></div><div className="actions"><a className="button primary" href="/prd">제품 범위 보기 <span>→</span></a><a className="button secondary" href="/formulas">수식 및 계산 보기</a></div></div>
      </section>
      {selectedCapability && <CapabilityDetailModal capability={selectedCapability} onClose={() => setOpenCapabilityId(null)} />}
    </>
  );
}
