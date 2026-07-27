import type { SourceItem } from '@/lib/content';

export function SourceNote({ source }: { source: SourceItem }) {
  const content = <><span className="source-kind">{source.kind}</span><strong>{source.title}</strong><span>{source.location}</span></>;
  return source.url?.startsWith('http') ? <a className="source-note" href={source.url} target="_blank" rel="noreferrer">{content}<span aria-hidden="true">↗</span></a> : <a className="source-note" href={source.url ?? '/sources'}>{content}<span aria-hidden="true">→</span></a>;
}
