'use client';

import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import styles from './style.module.css';

import { MccLogo } from '~/components/ui/Svg';
import { ROUTES, BASE_ROUTES_LIST } from '~/routes/base';
import { classNames } from '~/utils/classNames';

type NavbarProps = {
	noBrand?: boolean;
	theme?: 'auto' | 'blue' | 'white';
};

export const Navbar: FC<NavbarProps> = ({ noBrand = false, theme = 'white' }) => {
	const [isNavDrawerOpen, setNavDrawerState] = useState<boolean>(false);
	const [color, setColor] = useState<string>('');

	useEffect(() => {
		if (theme !== 'auto') return;
		const changeColorByScroll = () => {
			if (window.scrollY >= window.innerHeight) {
				setColor(styles._blue);
			} else {
				setColor('');
			}
		};

		window.addEventListener('scroll', changeColorByScroll);

		return () => window.removeEventListener('scroll', changeColorByScroll);
	}, [theme]);

	return (
		<>
			<div className={classNames(styles.navbar)}>
				<div>
					{!noBrand && (
						<>
							<Link href={ROUTES.HOME.PATH} className={classNames(styles.brand, color)}>
								<div className={styles.brandLogo}>
									<MccLogo />
								</div>
								<span className={styles.brandText}>MCC</span>
							</Link>
						</>
					)}
				</div>
				<button
					className={classNames(styles.hamburgerMenu, isNavDrawerOpen && styles._active, color)}
					onClick={() => setNavDrawerState(!isNavDrawerOpen)}
					aria-label="menu toggler"
				>
					<span
						className={classNames(styles.hamburgerMenuLine1, isNavDrawerOpen && styles._active)}
					/>
					<span
						className={classNames(styles.hamburgerMenuLine2, isNavDrawerOpen && styles._active)}
					/>
					<span
						className={classNames(styles.hamburgerMenuLine3, isNavDrawerOpen && styles._active)}
					/>
				</button>
				<button
					className={classNames(styles.drawerBlur, isNavDrawerOpen && styles._active)}
					onClick={() => setNavDrawerState(false)}
					aria-label="drawer-closre"
				/>

				<div className={classNames(styles.drawer, isNavDrawerOpen && styles._active)}>
					<nav>
						<ul className={styles.drawerContent}>
							{BASE_ROUTES_LIST.map((route, index) => (
								<li
									key={route.PATH}
									className={classNames(
										styles.drawerContentItem,
										isNavDrawerOpen && styles._active,
									)}
									style={{ transitionDelay: `${index * 0.08}s` }}
								>
									<Link href={route.PATH} className={classNames(styles.linkItem)}>
										{route.LABEL}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};
