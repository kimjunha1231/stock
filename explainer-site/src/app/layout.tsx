import type { Metadata } from 'next';
import { SiteShell } from '@/components/site-shell';
import './globals.css';

export const metadata: Metadata = {
  title: 'InventoryOS — 재고 의사결정 설명서',
  description: '현대웰니스·더현대트래블·현대리바트·현대그린푸드의 재고와 예약 capacity를 통합해 판단하는 AI 의사결정 플랫폼 설명서입니다.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body><SiteShell>{children}</SiteShell></body></html>;
}
