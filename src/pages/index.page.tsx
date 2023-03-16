import { NextPage } from 'next';

import styles from './style.module.css';

import { SEO } from '~/components/SEO';
import { HomeScrollControl } from '~/components/home/home-scroll-control';
import { HomeText3d } from '~/components/home/home-text-3d';
import { Navbar } from '~/components/ui/Navbar';
import { PageTransition } from '~/components/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: '農工大MCC',
	description: '東京農工大学マイクロコンピュータークラブ(MCC)の公式ホームページです。',
	img: '/images/mcc-design.webp',
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
