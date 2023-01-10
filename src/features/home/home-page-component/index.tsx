import { FC } from 'react';

import styles from './style.module.css';

import { Navbar } from '~/features/components/Navbar';
import { HomeScrollControl } from '~/features/home/home-scroll-control';
import { HomeText3d } from '~/features/home/home-text-3d';

// コンポーネント管理が本当にひどすぎる。
const HomePageComponent: FC = () => {
	return (
		<>
			<Navbar theme='transparent' noBrand />
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

export default HomePageComponent;
