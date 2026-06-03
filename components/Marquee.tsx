const ITEMS = [
  'Next.js', 'React', 'TypeScript', 'Supabase', 'Prisma',
  'Tailwind', 'PostgreSQL', 'NextAuth', 'React Native', 'Node.js',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="border-t border-b border-[var(--line)] py-4 overflow-hidden bg-surface"
      aria-hidden="true"
    >
      <div className="marquee-track flex gap-11 w-max font-display text-[clamp(18px,2vw,26px)] text-muted">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-11">
            {item}
            <span className="text-amber text-[12px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
