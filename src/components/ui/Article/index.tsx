import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export const Article: FC<{ children: ReactNode }> = ({ children }) => (
  <article className={styles.article}>{children}</article>
);
