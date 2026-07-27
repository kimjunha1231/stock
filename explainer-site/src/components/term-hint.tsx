'use client';

import Link from 'next/link';
import { useState } from 'react';
import { getTerm } from '@/lib/content';

export function TermHint({ id }: { id: string }) {
  const term = getTerm(id);
  const [open, setOpen] = useState(false);

  if (!term) return null;

  return (
    <span className="term-wrap">
      <button className="term-button" type="button" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
        {term.term}<span aria-hidden="true">ⓘ</span>
      </button>
      {open && (
        <span className="term-popover" role="dialog" aria-label={`${term.term} 설명`}>
          <strong>{term.term}</strong>
          <span>{term.short}</span>
          {term.formula && <code>{term.formula}</code>}
          <Link href={`/glossary#${term.id}`} onClick={() => setOpen(false)}>사전에서 자세히 보기 →</Link>
        </span>
      )}
    </span>
  );
}
