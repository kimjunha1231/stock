'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_OPTIMIZATION_CASES } from '@/lib/mock-data';
import {
  History,
  Filter,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  AlertCircle,
  Layers,
  Plus,
  DollarSign,
  TrendingUp
} from 'lucide-react';

export default function StrategyHistoryPage() {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const proposedCases = MOCK_OPTIMIZATION_CASES.filter((c) =>
    c.status === 'PENDING' || c.status === 'GENERATING' || c.status === 'COMPLETED' || c.status === 'APPROVED'
  );

  const displayedCases = proposedCases.filter((c) => {
    const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.targetItems.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const totalCases = proposedCases.length;
  const approvedCases = proposedCases.filter((c) => c.status === 'APPROVED').length;
  const totalSavedDisposal = proposedCases.reduce((acc, c) => {
    const opt = c.options[0];
    return acc + (opt?.savedDisposalCost || 0);
  }, 0);
  const totalExpectedMargin = proposedCases.reduce((acc, c) => {
    const opt = c.options[0];
    return acc + (opt?.expectedNetContributionMargin || 0);
  }, 0);

  return (
    <AppLayout>
      <div className="space-y-6 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0F4C3A]/10 text-[#0F4C3A] border border-[#0F4C3A]/30">
                STRATEGY SELECTION & SIMULATION
              </span>
              <span className="text-xs text-slate-500 font-medium">더현대 서울 AI 전략 수립 이력 & 시뮬레이션 목록</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              수립 전략 기록 & 대안 비교
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              AI 파이프라인이 생성한 시나리오 대안 목록과 개별 수립 상태를 확인하고 시뮬레이션 워크벤치를 연결합니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/inventory/risk"
              className="px-4 py-2.5 text-xs font-bold text-white bg-[#0F4C3A] hover:bg-[#0B392B] rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Plus className="w-4 h-4 text-[#9E7C3B]" />
              신규 AI 전략 수립 시작
            </Link>
          </div>
        </div>

        {/* Top Summary Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>수립된 전략 케이스</span>
              <History className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">{totalCases}건</div>
            <div className="text-[11px] text-slate-500 mt-1">AI 증분 기여이익 연산 완료</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>승인 대기/완료</span>
              <CheckCircle2 className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <div className="text-2xl font-bold text-[#0F4C3A] font-mono tabular-nums">
              {approvedCases}건 <span className="text-xs text-slate-600 font-normal">({Math.round((approvedCases / totalCases) * 100)}%)</span>
            </div>
            <div className="text-[11px] text-slate-500 mt-1">더현대 서울 담당자 승인 대상</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>회피 예정 폐기 손실액</span>
              <DollarSign className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <div className="text-2xl font-bold text-[#0F4C3A] font-mono tabular-nums">
              ₩{(totalSavedDisposal / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </div>
            <div className="text-[11px] text-slate-500 mt-1">소각/폐기 손실 방어 총액</div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>예상 증분 기여이익</span>
              <TrendingUp className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
              ₩{(totalExpectedMargin / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
            </div>
            <div className="text-[11px] text-slate-500 mt-1">순마진 방어 누적 시뮬레이션</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {[
              { id: 'ALL', label: '전체 보기' },
              { id: 'APPROVED', label: '승인완료 (APPROVED)' },
              { id: 'COMPLETED', label: '수립완료 (COMPLETED)' },
              { id: 'GENERATING', label: '생성중 (GENERATING)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  statusFilter === tab.id
                    ? 'bg-[#0F4C3A] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="케이스 ID, 품목명, 점포 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-3 pr-8 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F4C3A]"
            />
            <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5" />
          </div>
        </div>

        {/* Proposed Cases List */}
        <div className="space-y-4">
          {displayedCases.length === 0 ? (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-xl text-slate-500 text-xs">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <span>조건에 일치하는 수립 전략 케이스가 없습니다.</span>
            </div>
          ) : (
            displayedCases.map((optCase) => {
              const mainItem = optCase.targetItems[0];
              const selectedOpt = optCase.options.find((o) => o.id === optCase.selectedOptionId) || optCase.options[0];

              return (
                <div
                  key={optCase.id}
                  className="bg-white border border-slate-200 hover:border-[#0F4C3A] rounded-xl p-5 transition-all shadow-2xs group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-[#0F4C3A] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          {optCase.id}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200">
                          {optCase.status}
                        </span>
                        {optCase.isBundle && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                            <Layers className="w-3 h-3" />
                            AI 번들 조합
                          </span>
                        )}
                        <span className="text-[11px] text-slate-400 font-mono ml-auto lg:ml-0">
                          {optCase.createdAt}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0F4C3A] transition-colors">
                          {optCase.title}
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          {mainItem.name} ({mainItem.store} | {mainItem.purchaseType} | 현재고 {mainItem.quantity}개)
                        </p>
                      </div>

                      {selectedOpt && (
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                          <div className="text-slate-800 font-bold flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-[#0F4C3A]" />
                            <span>{selectedOpt.name}</span>
                          </div>
                          <p className="text-slate-600 leading-relaxed text-[11px] line-clamp-1">
                            {selectedOpt.reasoning}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-end justify-between gap-3 border-t lg:border-t-0 pt-3 lg:pt-0 border-slate-100 lg:pl-5 lg:border-l shrink-0 min-w-[200px]">
                      <div className="space-y-0.5 text-left sm:text-right font-mono">
                        <span className="text-[11px] text-slate-500 block font-sans">예상 증분 기여이익</span>
                        <span className="text-base font-bold text-[#0F4C3A]">
                          ₩{(selectedOpt?.expectedNetContributionMargin || 0).toLocaleString()}원
                        </span>
                      </div>

                      <Link
                        href={`/strategy/${optCase.id}`}
                        className="w-full py-2 px-3.5 text-xs font-bold rounded-lg bg-[#0F4C3A] hover:bg-[#0B392B] text-white transition-all flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                      >
                        <span>대안 비교 & 시뮬레이션</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </AppLayout>
  );
}
