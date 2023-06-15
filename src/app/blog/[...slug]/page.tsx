import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allBlogs, Blog } from '.contentlayer/generated';
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

const documentType = 'blog';

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const post: Blog = allBlogs.find(
    // URLが一致した記事を取得
    (x) => x.rootPath === post.documentType + '/' + params.slug.join('/'),
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

const BlogArticlePage: FC<{ params: Params }> = ({ params }) => {
  const post = allBlog.find(
    // URLが一致した記事を取得
    (post) =>
      post.rootPath
        .split('/')
        .filter(
          (x) =>
            x !== '' && x !== 'index.md' && x !== 'blog' && x !== 'content',
        )
        .join('/') === params.slug.join('/'),
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

export const generateStaticParams = async (): Promise<Params[]> => {
  // すべての記事のパスを生成
  return allBlog.map((post) => {
    return {
      slug: post.rootPath
        .split('/')
        .filter(
          (x) =>
            x !== '' && x !== 'index.md' && x !== 'blog' && x !== 'content',
        ),
    };
  });
};

export default BlogArticlePage;
