import { FC, useState } from 'react';

import styles from './style.module.css';

import { Layout } from '~/components/common/Layout';
import { HomeScrollControl } from '~/components/home/HomeScrollControl';
import { HomeText3d } from '~/components/home/HomeText3d';
import classNames from '~/utilities/classNames';

// 状態管理、コンポーネント管理が本当にひどすぎる。ベストプラクティスを調べなければ。
const HomePageComponent: FC = () => {
	const [isOpeningVisible, setIsOpeningVisible] = useState(true);
	return (
		<>
			<Layout noMobileHeader>
				<div className={styles.container}>
					<div className={classNames(styles.subScreen, isOpeningVisible ? '' : styles.visible)}>
						<HomeScrollControl />
					</div>

					<div className={`${styles.topScreen} ${!isOpeningVisible ? styles.close : ''}`}>
						<HomeText3d onNextButtonClick={() => setIsOpeningVisible(!isOpeningVisible)} />
						<div className={styles.direction}>Click Anywhere ⸺</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default HomePageComponent;
