import Link from 'next/link';
import { FC, useContext, useEffect, useState } from 'react';

import styles from './style.module.css';

import { MediaQueryContext } from '~/features/media-query';
import { MccLogo } from '~/features/ui/Svg';
import { ROUTES, BASE_ROUTES_LIST } from '~/routes/base';
import classNames from '~/utils/classNames';

type NavbarProps = {
  noBrand?: boolean;
	theme?: 'auto' | 'blue' | 'white';
};

export const Navbar: FC<NavbarProps> = ({ noBrand = false, theme = 'white' }) => {
	const { isMobile } = useContext(MediaQueryContext);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [color, setColor] = useState<string>('');

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

	return (
		<>
			<div className={classNames(styles.navbar)}>
				<Link href={ROUTES.HOME.PATH} className={classNames(styles.brand, color)}>
					{!noBrand && (
						<>
							{isMobile ? <MccLogo width={32} height={32} /> : <MccLogo width={56} height={56} />}
							<span className={classNames(styles.brandText)}>MCC</span>
						</>
					)}
				</Link>
				<button
					className={classNames(styles.hamburgerMenu, isDrawerOpen ? styles._active : '', color)}
					onClick={() => setIsDrawerOpen(!isDrawerOpen)}
					aria-label='menu toggler'
				>
					<span className={classNames(styles.hamburgerMenuLine1, isDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine2, isDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine3, isDrawerOpen ? styles._active : '')} />
				</button>
				<button
					className={classNames(styles.drawerBlur, isDrawerOpen ? styles._active : '')}
					onClick={() => setIsDrawerOpen(false)}
					aria-label='drawer-closre'
				/>
				<div className={classNames(styles.drawer, isDrawerOpen ? styles._active : '')}>
					<nav>
						<div className={styles.drawerContent}>
							{BASE_ROUTES_LIST.map((route, index) => (
								<div
									key={route.PATH}
									className={classNames(styles.drawerContentItem)}
									style={{ transitionDuration: index.toString() }}
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
