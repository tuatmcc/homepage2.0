import { Scroll, Image as ImageImpl, ScrollControls, useScroll } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { FC, Suspense, useState } from 'react';

import styles from './style.module.css';

import { Navbar } from '~/components/common/Navbar';

const pageAmount = 3.5;

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
			<ImageImpl position={[-2, 0, 0]} zoom={zoom[0]} scale={[4, height]} url="/abstract-tech-image-3.webp" />
			<ImageImpl position={[2, 0, 1]} scale={3} zoom={zoom[1]} url="/noko-fes-2022-illustrace.webp" />
			<ImageImpl position={[-2.3, -height, 2]} scale={[1, 3]} zoom={zoom[2]} url="/noko-fes-2022-room.webp" />
			<ImageImpl position={[-0.6, -height, 3]} scale={[1, 2]} zoom={zoom[3]} url="/abstract-tech-image-3.webp" />
			<ImageImpl position={[0.75, -height, 3.5]} scale={1.5} zoom={zoom[4]} url="/mcc-desktop-pc.webp" />
			<ImageImpl position={[0, -height * 1.5, 2.5]} scale={[2, 3]} zoom={zoom[5]} url="/abstract-tech-image-5.webp" />
			<ImageImpl
				zoom={zoom[6]}
				position={[0, -height * (pageAmount - 1), 0]}
				scale={[width, height]}
				url="/abstract-tech-image-1.webp"
			/>
		</group>
	);
};

export const HomeTest: FC = () => {
	return (
		<>
			<Navbar theme='transparent' noBrand />
			<div className={styles.canvasContainer}>
				<Canvas gl={{ antialias: false }} dpr={[1, 1.5]}>
					<Suspense fallback={null}>
						<ScrollControls pages={pageAmount} damping={4}>
							<Scroll>
								<Images />
							</Scroll>
							<Scroll html>
								<div className={styles.scrollHtml}>
									<div className={styles.click}>Click Anywhere ⸺</div>
								</div>
							</Scroll>
						</ScrollControls>
					</Suspense>
				</Canvas>
			</div>
		</>
	);
};
