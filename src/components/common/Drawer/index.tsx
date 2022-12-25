import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './style.module.css';

import { BASE_ROUTES_LIST } from '~/constants/routes';

type DrawerProps = {
	isOpen: boolean;
	className?: string;
};

const Drawer: FC<DrawerProps> = ({ isOpen, className = '' }) => {
	const links = BASE_ROUTES_LIST.map((route) => (
		<li key={route.PATH} className={styles.listItem}>
			<Link href={route.PATH} className={styles.link}>
				{route.LABEL}
			</Link>
		</li>
	));

	return (
		<div className={`${styles.drawer} ${isOpen && styles.open} ${className}`}>
			<ul className={styles.navIn}>{links}</ul>
		</div>
	);
};

export default Drawer;
