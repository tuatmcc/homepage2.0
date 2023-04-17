import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allNews } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { ArticleWrapper } from '~/components/md/ArticleWrapper';
import { parseOgImage } from '~/libs/parseOgImage';
import { defaultOpenGraph, defaultOpenGraphImage, defaultTwitterCard } from '~/libs/sharedmetadata';

const documentType = 'news';

export const generateMetadata = async ({
	params,
}: { params: { slug: string[] } }): Promise<Metadata> => {
	const post = allNews.find((x) => x.slug.join('/') === params.slug.join('/'));

	if (!post) return notFound();
	else {
		const ogImage = parseOgImage(post.img ?? '', documentType);
		return {
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

const NewsArticlePage: FC<{ params: { slug: string[] } }> = ({ params }) => {
	const post = allNews.find((x) => x.slug.join('/') === params.slug.join('/'));
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
	return allNews.map((post) => ({ slug: post.slug }));
};

export default NewsArticlePage;
