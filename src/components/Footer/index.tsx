import classnames from 'classnames';
import NextLink from 'next/link';
import { FC } from 'react';

import styles from './styles.module.css';

import { GitHubIcon } from '~/components/Svg/GithubIcon';
import { TwitterIcon } from '~/components/Svg/TwitterIcon';
import { WordmarkLogo } from '~/components/Svg/WordmarkLogo';

type FotterProps = {
  semitransparent?: boolean;
};

export const Footer: FC<FotterProps> = ({ semitransparent = false }) => {
  return (
    <footer>
      <div
        className={classnames(
          styles.footer,
          semitransparent && styles._semitransparent,
        )}
      >
        <NextLink href="/" className={styles.wordmarkLogo}>
          <WordmarkLogo size={32} />
        </NextLink>
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
        <div className={styles.copyRight}>
          ©2023 東京農工大学マイクロコンピュータークラブ
        </div>
      </div>
    </footer>
  );
};
