import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type CarouselProps = {
	components: ReactNode[];
	interval?: number;
};

export const Carousel: FC<CarouselProps> = ({ components }) => {
	return (
		<>
			{components.map((component, index) => (
				<section key={`${index}`}>
					<div className={styles.slide}>{component}</div>
				</section>
			))}
		</>
	);
};
