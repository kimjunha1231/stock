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

export const technologyRoles: TechnologyRole[] = [
  { name: 'SQL·통계', question: '지금 상태와 변화량은 얼마인가?', owns: '재고 집계·판매속도·변화율·급등/급락', excludes: '복합 미래수요 예측' },
  { name: '머신러닝', question: '앞으로 얼마나 팔리고 조건에 어떻게 반응할까?', owns: '수요·할인/프로모션 반응·선택적 확률', excludes: '법규·금액·승인 판단' },
  { name: '정책·규칙', question: '이 전략을 제안해도 되는가?', owns: '법규·검사·소유권·기한·할인 한도·품질 차단', excludes: '판매량 생성' },
  { name: '수식 엔진', question: '전략 결과가 금액과 위험으로 얼마인가?', owns: '위험·매출·비용·회피비용·증분이익·순위', excludes: '자유로운 문장 생성' },
  { name: 'RAG·벡터 검색', question: '관련 정책·법규·사례 근거가 무엇인가?', owns: '비정형 문서 근거 검색', excludes: '재고·매출 숫자 조회' },
  { name: 'LLM', question: '계산 결과를 어떻게 쉽게 설명할까?', owns: '요약·근거 설명·주의사항·확인 질문', excludes: '숫자 변경·하드 차단 변경·자동 승인' },
];

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

export const affiliateAiProfiles: AffiliateAiProfile[] = [
  { affiliate: '현대웰니스', productTypes: '건강기능식품·영양제', extraInputs: '성분·기능·대상 고객·소비기한·보관·표시·회수', strongestSignals: '성분·건강 관심·검색·내부 조회·판매', hardStops: '표시·회수·판매 가능 상태·최소 잔여기한·품질', costs: '포장·검수·반품·회수·보관·폐기', modelHandling: '소비기한을 판매 가능 상한과 위험 입력으로 함께 사용' },
  { affiliate: '현대리바트', productTypes: '가구·리빙·옵션·모듈', extraInputs: '옵션·상품 유형·가격대·보관일·채널·비용 프로필', strongestSignals: '인테리어·이사·혼수·시즌·공간별 관심', hardStops: '판매 정책·비용 누락·할인 한도·소유권', costs: '배송·설치·보관·파손·재배송·반품·AS', modelHandling: '저빈도 SKU가 카테고리·가격대·옵션 패턴을 공유' },
  { affiliate: '현대그린푸드', productTypes: '신선·냉장·냉동·가공·케어푸드', extraInputs: '로트·소비기한·온도·검사·이력추적·채널', strongestSignals: '메뉴·제철·날씨·검색·내부 주문·판매', hardStops: '검사·소비기한·온도·이력추적·회수·판매 상태', costs: '콜드체인·피킹·포장·보냉재·반품·폐기', modelHandling: '상품군별 예측 기간과 보정값을 분리' },
];

