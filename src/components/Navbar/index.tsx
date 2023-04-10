'use client';

import { FC, ReactNode, useEffect, useState } from 'react';

import styles from './style.module.css';

import { BasicLink } from '~/components/ui/BasicLink';
import { TwitterIcon } from '~/components/ui/Svg';
import { WordmarkLogo } from '~/components/ui/Svg/WordmarkLogo';
import { BASE_ROUTES_LIST, ROUTES } from '~/constants/routes';
import { classNames } from '~/libs/classNames';

type NavbarProps = {
	noBrand?: boolean;
	theme?: 'auto' | 'blue' | 'white';
};

const navLinks: ReactNode[] = [
	...BASE_ROUTES_LIST.map(({ LABEL, PATH }) => (
		<BasicLink key={PATH} href={PATH} className={styles.linkItem}>
			{LABEL}
		</BasicLink>
	)),
	<BasicLink key="twitter/tuatmcc" href="https://twitter.com/tuatmcc" className={styles.linkItem}>
		<TwitterIcon width={24} height={24} color="currentColor" />
		MCC
	</BasicLink>,
	<BasicLink
		key="twitter/tuatkyopro"
		href="https://twitter.com/tuatkyopro"
		className={styles.linkItem}
	>
		<TwitterIcon width={24} height={24} color="currentColor" />
		Kyopro
	</BasicLink>,
];

export const Navbar: FC<NavbarProps> = ({ noBrand = false, theme = 'white' }) => {
	const [isNavDrawerOpen, setNavDrawerState] = useState<boolean>(false);
	const [opaque, setOpaque] = useState<boolean>(false);

	useEffect(() => {
		if (theme !== 'auto') return;
		const changeColorByScroll = () => {
			if (window.scrollY >= window.innerHeight) {
				setOpaque(true);
				// set scrollbar-gutter: stable to html element
			} else {
				setOpaque(false);
				window.document.documentElement.style.scrollbarGutter = 'auto';
			}
		};

		window.addEventListener('scroll', changeColorByScroll);

		return () => window.removeEventListener('scroll', changeColorByScroll);
	}, [theme]);

	useEffect(() => {
		document.body.style.overflow = isNavDrawerOpen ? 'hidden' : 'auto';
		document.documentElement.style.scrollbarGutter = isNavDrawerOpen ? 'stable' : 'auto';
	}, [isNavDrawerOpen]);

	return (
		<>
			<div className={classNames(styles.navbar, opaque && styles._white)}>
				<div>
					{!noBrand && (
						<BasicLink
							href={ROUTES.HOME.PATH}
							className={classNames(styles.brand, opaque && styles._blue)}
						>
							<WordmarkLogo color="currentColor" />
						</BasicLink>
					)}
				</div>
				<button
					className={classNames(
						styles.hamburgerMenu,
						isNavDrawerOpen && styles._active,
						opaque && styles._blue,
					)}
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
					className={classNames(styles.overlay, isNavDrawerOpen && styles._active)}
					onClick={() => setNavDrawerState(false)}
					aria-label="drawer-closure"
				/>

				<div className={classNames(styles.drawer, isNavDrawerOpen && styles._active)}>
					<nav>
						<ul className={styles.drawerContent}>
							{navLinks.map((elem, index) => (
								<li
									key={`${index}`}
									className={classNames(
										styles.drawerContentItem,
										isNavDrawerOpen && styles._active,
									)}
									style={{ transitionDelay: `${index * 0.03}s` }}
								>
									{elem}
								</li>
							))}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);
};
