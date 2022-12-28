import { FC, useState } from 'react';

import styles from './style.module.css';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { HomeScrollControl } from '~/components/home/HomeScrollControl';
import { HomeText3d } from '~/components/home/HomeText3d';
import classNames from '~/utilities/classNames';

const LandingPage: FC = () => {
	const meta = {
		title: 'Home',
		description: '東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです',
		img: '/mcc-logo.svg',
	};
	const [isOpeningVisible, setIsOpeningVisible] = useState(true);
	return (
		<>
			<Helmet meta={meta} />
			<Layout noMobileHeader>
				<div className={styles.container}>
					<div className={classNames(styles.subScreen, isOpeningVisible ? '' : styles.visible)}>
						<HomeScrollControl />
					</div>

					<div className={`${styles.topScreen} ${!isOpeningVisible ? styles.close : ''}`}>
						<HomeText3d onNextButtonClick={() => setIsOpeningVisible(!isOpeningVisible)} />
						<div className={styles.direction}>Click Anywhere -</div>
					</div>
				</div>
			</Layout>
		</>
	);
};

export default LandingPage;
