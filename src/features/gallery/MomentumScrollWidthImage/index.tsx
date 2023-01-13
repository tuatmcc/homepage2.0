import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

import styles from './style.module.css';

import { MomentumScroll, useMomentumScroll } from '~/features/MomentumScroll';

const useParallax = (value: MotionValue<number>, distance: number) => {
	return useTransform(value, [-1, 1], [-distance, distance]);
};

const useZoom = (value: MotionValue<number>, zoom: number, zoomRange?: [number, number]) => {
	return useTransform(value, [-1, 1], zoomRange ? zoomRange : [1 - zoom, 1 + zoom]);
};

const useVH = () => {
	const [vH, setVH] = useState<number>(0);
	useEffect(() => {
		setVH(innerHeight);
	}, []);
	return vH;
};

type LayerProps = {
	scrollYProgress: MotionValue<number>;
	vH?: number;
};

const Layer1: FC<LayerProps> = ({ scrollYProgress }) => {
	const vh = useVH();
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

const Layer2: FC<LayerProps> = ({ scrollYProgress }) => {
	const y = useParallax(scrollYProgress, -1000);
	const zoom = useZoom(scrollYProgress, 1);

	return (
		<section className={styles.layer2}>
			<div className={styles.subTitle}>私たちは、東京農工大学マイクロコンピュータークラブです。</div>
			<motion.h1 className={styles.title}>MCC</motion.h1>
			<motion.div className={styles.img1} style={{ y }}>
				<motion.img src='/noko-fes-2022-illustrace.webp' style={{ zoom }} />
			</motion.div>
		</section>
	);
};

const Layer4: FC<LayerProps> = ({ scrollYProgress }) => {
	const zoom = useZoom(scrollYProgress, 1, [6, 1.5]);

	return (
		<section className={styles.layer4}>
			<div className={styles.subTitle}>私たちは、東京農工大学マイクロコンピュータークラブ</div>
			<motion.h1 className={styles.title}>MCC</motion.h1>
			<motion.div className={styles.img1}>
				<motion.img src='/abstract-tech-image-1.webp' style={{ zoom }} />
			</motion.div>
		</section>
	);
};

export const MomentumScrollWidthImage: FC = () => {
	const { currentY } = useMomentumScroll(0.06);
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });

	return (
		<div className={styles.main}>
			<MomentumScroll pageHeight={'400vh'} currentY={currentY}>
				<Layer1 scrollYProgress={scrollYProgress} />

				<Layer2 scrollYProgress={scrollYProgress} />

				<section className={styles.section}>
					<h1>hello</h1>
				</section>

				<Layer4 scrollYProgress={scrollYProgress} />
			</MomentumScroll>
		</div>
	);
};
