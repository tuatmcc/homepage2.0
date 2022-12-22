import Head from 'next/head';
import { FC, ReactNode, useContext, useState } from 'react';

import HeaderMobile from '../HeaderMobile/HeaderMobile';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import Tag from '../Tag/Tag';

import styles from './style.module.css';

import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';
import { MetaData } from '~/types/meta';

export type PageProps = {
	meta: MetaData;
	children: ReactNode | ReactNode[];
	isMdx?: boolean;
};

/**
 * 共通ページレイアウト
 * @param param0
 * @returns
 */
const Page: FC<PageProps> = ({ meta, children, isMdx = false }: PageProps) => {
	const { title, description, img, tags } = meta;
	const { isMobile } = useContext(MediaQueryContext);

	const tagElements = tags?.map((tag) => <Tag key={tag}>{`#${tag}`}</Tag>);

	return (
		<>
			<Head>
				<title>{`${title} - TUATMCC`}</title>
				<meta property="og:site_name" content={title} />
				{description && (
					<>
						<meta name="description" content={description} />
						<meta property="og:description" content={description} />
					</>
				)}
				{img && <meta property="og:image" content={img} />}
			</Head>

			{isMobile && <HeaderMobile />}
			{isMobile ? <NavbarMobile /> : <NavbarPC />}
			{children}
		</>
	);
};

export default Page;
