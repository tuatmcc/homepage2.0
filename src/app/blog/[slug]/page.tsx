import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allBlogs } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { ArticleWrapper } from '~/components/md/ArticleWrapper';

const documentType = 'blog';

export const generateMetadata = async ({
	params,
}: { params: { slug: string } }): Promise<Metadata> => {
	const post = allBlogs.find((x) => x.slug === params.slug);
	if (!post) return notFound();
	else {
		return {
			title: post?.title,
			description: post?.description,
			openGraph: {
				title: { default: post?.title ?? '', template: "%s | MCC's Blog" },
				description: post?.description,
				images: [
					{
						url: post.img?.replace(/svg$/, 'ping') || '',
						width: 1200,
						height: 630,
					},
				],
			},
		};
	}
};

const BlogArticlePage: FC<{ params: { slug: string } }> = ({ params }) => {
	const post = allBlogs.find((x) => x.slug === params.slug);
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
