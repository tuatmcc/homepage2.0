import { Metadata } from 'next';
import Link from 'next/link';

import styles from './styles.module.css';

import { allNews } from '.contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';
import { NextImageWithFallback } from '~/components/ui/NextImageWithFallback';
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

export default function NewsListPage() {
  // 暗黙的な参照渡しを防ぐ
  const posts = structuredClone(allNews)
    .filter((x) => !x.unlisted)
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
              const { title, dateStr, img, author } = post;
              return (
                <li key={post.rootPath} className={styles.listItem}>
                  <Link href={post.rootPath} className={styles.link}>
                    <NextImageWithFallback
                      className={styles.image}
                      src={img || '/images/mcc-logo.svg'}
                      alt=""
                      role="presentation"
                      width={200}
                      height={200}
                      fallback="/images/mcc-logo.svg"
                    />
                    <div className={styles.text}>
                      <h2 className={styles.title}>{title}</h2>
                      <div className={styles.details}>
                        <div className={styles.date}>{dateStr}</div>
                        {author && (
                          <div className={styles.author}>@{author}</div>
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
}
