import { FC } from 'react';

import Link from 'next/link';

import { BASE_ROUTES_LIST } from '~/constants/routes';

import styles from './style.module.css';

export type FullScreenNavigationProps = {
  isOpened?: boolean;
  className?: string;
};

const FullScreenNavigation: FC<FullScreenNavigationProps> = ({ isOpened = true, className = '' }) => {
  return (
    <div className={`${styles.nav} ${isOpened ? styles.open : styles.close}`}>
      <nav className={styles.navIn}>
        <ul className={styles.linkList}>
          {BASE_ROUTES_LIST.map((path) => {
            return (
              <li key={path.LABEL} className={styles.list}>
                <Link href={path.PATH} className={styles.link}>
                  {path.LABEL}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default FullScreenNavigation;
