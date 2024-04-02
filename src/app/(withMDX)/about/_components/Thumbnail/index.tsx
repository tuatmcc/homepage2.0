import NextImage from 'next/image';
import type { FC } from 'react';

import styles from './styles.module.css';

export const Thumbnail: FC = () => (
  <>
    <NextImage
      src="/images/tuat-gate-filtered.webp"
      alt=""
      width={1920}
      height={1260}
      className={styles.background}
    />
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h1 className={styles.pageTitle}>What is MCC?</h1>
        <h2 className={styles.pageSubTitle}>MCCについて</h2>
      </div>
    </header>
  </>
);

