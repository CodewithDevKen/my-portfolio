'use client';
import { useEffect, useState } from 'react';

const TZ = 'Asia/Manila';

function polar(cx: number, cy: number, r: number, aDeg: number): [number, number] {
  const a = (aDeg * Math.PI) / 180;
  return [cx + r * Math.sin(a), cy - r * Math.cos(a)];
}

function getParts(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: TZ, hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false,
  }).formatToParts(date);
  const get = (t: Intl.DateTimeFormatPartTypes) => Number(parts.find((p) => p.type === t)?.value ?? 0);
  return { h: get('hour') % 12, m: get('minute'), s: get('second') };
}

function fmt(date: Date, opts: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('en-US', { timeZone: TZ, ...opts }).format(date);
}

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const cx = 70, cy = 70;

  if (!now) {
    return (
      <div className="flex flex-col items-center gap-4">
        <div className="w-[140px] h-[140px] rounded-full border-2 border-steel/40" style={{ background: 'var(--now-panel)' }} />
        <div>
          <div className="font-mono text-[26px] tabular-nums tracking-[1px]" style={{ color: '#E2DCD0' }}>--:--:--</div>
          <div className="font-mono text-[11.5px] tracking-[1px] mt-1 text-center uppercase" style={{ color: '#A4C0D8' }}>
            Wednesday · Manila · GMT+8
          </div>
        </div>
      </div>
    );
  }

  const { h, m, s } = getParts(now);
  const [hx, hy] = polar(cx, cy, 34, (h + m / 60) * 30);
  const [mx, my] = polar(cx, cy, 48, (m + s / 60) * 6);
  const [sx, sy] = polar(cx, cy, 52, s * 6);
  const time = fmt(now, { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const day  = fmt(now, { weekday: 'long' });

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Clock always on dark background regardless of page theme */}
      <svg width="140" height="140" viewBox="0 0 140 140" aria-label="Analog clock Manila time">
        <circle cx={cx} cy={cy} r="62" fill="var(--now-panel)" stroke="var(--steel)" strokeWidth="2" />
        <circle cx={cx} cy={cy} r="56" fill="none" stroke="rgba(200,175,120,0.10)" strokeWidth="1" />
        {Array.from({ length: 12 }).map((_, i) => {
          const [x1, y1] = polar(cx, cy, 54, i * 30);
          const [x2, y2] = polar(cx, cy, i % 3 === 0 ? 46 : 50, i * 30);
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E2DCD0" strokeWidth={i % 3 === 0 ? 2 : 1} />;
        })}
        <line x1={cx} y1={cy} x2={hx} y2={hy} stroke="#E2DCD0" strokeWidth="3.4" strokeLinecap="round" />
        <line x1={cx} y1={cy} x2={mx} y2={my} stroke="#E2DCD0" strokeWidth="2.4" strokeLinecap="round" />
        <line x1={cx} y1={cy} x2={sx} y2={sy} stroke="var(--amber)" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx={cx} cy={cy} r="4" fill="#E2DCD0" />
      </svg>
      <div className="text-center">
        <div className="font-mono text-[26px] tabular-nums tracking-[1px]" style={{ color: '#E2DCD0' }}>{time}</div>
        <div className="font-mono text-[11.5px] tracking-[1px] mt-1 uppercase" style={{ color: '#A4C0D8' }}>
          {day.toUpperCase()} · MANILA · GMT+8
        </div>
      </div>
    </div>
  );
}