export const aiStages: AiStage[] = [
  { id: '01', title: '계열사 데이터 수집', owner: 'Spring Batch', summary: '세 계열사의 읽기 전용 Oracle View에서 하루 1회 또는 수동 요청으로 원천 데이터를 가져옵니다.', required: ['연동 전용 View', '원천 기준시각', '원천 상품·SKU 키'], optional: ['변경 건수', '삭제 표시'], outputs: ['계열사별 수집 snapshot', '처리 건수·상태'], fallback: '실패 계열사는 마지막 성공 snapshot을 유지합니다.', next: '원천키와 수집시각을 공통 변환 단계로 전달합니다.' },
  { id: '02', title: '공통 데이터 변환', owner: '변환 규칙', summary: '계열사마다 다른 코드·단위·시간을 통합 상품·SKU·로트 구조로 맞춥니다.', required: ['원천키', '계열사 코드 체계', '수량·금액 단위'], optional: ['원천 설명값', '원천 카테고리 경로'], outputs: ['공통 상품·SKU·로트', '재고·판매·가격 snapshot'], fallback: '매핑에 실패한 행을 격리하고 정상 행만 계속 처리합니다.', next: '공통 ID가 붙은 데이터를 품질 검사에 전달합니다.' },
  { id: '03', title: '데이터 품질 확인', owner: '품질 규칙', summary: '누락·중복·음수 수량·가격 오류·기준시각 지연을 찾아 계산 가능 여부를 결정합니다.', required: ['상품·재고·판매', '가격·정책 필수값', '기준시각'], optional: ['지연 허용시간', '계열사별 품질 임계값'], outputs: ['통과·경고·차단 상태', '품질 사유 코드'], fallback: '필수 조합이 없으면 마진 전략을 차단합니다.', next: '사용 가능한 데이터와 품질 상태를 트렌드·예측에 전달합니다.' },
  { id: '04', title: '트렌드 신호 생성', owner: 'SQL·통계', summary: '검색·SNS·조회·판매 변화를 비교해 상승·유지·하락 신호를 만듭니다.', required: ['검색·SNS·조회·판매 변화', '출처', '수집시각'], optional: ['찜·장바구니', '날씨·제철 신호'], outputs: ['트렌드 방향', '신호별 변화율·출처'], fallback: '검증된 중립값으로 처리하고 트렌드 미반영을 표시합니다.', next: '검증된 트렌드 피처만 수요예측에 전달합니다.' },
  { id: '05', title: '머신러닝 수요예측', owner: '공통 ML 모델', summary: '세 계열사 데이터를 함께 학습한 모델이 계열사·카테고리·상품 특성에 맞춰 미래 판매량을 예측합니다.', required: ['판매·재고·가격·행사', '시간 피처', '계열사·카테고리·SKU'], optional: ['트렌드·날씨', '계열사 확장 피처'], outputs: ['보수·기본·낙관 예상수요', '예측 범위·데이터 충분성'], fallback: '승인된 기준모델을 사용하거나 예측 부족으로 표시합니다.', next: '조건별 예상 판매량을 보정 단계로 전달합니다.' },
  { id: '06', title: '계열사·카테고리별 보정', owner: '보정 규칙', summary: '공통 모델의 반복 편향이 검증된 경우에만 계열사·카테고리 보정값을 적용합니다.', required: ['공통 모델 예측', '계열사·카테고리', '과거 예측 오차'], optional: ['판매량 구간별 편향', '계절별 편향'], outputs: ['최종 수요예측', '보정값·보정 버전'], fallback: '검증된 보정값이 없으면 공통 모델 결과를 그대로 사용합니다.', next: '최종 예측을 차단·위험·전략 계산에 전달합니다.' },
  { id: '07', title: '하드 차단 확인', owner: '정책 엔진', summary: '소유권·법규·검사·기한·정책·데이터 품질을 수익보다 먼저 확인합니다.', required: ['소유권', '법규·검사 상태', '처리기한', '정책·품질 상태'], optional: ['RAG 정책 링크', '담당 조직'], outputs: ['실행 가능 여부', '차단 코드·근거'], fallback: '확인되지 않은 조건도 안전하게 차단합니다.', next: '허용된 상품과 전략 조건만 위험·후보 계산으로 보냅니다.' },
  { id: '08', title: '위험점수 계산', owner: '수식 엔진', summary: '예상수요·재고·기한·비용 신호를 공통 수식과 계열사별 가중치로 합칩니다.', required: ['예상수요', '가용재고', '기한·보관일', '비용·가중치'], optional: ['미소진·반품 확률', '외부 위험 신호'], outputs: ['위험점수·등급', '신호별 기여값'], fallback: '정책 가중치가 없으면 위험 평가를 확정하지 않습니다.', next: '위험과 우선순위 값을 전략 후보 생성에 전달합니다.' },
  { id: '09', title: '전략 후보 생성', owner: '후보 생성기', summary: '허용 범위 안에서 수량·할인·기간·쿠폰·채널 조합을 유한하게 만듭니다.', required: ['허용 수량·할인·기간', '쿠폰·채널 정책'], optional: ['번들·프로모션 선택지', '사용자 목표'], outputs: ['검증 가능한 전략 후보 목록', '후보별 입력 조건'], fallback: '허용 조합이 없으면 후보 없음과 이유를 표시합니다.', next: '각 시나리오를 수요 재추론과 손익 계산으로 전달합니다.' },
  { id: '10', title: '매출·비용·증분이익 계산', owner: '수식 엔진', summary: '머신러닝 예상수량과 확정 비용을 한글 수식에 넣어 전략별 현금 성과를 계산합니다.', required: ['예상 판매수량', '가격·할인', '비용 snapshot', '회피비용·기준선'], optional: ['잠식·반품·폐기 확률', 'AI 사용 비용'], outputs: ['매출·변동비·회피비용', '기준선 대비 증분 기여현금이익'], fallback: '필수 비용이나 기준선이 없으면 마진 순위를 확정하지 않습니다.', next: '비교 가능한 손익과 잔여재고를 목표별 순위로 전달합니다.' },
  { id: '11', title: '목표별 전략 순위', owner: '순위 규칙', summary: '같은 후보를 최대마진·빠른소진·최대매출·위험최소화 관점으로 다시 정렬합니다.', required: ['허용 후보', '손익', '잔여재고', '위험'], optional: ['사용자 목표', '하방 한도'], outputs: ['목표별 상위 후보', '보수·기본·낙관 비교'], fallback: '유효 후보가 없으면 차단·데이터 부족 이유만 제공합니다.', next: '상위 후보와 하방 결과를 근거 검색과 설명에 전달합니다.' },
  { id: '12', title: 'RAG 근거 검색', owner: '문서 검색', summary: '정책·법규·상품 지침·과거 사례에서 설명에 필요한 근거만 찾습니다.', required: ['정책·법규·상품 지침', '문서 접근권한'], optional: ['문서 임베딩', '과거 검토 사례'], outputs: ['문서 제목·근거 구간·링크', '검색 상태'], fallback: '근거가 없으면 근거 없음으로 반환합니다.', next: '인용 가능한 문서 근거만 LLM 입력에 추가합니다.' },
  { id: '13', title: 'LLM 설명', owner: 'Spring AI·LLM', summary: '계산된 숫자와 문서 근거를 담당자가 이해할 수 있는 설명으로 바꿉니다.', required: ['계산 결과', '데이터·모델·정책 버전', '차단·위험 근거'], optional: ['RAG 문서', '표현 수준'], outputs: ['요약·권장 행동', '근거·주의사항·확인 질문'], fallback: '정해진 문장 템플릿으로 대체합니다.', next: '설명과 근거를 검토 화면과 Teams 전달 자료에 제공합니다.' },
  { id: '14', title: '실제 결과 비교', owner: '검증 배치', summary: '예상 판매량·잔여재고·증분이익을 외부 시스템의 실제 결과와 비교합니다.', required: ['예상값', '실제 판매·잔여재고·이익', '실행 상태'], optional: ['품절·노출·경쟁행사·운영 원인'], outputs: ['오차·달성률', '원인 코드'], fallback: '실제 결과 미수집 상태를 표시하고 학습에는 넣지 않습니다.', next: '검증 자료를 모델·보정·정책 개선 판단으로 전달합니다.' },
  { id: '15', title: '모델·정책 개선', owner: '운영 검토', summary: '모델 오차와 전략 실행 오차를 분리해 유지·보정·재학습·롤백을 결정합니다.', required: ['검증지표', '데이터 드리프트', '정책 성과'], optional: ['후보 모델', '새 피처'], outputs: ['승인 모델·보정·정책 버전', '유지 또는 롤백 결정'], fallback: '이전 승인 모델과 정책을 유지합니다.', next: '다음 동기화와 예측 실행부터 승인된 버전을 사용합니다.' },
];

