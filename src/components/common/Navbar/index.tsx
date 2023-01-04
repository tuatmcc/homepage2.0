import Link from 'next/link';
import { FC, useState } from 'react';

import styles from './style.module.css';

import { MccLogo } from '~/components/common/icons/MccLogo';
import { ROUTES, BASE_ROUTES_LIST } from '~/constants/routes';
import classNames from '~/utils/classNames';

type NavbarProps = {
	theme: 'auto' | 'light' | 'transparent';
	noBrand?: boolean;
};

export const Navbar: FC<NavbarProps> = ({ noBrand = false }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<>
			<div className={classNames(styles.navbar)}>
				<Link href={ROUTES.HOME.PATH} className={classNames(styles.brand)}>
					{!noBrand && (
						<>
							<MccLogo />
							<span className={classNames(styles.brandText)}>MCC</span>
						</>
					)}
				</Link>
				<button
					className={classNames(styles.hamburgerMenu, isDrawerOpen ? styles._active : '')}
					onClick={() => setIsDrawerOpen(!isDrawerOpen)}
				>
					<span className={classNames(styles.hamburgerMenuLine1, isDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine2, isDrawerOpen ? styles._active : '')} />
					<span className={classNames(styles.hamburgerMenuLine3, isDrawerOpen ? styles._active : '')} />
				</button>
				<button
					className={classNames(styles.drawerBlur, isDrawerOpen ? styles._active : '')}
					onClick={() => setIsDrawerOpen(false)}
					value='drawerCloser'
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
