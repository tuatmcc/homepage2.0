import type { Metadata } from 'next';

import styles from './styles.module.css';

import { allNewsDocuments } from '@/content';
import { ArticleList } from '~/app/_components/ArticleList';
import { Footer } from '~/app/_components/Footer';
import { Navbar } from '~/app/_components/Navbar';
import { NewsEyeCatch } from '~/app/_components/news/NewsEyeCatch';
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
  const posts = structuredClone(allNewsDocuments).sort((a, b) =>
    (a.fields.date || 1) < (b.fields.date || 1) ? 1 : -1,
  );
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
            <ArticleList
              unorderedArticles={posts.map((post) => {
                const rootPath = post.rootPath.replace(
                  /^content|\/index\.md$/g,
                  '',
                );
                const { title, date, img, tags } = post.fields;
                return {
                  href: `${rootPath}`,
                  title,
                  date: date,
                  image:
                    `${parseImageSrc(rootPath.replace(/^\/news/, ''), img)}` ||
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
