'use client';

import styles from './style.module.css';

import { SEO } from '~/components/SEO';
import { Footer } from '~/components/ui/Footer';
import { Navbar } from '~/components/ui/Navbar';
import { PageTransition } from '~/components/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: '404',
	description: '404 Page Not Found',
};

const NotFoundPage = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar />
			<PageTransition>
				<div className={styles.background} />
				<main>
					<div className={styles.mainContent}>
						<h1 className={styles.title}>404</h1>
						<h2 className={styles.subTitle}>Page not Found</h2>
					</div>
				</main>
				<Footer semitransparent />
			</PageTransition>
		</>
	);
};

export default NotFoundPage;
