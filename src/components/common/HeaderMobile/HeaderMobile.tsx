import Image from 'next/image';
import { FC } from 'react';

import styles from './style.module.css';

const HeaderMobile: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerIn}>
				<Image alt="" src="/mcc-logo.svg" width={48} height={48} className={styles.logo} />
				<h1 className={styles.title}>MCC</h1>
			</div>
		</header>
	);
};

export default HeaderMobile;
