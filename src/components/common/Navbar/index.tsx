import Link from 'next/link';
import { FC, useState } from 'react';

import styles from './style.module.css';

import { MccLogo } from '~/components/common/icons/MccLogo';
import { ROUTES, BASE_ROUTES_LIST } from '~/constants/routes';
import classNames from '~/utilities/classNames';

type NavbarProps = {
	theme: 'light' | 'transparent';
	noBrand?: boolean;
};

export const Navbar: FC<NavbarProps> = ({ theme = 'transparent', noBrand = false }) => {
	const themeClass = theme === 'light' ? styles._light : styles._transparent;
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<>
			<div className={classNames(styles.navbar, themeClass)}>
				<Link href={ROUTES.HOME.PATH} className={classNames(styles.brand, themeClass)}>
					{!noBrand && (
						<>
							<MccLogo />
							<span className={classNames(styles.brandText, themeClass)}>MCC</span>
						</>
					)}
				</Link>
				<button
					className={classNames(styles.hamburgerMenu, themeClass, isDrawerOpen ? styles._active : '')}
					onClick={() => setIsDrawerOpen(!isDrawerOpen)}
				>
					<span className={classNames(styles.hamburgerMenuLine1, themeClass, isDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine2, themeClass, isDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine3, themeClass, isDrawerOpen ? styles._active : '')} />
				</button>
				<button
					className={classNames(styles.drawerBlur, isDrawerOpen ? styles._open : '')}
					onClick={() => setIsDrawerOpen(false)}
					value='drawerCloser'
				/>
				<div className={classNames(styles.drawer, themeClass, isDrawerOpen ? styles._open : '')}>
					<nav>
						<div className={styles.drawerContent}>
							{BASE_ROUTES_LIST.map((route, index) => (
								<div
									key={route.PATH}
									className={classNames(styles.drawerContentItem, themeClass, styles._open)}
									style={{ transitionDuration: index.toString() }}
								>
									<Link href={route.PATH} className={classNames(styles.linkItem, themeClass)}>
										{route.LABEL}
									</Link>
								</div>
							))}
						</div>
					</nav>
				</div>
			</div>
		</>
	);
};
