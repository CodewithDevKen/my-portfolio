import type { Metadata } from 'next';
import { Libre_Caslon_Display, Libre_Caslon_Text, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

const display = Libre_Caslon_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const text = Libre_Caslon_Text({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
});

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kenji Mendoza — Software Developer',
  description:
    'Full-stack web & mobile developer and Technical Support Engineer at Zerohash. Based in Manila.',
  openGraph: {
    title: 'Kenji Mendoza — Software Developer',
    description: 'Full-stack web & mobile, built with the patience of a craftsman.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} ${mono.variable}`}>
      <body className="bg-bg text-cream font-text antialiased">{children}</body>
    </html>
  );
}