const withTimestamp = (message: string) => `${message} · 데이터 기준시각과 사용 버전 표시`;

export const situationPlaybooks: SituationPlaybook[] = [
  { id: 'new-product', title: '신규 상품', signal: '판매이력 없음', decision: '계열사·카테고리·가격대·상품 특성이 비슷한 집단으로만 초기 예측합니다.', flow: ['유사 집단 선택', '공통 모델의 집단 패턴 사용', '예측 범위를 넓게 계산', '낮은 신뢰 상태 부여'], screen: withTimestamp('유사 집단·예측 범위·부족 데이터'), nextAction: '담당자가 가정과 초기 수량을 확인합니다.' },
  { id: 'short-history', title: '판매이력 부족', signal: '학습 최소기간 미충족', decision: '복잡한 모델보다 검증된 기준모델과 카테고리 평균을 우선합니다.', flow: ['기준모델 계산', '카테고리 평균 비교', '더 안정적인 결과 선택', '부족한 이력 기간 기록'], screen: withTimestamp('사용 기간·선택 모델·신뢰 상태'), nextAction: '데이터가 축적되면 공통 모델을 다시 평가합니다.' },
  { id: 'trend-spike', title: '트렌드 급등', signal: '검색·SNS 관심 급증', decision: '검색만 오른 것인지 조회·판매도 함께 오른 것인지 확인합니다.', flow: ['외부 관심 신호 확인', '내부 행동 신호 확인', '수요예측에 검증 신호 반영', '재고·리드타임·기한 검토'], screen: withTimestamp('동행 신호·예측 범위·현재 가용재고'), nextAction: '추가 입고 또는 프로모션을 검토하되 자동 발주하지 않습니다.' },
  { id: 'trend-drop', title: '트렌드 급락', signal: '트렌드·조회·판매 하락', decision: '일시적인 계절 변화인지 반복되는 수요 하락인지 구분합니다.', flow: ['기간별 하락 비교', '계절 효과 보정', '미소진 위험 계산', '처리 전략 후보 비교'], screen: withTimestamp('하락 기간·예상 잔여재고·하방 결과'), nextAction: '담당자가 처리기한과 목표에 맞는 전략을 검토합니다.' },
  { id: 'expiry-pressure', title: '소비기한 임박', signal: '최소 잔여기한 접근', decision: '판매 가능한 로트만 남긴 뒤 기한 안의 소진 가능성을 계산합니다.', flow: ['로트·검사 상태 확인', '판매 가능 수량 확정', '기한 내 수요 계산', '잔여재고·폐기비 비교'], screen: withTimestamp('판매 가능 로트·남은 기한·예상 폐기량'), nextAction: '기한 내 처리 가능한 후보를 검토합니다.' },
  { id: 'slow-moving', title: '느린 판매·높은 재고', signal: '재고일수 상승', decision: '재고금액만 보지 않고 품절 보정 판매속도와 예상수요를 함께 봅니다.', flow: ['판매속도 보정', '예상수요 계산', '조건별 잔여재고 계산', '증분이익 비교'], screen: withTimestamp('재고일수·판매속도·예상 잔여재고'), nextAction: '목표별 전략 후보를 비교합니다.' },
  { id: 'discount-gap', title: '할인 이력 부족', signal: '상품별 할인 반응 미확인', decision: '상품 반응을 추정하지 않고 검증된 계열사·카테고리 평균만 제한적으로 사용합니다.', flow: ['상품 반응값 미사용', '카테고리 평균 적용', '예측 범위 확대', '하방 손실 경고'], screen: withTimestamp('사용한 대체값·예측 범위·손실 가능성'), nextAction: '보수적인 할인 조건부터 담당자가 검토합니다.' },
  { id: 'low-confidence', title: '낮은 예측 신뢰도', signal: '예측 범위가 지나치게 넓음', decision: '신뢰도를 수량에 곱하지 않고 세 가지 예측 구간과 하방을 보여줍니다.', flow: ['보수·기본·낙관 표시', '하방 손익 계산', '손익분기 조건 계산', '데이터 부족 표시'], screen: withTimestamp('세 예측 구간·하방 손익·손익분기점'), nextAction: '담당자가 감당 가능한 하방을 기준으로 판단합니다.' },
  { id: 'sync-failure', title: '계열사 동기화 실패', signal: '배치 전체 또는 일부 실패', decision: '다른 계열사 처리는 유지하고 실패 계열사의 데이터 최신성만 별도 판단합니다.', flow: ['실패 계열사 격리', '마지막 성공 snapshot 유지', '지연시간 계산', '전략 허용 또는 차단'], screen: withTimestamp('실패 계열사·지연시간·마지막 성공 시각'), nextAction: '실패 영역만 수동으로 다시 실행합니다.' },
  { id: 'hard-stop', title: '정책·검사·소유권 차단', signal: '필수 조건 미통과', decision: '예측 이익과 관계없이 전략 후보에서 제외합니다.', flow: ['차단 규칙 평가', '차단 코드 저장', '정책 근거 연결', '후보 목록에서 제외'], screen: withTimestamp('차단 코드·이유·근거 정책'), nextAction: '원천 데이터 또는 정책 담당자가 조건을 확인합니다.' },
  { id: 'scenario-change', title: '사용자의 조건 변경', signal: '할인·기간·수량·쿠폰 변경', decision: '동일한 데이터 snapshot과 정책으로 원안과 변경안을 비교합니다.', flow: ['변경값 저장', '조건부 수요 재추론', '수식 재계산', '원안 대비 차이 계산'], screen: withTimestamp('원안·변경안의 예측·손익·잔여재고'), nextAction: '담당자가 변경안을 검토하고 승인 절차로 넘깁니다.' },
  { id: 'outcome-gap', title: '예상과 실제의 큰 차이', signal: '예측 오차 또는 손익 오차 급증', decision: '모델 오류·데이터 오류·실행 미준수·외부 사건을 분리합니다.', flow: ['오차 계산', '원인 코드 지정', '모델/정책 문제 분기', '재검증'], screen: withTimestamp('오차·원인·영향 범위'), nextAction: '검증 결과에 따라 보정·재학습 또는 정책 수정을 검토합니다.' },
];

