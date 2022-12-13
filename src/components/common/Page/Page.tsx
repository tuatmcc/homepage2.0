import Head from 'next/head';
import Image from 'next/image';
import { FC, ReactNode, useContext, useState } from 'react';

import BackgroundDesign from '../BackgroundDesign/BakgroundDesign';
import FullScreenNavigation from '../FullScreenNavigation/FullScreenNavigation';
import HeaderTop from '../HeaderTop/HeaderTop';
import Sidebar from '../Sidebar/Sidebar';
import Tag from '../Tag/Tag';
import TagList from '../TagList/TagList';

import styles from './style.module.css';

import { BASE_ROUTES_LIST, ROUTES } from '~/constants/routes';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

export type PageMeta = {
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
  img?: string;
  author?: string;
};

export type PageProps = {
  meta: PageMeta;
  children: ReactNode | ReactNode[];
  isMdx?: boolean;
};

/**
 * 共通ページレイアウトのプロトタイプ。特に、記事のレイアウトに使用する。レスポンシブ対応。
 * @param param0
 * @returns
 */
export const Page: FC<PageProps> = ({ meta, children, isMdx = false }: PageProps) => {
  const { title, description, img, tags } = meta;
  const { isMobile } = useContext(MediaQueryContext);

  const [isOpened, setIsOpened] = useState<boolean>(false);

  const tagElements = tags?.map((tag) => <Tag key={tag}>{`#${tag}`}</Tag>);

  return (
    <>
      <Head>
        <title>{`${title} - TUATMCC`}</title>
        {description && <meta name="description" content={description} />}
        {img && <meta property="og:image" content={img} />}
      </Head>

      <BackgroundDesign />

      {isMobile ? <HeaderTop /> : <Sidebar />}

      <main className={styles.main}>
        <div className={styles.mainIn}>
          <div className={styles.date}>{meta.date && meta.date}</div>
          <div className={styles.mainVisual}>
            <Image
              src={img ? img : '/mcc-design.jpg'}
              alt="Image"
              width={200}
              height={200}
              className={styles.img}
              onError={(e) => {
                e.currentTarget.hidden = true;
              }}
            />
            <h1 className={styles.title}>{title}</h1>
          </div>
          <TagList className={styles.tagList}>{tagElements && tagElements}</TagList>
          <div className={`${styles.article}`}>{children}</div>
        </div>
      </main>

      {isMobile && <FullScreenNavigation isOpened={isOpened} />}
    </>
  );
};
