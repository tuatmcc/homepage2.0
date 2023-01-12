import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './style.module.css';

import { MomentumScroll, useMomentumScroll } from '~/features/MomentumScroll';

const useParallax = (value: MotionValue<number>, distance: number) => {
	return useTransform(value, [-1, 1], [-distance, distance]);
};

const useZoom = (value: MotionValue<number>, zoom: number) => {
	return useTransform(value, [-1, 1], [1 - zoom, 1 + zoom]);
};

const useVH = () => {
	const [vH, setVH] = useState<number>(0);
	useEffect(() => {
		setVH(innerHeight);
	}, []);
	return vH;
};

type LayerProps = {
	scrollProgressY?: MotionValue<number>;
};

const Layer1: FC<LayerProps> = () => {
	const ref = useRef(null);
	const vh = useVH();
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, vh * 1.5);
	const zoomImage1 = useZoom(scrollYProgress, 1);
	const zoomTitle = useZoom(scrollYProgress, -1);

	return (
		<section className={styles.layer1}>
			<h2 className={styles.subTitle}>Tuat Tech Group</h2>
			<motion.h1 className={styles.title} style={{ y, zoom: zoomTitle }}>
				MCC
			</motion.h1>
			<div className={styles.img1}>
				<motion.img src='/noko-fes-2022-illustrace.webp' style={{ zoom: zoomImage1 }} />
			</div>
		</section>
	);
};

const Layer2: FC<LayerProps> = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const y = useParallax(scrollYProgress, 300);
	const zoom = useZoom(scrollYProgress, 2);

	return (
		<section className={styles.layer2}>
			<div className={styles.subTitle}>私たちは、東京農工大学マイクロコンピュータークラブ</div>
			<motion.h1 className={styles.title} style={{ y }}>
				MCC
			</motion.h1>
			<div className={styles.img1}>
				<motion.img src='/noko-fes-2022-illustrace.webp' style={{ zoom }} />
			</div>
		</section>
	);
};

export const MomentumScrollWidthImage: FC = () => {
	const { currentY } = useMomentumScroll(0.1);
	return (
		<div className={styles.main}>
			<MomentumScroll pageHeight={'400vh'} currentY={currentY}>
				<Layer1 />

				<Layer2 />

				<section className={styles.section}>
					<h1>hello</h1>
				</section>

				<section className={styles.section}>
					<h1>hello</h1>
				</section>

				<section className={styles.section}>
					<h1>hello</h1>
				</section>
			</MomentumScroll>
		</div>
	);
};