export const modelLifecycle: LifecycleStep[] = [
  { id: '01', title: '학습 snapshot', description: '특정 기준시각의 판매·재고·가격·행사·트렌드 피처를 고정합니다.' },
  { id: '02', title: '미래 누출 검사', description: '예측시점 이후의 판매량·반품·행사 결과가 입력에 섞이지 않았는지 확인합니다.' },
  { id: '03', title: '기준모델', description: '이동평균·계절 평균·지수평활처럼 설명 가능한 기준을 먼저 계산합니다.' },
  { id: '04', title: '공통 ML 학습', description: '계열사·카테고리·상품 특성을 포함한 전역 수요예측 모델을 학습합니다.' },
  { id: '05', title: '시간순 검증', description: '과거로 학습하고 그 이후 기간을 예측하는 방식으로 반복 평가합니다.' },
  { id: '06', title: '그룹별 평가', description: '전체 평균뿐 아니라 계열사·카테고리·판매량 구간별 오차를 확인합니다.' },
  { id: '07', title: '보정 평가', description: '반복 편향이 있을 때만 계열사·카테고리 보정값을 검증합니다.' },
  { id: '08', title: '운영모델 비교', description: '기존 승인 모델과 기준모델보다 안정적으로 좋아졌는지 비교합니다.' },
  { id: '09', title: '승인 모델 등록', description: '검증을 통과한 모델·피처·학습기간·지표를 버전으로 등록합니다.' },
  { id: '10', title: '예측 실행', description: '일 배치와 수동 갱신 후 승인된 모델로 수요를 추론합니다.' },
  { id: '11', title: '성과 모니터링', description: '실제 판매량과 비교해 오차·구간 포함률·드리프트를 관찰합니다.' },
  { id: '12', title: '재학습·롤백', description: '개선이 검증되면 재학습하고 문제가 생기면 이전 승인 모델로 되돌립니다.' },
];

