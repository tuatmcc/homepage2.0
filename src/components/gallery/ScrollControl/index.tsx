import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { FC, Suspense, useState } from 'react';

import styles from './style.module.css';

const Images: FC = () => {
	const { width, height } = useThree((state) => state.viewport);
	const data = useScroll();
	const [zoom, setZoom] = useState(new Array<number>(6).fill(1));

	useFrame(() => {
		setZoom([
			1 + data.range(0, 1 / 3) / 3,
			1 + data.range(1.25 / 3, 1 / 3) / 3,
			1 + data.range(1.5 / 3, 1 / 3) / 3,
			1 + data.range(1.15 / 3, 1 / 3) / 2,
			1 + data.range(1.25 / 3, 1 / 3) / 1,
			1 + data.range(1.8 / 3, 1 / 3) / 3,
			1 + (1 - data.range(2 / 3, 1 / 3)) / 3,
		]);
	});
	return (
		<group>
			<ImageImpl position={[-2, 0, 0]} zoom={zoom[0]} scale={[4, height]} url="/school-fes-2022-illustrace.webp" />
			<ImageImpl position={[2, 0, 1]} zoom={zoom[1]} scale={3} url="/school-fes-2022-room.webp" />
			<ImageImpl position={[-2.3, -height, 2]} zoom={zoom[2]} scale={[1, 3]} url="/random-programing-image-1.webp" />
			<ImageImpl position={[-0.6, -height, 3]} zoom={zoom[3]} scale={[1, 2]} url="/random-programing-image-1.webp" />
			<ImageImpl position={[0.75, -height, 3.5]} zoom={zoom[4]} scale={1.5} url="/mcc-desktop-pc.webp" />
			<ImageImpl
				position={[0, -height * 1.5, 2.5]}
				zoom={zoom[5]}
				scale={[1.5, 3]}
				url="/random-programing-image-1.webp"
			/>
			<ImageImpl
				zoom={zoom[6]}
				position={[0, -height * 2 - height / 4, 0]}
				scale={[width, height]}
				url="/random-programing-image-1.webp"
			/>
		</group>
	);
};

export const ScrollControl: FC = () => {
	return (
		<Canvas gl={{ antialias: false }} dpr={[1, 1.5]} className={styles.canvas}>
			<Suspense fallback={null}>
				<ScrollControls damping={4} pages={3}>
					<Scroll>
						<Images />
					</Scroll>
					<Scroll html>
						<h1 className={styles.heading1}>to create</h1>
						<h1 className={styles.heading2}>a new</h1>
						<h1 className={styles.heading3}>World</h1>
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</Canvas>
	);
};
