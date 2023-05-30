import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import type { Metadata } from 'next';

import { PostTypeBlog, allBlog } from '.mdorganizer/index';
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

const BlogListPage: FC = () => {
  const posts: PostTypeBlog[] = structuredClone(allBlog)
    .filter((x) => x.rootPath.split('/').length === 4) // content,blog,filename,index.md
    .sort((a, b) => ((a.date || 1) < (b.date || 1) ? 1 : -1));
  return (
    <>
      <Navbar theme="auto" />
      <BasicImage
        src="images/abstract-7.jpeg"
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
              return (
                <li className={styles.listItem} key={post.rootPath}>
                  <Link
                    href={post.rootPath.replace(/content|index\.md/g, '')}
                    className={styles.link}
                  >
                    <BasicImage
                      className={styles.image}
                      src={post.img || '/images/wordmark-logo-image.svg'}
                      alt={post.title}
                      width={100}
                      height={100}
                      fallback
                    />
                    <div className={styles.text}>
                      <h2 className={styles.title}>{post.title}</h2>
                      <div className={styles.details}>
                        {post.date && (
                          <div className={styles.date}>{post.date}</div>
                        )}
                        {post.author && (
                          <div className={styles.author}>@{post.author}</div>
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

export default BlogListPage;
