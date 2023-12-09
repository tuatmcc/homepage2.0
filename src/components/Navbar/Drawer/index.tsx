import NextLink from 'next/link';
import { FC } from 'react';

import styles from './styles.module.css';

import { GitHubIcon, TwitterIcon } from '~/components/Svg';
import { XIcon } from '~/components/Svg/XIcon';
import { baseRouteList } from '~/constants/routes';

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
            {baseRouteList.map(({ label, path }, index) => (
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
              href="https://twitter.com/TUATMCC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter link"
            >
              <TwitterIcon size={28} color="white" />
            </a>
            <a
              href="https://x.com/tuatmcc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="x link"
            >
              <XIcon size={28} color="white" />
            </a>
            <a
              href="https://github.com/tuatmcc"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github link"
            >
              <GitHubIcon size={28} color="white" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
