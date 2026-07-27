'use client';

import { useMemo, useState } from 'react';
import { glossary, sources } from '@/lib/content';

const categories = ['전체', '기본 개념', '재무 기준', '재고·물류', '마케팅·고객', 'AI·운영'] as const;

export function GlossaryBrowser() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(typeof categories)[number]>('전체');
  const terms = useMemo(() => glossary.filter((term) => {
    const matchesCategory = category === '전체' || term.category === category;
    const haystack = `${term.term} ${term.short} ${term.definition}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [category, query]);

  return <div className="glossary-browser"><label htmlFor="term-search" className="sr-only">용어 검색</label><input id="term-search" className="search-box" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="예: 증분이익, 기준선, 회피비용, D-day" /><div className="filter-row">{categories.map((item) => <button className={`filter-button ${category === item ? 'active' : ''}`} key={item} type="button" onClick={() => setCategory(item)}>{item}</button>)}</div><div className="term-list">{terms.map((term) => <article className="term-entry" id={term.id} key={term.id}><span className="eyebrow">{term.category}</span><h2>{term.term}</h2><p className="term-short">{term.short}</p><p>{term.definition}</p>{term.formula && <code>{term.formula}</code>}<p><strong>예시</strong> · {term.example}</p><div className="term-related">{term.related.map((related) => <span key={related}>{glossary.find((item) => item.id === related)?.term ?? related}</span>)}</div><div className="term-source-list"><span>근거 위치</span>{term.sourceIds.map((sourceId) => { const source = sources.find((item) => item.id === sourceId); return source ? <a key={source.id} href={source.url?.startsWith('http') ? source.url : `/sources#${source.id}`} target={source.url?.startsWith('http') ? '_blank' : undefined} rel={source.url?.startsWith('http') ? 'noreferrer' : undefined}><b>{source.title}</b> · {source.location} ↗</a> : null; })}</div></article>)}</div>{terms.length === 0 && <div className="callout"><strong>검색 결과가 없습니다.</strong><p>다른 키워드나 전체 카테고리를 선택해 보세요.</p></div>}</div>;
}
