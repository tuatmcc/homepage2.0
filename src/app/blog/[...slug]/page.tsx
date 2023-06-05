import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allBlogs } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { ArticleWrapper } from '~/components/md/ArticleWrapper';
import { parseOgImage } from '~/libs/parseOgImage';
import {
  defaultOpenGraph,
  defaultOpenGraphImage,
  defaultTwitterCard,
} from '~/libs/sharedmetadata';

const documentType = 'blog';

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string[] };
}): Promise<Metadata> => {
  const post = allBlogs.find((x) => x.slug.join('/') === params.slug.join('/'));
  if (!post) return notFound();
  else {
    return {
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

const BlogArticlePage: FC<{ params: { slug: string[] } }> = ({ params }) => {
  const post = allBlogs.find((x) => x.slug.join('/') === params.slug.join('/'));
  if (!post) {
    return notFound();
  } else {
    return (
      <>
        <Navbar theme="auto" />
        <ArticleWrapper documentType={documentType} {...post} />
      </>
    );
  }
};

export const generateStaticParams = async () => {
  return allBlogs.map((post) => ({ slug: post.slug }));
};

export default BlogArticlePage;
