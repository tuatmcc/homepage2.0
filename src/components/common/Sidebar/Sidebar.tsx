import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { BASE_ROUTES_LIST, ROUTES } from '~/constants/routes';

const Sidebar: FC = () => {
  return (
    <>
      <aside className={styles.sidebar}>
        <nav className={styles.sidebarIn}>
          <ul className={styles.linkList}>
            {BASE_ROUTES_LIST.map((route) => (
              <li key={route.LABEL} className={styles.list}>
                <Link href={route.PATH} className={styles.link}>
                  {route.LABEL}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <header className={styles.header}>
        <div className={styles.brandLink}>
          <Image alt="" src="/mcc-logo.svg" width={36} height={36} />
          <h1 className={styles.brandName}>MCC</h1>
        </div>
      </header>
    </>
  );
};

export default Sidebar;
