import { FC, ReactNode, useContext } from 'react';

import styles from './style.module.css';

import { HeaderMobile }  from '~/components/common/HeaderMobile';
import { NavbarMobile } from '~/components/common/NavbarMobile';
import { NavbarPC } from '~/components/common/NavbarPC/NavbarPC';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';
import classNames from '~/utilities/classNames';

export type PageProps = {
	children?: ReactNode | ReactNode[];
  noMobileHeader?: boolean;
};

/**
 * headタグにtitle, description, ogpを設定する
 * @param param0
 * @returns
 */
export const Layout: FC<PageProps> = ({ children, noMobileHeader = false }) => {
	const { isMobile } = useContext(MediaQueryContext);
	return (
		<>
			{!isMobile && <NavbarPC />}
			<div className={classNames(styles.layout, noMobileHeader ? styles._stack : '')}>
				{isMobile && !noMobileHeader && <HeaderMobile />}
				{children}
			</div>
			{isMobile && <NavbarMobile />}
		</>
	);
};
