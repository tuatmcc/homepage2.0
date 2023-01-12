import { FC, useCallback, useEffect, useState } from 'react';

import styles from './style.module.css';

export const MomentumScroll: FC = () => {
	const [scrollHeight, setScrollHeight] = useState<number>(0);
	const [currentY, setCurrentY] = useState<number>(0);
	const move = useCallback(() => {
		requestAnimationFrame(() => {
			setCurrentY(currentY + (scrollHeight - currentY) * 0.1);
		});
	}, [currentY, scrollHeight]);
	useEffect(() => {
		move();
	}, [move]);
	useEffect(() => {
		addEventListener('scroll', () => {
			setScrollHeight(scrollY);
		});
	}, []);
	return (
		<div className={styles.container}>
			<div className={styles.scroller} style={{ transform: `translateY(-${currentY}px)` }}>
				<section className={styles.section}>
					<h1>hello</h1>
				</section>
				<section className={styles.section}>
					<h1>hello</h1>
				</section>
				<section className={styles.section}>
					<h1>hello</h1>
				</section>
				<section className={styles.section}>
					<h1>hello</h1>
				</section>
				<section className={styles.section}>
					<h1>hello</h1>
				</section>
			</div>
		</div>
	);
};
