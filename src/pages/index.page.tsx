import { NextPage } from 'next';

import styles from './style.module.css';

import { SEO } from '~/features/SEO';
import { HomeScrollControl } from '~/features/home/home-scroll-control';
import { HomeText3d } from '~/features/home/home-text-3d';
import { Navbar } from '~/features/ui/Navbar';

const meta = {
	title: 'Home',
	description: '東京農工大学マイクロコンピュータークラブ(TUATMCC)の公式ホームページです。',
	img: '/mcc-logo.svg',
};

const HomePage: NextPage = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar noBrand />
			<div className={styles.container}>
				<div className={styles.topScreen}>
					<HomeText3d />
				</div>
				<div className={styles.subScreen}>
					<HomeScrollControl />
				</div>
			</div>
		</>
	);
};

export default HomePage;
