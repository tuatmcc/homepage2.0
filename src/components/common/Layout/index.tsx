import { FC, ReactNode, useContext } from 'react';

import HeaderMobile from '../HeaderMobile';
import NavbarMobile from '../NavbarMobile';

import styles from './style.module.css';

import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

export type PageProps = {
	children?: ReactNode | ReactNode[];
};

/**
 * headタグにtitle, description, ogpを設定する
 * @param param0
 * @returns
 */
const Layout: FC<PageProps> = ({ children }) => {
	const { isMobile } = useContext(MediaQueryContext);
	return (
		<>
			{!isMobile && <NavbarPC />}
			<div className={styles.container}>
				{isMobile && <HeaderMobile />}
				{children}
			</div>
			{isMobile && <NavbarMobile />}
		</>
	);
};

export default Layout;
