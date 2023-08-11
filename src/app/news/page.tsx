import { Metadata } from 'next';

import styles from './styles.module.css';

import { allNews } from '.contentlayer/generated';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { NewsList } from '~/components/news/NewsList';
import { parseImageSrc } from '~/lib/parseImageSrc';
import {
  defaultOpenGraph,
  defaultTwitterCard,
  metadataBase,
} from '~/lib/sharedmetadata';

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: 'NEWS',
  openGraph: {
    ...defaultOpenGraph,
    title: 'News - MCC 東京農工大学マイクロコンピュータークラブ',
  },
  twitter: {
    ...defaultTwitterCard,
    title: 'News - MCC 東京農工大学マイクロコンピュータークラブ',
  },
};

export default function NewsListPage() {
  // 暗黙的な参照渡しを防ぐ
  const posts = structuredClone(allNews).filter((x) => !x.unlisted);
  return (
    <>
      <Navbar color="mcc" />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>News</h1>
          <div className={styles.typeWriterContainer}>
            <h2 className={styles.headerSubTitle}>MCCからのお知らせ</h2>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <NewsList
          unorderedNews={posts.map((post) => {
            const { title, dateStr, img, rootPath, tags } = post;
            return {
              href: `/${rootPath}`,
              title,
              date: dateStr,
              image:
                `/${parseImageSrc(rootPath, img)}` ||
                '/images/wordmark-logo-image.png',
              tags,
            };
          })}
        />
      </main>

      <Footer semitransparent />
    </>
  );
}
