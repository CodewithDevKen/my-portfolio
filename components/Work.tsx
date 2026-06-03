'use client';
import { useState } from 'react';
import SectionHead from './SectionHead';
import { KENJI } from '@/lib/data';

function WorkCard({ p, i }: { p: typeof KENJI.projects[0]; i: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="work-card rounded-[4px] overflow-hidden cursor-pointer"
      style={{
        background: 'var(--surface)',
        border: `1px solid ${hovered ? 'var(--amber)' : 'var(--line)'}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image area */}
      <div className="relative overflow-hidden" style={{ height: 248 }}>
        <div className="img-zoom absolute inset-0 flex items-center justify-center" style={{ background: 'var(--card-image-bg)' }}>
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'repeating-linear-gradient(135deg, var(--card-stripe) 0 1px, transparent 1px 11px)' }}
          />
          <div className="relative font-mono text-[11px] tracking-[0.3px] text-muted px-2 py-1 rounded-[2px]" style={{ background: 'var(--badge-amber-bg)' }}>
            {p.slot}
          </div>
        </div>

        {/* Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="font-mono text-[11px] tracking-[1px] text-cream/80 px-2.5 py-1.5 rounded-[2px]" style={{ background: 'var(--caption-bg)' }}>
            {String(i + 1).padStart(2, '0')} · {p.kind}
          </span>
        </div>

        {/* Hover scrim */}
        <div
          className="card-overlay absolute inset-0 flex items-end p-[18px] z-10"
          style={{ background: 'linear-gradient(0deg, rgba(0,0,0,0.65), transparent 52%)' }}
        >
          <span className="font-mono text-[12.5px] tracking-[1.5px]" style={{ color: '#E2DCD0' }}>
            OPEN CASE STUDY →
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 pt-[22px] pb-[26px]">
        <div className="flex justify-between items-baseline gap-4">
          <h3 className="font-display font-normal text-[clamp(22px,2.5vw,34px)] text-cream leading-tight">
            {p.name}
          </h3>
          <span className="font-mono text-[11.5px] shrink-0" style={{ color: p.status === 'Live' ? 'var(--sage)' : 'var(--amber)' }}>
            ● {p.status}
          </span>
        </div>

        <p className="font-text text-[16.5px] leading-[1.55] text-muted mt-3 mb-[18px]">{p.detail}</p>

        <div className="flex flex-wrap gap-[7px] mb-[18px]">
          {p.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] text-muted rounded-[2px] px-[9px] py-1" style={{ background: 'var(--tag-bg)', border: '1px solid var(--tag-border)' }}>
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-7 pt-4" style={{ borderTop: '1px solid var(--line)' }}>
          {p.metrics.map(([k, v]) => (
            <div key={k}>
              <div className="font-mono text-[10px] tracking-[1.5px] text-amber uppercase">{k}</div>
              <div className="font-text text-[15px] text-cream mt-[3px]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-[72px] pt-[78px]">
      <div className="max-w-content mx-auto">
        <SectionHead n="01" title="Selected Work" note="Two I'm proud of — more on request." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-9">
          {KENJI.projects.map((p, i) => <WorkCard key={p.id} p={p} i={i} />)}
        </div>
      </div>
    </section>
  );
}
