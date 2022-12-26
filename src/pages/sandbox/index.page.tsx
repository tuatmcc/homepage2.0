import { promises as fs } from 'fs';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';

export type SandboxPageProps = {
	paths: string[];
};

const SandboxPage: FC<SandboxPageProps> = ({ paths }) => {
	const meta = {
		title: 'Gallery',
		description: 'Gallery - where you can see webgl experiments',
	};
	return (
		<>
			<Helmet meta={meta} />
			<Layout>
				<h1>お砂場</h1>
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

export default SandboxPage;

export const getStaticProps: GetStaticProps<SandboxPageProps> = async () => {
	const paths = await fs.readdir('src/pages/sandbox', { withFileTypes: true });
	const pathNames = paths.map((path) => `/sandbox/${path.name}`);
	pathNames.splice(pathNames.indexOf('/sandbox/index.page.tsx'), 1);
	return {
		props: {
			paths: await Promise.all(pathNames),
		},
	};
};
