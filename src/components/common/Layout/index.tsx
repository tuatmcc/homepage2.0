import { FC, ReactNode, useContext, useEffect, useState } from 'react';

import { Navbar } from '../Navbar';

import styles from './style.module.css';

import classNames from '~/utils/classNames';

export type PageProps = {
	children?: ReactNode | ReactNode[];
  noMobileHeader?: boolean;
  navbarTheme?: 'auto' | 'light' | 'transparent';
};

/**
 * headタグにtitle, description, ogpを設定する
 * @param param0
 * @returns
 */
export const Layout: FC<PageProps> = ({ children, noMobileHeader = false, navbarTheme = 'auto' }) => {
  const [positionalNavbarTheme, setNavbarTheme] = useState<'light' | 'transparent'>('transparent');
	useEffect(() => {
    if (navbarTheme !== 'auto') return;

		addEventListener('scroll', () => {
			const scrollY = window.scrollY;
			if (scrollY > window.innerHeight * 0.6) {
				setNavbarTheme('light');
			} else {
				setNavbarTheme('transparent');
			}
		});

		return () => removeEventListener('scroll', () => {});
	}, [navbarTheme]);
	return (
		<>
    <Navbar theme={navbarTheme !== 'auto' ? navbarTheme : positionalNavbarTheme} />
			<div className={classNames(styles.layout)}>
				{children}
			</div>
		</>
	);
};
