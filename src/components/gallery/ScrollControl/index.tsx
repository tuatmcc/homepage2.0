import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import { Canvas, MeshProps, useFrame, useThree } from '@react-three/fiber';
import { FC, Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Group, Mesh } from 'three';

import styles from './style.module.css';

type ImageProps = {
	color?: THREE.Color;
	url?: string;
};

const BackImage: FC<ImageProps & MeshProps> = ({ color = new THREE.Color(), ...props }) => {
	const ref = useRef<Mesh>(null!);
	const [hovered, setHobered] = useState<boolean>(false);
	useFrame(() => {
		if (ref.current) ref.current.material.color.lerp(color.set(hovered ? 'white' : '#ccc'), hovered ? 0.4 : 0.05);
	});
	return <ImageImpl ref={ref} onPointerOver={() => setHobered(true)} onPointerOut={() => setHobered(false)} {...props} />;
};

const Images: FC = () => {
	const { width, height } = useThree((state) => state.viewport);
	const data = useScroll();
	const group = useRef<Group>(null!);
	useFrame(() => {
		if (group.current) {
			group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
			group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
			group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3;
			group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
			group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1;
			group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3;
			group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3);
			group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3;
		}
	});
	return (
		<group ref={group}>
			<BackImage position={[-2, 0, 0]} scale={[4, height, 1]} url="/school-fes-2022-illustrace.webp" />
			<BackImage position={[2, 0, 1]} scale={3} url="/random-programing-image-1.webp" />
			<BackImage position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/random-programing-image-1.webp" />
			<BackImage position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="/random-programing-image-1.webp" />
			<BackImage position={[0.75, -height, 3.5]} scale={1.5} url="/random-programing-image-1.webp" />
			<BackImage position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="/random-programing-image-1.webp" />
			<BackImage
				position={[0, -height * 2 - height / 4, 0]}
				scale={[width, height, 1]}
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
