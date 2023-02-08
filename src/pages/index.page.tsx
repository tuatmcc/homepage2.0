import { NextPage } from 'next';

import styles from './style.module.css';

import { SEO } from '~/features/SEO';
import { HomeScrollControl } from '~/features/home/home-scroll-control';
import { HomeText3d } from '~/features/home/home-text-3d';
import { Navbar } from '~/features/ui/Navbar';
import { PageTransition } from '~/features/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: '農工大MCC',
	description: '東京農工大学マイクロコンピュータークラブ(MCC)の公式ホームページです。',
	img: '/mcc-design.webp',
};

const HomePage: NextPage = () => {
	return (
		<>
			<SEO meta={meta} />
			<Navbar noBrand />
			<PageTransition>
				<div className={styles.container}>
					<div className={styles.topScreen}>
						<HomeText3d />
					</div>
					<div className={styles.subScreen}>
						<HomeScrollControl />
					</div>
				</div>
			</PageTransition>
		</>
	);
};

export default HomePage;
