import { Suspense } from "react";
import SimulateClient from "./simulate-client";

export function generateStaticParams() {
  return [
    { id: "CASE-2026-001" },
    { id: "CASE-2026-002" },
    { id: "OPT-PROFIT-1" },
    { id: "OPT-PROFIT-2" },
    { id: "OPT-PROFIT-3" },
    { id: "OPT-FAST-1" },
    { id: "OPT-FAST-2" },
    { id: "OPT-REV-1" },
    { id: "OPT-REV-2" },
  ];
}

export default function SimulatePage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-slate-500">시뮬레이션 로딩 중...</div>}>
      <SimulateClient />
    </Suspense>
  );
}
