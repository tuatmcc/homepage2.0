import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import styles from './style.module.css';

import { Navbar } from '~/components/common/Navbar';

export const ArticleTest: FC = () => {
	const [navbarTheme, setNavbarTheme] = useState<'light' | 'transparent'>('transparent');
	useEffect(() => {
		addEventListener('scroll', () => {
			const scrollY = window.scrollY;
			if (scrollY > window.innerHeight * 0.6) {
				setNavbarTheme('light');
			} else {
				setNavbarTheme('transparent');
			}
		});

		return () => removeEventListener('scroll', () => {});
	}, []);
	return (
		<>
			<Navbar theme={navbarTheme} />

			<header>
				<Image alt="test" src="/tuat-gate.webp" className={styles.heroImage} width={640} height={480} />
				<div className={styles.hero}>
					<h1 className={styles.heroText}>ココに記事のタイトル</h1>
					<div className={styles.date}>2021-01-01</div>
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<div className={styles.article}>
						<h1>見出し</h1>
						<p>本文</p>
						<h2>見出し</h2>
						<p>本文</p>
						<p>2</p>
						<p>3</p>
						<h2>見出し</h2>
						<p>本文</p>
						<h2>見出し</h2>
						<p>本文</p>
					</div>
				</div>
			</main>
		</>
	);
};
