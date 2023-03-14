import { FC, ReactNode, useState, useCallback, useEffect } from 'react';

import styles from './style.module.css';

import { LeftArrow } from '~/features/ui/Svg/LeftArrow';
import { RightArrow } from '~/features/ui/Svg/RightArrow';

export type CarouselProps = {
	components: ReactNode[];
	height?: string;
};

export const Carousel: FC<CarouselProps> = ({ components, height }) => {
	const transitionDuration = 0.5;
	const displayDuration = 5;
	const [index, setIndex] = useState(0);
	const [opacity, setOpacity] = useState<0 | 1>(1);
	const [currentSlide, setCurrentSlide] = useState<ReactNode>(<div className={styles.slide}>{components[0]}</div>);
	const [allTimeouts, setAllTimeouts] = useState<NodeJS.Timeout[]>([]);

	const clampIndex = useCallback((index: number, length: number) => {
		return index < 0 ? length - 1 : index >= length ? 0 : index;
	}, []);

	const changeSlide = useCallback(
		(direction: -1 | 1) => {
			allTimeouts.forEach((timeout) => clearTimeout(timeout));
			setOpacity(0);
			const transitionTimeout = setTimeout(() => {
				setIndex((prev) => clampIndex(prev + direction, components.length));
				setOpacity(1);
			}, transitionDuration * 1000);

			const displayTimeout = setTimeout(() => {
				changeSlide(1);
			}, (transitionDuration + displayDuration) * 1000);
			setAllTimeouts([transitionTimeout, displayTimeout]);

			return () => {
				clearTimeout(transitionTimeout);
				clearTimeout(displayTimeout);
			};
		},
		[components, clampIndex, allTimeouts],
	);

	useEffect(() => {
		setCurrentSlide(components[index]);
	}, [index, components]);

	useEffect(() => {
		const displayTimeout = setTimeout(() => {
			changeSlide(1);
		}, displayDuration * 1000);

		return () => clearTimeout(displayTimeout);
	}, []);

	return (
		<div className={styles.carousel} style={{ height: height }}>
			<button
				className={styles.leftArrow}
				onClick={() => {
					changeSlide(-1);
				}}
			>
				<LeftArrow />
			</button>
			<div className={styles.container}>
				<div className={styles.slide} style={{ transitionDuration: `${transitionDuration}s`, opacity: opacity }}>
					{currentSlide}
				</div>
			</div>
			<button
				className={styles.rightArrow}
				onClick={() => {
					changeSlide(1);
				}}
			>
				<RightArrow />
			</button>
		</div>
	);
};
