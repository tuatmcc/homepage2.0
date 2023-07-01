import { Metadata } from 'next';

const defaultTitle = 'MCC - 東京農工大学マイクロコンピュータークラブ';
const defaultOpenGraphImageURL =
  'https://www.tuatmcc.com/images/wordmark-logo-image.png';
const defaultDescription =
  'MCCは、東京農工大学の公認サークルで、ITに関することを学び、活動しているサークルです。学祭に制作物を出展したり、学内外のイベントに参加したり、学生同士で交流を深めたりしています。';

export const metadataBase = new URL(
  'https://www.tuatmcc.com/images/wordmark-logo-image.png',
);

export const defaultOpenGraphImage = {
  url: defaultOpenGraphImageURL,
  width: 1200,
  height: 630,
};

export const defaultOpenGraph: Metadata['openGraph'] = {
  title: {
    default: defaultTitle,
    template: '%s - MCC 東京農工大学マイクロコンピュータークラブ',
  },
  description: defaultDescription,
  images: [defaultOpenGraphImage],
  locale: 'ja_JP',
  url: 'https://www.tuatmcc.com',
  siteName: 'MCC Homepage',
  type: 'website',
};

export const defaultTwitterCard: Metadata['twitter'] = {
  creator: '@TUATMCC',
  title: {
    default: defaultTitle,
    template: '%s - MCC',
  },
  description: defaultDescription,
  site: 'https://www.tuatmcc.com',
  card: 'summary_large_image',
  images: [
    {
      url: defaultOpenGraphImageURL,
      width: 1200,
      height: 630,
    },
  ],
};

export const sharedMetadata: Metadata = {
  metadataBase: metadataBase,
  title: {
    default: defaultTitle,
    template: '%s - MCC',
  },
  description:
    'MCCは、東京農工大学の公認サークルで、ITに関することを学び、活動しているサークルです。学祭に制作物を出展したり、学内外のイベントやコンテストに参加したり、学生同士で交流を深めたりしています。',
  openGraph: defaultOpenGraph,
  icons: {
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-touch-icon',
        url: '/android-touch-icon.png',
      },
    ],
  },
  twitter: defaultTwitterCard,
};
