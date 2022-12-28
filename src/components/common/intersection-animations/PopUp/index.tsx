import { useInView, animated } from '@react-spring/web';
import { FC, ReactNode } from 'react';

const buildInteractionObserverThreshold = (count = 100) => {
	const threshold = [];

	const parts = 1 / count;

	for (let i = 0; i <= count; i++) {
		threshold.push(parseFloat((parts * i).toFixed(2)));
	}

	return threshold;
};

export const PopUp: FC<{ children?: ReactNode }> = ({ children }) => {
	const [ref, springs] = useInView(
		() => ({
			from: {
				transform: 'scaleY(0.1)',
				opacity: 0,
				y: 80,
			},
			to: {
				transform: 'scaleY(1)',
				opacity: 1,
				y: 0,
			},
			config: {
				mass: 1,
				tension: 200,
				friction: 20,
			},
			delay: 1000,
		}),
		{
			rootMargin: '-45% 0px -45% 0px',
			amount: buildInteractionObserverThreshold(),
			once: true,
		},
	);

	return (
		<animated.div ref={ref} style={springs}>
			{children}
		</animated.div>
	);
};
