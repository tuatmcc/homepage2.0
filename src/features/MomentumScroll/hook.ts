import { useCallback, useEffect, useState } from 'react';

export const useMomentumScroll = (speed: number) => {
	const [targetY, setTargetY] = useState<number>(0);
	const [currentY, setCurrentY] = useState<number>(0);
	const offset = 0.1;
	const move = useCallback(() => {
		const framId = requestAnimationFrame(() => {
			setCurrentY(currentY + (targetY - currentY) * speed);
		});
		if (Math.abs(currentY - targetY) < offset) cancelAnimationFrame(framId);
	}, [currentY, targetY, speed]);
	useEffect(() => {
		move();
	}, [move]);
	useEffect(() => {
		addEventListener('scroll', () => {
			setTargetY(scrollY);
		});
	}, []);

	return {
		currentY,
		targetY,
	};
};
