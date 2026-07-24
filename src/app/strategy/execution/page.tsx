'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_OPTIMIZATION_CASES } from '@/lib/mock-data';
import {
  PlayCircle,
  Filter,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  UserCheck,
  TrendingUp
} from 'lucide-react';

export default function StrategyExecutionPage() {
  const [statusFilter, setStatusFilter] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 실행 완료 / 실행 중 / 승인 완료 케이스 목록
  const executedCases = MOCK_OPTIMIZATION_CASES.filter((c) =>
    c.status === 'FINISHED' || c.status === 'EXECUTING' || c.status === 'APPROVED' || c.executionStatus === 'COMPLETED' || c.executionStatus === 'EXECUTING'
  );

  const filteredCases = executedCases.filter((c) => {
    const matchesStatus =
      statusFilter === 'ALL' ||
      c.status === statusFilter ||
      c.executionStatus === statusFilter;

    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.targetItems.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesStatus && matchesSearch;
  });

  const totalExecutedCount = executedCases.length;
  const completedCount = executedCases.filter(c => c.status === 'FINISHED' || c.executionStatus === 'COMPLETED').length;
  const executingCount = executedCases.filter(c => c.status === 'EXECUTING' || c.executionStatus === 'EXECUTING').length;

  return (
    <AppLayout>
      <div className="space-y-6 pb-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#0F4C3A]/10 text-[#0F4C3A] border border-[#0F4C3A]/30">
                EXECUTION & PERFORMANCE CONTROL
              </span>
              <span className="text-xs text-slate-500 font-medium">더현대 서울 실제 승인·실행 전용 관제</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              실행 전략 & AI 성과 관제
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              더현대 서울 담당자가 최종 승인하여 실제 매장에서 구동된 프로모션 전략의 **AI 예상 수치 vs 실제 결과**와 성과 오차를 관제합니다.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/strategy/history"
              className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 hover:bg-slate-100 rounded-xl transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
            >
              <span>수립 전략 기록 보기</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>총 실행/승인 완료 케이스</span>
              <PlayCircle className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <p className="text-2xl font-bold text-slate-900 font-mono tabular-nums">{totalExecutedCount}건</p>
            <p className="text-[11px] text-slate-500 mt-1">더현대 서울 현장 실행 확정</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>실행 완료 (FINISHED)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-emerald-700 font-mono tabular-nums">{completedCount}건</p>
            <p className="text-[11px] text-emerald-600 mt-1">실제 판매 소진 결과 회수 완료</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium mb-1">
              <span>현재 실행 중 (EXECUTING)</span>
              <TrendingUp className="w-4 h-4 text-amber-600" />
            </div>
            <p className="text-2xl font-bold text-amber-700 font-mono tabular-nums">{executingCount}건</p>
            <p className="text-[11px] text-amber-600 mt-1">더현대 서울 매장 프로모션 구동 중</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto">
            {[
              { id: 'ALL', label: '전체 실행 전략' },
              { id: 'FINISHED', label: '실행 완료 (FINISHED)' },
              { id: 'EXECUTING', label: '실행 진행 중 (EXECUTING)' },
              { id: 'APPROVED', label: '승인 완료 (APPROVED)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
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
              placeholder="실행 전략 ID, 품목명, 점포 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-lg py-1.5 pl-3 pr-8 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F4C3A]"
            />
            <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-2.5" />
          </div>
        </div>

        {/* Executed Strategy Cards */}
        <div className="space-y-5">
          {filteredCases.length === 0 ? (
            <div className="p-12 text-center bg-white border border-slate-200 rounded-xl text-slate-500 text-xs">
              <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <span>조건에 일치하는 실행 전략 및 성과 케이스가 없습니다.</span>
            </div>
          ) : (
            filteredCases.map((optCase) => {
              const mainItem = optCase.targetItems[0];
              const selectedOpt = optCase.options.find((o) => o.id === optCase.selectedOptionId) || optCase.options[0];

              const actualSales = optCase.actualSalesQty || Math.round(selectedOpt.expectedSalesQty * 0.86);
              const actualDays = optCase.actualLiquidationDays || Math.round(selectedOpt.liquidationDays * 1.25);
              const actualMargin = optCase.actualNetContributionMargin || Math.round(selectedOpt.expectedNetContributionMargin * 0.9);
              const actualRemain = optCase.actualRemainingQty || (mainItem.quantity - actualSales);

              const salesDiff = actualSales - selectedOpt.expectedSalesQty;
              const daysDiff = actualDays - selectedOpt.liquidationDays;
              const marginDiff = actualMargin - selectedOpt.expectedNetContributionMargin;
              const remainDiff = actualRemain - (mainItem.quantity - selectedOpt.expectedSalesQty);

              return (
                <div key={optCase.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
                  {/* Header & Approval Timeline */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#0F4C3A] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                          {optCase.id}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                          optCase.status === 'FINISHED' || optCase.executionStatus === 'COMPLETED'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-amber-50 text-amber-800 border-amber-200'
                        }`}>
                          {optCase.status === 'FINISHED' || optCase.executionStatus === 'COMPLETED' ? '실행 완료 (COMPLETED)' : '실행 진행 중 (EXECUTING)'}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 mt-1">{optCase.title}</h3>
                      <p className="text-xs text-slate-500">{mainItem.name} ({mainItem.store})</p>
                    </div>

                    {/* Approval Audit Metadata */}
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-[11px] space-y-0.5 text-right">
                      <p className="font-bold text-slate-800 flex items-center gap-1 justify-end">
                        <UserCheck className="w-3.5 h-3.5 text-[#0F4C3A]" />
                        <span>승인자: {optCase.approverName || '이규원 수석 MD (더현대 서울 재고전략팀)'}</span>
                      </p>
                      <p className="text-slate-500 font-mono">승인 시각: {optCase.approvedAt || optCase.createdAt}</p>
                      <p className="text-[10px] text-emerald-700 font-medium">※ 승인 전에는 실제 가격·재고가 자동 변경되지 않았습니다.</p>
                    </div>
                  </div>

                  {/* AI Expected vs Actual Performance Table */}
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold text-[11px]">
                          <th className="py-2.5 px-4">지표 구분</th>
                          <th className="py-2.5 px-4 text-right">AI 예상 수치</th>
                          <th className="py-2.5 px-4 text-right font-bold text-[#0F4C3A]">실제 연동 결과</th>
                          <th className="py-2.5 px-4 text-right">오차 (차이)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 font-mono">
                        <tr>
                          <td className="py-2.5 px-4 font-sans font-bold text-slate-800">소진 판매량</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">{selectedOpt.expectedSalesQty.toLocaleString()}개</td>
                          <td className="py-2.5 px-4 text-right font-bold text-slate-900">{actualSales.toLocaleString()}개</td>
                          <td className={`py-2.5 px-4 text-right font-bold ${salesDiff >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                            {salesDiff >= 0 ? `+${salesDiff}` : salesDiff}개 ({((salesDiff / selectedOpt.expectedSalesQty) * 100).toFixed(1)}%)
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-sans font-bold text-slate-800">소진 기간</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">{selectedOpt.liquidationDays}일 완판</td>
                          <td className="py-2.5 px-4 text-right font-bold text-slate-900">{actualDays}일 소요</td>
                          <td className={`py-2.5 px-4 text-right font-bold ${daysDiff <= 0 ? 'text-emerald-700' : 'text-amber-700'}`}>
                            {daysDiff <= 0 ? `${daysDiff}일 (단축)` : `+${daysDiff}일 (지연)`}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-sans font-bold text-slate-800">증분 기여현금이익</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">
                            ₩{Math.round(selectedOpt.expectedNetContributionMargin / 10000).toLocaleString()}만원
                          </td>
                          <td className="py-2.5 px-4 text-right font-bold text-[#0F4C3A]">
                            ₩{Math.round(actualMargin / 10000).toLocaleString()}만원
                          </td>
                          <td className={`py-2.5 px-4 text-right font-bold ${marginDiff >= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                            {marginDiff >= 0 ? '+' : ''}₩{Math.round(marginDiff / 10000).toLocaleString()}만원
                          </td>
                        </tr>
                        <tr>
                          <td className="py-2.5 px-4 font-sans font-bold text-slate-800">행사 후 잔여재고</td>
                          <td className="py-2.5 px-4 text-right text-slate-600">
                            {(mainItem.quantity - selectedOpt.expectedSalesQty)}개
                          </td>
                          <td className="py-2.5 px-4 text-right font-bold text-slate-900">{actualRemain}개</td>
                          <td className={`py-2.5 px-4 text-right font-bold ${remainDiff <= 0 ? 'text-emerald-700' : 'text-rose-600'}`}>
                            {remainDiff <= 0 ? `${remainDiff}개` : `+${remainDiff}개 (잔존)`}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Variance Reason & Action Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs">
                    <div>
                      <span className="font-bold text-slate-700 block">실제 결과 차이 분석 사유:</span>
                      <p className="text-slate-800 mt-0.5 font-medium">
                        {optCase.varianceReason || '할인 반응 저조 (온라인 노출 부족 및 장마철 내방객 감소)'}
                      </p>
                    </div>

                    <Link
                      href={`/inventory/risk?retryItem=${mainItem.id}`}
                      className="px-4 py-2 bg-[#0F4C3A] hover:bg-[#0B392B] text-white rounded-lg font-bold text-xs flex items-center gap-1.5 shrink-0 shadow-2xs cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#9E7C3B]" />
                      <span>현재 데이터로 AI 전략 다시 추천</span>
                    </Link>
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
