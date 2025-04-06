import { notFound } from 'next/navigation';

import styles from './styles.module.css';

import type { Metadata } from 'next';

import { Article } from '~/app/_components/Article';
import { ArticleBottom } from '~/app/_components/ArticleBottom';
import { ArticleHeader } from '~/app/_components/ArticleHeader';
import { BackToTop } from '~/app/_components/BackToTop';
import { Footer } from '~/app/_components/Footer';
import { Navbar } from '~/app/_components/Navbar';
import { Navigation } from '~/app/_components/Navigation/Navigation';
import compile from '~/lib/compiler';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  defaultTwitterCard,
  metadataBase,
} from '~/lib/sharedmetadata';
import { news } from '.velite';

type Params = { slug: string[] }; // [...slug]

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const post = news.find((post) => {
    return post.slug.split('/').slice(1).join('/') === params.slug.join('/');
  });

  if (post) {
    const { title, img } = post;
    return {
      metadataBase: metadataBase,
      title: title,
      openGraph: {
        ...defaultOpenGraph,
        title: { default: post.title, template: "%s | MCC's Blog" },
        images: [
          {
            ...defaultOpenGraphImage,
            url: post.img?.src.replace(/svg$/, 'ping') || '',
          },
        ],
      },
      twitter: {
        ...defaultTwitterCard,
        images: [
          {
            url: img?.src.replace(/svg$/, 'ping') || '',
          },
        ],
      },
    };
  }
  return notFound();
}

export default async function Blog({ params }: { params: Params }) {
  const post = news.find(
    // URLが一致した記事を取得
    (post) => {
      return post.slug.split('/').slice(1).join('/') === params.slug.join('/');
    },
  );
  if (post) {
    const rootPath = `/${post.slug}`;
    const parentPath = rootPath.split('/').slice(0, -1).join('/');
    const { title, date, img, tags } = post;
    const content = await compile(post.content);
    return (
      <>
        <Navbar theme="auto" />
        <Navigation>
          <ArticleHeader
            breadcrumb={rootPath.split('/')}
            title={title}
            image={img?.src}
            date={date}
            tags={tags}
          />
          <main className={styles.main}>
            <Article>{content}</Article>
            <ArticleBottom
              parent={{
                href: parentPath,
                children: '← 記事一覧に戻る',
              }}
            />
          </main>
          <Footer />

          <BackToTop />
        </Navigation>
      </>
    );
  }
  return notFound();
}

export async function generateStaticParams(): Promise<Params[]> {
  // すべての記事のパスを生成
  return news.map((post) => {
    return {
      slug: post.slug.split('/').slice(1),
    } satisfies Params;
  });
}
