'use client';
import { useRef } from 'react';
import Reveal from './Reveal';
import Label from './Label';
import CourtBookLogo from './CourtBookLogo';
import { KENJI } from '@/lib/data';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  }

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden px-6 md:px-[72px] pt-[76px] pb-[60px]"
      style={{ '--mx': '28%', '--my': '32%' } as React.CSSProperties}
    >
      {/* Spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(320px 320px at var(--mx) var(--my), var(--spotlight), transparent 70%)' }}
      />

      <div className="relative max-w-content mx-auto grid grid-cols-1 lg:grid-cols-[1fr_372px] gap-[60px] items-center">
        {/* Left: text */}
        <div className="flex flex-col">
          <Reveal>
            <Label>{KENJI.tagline}</Label>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="font-display font-normal leading-[0.9] tracking-[-2px] text-cream mt-[22px]"
              style={{ fontSize: 'clamp(64px, 10vw, 132px)' }}
            >
              {KENJI.first}
              <br />
              <span className="italic text-amber" style={{ marginLeft: 'clamp(16px, 4vw, 56px)' }}>
                {KENJI.last}
              </span>
            </h1>
          </Reveal>

          <Reveal delay={280}>
            <p className="font-text text-[clamp(16px,1.7vw,22px)] leading-[1.58] text-muted max-w-[500px] mt-[34px]">
              {KENJI.bio}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-3.5 mt-[38px]">
              <a href="#work" className="btn-primary">VIEW SELECTED WORK →</a>
              <a href={`mailto:${KENJI.email}`} className="btn-secondary">GET IN TOUCH</a>
            </div>
          </Reveal>
        </div>

        {/* Right: CourtBookPH logo card */}
        <Reveal delay={220} y={26} className="hidden lg:block">
          <div
            className="relative border rounded-[3px] p-[9px] bg-surface flex flex-col border-[var(--line)]"
            style={{ height: 440 }}
          >
            <div
              className="relative flex-1 rounded-[2px] flex items-center justify-center overflow-hidden"
              style={{
                background: 'radial-gradient(ellipse at 50% 40%, var(--spotlight) 0%, transparent 70%), var(--surface2)',
                backgroundImage: `repeating-linear-gradient(135deg, var(--card-stripe) 0 1px, transparent 1px 12px)`,
              }}
            >
              <div className="w-[200px] h-[230px]">
                <CourtBookLogo />
              </div>
            </div>

            {/* Caption chip */}
            <div
              className="absolute bottom-[22px] left-[22px] right-[22px] rounded-[2px] px-4 py-3"
              style={{ background: 'var(--caption-bg)', border: '1px solid var(--badge-amber-bg)' }}
            >
              <div className="font-mono text-[10.5px] tracking-[2px] text-steel-light uppercase">
                Currently building
              </div>
              <div className="font-text text-[16px] mt-[3px]" style={{ color: '#E2DCD0' }}>
                CourtBookPH — court booking for the Philippines.
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
