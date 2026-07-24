'use client';

import { useState, useMemo, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_INVENTORY_ITEMS } from '@/lib/mock-data';
import { InventoryItem, RiskStatus } from '@/lib/types';
import { ProductDetailModal } from '@/components/inventory/product-detail-modal';
import { 
  AlertTriangle, 
  Sparkles, 
  Plus, 
  X, 
  Search, 
  Layers, 
  TrendingUp, 
  ArrowRight,
  ShieldAlert,
  PackageCheck
} from 'lucide-react';

function RiskInventoryContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialFloor = searchParams.get('floor') || '전체 층';

  const [selectedFloor, setSelectedFloor] = useState<string>(initialFloor);
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [activeDetailItem, setActiveDetailItem] = useState<InventoryItem | null>(null);
  
  const [isBundleModalOpen, setIsBundleModalOpen] = useState(false);
  const [targetItemForBundle, setTargetItemForBundle] = useState<InventoryItem | null>(null);
  const [bundleList, setBundleList] = useState<InventoryItem[]>([]);
  const [activeTab, setActiveTab] = useState<'AI' | 'MANUAL'>('AI');
  const [searchQuery, setSearchQuery] = useState('');
  const [createdBundles, setCreatedBundles] = useState<{ parentId: string; items: InventoryItem[] }[]>([]);

  // 더현대 서울 층별 위험재고 필터링
  const riskItems = useMemo(() => {
    return MOCK_INVENTORY_ITEMS.filter((item) => {
      const isRiskStatus = ['DEAD_STOCK', 'CRITICAL_NEAR', 'WARNING'].includes(item.status);
      const isFloorMatch = selectedFloor === '전체 층' || item.store.includes(selectedFloor.replace('관', ''));
      return isRiskStatus && isFloorMatch;
    });
  }, [selectedFloor]);

  const isAllSelected = riskItems.length > 0 && selectedItemIds.length === riskItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(riskItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: string, e?: React.SyntheticEvent) => {
    if (e) e.stopPropagation();
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedStats = useMemo(() => {
    const selectedItems = MOCK_INVENTORY_ITEMS.filter((item) => selectedItemIds.includes(item.id));
    const totalCost = selectedItems.reduce((sum, item) => sum + item.costPrice * item.quantity, 0);
    const totalSelling = selectedItems.reduce((sum, item) => sum + item.sellingPrice * item.quantity, 0);
    const totalSavedDisposal = selectedItems.reduce((sum, item) => sum + item.estimatedDisposalCost * item.quantity, 0);
    return {
      count: selectedItems.length,
      totalCost,
      totalSelling,
      totalSavedDisposal,
    };
  }, [selectedItemIds]);

  const openBundleModal = (item?: InventoryItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (item) {
      setTargetItemForBundle(item);
      setBundleList([item]);
    } else {
      setTargetItemForBundle(riskItems[0] || null);
      setBundleList(riskItems[0] ? [riskItems[0]] : []);
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
    if (!searchQuery.trim()) return MOCK_INVENTORY_ITEMS.slice(0, 8);
    return MOCK_INVENTORY_ITEMS.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.store.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

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

  const STATUS_BADGE = {
    SAFE: { label: '안전', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    CAUTION: { label: '주의', style: 'bg-amber-50 text-amber-700 border-amber-200' },
    WARNING: { label: '위험', style: 'bg-orange-50 text-orange-700 border-orange-200' },
    CRITICAL_NEAR: { label: '악성임박', style: 'bg-rose-50 text-rose-700 border-rose-200' },
    DEAD_STOCK: { label: '악성 재고', style: 'bg-red-100 text-red-800 border-red-300 font-bold' },
  };

  return (
    <div className="space-y-6 pb-28">
      {/* Title Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-red-600 uppercase tracking-wider mb-1">
            <ShieldAlert className="w-4 h-4" />
            <span>The Hyundai Seoul Risk Control Center</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">더현대 서울 위험·악성 재고 집중 관리</h1>
          <p className="text-xs text-slate-500 mt-1">
            더현대 서울 2F 여성패션, 3F 남성잡화, B1 식품관, 1F 뷰티리빙 매장의 장기보관 및 유통기한 임박 직매입 위험재고를 관제합니다. (로우 클릭 시 상세 진단 모달을 엽니다)
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => openBundleModal()}
            className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <Layers className="w-4 h-4 text-[#9E7C3B]" />
            <span>번들 구성 모달 열기</span>
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
            <span>더현대 서울 위험재고 품목</span>
            <AlertTriangle className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl font-bold text-slate-900 tabular-nums">{riskItems.length}개 품목</p>
          <p className="text-[11px] text-slate-400 mt-1">DEAD_STOCK, CRITICAL_NEAR 등 집중 관리</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
            <span>선택 재고 취득원가 평가액</span>
            <PackageCheck className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-slate-900 tabular-nums">
            ₩{selectedStats.totalCost.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-500 mt-1">
            선택품목: <span className="font-bold text-[#0F4C3A]">{selectedStats.count}개</span>
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-2">
            <span>AI 예상 회피 폐기손실액</span>
            <TrendingUp className="w-4 h-4 text-[#9E7C3B]" />
          </div>
          <p className="text-2xl font-bold text-emerald-700 tabular-nums">
            +₩{selectedStats.totalSavedDisposal.toLocaleString()}
          </p>
          <p className="text-[11px] text-emerald-600 mt-1">전략 적용 시 100% 회피 가능 손실</p>
        </div>
      </div>

      {/* Floor Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {['전체 층', '2F 여성패션', '3F 남성/잡화', 'B1 (식품관)', '1F (뷰티/리빙)'].map((floor) => (
          <button
            key={floor}
            onClick={() => setSelectedFloor(floor)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
              selectedFloor === floor
                ? 'bg-[#0F4C3A] text-white shadow-xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {floor}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden">
        <div className="p-4 border-b border-slate-200 bg-slate-50/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-800">더현대 서울 청산 우선순위 위험재고 목록</span>
            <span className="text-[11px] text-slate-500">({riskItems.length}건)</span>
          </div>
          <button
            onClick={handleSelectAll}
            className="text-xs text-slate-600 hover:text-slate-900 font-medium flex items-center gap-1.5 cursor-pointer"
          >
            <input type="checkbox" checked={isAllSelected} onChange={() => {}} className="rounded border-slate-300" />
            <span>전체 선택</span>
          </button>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full text-left border-collapse min-w-[1000px] table-fixed">
            <thead>
              <tr className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                <th className="py-3 px-4 w-12 text-center">선택</th>
                <th className="py-3 px-4 w-28">위험 상태</th>
                <th className="py-3 px-4 w-28">지점</th>
                <th className="py-3 px-4 w-32">상품코드</th>
                <th className="py-3 px-4 min-w-[240px]">상품명 및 미세 사유</th>
                <th className="py-3 px-4 w-44">더현대 서울 층/매장</th>
                <th className="py-3 px-4 w-24 text-right">현재고</th>
                <th className="py-3 px-4 w-36 text-right">원가 / 정상가</th>
                <th className="py-3 px-4 w-24 text-center">번들 결합</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {riskItems.map((item) => {
                const isSelected = selectedItemIds.includes(item.id);
                const badge = STATUS_BADGE[item.status] || STATUS_BADGE.WARNING;
                const itemBundle = createdBundles.find((b) => b.parentId === item.id);

                return (
                  <tr
                    key={item.id}
                    onClick={() => setActiveDetailItem(item)}
                    className={`hover:bg-[#0F4C3A]/5 transition-colors cursor-pointer ${
                      isSelected ? 'bg-emerald-50/60' : ''
                    }`}
                    title="클릭 시 상세 AI 진단 및 시뮬레이션을 엽니다"
                  >
                    <td className="py-3.5 px-4 text-center" onClick={(e) => e.stopPropagation()}>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) => handleSelectItem(item.id, e)}
                        className="rounded border-slate-300 text-[#0F4C3A] focus:ring-[#0F4C3A] w-4 h-4 cursor-pointer"
                      />
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className={`px-2 py-0.5 text-[10px] rounded-md border font-semibold ${badge.style}`}>
                        {badge.label}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-800 whitespace-nowrap">더현대 서울</td>
                    <td className="py-3.5 px-4 font-mono text-slate-500 text-[11px] whitespace-nowrap">{item.code}</td>
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900 truncate max-w-[280px]">{item.name}</p>
                      <p className="text-[10px] text-slate-500 truncate max-w-[320px] mt-0.5">{item.reason}</p>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <p className="text-slate-800 font-medium">{item.store}</p>
                      <p className="text-[10px] text-slate-400">{item.category}</p>
                    </td>
                    <td className="py-3.5 px-4 text-right font-semibold text-slate-900 tabular-nums whitespace-nowrap">
                      {item.quantity.toLocaleString()}개
                    </td>
                    <td className="py-3.5 px-4 text-right tabular-nums whitespace-nowrap">
                      <p className="text-slate-900 font-bold">₩{item.sellingPrice.toLocaleString()}</p>
                      <p className="text-[10px] text-slate-400">원가 ₩{item.costPrice.toLocaleString()}</p>
                    </td>
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
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Detail Modal */}
      <ProductDetailModal
        item={activeDetailItem}
        onClose={() => setActiveDetailItem(null)}
        onProceedStrategy={(item) => handleProceedStrategy(item)}
      />

      {/* Bundle Modal */}
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
                onClick={() => setActiveTab('AI')}
                className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'AI'
                    ? 'border-[#0F4C3A] text-[#0F4C3A]'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#9E7C3B]" />
                <span>AI 자동 시너지 묶음 추천</span>
              </button>
              <button
                onClick={() => setActiveTab('MANUAL')}
                className={`pb-2.5 px-3 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
                  activeTab === 'MANUAL'
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

            {activeTab === 'AI' ? (
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-800">카테고리 사용목적 연관 AI 추천 후보</p>
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
              <div className="space-y-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="결합할 더현대 서울 상품명, 카테고리 검색..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
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

      {selectedItemIds.length > 0 && (
        <div className="fixed bottom-6 left-64 right-6 z-40 bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl p-4 rounded-2xl flex items-center justify-between animate-in slide-in-from-bottom-6 duration-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C3A] text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5 text-[#9E7C3B]" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">
                선택한 더현대 서울 <span className="text-[#0F4C3A] font-extrabold">{selectedItemIds.length}개</span> 위험 재고 품목
                {createdBundles.length > 0 && ` (번들 ${createdBundles.length}그룹 결합)`}
              </p>
              <p className="text-[11px] text-slate-500">
                AI 증분 기여현금이익 최적화 알고리즘 기반으로 시뮬레이션 수립을 진행합니다.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleProceedStrategy()}
            className="flex items-center gap-2 px-6 py-3 bg-[#0F4C3A] hover:bg-[#0B392B] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
          >
            <span>선택 항목으로 개별/번들 AI 전략 수립</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

export default function RiskInventoryPage() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">위험 재고 로딩 중...</div>}>
        <RiskInventoryContent />
      </Suspense>
    </AppLayout>
  );
}
