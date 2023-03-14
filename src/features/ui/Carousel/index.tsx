import { FC, ReactNode, useState, useCallback, useEffect } from 'react';

import styles from './style.module.css';

import { LeftArrow } from '~/features/ui/Svg/LeftArrow';
import { RightArrow } from '~/features/ui/Svg/RightArrow';
import classNames from '~/utils/classNames';

export type CarouselProps = {
	components: ReactNode[];
	displayDuration?: number;
};

export const Carousel: FC<CarouselProps> = ({ components, displayDuration = 8 }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [displayTimeout, setDisplayTimeout] = useState<NodeJS.Timeout>();
	const clampIndex = useCallback((index: number, length: number) => {
		return index < 0 ? length - 1 : index >= length ? 0 : index;
	}, []);

	const changeSlide = useCallback(
		(direction: 1 | -1) => {
			clearTimeout(displayTimeout);
			setCurrentIndex((prevIndex) => clampIndex(prevIndex + direction, components.length));
		},
		[components.length, clampIndex, displayTimeout],
	);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCurrentIndex(clampIndex(currentIndex + 1, components.length));
		}, displayDuration * 1000);
		setDisplayTimeout(timeout);

		return () => clearTimeout(timeout);
	}, [currentIndex, components.length, clampIndex, displayDuration]);

	return (
		<div className={styles.carousel}>
			<div className={styles.container}>
				{components.map((component, index) =>
					index === currentIndex ? (
						<div key={`${component?.toString()}-${index}`} className={classNames(styles.slide, styles._visible)}>
							{component}
						</div>
					) : (
						<div key={`${component?.toString()}-${index}`} className={classNames(styles.slide, styles._hidden)}>
							{component}
						</div>
					),
				)}
			</div>

			<button
				className={styles.leftArrow}
				aria-label="Previous slide"
				onClick={() => {
					changeSlide(-1);
				}}
			>
				<LeftArrow />
			</button>
			<button
				className={styles.rightArrow}
				aria-label="Next slide"
				onClick={() => {
					changeSlide(1);
				}}
			>
				<RightArrow />
			</button>
		</div>
	);
};
