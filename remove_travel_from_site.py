import re

# 1. layout.tsx
path = 'explainer-site/src/app/layout.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('현대웰니스·더현대트래블·현대리바트·현대그린푸드의 재고와 예약 capacity를 통합해 판단하는', '현대웰니스·현대리바트·현대그린푸드의 재고를 통합해 판단하는')
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 2. page.tsx
path = 'explainer-site/src/app/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('4개 계열사 통합 AI 재고·capacity 의사결정 플랫폼', '3개 계열사 통합 AI 재고 의사결정 플랫폼')
text = text.replace('현대웰니스·더현대트래블·현대리바트·현대그린푸드의 상품과 예약 capacity를 통합해,', '현대웰니스·현대리바트·현대그린푸드의 상품과 재고를 통합해,')
text = text.replace('<strong>4개</strong><span>서로 다른 계열사 상품·서비스 맥락</span>', '<strong>3개</strong><span>서로 다른 계열사 상품 맥락</span>')
text = text.replace('<b>현대웰니스</b><b>더현대트래블</b><b>현대리바트</b><b>현대그린푸드</b>', '<b>현대웰니스</b><b>현대리바트</b><b>현대그린푸드</b>')
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 3. problem/page.tsx
path = 'explainer-site/src/app/problem/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('네 계열사의 상품은', '3개 계열사의 상품은')
# Remove travel context line
text = re.sub(r"\s*\{\s*name:\s*'더현대트래블'.*?\},\n", "\n", text, flags=re.DOTALL)
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 4. prd/page.tsx
path = 'explainer-site/src/app/prd/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('4개 계열사를 하나의', '3개 계열사를 하나의')
text = text.replace('네 계열사의 상품·예약 capacity는', '3개 계열사의 상품은')
text = text.replace('현대웰니스·더현대트래블·현대리바트·현대그린푸드의 책임 담당자와', '현대웰니스·현대리바트·현대그린푸드의 책임 담당자와')
text = text.replace("'4개 계열사 상품·재고·예약 capacity 공통 모델'", "'3개 계열사 상품·재고 공통 모델'")
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 5. sources/page.tsx
path = 'explainer-site/src/app/sources/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace('4개 계열사 공식 자료와', '3개 계열사 공식 자료와')
text = text.replace('현대웰니스·더현대트래블·현대리바트·현대그린푸드의 공식 자료,', '현대웰니스·현대리바트·현대그린푸드의 공식 자료,')
text = text.replace('네 계열사 공개 자료,', '3개 계열사 공개 자료,')
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 6. content.ts
path = 'explainer-site/src/lib/content.ts'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
# Filter out travel sources
text = text.replace("  { id: 'affiliate-travel', kind: '계열사', title: '현대드림투어 더현대트래블', location: '항공·호텔·해외 패키지·여행자보험·렌터카·와이파이', note: '물리 재고가 아닌 출발일·예약 좌석/객실·취소 규정·공급사 비용을 capacity로 계산해야 하는 근거', url: 'https://home.hyundaidreamtour.com/jsp/web/sub03_01.jsp' },\n", "")
text = text.replace("  { id: 'travel-dispute', kind: '법·정책', title: '공정거래위원회 소비자분쟁해결기준', location: '여행업 취소·환급 기준', note: '여행상품은 출발일까지 남은 기간과 계약별 환불·위약금 조건을 손익 계산에 넣어야 하는 근거', url: 'https://www.law.go.kr/admRulInfoP.do?admRulSeq=2100000270136&chrClsCd=010202&urlMode=admRulRvsInfoR' },\n", "")
text = text.replace("  { id: 'travel-exhibition', kind: '계열사', title: '더현대트래블 공식 기획전', location: '항공·호텔·패키지·쿠폰·H.Point·제휴 혜택', note: '예약형 상품의 고객 조건·부가서비스·쿠폰 변수를 분리해야 하는 근거', url: 'https://www.thehyundaitravel.com/exhibition/all/index.do' },\n", "")
text = text.replace("  { id: 'travel-cancel', kind: '계열사', title: '더현대트래블 고객센터 안내', location: '항공 부가서비스 취소·환불', note: '보험·좌석·수하물·기내식 등 ancillary SKU의 환불 가능 여부를 별도 계산해야 하는 근거', url: 'https://www.thehyundaitravel.com/customer-center/notify/view.do?detailsKey=2740' },\n", "")
text = text.replace("  { id: 'travel-easylaw', kind: '법·정책', title: '법제처 해외여행자 안내', location: '국외여행 표준약관·안전정보·중요 계약내용', note: '출발일·특별약관·목적지 안전정보·변경 동의 상태를 버전으로 저장하는 근거', url: 'https://easylaw.go.kr/CSP/CnpClsMainBtr.laf?ccfNo=2&cciNo=3&cnpClsNo=2&csmSeq=894&popMenu=ov' },\n", "")
text = text.replace("네 계열사의 상품과 SKU를 표로 찾아봅니다.", "3개 계열사의 상품과 SKU를 표로 찾아봅니다.")
text = text.replace("example: '여행 부가서비스, 건강기능식품, 가구, 식품의 반품·취소 조건을 같은 값으로 두지 않습니다.', related: ['contribution-cash', 'delivery-capacity'], sourceIds: ['travel-cancel', 'project-simulation'],", "example: '건강기능식품, 가구, 식품의 반품·취소 조건을 같은 값으로 두지 않습니다.', related: ['contribution-cash', 'delivery-capacity'], sourceIds: ['project-simulation'],")
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 7. formulas/page.tsx
path = 'explainer-site/src/app/formulas/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace("type AffiliateId = 'wellness' | 'travel' | 'livart' | 'greenfood';", "type AffiliateId = 'wellness' | 'livart' | 'greenfood';")
text = text.replace("현대웰니스·더현대트래블·현대리바트·현대그린푸드의 상품/서비스 특성을 공통 목적함수로 계산하는 AI 재고 처리 수식", "현대웰니스·현대리바트·현대그린푸드의 상품 특성을 공통 목적함수로 계산하는 AI 재고 처리 수식")
text = text.replace("네 계열사를 하나의", "3개 계열사를 하나의")
text = text.replace("              <div><strong>더현대트래블</strong><span>출발일까지 · 예약률 · 위약금</span></div>\n", "")
text = text.replace(", 'travel-easylaw'", "")
text = text.replace("'travel-easylaw', ", "")
# Remove travel profile block
text = re.sub(r"\s*\{\s*id:\s*'travel'.*?\},", "", text, flags=re.DOTALL)
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

