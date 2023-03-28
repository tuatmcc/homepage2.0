import { FC } from 'react';

import type { Metadata } from 'next';

import { allNews } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { ArticleWrapper } from '~/components/md/components/ArticleWrapper';
import { parseOgImage } from '~/utils/parseOgImage';

const documentType = 'news';

export const generateMetadata = async ({
	params,
}: { params: { slug: string } }): Promise<Metadata> => {
	const post = allNews.find((x) => x.slug === params.slug);

	const ogImage = parseOgImage(post?.img ?? '', documentType);
	return {
		title: post?.title,
		description: post?.description,
		openGraph: {
			title: { default: post?.title ?? '', template: '%s | News' },
			description: post?.description,
			images: [
				{
					url: encodeURI(ogImage),
					width: 1200,
					height: 630,
				},
			],
		},
	};
};

const NewsArticlePage: FC<{ params: { slug: string } }> = ({ params }) => {
	const post = allNews.find((x) => x.slug === params.slug);
	return (
		<>
			<Navbar theme="auto" />
			<ArticleWrapper
				title={post?.title ?? ''}
				date={post?.date ?? ''}
				description={post?.description ?? ''}
				tags={post?.tags ?? []}
				author={post?.author ?? ''}
				img={post?.img ?? ''}
				html={post?.body.html ?? ''}
				group="blog"
				slug={post?.slug ?? ''}
			/>
		</>
	);
};

export const generateStaticParams = async () => {
	return allNews.map((post) => ({ slug: post.slug }));
};

export default NewsArticlePage;
