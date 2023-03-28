import { NextPage } from 'next';

import styles from './style.module.css';

import { Navbar } from '~/components/Navbar';
import { HomeScrollControl } from '~/components/home/home-scroll-control';
import { HomeText3d } from '~/components/home/home-text-3d';

const HomePage: NextPage = () => {
	return (
		<>
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
