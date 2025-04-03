import { JetBrains_Mono, Noto_Sans_JP, Orbitron } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  variable: '--font-family-noto-sans-jp',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

export const orbitron = Orbitron({
  variable: '--font-family-orbitron',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans JP', 'sans-serif'],
});

export const jetBrainsMono = JetBrains_Mono({
  variable: '--font-family-jetbrains-mono',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans JP', 'monospace', 'sans-serif'],
});
