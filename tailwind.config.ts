import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Portfolio tokens — all point to CSS vars so they flip with theme */
        bg:            'var(--bg)',
        surface:       'var(--surface)',
        surface2:      'var(--surface2)',
        'now-bg':      'var(--now-panel)',
        cream:         'var(--cream)',
        muted:         'var(--muted)',
        dim:           'var(--dim)',
        amber:         'var(--amber)',
        'amber-dim':   'var(--amber-dim)',
        steel:         'var(--steel)',
        'steel-light': 'var(--steel-light)',
        sage:          'var(--sage)',

        /* shadcn tokens */
        border:     'hsl(var(--border))',
        input:      'hsl(var(--input))',
        ring:       'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT:    'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT:    'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT:    'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        card: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        accent: {
          DEFAULT:    'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT:    'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        text:    ['var(--font-text)', 'Georgia', 'serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      letterSpacing: {
        label: '2.4px',
        wide:  '1.5px',
        nav:   '1px',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
