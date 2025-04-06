import styles from './styles.module.css';

import type { Metadata } from 'next';

import { ArticleList } from '~/app/_components/ArticleList';
import { Footer } from '~/app/_components/Footer';
import { Navbar } from '~/app/_components/Navbar';
import { parseImageSrc } from '~/lib/parseImageSrc';
import {
  defaultOpenGraph,
  defaultTwitterCard,
  metadataBase,
} from '~/lib/sharedmetadata';
import { Navigation } from '../_components/Navigation/Navigation';
import { BlogEyeCatch } from './_components/BlogEyeCatch';
import { type Blog, blog } from '.velite';

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
  // 暗黙的な参照渡しを防ぐ(いるのか？)
  const posts: Blog[] = structuredClone(blog).sort((a, b) =>
    (a.date || 1) < (b.date || 1) ? 1 : -1,
  );
  return (
    <>
      <Navbar color="mcc" />
      <Navigation>
        <div className={styles.smHeader}>
          <div className={styles.headerContent}>
            <h1 className={styles.headerTitle}>Blog</h1>
          </div>
        </div>

        <main>
          <div className={styles.main}>
            <div className={styles.left}>
              {/* 虚無スペース(?) */}
              <BlogEyeCatch />
            </div>
            <div className={styles.right}>
              <ArticleList
                unorderedArticles={posts.map((post) => {
                  const rootPath = post.slug;
                  const { title, date, img, tags, author } = post;
                  return {
                    href: `${rootPath}`,
                    title,
                    date: date,
                    author: author,
                    image:
                      parseImageSrc(
                        rootPath.replace(/^\/blog/, ''),
                        img?.src,
                      ) || '/images/wordmark-logo-image.png',
                    tags,
                  };
                })}
              />
            </div>
          </div>
        </main>

        <Footer semitransparent={true} />
      </Navigation>
    </>
  );
}
