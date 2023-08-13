import { Metadata } from 'next';

import styles from './styles.module.css';

import { allNews } from '.contentlayer/generated';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { NewsEyeCatch } from '~/components/news/NewsEyeCatch';
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
      <div className={styles.smHeader}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>News</h1>
        </div>
      </div>

      <main>
        <div className={styles.main}>
          <div className={styles.left}>
            {/* ニュースの分量が増えてきたらここに年別のタブを用意するなど */}
            <NewsEyeCatch />
          </div>

          <div className={styles.right}>
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
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
