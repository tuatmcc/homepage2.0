'use client';

import NextLink from 'next/link';
import { FC, useCallback, useState } from 'react';

import { Drawer } from './Drawer';
import { MenuButton } from './MenuButton';
import styles from './styles.module.css';

import { WordmarkLogo } from '~/components/Svg/WordmarkLogo';
import { classNames } from '~/lib/classNames';

type NavbarProps = {
  noBrand?: boolean;
  transparent?: boolean;
  color?: 'mcc' | 'white';
  theme?: 'transparent' | 'opaque' | 'auto';
};

export const Navbar: FC<NavbarProps> = ({
  transparent = false,
  color = 'mcc',
  noBrand = false,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const setNavDrawerState = useCallback((bool: boolean) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setIsOpen(bool);
      });
    } else {
      setIsOpen(bool);
    }
  }, []);

  return (
    <>
      <nav className={styles.nav}>
        <div
          className={classNames(
            styles.navbar,
            transparent && styles._transparent,
          )}
        >
          {!noBrand && (
            <NextLink href="/" className={styles.brand}>
              <WordmarkLogo color={color == 'white' ? 'white' : undefined} />
            </NextLink>
          )}
        </div>
        <Drawer
          isOpen={isOpen}
          onClickOutside={() => setNavDrawerState(false)}
        />
        <MenuButton
          isExpanded={isOpen}
          onClick={() => setNavDrawerState(!isOpen)}
          color={isOpen ? 'white' : color.replace('mcc', '#06c')}
        />
      </nav>
    </>
  );
};
