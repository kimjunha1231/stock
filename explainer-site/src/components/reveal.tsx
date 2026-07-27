export function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export function Stagger({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`stagger ${className}`}>{children}</div>;
}
