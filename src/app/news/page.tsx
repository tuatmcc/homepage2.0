import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { allNews } from '.mdorganizer';
import { Navbar } from '~/components/Navbar';
import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';
import {
  defaultOpenGraph,
  defaultTwitterCard,
  metadataBase,
} from '~/libs/sharedmetadata';

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

const NewsListPage: FC = () => {
  const posts = structuredClone(allNews)
    .filter((x) => x.rootPath.split('/').length === 4)
    .sort((a, b) => ((a.date || 1) < (b.date || 1) ? 1 : -1));
  return (
    <>
      <Navbar />
      <BasicImage
        alt=""
        src="/images/abstract-tech-image-4.webp"
        width={1920}
        height={1280}
        role="presentation"
        className={styles.background}
        fallback
      />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>News</h1>
          <div className={styles.typeWriterContainer}>
            <h2 className={styles.headerSubTitle}>MCCからのお知らせ</h2>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <ul className={styles.list}>
            {posts.map((post) => {
              return (
                <li key={post.rootPath} className={styles.listItem}>
                  <Link
                    href={post.rootPath.replace(/content|\/index\.mdx?/g, '')}
                    className={styles.link}
                  >
                    <BasicImage
                      className={styles.image}
                      src={post.img || '/images/wordmark-logo-image.svg'}
                      alt={post.title}
                      width={350}
                      height={200}
                      fallback
                    />
                    <div className={styles.text}>
                      <h2 className={styles.title}>{post.title}</h2>
                      <div className={styles.details}>
                        {post.date && (
                          <div className={styles.date}>
                            {post.date.replace(/T.+/, '')}
                          </div>
                        )}
                        {post.author && (
                          <div className={styles.author}>@ {post.author}</div>
                        )}
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer semitransparent />
    </>
  );
};

export default NewsListPage;
