'use client';

import Link from 'next/link';
import { useState } from 'react';
import { navItems } from '@/lib/content';

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-frame">
      <header className="site-header">
        <Link href="/" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">I</span>
          <span><strong>InventoryOS</strong><small>Decision explainer</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setMenuOpen((value) => !value)}>
          <span /> <span />
        </button>
        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="사이트 메뉴">
          {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
          <Link className="nav-cta" href="/prd" onClick={() => setMenuOpen(false)}>서비스 구조 보기</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div><span className="brand-mark small">I</span><strong>InventoryOS</strong></div>
        <p>3개 계열사의 담당자가 같은 기준으로 비교하고, 각자의 상품 특성에 맞게 결정합니다.</p>
        <Link href="/glossary">용어 사전 열기 →</Link>
      </footer>
    </div>
  );
}
