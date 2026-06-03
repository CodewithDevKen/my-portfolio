'use client';
import { useState } from 'react';
import NavClock from './NavClock';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'Work',    href: '#work' },
  { label: 'Skills',  href: '#skills' },
  { label: 'Now',     href: '#now' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-[var(--line)]"
        aria-label="Main navigation"
      >
        <div className="max-w-content mx-auto px-6 md:px-[72px] flex items-center justify-between h-[68px] gap-4">
          {/* Monogram + name */}
          <div className="flex items-center gap-3.5 shrink-0">
            <div className="w-[38px] h-[38px] rounded-full border-[1.5px] border-steel flex items-center justify-center font-display text-[18px] text-cream shrink-0">
              K
            </div>
            <span className="font-mono text-[12px] tracking-[2.5px] text-muted uppercase hidden sm:block">
              Kenji Mendoza
            </span>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 font-mono text-[12.5px] tracking-[1px] text-muted">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="hover:text-cream transition-colors duration-150">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right: clock + theme toggle + hamburger */}
          <div className="flex items-center gap-2.5">
            <NavClock />
            <ThemeToggle />
            <button
              className="md:hidden flex flex-col gap-[5px] p-1 ml-1"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span className={`block w-5 h-[1.5px] bg-cream transition-transform duration-200 ${open ? 'translate-y-[6.5px] rotate-45' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-cream transition-opacity duration-200 ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-[1.5px] bg-cream transition-transform duration-200 ${open ? '-translate-y-[6.5px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu — full-screen overlay below nav */}
      <div
        className={`md:hidden fixed inset-0 top-[68px] z-40 flex flex-col bg-bg transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Nav links — large, centred */}
        <ul className="flex flex-col items-center justify-center flex-1 gap-2">
          {links.map(({ label, href }) => (
            <li key={label} className="w-full text-center">
              <a
                href={href}
                className="block px-8 py-5 font-display text-[clamp(32px,8vw,52px)] text-cream hover:text-amber transition-colors leading-none"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Bottom bar */}
        <div className="border-t border-[var(--line)] px-8 py-6 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[2px] text-muted uppercase">
            Kenji Mendoza · Manila
          </span>
          <NavClock />
        </div>
      </div>
    </>
  );
}
