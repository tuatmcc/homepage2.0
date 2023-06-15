import styles from './style.module.css';

import compile from '~/libs/compiler';

export const Article = async ({ markdown }: { markdown: string }) => {
  const content = await compile(markdown);
  return <article className={styles.article}>{content}</article>;
};
