import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type CarouselProps = {
	components: ReactNode[];
	interval?: number;
};

export const Carousel: FC<CarouselProps> = ({ components }) => {
	return (
		<div className={styles.carousel}>
      <div className={styles.leftArrow} />
			{components.map((component, index) => (
				<div key={`${index}`} className={styles.slide}>{component}</div>
			))}
		</div>
	);
};
