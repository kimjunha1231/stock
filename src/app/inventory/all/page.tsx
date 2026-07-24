'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_INVENTORY_ITEMS } from '@/lib/mock-data';
import { InventoryItem, RiskStatus } from '@/lib/types';
import { 
  Search, 
  Info, 
  Sparkles, 
  X, 
  Building2, 
  ArrowRight,
  AlertTriangle,
  Package,
  ShieldAlert,
  Clock,
  CheckCircle2
} from 'lucide-react';

export default function AllInventoryPage() {
  const router = useRouter();

  // 필터 상태
  const [selectedFloor, setSelectedFloor] = useState<string>('전체');
  const [selectedPurchaseType, setSelectedPurchaseType] = useState<string>('전체');
  const [selectedStatus, setSelectedStatus] = useState<string>('전체');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);
  const [activeReasonItem, setActiveReasonItem] = useState<InventoryItem | null>(null);

  // 정밀 필터링 로직
  const filteredItems = useMemo(() => {
    return MOCK_INVENTORY_ITEMS.filter((item) => {
      // 1. 층별 필터
      let matchFloor = true;
      if (selectedFloor !== '전체') {
        if (selectedFloor.includes('2F')) matchFloor = item.store.includes('2F');
        else if (selectedFloor.includes('3F')) matchFloor = item.store.includes('3F');
        else if (selectedFloor.includes('B1')) matchFloor = item.store.includes('B1');
        else if (selectedFloor.includes('1F')) matchFloor = item.store.includes('1F');
      }

      // 2. 매입구분 필터
      const matchPurchase = selectedPurchaseType === '전체' || item.purchaseType === selectedPurchaseType;

      // 3. 위험도 필터
      const matchStatus = selectedStatus === '전체' || item.status === selectedStatus;

      // 4. 검색어 필터
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.store.toLowerCase().includes(q);

      return matchFloor && matchPurchase && matchStatus && matchSearch;
    });
  }, [selectedFloor, selectedPurchaseType, selectedStatus, searchQuery]);

  // AI 위험 태그별 품목 수 및 금액 계산 (두 번째 이미지 카드 4개 구성용)
  const tagMetrics = useMemo(() => {
    const deadStockItems = filteredItems.filter((i) => i.status === 'DEAD_STOCK');
    const criticalItems = filteredItems.filter((i) => i.status === 'CRITICAL_NEAR');
    const warningItems = filteredItems.filter((i) => i.status === 'WARNING');
    const safeCautionItems = filteredItems.filter((i) => i.status === 'SAFE' || i.status === 'CAUTION');

    const totalSelling = filteredItems.reduce((acc, i) => acc + i.sellingPrice * i.quantity, 0);
    const totalCost = filteredItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);

    const deadStockCost = deadStockItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);
    const criticalCost = criticalItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);
    const warningCost = warningItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);
    const safeCautionCost = safeCautionItems.reduce((acc, i) => acc + i.costPrice * i.quantity, 0);

    return {
      totalSelling,
      totalCost,
      count: filteredItems.length,

      deadStockCount: deadStockItems.length,
      deadStockCost,

      criticalCount: criticalItems.length,
      criticalCost,

      warningCount: warningItems.length,
      warningCost,

      safeCautionCount: safeCautionItems.length,
      safeCautionCost,
    };
  }, [filteredItems]);

  const isAllSelected = filteredItems.length > 0 && selectedItemIds.length === filteredItems.length;

  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedItemIds([]);
    } else {
      setSelectedItemIds(filteredItems.map((item) => item.id));
    }
  };

  const handleSelectItem = (id: string) => {
    setSelectedItemIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleProceedStrategy = () => {
    if (selectedItemIds.length === 0) return;
    const itemQuery = selectedItemIds.join(',');
    router.push(`/strategy/generate?items=${itemQuery}`);
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
    <AppLayout>
      <div className="space-y-6 pb-24">
        {/* Title Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <span className="text-xs font-bold text-[#0F4C3A] uppercase tracking-wider flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>The Hyundai Seoul Inventory Intelligence</span>
            </span>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight mt-0.5">더현대 서울 재고 통합 조회</h1>
            <p className="text-xs text-slate-500 mt-1">
              더현대 서울 2F 여성패션, 3F 남성잡화, B1 식품관, 1F 뷰티리빙 매장의 직매입 및 보유 재고 흐름을 관제합니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleProceedStrategy}
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

        {/* AI 위험 태그별 품목 수 & 원가 금액 요약 카드 4종 (두 번째 이미지 스타일 카드 스트립) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: 더현대 서울 조회 재고 총액 */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>더현대 서울 조회 재고 총액</span>
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

          {/* Card 2: 악성 재고 (DEAD_STOCK) */}
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

          {/* Card 3: 악성 임박 (CRITICAL_NEAR) */}
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

          {/* Card 4: 위험 & 주의/안전 (WARNING / CAUTION / SAFE) */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>위험 & 주의/안전 재고</span>
              <CheckCircle2 className="w-4 h-4 text-amber-500" />
            </div>
            <p className="text-2xl font-bold text-slate-800 tabular-nums">
              ₩{((tagMetrics.warningCost + tagMetrics.safeCautionCost) / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </p>
            <div className="flex justify-between items-center text-[11px] text-slate-500 pt-1 border-t border-slate-100">
              <span>위험 {tagMetrics.warningCount}개 / 일반 {tagMetrics.safeCautionCount}개</span>
              <span className="font-bold text-emerald-700">관리 범위 내</span>
            </div>
          </div>
        </div>

        {/* Filters & Data Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
          {/* Floor Filter Tabs */}
          <div className="p-4 border-b border-slate-200 bg-slate-50/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {[
                { key: '전체', label: '전체 층' },
                { key: '2F', label: '2F 여성패션' },
                { key: '3F', label: '3F 남성/잡화' },
                { key: 'B1', label: 'B1 Tasty SEOUL' },
                { key: '1F', label: '1F 뷰티/리빙' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedFloor(tab.key)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                    selectedFloor === tab.key
                      ? 'bg-[#0F4C3A] text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Sub Filters */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="상품명, 코드, 카테고리 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs bg-white focus:outline-none focus:border-[#0F4C3A] w-56"
                />
              </div>

              <select
                value={selectedPurchaseType}
                onChange={(e) => setSelectedPurchaseType(e.target.value)}
                className="px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 font-medium focus:outline-none cursor-pointer"
              >
                <option value="전체">전체 매입구분</option>
                <option value="직매입">직매입 (손익책임 100%)</option>
                <option value="특약매입">특약매입</option>
                <option value="임대매장">임대매장</option>
              </select>

              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-2.5 py-1.5 border border-slate-200 rounded-lg text-xs bg-white text-slate-700 font-medium focus:outline-none cursor-pointer"
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
                  <span>필터 초기화</span>
                </button>
              )}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1150px] table-fixed">
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
                  <th className="py-3 px-4 w-52 whitespace-nowrap">상품명 및 카테고리</th>
                  <th className="py-3 px-4 w-44 whitespace-nowrap">더현대 서울 층/매장</th>
                  <th className="py-3 px-4 w-24 whitespace-nowrap">매입구분</th>
                  <th className="py-3 px-4 w-24 text-right whitespace-nowrap">현재고</th>
                  <th className="py-3 px-4 w-32 text-right whitespace-nowrap">취득원가</th>
                  <th className="py-3 px-4 w-32 text-right whitespace-nowrap">판매가</th>
                  <th className="py-3 px-4 w-24 text-center whitespace-nowrap">보관일수</th>
                  <th className="py-3 px-4 w-28 text-center whitespace-nowrap">AI 위험 태그</th>
                  <th className="py-3 px-4 w-24 text-center whitespace-nowrap">판단사유</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={12} className="py-12 text-center text-slate-500 font-medium">
                      선택하신 조건에 일치하는 재고 품목이 없습니다.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((item) => {
                    const isSelected = selectedItemIds.includes(item.id);
                    const badge = STATUS_BADGES[item.status];

                    return (
                      <tr
                        key={item.id}
                        className={`hover:bg-slate-50/90 transition-colors ${
                          isSelected ? 'bg-emerald-50/40' : ''
                        }`}
                      >
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => handleSelectItem(item.id)}
                            className="rounded border-slate-300 text-[#0F4C3A] focus:ring-[#0F4C3A] cursor-pointer"
                          />
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap font-bold text-slate-800">더현대 서울</td>
                        <td className="py-3.5 px-4 whitespace-nowrap font-mono text-[11px] text-slate-500">{item.code}</td>
                        <td className="py-3.5 px-4">
                          <p className="font-bold text-slate-900 truncate max-w-[200px]">{item.name}</p>
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
                        <td className="py-3.5 px-4 text-center whitespace-nowrap">
                          <button
                            onClick={() => setActiveReasonItem(item)}
                            className="px-2 py-1 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-[11px] inline-flex items-center gap-1 transition-all cursor-pointer"
                          >
                            <Info className="w-3 h-3 text-[#0F4C3A]" />
                            <span>사유</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reason Modal */}
        {activeReasonItem && (
          <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#0F4C3A] flex items-center justify-center font-bold">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">더현대 서울 AI 재고 미세 진단</h3>
                    <p className="text-[11px] text-slate-500">{activeReasonItem.store} · {activeReasonItem.code}</p>
                  </div>
                </div>
                <button onClick={() => setActiveReasonItem(null)} className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-900">{activeReasonItem.name}</p>
                <div className="mt-3 p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">진단 등급:</span>
                    <span className="font-bold text-red-600">{activeReasonItem.status} (위험점수 {activeReasonItem.riskScore}점)</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">유통기한/시즌 잔여:</span>
                    <span className="font-bold text-slate-800">D-{activeReasonItem.expiryDaysLeft}일</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">일일 보관 손실 누적:</span>
                    <span className="font-bold text-slate-900 font-mono">₩{activeReasonItem.holdingCostPerDay.toLocaleString()}/일</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">예상 폐기 회손액:</span>
                    <span className="font-bold text-emerald-700 font-mono">₩{(activeReasonItem.estimatedDisposalCost * activeReasonItem.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded-xl text-xs text-slate-700">
                <p className="font-bold text-[#0F4C3A] mb-1">AI 파이프라인 분석 사유:</p>
                <p className="leading-relaxed">{activeReasonItem.reason}</p>
              </div>

              <div className="flex justify-end border-t border-slate-100 pt-3">
                <button
                  onClick={() => setActiveReasonItem(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-slate-800 cursor-pointer"
                >
                  확인 닫기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Drawer */}
        {selectedItemIds.length > 0 && (
          <div className="fixed bottom-6 left-64 right-6 z-40 bg-white/95 backdrop-blur-md border border-slate-300 shadow-2xl p-4 rounded-2xl flex items-center justify-between animate-in slide-in-from-bottom-6 duration-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0F4C3A] text-white flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 text-[#9E7C3B]" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">
                  선택한 더현대 서울 <span className="text-[#0F4C3A] font-extrabold">{selectedItemIds.length}개</span> 재고 품목
                </p>
                <p className="text-[11px] text-slate-500">선택된 품목 기반으로 AI 증분 기여현금이익 수립 파이프라인을 구동합니다.</p>
              </div>
            </div>

            <button
              onClick={handleProceedStrategy}
              className="flex items-center gap-2 px-6 py-3 bg-[#0F4C3A] hover:bg-[#0B392B] text-white text-xs font-bold rounded-xl shadow-md transition-all cursor-pointer"
            >
              <span>선택 품목으로 AI 전략 수립 이동</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