# 8. capabilities/page.tsx
path = 'explainer-site/src/app/capabilities/page.tsx'
with open(path, 'r', encoding='utf-8') as f:
    text = f.read()
text = text.replace("type Track = 'all' | 'common' | 'wellness' | 'travel' | 'livart' | 'greenfood';", "type Track = 'all' | 'common' | 'wellness' | 'livart' | 'greenfood';")
text = text.replace("  { id: 'travel', label: '더현대트래블', hint: '예약·출발일·capacity' },\n", "")
text = text.replace("  { id: 'travel', name: '더현대트래블', unit: 'offer·좌석·객실·slot', color: 'blue', focus: '출발일과 예약 capacity', fields: 'departure_at · booking_cutoff_at · capacity · supplier_id · cancellation_rule_id', costs: '발권·상담 · 제휴수수료 · 환율 · 변경·재예약 · 공급사 위약금', stop: '예약 마감·공급사 규정·환불조건·capacity가 없으면 차단', signal: '출발 임박도 · fill rate · 취소비 · 규정 누락' },\n", "")
text = text.replace("네 계열사의 데이터와", "3개 계열사의 데이터와")
text = text.replace("<div><strong>4</strong><span>계열사 프로필</span></div>", "<div><strong>3</strong><span>계열사 프로필</span></div>")
text = text.replace("현대웰니스·더현대트래블·현대리바트·현대그린푸드", "현대웰니스·현대리바트·현대그린푸드")
with open(path, 'w', encoding='utf-8') as f:
    f.write(text)

print("Replacement done.")
