import Head from 'next/head';
import Image from 'next/image';
import { FC, ReactNode, useContext, useState } from 'react';

import HeaderMobile from '../HeaderMobile/HeaderMobile';
import NavbarMobile from '../NavbarMobile/NavbarMobile';
import Sidebar from '../Sidebar/Sidebar';
import Tag from '../Tag/Tag';
import TagList from '../TagList/TagList';

import styles from './style.module.css';

import FullScreenNavigation from '~/components/common/FullScreenNavigation/FullScreenNavigation';
import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
import { MetaData } from '~/components/types/meta';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

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
        {description && <meta name="description" content={description} />}
        {img && <meta property="og:image" content={img} />}
      </Head>

      {isMobile && <HeaderMobile />}
      {isMobile ? <NavbarMobile /> : <NavbarPC />}

      <main className={styles.main}>
        <div className={styles.mainIn}>{children}</div>
      </main>
    </>
  );
};

export default Page;
