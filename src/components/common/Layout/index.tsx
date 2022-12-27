import { FC, ReactNode, useContext } from 'react';

import styles from './style.module.css';

import { HeaderMobile }  from '~/components/common/HeaderMobile';
import { NavbarMobile } from '~/components/common/NavbarMobile';
import { NavbarPC } from '~/components/common/NavbarPC/NavbarPC';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

export type PageProps = {
	children?: ReactNode | ReactNode[];
};

/**
 * headタグにtitle, description, ogpを設定する
 * @param param0
 * @returns
 */
export const Layout: FC<PageProps> = ({ children }) => {
	const { isMobile } = useContext(MediaQueryContext);
	return (
		<>
			{!isMobile && <NavbarPC />}
			<div className={styles.layout}>
				{isMobile && <HeaderMobile />}
				{children}
			</div>
			{isMobile && <NavbarMobile />}
		</>
	);
};
