import Link from 'next/link';
import { FC, useState } from 'react';

import styles from './style.module.css';

import { Drawer } from '~/components/common/Drawer';
import { BrowserIcon } from '~/components/common/Icons/BrowserIcon';
import { CloseIcon } from '~/components/common/Icons/CloseIcon';
import { HomeIcon } from '~/components/common/Icons/HomeIcon';
import { InfoIcon } from '~/components/common/Icons/InfoIcon';
import { MenuBurgerIcon } from '~/components/common/Icons/MenuBurgerIcon';
import { StarIcon } from '~/components/common/Icons/StarIcon';
import { ROUTES } from '~/constants/routes';

type NavbarMobileProps = {
	/** 未実装 */
	onToggle?: () => void;
};

export const NavbarMobile: FC<NavbarMobileProps> = () => {
	// Drawerの開閉状態
	const [isOpened, setIsOpened] = useState<boolean>(false);

	return (
		<nav className={styles.navbarMobile}>
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
