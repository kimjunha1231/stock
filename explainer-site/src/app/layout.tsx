import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'InventoryOS — 재고 의사결정 설명서',
  description: '현대백화점 점포/부서가 자사 재고를 스스로 최적화하도록 돕는 AI 의사결정 플랫폼의 작동 방식을 설명합니다.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><SiteShell>{children}</SiteShell></body></html>;
}
