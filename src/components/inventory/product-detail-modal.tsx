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
  History, 
  CheckCircle2, 
  AlertTriangle,
  Building2,
  Package,
  BarChart3,
  ShieldAlert,
  Info
} from 'lucide-react';

interface ProductDetailModalProps {
  item: InventoryItem | null;
  onClose: () => void;
  onProceedStrategy?: (item: InventoryItem) => void;
  initialMode?: 'OPERATIONS' | 'RISK_ANALYSIS' | 'HISTORY';
}

export function ProductDetailModal({ 
  item, 
  onClose, 
  onProceedStrategy,
  initialMode = 'OPERATIONS'
}: ProductDetailModalProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'OPERATIONS' | 'RISK_ANALYSIS' | 'HISTORY'>(initialMode);
  const [riskSubSection, setRiskSubSection] = useState<'ANALYSIS' | 'EVIDENCE'>('ANALYSIS');
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

  // 향후 수요 및 잔여 재고 더미 수치 연산 (MVP 기준선)
  const dailySalesRate = item.storageDays > 0 ? (item.quantity / Math.max(item.storageDays * 1.5, 30)).toFixed(2) : '0.42';
  const dailyRateNum = parseFloat(dailySalesRate);

  const forecast30Sales = Math.min(item.quantity, Math.round(dailyRateNum * 30));
  const forecast30Remain = item.quantity - forecast30Sales;

  const forecast90Sales = Math.min(item.quantity, Math.round(dailyRateNum * 90));
  const forecast90Remain = item.quantity - forecast90Sales;
  const expectedDisposalLoss = (item.estimatedDisposalCost * forecast90Remain);

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
      <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 space-y-5 animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Top Header */}
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
                <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium border ${
                  item.purchaseType === '직매입'
                    ? 'bg-purple-50 text-purple-700 border-purple-200 font-bold'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
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

        {/* Modal Main View Tabs (상단 탭 바 3개) */}
        <div className="flex items-center gap-2 border-b border-slate-200">
          <button
            onClick={() => setActiveTab('OPERATIONS')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'OPERATIONS'
                ? 'border-[#0F4C3A] text-[#0F4C3A]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>상품 운영 정보</span>
          </button>

          <button
            onClick={() => setActiveTab('RISK_ANALYSIS')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'RISK_ANALYSIS'
                ? 'border-[#0F4C3A] text-[#0F4C3A]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <ShieldAlert className="w-4 h-4 text-rose-600" />
            <span>AI 위험 분석 및 기준선</span>
          </button>

          <button
            onClick={() => setActiveTab('HISTORY')}
            className={`pb-3 px-4 text-xs font-bold border-b-2 transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'HISTORY'
                ? 'border-[#0F4C3A] text-[#0F4C3A]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <History className="w-4 h-4 text-[#9E7C3B]" />
            <span>수립 전략 히스토리 ({relatedCases.length}건)</span>
          </button>
        </div>

        {/* TAB 1: 상품 운영 정보 (Product Operations Info) */}
        {activeTab === 'OPERATIONS' && (
          <div className="space-y-4 text-xs">
            {/* Direct Purchase Notice */}
            {item.purchaseType !== '직매입' && (
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">매입 구분이 [{item.purchaseType}] 상품입니다.</p>
                  <p className="text-[11px] text-amber-800 mt-0.5">
                    소유권 및 수수료 구조 확인이 필요합니다. AI 재고 최적화 및 임의 가격 할인 대상은 [직매입] 품목 우선으로 진행됩니다.
                  </p>
                </div>
              </div>
            )}

            {/* Basic Financial & Inventory Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <span className="text-[11px] text-slate-500 block">정상 판매가</span>
                <span className="font-bold text-[#0F4C3A] text-sm font-mono">₩{item.sellingPrice.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">취득 원가</span>
                <span className="font-bold text-slate-800 text-sm font-mono">₩{item.costPrice.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">현재 보유 재고</span>
                <span className="font-bold text-slate-900 text-sm tabular-nums">{item.quantity.toLocaleString()}개</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 block">보관 일수</span>
                <span className="font-bold text-slate-900 text-sm tabular-nums">{item.storageDays}일</span>
              </div>
            </div>

            {/* Sub Section: Option & Size Inventory Breakdown */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-white">
              <h4 className="font-bold text-slate-900 flex items-center justify-between">
                <span>더현대 서울 옵션/사이즈별 재고 현황</span>
                <span className="text-[11px] font-normal text-slate-500">총 {item.quantity}개</span>
              </h4>
              <div className="grid grid-cols-4 gap-2 text-center pt-1">
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-semibold">S (85/90)</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{Math.round(item.quantity * 0.2)}개</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-semibold">M (95/100)</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{Math.round(item.quantity * 0.45)}개</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-semibold">L (105/110)</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{Math.round(item.quantity * 0.25)}개</span>
                </div>
                <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                  <span className="text-[10px] text-slate-500 block font-semibold">XL / Free</span>
                  <span className="font-bold text-slate-800 mt-0.5 block">{Math.round(item.quantity * 0.1)}개</span>
                </div>
              </div>
            </div>

            {/* Sub Section: In / Out / Sales History */}
            <div className="border border-slate-200 rounded-xl p-4 space-y-2 bg-white">
              <h4 className="font-bold text-slate-900">최근 입출고 및 판매 실적 이력 (더현대 서울)</h4>
              <div className="space-y-1.5 pt-1">
                <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-600">2026.06.10 입고 내역</span>
                  <span className="font-mono font-semibold text-slate-900">+{(item.quantity * 1.3).toFixed(0)}개 (입고 완료)</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-600">최근 30일 누적 판매량</span>
                  <span className="font-mono font-semibold text-[#0F4C3A]">{forecast30Sales}개 소진</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-slate-50 rounded-lg border border-slate-100">
                  <span className="text-slate-600">과거 프로모션 적용 이력</span>
                  <span className="font-mono font-semibold text-slate-700">1회 (전용 쿠폰 5% 적용)</span>
                </div>
              </div>
            </div>

            {/* Transition Link to Risk View */}
            <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-xl flex items-center justify-between">
              <div>
                <p className="font-bold text-[#0F4C3A]">현재 AI 위험 상태: {badge.label}</p>
                <p className="text-[11px] text-slate-600 mt-0.5">{item.reason}</p>
              </div>
              <button
                onClick={() => setActiveTab('RISK_ANALYSIS')}
                className="px-3.5 py-2 bg-[#0F4C3A] hover:bg-[#0B392B] text-white rounded-lg font-bold text-xs flex items-center gap-1 shrink-0 cursor-pointer"
              >
                <span>AI 위험 분석 상세 보기</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: AI 위험 분석 및 기준선 (AI Risk Analysis & Baseline) */}
        {activeTab === 'RISK_ANALYSIS' && (
          <div className="space-y-4 text-xs">
            {/* Risk Sub-navigation Toggles (상단으로 히스토리를 뺐으므로 2개 버튼으로 구성) */}
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setRiskSubSection('ANALYSIS')}
                className={`flex-1 py-1.5 rounded-lg font-bold transition-all text-center cursor-pointer ${
                  riskSubSection === 'ANALYSIS'
                    ? 'bg-white text-[#0F4C3A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. 위험 분석 (결론 & 기준선)
              </button>
              <button
                onClick={() => setRiskSubSection('EVIDENCE')}
                className={`flex-1 py-1.5 rounded-lg font-bold transition-all text-center cursor-pointer ${
                  riskSubSection === 'EVIDENCE'
                    ? 'bg-white text-[#0F4C3A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. 위험 판단 근거 (데이터 지표)
              </button>
            </div>

            {/* Sub 1: 위험 분석 (결론 & 방치 시 기준선 비교) */}
            {riskSubSection === 'ANALYSIS' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-[#0F4C3A]" />
                    <span>아무것도 하지 않았을 때의 기준선 (Do Nothing Baseline)</span>
                  </h4>
                  <button
                    onClick={handleReanalyze}
                    disabled={isReanalyzing}
                    className="px-2.5 py-1 rounded-lg border border-slate-200 hover:border-[#0F4C3A] bg-white text-[11px] font-semibold text-slate-700 hover:text-[#0F4C3A] flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer"
                  >
                    <RefreshCw className={`w-3 h-3 text-[#0F4C3A] ${isReanalyzing ? 'animate-spin' : ''}`} />
                    <span>{isReanalyzing ? 'AI 추론 중...' : '위험 상태 재분석'}</span>
                  </button>
                </div>

                {reanalyzeDone && (
                  <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>최신 실시간 판매속도 및 시즌 잔여일 기반 위험도 재분석 완료</span>
                  </div>
                )}

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs border-b border-slate-200 pb-3">
                    <div>
                      <span className="text-[11px] text-slate-500 block">30일 후 잔여 예측</span>
                      <span className="font-bold text-slate-900 text-sm tabular-nums">{forecast30Remain}개</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">시즌/유통 잔여</span>
                      <span className="font-bold text-rose-600 text-sm tabular-nums">D-{item.expiryDaysLeft}일</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">예상 폐기/보관 손실</span>
                      <span className="font-bold text-rose-700 text-sm tabular-nums font-mono">
                        ₩{(expectedDisposalLoss / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500 block">예측 범위 및 신뢰도</span>
                      <span className="font-bold text-[#0F4C3A] text-sm tabular-nums">
                        {Math.round(forecast90Remain * 0.85)}~{Math.round(forecast90Remain * 1.15)}개 (82%)
                      </span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-700 space-y-1">
                    <p className="font-bold text-[#0F4C3A]">AI 파이프라인 판단 사유 결론:</p>
                    <p className="leading-relaxed bg-white p-3 rounded-lg border border-slate-200 text-slate-800">
                      {item.reason}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Sub 2: 위험 판단 근거 (데이터 지표 및 세부 가중치) */}
            {riskSubSection === 'EVIDENCE' && (
              <div className="space-y-3">
                <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                  <BarChart3 className="w-4 h-4 text-[#0F4C3A]" />
                  <span>AI 알고리즘이 참고한 내부 데이터 및 유사 상품 가중치</span>
                </h4>

                <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-slate-700">
                      <span>추정 일평균 판매 속도</span>
                      <span className="font-bold font-mono text-[#0F4C3A]">{dailySalesRate}개/일</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>현재 보유 기간</span>
                      <span className="font-bold text-slate-900">{item.storageDays}일 (위험 임계 120일 초과)</span>
                    </div>
                    <div className="flex justify-between text-slate-700">
                      <span>데이터 신선도 및 완전성</span>
                      <span className="font-bold text-emerald-700">2026.07.24 동기화 (94% 양호)</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-100 pt-3 space-y-1.5">
                    <p className="font-bold text-slate-800">유사 상품 참고 가중치 산정 기준:</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 block font-semibold">동일 상품 이력</span>
                        <span className="font-bold text-[#0F4C3A] text-sm">65%</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 block font-semibold">동일 카테고리/가격</span>
                        <span className="font-bold text-slate-800 text-sm">25%</span>
                      </div>
                      <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
                        <span className="text-[10px] text-slate-500 block font-semibold">시즌 패턴 보정</span>
                        <span className="font-bold text-slate-800 text-sm">10%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 3: 수립 전략 히스토리 (상단 메인 탭으로 뺀 영역) */}
        {activeTab === 'HISTORY' && (
          <div className="space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-900 flex items-center gap-1.5">
                <History className="w-4 h-4 text-[#0F4C3A]" />
                <span>과거 수립된 AI 전략 히스토리 목록 ({relatedCases.length}건)</span>
              </h4>
              <button
                onClick={handleStartStrategy}
                className="px-3 py-1.5 bg-[#0F4C3A] hover:bg-[#0B392B] text-white rounded-lg text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#9E7C3B]" />
                <span>이 상품으로 신규 AI 전략 수립</span>
              </button>
            </div>

            {relatedCases.length > 0 ? (
              <div className="space-y-2">
                {relatedCases.map((c) => {
                  const opt = c.options.find((o) => o.id === c.selectedOptionId) || c.options[0];
                  return (
                    <div
                      key={c.id}
                      onClick={() => router.push(`/strategy/${c.id}`)}
                      className="p-3.5 bg-white border border-slate-200 hover:border-[#0F4C3A] hover:bg-emerald-50/30 rounded-xl transition-all cursor-pointer flex items-center justify-between group shadow-2xs"
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
                        <span>상세 보기</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-8 bg-slate-50 border border-slate-200 rounded-xl text-center text-xs text-slate-500 space-y-2">
                <p>아직 이 상품에 대해 수립된 과거 AI 전략 이력이 없습니다.</p>
                <button
                  onClick={handleStartStrategy}
                  className="px-4 py-2 bg-[#0F4C3A] text-white rounded-lg font-bold text-xs inline-flex items-center gap-1 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#9E7C3B]" />
                  <span>지금 AI 전략 수립 구동하기</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer Actions */}
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
