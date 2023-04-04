import { FC } from 'react';

import type { Metadata } from 'next';

import { allMembers } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { ArticleWrapper } from '~/components/md/ArticleWrapper';
import { parseOgImage } from '~/utils/parseOgImage';

const documentType = 'members';

export const generateMetadata = async ({
	params,
}: { params: { slug: string } }): Promise<Metadata> => {
	const post = allMembers.find((x) => x.slug === params.slug);

	const ogImage = parseOgImage(post?.img ?? '', documentType);
	return {
		title: post?.title,
		description: post?.description,
		openGraph: {
			title: { default: post?.title ?? '', template: '%s | Members' },
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

const MemberProfilePage: FC<{ params: { slug: string } }> = ({ params }) => {
	const post = allMembers.find((x) => x.slug === params.slug);
	return (
		<>
			<Navbar theme="auto" />
			<ArticleWrapper
				title={post?.title ?? ''}
				dateStr={post?.dateStr ?? ''}
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

export const generateStaticParams = () => {
	return allMembers.map((post) => post.slug);
};

export default MemberProfilePage;
