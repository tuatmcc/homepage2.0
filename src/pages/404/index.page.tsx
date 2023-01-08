import { FC } from 'react';

import styles from './style.module.css';

import { SEO } from '~/features/seo';
import { Footer } from '~/features/ui/Footer';
import { Navbar } from '~/features/ui/Navbar';

const meta = {
	title: '404',
	description: '404 Page Not Found',
};

const NotFoundPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar theme='auto' />
			<div className={styles.background} />
			<main>
				<div className={styles.mainContent}>
					<h1 className={styles.title}>404</h1>
					<h2 className={styles.subTitle}>Page not Found</h2>
				</div>
			</main>
			<Footer semitransparent />
		</>
	);
};

export default NotFoundPage;
