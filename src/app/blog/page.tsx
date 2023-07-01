import NextImage from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

import type { Metadata } from 'next';

import { Blog, allBlogs } from '.contentlayer/generated';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { NextImageWithFallback } from '~/components/NextImageWithFallback';
import { parseImageSrc } from '~/lib/parseImageSrc';
import {
  defaultOpenGraph,
  defaultTwitterCard,
  metadataBase,
} from '~/lib/sharedmetadata';

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: 'Blog',
  description: '農工大公認サークルMCCのブログ記事の一覧です',
  openGraph: {
    ...defaultOpenGraph,
    title: { default: 'Blog', template: "%s | MCC's Blog" },
    description: '農工大公認サークルMCCのブログ一覧です',
  },
  twitter: {
    ...defaultTwitterCard,
    title: {
      default: 'Blog - MCC',
      template: "%s | MCC's Blog",
    },
  },
};

export default function BlogListPage() {
  // 暗黙的な参照渡しを防ぐ
  const posts: Blog[] = structuredClone(allBlogs)
    .filter((x) => !x.unlisted)
    .sort((a, b) => ((a.date || 1) < (b.date || 1) ? 1 : -1));
  return (
    <>
      <Navbar color="white" />
      <NextImage
        src="/images/abstract-7.jpeg"
        alt=""
        width={2000}
        height={1000}
        className={styles.background}
      />
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Blog</h1>
          <div className={styles.typeWriterContainer}>
            <h2 className={styles.headerSubTitle}>
              MCC部員が書いたブログ・ポエム
            </h2>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainContent}>
          <ul className={styles.list}>
            {posts.map((post) => {
              const { title, dateStr, img, author, rootPath } = post;
              return (
                <li className={styles.listItem} key={rootPath}>
                  <Link href={`/${post.rootPath}`} className={styles.link}>
                    <NextImageWithFallback
                      className={styles.image}
                      src={
                        parseImageSrc(rootPath, img) || '/images/mcc-logo.svg'
                      }
                      alt={title}
                      width={900}
                      height={300}
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
