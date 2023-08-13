import classnames from 'classnames';
import { JetBrains_Mono, Noto_Sans_JP, Orbitron } from 'next/font/google';
import { ReactNode } from 'react';

import type { Metadata } from 'next';

import '~/styles/global.css';
import { sharedMetadata } from '~/lib/sharedmetadata';

const notoSansJP = Noto_Sans_JP({
  variable: '--font-family-noto-sans-jp',
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['sans-serif'],
});

const orbitron = Orbitron({
  variable: '--font-family-orbitron',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans JP', 'sans-serif'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-family-jetbrains-mono',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Noto Sans JP', 'monospace', 'sans-serif'],
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={classnames(
          orbitron.variable,
          notoSansJP.variable,
          jetBrainsMono.variable,
          notoSansJP.className,
        )}
      >
        {children}
      </body>
    </html>
  );
}
