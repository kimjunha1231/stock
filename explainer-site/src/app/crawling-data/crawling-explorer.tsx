'use client';

import { useState } from 'react';
import { greenfoodData, wellnessData, livartData, AffiliateCrawlSummary } from '@/lib/crawling-data';

export function CrawlingExplorer() {
  const [activeTab, setActiveTab] = useState<'data' | 'erd' | 'mapping' | 'docs'>('erd');
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
      {/* Top Navigation Tabs */}
      <div className="filter-row" style={{ marginBottom: '24px', justifyContent: 'center' }}>
        <button
          className={`filter-button ${activeTab === 'erd' ? 'active' : ''}`}
          onClick={() => setActiveTab('erd')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          📐 추천 데이터베이스 구조 (ERD 설계)
        </button>
        <button
          className={`filter-button ${activeTab === 'mapping' ? 'active' : ''}`}
          onClick={() => setActiveTab('mapping')}
          style={{ padding: '10px 20px', fontSize: '13px', fontWeight: 700 }}
        >
          🔄 수집 데이터 ➔ DB 항목 대응표 (매핑)
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
          📑 재고 관리 정책 &amp; 규칙 연계
        </button>
      </div>

      {/* TAB 1: ERD RECOMMENDATION (Default Focus) */}
      {activeTab === 'erd' && (
        <div>
          <div className="callout" style={{ marginBottom: '28px', background: '#eff6ff', borderColor: '#bfdbfe' }}>
            <strong style={{ fontSize: '16px', color: '#1e40af' }}>💡 InventoryOS 통합 데이터베이스 설계 방향</strong>
            <p style={{ marginTop: '8px', color: '#334155', lineHeight: 1.65 }}>
              현대백화점그룹 3개 계열사(현대그린푸드·현대웰니스·현대리바트)의 서로 다른 상품 및 재고 정보를 하나의 시스템에서 효율적으로 다루기 위한 
              <strong>단일 스키마 다중 테넌트 구조 (Single Schema Multi-Tenant)</strong>입니다.<br />
              모든 계열사가 함께 쓰는 <strong>공통 핵심 테이블 6개</strong>를 중심으로 구성하고, 각 계열사만의 고유 정보(식단 패키지, 건강기능식품 섭취법/1일가격, 가구 크기/설치비)는 
              <strong>계열사 전용 확장 테이블 (Extension Table)</strong>로 연결해 확장성과 유지보수성을 극대화했습니다.
            </p>
          </div>

          <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🏢 공통 핵심 테이블 (Core Tables)</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400 }}>- 3개 계열사가 공통으로 사용하는 기본 데이터 구조</span>
          </h3>

          {/* Core Tables Visual Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px', marginBottom: '36px' }}>

            {/* Table 1: affiliate */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>1. 계열사 정보 (affiliate)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키(PK): 계열사 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>현대웰니스, 현대리바트, 현대그린푸드 각 계열사의 기본 정보</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>affiliate_id</strong> (문자형, 기본키) - 계열사 식별 ID</div>
                <div>• <strong>name</strong> (문자형) - 계열사명 (현대그린푸드 등)</div>
                <div>• <strong>code</strong> (문자형) - 식별 코드 (GREENFOOD / WELLNESS / LIVART)</div>
                <div>• <strong>domain</strong> (문자형) - 공식 쇼핑몰 웹주소</div>
                <div>• <strong>created_at</strong> (일시) - 등록 일시</div>
              </div>
            </div>

            {/* Table 2: brand */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>2. 브랜드 정보 (brand)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 브랜드 ID | 외래키: 계열사 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>솔가, 고헬씨, 리바트키즈, 그리팅 등 상품 브랜드 마스터</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>brand_id</strong> (정수형, 기본키) - 브랜드 식별 ID</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 소속 계열사 ID</div>
                <div>• <strong>brand_name</strong> (문자형) - 브랜드 이름 (리바트 등)</div>
                <div>• <strong>brand_category</strong> (문자형) - 브랜드 분류</div>
              </div>
            </div>

            {/* Table 3: category */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>3. 카테고리 (category)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 카테고리 ID | 외래키: 상위 카테고리 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>대분류 - 중분류 - 소분류 계층형 카테고리 구조</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>category_id</strong> (정수형, 기본키) - 카테고리 식별 ID</div>
                <div>• <strong>parent_id</strong> (정수형, 외래키) - 상위 카테고리 ID</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 계열사 ID</div>
                <div>• <strong>name</strong> (문자형) - 카테고리명 (소파, 식재료 등)</div>
                <div>• <strong>category_depth</strong> (정수형) - 카테고리 단계 (1:대, 2:중, 3:소)</div>
                <div>• <strong>full_path</strong> (문자형) - 전체 경로 (건강마켓 &gt; 간편식단)</div>
              </div>
            </div>

            {/* Table 4: product Master */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#2563eb', borderWidth: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#2563eb', color: '#ffffff', fontSize: '11px' }}>4. 통합 상품 마스터 (product) ★</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>3개 계열사의 모든 상품이 통합 저장되는 메인 테이블</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#2563eb' }}>product_id</strong> (정수형, 기본키) - 시스템 통합 상품 ID</div>
                <div>• <strong>affiliate_id</strong> (문자형, 외래키) - 소속 계열사 ID</div>
                <div>• <strong>external_item_id</strong> (문자형) - 원출처 상품코드 (itemId / goodsNo / goodsSn)</div>
                <div>• <strong>brand_id</strong> (정수형, 외래키) - 브랜드 ID</div>
                <div>• <strong>category_id</strong> (정수형, 외래키) - 카테고리 ID</div>
                <div>• <strong>product_name</strong> (문자형) - 상품 이름</div>
                <div>• <strong>description</strong> (긴 텍스트) - 상품 설명 / 특징</div>
                <div>• <strong>status</strong> (문자형) - 판매 상태 (판매 중 / 일시 품절 등)</div>
                <div>• <strong>badge</strong> (문자형) - 상품 배지 (소비기한 임박 / 냉동 / 클리어런스)</div>
                <div>• <strong>product_url</strong> (문자형) - 상품 상세페이지 링크</div>
                <div>• <strong>image_url</strong> (문자형) - 대표 이미지 링크</div>
                <div>• <strong>created_at</strong> (일시) - 데이터 수집/생성 일시</div>
              </div>
            </div>

            {/* Table 5: pricing */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#cbd5e1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#dbeafe', color: '#1e40af', fontSize: '11px' }}>5. 가격 및 할인 정보 (pricing)</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 가격 ID | 외래키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>정가, 판매가, 할인율 및 1일 단위 섭취 가격 변동 관리</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#1e40af' }}>pricing_id</strong> (정수형, 기본키) - 가격 기록 ID</div>
                <div>• <strong>product_id</strong> (정수형, 외래키) - 상품 ID</div>
                <div>• <strong>original_price</strong> (금액/숫자형) - 정가 (원)</div>
                <div>• <strong>selling_price</strong> (금액/숫자형) - 실판매가 (원)</div>
                <div>• <strong>discount_pct</strong> (숫자형) - 할인율 (%)</div>
                <div>• <strong>daily_price_text</strong> (문자형) - 1일 가격 (예: 하루당 450원)</div>
                <div>• <strong>is_active</strong> (논리형) - 현재 적용 중인 가격 여부</div>
                <div>• <strong>updated_at</strong> (일시) - 가격 변경 일시</div>
              </div>
            </div>

            {/* Table 6: inventory */}
            <div className="term-entry" style={{ background: '#ffffff', borderColor: '#10b981', borderWidth: '2px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <span className="pill" style={{ background: '#10b981', color: '#ffffff', fontSize: '11px' }}>6. 재고 및 소비기한 (inventory) ★</span>
                <span style={{ fontSize: '11px', color: 'var(--muted)', fontFamily: 'monospace' }}>기본키: 재고 ID | 외래키: 상품 ID</span>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '12px' }}>재고 수량, 소비기한, 보관조건 및 위험재고 등급 관리</p>
              <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '11px', lineHeight: 1.7, fontFamily: 'monospace' }}>
                <div>• <strong style={{ color: '#10b981' }}>inventory_id</strong> (정수형, 기본키) - 재고 기록 ID</div>
                <div>• <strong>product_id</strong> (정수형, 외래키) - 상품 ID</div>
                <div>• <strong>stock_qty</strong> (정수형) - 현재 총 재고 수량</div>
                <div>• <strong>remaining_qty</strong> (정수형) - 한정 수량 / 남은 수량 (웰니스)</div>
                <div>• <strong>storage_condition</strong> (문자형) - 보관 조건 (냉동 / 냉장 / 상온)</div>
                <div>• <strong>expiry_date</strong> (날짜) - 소비기한 / 유통기한 날짜</div>
                <div>• <strong>d_day</strong> (정수형) - 소비기한 잔여 일수 (D-Day)</div>
                <div>• <strong>risk_grade</strong> (문자형) - 위험 등급 (정상 / 주의 / 위험)</div>
                <div>• <strong>updated_at</strong> (일시) - 재고 갱신 일시</div>
              </div>
            </div>

          </div>

          {/* Extension Tables for Affiliates */}
          <h3 style={{ fontSize: '18px', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🧬 계열사별 전용 확장 테이블 (Extension Tables)</span>
            <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 400 }}>- 각 계열사의 특수한 상품 정보를 보완하는 전용 스키마</span>
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            
            <div className="term-entry" style={{ background: '#f0fdf4', borderColor: '#86efac' }}>
              <strong style={{ color: '#166534', fontSize: '14px' }}>🥗 greenfood_meal_plan (현대그린푸드 케어식단 특화)</strong>
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
              <strong style={{ color: '#854d0e', fontSize: '14px' }}>💊 wellness_product_detail (현대웰니스 건강기능식품 특화)</strong>
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
              <strong style={{ color: '#1e40af', fontSize: '14px' }}>🛋️ livart_furniture_spec (현대리바트 가구 규격 특화)</strong>
              <p style={{ fontSize: '11px', color: '#1d4ed8', margin: '6px 0 10px' }}>가구 가로 크기, 소재, 사용 인원수, 전문 설치 필요 여부</p>
              <div style={{ fontSize: '11px', fontFamily: 'monospace', color: '#1e40af', lineHeight: 1.7 }}>
                <div>• <strong>product_id</strong> (기본키 / 외래키 ➔ product)</div>
                <div>• <strong>width_mm</strong> (정수형) - 가로 크기 (mm 단위, 예: 3310mm)</div>
                <div>• <strong>capacity_person</strong> (정수형) - 사용 인원 (4인용, 3인용 등)</div>
                <div>• <strong>material_type</strong> (문자형) - 주요 소재 (패브릭 / 가죽 / 원목)</div>
                <div>• <strong>requires_installation</strong> (논리형) - 전문 기사 설치 필요 여부</div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* TAB 2: COLUMN MAPPING TABLE */}
      {activeTab === 'mapping' && (
        <div>
          <div className="callout" style={{ marginBottom: '20px' }}>
            <strong style={{ fontSize: '15px' }}>🔄 원본 크롤링 항목 ➔ 데이터베이스(DB) 매핑 상세표</strong>
            <p style={{ marginTop: '6px', fontSize: '12px' }}>
              수집된 51개 원본 컬럼이 9개 정규화 DB 테이블 및 3개 특화 확장 테이블로 변환되는 표준 매핑 명세입니다.
            </p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '12px', border: '1px solid var(--line)', background: 'var(--white)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid var(--line)' }}>
                  <th style={{ padding: '10px 12px' }}>출처 계열사</th>
                  <th style={{ padding: '10px 12px' }}>원본 컬럼명</th>
                  <th style={{ padding: '10px 12px' }}>수집 샘플 값</th>
                  <th style={{ padding: '10px 12px' }}>저장 대상 DB 테이블</th>
                  <th style={{ padding: '10px 12px' }}>저장 대상 DB 필드명</th>
                  <th style={{ padding: '10px 12px' }}>권장 데이터 타입</th>
                  <th style={{ padding: '10px 12px' }}>설명 &amp; 변환 처리 규칙</th>
                </tr>
              </thead>
              <tbody>
                {/* Greenfood mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>현대그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_ID</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>175695</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product (통합 상품)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>그린푸드 공식 몰 고유 상품 번호 (itemId)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>현대그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>대분류 / 소분류</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>간편식단 / 고혈압식단</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>category (카테고리)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>category_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>정수형 BIGINT (외래키)</td>
                  <td style={{ padding: '8px 12px' }}>계층형 카테고리 트리에 자동 매핑 생성</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>현대그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>정가_원 / 판매가_원</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>10,500원</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>pricing (가격 정보)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>original_price / selling_price</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>금액형 DECIMAL(12,2)</td>
                  <td style={{ padding: '8px 12px' }}>숫자 변환 및 할인율 자동 산출 파이프라인</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#16a34a' }}>현대그린푸드</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_배지</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>냉동 | 고단백</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory / greenfood_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>storage_condition / is_frozen</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 / 불리언(논리형)</td>
                  <td style={{ padding: '8px 12px' }}>냉동 보관 조건 파싱 (상온 대비 보관비 가중치 부여)</td>
                </tr>

                {/* Wellness mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>현대웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_ID</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>1000000904</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product (통합 상품)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>고도몰 원천 상품 번호 (goodsNo)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>현대웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>남은수량</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>32개</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory (재고)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>remaining_qty</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>정수형 INT</td>
                  <td style={{ padding: '8px 12px' }}>'32개' ➔ 32 정수 파싱 (재고 위험도 계산 입력)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>현대웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>1일_가격</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>하루당 450원</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>wellness_ext (웰니스 특화)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>daily_price_amount</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>금액형 DECIMAL(10,2)</td>
                  <td style={{ padding: '8px 12px' }}>1일 섭취 단가 수치 파싱 (고객 마케팅 시뮬레이션용)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#d97706' }}>현대웰니스</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품_배지 (임박)</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>임박 [27.05.01까지]</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>inventory / wellness_ext</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>expiry_date / is_expiring_soon</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>날짜 DATE / 불리언(논리형)</td>
                  <td style={{ padding: '8px 12px' }}>소비기한 날짜(2027-05-01) 파싱 ➔ D-Day 계산 및 차단 정책 연동</td>
                </tr>

                {/* Livart mappings */}
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>현대리바트</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>goodsSn</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>P200165385</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>product (통합 상품)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>external_item_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>문자형 VARCHAR(64)</td>
                  <td style={{ padding: '8px 12px' }}>리바트몰 공식 goodsSn 코드</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>현대리바트</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>상품명 규격 파싱</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>w3310 패브릭 소파(4인용)</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>livart_ext (리바트 특화)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>width_mm / material / capacity</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>정수형 / 문자형 / 정수형</td>
                  <td style={{ padding: '8px 12px' }}>상품명에서 가로 크기(3310mm), 소재(패브릭), 인용수(4인용) 추출 정규화</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 700, color: '#2563eb' }}>현대리바트</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace' }}>대분류 / 중분류</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>소파 / 패브릭소파</td>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>category (카테고리)</td>
                  <td style={{ padding: '8px 12px', fontFamily: 'monospace', color: 'var(--blue)' }}>category_id</td>
                  <td style={{ padding: '8px 12px', color: 'var(--muted)' }}>정수형 BIGINT (외래키)</td>
                  <td style={{ padding: '8px 12px' }}>리바트 가구 카테고리 계층 매핑</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 3: RAW CRAWLING DATA SAMPLES */}
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
                • <strong>현대웰니스 [소비기한 임박] 배지:</strong> 크롤링 데이터의 `상품_배지: 임박` 및 `[27.05.01까지]` 속성은 소비기한 잔여일(D-Day)을 산출하여 D-14 이내 진입 시 <strong>하드 차단(Hard Stop)</strong> 규칙 및 긴급 프로모션/기부 시나리오로 자동 라우팅됩니다.<br />
                • <strong>현대그린푸드 [냉동 보관] 배지:</strong> `상품_배지: 냉동` 항목은 일반 상온 보관비 대비 3.2배 높은 보관비용(Holding Cost) 파라미터를 적용하여 회피비용(Avoided Cost) 산출 시 가중치를 부여합니다.<br />
                • <strong>현대리바트 가구 [설치/배송]:</strong> 가구 특성상 단순 할인이 아닌 배송·설치비 및 반품 리스크 비용이 크므로 기여현금이익(Contribution Cash Margin) 계산 시 배송비용 모델을 결합합니다.
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
                • <strong>Redis 캐싱 레이어:</strong> 2,690개 상품의 위험도 계산 결과 및 일일 판매속도를 Redis Hash로 캐싱하여 프론트엔드 대시보드 조회의 응답속도를 50ms 이내로 보장합니다.<br />
                • <strong>Spring Batch 수집 이력:</strong> `crawl_log` 테이블을 통해 일일 수집 성공률, 미수집 항목, 가격 변동 트래킹을 자동 수행합니다.
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