export const fallbackRows: FallbackRow[] = [
  { situation: '계열사 DB 실패', fallback: '마지막 성공 snapshot 유지', userMessage: '지연 계열사·마지막 성공 기준시각' },
  { situation: '트렌드 미수집', fallback: '검증된 중립값으로 트렌드 효과 미반영', userMessage: '트렌드 미반영' },
  { situation: 'ML 서버 실패', fallback: '승인된 기준모델 또는 유효기간 안의 최근 예측 사용', userMessage: '대체 모델·예측 생성시각' },
  { situation: '입력 데이터 부족', fallback: '카테고리 기준모델 사용 또는 전략 차단', userMessage: '부족 필드·낮은 신뢰 상태' },
  { situation: '정책 누락', fallback: '전략 생성 차단', userMessage: '확정이 필요한 정책 항목' },
  { situation: '비용 누락', fallback: '마진 순위 확정 차단', userMessage: '비용 미확정' },
  { situation: 'RAG 근거 없음', fallback: '문서 근거 없이 답하지 않음', userMessage: '확인 가능한 근거 없음' },
  { situation: 'LLM 실패', fallback: '고정 문장 템플릿 사용', userMessage: '자동 설명 대체' },
  { situation: '예측 오차 급증', fallback: '이전 승인 모델 유지·원인 조사', userMessage: '모델 상태 경고' },
];

export const outputContractRows: OutputContractRow[] = [
  { group: '식별', fields: '계열사·카테고리·상품·SKU·로트·채널', source: '계열사 원천·통합 매핑' },
  { group: '데이터 상태', fields: 'snapshot 기준시각·품질 상태·부족 필드', source: '동기화·품질 검사' },
  { group: '트렌드', fields: '방향·신호별 변화율·출처·수집시각', source: 'SQL·통계' },
  { group: '예측', fields: '기간·보수·기본·낙관 판매량·소진일·충분성', source: '머신러닝·보정' },
  { group: '차단', fields: '실행 가능 여부·차단 코드·이유·근거 정책', source: '정책·규칙' },
  { group: '위험', fields: '점수·등급·신호별 기여값·임계값', source: '수식·정책 프로필' },
  { group: '전략', fields: '목표·수량·할인율·기간·쿠폰·채널·시나리오', source: '후보 생성·사용자 입력' },
  { group: '손익', fields: '매출·변동비·회피비용·잠식·위험손실·기준선·증분이익', source: '수식 엔진' },
  { group: '설명', fields: '요약·추천 이유·주의사항·확인 질문·문서 출처', source: 'LLM·RAG' },
  { group: '재현', fields: '모델·피처·수식·정책·프롬프트 버전', source: '버전 원장' },
  { group: '검증', fields: '실제 판매량·잔여재고·실제 이익·오차·원인 코드', source: '외부 결과·검증 배치' },
];
