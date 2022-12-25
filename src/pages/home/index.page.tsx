import { FC, useContext, useState } from 'react';

import styles from './style.module.css';

import HeaderMobile from '~/components/common/HeaderMobile/HeaderMobile';
import Helmet from '~/components/common/MetaWrapper';
import NavbarMobile from '~/components/common/NavbarMobile/NavbarMobile';
import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
import Page from '~/components/common/Page/Page';
import Text3d from '~/components/sandbox/Text3d/Text3d';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

export type LandingPageProps = {};

const LandingPage: FC<LandingPageProps> = () => {
	const meta = {
		title: 'Home',
		description: '東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです',
		img: '/mcc-logo.svg',
	};
	const [isOpeningVisible, setIsOpeningVisible] = useState(true);
	const { isMobile } = useContext(MediaQueryContext);
	return (
		<Page meta={meta}>
			<div className={styles.container}>
				<div className={`${styles.subScreen} ${isOpeningVisible ? '' : styles.visible}`}>
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
		</Page>
	);
};

export default LandingPage;
