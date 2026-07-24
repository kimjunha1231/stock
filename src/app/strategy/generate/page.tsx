'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AppLayout } from '@/components/layout/app-layout';
import { MOCK_INVENTORY_ITEMS } from '@/lib/mock-data';
import { Sparkles, CheckCircle2, ArrowRight, Loader2, Database, Calculator, Layers, ShieldCheck } from 'lucide-react';

function StrategyGenerateContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const rawItems = searchParams.get('items');
  const selectedIds = rawItems ? rawItems.split(',') : [];

  const targetProducts = MOCK_INVENTORY_ITEMS.filter((item) => selectedIds.includes(item.id));

  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    const timer1 = setTimeout(() => { setStep(2); setProgress(50); }, 1000);
    const timer2 = setTimeout(() => { setStep(3); setProgress(75); }, 2200);
    const timer3 = setTimeout(() => { setStep(4); setProgress(100); }, 3400);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs text-center space-y-2">
        <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#0F4C3A] mx-auto flex items-center justify-center font-bold shadow-xs">
          <Sparkles className="w-6 h-6 text-[#9E7C3B]" />
        </div>
        <h1 className="text-2xl font-bold text-slate-900">AI 증분 기여현금이익 최적화 파이프라인</h1>
        <p className="text-xs text-slate-500">
          {targetProducts.length > 0
            ? `선택된 ${targetProducts.length}개 위험 재고 품목에 대해 과거 3년 반응 데이터와 폐기 회피 비용을 시뮬레이션합니다.`
            : '전 계열사 직매입 악성 재고에 대해 순이익 극대화 시나리오를 계산 중입니다.'}
        </p>
      </div>

      {targetProducts.length > 0 && (
        <div className="bg-emerald-50/70 border border-emerald-200 p-4 rounded-xl space-y-2">
          <p className="text-xs font-bold text-[#0F4C3A]">전략 수립 대상 수신 품목 ({targetProducts.length}개)</p>
          <div className="flex flex-wrap gap-2">
            {targetProducts.map((p) => (
              <span key={p.id} className="px-2.5 py-1 bg-white border border-emerald-300 text-slate-800 rounded-lg text-xs font-semibold shadow-2xs">
                [{p.company}] {p.name}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
        <div className="flex justify-between text-xs font-bold text-slate-700">
          <span>알고리즘 연산 진행률</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#0F4C3A] transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className={`p-4 rounded-xl border transition-all ${step >= 1 ? 'bg-white border-[#0F4C3A] shadow-md' : 'bg-slate-50 border-slate-200'}`}>
          <Database className="w-5 h-5 text-[#0F4C3A] mb-2" />
          <p className="text-xs font-bold text-slate-900">1단계: 데이터 파싱</p>
          <p className="text-[11px] text-slate-500 mt-1">계열사 원가, 보관비, 유통기한 수집</p>
          {step === 1 && <Loader2 className="w-4 h-4 text-[#0F4C3A] animate-spin mt-2" />}
          {step > 1 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-2" />}
        </div>

        <div className={`p-4 rounded-xl border transition-all ${step >= 2 ? 'bg-white border-[#0F4C3A] shadow-md' : 'bg-slate-50 border-slate-200'}`}>
          <Calculator className="w-5 h-5 text-[#0F4C3A] mb-2" />
          <p className="text-xs font-bold text-slate-900">2단계: 마진 시뮬레이션</p>
          <p className="text-[11px] text-slate-500 mt-1">할인율별 순기여이익 곡선 추정</p>
          {step === 2 && <Loader2 className="w-4 h-4 text-[#0F4C3A] animate-spin mt-2" />}
          {step > 2 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-2" />}
        </div>

        <div className={`p-4 rounded-xl border transition-all ${step >= 3 ? 'bg-white border-[#0F4C3A] shadow-md' : 'bg-slate-50 border-slate-200'}`}>
          <Layers className="w-5 h-5 text-[#0F4C3A] mb-2" />
          <p className="text-xs font-bold text-slate-900">3단계: 번들 시너지 탐색</p>
          <p className="text-[11px] text-slate-500 mt-1">보완 카테고리 교차 번들 구성</p>
          {step === 3 && <Loader2 className="w-4 h-4 text-[#0F4C3A] animate-spin mt-2" />}
          {step > 3 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-2" />}
        </div>

        <div className={`p-4 rounded-xl border transition-all ${step >= 4 ? 'bg-white border-[#0F4C3A] shadow-md' : 'bg-slate-50 border-slate-200'}`}>
          <ShieldCheck className="w-5 h-5 text-[#0F4C3A] mb-2" />
          <p className="text-xs font-bold text-slate-900">4단계: 전략 확정</p>
          <p className="text-[11px] text-slate-500 mt-1">Fallback 대응 트리 구축</p>
          {step === 4 && <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-2" />}
        </div>
      </div>

      {step === 4 && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-4 animate-in fade-in zoom-in-95">
          <h3 className="font-bold text-slate-900 text-base">AI 시뮬레이션 및 최적 시나리오 생성이 완료되었습니다!</h3>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => router.push('/strategy/CASE-2026-001')}
              className="flex items-center gap-2 px-6 py-3 bg-[#0F4C3A] hover:bg-[#0B392B] text-white text-xs font-bold rounded-xl shadow-md transition-all"
            >
              <span>수립된 시뮬레이션 상세 비교 보기</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function StrategyGeneratePage() {
  return (
    <AppLayout>
      <Suspense fallback={<div className="p-8 text-center text-xs text-slate-500">파이프라인 로딩 중...</div>}>
        <StrategyGenerateContent />
      </Suspense>
    </AppLayout>
  );
}
