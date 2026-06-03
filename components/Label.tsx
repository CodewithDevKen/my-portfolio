interface Props {
  children: React.ReactNode;
  className?: string;
  bright?: boolean;
}

export default function Label({ children, className = '', bright = false }: Props) {
  return (
    <div
      className={`font-mono text-[12px] uppercase tracking-[2.4px] ${bright ? 'text-steel-light' : 'text-amber-dim'} ${className}`}
    >
      {children}
    </div>
  );
}
