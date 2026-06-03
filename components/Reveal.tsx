'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, y = 16, className = '' }: Props) {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setOn(true), 90 + delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`reveal${on ? ' on' : ''} ${className}`}
      style={{ '--reveal-y': `${y}px` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
