import styles from './styles.module.css';

import type { Metadata } from 'next';

import { type BlogDocument, allBlogDocuments } from '@/content';
import { ArticleList } from '~/app/_components/ArticleList';
import { Footer } from '~/app/_components/Footer';
import { Navbar } from '~/app/_components/Navbar';
import { parseImageSrc } from '~/lib/parseImageSrc';
import {
  defaultOpenGraph,
  defaultTwitterCard,
  metadataBase,
} from '~/lib/sharedmetadata';
import { BlogEyeCatch } from './_components/BlogEyeCatch';

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
  const posts: BlogDocument[] = structuredClone(allBlogDocuments).sort(
    (a, b) => ((a.fields.date || 1) < (b.fields.date || 1) ? 1 : -1),
  );
  return (
    <>
      <Navbar color="mcc" />
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
                const rootPath = post.rootPath.replace(
                  /^content|\/index\.md$/g,
                  '',
                );
                const { title, date, img, tags, author } = post.fields;
                return {
                  href: `${rootPath}`,
                  title,
                  date: date,
                  author: author,
                  image:
                    parseImageSrc(rootPath.replace(/^\/blog/, ''), img) ||
                    '/images/wordmark-logo-image.png',
                  tags,
                };
              })}
            />
          </div>
        </div>
      </main>

      <Footer semitransparent={true} />
    </>
  );
}
