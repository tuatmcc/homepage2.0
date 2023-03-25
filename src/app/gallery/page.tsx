import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/ui/Footer';

export const metadata: Metadata = {
	title: 'Gallery',
	description: 'Gallery - where you can see our prototypes and designs',
};

const GalleryPage: FC = () => {
	const paths = ['/gallery/framer-parallax'];

	return (
		<>
			<Navbar />
			<div className={styles.background} />
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
