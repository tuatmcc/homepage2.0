import { promises as fs } from 'fs';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';

export type SandboxPageProps = {
	paths: string[];
};

const GalleryPage: FC<SandboxPageProps> = ({ paths }) => {
	const meta = {
		title: 'Gallery',
		description: 'Gallery - where you can see webgl experiments',
	};
	return (
		<>
			<Helmet meta={meta} />
			<Layout>
				<h1>Gallery</h1>
				<p>いろいろなものを試す場所</p>
				<ul>
					{paths.map((path) => (
						<li key={path}>
							<Link href={path}>{path}</Link>
						</li>
					))}
				</ul>
			</Layout>
		</>
	);
};

export default GalleryPage;

export const getStaticProps: GetStaticProps<SandboxPageProps> = async () => {
	const paths = await fs.readdir('src/pages/gallery', { withFileTypes: true });
	const pathNames = paths.map((path) => `/gallery/${path.name}`);
	pathNames.splice(pathNames.indexOf('/gallery/index.page.tsx'), 1);
	return {
		props: {
			paths: await Promise.all(pathNames),
		},
	};
};
