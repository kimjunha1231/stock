import Image from 'next/image';
import { screenshots } from '@/lib/content';

export function ScreenshotCard({ item, index }: { item: typeof screenshots[number]; index: number }) {
  return (
    <article className="screen-card">
      <div className="screen-meta"><span className="pill">0{index + 1}</span><span>{item.label}</span></div>
      <div className="screen-image-wrap">
        <Image src={item.src} alt={`${item.label} 화면 캡처`} width={1440} height={900} className="screen-image" />
      </div>
      <div className="screen-copy"><h3>{item.title}</h3><p>{item.body}</p></div>
    </article>
  );
}
