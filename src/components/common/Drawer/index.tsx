import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { BASE_ROUTES_LIST } from '~/constants/routes';
import classNames from '~/utilities/classNames';

type DrawerProps = {
	isOpen: boolean;
};

export const Drawer: FC<DrawerProps> = ({ isOpen }) => {
	return (
		<div className={classNames(styles.drawer, isOpen ? styles.open : '')}>
			<ul className={styles.navIn}>
				{BASE_ROUTES_LIST.map((route) => (
					<li key={route.PATH} className={styles.listItem}>
						<Link href={route.PATH} className={styles.link}>
							{route.LABEL}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
