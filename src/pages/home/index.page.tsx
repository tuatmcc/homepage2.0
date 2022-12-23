import { FC, useContext, useState } from 'react';

import styles from './style.module.css';

import HeaderMobile from '~/components/common/HeaderMobile/HeaderMobile';
import MetaWrapper from '~/components/common/MetaWrapper/MetaWrapper';
import NavbarMobile from '~/components/common/NavbarMobile/NavbarMobile';
import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
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
		<MetaWrapper meta={meta}>
			<div className={styles.container}>
				<div className={`${styles.topScreen} ${!isOpeningVisible ? styles.close : ''}`}>
					<Text3d onNextButtonClick={() => setIsOpeningVisible(!isOpeningVisible)} />
				</div>
				<div className={`${styles.subScreen} ${isOpeningVisible ? '' : styles.visible}`}>
					<h1>We Are </h1>
					{isMobile ? <NavbarMobile /> : <NavbarPC />}
				</div>
			</div>
		</MetaWrapper>
	);
};

export default LandingPage;
