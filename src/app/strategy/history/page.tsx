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
 
   const filteredCases = MOCK_OPTIMIZATION_CASES.filter((c) => {
     const matchesStatus = statusFilter === 'ALL' || c.status === statusFilter;
     const matchesSearch =
       c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
       c.targetItems.some((i) => i.name.toLowerCase().includes(searchQuery.toLowerCase()));
     return matchesStatus && matchesSearch;
   });
 
   const totalCases = MOCK_OPTIMIZATION_CASES.length;
   const approvedCases = MOCK_OPTIMIZATION_CASES.filter((c) => c.status === 'APPROVED').length;
   const totalSavedDisposal = MOCK_OPTIMIZATION_CASES.reduce((acc, c) => {
     const opt = c.options[0];
     return acc + (opt?.savedDisposalCost || 0);
   }, 0);
   const totalExpectedMargin = MOCK_OPTIMIZATION_CASES.reduce((acc, c) => {
     const opt = c.options[0];
     return acc + (opt?.expectedNetContributionMargin || 0);
   }, 0);
 
   return (
     <AppLayout>
       <div className="space-y-8 pb-12">
         {/* Header */}
         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
           <div>
             <div className="flex items-center gap-2 mb-1">
               <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#0F4C3A]/30 text-[#0F4C3A] border border-[#0F4C3A]/60">
                 STRATEGY MANAGEMENT
               </span>
               <span className="text-xs text-slate-600">수립 전략 이력 및 승인 현황</span>
             </div>
             <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
               AI 수익 최적화 전략 수립 이력
             </h1>
             <p className="text-sm text-slate-600 mt-1">
               알고리즘이 시뮬레이션한 재고 처분 전략 케이스 목록과 개별 시나리오 이행 상태를 확인합니다.
             </p>
           </div>
 
           <div>
             <Link
               href="/strategy/generate"
               className="px-4 py-2.5 text-sm font-semibold text-white bg-[#0F4C3A] hover:bg-[#14634c] rounded-lg transition-all shadow-sm flex items-center gap-2"
             >
               <Plus className="w-4 h-4 text-white" />
               신규 전략 수립 생성
             </Link>
           </div>
         </div>
 
         {/* Summary Strip */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm backdrop-blur-sm">
             <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
               <span>총 전략 수립 케이스</span>
               <History className="w-4 h-4 text-[#0F4C3A]" />
             </div>
             <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">{totalCases}건</div>
             <div className="text-xs text-slate-500 mt-1">AI 자동 연산 완료 분석 건수</div>
           </div>
 
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm backdrop-blur-sm">
             <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
               <span>최종 결제 및 승인 완료</span>
               <CheckCircle2 className="w-4 h-4 text-[#0F4C3A]" />
             </div>
             <div className="text-2xl font-bold text-[#0F4C3A] font-mono tabular-nums">
               {approvedCases}건 <span className="text-xs text-slate-600 font-normal">({Math.round((approvedCases / totalCases) * 100)}%)</span>
             </div>
             <div className="text-xs text-slate-500 mt-1">현대백화점 담당자 승인 확정</div>
           </div>
 
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm backdrop-blur-sm">
             <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
               <span>회피 예정 폐기 손실액</span>
               <DollarSign className="w-4 h-4 text-[#0F4C3A]" />
             </div>
             <div className="text-2xl font-bold text-[#0F4C3A] font-mono tabular-nums">
               {(totalSavedDisposal / 10000).toLocaleString()}만원
             </div>
             <div className="text-xs text-slate-500 mt-1">소진 전략으로 세이빙된 소각/폐기비</div>
           </div>
 
           <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm backdrop-blur-sm">
             <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
               <span>예상 기여 순마진 합계</span>
               <TrendingUp className="w-4 h-4 text-[#0F4C3A]" />
             </div>
             <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
               {(totalExpectedMargin / 10000).toLocaleString()}만원
             </div>
             <div className="text-xs text-slate-500 mt-1">순마진 최적화 방어 총액</div>
           </div>
         </div>
 
         {/* Filter & Search Bar */}
         <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
           {/* Status Tabs */}
           <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
             {[
               { id: 'ALL', label: '전체 보기' },
               { id: 'APPROVED', label: '승인됨 (APPROVED)' },
               { id: 'COMPLETED', label: '수립완료 (COMPLETED)' },
               { id: 'GENERATING', label: '생성중 (GENERATING)' },
               { id: 'PENDING', label: '대기중 (PENDING)' }
             ].map((tab) => (
               <button
                 key={tab.id}
                 onClick={() => setStatusFilter(tab.id)}
                 className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                   statusFilter === tab.id
                     ? 'bg-[#0F4C3A] text-white border border-emerald-600/40 shadow-sm'
                     : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                 }`}
               >
                 {tab.label}
               </button>
             ))}
           </div>
 
           {/* Search Input */}
           <div className="relative w-full md:w-72">
             <input
               type="text"
               placeholder="케이스 ID, 품목명, 점포 검색..."
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-slate-50 border border-slate-200 rounded-lg py-2 pl-3 pr-8 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0F4C3A] focus:ring-2 focus:ring-emerald-100"
             />
             <Filter className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-2.5" />
           </div>
         </div>
 
         {/* Case List Grid */}
         <div className="space-y-4">
           {filteredCases.length === 0 ? (
             <div className="p-12 text-center bg-slate-50 border border-slate-200 rounded-xl text-slate-600">
               <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
               <p className="text-sm">조건에 일치하는 수립 전략 케이스가 없습니다.</p>
             </div>
           ) : (
             filteredCases.map((optCase) => {
               const mainItem = optCase.targetItems[0];
               const selectedOpt = optCase.options.find((o) => o.id === optCase.selectedOptionId) || optCase.options[0];
 
               const statusBadgeStyle =
                 optCase.status === 'APPROVED'
                   ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                   : optCase.status === 'COMPLETED'
                   ? 'bg-sky-50 text-sky-700 border-sky-200'
                   : optCase.status === 'GENERATING'
                   ? 'bg-amber-50 text-amber-700 border-amber-200'
                   : 'bg-slate-100 text-slate-600 border-slate-300';
 
               return (
                 <div
                   key={optCase.id}
                   className="bg-white border border-slate-200 hover:border-emerald-200 rounded-xl p-6 transition-all duration-200 shadow-sm backdrop-blur-sm group"
                 >
                   <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                     {/* Left Content */}
                     <div className="space-y-3 flex-1">
                       <div className="flex flex-wrap items-center gap-2">
                         <span className="font-mono text-xs font-bold text-[#0F4C3A] bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                           {optCase.id}
                         </span>
                         <span className={`text-xs font-semibold px-2.5 py-0.5 rounded border ${statusBadgeStyle}`}>
                           {optCase.status}
                         </span>
                         {optCase.isBundle && (
                           <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-violet-50 text-violet-700 border border-violet-200 flex items-center gap-1">
                             <Layers className="w-3 h-3" />
                             AI 번들 조합 패키지
                           </span>
                         )}
                         <span className="text-xs text-slate-500 font-mono flex items-center gap-1 ml-auto lg:ml-0">
                           <Clock className="w-3 h-3" />
                           {optCase.createdAt}
                         </span>
                       </div>
 
                       <div>
                         <h3 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                           {optCase.title}
                         </h3>
                         <p className="text-xs text-slate-600 mt-1 line-clamp-1">
                           {mainItem.name} ({mainItem.store} | 직매입 | 현재고 {mainItem.quantity}개 | 보관 {mainItem.storageDays}일)
                           {optCase.bundleItems && optCase.bundleItems.length > 0 && ` + ${optCase.bundleItems[0].name}`}
                         </p>
                       </div>
 
                       {/* Selected Scenario Preview */}
                       {selectedOpt && (
                         <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1">
                           <div className="text-slate-700 font-semibold flex items-center gap-1.5">
                             <Sparkles className="w-3.5 h-3.5 text-[#0F4C3A]" />
                             {selectedOpt.name}
                           </div>
                           <div className="text-slate-600 leading-relaxed line-clamp-2">
                             {selectedOpt.reasoning}
                           </div>
                         </div>
                       )}
                     </div>
 
                     {/* Right Metrics & Action */}
                     <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-end justify-between gap-4 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-200 lg:pl-6 lg:border-l shrink-0 min-w-[220px]">
                       <div className="space-y-1 text-left sm:text-right tabular-nums w-full">
                         <div className="text-xs text-slate-600">예상 순마진 기여이익</div>
                         <div className="text-lg font-extrabold text-[#0F4C3A]">
                           {selectedOpt ? (selectedOpt.expectedNetContributionMargin).toLocaleString() : 0}원
                         </div>
                         <div className="text-[11px] text-slate-500">
                           소진 예상 <span className="text-slate-900 font-semibold">{selectedOpt?.liquidationDays || 0}일</span> | 신뢰도{' '}
                           <span className="text-[#0F4C3A] font-bold">{selectedOpt?.confidenceScore || 0}%</span>
                         </div>
                       </div>
 
                       <Link
                         href={`/strategy/${optCase.id}`}
                         className="w-full py-2.5 px-4 text-xs font-semibold rounded-lg bg-[#0F4C3A] hover:bg-[#14634c] text-white transition-all flex items-center justify-center gap-1.5 shadow-sm"
                       >
                         상세 시뮬레이션 & 승인하기
                         <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-white" />
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
