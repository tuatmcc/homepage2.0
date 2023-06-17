import { notFound } from 'next/navigation';

import styles from './styles.module.css';

import type { Metadata } from 'next';

import { allNews } from '.contentlayer/generated';
import { Article } from '~/components/Article';
import { ArticleBottom } from '~/components/ArticleBottom';
import { ArticleHeader } from '~/components/ArticleHeader';
import { BackToTop } from '~/components/BackToTop';
import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import compile from '~/lib/compiler';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  defaultTwitterCard,
  metadataBase,
} from '~/lib/sharedmetadata';

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
    const { title, img } = post;
    return {
      metadataBase: metadataBase,
      title: title,
      description: post.description,
      openGraph: {
        ...defaultOpenGraph,
        title: { default: post.title, template: "%s | MCC's Blog" },
        description: post.description,
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
            url: img?.replace(/svg$/, 'ping') || '',
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
    const { title, dateStr, img, author, tags, rootPath, parentPath } = post;
    const content = await compile(post.body.raw);
    return (
      <>
        <Navbar theme="auto" />
        <ArticleHeader
          breadcrumb={rootPath.split('/')}
          title={title}
          image={img}
          date={dateStr}
          author={author}
          tags={tags}
        />
        <main className={styles.main}>
          <Article>{content}</Article>
          <ArticleBottom
            parent={{
              href: '/' + parentPath,
              children: '← 記事一覧に戻る',
            }}
          />
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
