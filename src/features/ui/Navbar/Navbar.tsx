'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';

import { useNavDrawer } from './hook';
import styles from './style.module.css';

import { useMediaQuery } from '~/features/MediaQuery';
import { MccLogo } from '~/features/ui/Svg';
import { ROUTES, BASE_ROUTES_LIST } from '~/routes/base';
import classNames from '~/utils/classNames';

type NavbarProps = {
	noBrand?: boolean;
	theme?: 'auto' | 'blue' | 'white';
};

export const Navbar: FC<NavbarProps> = ({ noBrand = false, theme = 'white' }) => {
	const { isMobile } = useMediaQuery();
	const { isNavDrawerOpen, setNavDrawerState } = useNavDrawer();
	const [color, setColor] = useState<string>('');
	const router = useRouter();

	useEffect(() => {
		if (theme !== 'auto') return;
		window.addEventListener('scroll', () => {
			if (window.scrollY >= window.innerHeight) {
				setColor(styles._blue);
			} else {
				setColor('');
			}
		});
	}, [theme]);

	router.events?.on('routeChangeStart', () => setNavDrawerState(false));

	return (
		<>
			<div className={classNames(styles.navbar)}>
				{noBrand ? (
					<div />
				) : (
					<>
						<Link href={ROUTES.HOME.PATH} className={classNames(styles.brand, color)}>
							{isMobile ? <MccLogo width={32} height={32} /> : <MccLogo width={56} height={56} />}
							<span className={classNames(styles.brandText)}>MCC</span>
						</Link>
					</>
				)}
				<button
					className={classNames(styles.hamburgerMenu, isNavDrawerOpen ? styles._active : '', color)}
					onClick={() => setNavDrawerState(!isNavDrawerOpen)}
					aria-label="menu toggler"
				>
					<span className={classNames(styles.hamburgerMenuLine1, isNavDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine2, isNavDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine3, isNavDrawerOpen ? styles._active : '')} />
				</button>
				<button
					className={classNames(styles.drawerBlur, isNavDrawerOpen ? styles._active : '')}
					onClick={() => setNavDrawerState(false)}
					aria-label="drawer-closre"
				/>

				<div className={classNames(styles.drawer, isNavDrawerOpen ? styles._active : '')}>
					<nav>
						<div className={styles.drawerContent}>
							{BASE_ROUTES_LIST.map((route, index) => (
								<div
									key={route.PATH}
									className={classNames(styles.drawerContentItem, isNavDrawerOpen ? styles._active : '')}
									style={{ transitionDelay: `${index * 0.08}s` }}
								>
									<Link href={route.PATH} className={classNames(styles.linkItem)}>
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
