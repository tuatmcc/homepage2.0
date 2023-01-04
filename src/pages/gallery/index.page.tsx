import { promises as fs } from 'fs';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { Footer } from '~/components/common/Footer';
import { Helmet } from '~/components/common/Helmet';
import { Navbar } from '~/components/common/Navbar';

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
			<div className={styles.background} />
			<Navbar theme='auto' />
			<header>
				<div className={styles.headerContent}>
					<h1 className={styles.headerTitle}>Gallery</h1>
					<h2 className={styles.headerSubTitle}>デザイン・試作置き場</h2>
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<ul className={styles.list}>
						{paths.map((path) => (
							<li key={path} className={styles.listItem}>
								<Link href={path} className={styles.link}>
									{path}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</main>

			<Footer semitransparent />
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
