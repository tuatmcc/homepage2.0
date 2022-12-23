import { FC, useContext, useState } from 'react';

import styles from './style.module.css';

import Page from '~/components/common/Page/Page';
import Text3d from '~/components/sandbox/Text3d/Text3d';

export type LandingPageProps = {};

const LandingPage: FC<LandingPageProps> = () => {
	const meta = {
		title: 'Home',
		description: '東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです',
		img: '/mcc-logo.svg',
	};
	return (
		<Page meta={meta}>
			<div className={styles.container}>
				<Text3d />
			</div>
		</Page>
	);
};

export default LandingPage;
