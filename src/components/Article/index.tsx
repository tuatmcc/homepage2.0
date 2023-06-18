import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

import 'katex/dist/katex.min.css';

export const Article: FC<{ children: ReactNode }> = ({ children }) => (
  <article className={styles.article}>{children}</article>
);
