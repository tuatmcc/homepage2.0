import Link from 'next/link';
import { FC } from 'react';

import { GitHubIcon } from '../Svg/GithubIcon';
import { MccLogo } from '../Svg/MccLogo';
import { TwitterIcon } from '../Svg/TwitterIcon';

import styles from './style.module.css';

import { ROUTES } from '~/routes/base';
import { classNames } from '~/utils/classNames';

type FotterProps = {
	semitransparent?: boolean;
};

export const Footer: FC<FotterProps> = ({ semitransparent = false }) => {
	return (
		<footer>
			<div className={classNames(styles.footerContent, semitransparent && styles._semitransparent)}>
				<Link href={ROUTES.HOME.PATH} className={styles.mccLogo}>
					<MccLogo width={32} height={32} />
					MCC
				</Link>
				<div className={styles.socials}>
					<a
						href="https://twitter.com/TUATMCC"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="twitter link"
						className={styles.socialLink}
					>
						<TwitterIcon width={32} height={32} />
						MCC
					</a>
					<a
						href="https://twitter.com/tuatkyopro"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="twitter link"
						className={styles.socialLink}
					>
						<TwitterIcon width={32} height={32} />
						競プロ
					</a>
					<a
						href="https://github.com/tuatmcc"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="github link"
						className={styles.socialLink}
					>
						<GitHubIcon width={32} height={32} />
						GitHub
					</a>
				</div>
				<div className={styles.copyRight}>©2023 東京農工大学マイクロコンピュータークラブ</div>
			</div>
		</footer>
	);
};
