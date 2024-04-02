import classnames from 'classnames';
import NextLink from 'next/link';
import type { FC } from 'react';

import styles from './styles.module.css';

import GitHubIcon from '/public/icons/github.svg';
import TwitterIcon from '/public/icons/twitter-x.svg';
import WordmarkLogo from '/public/icons/wordmark-logo.svg';

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
          <WordmarkLogo />
        </NextLink>
        <div className={styles.socials}>
          <a
            href="https://twitter.com/TUATMCC"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter link"
            className={styles.socialLink}
          >
            <TwitterIcon width={32} height={32} color="currentColor" />
            MCC
          </a>
          <a
            href="https://twitter.com/tuatkyopro"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="twitter link"
            className={styles.socialLink}
          >
            <TwitterIcon width={32} height={32} color="currentColor" />
            競プロ
          </a>
          <a
            href="https://github.com/tuatmcc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github link"
            className={styles.socialLink}
          >
            <GitHubIcon width={32} height={32} color="currentColor" />
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
