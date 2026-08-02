'use client';

import { useState } from 'react';
import { greenfoodData, wellnessData, livartData, AffiliateCrawlSummary } from '@/lib/crawling-data';

export function CrawlingExplorer() {
  const [activeTab, setActiveTab] = useState<'erd' | 'external' | 'mapping' | 'data' | 'docs'>('erd');
  const [selectedAffiliate, setSelectedAffiliate] = useState<'all' | 'greenfood' | 'wellness' | 'livart'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const affiliates: AffiliateCrawlSummary[] = [greenfoodData, wellnessData, livartData];

  const getFilteredSamples = (data: AffiliateCrawlSummary) => {
    if (!searchQuery.trim()) return data.samples;
    const q = searchQuery.toLowerCase();
    return data.samples.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.brand.toLowerCase().includes(q) ||
        s.mainCategory.toLowerCase().includes(q) ||
        (s.subCategory && s.subCategory.toLowerCase().includes(q)) ||
        s.id.toLowerCase().includes(q)
    );
  };

  return (
    <div className="crawling-explorer">
      {/* Top Navigation Tabs */}
      <div className="filter-row" style={{ marginBottom: '24px', justifyContent: 'center' }}>
        <button
          className={`filter-button ${activeTab === 'erd' ? 'active' : ''}`}
          onClick={() => setActiveTab('erd')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          🏛️ 1개 통합 시스템 DB (InventoryOS)
        </button>
        <button
          className={`filter-button ${activeTab === 'external' ? 'active' : ''}`}
          onClick={() => setActiveTab('external')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📡 3개 외부 계열사 DB 구조
        </button>
        <button
          className={`filter-button ${activeTab === 'mapping' ? 'active' : ''}`}
          onClick={() => setActiveTab('mapping')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          🔄 외부 DB ➔ 통합 DB 연동 매핑표
        </button>
        <button
          className={`filter-button ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📊 3개 계열사 크롤링 수집 원본 (2,690건)
        </button>
        <button
          className={`filter-button ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveTab('docs')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📑 시스템 정책 문서 연계
        </button>
      </div>

      {/* TAB 1: INTEGRATED SYSTEM DB (InventoryOS Core + Extensions) */}
      {activeTab === 'erd' && (
        <div>
          <div className="callout" style={{ marginBottom: '28px', background: '#eff6ff', borderColor: '#bfdbfe' }}>
            <strong style={{ fontSize: '16px', color: '#1e40af' }}>💡 3개 외부 DB 수집 ➔ 1개 통합 시스템 DB (InventoryOS) 아키텍처</strong>
            <p style={{ marginTop: '8px', color: '#334155', lineHeight: 1.65 }}>
              현대백화점그룹 3개 외부 계열사 DB(현대그린푸드·현대웰니스·현대리바트)의 이종 데이터 원장을 정기 동기화(ETL/Sync)하여
              <strong>1개의 통합 시스템 DB(Single Schema Multi-Tenant)</strong>에 수집·정규화합니다.<br />
              모든 계열사가 공유하는 <strong>6개 공통 코어 마스터 테이블</strong>과, 각 계열사의 독자적 비즈니스 속성을 수용하는 <strong>3개 전용 확장 테이블(Extension Table)</strong>로 구성됩니다.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🏢 공통 코어 마스터 테이블 (Core Master Tables)</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400 }}>- 3개 계열사 데이터가 통합 정규화되는 마스터 DB</span>
          </h3>

          {/* Core Tables Visual Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '36px' }}>

            {/* Table 1: affiliate */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>1. 계열사 마스터 (affiliate)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키(PK): 계열사 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>현대웰니스, 현대리바트, 현대그린푸드 각 계열사 식별 마스터</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>affiliate_id</strong> (문자형, 기본키) - 계열사 코드 (`GREENFOOD`, `WELLNESS`, `LIVART`)</div>
                <div>• <strong>name</strong> (문자형) - 계열사명 (현대그린푸드, 현대웰니스, 현대리바트)</div>
                <div>• <strong>code</strong> (문자형) - 시스템 식별 코드</div>
                <div>• <strong>created_at</strong> (일시) - 시스템 등록 일시</div>
              </div>
            </div>

            {/* Table 2: brand */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>2. 브랜드 마스터 (brand)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 브랜드 ID | 외래키: 계열사 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>솔가, 고헬씨, 리바트, 그리팅 등 계열사별 브랜드 통합 관리</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>brand_id</strong> (정수형, 기본키) - 브랜드 식별 ID</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 소속 계열사 ID</div>
                <div>• <strong>brand_name</strong> (문자형) - 브랜드 이름 (리바트, 솔가 등)</div>
                <div>• <strong>brand_category</strong> (문자형) - 브랜드 카테고리</div>
              </div>
            </div>

            {/* Table 3: category */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>3. 카테고리 (category)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 카테고리 ID | 자가외래키: 상위 카테고리 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>대분류 - 중분류 - 소분류 통합 계층형 카테고리 구조</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>category_id</strong> (정수형, 기본키) - 카테고리 식별 ID</div>
                <div>• <strong>parent_id</strong> (정수형, 자가외래키) - 상위 카테고리 ID (NULL 가능)</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 계열사 ID</div>
                <div>• <strong>name</strong> (문자형) - 카테고리명 (소파, 식재료 등)</div>
                <div>• <strong>category_depth</strong> (정수형) - 카테고리 단계 (1:대, 2:중, 3:소)</div>
                <div>• <strong>full_path</strong> (문자형) - 전체 경로 (가구 &gt; 소파 &gt; 패브릭소파)</div>
              </div>
            </div>

            {/* Table 4: product Master */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#2563eb', borderWidth: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#2563eb', color: '#ffffff', fontSize: '11px' }}>4. 통합 상품 마스터 (product) ★</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>3개 외부 DB의 모든 상품이 매핑되는 통합 마스터 테이블</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#2563eb' }}>product_id</strong> (정수형, 기본키) - 시스템 내부 통합 상품 ID</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 출처 계열사 ID</div>
                <div>• <strong>external_item_id</strong> (문자형) - 외부 DB 원천 식별자 (`itemId` / `goodsNo` / `goodsSn`)</div>
                <div>• <strong>brand_id</strong> (정수형, 외래키) - 브랜드 ID</div>
                <div>• <strong>category_id</strong> (정수형, 외래키) - 카테고리 ID</div>
                <div>• <strong>product_name</strong> (문자형) - 표준 상품명</div>
                                <div>• <strong>status</strong> (문자형) - 판매 상태 (판매 중 / 일시 품절 등)</div>
                <div>• <strong>badge</strong> (문자형) - 배지 (소비기한 임박 / 냉동 / 클리어런스)</div>
                <div>• <strong>product_url</strong> (문자형) - 원천 상품 상세페이지 URL</div>
                <div>• <strong>image_url</strong> (문자형) - 대표 썸네일 이미지 URL</div>
                <div>• <strong>created_at / updated_at</strong> (일시) - 생성 및 최근 동기화 일시</div>
              </div>
            </div>

            {/* Table 5: pricing */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>5. 가격 및 할인 이력 (pricing)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 가격 ID | 외래키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>정가, 판매가, 할인율 및 1일 섭취 가격 변동 관리</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>pricing_id</strong> (정수형, 기본키) - 가격 기록 ID</div>
                <div>• <strong>product_id</strong> (정수형, 외래키) - 통합 상품 ID</div>
                <div>• <strong>original_price</strong> (금액/숫자형) - 정가 (원)</div>
                <div>• <strong>selling_price</strong> (금액/숫자형) - 실판매가 (원)</div>
                <div>• <strong>discount_pct</strong> (숫자형) - 할인율 (%)</div>
                <div>• <strong>daily_price_text</strong> (문자형) - 1일 가격 (예: 하루당 450원)</div>
                <div>• <strong>is_active</strong> (논리형) - 현재 유효 가격 여부</div>
                <div>• <strong>updated_at</strong> (일시) - 가격 갱신 일시</div>
              </div>
            </div>

            {/* Table 6: inventory */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#10b981', borderWidth: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#10b981', color: '#ffffff', fontSize: '11px' }}>6. 통합 재고 &amp; 소비기한 (inventory) ★</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 재고 ID | 외래키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>재고 수량, 남은수량, 소비기한 및 AI 위험 등급 관리</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#10b981' }}>inventory_id</strong> (정수형, 기본키) - 재고 기록 ID</div>
                <div>• <strong>product_id</strong> (정수형, 외래키) - 통합 상품 ID</div>
                <div>• <strong>stock_qty</strong> (정수형) - 현재 총 재고 수량</div>
                <div>• <strong>remaining_qty</strong> (정수형) - 남은 한정 수량 (웰니스)</div>
                <div>• <strong>storage_condition</strong> (문자형) - 보관 조건 (냉동 / 냉장 / 상온)</div>
                <div>• <strong>expiry_date</strong> (날짜) - 소비기한 / 유통기한 날짜</div>
                <div>• <strong>d_day</strong> (정수형) - 소비기한 잔여 일수 (D-Day)</div>
                <div>• <strong>risk_grade</strong> (문자형) - AI 위험 등급 (`NORMAL` / `WARNING` / `DANGER`)</div>
                <div>• <strong>updated_at</strong> (일시) - 재고 동기화 일시</div>
              </div>
            </div>

            {/* Table 7: delivery_info */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>7. 배송 &amp; 물류 규정 (delivery_info)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 배송 ID | 외래키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>배송유형, 배송비, 리드타임 및 반품 규정 통합 관리</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>delivery_id</strong> (정수형, 기본키) - 배송 설정 ID</div>
                <div>• <strong>product_id</strong> (정수형, 외래키) - 통합 상품 ID</div>
                <div>• <strong>delivery_type</strong> (문자형) - 배송 방식 (직접배송 / 택배 등)</div>
                <div>• <strong>delivery_fee_text</strong> (문자형) - 기본 배송비 안내</div>
                <div>• <strong>delivery_period_text</strong> (문자형) - 배송 소요기간 (주문 후 4~5일)</div>
                <div>• <strong>return_fee_text</strong> (문자형) - 반품/교환 배송비 (105,200원 / 38,000원)</div>
                <div>• <strong>return_condition_text</strong> (문자형) - 조립 후 반품 불가 조건</div>
              </div>
            </div>

            {/* Table 8: sync_log */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>8. 동기화 원장 (sync_log)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 동기화 ID | 외래키: 계열사 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>외부 3개 DB ➔ 통합 DB 연동 수집 처리 이력 원장</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>sync_id</strong> (정수형, 기본키) - 동기화 세션 ID</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 대상 계열사 ID</div>
                <div>• <strong>sync_type</strong> (문자형) - 동기화 방식 (BATCH / REALTIME)</div>
                <div>• <strong>records_synced</strong> (정수형) - 동기화 처리 건수</div>
                <div>• <strong>status</strong> (문자형) - 성공/실패 상태 (SUCCESS / FAILED)</div>
                <div>• <strong>synced_at</strong> (일시) - 동기화 완료 일시</div>
              </div>
            </div>

          </div>

          {/* Extension Tables */}
          <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🧬 계열사별 전용 확장 테이블 (Affiliate Extension Tables)</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400 }}>- 각 계열사의 독자적 비즈니스 속성을 분리 저장하는 확장 스키마</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            
            <div className="term-entry" style={{ background: '#f0fdf4', borderColor: '#86efac' }}>
              <strong style={{ color: '#166534', fontSize: '14px' }}>🥗 greenfood_meal_ext (현대그린푸드 케어식단 확장)</strong>
              <p style={{ fontSize: '11px', color: '#15803d', margin: '6px 0 10px' }}>식단 유형, 5일/7일 패키지 구성, 영양성분 정보</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#166534', lineHeight: 1.7 }}>
                <div>• <strong>product_id</strong> (기본키 / 외래키 ➔ product)</div>
                <div>• <strong>meal_type</strong> (문자형) - 식단 종류 (고혈압 / 당뇨 / 저속식단)</div>
                <div>• <strong>package_days</strong> (정수형) - 패키지 구성 일수 (5일 / 7일)</div>
                <div>• <strong>is_frozen</strong> (논리형) - 냉동 보관 식단 여부</div>
                <div>• <strong>nutrition_summary</strong> (문자형) - 주요 영양성분 요약</div>
              </div>
            </div>

            <div className="term-entry" style={{ background: '#fefce8', borderColor: '#fde047' }}>
              <strong style={{ color: '#854d0e', fontSize: '14px' }}>💊 wellness_health_ext (현대웰니스 건강기능식품 확장)</strong>
              <p style={{ fontSize: '11px', color: '#a16207', margin: '6px 0 10px' }}>캡슐 수, 1일 섭취 원가, 유통기한 임박 표시</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#854d0e', lineHeight: 1.7 }}>
                <div>• <strong>product_id</strong> (기본키 / 외래키 ➔ product)</div>
                <div>• <strong>capsule_count</strong> (정수형) - 총 용량/캡슐 수 (60캡슐 등)</div>
                <div>• <strong>daily_price_amount</strong> (금액) - 1일 섭취 원가 수치 (450원)</div>
                <div>• <strong>is_expiring_soon</strong> (논리형) - 소비기한 임박 여부 (예/아니오)</div>
                <div>• <strong>expiry_note</strong> (문자형) - 유통기한 표기 (27.05.01까지 등)</div>
                <div>• <strong>functional_claim</strong> (긴 텍스트) - 식약처 인증 기능성 내용</div>
              </div>
            </div>

            <div className="term-entry" style={{ background: '#eff6ff', borderColor: '#93c5fd' }}>
              <strong style={{ color: '#1e40af', fontSize: '14px' }}>🛋️ livart_furniture_ext (현대리바트 가구 규격 &amp; CS 규정 확장)</strong>
              <p style={{ fontSize: '11px', color: '#1d4ed8', margin: '6px 0 10px' }}>가구 규격, 사다리차 본사지원/과금, 수동운반 및 추가작업비</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#1e40af', lineHeight: 1.7 }}>
                <div>• <strong>product_id</strong> (기본키 / 외래키 ➔ product)</div>
                <div>• <strong>width_mm</strong> (정수형) - 가로 크기 (mm 단위, 예: 3310mm)</div>
                <div>• <strong>capacity_person</strong> (정수형) - 사용 인원 (4인용, 3인용 등)</div>
                <div>• <strong>material_type</strong> (문자형) - 주요 소재 (패브릭 / 가죽 / 원목)</div>
                <div>• <strong>ladder_car_policy</strong> (긴 텍스트) - 사다리차 본사지원/과금 규정 (300만 이상 100% 지원 등)</div>
                <div>• <strong>manual_transport_policy</strong> (긴 텍스트) - 수동 계단운반 규정 (2~5층 가능, 6층 이상 불가)</div>
                <div>• <strong>on_site_extra_fee</strong> (긴 텍스트) - 현장 추가 작업비 (옷장 3.5만~8만, 소파 1.6만~2.7만)</div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 2: EXTERNAL AFFILIATE DB STRUCTURE (3 외부 DB) */}
      {activeTab === 'external' && (
        <div>
          <div className="callout" style={{ marginBottom: '24px', background: '#f8fafc', borderColor: '#cbd5e1' }}>
            <strong style={{ fontSize: '16px', color: '#334155' }}>📡 3개 외부 계열사 자체 DB 스키마 구조 (External Affiliate DBs)</strong>
            <p style={{ marginTop: '6px', color: '#64748b', fontSize: '13px', lineHeight: 1.6 }}>
              현대그린푸드, 현대웰니스, 현대리바트는 각자 독립된 개별 DB 및 E-Commerce 시스템을 운영 중입니다.<br />
              InventoryOS는 각 외부 DB의 원천 스키마 항목을 주기적으로 동기화(Batch &amp; API)하여 통합 DB로 정규화합니다.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '24px' }}>

            {/* External DB 1: Greenfood */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#86efac' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#166534', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🥗 1. 현대그린푸드 외부 DB 구조 (External Greenfood DB)</span>
                  <span className="pill" style={{ background: '#dcfce7', color: '#15803d' }}>20개 수집 항목</span>
                </h3>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>식재료 / 케어식단 / 신선식품 원장 DB</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#166534', display: 'block', marginBottom: '6px' }}>gf_item_master (상품 마스터 테이블)</strong>
                  <div>• <strong>item_id</strong> (기본키) - 상품 고유 ID</div>
                  <div>• <strong>item_name</strong> - 상품명</div>
                  <div>• <strong>brand_name</strong> - 브랜드 이름</div>
                  <div>• <strong>main_cate_name</strong> - 대분류 카테고리명</div>
                  <div>• <strong>sub_cate_name</strong> - 소분류 카테고리명</div>
                  <div>• <strong>ctgry_path</strong> - 카테고리 전체 경로</div>
                  <div>• <strong>item_desc</strong> - 상품 상세 설명</div>
                  <div>• <strong>sale_status</strong> - 판매 상태 (판매 중)</div>
                  <div>• <strong>item_badge</strong> - 특성 배지 (냉동 / 고단백)</div>
                </div>
                <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#166534', display: 'block', marginBottom: '6px' }}>gf_item_price (가격 테이블)</strong>
                  <div>• <strong>item_id</strong> (외래키) - 상품 고유 ID</div>
                  <div>• <strong>original_price</strong> - 정가 (원)</div>
                  <div>• <strong>selling_price</strong> - 실 판매가 (원)</div>
                  <div>• <strong>discount_rate</strong> - 할인율 (%)</div>
                </div>
                <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#166534', display: 'block', marginBottom: '6px' }}>gf_meal_detail (식단 특화 테이블)</strong>
                  <div>• <strong>item_id</strong> (외래키) - 상품 고유 ID</div>
                  <div>• <strong>meal_type_code</strong> - 식단 유형 (고혈압 / 당뇨 / 저속)</div>
                  <div>• <strong>package_days</strong> - 식단 구성 일수 (5일 / 7일)</div>
                  <div>• <strong>storage_temp</strong> - 보관 온도 (냉동 / 냉장 / 상온)</div>
                </div>
                <div style={{ background: '#f0fdf4', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#166534', display: 'block', marginBottom: '6px' }}>gf_delivery_policy (배송 규정 테이블)</strong>
                  <div>• <strong>item_id</strong> (외래키) - 상품 고유 ID</div>
                  <div>• <strong>delivery_condition_text</strong> - 배송 조건 안내</div>
                  <div>• <strong>free_shipping_threshold</strong> - 무료 배송 기준 금액</div>
                </div>
              </div>
            </div>

            {/* External DB 2: Wellness */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#fde047' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#854d0e', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>💊 2. 현대웰니스 외부 DB 구조 (External Wellness DB)</span>
                  <span className="pill" style={{ background: '#fef9c3', color: '#a16207' }}>22개 수집 항목</span>
                </h3>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>건강기능식품 / 고도몰 기반 원장 DB</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                <div style={{ background: '#fefce8', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#854d0e', display: 'block', marginBottom: '6px' }}>wl_goods_master (상품 마스터 테이블)</strong>
                  <div>• <strong>goods_no</strong> (기본키) - 상품 고유 번호</div>
                  <div>• <strong>goods_nm</strong> - 상품명</div>
                  <div>• <strong>brand_name</strong> - 브랜드명 (솔가 / 고헬씨 등)</div>
                  <div>• <strong>brand_cate_name</strong> - 브랜드 카테고리명</div>
                  <div>• <strong>cate_path</strong> - 카테고리 전체 경로</div>
                  <div>• <strong>goods_desc</strong> - 상품 설명</div>
                  <div>• <strong>sale_status</strong> - 판매 상태 (판매중)</div>
                  <div>• <strong>goods_badge</strong> - 임박 태그 ("임박 [27.05.01까지]")</div>
                </div>
                <div style={{ background: '#fefce8', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#854d0e', display: 'block', marginBottom: '6px' }}>wl_goods_price (가격 &amp; 1일 단가)</strong>
                  <div>• <strong>goods_no</strong> (외래키) - 상품 고유 번호</div>
                  <div>• <strong>fixed_price</strong> - 정가 (원)</div>
                  <div>• <strong>sale_price</strong> - 실 판매가 (원)</div>
                  <div>• <strong>discount_pct</strong> - 할인율 (%)</div>
                  <div>• <strong>daily_price_text</strong> - 1일 단가 ("하루당 450원")</div>
                </div>
                <div style={{ background: '#fefce8', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#854d0e', display: 'block', marginBottom: '6px' }}>wl_goods_stock (재고 &amp; 소비기한 관리)</strong>
                  <div>• <strong>goods_no</strong> (외래키) - 상품 고유 번호</div>
                  <div>• <strong>stock_qty</strong> - 총 재고 수량</div>
                  <div>• <strong>remaining_qty</strong> - 남은 수량 ("32개")</div>
                  <div>• <strong>is_expiring_soon</strong> - 소비기한 임박 여부 (예/아니오)</div>
                  <div>• <strong>expiration_date_text</strong> - 유통기한 표기 ("27.05.01까지")</div>
                </div>
                <div style={{ background: '#fefce8', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#854d0e', display: 'block', marginBottom: '6px' }}>wl_health_detail (건기식 특화 테이블)</strong>
                  <div>• <strong>goods_no</strong> (외래키) - 상품 고유 번호</div>
                  <div>• <strong>capsule_count</strong> - 총 용량/캡슐 수 ("60캡슐")</div>
                  <div>• <strong>functional_claim_text</strong> - 식약처 인증 기능성 내용</div>
                </div>
              </div>
            </div>

            {/* External DB 3: Livart */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#93c5fd' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>🛋️ 3. 현대리바트 외부 DB 구조 (External Livart DB)</span>
                  <span className="pill" style={{ background: '#dbeafe', color: '#1d4ed8' }}>19개 수집 항목</span>
                </h3>
                <span style={{ fontSize: '11px', color: 'var(--muted)' }}>가구 몰 / CAD / CS 물류공지 원장 DB</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px' }}>
                <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#1e40af', display: 'block', marginBottom: '6px' }}>lb_goods_master (가구 상품 마스터)</strong>
                  <div>• <strong>goods_sn</strong> (기본키) - 가구 상품 코드 (P200199500)</div>
                  <div>• <strong>goods_nm</strong> - 가구 상품명</div>
                  <div>• <strong>brand_name</strong> - 브랜드명 (리바트온라인 등)</div>
                  <div>• <strong>cat_l_name</strong> - 대분류명 (소파 / 침대 등)</div>
                  <div>• <strong>cat_m_name</strong> - 중분류명 (패브릭소파 등)</div>
                  <div>• <strong>thumbnail_url</strong> - 썸네일 이미지 링크</div>
                  <div>• <strong>product_url</strong> - 상품 상세페이지 링크</div>
                </div>
                <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#1e40af', display: 'block', marginBottom: '6px' }}>lb_option_sku (옵션 &amp; 세부 조합 SKU)</strong>
                  <div>• <strong>goods_sn</strong> (외래키) - 가구 상품 코드</div>
                  <div>• <strong>opt_type</strong> - 옵션 종류 (색상 / 타입)</div>
                  <div>• <strong>sub_goods_sn</strong> - 옵션별 세부 조합 SKU 코드</div>
                  <div>• <strong>option_combo_name</strong> - 옵션 조합명 ("서랍형 브라운")</div>
                  <div>• <strong>option_price</strong> - 옵션별 실 판매가 ("1,026,000원")</div>
                </div>
                <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#1e40af', display: 'block', marginBottom: '6px' }}>lb_logistics_policy (배송 &amp; 물류 규정)</strong>
                  <div>• <strong>goods_sn</strong> (외래키) - 가구 상품 코드</div>
                  <div>• <strong>delivery_type</strong> - 배송 방식 ("직접배송 / 자체배송")</div>
                  <div>• <strong>shipping_fee_text</strong> - 기본 배송비 안내 ("무료")</div>
                  <div>• <strong>delivery_period_text</strong> - 배송 소요기간 ("4~5일 소요")</div>
                  <div>• <strong>ladder_car_policy_text</strong> - 사다리차 규정 (공지 B200059617: "300만 이상 100% 지원")</div>
                  <div>• <strong>manual_transport_text</strong> - 계단 수동운반 규정 ("2~5층 가능, 6층 이상 불가")</div>
                </div>
                <div style={{ background: '#eff6ff', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.75, fontFamily: 'monospace' }}>
                  <strong style={{ color: '#1e40af', display: 'block', marginBottom: '6px' }}>lb_cs_return_policy (교환 / 반품 &amp; 현장 작업비)</strong>
                  <div>• <strong>goods_sn</strong> (외래키) - 가구 상품 코드</div>
                  <div>• <strong>return_shipping_fee</strong> - 반품 배송비 ("105,200원 / 38,000원")</div>
                  <div>• <strong>on_site_extra_fee</strong> - 현장 추가 작업비 (공지 B200075110: "옷장/소파 연결비")</div>
                  <div>• <strong>assembly_non_returnable_flag</strong> - 조립 후 반품 불가 조건</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 3: MAPPING TABLE */}
      {activeTab === 'mapping' && (
        <div>
          <div className="callout" style={{ marginBottom: '20px' }}>
            <strong style={{ fontSize: '15px' }}>🔄 3개 외부 DB 항목 ➔ 1개 통합 DB (InventoryOS) 연동 매핑표</strong>
            <p style={{ marginTop: '6px', fontSize: '12px' }}>
              외부 계열사 DB의 61개 수집 필드가 통합 시스템 DB의 9개 공통 마스터 및 3개 특화 확장 테이블로 변환·저장되는 매핑 명세입니다.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--white)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '10px 12px' }}>외부 계열사 DB</th>
                  <th style={{ padding: '10px 12px' }}>외부 DB 테이블/필드명</th>
                  <th style={{ padding: '10px 12px' }}>수집 샘플 데이터</th>
                  <th style={{ padding: '10px 12px' }}>통합 DB 저장 테이블</th>
                  <th style={{ padding: '10px 12px' }}>통합 DB 저장 필드명</th>
                  <th style={{ padding: '10px 12px' }}>권장 데이터 타입</th>
                  <th style={{ padding: '10px 12px' }}>변환 &amp; 매핑 처리 규칙</th>
                </tr>
              </thead>
              <tbody>
                {/* Greenfood mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>현대그린푸드 DB</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>gf_item_master.item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>175695</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product (통합 상품)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>그린푸드 원천 상품 식별자 매핑</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>현대그린푸드 DB</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>gf_meal_detail.meal_type_code</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>고혈압식단 / 당뇨식단</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>greenfood_meal_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>meal_type</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 VARCHAR(50)</td>
                  <td style={{ padding: '8px 12px' }}>그린푸드 케어식단 유형 확장 매핑</td>
                </tr>

                {/* Wellness mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>현대웰니스 DB</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>wl_goods_stock.remaining_qty</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>32개</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory (통합 재고)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>remaining_qty</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>정수형 INT</td>
                  <td style={{ padding: '8px 12px' }}>'32개' ➔ 32 정수 파싱 (재고 소진 위험도 계산)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>현대웰니스 DB</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>wl_goods_stock.expiration_date</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>[27.05.01까지]</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory (통합 재고)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>expiry_date / d_day</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>날짜 DATE / 정수형 INT</td>
                  <td style={{ padding: '8px 12px' }}>소비기한 날짜 파싱 ➔ D-Day 계산 및 하드차단 규칙 연결</td>
                </tr>

                {/* Livart mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>현대리바트 DB</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>lb_logistics_policy.ladder_car</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>300만원 이상 100% 지원</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>livart_furniture_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>ladder_car_policy</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>긴 텍스트 TEXT</td>
                  <td style={{ padding: '8px 12px' }}>공지 B200059617 사다리차 본사지원/과금 기준 연결</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>현대리바트 DB</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>lb_cs_return_policy.return_fee</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>105,200원 (통당 부과)</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>delivery_info (통합 배송)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>return_fee_text</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 VARCHAR(150)</td>
                  <td style={{ padding: '8px 12px' }}>교환/반품 배송비 및 조립 후 반품 불가 조건 매핑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: RAW CRAWLING DATA SAMPLES */}
      {activeTab === 'data' && (
        <div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <button
                className={`filter-button ${selectedAffiliate === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedAffiliate('all')}
              >
                전체 계열사 (2,690건)
              </button>
              <button
                className={`filter-button ${selectedAffiliate === 'greenfood' ? 'active' : ''}`}
                onClick={() => setSelectedAffiliate('greenfood')}
              >
                🥗 현대그린푸드 (735건)
              </button>
              <button
                className={`filter-button ${selectedAffiliate === 'wellness' ? 'active' : ''}`}
                onClick={() => setSelectedAffiliate('wellness')}
              >
                💊 현대웰니스 (145건)
              </button>
              <button
                className={`filter-button ${selectedAffiliate === 'livart' ? 'active' : ''}`}
                onClick={() => setSelectedAffiliate('livart')}
              >
                🛋️ 현대리바트 (1,810건)
              </button>
            </div>
            <input
              type="text"
              className="search-box"
              placeholder="상품명, 브랜드, 카테고리, 상품ID로 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ maxWidth: '320px', margin: 0 }}
            />
          </div>

          {affiliates
            .filter((a) => selectedAffiliate === 'all' || selectedAffiliate === a.affiliateId)
            .map((aff) => {
              const samples = getFilteredSamples(aff);
              return (
                <div
                  key={aff.affiliateId}
                  className="term-entry"
                  style={{ marginBottom: '28px', background: 'var(--white)' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', borderBottom: '1px solid var(--line)', paddingBottom: '12px' }}>
                    <div>
                      <h2 style={{ fontSize: '20px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>{aff.name}</span>
                        <span className="pill">{aff.totalCount.toLocaleString()}개 수집</span>
                        <span className="source-note" style={{ margin: 0 }}>
                          <span className="source-kind">컬럼</span> {aff.columnCount}개 필드
                        </span>
                      </h2>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: 'var(--muted)', marginBottom: '6px' }}>
                      수집 원본 컬럼 구조 ({aff.columns.length}개):
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {aff.columns.map((col) => (
                        <span
                          key={col}
                          style={{
                            padding: '4px 8px',
                            background: '#f1f5f9',
                            border: '1px solid #e2e8f0',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontFamily: 'ui-monospace, monospace',
                            color: '#334155',
                          }}
                        >
                          {col}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--line)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
                          <th style={{ padding: '10px 12px' }}>상품ID</th>
                          <th style={{ padding: '10px 12px' }}>상품명</th>
                          <th style={{ padding: '10px 12px' }}>브랜드</th>
                          <th style={{ padding: '10px 12px' }}>카테고리 (대 / 소)</th>
                          <th style={{ padding: '10px 12px' }}>정가 / 판매가</th>
                          <th style={{ padding: '10px 12px' }}>상태 / 배지</th>
                          <th style={{ padding: '10px 12px' }}>특수속성 &amp; 규정</th>
                        </tr>
                      </thead>
                      <tbody>
                        {samples.length === 0 ? (
                          <tr>
                            <td colSpan={7} style={{ padding: '20px', textAlign: 'center', color: 'var(--muted)' }}>
                              검색 결과가 없습니다.
                            </td>
                          </tr>
                        ) : (
                          samples.map((s) => (
                            <tr key={s.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                              <td style={{ padding: '10px 12px', fontFamily: 'ui-monospace, monospace', fontWeight: 700, color: 'var(--blue)' }}>
                                {s.id}
                              </td>
                              <td style={{ padding: '10px 12px', fontWeight: 600, maxWidth: '240px' }}>
                                {s.url ? (
                                  <a href={s.url} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                                    {s.name}
                                  </a>
                                ) : (
                                  s.name
                                )}
                              </td>
                              <td style={{ padding: '10px 12px', color: '#475569' }}>{s.brand || '-'}</td>
                              <td style={{ padding: '10px 12px' }}>
                                <span style={{ fontWeight: 600 }}>{s.mainCategory}</span>
                                {s.subCategory && <span style={{ color: 'var(--muted)', fontSize: '11px' }}> &gt; {s.subCategory}</span>}
                              </td>
                              <td style={{ padding: '10px 12px' }}>
                                {s.priceOriginal && <div style={{ textDecoration: s.priceSale ? 'line-through' : 'none', color: 'var(--muted)', fontSize: '11px' }}>{parseInt(s.priceOriginal).toLocaleString()}원</div>}
                                {s.priceSale ? (
                                  <div style={{ fontWeight: 700, color: '#059669' }}>
                                    {parseInt(s.priceSale).toLocaleString()}원
                                    {s.discountPct && <span style={{ color: '#dc2626', marginLeft: '4px', fontSize: '11px' }}>({s.discountPct}%)</span>}
                                  </div>
                                ) : (
                                  <div style={{ color: 'var(--muted)' }}>-</div>
                                )}
                              </td>
                              <td style={{ padding: '10px 12px' }}>
                                {s.status && <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#e0f2fe', color: '#0369a1', fontSize: '10px', marginRight: '4px' }}>{s.status}</span>}
                                {s.badge && <span style={{ padding: '2px 6px', borderRadius: '4px', background: '#fef3c7', color: '#b45309', fontSize: '10px' }}>{s.badge}</span>}
                              </td>
                              <td style={{ padding: '10px 12px', fontSize: '11px', color: 'var(--muted)' }}>
                                {s.extra ? (
                                  Object.entries(s.extra).map(([k, v]) => (
                                    <div key={k}>
                                      <strong>{k}:</strong> {v}
                                    </div>
                                  ))
                                ) : (
                                  '-'
                                )}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {/* TAB 5: DOCS & POLICY INTEGRATION */}
      {activeTab === 'docs' && (
        <div>
          <div className="callout" style={{ marginBottom: '24px' }}>
            <strong style={{ fontSize: '16px' }}>📑 InventoryOS 시스템 설계 문서 (`docs/*.md`) 연결 및 분석</strong>
            <p style={{ marginTop: '6px' }}>
              3개 외부 계열사 DB에서 수집한 2,690개 상품 데이터가 <strong>프로젝트 설계서와 의사결정 정책</strong>에 어떻게 반영되는지 검증한 결과입니다.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>

            <div className="term-entry" style={{ background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: 'var(--blue-dark)' }}>
                1. `decision-policy.md` (손익 &amp; 하드 차단 정책 연계)
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                • <strong>현대웰니스 [소비기한 임박] 배지:</strong> 외부 DB의 `is_expiring_soon` 및 `[27.05.01까지]` 속성은 소비기한 잔여일(D-Day)을 산출하여 D-14 이내 진입 시 <strong>하드 차단(Hard Stop)</strong> 규칙 및 긴급 프로모션/기부 시나리오로 자동 라우팅됩니다.<br />
                • <strong>현대그린푸드 [냉동 보관] 배지:</strong> `is_frozen` 항목은 일반 상온 보관비 대비 3.2배 높은 보관비용(Holding Cost) 파라미터를 적용하여 회피비용(Avoided Cost) 산출 시 가중치를 부여합니다.<br />
                • <strong>현대리바트 가구 [물류/설치/반품비]:</strong> 사다리차 본사지원 조건(300만 이상 100%), 6층 이상 직접운반 불가, 반품비(105,200원 / 38,000원) 및 조립 후 반품 불가 조건은 기여현금이익(Contribution Cash Margin) 산출 시 필수 차감 항목입니다.
              </p>
            </div>

            <div className="term-entry" style={{ background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: 'var(--blue-dark)' }}>
                2. `ai-model-data-blueprint.md` (AI 수요예측 및 위험엔진 연계)
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                • <strong>위험재고 탐지 (AI-03):</strong> 외부 DB의 `remaining_qty` (웰니스 남은수량) 및 카테고리별 평균 판매속도(ROS)를 결합하여 소진 예상일(WOS: Weeks of Supply)을 계산합니다.<br />
                • <strong>트렌드 신호 감지 (AI-01):</strong> 외부 Google Trends 및 SNS 언급 지수를 계열사별 카테고리(예: &apos;고혈압식단&apos;, &apos;초록입홍합&apos;, &apos;패브릭소파&apos;)와 매핑하여 트렌드 부스트 피처로 입력합니다.<br />
                • <strong>결정론적 손익 시뮬레이터 (AI-04):</strong> 정가와 판매가의 할인율(`discount_pct`)을 수식 엔진의 기본 시나리오로 세팅하고, 보수-기본-낙관 3단계 시뮬레이션을 생성합니다.
              </p>
            </div>

            <div className="term-entry" style={{ background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: 'var(--blue-dark)' }}>
                3. `architecture-and-tech-stack.md` (DB &amp; 인프라 연계)
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                • <strong>Oracle RDBMS + Flyway:</strong> 매핑표에 정의된 9개 공통 마스터 + 3개 확장 테이블을 버전 관리하여 배치 동기화 시 멱등성을 보장합니다.<br />
                • <strong>Redis 캐싱 레이어:</strong> 2,690개 상품의 위험도 계산 결과 및 일일 판매속도를 Redis Hash로 캐싱하여 프론트엔드 대시보드 조회의 응답속도를 50ms 이내로 보장합니다.<br />
                • <strong>Spring Batch 동기화 원장:</strong> `sync_log` 테이블을 통해 일일 3개 외부 DB 연동 성공률, 미수집 항목, 가격 변동 트래킹을 자동 수행합니다.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
