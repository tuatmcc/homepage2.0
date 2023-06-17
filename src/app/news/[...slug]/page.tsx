import NextLink from 'next/link';
import { notFound } from 'next/navigation';

import styles from './styles.module.css';

import type { Metadata } from 'next';

import { allNews, News } from '.contentlayer/generated';
import { ArticleHeader } from '~/components/ArticleHeader';
import { BackToTop } from '~/components/BackToTop';
import { Navbar } from '~/components/Navbar';
import { Article } from '~/components/ui/Article';
import { Footer } from '~/components/ui/Footer';
import compile from '~/libs/compiler';
import { parseOgImage } from '~/libs/parseOgImage';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  defaultTwitterCard,
  metadataBase,
} from '~/libs/sharedmetadata';

type Params = { slug: string[] }; // [...slug]

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = allNews.find(
    (post) => post.rootPath === post.documentType + '/' + params.slug.join('/'),
  );

  if (!post) return notFound();
  else {
    return {
      metadataBase: metadataBase,
      title: post.title,
      description: post.description,
      openGraph: {
        ...defaultOpenGraph,
        title: { default: post.title, template: "%s | MCC's Blog" },
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
            url: parseOgImage(post.img || '', post.documentType),
          },
        ],
      },
    };
  }
}

export default async function Blog({ params }: { params: Params }) {
  const post = allNews.find(
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
        <ArticleHeader
          title={title}
          image={img}
          date={dateStr}
          author={author}
          tags={tags}
        />
        <main className={styles.main}>
          <Article>{content}</Article>
          <NextLink href={`/${parentPath}`} className={styles.backLink}>
            ← 記事一覧に戻る
          </NextLink>
        </main>
        <Footer />

        <BackToTop />
      </>
    );
  }
}

export async function generateStaticParams(): Promise<Params[]> {
  // すべての記事のパスを生成
  return allNews.map((post) => {
    return {
      slug: post.rootPath.split('/').slice(1),
    };
  });
}
