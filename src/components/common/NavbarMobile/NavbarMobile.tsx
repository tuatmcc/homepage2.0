import Link from 'next/link';
import { FC, useState } from 'react';

import CloseIcon from '../Icons/CloseIcon';
import MenuBurgerIcon from '../Icons/MenuBurgerIcon';
import StarIcon from '../Icons/StarIcon';

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
		<nav>
			<div className={styles.navbarMobile}>
				<Drawer isOpen={isOpened} />
				<ul className={styles.navIn}>
					<Link href={ROUTES.HOME.PATH} className={styles.link}>
						<HomeIcon />
						<span className={styles.label}>Home</span>
					</Link>
					<Link href={ROUTES.ABOUT.PATH} className={styles.link}>
						<InfoIcon />
						<span className={styles.label}>AboutUs</span>
					</Link>
					<Link href={ROUTES.ACTIVITIES.PATH} className={styles.link}>
						<BrowserIcon />
						<span className={styles.label}>Activities</span>
					</Link>
					<Link href={ROUTES.BLOG.PATH} className={styles.link}>
						<StarIcon />
						<span className={styles.label}>Blog</span>
					</Link>
					<button className={styles.link} onClick={() => setIsOpened(!isOpened)}>
						{isOpened ? <CloseIcon /> : <MenuBurgerIcon />}
						<span className={styles.label}>Menu</span>
					</button>
				</ul>
			</div>
		</nav>
	);
};

export default NavbarMobile;
