'use client';

import { useMemo, useState } from 'react';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_INVENTORY_ITEMS } from '@/lib/mock-data';
import { 
  BarChart3, 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Building2, 
  Sparkles,
  CheckCircle2,
  PieChart as PieChartIcon,
  Package,
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  Legend,
  Cell
} from 'recharts';

export default function AnalyticsPage() {
  const items = MOCK_INVENTORY_ITEMS;

  // 카테고리별 세부 통계 데이터 계산
  const categoryStats = useMemo(() => {
    const categories = Array.from(new Set(items.map((i) => i.category)));

    return categories.map((cat) => {
      const catItems = items.filter((i) => i.category === cat);
      const totalQty = catItems.reduce((sum, i) => sum + i.quantity, 0);
      const totalCost = catItems.reduce((sum, i) => sum + i.costPrice * i.quantity, 0);
      const totalSelling = catItems.reduce((sum, i) => sum + i.sellingPrice * i.quantity, 0);
      const avgStorageDays = Math.round(catItems.reduce((sum, i) => sum + i.storageDays, 0) / catItems.length);
      const riskItems = catItems.filter((i) => ['DEAD_STOCK', 'CRITICAL_NEAR', 'WARNING'].includes(i.status));
      const riskCount = riskItems.length;
      const riskCost = riskItems.reduce((sum, i) => sum + i.costPrice * i.quantity, 0);
      const topRiskItem = [...catItems].sort((a, b) => b.riskScore - a.riskScore)[0];

      return {
        category: cat,
        count: catItems.length,
        totalQty,
        totalCost,
        totalSelling,
        avgStorageDays,
        riskCount,
        riskCost,
        topRiskItem,
      };
    }).sort((a, b) => b.riskCost - a.riskCost);
  }, [items]);

  // 카테고리 차트용 색상
  const CATEGORY_COLORS = ['#0F4C3A', '#9E7C3B', '#D97706', '#2563EB', '#7C3AED', '#DC2626', '#059669'];

  // 더현대 서울 과거 할인율별 판매 반응도 곡선
  const elasticityData = [
    { discount: '0%', salesRate: 12, netMargin: 58 },
    { discount: '10%', salesRate: 28, netMargin: 48 },
    { discount: '15%', salesRate: 54, netMargin: 45 },
    { discount: '20%', salesRate: 68, netMargin: 38 },
    { discount: '30%', salesRate: 85, netMargin: 24 },
    { discount: '40%', salesRate: 94, netMargin: 12 },
    { discount: '50%', salesRate: 98, netMargin: 2 },
  ];

  // 더현대 서울 AI 도입 전 vs 후 월별 폐기 손실 절감 리포트
  const disposalSavedData = [
    { month: '3월', beforeAI: 4800, afterAI: 1200 },
    { month: '4월', beforeAI: 5200, afterAI: 950 },
    { month: '5월', beforeAI: 4100, afterAI: 800 },
    { month: '6월', beforeAI: 6300, afterAI: 1100 },
    { month: '7월', beforeAI: 5800, afterAI: 720 },
  ];

  // 더현대 서울 층별 직매입 재고 위험도 분포
  const floorAnalytics = [
    { store: '더현대 서울 2F (여성패션)', safeRatio: 65, cautionRatio: 18, criticalRatio: 17, totalCost: '4.8억원' },
    { store: '더현대 서울 3F (남성/잡화)', safeRatio: 72, cautionRatio: 15, criticalRatio: 13, totalCost: '5.2억원' },
    { store: '더현대 서울 B1 (식품관)', safeRatio: 58, cautionRatio: 22, criticalRatio: 20, totalCost: '2.9억원' },
    { store: '더현대 서울 1F (뷰티/리빙)', safeRatio: 60, cautionRatio: 24, criticalRatio: 16, totalCost: '2.1억원' },
  ];

  // AI 가중치 반응 모델 데이터 (유사 상품 25%, 동일 상품 65%, 대분류 10%)
  const weightModelData = [
    { name: '동일 상품 이력', weight: 65, fill: '#0F4C3A', desc: '동일 코드/상품의 과거 3년 할인가 판매 반응' },
    { name: '유사 카테고리/키워드', weight: 25, fill: '#9E7C3B', desc: '프랑크소시지 ↔ 천하장사, 오크소파 ↔ 가죽소파 등 유사 세부 키워드' },
    { name: '대분류 시즌 트렌드', weight: 10, fill: '#64748b', desc: '전관 카테고리 거시 수요 변화 및 기상/시즌 데이터' },
  ];

  return (
    <AppLayout>
      <div className="space-y-6 pb-20">
        {/* Banner */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#0F4C3A] uppercase tracking-wider mb-1">
              <BarChart3 className="w-4 h-4" />
              <span>The Hyundai Seoul Inventory Analytics</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">더현대 서울 재고 건강도 & 세부 카테고리 통계 리포트</h1>
            <p className="text-xs text-slate-500 mt-1">
              카테고리별 재고 자산 금액, 평균 보관일수, 위험 비중 및 AI 가중치 반응 추론 지표를 세부적으로 관제합니다.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-right">
              <p className="text-[10px] text-slate-500 font-medium">전사 건강도 지수</p>
              <p className="text-xl font-bold text-[#0F4C3A] tabular-nums">78.4점 / 100점</p>
            </div>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
            <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
              <span>더현대 서울 누적 회피 폐기 손실</span>
              <DollarSign className="w-4 h-4 text-emerald-600" />
            </div>
            <p className="text-2xl font-bold text-emerald-700 tabular-nums">₩2.44억원</p>
            <p className="text-[11px] text-slate-400">AI 순마진 추천 도입 후 절감 총액</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
            <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
              <span>평균 재고 회전일수</span>
              <Clock className="w-4 h-4 text-[#9E7C3B]" />
            </div>
            <p className="text-2xl font-bold text-slate-900 tabular-nums">28.5일</p>
            <p className="text-[11px] text-emerald-600 font-medium">이전 대비 -6.2일 소진 단축</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-1">
            <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
              <span>AI 최적 마진 달성률</span>
              <TrendingUp className="w-4 h-4 text-[#0F4C3A]" />
            </div>
            <p className="text-2xl font-bold text-slate-900 tabular-nums">91.2%</p>
            <p className="text-[11px] text-slate-400">시나리오 A 최적 피크점 적중률</p>
          </div>
        </div>

        {/* NEW: Category Detailed Inventory Asset Breakdown (카테고리별 재고 금액 & 보관일수 상세 차트) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart A: Category Inventory Cost Breakdown */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <PieChartIcon className="w-4 h-4 text-[#0F4C3A]" />
                  <span>더현대 서울 카테고리별 재고 자산 금액 (원가 기준)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">카테고리별 보유 재고 원가 금액 비교 (단위: 만원)</p>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryStats.map((c) => ({ name: c.category, cost: Math.round(c.totalCost / 10000) }))} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} unit="만" />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', fontSize: '12px' }} />
                  <Bar dataKey="cost" name="재고 평가원가(만원)" radius={[4, 4, 0, 0]}>
                    {categoryStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Chart B: Average Storage Days by Category */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#9E7C3B]" />
                  <span>카테고리별 평균 보관일수 (적체 위험도)</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">보관일수가 길수록 이월 감가상각 위험 고조 (단위: 일)</p>
              </div>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryStats.map((c) => ({ name: c.category, days: c.avgStorageDays }))} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} unit="일" />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', fontSize: '12px' }} />
                  <Bar dataKey="days" name="평균 보관일수(일)" fill="#9E7C3B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* NEW: Category Detailed Inventory Breakdown Table */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#0F4C3A]" />
                <span>더현대 서울 카테고리별 세부 재고 건강도 분석 데이터</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">각 카테고리별 품목수, 수량, 원가/판매가 금액, 위험 품목 비중 드릴다운</p>
            </div>
          </div>

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[1000px] table-fixed">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-bold text-slate-600 border-b border-slate-200 uppercase tracking-wider">
                  <th className="py-3 px-4 w-32 whitespace-nowrap">카테고리명</th>
                  <th className="py-3 px-4 w-24 text-right whitespace-nowrap">품목 수</th>
                  <th className="py-3 px-4 w-28 text-right whitespace-nowrap">총 재고수량</th>
                  <th className="py-3 px-4 w-36 text-right whitespace-nowrap">총 평가원가</th>
                  <th className="py-3 px-4 w-36 text-right whitespace-nowrap">총 정상판매가</th>
                  <th className="py-3 px-4 w-28 text-center whitespace-nowrap">평균 보관일수</th>
                  <th className="py-3 px-4 w-28 text-center whitespace-nowrap">위험 품목 수</th>
                  <th className="py-3 px-4 min-w-[220px]">최고 위험 관리 품목</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {categoryStats.map((c) => (
                  <tr key={c.category} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900 whitespace-nowrap">{c.category}</td>
                    <td className="py-3.5 px-4 text-right text-slate-700 font-semibold tabular-nums whitespace-nowrap">{c.count}개</td>
                    <td className="py-3.5 px-4 text-right text-slate-900 font-bold tabular-nums whitespace-nowrap">{c.totalQty.toLocaleString()}개</td>
                    <td className="py-3.5 px-4 text-right font-mono text-slate-700 tabular-nums whitespace-nowrap">
                      ₩{(c.totalCost / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono text-[#0F4C3A] font-bold tabular-nums whitespace-nowrap">
                      ₩{(c.totalSelling / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 0 })}만원
                    </td>
                    <td className="py-3.5 px-4 text-center text-slate-700 font-semibold tabular-nums whitespace-nowrap">{c.avgStorageDays}일</td>
                    <td className="py-3.5 px-4 text-center whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-100 text-red-800 border border-red-200">
                        {c.riskCount}개 감지
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {c.topRiskItem ? (
                        <p className="font-semibold text-slate-800 truncate max-w-[200px]" title={c.topRiskItem.name}>
                          [{c.topRiskItem.code}] {c.topRiskItem.name}
                        </p>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI Weight-based Elasticity Benchmark Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#9E7C3B]" />
                <span>AI 과거 판매 반응 및 키워드/유사 상품 가중치 참조 모델 (Weight Elasticity Model)</span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                동일 상품이 없거나 표본이 부족해도 유사 키워드·카테고리 상품 반응을 25% 가중치로 보정하여 최적 할인율을 추정합니다.
              </p>
            </div>
            <span className="px-2.5 py-1 bg-emerald-50 text-[#0F4C3A] text-xs font-bold rounded-lg border border-emerald-200">
              가중 모델 파이프라인
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {weightModelData.map((w) => (
              <div key={w.name} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                  <span>{w.name}</span>
                  <span className="text-base font-extrabold tabular-nums" style={{ color: w.fill }}>
                    {w.weight}% 반영
                  </span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${w.weight}%`, backgroundColor: w.fill }} />
                </div>
                <p className="text-[11px] text-slate-500 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-emerald-50/50 border border-emerald-200/80 rounded-xl space-y-2 text-xs text-slate-700">
            <p className="font-bold text-[#0F4C3A] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>실제 가중치 참조 작동 사례:</span>
            </p>
            <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-600">
              <li>
                <span className="font-bold text-slate-900">[B1 식품관] 프랑크 소시지 재고 시뮬레이션:</span> 동일 상품 데이터(65%) + 천하장사/후랑크 소시지 동종 가공육 키워드 데이터(25%) + 식품관 전체 할인율 반응(10%) 동시 보정
              </li>
              <li>
                <span className="font-bold text-slate-900">[1F 리빙] 파인 오크 디퍼 세트:</span> 동일 제품 이력(65%) + 이탈리안 가죽 소파/우드 리빙 수납장 연관 키워드 반응(25%) + 이월 리빙 트렌드(10%) 동시 반영
              </li>
            </ul>
          </div>
        </div>

        {/* Elasticity & Disposal Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">할인율별 과거 판매 반응 곡선 (Elasticity Curve)</h3>
              <p className="text-xs text-slate-500 mt-0.5">더현대 서울 직매입 재고의 할인율 상승에 따른 소진 전환율과 순마진율 변화</p>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={elasticityData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="discount" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} unit="%" />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Line type="monotone" dataKey="salesRate" name="예상 소진 전환율(%)" stroke="#0F4C3A" strokeWidth={2.5} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="netMargin" name="순마진율(%)" stroke="#9E7C3B" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm">더현대 서울 AI 도입 전 vs 후 월별 폐기 손실 비교</h3>
              <p className="text-xs text-slate-500 mt-0.5">단위: 만원 (선제적 전략 적용으로 폐기비용 급감)</p>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={disposalSavedData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', borderRadius: '8px', fontSize: '12px' }} />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="beforeAI" name="기존 폐기 손실" fill="#f87171" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="afterAI" name="AI 도입 후 손실" fill="#0F4C3A" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
