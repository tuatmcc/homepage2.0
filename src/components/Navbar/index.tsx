'use client';

import NextLink from 'next/link';
import { FC, ReactNode, useEffect, useState } from 'react';

import { NavbarMenuButton } from './NavbarMenuButton';
import styles from './styles.module.css';

import { TwitterIcon } from '~/components/Svg';
import { WordmarkLogo } from '~/components/Svg/WordmarkLogo';
import { BASE_ROUTES_LIST, ROUTES } from '~/constants/routes';
import { classNames } from '~/lib/classNames';

type NavbarProps = {
  noBrand?: boolean;
  theme: 'transparent' | 'opaque' | 'auto';
  themeSwitchHeight?: number;
};

const navLinks: ReactNode[] = [
  ...BASE_ROUTES_LIST.map(({ LABEL, PATH }) => (
    <NextLink key={PATH} href={PATH} className={styles.linkItem}>
      {LABEL}
    </NextLink>
  )),
  <NextLink
    key="twitter/tuatmcc"
    href="https://twitter.com/tuatmcc"
    className={styles.linkItem}
  >
    <TwitterIcon width={24} height={24} color="currentColor" />
    MCC
  </NextLink>,
  <NextLink
    key="twitter/tuatkyopro"
    href="https://twitter.com/tuatkyopro"
    className={styles.linkItem}
  >
    <TwitterIcon width={24} height={24} color="currentColor" />
    Kyopro
  </NextLink>,
];

export const Navbar: FC<NavbarProps> = ({
  theme,
  themeSwitchHeight,
  noBrand = false,
}) => {
  const [isNavDrawerOpen, setNavDrawerState] = useState<boolean>(false);
  const [navTheme, setNavTheme] = useState<string>(styles[`_${theme}`]);

  useEffect(() => {
    if (theme !== 'auto') return;
    if (scrollY >= (themeSwitchHeight || window.innerHeight)) {
      setNavTheme(styles._opaque);
    }
  }, [theme, themeSwitchHeight]);

  useEffect(() => {
    document.body.style.overflow = isNavDrawerOpen ? 'hidden' : 'auto';
    document.documentElement.style.scrollbarGutter = isNavDrawerOpen
      ? 'stable'
      : 'auto';
  }, [isNavDrawerOpen]);

  return (
    <>
      <div className={classNames(styles.navbar, navTheme)}>
        <div>
          {!noBrand && (
            <NextLink
              href={ROUTES.HOME.PATH}
              className={classNames(styles.brand, navTheme)}
            >
              <WordmarkLogo color="currentColor" />
            </NextLink>
          )}
        </div>
        <NavbarMenuButton
          isExpanded={isNavDrawerOpen}
          onClick={() => setNavDrawerState(!isNavDrawerOpen)}
        />

        <div
          className={classNames(
            styles.overlay,
            isNavDrawerOpen && styles._active,
          )}
          onClick={() => setNavDrawerState(false)}
          aria-label="drawer-closure"
        />

        <div
          className={classNames(
            styles.drawer,
            isNavDrawerOpen && styles._active,
          )}
        >
          <nav>
            <ul className={styles.drawerContent}>
              {navLinks.map((elem, index) => (
                <li
                  key={`${index}`}
                  className={classNames(
                    styles.drawerContentItem,
                    isNavDrawerOpen && styles._active,
                  )}
                  style={{ transitionDelay: `${index * 0.03}s` }}
                >
                  {elem}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
