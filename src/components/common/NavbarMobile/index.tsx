import Link from 'next/link';
import { FC, useState } from 'react';

import styles from './style.module.css';

import { Drawer } from '~/components/common/Drawer';
import { BrowserIcon } from '~/components/common/icons/BrowserIcon';
import { CloseIcon } from '~/components/common/icons/CloseIcon';
import { HomeIcon } from '~/components/common/icons/HomeIcon';
import { InfoIcon } from '~/components/common/icons/InfoIcon';
import { MenuBurgerIcon } from '~/components/common/icons/MenuBurgerIcon';
import { StarIcon } from '~/components/common/icons/StarIcon';
import { ROUTES } from '~/constants/routes';

type NavbarMobileProps = {
	/** 未実装 */
	onToggle?: () => void;
};

export const NavbarMobile: FC<NavbarMobileProps> = () => {
	// Drawerの開閉状態
	const [isOpened, setIsOpened] = useState<boolean>(false);

	return (
		<nav>
			<Drawer isOpen={isOpened} onOutFocus={() => setIsOpened(false)} />
			<div className={styles.navbarMobile}>
				<div className={styles.navIn}>
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
				</div>
			</div>
		</nav>
	);
};
