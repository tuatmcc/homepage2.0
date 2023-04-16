import { notFound } from 'next/navigation';
import { FC } from 'react';

import type { Metadata } from 'next';

import { allDocuments, allMembers } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { parseOgImage } from '~/libs/parseOgImage';
import { defaultOpenGraph, defaultOpenGraphImage } from '~/libs/sharedmetadata';

const documentType = 'members';

export const generateMetadata = async ({
	params,
}: { params: { slug: string[] } }): Promise<Metadata> => {
	const post = allMembers.find((x) => x.slug.join('/') === params.slug.join('/'));

	const ogImage = parseOgImage(post?.img ?? '', documentType);
	return {
		title: post?.title,
		description: post?.description,
		openGraph: {
			...defaultOpenGraph,
			title: { default: post?.title ?? '', template: '%s | Members' },
			description: post?.description,
			images: [
				{
					...defaultOpenGraphImage,
					url: encodeURI(ogImage),
				},
			],
		},
	};
};

const MemberProfilePage: FC<{ params: { slug: string[] } }> = ({ params }) => {
	const member = structuredClone(allDocuments)
		.filter((x, i, self) => self.indexOf(x) === i && x.author === params.slug[0])
		.map((x) => x.author);
	const markdown = fetch(`https://raw.githubusercontent.com/${member}/main/README.md`).then(
		(res) => res.text(),
	);
	if (!member) return notFound();
	else {
		return (
			<>
				<Navbar theme="auto" />
				{markdown}
			</>
		);
	}
};

export const generateStaticParams = () => {
	return allMembers.map((post) => post.slug);
};

export default MemberProfilePage;
