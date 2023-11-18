import { notFound } from 'next/navigation';

import styles from './styles.module.css';

import type { Metadata } from 'next';

import { allNewsDocuments } from '.mdorganizer/generated';
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
  const post = allNewsDocuments.find((post) => {
    const rootPath = post.rootPath.replace(/^content|\/index\.md$/g, '');
    const urlPath = `/${post.documentCategory}/${params.slug.join('/')}`;
    console.log(rootPath, urlPath);
    return rootPath === urlPath;
  });

  if (!post) return notFound();
  else {
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
  if (!post) {
    return notFound();
  } else {
    const rootPath = post.rootPath.replace(/^content|\/index\.md$/g, '');
    const parentPath = rootPath.split('/').slice(0, -1).join('/');
    const { title, date, img, author, tags } = post.fields;
    const content = await compile(post.content);
    return (
      <>
        <Navbar theme="auto" />
        <ArticleHeader
          breadcrumb={rootPath.split('/')}
          title={title}
          image={img}
          date={date}
          author={author}
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
}

export async function generateStaticParams(): Promise<Params[]> {
  // すべての記事のパスを生成
  return allNewsDocuments.map((post) => {
    return {
      slug: post.rootPath.split('/').slice(1),
    } satisfies Params;
  });
}
