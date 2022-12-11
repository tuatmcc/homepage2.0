import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import FullScreenNavigation from '../FullScreenNavigation/FullScreenNavigation';
import HumbergurIcon from '../HumbergurIcon/HumbergurIcon';

import styles from './style.module.css';

import { ROUTES } from '~/constants/routes';

export type HeaderProps = {};

/**
 * 簡易的なナビゲーションバー。レスポンシブ対応。
 * @returns
 */
const HeaderTop: FC<HeaderProps> = () => {
  const [isOpened, setIsOpened] = React.useState(false);

  return (
    <header className={styles.header}>
      <FullScreenNavigation isOpened={isOpened} />
      <a className={styles.brandLink} href={ROUTES.HOME.PATH}>
        <Image alt="" src="/mcc-logo.svg" width={32} height={32} />
        <h1 className={styles.brandName}>MCC</h1>
      </a>
      <HumbergurIcon
        className={styles.menuIcon}
        as="button"
        isActive={isOpened}
        onClick={() => setIsOpened(!isOpened)}
      />
    </header>
  );
};

export default HeaderTop;
