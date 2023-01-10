import { FC } from 'react';

import { GitHubIcon } from '../Svg/GithubIcon';
import { MccLogo } from '../Svg/MccLogo';
import { TwitterIcon } from '../Svg/TwitterIcon';

import styles from './style.module.css';

import classNames from '~/utils/classNames';

type FotterProps = {
	semitransparent?: boolean;
};

export const Footer: FC<FotterProps> = ({ semitransparent = false }) => {
	return (
		<footer>
			<div className={classNames(styles.footerContent, semitransparent ? styles._semitransparent : '')}>
				<div className={styles.logo}>
					<MccLogo width={32} height={32} />
					MCC
				</div>
				<div className={styles.socials}>
					<a href="https://twitter.com/TUATMCC" target="_blank" rel="noopener noreferrer" aria-label='twitter link'>
						<TwitterIcon />
					</a>
					<a href="https://twitter.com/tuatkyopro" target="_blank" rel="noopener noreferrer" aria-label='twitter link'>
						<TwitterIcon />
					</a>
					<a href="https://github.com/tuatmcc" target="_blank" rel="noopener noreferrer" aria-label='github link'>
						<GitHubIcon />
					</a>
				</div>
				<div className={styles.copyRight}>©2023 東京農工大学マイクロコンピュータークラブ</div>
			</div>
		</footer>
	);
};
