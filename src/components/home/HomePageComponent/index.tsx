import { FC } from 'react';

import styles from './style.module.css';

import { Navbar } from '~/components/common/Navbar';
import { HomeScrollControl } from '~/components/home/HomeScrollControl';
import { HomeText3d } from '~/components/home/HomeText3d';

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
