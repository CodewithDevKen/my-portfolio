'use client';
import SectionHead from './SectionHead';
import Gauge from './Gauge';
import Label from './Label';
import { Badge } from '@/components/ui/badge';
import { Zap, Wrench, Code2, Headphones } from 'lucide-react';
import { KENJI, GAUGES } from '@/lib/data';

const ICONS = [Zap, Wrench, Code2, Headphones];

function CareerTimeline() {
  return (
    <div className="mt-2">
      {/* ── Desktop: horizontal Timeline 3 layout ── */}
      <div className="hidden md:block">
        {/* Icon row + connector lines with electric spark */}
        <div className="relative flex items-center">
          {KENJI.career.map((item, i) => {
            const Icon = ICONS[i];
            const isLast = i === KENJI.career.length - 1;
            return (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div
                  className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-all"
                  style={
                    item.current
                      ? { background: 'var(--amber)', color: 'var(--bg)', boxShadow: '0 0 0 4px var(--badge-amber-bg)' }
                      : { background: 'var(--surface2)', color: 'var(--muted)', border: '1px solid var(--line-strong)' }
                  }
                >
                  <Icon size={18} />
                </div>
                {!isLast && (
                  <div
                    className="electric-line flex-1 h-[1px] mx-1"
                    style={{ background: 'var(--line)' }}
                  >
                    <div
                      className="electric-spark"
                      style={{ animationDelay: `${i * 0.7}s` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── 3 separate grids so bars are always in the same row ── */}
        {(() => {
          const cols = `repeat(${KENJI.career.length}, 1fr)`;
          const gap = '24px';
          return (
            <>
              {/* Row 1 — Titles */}
              <div className="grid mt-6" style={{ gridTemplateColumns: cols, gap }}>
                {KENJI.career.map((item, i) => (
                  <div key={i} className="pr-4">
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h4 className="font-display font-normal text-[18px] text-cream leading-snug">
                        {item.role}
                      </h4>
                      {item.current && (
                        <Badge
                          className="font-mono text-[9px] tracking-[1.2px] uppercase rounded-[2px] border-0 px-1.5 py-0.5 h-auto"
                          style={{ background: 'var(--badge-amber-bg)', color: 'var(--amber)' }}
                        >
                          Now
                        </Badge>
                      )}
                    </div>
                    <span className="font-text italic text-[15px] text-amber">{item.company}</span>
                  </div>
                ))}
              </div>

              {/* Row 2 — Descriptions */}
              <div className="grid mt-3" style={{ gridTemplateColumns: cols, gap }}>
                {KENJI.career.map((item, i) => (
                  <p key={i} className="font-text text-[13.5px] leading-[1.65] text-muted pr-4">
                    {item.blurb}
                  </p>
                ))}
              </div>

              {/* Row 3 — Bars (always in the same row regardless of text above) */}
              <div className="grid mt-6" style={{ gridTemplateColumns: cols, gap }}>
                {KENJI.career.map((item, i) => (
                  <div key={i} className="pr-4">
                    <div
                      className="h-[3px] rounded-full mb-1.5 w-full overflow-hidden"
                      style={{ background: 'var(--gauge-track)' }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: item.current ? '60%' : '100%',
                          background: item.current
                            ? 'linear-gradient(to right, var(--amber), var(--badge-amber-bg))'
                            : 'var(--line-strong)',
                        }}
                      />
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-mono text-[10px] tracking-[0.5px] text-dim">{item.period}</span>
                      <span className="font-mono text-[9px] tracking-[0.3px] text-dim uppercase">{item.where}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          );
        })()}
      </div>

      {/* ── Mobile: vertical stacked layout ── */}
      <div className="md:hidden flex flex-col gap-0">
        {KENJI.career.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <div key={i} className="relative grid grid-cols-[48px_1fr] gap-4 pb-8 last:pb-0">
              {/* Left: icon + connector */}
              <div className="flex flex-col items-center gap-0 pt-0.5">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-full shrink-0 z-10"
                  style={
                    item.current
                      ? { background: '#C8903A', color: '#0B0C12' }
                      : { background: 'var(--surface2)', color: 'var(--muted)', border: '1px solid var(--line-strong)' }
                  }
                >
                  <Icon size={16} />
                </div>
                {i < KENJI.career.length - 1 && (
                  <div className="flex-1 w-[1px] mt-1" style={{ background: 'var(--line)', minHeight: 24 }} />
                )}
              </div>

              {/* Right: content */}
              <div>
                <div className="flex items-start justify-between gap-2 flex-wrap">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-0.5">
                      <h4 className="font-display font-normal text-[18px] text-cream leading-snug">{item.role}</h4>
                      {item.current && (
                        <Badge
                          className="font-mono text-[9px] tracking-[1.2px] uppercase rounded-[2px] border-0 px-1.5 py-0.5 h-auto"
                          style={{ background: 'var(--badge-amber-bg)', color: 'var(--amber)' }}
                        >
                          Now
                        </Badge>
                      )}
                    </div>
                    <span className="font-text italic text-[15px] text-amber">{item.company}</span>
                  </div>
                  <span className="font-mono text-[11px] text-muted whitespace-nowrap mt-1">{item.period}</span>
                </div>
                <p className="font-text text-[14px] leading-[1.65] text-muted mt-2">{item.blurb}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-[72px] pt-[88px]">
      <div className="max-w-content mx-auto">
        <SectionHead n="02" title="Under the Hood" note="Self-rated, honestly tuned." />

        {/* Instrument dials */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 mt-[38px] bg-surface border border-[var(--line)] rounded-[6px] px-5 py-[34px]">
          {GAUGES.map(([label, value], i) => (
            <Gauge key={label} label={label} value={value} delay={i * 120} />
          ))}
        </div>

        {/* Career timeline */}
        <div className="mt-14">
          <Label className="mb-6">Work History</Label>
          <CareerTimeline />
        </div>
      </div>
    </section>
  );
}
