import { notFound } from 'next/navigation';

import styles from './styles.module.css';

import type { Metadata } from 'next';

import { allNewsDocuments } from '@/content';
import { Article } from '~/app/_components/Article';
import { ArticleBottom } from '~/app/_components/ArticleBottom';
import { ArticleHeader } from '~/app/_components/ArticleHeader';
import { BackToTop } from '~/app/_components/BackToTop';
import { Footer } from '~/app/_components/Footer';
import { Navbar } from '~/app/_components/Navbar';
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
  const post = allNewsDocuments.find((post) => {
    const rootPath = post.rootPath.replace(/^content|\/index\.md$/g, '');
    const urlPath = `/${post.documentCategory}/${params.slug.join('/')}`;
    return rootPath === urlPath;
  });

  if (post) {
    const { title, img } = post.fields;
    return {
      metadataBase: metadataBase,
      title: title,
      description: post.fields.description,
      openGraph: {
        ...defaultOpenGraph,
        title: { default: post.fields.title, template: "%s | MCC's Blog" },
        description: post.fields.description,
        images: [
          {
            ...defaultOpenGraphImage,
            url: post.fields.img?.replace(/svg$/, 'ping') || '',
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
  return notFound();
}

export default async function Blog({ params }: { params: Params }) {
  const post = allNewsDocuments.find(
    // URLが一致した記事を取得
    (post) => {
      const rootPath = post.rootPath.replace(/^content|\/index\.md$/g, '');
      const urlPath = `/${post.documentCategory}/${params.slug.join('/')}`;
      return rootPath === urlPath;
    },
  );
  if (post) {
    const rootPath = post.rootPath.replace(/^content|\/index\.md$/g, '');
    const parentPath = rootPath.split('/').slice(0, -1).join('/');
    const { title, date, img, tags } = post.fields;
    const content = await compile(post.content);
    return (
      <>
        <Navbar theme="auto" />
        <ArticleHeader
          breadcrumb={rootPath.split('/')}
          title={title}
          image={img}
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
      </>
    );
  }
  return notFound();
}

export async function generateStaticParams(): Promise<Params[]> {
  // すべての記事のパスを生成
  return allNewsDocuments.map((post) => {
    const rootPath = post.rootPath.replace(/^\/?content\/|\/index\.md$/g, '');
    return {
      slug: rootPath.split('/').slice(1),
    } satisfies Params;
  });
}
