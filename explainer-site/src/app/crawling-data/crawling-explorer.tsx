'use client';

import { useState } from 'react';
import { greenfoodData, wellnessData, livartData, AffiliateCrawlSummary } from '@/lib/crawling-data';

export function CrawlingExplorer() {
  const [activeTab, setActiveTab] = useState<'data' | 'erd' | 'mapping' | 'docs'>('data');
  const [selectedAffiliate, setSelectedAffiliate] = useState<'all' | 'greenfood' | 'wellness' | 'livart'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const affiliates: AffiliateCrawlSummary[] = [greenfoodData, wellnessData, livartData];

  // Filtered samples
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
      {/* Top Tabs */}
      <div className="filter-row" style={{ marginBottom: '24px', justifyContent: 'center' }}>
        <button
          className={`filter-button ${activeTab === 'data' ? 'active' : ''}`}
          onClick={() => setActiveTab('data')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📊 3개 계열사 크롤링 원본 데이터 (2,690건)
        </button>
        <button
          className={`filter-button ${activeTab === 'erd' ? 'active' : ''}`}
          onClick={() => setActiveTab('erd')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📐 InventoryOS 추천 ERD 설계
        </button>
        <button
          className={`filter-button ${activeTab === 'mapping' ? 'active' : ''}`}
          onClick={() => setActiveTab('mapping')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          🔄 크롤링 컬럼 ➔ DB 엔티티 매핑표
        </button>
        <button
          className={`filter-button ${activeTab === 'docs' ? 'active' : ''}`}
          onClick={() => setActiveTab('docs')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📑 시스템 명세 &amp; 정책 문서 연계
        </button>
      </div>

      {/* TAB 1: CRAWLING RAW DATA */}
      {activeTab === 'data' && (
        <div>
          {/* Sub-filters */}
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

          {/* Affiliates Grid / Tables */}
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

                  {/* Schema Columns Badges */}
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

                  {/* Sample Table */}
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
                          <th style={{ padding: '10px 12px' }}>특수속성</th>
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

      {/* TAB 2: ERD RECOMMENDATION */}
      {activeTab === 'erd' && (
        <div>
          <div className="callout" style={{ marginBottom: '28px' }}>
            <strong style={{ fontSize: '16px' }}>💡 InventoryOS 통합 데이터베이스 ERD 설계 방향</strong>
            <p style={{ marginTop: '8px' }}>
              현대백화점그룹 3개 계열사(그린푸드·웰니스·리바트)의 이종 상품 및 재고 데이터를 유연하게 통합 관리하기 위한 <strong>Single Schema Multi-Tenant Architecture</strong>입니다.
              공통 도메인(계열사, 브랜드, 카테고리, 통합상품, 가격, 재고, 배송, 수집로그)을 코어로 분리하고, 계열사별 고유 특성(식단패키지, 건기식 주의사항/1일가격, 가구 규격/설치비)은 <strong>Extension 테이블</strong>로 확장합니다.
            </p>
          </div>

          {/* Core Tables Visual Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '32px' }}>

            {/* Table 1: affiliate */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af' }}>1. 계열사 (affiliate)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>PK: affiliate_id</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>현대웰니스, 현대리바트, 현대그린푸드 계열사 테넌트 정의</p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>• affiliate_id (VARCHAR, PK)</div>
                <div>• name (VARCHAR) - 현대그린푸드 등</div>
                <div>• code (VARCHAR) - GREENFOOD / WELLNESS / LIVART</div>
                <div>• domain (VARCHAR)</div>
                <div>• created_at (TIMESTAMP)</div>
              </div>
            </div>

            {/* Table 2: brand */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af' }}>2. 브랜드 (brand)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>PK: brand_id | FK: affiliate_id</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>솔가, 고헬씨, 리바트키즈, 그리팅 등 브랜드 마스터</p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>• brand_id (BIGINT, PK)</div>
                <div>• affiliate_id (VARCHAR, FK)</div>
                <div>• brand_name (VARCHAR)</div>
                <div>• brand_category (VARCHAR)</div>
              </div>
            </div>

            {/* Table 3: category */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af' }}>3. 카테고리 (category)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>PK: category_id | Self-FK: parent_id</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>대분류-중분류-소분류 계층형 카테고리 트리</p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>• category_id (BIGINT, PK)</div>
                <div>• parent_id (BIGINT, FK NULLABLE)</div>
                <div>• affiliate_id (VARCHAR, FK)</div>
                <div>• name (VARCHAR) - 소파, 식재료 등</div>
                <div>• category_depth (INT) - 1, 2, 3</div>
                <div>• full_path (VARCHAR)</div>
              </div>
            </div>

            {/* Table 4: product Master */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#2563eb', borderWidth: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#2563eb', color: '#ffffff' }}>4. 통합 상품 (product) ★</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>PK: product_id</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>3개 계열사 공통 상품 마스터 테이블</p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>• product_id (BIGINT, PK)</div>
                <div>• affiliate_id (VARCHAR, FK)</div>
                <div>• external_item_id (VARCHAR) - itemId / goodsNo / goodsSn</div>
                <div>• brand_id (BIGINT, FK)</div>
                <div>• category_id (BIGINT, FK)</div>
                <div>• product_name (VARCHAR)</div>
                <div>• description (TEXT)</div>
                <div>• status (VARCHAR) - 판매중/일시품절</div>
                <div>• badge (VARCHAR) - 임박/냉동/클리어런스</div>
                <div>• product_url (VARCHAR)</div>
                <div>• image_url (VARCHAR)</div>
                <div>• created_at (TIMESTAMP)</div>
              </div>
            </div>

            {/* Table 5: pricing */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af' }}>5. 가격 및 할인 (pricing)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>PK: pricing_id | FK: product_id</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>정가, 판매가, 1일가격, 할인율 변동 이력</p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>• pricing_id (BIGINT, PK)</div>
                <div>• product_id (BIGINT, FK)</div>
                <div>• original_price (DECIMAL) - 정가(원)</div>
                <div>• selling_price (DECIMAL) - 판매가(원)</div>
                <div>• discount_pct (DECIMAL) - 할인율(%)</div>
                <div>• daily_price_text (VARCHAR) - 하루당 N원(웰니스)</div>
                <div>• is_active (BOOLEAN)</div>
                <div>• updated_at (TIMESTAMP)</div>
              </div>
            </div>

            {/* Table 6: inventory */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#10b981', borderWidth: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#10b981', color: '#ffffff' }}>6. 재고 &amp; 기한 (inventory) ★</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>PK: inventory_id | FK: product_id</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>수량, 남은수량, 소비기한, 보관조건</p>
              <div style={{ background: '#f8fafc', padding: '10px', borderRadius: '8px', fontSize: '11px', fontFamily: 'monospace' }}>
                <div>• inventory_id (BIGINT, PK)</div>
                <div>• product_id (BIGINT, FK)</div>
                <div>• stock_qty (INT) - 현재 재고 수량</div>
                <div>• remaining_qty (INT) - 남은 수량(웰니스)</div>
                <div>• storage_condition (VARCHAR) - 냉동/냉장/상온</div>
                <div>• expiry_date (DATE) - 소비기한/유통기한</div>
                <div>• d_day (INT) - 남은 기한 일수</div>
                <div>• risk_grade (VARCHAR) - NORMAL / WARNING / DANGER</div>
                <div>• updated_at (TIMESTAMP)</div>
              </div>
            </div>

          </div>

          {/* Extension Tables for Affiliates */}
          <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>🧬 계열사 특화 확장 엔티티 (Affiliate Extension Tables)</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            
            <div className="term-entry" style={{ background: '#f0fdf4', borderColor: '#86efac' }}>
              <strong style={{ color: '#166534', fontSize: '14px' }}>🥗 greenfood_meal_plan (그린푸드 식단 특화)</strong>
              <p style={{ fontSize: '11px', color: '#15803d', margin: '6px 0 10px' }}>식단 패키지, 영양성분, 저당/고혈압/당뇨 식단구분</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#166534' }}>
                <div>• product_id (PK, FK → product)</div>
                <div>• meal_type (VARCHAR) - 고혈압식단/당뇨식단 등</div>
                <div>• package_days (INT) - 5일/7일 패키지</div>
                <div>• is_frozen (BOOLEAN) - 냉동 여부</div>
                <div>• nutrition_summary (VARCHAR)</div>
              </div>
            </div>

            <div className="term-entry" style={{ background: '#fefce8', borderColor: '#fde047' }}>
              <strong style={{ color: '#854d0e', fontSize: '14px' }}>💊 wellness_product_detail (웰니스 건기식 특화)</strong>
              <p style={{ fontSize: '11px', color: '#a16207', margin: '6px 0 10px' }}>1일 섭취량, 캡슐수, 소비기한 임박 태그, 유통기한</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#854d0e' }}>
                <div>• product_id (PK, FK → product)</div>
                <div>• capsule_count (INT) - 60캡슐 등</div>
                <div>• daily_price_amount (DECIMAL) - 하루당 원가</div>
                <div>• is_expiring_soon (BOOLEAN) - 임박 여부</div>
                <div>• expiry_note (VARCHAR) - 27.05.01까지 등</div>
                <div>• functional_claim (TEXT) - 면역기능 등</div>
              </div>
            </div>

            <div className="term-entry" style={{ background: '#eff6ff', borderColor: '#93c5fd' }}>
              <strong style={{ color: '#1e40af', fontSize: '14px' }}>🛋️ livart_furniture_spec (리바트 가구 특화)</strong>
              <p style={{ fontSize: '11px', color: '#1d4ed8', margin: '6px 0 10px' }}>시트 규격(w3310 등), 소재(패브릭/가죽), 인용수, 설치조건</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#1e40af' }}>
                <div>• product_id (PK, FK → product)</div>
                <div>• width_mm (INT) - 3310mm 등</div>
                <div>• capacity_person (INT) - 4인용, 3인용 등</div>
                <div>• material_type (VARCHAR) - 패브릭/가죽/원목</div>
                <div>• requires_installation (BOOLEAN) - 설치가구 여부</div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 3: COLUMN MAPPING TABLE */}
      {activeTab === 'mapping' && (
        <div>
          <div className="callout" style={{ marginBottom: '20px' }}>
            <strong style={{ fontSize: '15px' }}>🔄 원본 크롤링 CSV 컬럼 ➔ InventoryOS DB 매핑 상세표</strong>
            <p style={{ marginTop: '6px', fontSize: '12px' }}>
              수집된 51개 컬럼을 9개 정규화 DB 테이블 및 3개 특화 Extension 테이블로 매핑하는 표준 정의서입니다.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--white)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '10px 12px' }}>출처 계열사</th>
                  <th style={{ padding: '10px 12px' }}>원본 컬럼명</th>
                  <th style={{ padding: '10px 12px' }}>샘플 값</th>
                  <th style={{ padding: '10px 12px' }}>대상 DB 테이블</th>
                  <th style={{ padding: '10px 12px' }}>대상 DB 필드명</th>
                  <th style={{ padding: '10px 12px' }}>권장 데이터 타입</th>
                  <th style={{ padding: '10px 12px' }}>설명 &amp; 처리 규칙</th>
                </tr>
              </thead>
              <tbody>
                {/* Greenfood mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_ID</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>175695</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>그린푸드 원천 상품 식별자 (itemId)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>대분류 / 소분류</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>간편식단 / 고혈압식단</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>category</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>category_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>BIGINT (FK)</td>
                  <td style={{ padding: '8px 12px' }}>계층 구조 카테고리로 정규화 생성</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>정가_원 / 판매가_원</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>10,500원</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>pricing</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>original_price / selling_price</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>DECIMAL(12,2)</td>
                  <td style={{ padding: '8px 12px' }}>숫자 변환 및 할인율 계산 저장</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_배지</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>냉동|고단백</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory / greenfood_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>storage_condition / is_frozen</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>VARCHAR / BOOLEAN</td>
                  <td style={{ padding: '8px 12px' }}>보관 조건(냉동)과 영양 배지 파싱</td>
                </tr>

                {/* Wellness mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_ID</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>1000000904</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>고도몰 원천 goodsNo ID</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>남은수량</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>32개</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>remaining_qty</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>INT</td>
                  <td style={{ padding: '8px 12px' }}>'32개' ➔ 32 정수 추출 저장 (위험재고 판단)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>1일_가격</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>하루당 450원</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>wellness_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>daily_price_amount</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>DECIMAL(10,2)</td>
                  <td style={{ padding: '8px 12px' }}>1일 단위 소모 비용 수치화</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_배지 (임박)</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>임박 [27.05.01까지]</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory / wellness_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>expiry_date / is_expiring_soon</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>DATE / BOOLEAN</td>
                  <td style={{ padding: '8px 12px' }}>소비기한 날짜 추출 ➔ D-Day 계산 및 하드차단 정책 연결</td>
                </tr>

                {/* Livart mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>리바트</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>goodsSn</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>P200165385</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>리바트몰 goodsSn 코드</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>리바트</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품명 규격 파싱</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>w3310 패브릭 소파(4인용)</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>livart_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>width_mm / material / capacity</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>INT / VARCHAR / INT</td>
                  <td style={{ padding: '8px 12px' }}>상품명에서 너비(3310mm), 소재(패브릭), 4인용 파싱 정규화</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>리바트</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>대분류 / 중분류</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>소파 / 패브릭소파</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>category</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>category_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>BIGINT (FK)</td>
                  <td style={{ padding: '8px 12px' }}>리바트 가구 카테고리 계층 할당</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 4: DOCS & POLICY INTEGRATION */}
      {activeTab === 'docs' && (
        <div>
          <div className="callout" style={{ marginBottom: '24px' }}>
            <strong style={{ fontSize: '16px' }}>📑 InventoryOS 시스템 설계 문서 (`docs/*.md`) 연결 및 분석</strong>
            <p style={{ marginTop: '6px' }}>
              크롤링으로 수집한 3개 계열사의 2,690개 상품 데이터가 <strong>프로젝트 설계서와 의사결정 정책</strong>에 어떻게 반영되는지 검증한 결과입니다.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>

            <div className="term-entry" style={{ background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: 'var(--blue-dark)' }}>
                1. `decision-policy.md` (손익 &amp; 하드 차단 정책 연계)
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                • <strong>웰니스 [임박] 태그:</strong> 크롤링 데이터의 `상품_배지: 임박` 및 `[27.05.01까지]` 속성은 소비기한 D-Day를 산출하여 D-14 이내 진입 시 <strong>하드 차단(Hard Stop)</strong> 규칙 및 긴급 프로모션/기부 시나리오로 자동 라우팅됩니다.<br />
                • <strong>그린푸드 [냉동] 보관비용:</strong> `상품_배지: 냉동` 항목은 일반 상온 보관비 대비 3.2배 높은 보관비용(Holding Cost) 파라미터를 적용하여 회피비용(Avoided Cost) 산출 시 가중치를 부여합니다.<br />
                • <strong>리바트 가구 [설치/배송]:</strong> 가구 특성상 단순 할인이 아닌 배송·설치비 및 반품 리스크 비용이 크므로 기여현금이익(Contribution Cash Margin) 계산 시 배송비용 모델을 결합합니다.
              </p>
            </div>

            <div className="term-entry" style={{ background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: 'var(--blue-dark)' }}>
                2. `ai-model-data-blueprint.md` (AI 수요예측 및 위험엔진 연계)
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                • <strong>위험재고 탐지 (AI-03):</strong> 크롤링된 `남은수량` (웰니스) 및 카테고리별 평균 판매속도(ROS)를 결합하여 소진 예상일(WOS: Weeks of Supply)을 계산합니다.<br />
                • <strong>트렌드 신호 감지 (AI-01):</strong> 외부 Google Trends 및 SNS 언급 지수를 계열사별 카테고리(예: &apos;고혈압식단&apos;, &apos;초록입홍합&apos;, &apos;패브릭소파&apos;)와 매핑하여 트렌드 부스트 피처로 입력합니다.<br />
                • <strong>결정론적 손익 시뮬레이터 (AI-04):</strong> 정가와 판매가의 할인율(`할인율_pct`)을 수식 엔진의 기본 시나리오로 세팅하고, 보수-기본-낙관 3단계 시뮬레이션을 생성합니다.
              </p>
            </div>

            <div className="term-entry" style={{ background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 10px', color: 'var(--blue-dark)' }}>
                3. `architecture-and-tech-stack.md` (DB &amp; 인프라 연계)
              </h3>
              <p style={{ fontSize: '13px', lineHeight: 1.6, color: 'var(--muted)' }}>
                • <strong>Oracle RDBMS + Flyway:</strong> 매핑표에 정의된 12개 테이블을 버전 관리하여 배치 동기화 시 멱등성을 보장합니다.<br />
                • <strong>Redis Caching Layer:</strong> 2,690개 상품의 위험도 계산 결과 및 일일 판매속도를 Redis Hash로 캐싱하여 프론트엔드 대시보드 조회의 응답속도를 50ms 이내로 보장합니다.<br />
                • <strong>Spring Batch 수집 이력:</strong> `crawl_log` 테이블을 통해 일일 수집 성공률, 미수집 항목, 가격 변동 트래킹을 자동 수행합니다.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
