import Head from 'next/head';
import { FC, ReactNode, useContext, useState } from 'react';

import HeaderMobile from '../HeaderMobile/HeaderMobile';
import MetaWrapper from '../MetaWrapper/MetaWrapper';
import NavbarMobile from '../NavbarMobile/NavbarMobile';

import styles from './style.module.css';

import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';
import { MetaData } from '~/types/meta';

export type PageProps = {
	meta: MetaData;
	children?: ReactNode | ReactNode[];
};

/**
 * headタグにtitle, description, ogpを設定する
 * @param param0
 * @returns
 */
const Page: FC<PageProps> = ({ meta, children }: PageProps) => {
	const { isMobile } = useContext(MediaQueryContext);
	return (
		<MetaWrapper meta={meta}>
			{isMobile && <HeaderMobile />}
			<div className={styles.container}>{children}</div>
			{isMobile ? <NavbarMobile /> : <NavbarPC />}
		</MetaWrapper>
	);
};

export default Page;
