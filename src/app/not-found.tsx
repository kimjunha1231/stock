import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] text-slate-800 p-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-[#0F4C3A]">404</h1>
        <p className="text-sm text-slate-600">요청하신 페이지를 찾을 수 없습니다.</p>
        <Link href="/dashboard" className="inline-block px-4 py-2 bg-[#0F4C3A] text-white text-xs font-bold rounded-lg shadow-xs">
          대시보드로 돌아가기
        </Link>
      </div>
    </div>
  );
}
