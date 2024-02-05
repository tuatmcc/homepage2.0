import NextLink from 'next/link';
import type { FC, ReactNode } from 'react';

import styles from './styles.module.css';

export type ArticleBottomProps = {
  parent?: {
    href: string;
    children: ReactNode;
  };
  // next?: {
  //   href: string;
  //   title: string;
  //   description: string;
  // };
  // prev?: {
  //   href: string;
  //   title: string;
  //   description: string;
  // };
};

export const ArticleBottom: FC<ArticleBottomProps> = ({
  parent,
  // next,
  // prev,
}) => {
  return (
    <div className={styles.articleBottom}>
      {parent && (
        <NextLink href={parent.href} className={styles.backToParent}>
          {parent.children}
        </NextLink>
      )}
    </div>
  );
};
