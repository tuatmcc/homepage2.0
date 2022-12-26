import { FC, useState } from 'react';

import styles from './style.module.css';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { Text3d } from '~/components/sandbox/Text3d';
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
			<Layout>
				<div className={styles.container}>
					<div className={classNames(styles.subScreen, isOpeningVisible ? '' : styles.visible)}>
						<div className={styles.subScreenIn}>
							<h1>We Are MCC</h1>
							<p>私たちは、東京農工大学マイクロ</p>
							<p>コンピュータークラブです</p>
						</div>
					</div>
					<div className={`${styles.topScreen} ${!isOpeningVisible ? styles.close : ''}`}>
						<Text3d onNextButtonClick={() => setIsOpeningVisible(!isOpeningVisible)} />
					</div>
				</div>
			</Layout>
		</>
	);
};

export default LandingPage;
