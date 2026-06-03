import SectionHead from './SectionHead';
import Clock from './Clock';
import { KENJI } from '@/lib/data';

const ROWS: [string, keyof typeof KENJI.now][] = [
  ['On the bench',     'building'],
  ['In the cup',       'cup'],
  ['On the turntable', 'sound'],
  ['In the garage',    'tinkering'],
  ['Reading',          'reading'],
];

export default function Now() {
  return (
    <section id="now" className="px-6 md:px-[72px] pt-[88px]">
      <div className="max-w-content mx-auto">
        <SectionHead n="03" title="The Now Panel" note="Live from the workshop." />

        {/* Panel — always dark for contrast in both themes */}
        <div
          className="mt-9 rounded-[8px] p-[36px] grid grid-cols-1 md:grid-cols-[288px_1fr] gap-9 items-center"
          style={{ background: 'var(--now-panel)' }}
        >
          {/* Clock column */}
          <div
            className="flex flex-col items-center gap-4 pb-6 md:pb-0 md:pr-7 border-b md:border-b-0 md:border-r"
            style={{ borderColor: 'var(--now-divider)' }}
          >
            <Clock />
          </div>

          {/* Ledger rows */}
          <div style={{ borderTop: '1px solid var(--now-divider)' }}>
            {ROWS.map(([label, key]) => (
              <div
                key={key}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[180px_1fr] gap-4 md:gap-[22px] py-[15px] items-baseline"
                style={{ borderBottom: '1px solid var(--now-row)' }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-[6px] h-[6px] rounded-full shrink-0" style={{ background: '#4E9660' }} />
                  <span className="font-mono text-[10.5px] tracking-[2px] uppercase" style={{ color: '#A4C0D8' }}>
                    {label}
                  </span>
                </div>
                <div className="font-text text-[clamp(15px,1.5vw,21px)] leading-[1.3]" style={{ color: '#E2DCD0' }}>
                  {KENJI.now[key]}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
