'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { InventoryItem, RiskStatus } from '@/lib/types';
import { MOCK_OPTIMIZATION_CASES } from '@/lib/mock-data';
import { 
  Sparkles, 
  X, 
  RefreshCw, 
  ArrowRight, 
  TrendingDown, 
  History, 
  CheckCircle2, 
  AlertTriangle,
  Building2
} from 'lucide-react';

interface ProductDetailModalProps {
  item: InventoryItem | null;
  onClose: () => void;
  onProceedStrategy?: (item: InventoryItem) => void;
}

export function ProductDetailModal({ item, onClose, onProceedStrategy }: ProductDetailModalProps) {
  const router = useRouter();
  const [isReanalyzing, setIsReanalyzing] = useState(false);
  const [reanalyzeDone, setReanalyzeDone] = useState(false);

  if (!item) return null;

  // 이 상품과 관련된 과거 전략 히스토리 케이스 검색
  const relatedCases = MOCK_OPTIMIZATION_CASES.filter((c) =>
    c.targetItems.some((i) => i.id === item.id || i.code === item.code)
  );

  const STATUS_BADGES: Record<RiskStatus, { label: string; style: string }> = {
    SAFE: { label: '안전', style: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    CAUTION: { label: '주의', style: 'bg-amber-50 text-amber-700 border-amber-200' },
    WARNING: { label: '위험', style: 'bg-orange-50 text-orange-700 border-orange-200' },
    CRITICAL_NEAR: { label: '악성임박', style: 'bg-rose-50 text-rose-700 border-rose-200' },
    DEAD_STOCK: { label: '악성 재고', style: 'bg-red-100 text-red-800 border-red-300 font-bold' },
  };

  const badge = STATUS_BADGES[item.status];

  // 향후 수요 및 잔여 재고 더미 수치 계산 (MVP 프론트 연산)
  const dailySalesRate = item.storageDays > 0 ? (item.quantity / Math.max(item.storageDays * 1.5, 30)).toFixed(2) : '0.42';
  const dailyRateNum = parseFloat(dailySalesRate);

  const forecast30Sales = Math.min(item.quantity, Math.round(dailyRateNum * 30));
  const forecast30Remain = item.quantity - forecast30Sales;
  const forecast30Depletion = Math.round((forecast30Sales / item.quantity) * 100);

  const forecast60Sales = Math.min(item.quantity, Math.round(dailyRateNum * 60));
  const forecast60Remain = item.quantity - forecast60Sales;
  const forecast60Depletion = Math.round((forecast60Sales / item.quantity) * 100);

  const forecast90Sales = Math.min(item.quantity, Math.round(dailyRateNum * 90));
  const forecast90Remain = item.quantity - forecast90Sales;
  const forecast90Depletion = Math.round((forecast90Sales / item.quantity) * 100);

  const handleReanalyze = () => {
    setIsReanalyzing(true);
    setReanalyzeDone(false);
    setTimeout(() => {
      setIsReanalyzing(false);
      setReanalyzeDone(true);
    }, 900);
  };

  const handleStartStrategy = () => {
    if (onProceedStrategy) {
      onProceedStrategy(item);
    } else {
      router.push(`/strategy/history?created=true&items=${item.id}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-6 animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C3A] text-white flex items-center justify-center font-bold shadow-xs">
              <Building2 className="w-5 h-5 text-[#9E7C3B]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-slate-500 font-mono">{item.code}</span>
                <span className={`px-2 py-0.5 text-[10px] rounded-md border font-semibold ${badge.style}`}>
                  {badge.label}
                </span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">
                  {item.purchaseType}
                </span>
              </div>
              <h3 className="font-bold text-slate-900 text-base mt-0.5">{item.name}</h3>
              <p className="text-xs text-slate-500">{item.store} · {item.category}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Section 1: AI 위험 진단 및 판단 근거 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-[#0F4C3A]" />
              <span>1. AI 위험 진단 및 판단 근거</span>
            </h4>
            <button
              onClick={handleReanalyze}
              disabled={isReanalyzing}
              className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-[#0F4C3A] bg-white text-[11px] font-semibold text-slate-700 hover:text-[#0F4C3A] flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 text-[#0F4C3A] ${isReanalyzing ? 'animate-spin' : ''}`} />
              <span>{isReanalyzing ? 'AI 추론 중...' : '위험 상태 재분석하기'}</span>
            </button>
          </div>

          {reanalyzeDone && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>최신 실시간 판매속도 및 시즌 잔여일 기반 위험도 재분석 완료 (상태 고정)</span>
            </div>
          )}

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-b border-slate-200 pb-3">
              <div>
                <span className="text-[11px] text-slate-500 block">현재고</span>
                <span className="font-bold text-slate-900 text-sm tabular-nums">{item.quantity.toLocaleString()}개</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">보관일수</span>
                <span className="font-bold text-slate-900 text-sm tabular-nums">{item.storageDays}일</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">시즌/유통 잔여</span>
                <span className="font-bold text-rose-600 text-sm tabular-nums">D-{item.expiryDaysLeft}일</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">일 보관 손실</span>
                <span className="font-bold text-slate-800 text-sm tabular-nums font-mono">₩{item.holdingCostPerDay.toLocaleString()}</span>
              </div>
            </div>

            <div className="text-xs text-slate-700 space-y-1">
              <p className="font-bold text-[#0F4C3A]">AI 파이프라인 판단 사유:</p>
              <p className="leading-relaxed bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
                {item.reason}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: 향후 수요 및 잔여 재고 분석 (MVP 프론트 연산) */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
            <TrendingDown className="w-4 h-4 text-[#0F4C3A]" />
            <span>2. 향후 수요 및 잔여 재고 예측 분석 (과거 패턴 기준)</span>
          </h4>

          <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3">
            <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
              <span className="text-slate-600">추정 일평균 판매속도:</span>
              <span className="font-bold text-slate-900 font-mono">{dailySalesRate}개/일</span>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-[10px] text-slate-500 font-bold">30일 후 예측</p>
                <p className="text-xs font-bold text-slate-800 mt-1">{forecast30Sales}개 소진 ({forecast30Depletion}%)</p>
                <p className="text-[11px] text-slate-500 mt-0.5">잔여 {forecast30Remain}개</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-[10px] text-slate-500 font-bold">60일 후 예측</p>
                <p className="text-xs font-bold text-slate-800 mt-1">{forecast60Sales}개 소진 ({forecast60Depletion}%)</p>
                <p className="text-[11px] text-slate-500 mt-0.5">잔여 {forecast60Remain}개</p>
              </div>

              <div className="p-3 bg-rose-50/60 rounded-lg border border-rose-200">
                <p className="text-[10px] text-rose-600 font-bold">90일 후 (시즌 종료)</p>
                <p className="text-xs font-bold text-rose-700 mt-1">{forecast90Sales}개 소진 ({forecast90Depletion}%)</p>
                <p className="text-[11px] text-rose-600 font-bold mt-0.5">최종 잔여 {forecast90Remain}개</p>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-amber-900 leading-snug">
              ⚠️ 현재 판매 속도를 방치할 경우 시즌 종료 시점까지 약 <span className="font-bold">{forecast90Remain}개</span>의 직매입 악성재고가 남아 
              예상 폐기 손실 ₩{(item.estimatedDisposalCost * forecast90Remain).toLocaleString()}원 발생이 우려됩니다.
            </p>
          </div>
        </div>

        {/* Section 3: 전략 수립 히스토리 및 개별 전략 수립 */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
              <History className="w-4 h-4 text-[#0F4C3A]" />
              <span>3. 수립 전략 히스토리 및 개별 전략 수립</span>
            </h4>
            <button
              onClick={handleStartStrategy}
              className="px-3 py-1.5 bg-[#0F4C3A] hover:bg-[#0B392B] text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9E7C3B]" />
              <span>바로 개별 전략 수립</span>
            </button>
          </div>

          {relatedCases.length > 0 ? (
            <div className="space-y-2">
              <p className="text-[11px] text-slate-500 font-medium">
                이 상품에 대해 수립된 선택 전략 (클릭 시 당시 선택된 전략의 상세 시뮬레이션을 보여줍니다):
              </p>
              {relatedCases.map((c) => {
                const opt = c.options.find((o) => o.id === c.selectedOptionId) || c.options[0];
                return (
                  <div
                    key={c.id}
                    onClick={() => router.push(`/strategy/${c.id}/simulate`)}
                    className="p-3 bg-white border border-slate-200 hover:border-[#0F4C3A] hover:bg-emerald-50/30 rounded-xl transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-[#0F4C3A] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {c.id}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{c.title}</span>
                        <span className="text-[10px] px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold">
                          {c.status}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-1">
                        당시 선택된 전략: <span className="font-bold text-slate-800">{opt?.name}</span> ({opt?.discountRate}% 할인)
                        · 증분 기여이익 ₩{(opt?.expectedNetContributionMargin || 0).toLocaleString()}원
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-[#0F4C3A] group-hover:translate-x-1 transition-transform">
                      <span>상세 시뮬레이션 보기</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500">
              아직 이 상품에 대해 확정된 AI 전략 이력이 없습니다. 상단 [바로 개별 전략 수립] 버튼을 눌러 전략을 수립하세요.
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-end border-t border-slate-100 pt-4 gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            닫기
          </button>
          <button
            onClick={handleStartStrategy}
            className="px-5 py-2 bg-[#0F4C3A] hover:bg-[#0B392B] text-white rounded-xl text-xs font-bold shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#9E7C3B]" />
            <span>이 상품으로 AI 전략 수립 이동</span>
          </button>
        </div>
      </div>
    </div>
  );
}
