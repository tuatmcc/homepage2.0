import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { BASE_ROUTES_LIST } from '~/constants/routes';

export type FullScreenNavigationProps = {
	isOpened?: boolean;
	className?: string;
};

const FullScreenNavigation: FC<FullScreenNavigationProps> = ({ isOpened = false, className = '' }) => {
	const links = BASE_ROUTES_LIST.map((path) => {
		return (
			<li key={path.LABEL} className={styles.list}>
				<Link href={path.PATH} className={styles.link}>
					{path.LABEL}
				</Link>
			</li>
		);
	});

	return (
		<div className={`${styles.nav} ${isOpened ? styles.open : styles.close}`}>
			<nav className={styles.navIn}>
				<ul className={styles.linkList}>{links}</ul>
			</nav>
		</div>
	);
};

export default FullScreenNavigation;
