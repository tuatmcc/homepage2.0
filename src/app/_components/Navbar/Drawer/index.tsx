import NextLink from 'next/link';
import type { FC } from 'react';

import styles from './styles.module.css';

import { navigationRoutes } from '~/constants/routes';
import GitHubIcon from '/public/icons/github.svg';
import TwitterIcon from '/public/icons/twitter-x.svg';

type DrawerProps = {
  isOpen: boolean;
  onClickOutside: () => void;
};

export const Drawer: FC<DrawerProps> = ({ isOpen, onClickOutside }) => {
  return (
    <>
      <div
        className={styles.overlay}
        aria-expanded={isOpen}
        onClick={onClickOutside}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            onClickOutside();
          }
        }}
      >
        <div
          className={styles.drawer}
          aria-expanded={isOpen}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === 'Escape') {
              onClickOutside();
            }
          }}
        >
          <ul className={styles.list}>
            {navigationRoutes.map(({ label, path }, index) => (
              <li key={label} className={styles.listItem}>
                <NextLink href={path} className={styles.link}>
                  <span className={styles.linkTextWrapper}>
                    <span
                      className={styles.linkText}
                      data-index={index}
                      data-animated={isOpen}
                    >
                      {label}
                    </span>
                  </span>
                </NextLink>
              </li>
            ))}
          </ul>
          <div className={styles.socials} data-animated={isOpen}>
            <a
              href="https://x.com/tuatmcc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="x link"
            >
              <TwitterIcon width={36} height={36} color="white" />
            </a>
            <a
              href="https://github.com/tuatmcc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github link"
            >
              <GitHubIcon width={36} height={36} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
