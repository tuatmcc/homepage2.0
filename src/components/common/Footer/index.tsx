import { FC } from 'react';

import { GitHubIcon } from '../icons/GitHubIcon';
import { MccLogo } from '../icons/MccLogo';
import { TwitterIcon } from '../icons/TwitterIcon';

import styles from './style.module.css';

export const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<MccLogo />
					MCC
				</div>
				<div className={styles.socials}>
					<GitHubIcon />
					<TwitterIcon />
				</div>
				<div className={styles.copyRight}>©2023 東京農工大学マイクロコンピュータークラブ</div>
			</div>
		</footer>
	);
};
