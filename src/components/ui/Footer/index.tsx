import { FC } from 'react';

import styles from './style.module.css';

import { BasicLink } from '~/components/ui/BasicLink';
import { GitHubIcon } from '~/components/ui/Svg/GithubIcon';
import { TwitterIcon } from '~/components/ui/Svg/TwitterIcon';
import { WordmarkLogo } from '~/components/ui/Svg/WordmarkLogo';
import { ROUTES } from '~/constants/routes';
import { classNames } from '~/libs/classNames';

type FotterProps = {
	semitransparent?: boolean;
};

export const Footer: FC<FotterProps> = ({ semitransparent = false }) => {
	return (
		<footer>
			<div className={classNames(styles.footer, semitransparent && styles._semitransparent)}>
				<BasicLink href={ROUTES.HOME.PATH} className={styles.wordmarkLogo}>
					<WordmarkLogo size={32} />
				</BasicLink>
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
