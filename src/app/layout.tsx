import { FC, ReactNode } from 'react';

import type { Metadata } from 'next';

import '~/styles/global.css';

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
        url: 'https://www.tuatmcc.com/ogp.png',
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
        url: 'https://www.tuatmcc.com/ogp.png',
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
      <link
					href="https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Orbitron&family=Noto+Sans+JP:wght@400;700&display=swap"
					rel="stylesheet"
				/>
        <meta charSet="utf-8" />
        </head>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
