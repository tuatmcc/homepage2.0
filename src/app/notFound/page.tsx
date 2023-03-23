import { Metadata } from 'next';

import styles from './style.module.css';

import { Footer } from '~/components/ui/Footer';
import { Navbar } from '~/components/ui/Navbar';

const _metadata: Metadata = {
	title: '404',
	description: '404 Page Not Found',
};

const NotFoundPage = () => {
	return (
		<>
			<Navbar />
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
