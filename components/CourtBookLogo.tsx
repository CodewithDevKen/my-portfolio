export default function CourtBookLogo() {
  return (
    <svg
      viewBox="0 0 280 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="CourtBookPH logo"
    >
      {/* ── Court top-down view ── */}
      {/* Outer court boundary */}
      <rect
        x="28" y="32" width="224" height="200"
        rx="4"
        stroke="#C8903A" strokeWidth="2.5" fill="none"
      />

      {/* Half-court line */}
      <line x1="28" y1="132" x2="252" y2="132" stroke="#C8903A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.5" />

      {/* Top key / paint area */}
      <rect
        x="90" y="32" width="100" height="62"
        stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.6"
      />
      {/* Top free-throw arc */}
      <path
        d="M90 94 A50 50 0 0 0 190 94"
        stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.6"
      />

      {/* Bottom key / paint area */}
      <rect
        x="90" y="170" width="100" height="62"
        stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.6"
      />
      {/* Bottom free-throw arc */}
      <path
        d="M90 170 A50 50 0 0 1 190 170"
        stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.6"
      />

      {/* Center circle */}
      <circle cx="140" cy="132" r="26" stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.55" />
      <circle cx="140" cy="132" r="3" fill="#C8903A" opacity="0.7" />

      {/* Top 3-point arc */}
      <path
        d="M50 58 A108 108 0 0 1 230 58"
        stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.35"
      />
      {/* Bottom 3-point arc */}
      <path
        d="M50 206 A108 108 0 0 0 230 206"
        stroke="#C8903A" strokeWidth="1.5" fill="none" opacity="0.35"
      />

      {/* ── Booking pin overlay ── */}
      <circle cx="140" cy="132" r="14" fill="#C8903A" opacity="0.15" />
      <circle cx="140" cy="132" r="8" fill="#C8903A" opacity="0.9" />
      <circle cx="140" cy="132" r="3.5" fill="#0B0C12" />

      {/* ── Wordmark ── */}
      {/* "CB" monogram background pill */}
      <rect x="64" y="258" width="152" height="32" rx="4" fill="#C8903A" opacity="0.1" />
      <rect x="64" y="258" width="152" height="32" rx="4" stroke="#C8903A" strokeWidth="1" opacity="0.3" />

      {/* COURTBOOK text */}
      <text
        x="140" y="278"
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="13"
        fontWeight="500"
        letterSpacing="3.5"
        fill="#C8903A"
      >
        COURTBOOK
      </text>

      {/* PH badge */}
      <rect x="114" y="296" width="52" height="18" rx="2" fill="#C8903A" opacity="0.18" />
      <text
        x="140" y="309"
        textAnchor="middle"
        fontFamily="var(--font-mono), monospace"
        fontSize="10"
        letterSpacing="2"
        fill="#C8903A"
        opacity="0.9"
      >
        · PH ·
      </text>
    </svg>
  );
}
