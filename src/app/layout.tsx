import { Orbitron, Noto_Sans_JP, JetBrains_Mono } from 'next/font/google';
import { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import '~/styles/global.css';
import {classNames} from '~/libs/classNames';

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

export const metadata: Metadata = {
  title: {
    default: 'MCC - 東京農工大学マイクロコンピュータークラブ',
    template: '%s - MCC',
  },
  description: 'MCCは、IT系の活動を行っている、東京農工大学の公認サークルです。',
  openGraph: {
    title: {
      default: 'MCC - 東京農工大学マイクロコンピュータークラブ',
      template: '%s | MCC - 東京農工大学マイクロコンピュータークラブ',
    },
    locale: 'ja_JP',
    url: 'https://www.tuatmcc.com',
    siteName: 'MCC',
    images: [
      {
        url: 'https://www.tuatmcc.com/images/wordmark-logo-image.png',
        width: 1200,
        height: 630,
      }
    ],
    type: 'website',
  },
  icons: {
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [{
      rel: 'android-touch-icon',
      url: '/android-touch-icon.png',
    }]
  },
  twitter: {
    creator: '@TUATMCC',
    title: {
      default: 'MCC - 東京農工大学マイクロコンピュータークラブ',
      template: '%s'
    },
    site: 'https://www.tuatmcc.com',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://www.tuatmcc.com/images/wordmark-logo-image.png',
        width: 1200,
        height: 630,
      }
    ]
  }
}

const RootLayout: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className={classNames(orbitron.variable, notoSansJP.variable, jetBrainsMono.variable)}>{children}</body>
    </html>
  )
}

export default RootLayout
