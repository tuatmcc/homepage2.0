import { FC } from 'react';

import styles from './style.module.css';

import { HomeScrollControl } from '~/features/home/home-scroll-control';
import { HomeText3d } from '~/features/home/home-text-3d';
import { Navbar } from '~/features/ui/Navbar';

// 状態管理、コンポーネント管理が本当にひどすぎる。ベストプラクティスを調べなければ。
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
