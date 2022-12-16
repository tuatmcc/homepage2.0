import Link from 'next/link';
import { FC, useState } from 'react';

import CloseIcon from '../Icons/CloseIcon';
import EnvelopeIcon from '../Icons/EnvelopeIcon';
import MenuBurgerIcon from '../Icons/MenuBurgerIcon';

import styles from './style.module.css';

import Drawer from '~/components/common/Drawer/Drawer';
import BrowserIcon from '~/components/common/Icons/BrowserIcon';
import HomeIcon from '~/components/common/Icons/HomeIcon';
import InfoIcon from '~/components/common/Icons/InfoIcon';
import { ROUTES } from '~/constants/routes';

const NavbarMobile: FC = () => {
  // Drawerの開閉状態
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={styles.navbarMobile}>
      <Drawer isOpen={isOpened} />
      <nav className={styles.navbar}>
        <ul className={styles.navIn}>
          <Link href={ROUTES.HOME.PATH} className={styles.link}>
            <HomeIcon />
          </Link>
          <Link href={ROUTES.ABOUT.PATH} className={styles.link}>
            <InfoIcon />
          </Link>
          <Link href={ROUTES.ACTIVITIES.PATH} className={styles.link}>
            <BrowserIcon />
          </Link>
          <Link href={ROUTES.SANDBOX.PATH} className={styles.link}>
            <EnvelopeIcon />
          </Link>
          <button className={styles.link} onClick={() => setIsOpened(!isOpened)} onBlur={() => setIsOpened(false)}>
            {isOpened ? <CloseIcon /> : <MenuBurgerIcon />}
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMobile;
