'use client';
import { useEffect, useState } from 'react';

const TZ = 'Asia/Manila';

function fmt(date: Date, opts: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat('en-US', { timeZone: TZ, ...opts }).format(date);
}

export default function NavClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const time = now
    ? fmt(now, { hour: '2-digit', minute: '2-digit', hour12: false })
    : '--:--';

  return (
    <div className="flex items-center gap-2.5 font-mono text-[12px] text-cream border border-[var(--line)] rounded-[20px] px-3 py-1.5 shrink-0">
      <span
        className="w-[7px] h-[7px] rounded-full bg-sage pulse-dot shrink-0"
        style={{ boxShadow: '0 0 0 3px rgba(78,150,96,0.22)' }}
      />
      <span className="whitespace-nowrap">Available · {time} MNL</span>
    </div>
  );
}
