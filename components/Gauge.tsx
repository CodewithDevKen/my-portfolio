'use client';
import { useEffect, useState } from 'react';

function polar(cx: number, cy: number, r: number, aDeg: number): [number, number] {
  const a = (aDeg * Math.PI) / 180;
  return [cx + r * Math.sin(a), cy - r * Math.cos(a)];
}

function arc(cx: number, cy: number, r: number, a0: number, a1: number) {
  const [x0, y0] = polar(cx, cy, r, a0);
  const [x1, y1] = polar(cx, cy, r, a1);
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  return `M ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1}`;
}

interface Props { label: string; value: number; delay?: number; }

export default function Gauge({ label, value, delay = 0 }: Props) {
  const [v, setV] = useState(0);

  useEffect(() => {
    const MS = 1200;
    let raf: number;
    let start: number | null = null;
    const timeout = setTimeout(() => {
      const step = (t: number) => {
        if (start === null) start = t;
        const p = Math.min(1, (t - start) / MS);
        setV(value * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, delay);
    return () => { clearTimeout(timeout); cancelAnimationFrame(raf); };
  }, [value, delay]);

  const cx = 70, cy = 70, r = 52, A0 = -125, A1 = 125;
  const needle = A0 + (v / 100) * (A1 - A0);
  const [nx, ny] = polar(cx, cy, r - 8, needle);
  const fillColor = value >= 85 ? 'var(--amber)' : 'var(--steel)';

  return (
    <div className="flex flex-col items-center">
      <svg width="140" height="126" viewBox="0 0 140 126" aria-label={`${label}: ${value}`}>
        <path d={arc(cx, cy, r, A0, A1)} fill="none" stroke="var(--gauge-track)" strokeWidth="7" strokeLinecap="round" />
        <path d={arc(cx, cy, r, A0, needle)} fill="none" stroke={fillColor} strokeWidth="7" strokeLinecap="round" />
        {[0, 25, 50, 75, 100].map((t) => {
          const ta = A0 + (t / 100) * (A1 - A0);
          const [x1, y1] = polar(cx, cy, r - 13, ta);
          const [x2, y2] = polar(cx, cy, r - 19, ta);
          return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gauge-tick)" strokeWidth="1.5" />;
        })}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="var(--cream)" strokeWidth="2.4" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="6" fill="var(--cream)" />
        <circle cx={cx} cy={cy} r="2.5" fill="var(--bg)" />
        <text x={cx} y={108} textAnchor="middle" fontFamily="var(--font-mono)" fontSize="17" fill={value >= 85 ? 'var(--amber)' : 'var(--cream)'}>
          {Math.round(v)}
        </text>
      </svg>
      <div className="font-mono text-[11.5px] tracking-[0.4px] text-muted text-center -mt-0.5">{label}</div>
    </div>
  );
}
