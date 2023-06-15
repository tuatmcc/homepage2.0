import NextLink from 'next/link';
import { notFound } from 'next/navigation';

import styles from './style.module.css';

import type { Metadata } from 'next';

import { allBlogs, Blog } from '.contentlayer/generated';
import { BackToTop } from '~/components/BackToTop';
import { Navbar } from '~/components/Navbar';
import { Article } from '~/components/ui/Article';
import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';
import { TagList } from '~/components/ui/Tag';
import compile from '~/libs/compiler';
import { parseOgImage } from '~/libs/parseOgImage';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  defaultTwitterCard,
  metadataBase,
} from '~/libs/sharedmetadata';

type Params = { slug: string[] }; // [...slug]

const documentType = 'blog';

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const post: Blog | undefined = allBlogs.find(
    // URLが一致した記事を取得
    (post) => post.rootPath === post.documentType + '/' + params.slug.join('/'),
  );

  if (!post) return notFound();
  else {
    return {
      metadataBase: metadataBase,
      title: post?.title,
      description: post?.description,
      openGraph: {
        ...defaultOpenGraph,
        title: { default: post?.title ?? '', template: "%s | MCC's Blog" },
        description: post?.description,
        images: [
          {
            ...defaultOpenGraphImage,
            url: post.img?.replace(/svg$/, 'ping') || '',
          },
        ],
      },
      twitter: {
        ...defaultTwitterCard,
        images: [
          {
            url: parseOgImage(post?.img || '', documentType),
          },
        ],
      },
    };
  }
};

export default async function Blog({ params }: { params: Params }) {
  const post = allBlogs.find(
    // URLが一致した記事を取得
    (post) => post.rootPath === post.documentType + '/' + params.slug.join('/'),
  );
  if (!post) {
    return notFound();
  } else {
    const { title, dateStr, img, author, tags, parentPath } = post;
    const content = await compile(post.body.raw);
    return (
      <>
        <Navbar theme="auto" />
        <BasicImage
          src={img || '/images/wordmark-logo-image.svg'}
          alt="hero image"
          role="presentation"
          width={800}
          height={300}
          className={styles.heroImage}
          fallback
        />
        <div className={styles.heroImageOverlay} />

        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.info}>
              {author && (
                <NextLink
                  href={`https://github.com/${author}`}
                  className={styles.author}
                >
                  @{author}
                </NextLink>
              )}
              <div className={styles.date}>{dateStr}</div>
              <TagList className={styles.tagList}>{tags}</TagList>
            </div>
          </div>
        </header>

        <main>
          <div className={styles.mainContent}>
            <Article>{content}</Article>
            <NextLink href={`/${parentPath}`} className={styles.backLink}>
              ← 記事一覧に戻る
            </NextLink>
          </div>
        </main>
        <Footer />

        <BackToTop />
      </>
    );
  }
}

export const generateStaticParams = async (): Promise<Params[]> => {
  // すべての記事のパスを生成
  return allBlogs.map((post) => {
    return {
      slug: post.rootPath.split('/').slice(1),
    };
  });
};
