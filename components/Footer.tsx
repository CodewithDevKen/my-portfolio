import Label from './Label';
import { KENJI } from '@/lib/data';

export default function Footer() {
  return (
    <footer id="contact" className="px-6 md:px-[72px] pt-[88px] pb-[64px]">
      <div className="max-w-content mx-auto">
        <div
          className="rounded-[8px] px-[clamp(24px,4vw,58px)] py-[clamp(40px,5vw,56px)] flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
          style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
        >
          {/* Left: headline */}
          <div>
            <Label>Correspondence</Label>
            <h2
              className="font-display font-normal text-cream mt-3.5 leading-[0.98] tracking-[-1px]"
              style={{ fontSize: 'clamp(40px,6vw,68px)' }}
            >
              Build something{' '}
              <span className="italic text-amber">lasting.</span>
            </h2>
          </div>

          {/* Right: links */}
          <div className="flex flex-col gap-3 shrink-0">
            {KENJI.links.map(([key, value]) => {
              const href =
                key === 'Email' ? `mailto:${value}`
                : key === 'GitHub' ? KENJI.github
                : KENJI.linkedin;
              return (
                <a
                  key={key}
                  href={href}
                  target={key !== 'Email' ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex gap-3.5 items-baseline justify-end group"
                >
                  <span className="font-mono text-[10.5px] tracking-[1.5px] text-amber uppercase">{key}</span>
                  <span className="font-text text-[18px] text-cream group-hover:text-amber transition-colors">{value}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center mt-8 pt-6" style={{ borderTop: '1px solid var(--line)' }}>
          <span className="font-mono text-[11px] tracking-[1px] text-dim uppercase">Kenji Mendoza · Manila, PH</span>
          <span className="font-mono text-[11px] tracking-[1px] text-dim">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
