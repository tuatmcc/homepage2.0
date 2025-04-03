import classnames from 'classnames';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { sharedMetadata } from '~/lib/sharedmetadata';
import '~/styles/global.css';
import { jetBrainsMono, notoSansJP, orbitron } from './fonts';

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className="bg-gray-100">
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
