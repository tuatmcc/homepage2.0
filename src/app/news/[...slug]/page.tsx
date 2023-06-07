import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allNews } from '.mdorganizer';
import { Navbar } from '~/components/Navbar';
import { ArticleWrapper } from '~/components/md/ArticleWrapper';
import { parseOgImage } from '~/libs/parseOgImage';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  defaultTwitterCard,
  metadataBase,
} from '~/libs/sharedmetadata';

type Params = { slug: string[] }; // [...slug]
const documentType = 'news';

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const post = allNews.find(
    // URLが一致した記事を取得
    (x) =>
      x.rootPath.replace(/^content\/news\/|\/index\.mdx?/g, '') ===
      params.slug.join('/'),
  );

  if (!post) return notFound();
  else {
    const ogImage = parseOgImage(post.img ?? '', documentType);
    return {
      metadataBase: metadataBase,
      title: post.title,
      description: post.description,
      openGraph: {
        ...defaultOpenGraph,
        title: { default: post.title, template: "%s | MCC's News" },
        description: post.description,
        images: [
          {
            ...defaultOpenGraphImage,
            url: encodeURI(ogImage),
          },
        ],
      },
      twitter: {
        ...defaultTwitterCard,
        images: [
          {
            url: encodeURI(ogImage),
          },
        ],
      },
    };
  }
};

const NewsArticlePage: FC<{ params: Params }> = ({ params }) => {
  const post = allNews.find(
    (x) =>
      x.rootPath.replace(/^content\/news\/|\/index\.mdx?$/g, '') ===
      params.slug.join('/'),
  );
  if (!post) {
    return notFound();
  } else {
    return (
      <>
        <Navbar theme="auto" />
        <ArticleWrapper {...post} />
      </>
    );
  }
};

export const generateStaticParams = async () => {
  return allNews.map((post) => ({
    slug: post.rootPath
      .replace(/^content\/news\/|\/index\.mdx?$/g, '')
      .split('/'),
  }));
};

export default NewsArticlePage;
