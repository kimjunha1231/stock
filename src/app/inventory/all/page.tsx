'use client';

import { useState, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_INVENTORY_ITEMS } from '@/lib/mock-data';
import { InventoryItem, RiskStatus } from '@/lib/types';
import { ProductDetailModal } from '@/components/inventory/product-detail-modal';
import { 
  Search, 
  Sparkles, 
  X, 
  Building2, 
  ArrowRight,
  AlertTriangle,
  Package,
  Clock,
  CheckCircle2,
  ShieldAlert,
  Layers,
  Plus,
  TrendingUp,
  PackageCheck
} from 'lucide-react';

function UnifiedInventoryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get('tab') === 'risk' ? 'RISK' : 'ALL') as 'ALL' | 'RISK';

  // 1. 메인 뷰 토글 탭 ('ALL': 전체 재고, 'RISK': 위험(악성) 재고 관제 [우선처리])
  const [viewTab, setViewTab] = useState<'ALL' | 'RISK'>(initialTab);

  // 2. 필터 상태 (층별 드롭다운)
  const [selectedFloor, setSelectedFloor] = useState<string>('전체');
  const [selectedPurchaseType, setSelectedPurchaseType] = useState<string>('전체');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [activeDetailItem, setActiveDetailItem] = useState<InventoryItem | null>(null);

  // 번들 모달 상태 (위험 재고 관제용)
  const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
  const [targetItemForBundle, setTargetItemForBundle] = useState<InventoryItem | null>(null);
  const [bundleList, setBundleList] = useState<InventoryItem[]>([]);
  const [bundleSearchQuery, setBundleSearchQuery] = useState('');
  const [bundleTab, setBundleTab] = useState<'AI' | 'MANUAL'>('AI');
  const [createdBundles, setCreatedBundles] = useState<{ parentId: string; items: InventoryItem[] }[]>([]);

  // 3. 정밀 필터링 로직
  const filteredItems = useMemo(() => {
    return MOCK_INVENTORY_ITEMS.filter((item) => {
      // 뷰 토글 탭 처리
      if (viewTab === 'RISK') {
        const isRisk = ['DEAD_STOCK', 'CRITICAL_NEAR', 'WARNING'].includes(item.status);
        if (!isRisk) return false;
      }

      // 층별 필터 (드롭다운)
      let matchFloor = true;
      if (selectedFloor !== '전체') {
        if (selectedFloor.includes('2F')) matchFloor = item.store.includes('2F');
        else if (selectedFloor.includes('3F')) matchFloor = item.store.includes('3F');
        else if (selectedFloor.includes('B1')) matchFloor = item.store.includes('B1');
        else if (selectedFloor.includes('1F')) matchFloor = item.store.includes('1F');
      }

      // 매입구분 필터
      const matchPurchase = selectedPurchaseType === '전체' || item.purchaseType === selectedPurchaseType;

      // 위험도 필터
      const matchStatus = selectedStatus === '전체' || item.status === selectedStatus;

      // 검색어 필터
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.store.toLowerCase().includes(q);

      return matchFloor && matchPurchase && matchStatus && matchSearch;
    });
  }, [viewTab, selectedFloor, selectedPurchaseType, selectedStatus, searchQuery]);

  // AI 위험 태그별 품목 수 및 금액 계산
  const tagMetrics = useMemo(() => {
    const deadStockItems = filteredItems.filter((i) => i.status === 'DEAD_STOCK');
    const criticalItems = filteredItems.filter((i) => i.status === 'CRITICAL_NEAR');
    const warningItems = filteredItems.filter((i) => i.status === 'WARNING');
    const safeCautionItems = filteredItems.filter((i) => i.status === 'SAFE' || i.status === 'CAUTION');

    const totalSelling = filteredItems.reduce((acc, i) => acc + i.sellingPrice * i.quantity, 0);
    const totalCost = filteredItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);

    const deadStockCost = deadStockItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);
    const criticalCost = criticalItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);

    const selectedItems = MOCK_INVENTORY_ITEMS.filter((i) => selectedItemIds.includes(i.id));
    const selectedCost = selectedItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);
    const selectedDisposalSaved = selectedItems.reduce((acc, i) => acc + i.estimatedDisposalCost * i.quantity, 0);

    return {
      totalSelling,
      totalCost,
      count: filteredItems.length,

      deadStockCount: deadStockItems.length,
      deadStockCost,

      criticalCount: criticalItems.length,
      criticalCost,

      selectedCount: selectedItems.length,
      selectedCost,
      selectedDisposalSaved
    };
  }, [filteredItems, selectedItemIds]);

  const isAllSelected = filteredItems.length > 0 && selectedItemIds.length === filteredItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(filteredItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: string, e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const openBundleModal = (item?: InventoryItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (item) {
      setTargetItemForBundle(item);
      setBundleList([item]);
    } else {
      const firstRiskItem = filteredItems.find((i) => ['DEAD_STOCK', 'CRITICAL_NEAR', 'WARNING'].includes(i.status)) || filteredItems[0];
      setTargetItemForBundle(firstRiskItem || null);
      setBundleList(firstRiskItem ? [firstRiskItem] : []);
    }
    setIsBundleModalOpen(true);
  };

  const addProductToBundle = (product: InventoryItem) => {
    if (!bundleList.some((b) => b.id === product.id)) {
      setBundleList((prev) => [...prev, product]);
    }
  };

  const removeProductFromBundle = (id: string) => {
    setBundleList((prev) => prev.filter((item) => item.id !== id));
  };

  const confirmBundleCreation = () => {
    if (targetItemForBundle && bundleList.length > 1) {
      setCreatedBundles((prev) => [
        ...prev.filter((b) => b.parentId !== targetItemForBundle.id),
        { parentId: targetItemForBundle.id, items: bundleList },
      ]);
      bundleList.forEach((b) => {
        if (!selectedItemIds.includes(b.id)) {
          setSelectedItemIds((prev) => [...prev, b.id]);
        }
      });
    }
    setIsBundleModalOpen(false);
  };

  const manualSearchCandidates = useMemo(() => {
    if (!bundleSearchQuery.trim()) return MOCK_INVENTORY_ITEMS.slice(0, 8);
    return MOCK_INVENTORY_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(bundleSearchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(bundleSearchQuery.toLowerCase()) ||
        item.store.toLowerCase().includes(bundleSearchQuery.toLowerCase())
    );
  }, [bundleSearchQuery]);

  const aiRecommendedCandidates = useMemo(() => {
    if (!targetItemForBundle) return [];
    return MOCK_INVENTORY_ITEMS.filter(
      (item) => item.id !== targetItemForBundle.id && (item.category === targetItemForBundle.category || item.store === targetItemForBundle.store)
    ).slice(0, 4);
  }, [targetItemForBundle]);

  const handleProceedStrategy = (singleItem?: InventoryItem) => {
    const ids = singleItem ? [singleItem.id] : selectedItemIds;
    if (ids.length === 0) return;
    const itemQuery = ids.join(',');
    const bundleQuery = createdBundles.map((b) => b.parentId).join(',');
    router.push(`/strategy/history?created=true&items=${itemQuery}&bundles=${bundleQuery}`);
  };

  const resetFilters = () => {
    setSelectedFloor('전체');
    setSelectedPurchaseType('전체');
    setSelectedStatus('전체');
    setSearchQuery('');
  };

  const STATUS_BADGES: Record<RiskStatus, { label: string; style: string }> = {
    SAFE: { label: '안전', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    CAUTION: { label: '주의', style: 'bg-amber-50 text-amber-700 border-amber-200' },
    WARNING: { label: '위험', style: 'bg-orange-50 text-orange-700 border-orange-200' },
    CRITICAL_NEAR: { label: '악성임박', style: 'bg-rose-50 text-rose-700 border-rose-200' },
    DEAD_STOCK: { label: '악성 재고', style: 'bg-red-100 text-red-800 border-red-300 font-bold' },
  };

  return (
    <div className="space-y-6 pb-24">
      {/* Title Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <span className="text-xs font-bold text-[#0F4C3A] uppercase tracking-wider flex items-center gap-1.5">
            <Building2 className="w-4 h-4" />
            <span>The Hyundai Seoul Unified Inventory Control</span>
          </span>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">더현대 서울 재고 통합 관제 및 조회</h1>
          <p className="text-xs text-slate-500 mt-1">
            더현대 서울 2F 여성패션, 3F 남성잡화, B1 식품관, 1F 뷰티리빙 매장의 전체 직매입 재고와 위험/악성 재고를 통합 관제합니다.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          {viewTab === 'RISK' && (
            <button
              onClick={() => openBundleModal()}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
            >
              <Layers className="w-4 h-4 text-[#9E7C3B]" />
              <span>번들 구성 모달 열기</span>
            </button>
          )}
          <button
            onClick={() => handleProceedStrategy()}
            disabled={selectedItemIds.length === 0}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer ${
              selectedItemIds.length > 0
                ? 'bg-[#0F4C3A] text-white hover:bg-[#0B392B]'
                : 'bg-slate-100 text-slate-400 border border-slate-200 cursor-not-allowed'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#9E7C3B]" />
            <span>선택 품목 ({selectedItemIds.length}개) AI 전략 수립</span>
          </button>
        </div>
      </div>

      {/* Primary View Toggle Tabs (📦 전체 재고 vs ⚠️ 위험(악성) 재고 관제 [우선처리]) */}
      <div className="flex items-center gap-3 border-b border-slate-200 pb-1">
        <button
          onClick={() => { setViewTab('ALL'); setSelectedItemIds([]); }}
          className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
            viewTab === 'ALL'
              ? 'border-[#0F4C3A] text-[#0F4C3A]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <Package className="w-4 h-4" />
          <span>📦 전체 재고 조회 (모든 품목)</span>
        </button>

        <button
          onClick={() => { setViewTab('RISK'); setSelectedItemIds([]); }}
          className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-2 cursor-pointer ${
            viewTab === 'RISK'
              ? 'border-[#0F4C3A] text-[#0F4C3A]'
              : 'border-transparent text-slate-500 hover:text-slate-800'
          }`}
        >
          <ShieldAlert className="w-4 h-4 text-rose-600" />
          <span>⚠️ 위험(악성) 재고 관제 [우선처리]</span>
        </button>
      </div>

      {/* Dynamic Summary Cards based on Active Tab */}
      {viewTab === 'ALL' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>더현대 서울 관제 재고 총액</span>
              <Package className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <p className="text-2xl font-bold text-slate-900 tabular-nums">
              ₩{(tagMetrics.totalSelling / 100000000).toFixed(2)}억원
            </p>
            <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>취득 원가: ₩{(tagMetrics.totalCost / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원</span>
              <span className="font-bold text-[#0F4C3A]">{tagMetrics.count}개 품목</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>악성 재고 (DEAD_STOCK)</span>
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            <p className="text-2xl font-bold text-red-600 tabular-nums">
              ₩{(tagMetrics.deadStockCost / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </p>
            <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>보관 180일 이상 및 무름/만료</span>
              <span className="font-bold text-red-700 bg-red-100 px-1.5 py-0.5 rounded">{tagMetrics.deadStockCount}개 품목 감지</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>악성 임박 (CRITICAL_NEAR)</span>
              <Clock className="w-4 h-4 text-rose-500" />
            </div>
            <p className="text-2xl font-bold text-rose-600 tabular-nums">
              ₩{(tagMetrics.criticalCost / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </p>
            <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>시즌/유통 D-30 이내</span>
              <span className="font-bold text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">{tagMetrics.criticalCount}개 품목 감지</span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>일반 & 주의 재고</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-slate-800 tabular-nums">
              {tagMetrics.count - tagMetrics.deadStockCount - tagMetrics.criticalCount}개 품목
            </p>
            <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>정상 소진 궤도</span>
              <span className="font-bold text-emerald-700">안전 관리 범위</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
              <span>더현대 서울 위험재고 품목</span>
              <AlertTriangle className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-2xl font-bold text-slate-900 tabular-nums">{filteredItems.length}개 품목</p>
            <p className="text-[11px] text-slate-400 mt-1">DEAD_STOCK, CRITICAL_NEAR 등 집중 청산</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
              <span>선택 품목 취득원가 평가액</span>
              <PackageCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-slate-900 tabular-nums font-mono">
              ₩{(tagMetrics.selectedCost / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </p>
            <p className="text-[11px] text-slate-500 mt-1">
              선택품목: <span className="font-bold text-[#0F4C3A]">{tagMetrics.selectedCount}개</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
              <span>AI 예상 회피 폐기손실액</span>
              <TrendingUp className="w-4 h-4 text-[#9E7C3B]" />
            </div>
            <p className="text-2xl font-bold text-emerald-700 tabular-nums font-mono">
              +₩{(tagMetrics.selectedDisposalSaved / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </p>
            <p className="text-[11px] text-emerald-600 mt-1">전략 적용 시 회피 가능한 손실</p>
          </div>
        </div>
      )}

      {/* Filters & Data Table Container */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
        {/* Filters Header Bar (층별 드롭다운 포함) */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            {/* 층별 관제 구역 드롭다운 (Dropdown Select) */}
            <div className="flex items-center gap-1.5 bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs">
              <Building2 className="w-3.5 h-3.5 text-[#0F4C3A]" />
              <select
                value={selectedFloor}
                onChange={(e) => setSelectedFloor(e.target.value)}
                className="bg-transparent font-bold text-slate-900 focus:outline-none cursor-pointer"
              >
                <option value="전체">전체 층 (더현대 서울 전관)</option>
                <option value="2F">더현대 서울 2F (여성패션)</option>
                <option value="3F">더현대 서울 3F (남성/잡화)</option>
                <option value="B1">더현대 서울 B1 (Tasty SEOUL)</option>
                <option value="1F">더현대 서울 1F (뷰티/리빙)</option>
              </select>
            </div>

            <select
              value={selectedPurchaseType}
              onChange={(e) => setSelectedPurchaseType(e.target.value)}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 font-medium focus:outline-none cursor-pointer"
            >
              <option value="전체">전체 매입구분</option>
              <option value="직매입">직매입 (손익책임 100%)</option>
              <option value="특약매입">특약매입</option>
              <option value="임대매장">임대매장</option>
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 font-medium focus:outline-none cursor-pointer"
            >
              <option value="전체">전체 AI 위험도</option>
              <option value="DEAD_STOCK">DEAD_STOCK (악성재고)</option>
              <option value="CRITICAL_NEAR">CRITICAL_NEAR (임박)</option>
              <option value="WARNING">WARNING (위험)</option>
              <option value="CAUTION">CAUTION (주의)</option>
              <option value="SAFE">SAFE (안전)</option>
            </select>

            {(selectedFloor !== '전체' || selectedPurchaseType !== '전체' || selectedStatus !== '전체' || searchQuery !== '') && (
              <button
                onClick={resetFilters}
                className="px-2.5 py-1.5 rounded-lg border border-slate-300 text-xs font-semibold text-slate-600 hover:bg-slate-100 flex items-center gap-1 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                <span>초기화</span>
              </button>
            )}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              placeholder="상품명, 코드, 카테고리 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C3A]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1050px] table-fixed">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                <th className="py-3 px-4 w-12 text-center whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    className="rounded border-slate-300 text-[#0F4C3A] focus:ring-[#0F4C3A] cursor-pointer"
                  />
                </th>
                <th className="py-3 px-4 w-28 whitespace-nowrap">지점</th>
                <th className="py-3 px-4 w-32 whitespace-nowrap">상품코드</th>
                <th className="py-3 px-4 w-60 whitespace-nowrap">상품명 및 카테고리</th>
                <th className="py-3 px-4 w-44 whitespace-nowrap">더현대 서울 층/매장</th>
                <th className="py-3 px-4 w-24 whitespace-nowrap">매입구분</th>
                <th className="py-3 px-4 w-24 text-right whitespace-nowrap">현재고</th>
                <th className="py-3 px-4 w-32 text-right whitespace-nowrap">취득원가</th>
                <th className="py-3 px-4 w-32 text-right whitespace-nowrap">판매가</th>
                <th className="py-3 px-4 w-24 text-center whitespace-nowrap">보관일수</th>
                <th className="py-3 px-4 w-28 text-center whitespace-nowrap">AI 위험 태그</th>
                {viewTab === 'RISK' && <th className="py-3 px-4 w-24 text-center whitespace-nowrap">번들 결합</th>}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={viewTab === 'RISK' ? 12 : 11} className="py-12 text-center text-slate-500 font-medium">
                    선택하신 조건에 일치하는 관제 재고 품목이 없습니다.
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => {
                  const isSelected = selectedItemIds.includes(item.id);
                  const badge = STATUS_BADGES[item.status];
                  const itemBundle = createdBundles.find((b) => b.parentId === item.id);

                  return (
                    <tr
                      key={item.id}
                      onClick={() => setActiveDetailItem(item)}
                      className={`hover:bg-[#0F4C3A]/5 transition-colors cursor-pointer ${
                        isSelected ? 'bg-emerald-50/60' : ''
                      }`}
                      title={viewTab === 'ALL' ? '클릭 시 품목 운영 정보 모달을 엽니다' : '클릭 시 상세 AI 위험 진단을 엽니다'}
                    >
                      <td className="py-3.5 px-4 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={(e) => handleSelectItem(item.id, e)}
                          className="rounded border-slate-300 text-[#0F4C3A] focus:ring-[#0F4C3A] cursor-pointer"
                        />
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap font-bold text-slate-800">더현대 서울</td>
                      <td className="py-3.5 px-4 whitespace-nowrap font-mono text-[11px] text-slate-500">{item.code}</td>
                      <td className="py-3.5 px-4">
                        <p className="font-bold text-slate-900 truncate max-w-[240px]">{item.name}</p>
                        <p className="text-[10px] text-slate-400 truncate mt-0.5">{item.category}</p>
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap text-slate-800 font-medium">{item.store}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium border ${
                          item.purchaseType === '직매입' ? 'bg-purple-50 text-purple-700 border-purple-200 font-bold' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          {item.purchaseType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-slate-900 tabular-nums whitespace-nowrap">
                        {item.quantity.toLocaleString()}개
                      </td>
                      <td className="py-3.5 px-4 text-right text-slate-600 tabular-nums whitespace-nowrap font-mono">
                        ₩{item.costPrice.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 text-right font-bold text-[#0F4C3A] tabular-nums whitespace-nowrap font-mono">
                        ₩{item.sellingPrice.toLocaleString()}
                      </td>
                      <td className="py-3.5 px-4 text-center tabular-nums whitespace-nowrap text-slate-600">
                        {item.storageDays}일
                      </td>
                      <td className="py-3.5 px-4 text-center whitespace-nowrap">
                        <span className={`px-2.5 py-0.5 text-[10px] rounded-md border font-semibold ${badge.style}`}>
                          {badge.label}
                        </span>
                      </td>
                      {viewTab === 'RISK' && (
                        <td className="py-3.5 px-4 text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          {itemBundle ? (
                            <span
                              onClick={(e) => openBundleModal(item, e)}
                              className="inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-bold cursor-pointer hover:bg-amber-100"
                            >
                              <Layers className="w-3 h-3" />
                              <span>{itemBundle.items.length}개 결합</span>
                            </span>
                          ) : (
                            <button
                              onClick={(e) => openBundleModal(item, e)}
                              className="p-1.5 rounded-lg border border-slate-200 hover:bg-[#0F4C3A] hover:text-white hover:border-[#0F4C3A] text-slate-600 transition-all cursor-pointer"
                              title="번들 구성 모달 열기"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </td>
                      )}
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        item={activeDetailItem}
        onClose={() => setActiveDetailItem(null)}
        onProceedStrategy={(item) => handleProceedStrategy(item)}
        initialMode={viewTab === 'ALL' ? 'OPERATIONS' : 'RISK_ANALYSIS'}
        hideRiskTabs={viewTab === 'ALL'}
      />

      {/* Bundle Modal (위험 재고 관제 탭 전용) */}
      {isBundleModalOpen && targetItemForBundle && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-2xl w-full p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">더현대 서울 AI 번들 구성 모달</h3>
                  <p className="text-[11px] text-slate-500">기준 위험 재고: {targetItemForBundle.name}</p>
                </div>
              </div>
              <button onClick={() => setIsBundleModalOpen(false)} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2 border-b border-slate-200">
              <button
                onClick={() => setBundleTab('AI')}
                className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  bundleTab === 'AI'
                    ? 'border-[#0F4C3A] text-[#0F4C3A]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#9E7C3B]" />
                <span>AI 자동 시너지 묶음 추천</span>
              </button>
              <button
                onClick={() => setBundleTab('MANUAL')}
                className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  bundleTab === 'MANUAL'
                    ? 'border-[#0F4C3A] text-[#0F4C3A]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Search className="w-3.5 h-3.5" />
                <span>직접 검색 및 지정 추가</span>
              </button>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <p className="text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-2">
                현재 번들 결합 선택 목록 ({bundleList.length}개)
              </p>
              <div className="flex flex-wrap gap-2">
                {bundleList.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium shadow-2xs"
                  >
                    <span className="font-bold text-slate-900">{product.name}</span>
                    <span className="text-[10px] text-emerald-700 font-mono">
                      (₩{product.sellingPrice.toLocaleString()})
                    </span>
                    {bundleList.length > 1 && (
                      <button
                        onClick={() => removeProductFromBundle(product.id)}
                        className="text-slate-400 hover:text-red-600 ml-1 cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {bundleTab === 'AI' ? (
              <div className="space-y-2 text-xs">
                <p className="font-bold text-slate-800">카테고리 사용목적 연관 AI 추천 후보</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {aiRecommendedCandidates.map((cand) => (
                    <div
                      key={cand.id}
                      onClick={() => addProductToBundle(cand)}
                      className="p-3 border border-slate-200 hover:border-[#0F4C3A] rounded-xl bg-white hover:bg-emerald-50/40 cursor-pointer transition-all flex items-center justify-between"
                    >
                      <div>
                        <p className="text-xs font-bold text-slate-900 truncate">{cand.name}</p>
                        <p className="text-[10px] text-slate-500">{cand.store} · {cand.category}</p>
                      </div>
                      <Plus className="w-4 h-4 text-[#0F4C3A] shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-3 text-xs">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="결합할 더현대 서울 상품명, 카테고리 검색..."
                    value={bundleSearchQuery}
                    onChange={(e) => setBundleSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#0F4C3A]"
                  />
                </div>
                <div className="max-h-44 overflow-y-auto space-y-1 pr-1">
                  {manualSearchCandidates.map((cand) => (
                    <div
                      key={cand.id}
                      onClick={() => addProductToBundle(cand)}
                      className="p-2.5 border border-slate-100 hover:border-slate-300 rounded-lg text-xs flex items-center justify-between hover:bg-slate-50 cursor-pointer"
                    >
                      <div>
                        <span className="font-semibold text-slate-800">{cand.name}</span>
                        <span className="text-[10px] text-slate-400 ml-2">
                          [{cand.store}] ₩{cand.sellingPrice.toLocaleString()}
                        </span>
                      </div>
                      <Plus className="w-4 h-4 text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-3">
              <button
                onClick={() => setIsBundleModalOpen(false)}
                className="px-4 py-2 text-xs text-slate-600 hover:bg-slate-100 rounded-lg font-medium cursor-pointer"
              >
                취소
              </button>
              <button
                onClick={confirmBundleCreation}
                className="px-5 py-2 text-xs bg-[#0F4C3A] text-white rounded-lg font-bold hover:bg-[#0B392B] shadow-xs cursor-pointer"
              >
                번들 결합 완료 ({bundleList.length}개 상품)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Drawer Bar */}
      {selectedItemIds.length > 0 && (
        <div className="fixed bottom-6 left-64 right-6 z-40 bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl p-4 rounded-2xl flex items-center justify-between animate-in slide-in-from-bottom-6 duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C3A] text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-[#9E7C3B]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                선택한 더현대 서울 <span className="text-[#0F4C3A] font-extrabold">{selectedItemIds.length}개</span> 재고 품목
                {createdBundles.length > 0 && ` (번들 ${createdBundles.length}그룹 결합)`}
              </p>
              <p className="text-[11px] text-slate-500">선택된 품목 기반으로 AI 증분 기여현금이익 수립 파이프라인을 구동합니다.</p>
            </div>
          </div>

          <button
            onClick={() => handleProceedStrategy()}
            className="flex items-center gap-2 px-6 py-3 bg-[#0F4C3A] hover:bg-[#0B392B] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>선택 품목으로 AI 전략 수립 이동</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function AllInventoryPage() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">통합 재고 관제 로딩 중...</div>}>
        <UnifiedInventoryContent />
      </Suspense>
    </AppLayout>
  );
}
