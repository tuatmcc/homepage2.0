import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { BASE_ROUTES_LIST } from '~/constants/routes';

type DrawerProps = {
  isOpen: boolean;
};

const Drawer: FC<DrawerProps> = ({ isOpen }) => {
  const links = BASE_ROUTES_LIST.map((route) => (
    <Link href={route.PATH} key={route.PATH} className={styles.link}>
      {route.LABEL}
    </Link>
  ));

  return (
    <div className={`${styles.drawer} ${isOpen && styles.open}`}>
      <nav className={styles.nav}>
        <ul className={styles.navIn}>{links}</ul>
      </nav>
    </div>
  );
};

export default Drawer;
