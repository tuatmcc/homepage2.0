import { motion, useScroll, useSpring, useTransform, MotionValue } from 'framer-motion';
import { FC, useRef } from 'react';

import styles from './style.module.css';

function useParallax(value: MotionValue<number>, distance: number) {
	return useTransform(value, [0, 1], [-distance, distance]);
}

const ParallaxImage: FC<{ src: string }> = ({ src }) => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);

	return (
		<section className={styles.layer}>
			<div className={styles.layerContent} ref={ref}>
				<img src={src} alt="A London skyscraper" className={styles.image} />
			</div>
			<motion.h2 style={{ y }}>{`#00${src}`}</motion.h2>
		</section>
	);
};

export const FramerPrallaxPrototype: FC = () => {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<>
			{[
				'/tuat-gate.webp',
				'/abstract-tech-image-1.webp',
				'/abstract-tech-image-4.webp',
				'/abstract-tech-image-5.webp',
			].map((src) => (
				<ParallaxImage key={src.toString()} src={src} />
			))}
			<motion.div className="progress" style={{ scaleX }} />
		</>
	);
};
