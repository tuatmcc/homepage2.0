'use client';

import { Float } from '@react-three/drei';
import { Canvas, Object3DNode, extend, useFrame } from '@react-three/fiber';
import { FC, ReactNode, Suspense, useRef } from 'react';
import { Group, MathUtils } from 'three';
import threeFontJson from 'three/examples/fonts/helvetiker_bold.typeface.json';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

import styles from './style.module.css';

extend({ TextGeometry });

declare module '@react-three/fiber' {
	interface ThreeElements {
		textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
	}
}

type RigProps = {
	children: ReactNode;
};

const Rig: FC<RigProps> = ({ children }) => {
	// rome-ignore lint: expect a ref to be used
	const outer = useRef<Group>(null!);
	// rome-ignore lint: expect a ref to be used
	const inner = useRef<Group>(null!);
	useFrame(({ clock }) => {
		outer.current.position.y = MathUtils.lerp(outer.current.position.y, 0, 0.01);
		inner.current.rotation.y = (Math.sin(clock.getElapsedTime() / 8 + 5.5) * Math.PI) / 2;
		inner.current.position.z = Math.sin(clock.getElapsedTime() / 2) * 16;
		inner.current.position.y = 1 + Math.sin(clock.getElapsedTime()) * 3;
	});
	return (
		<group position={[0, -30, 0]} ref={outer}>
			<group ref={inner}>{children}</group>
		</group>
	);
};

type Text3dProps = {
	onNextButtonClick?: () => void;
};

const RandomText: FC = () => {
	const font = new FontLoader().parse(threeFontJson);
	const random = [
		'M',
		'I',
		'C',
		'R',
		'O',
		'C',
		'O',
		'M',
		'P',
		'U',
		'T',
		'E',
		'R',
		'C',
		'L',
		'U',
		'B',
	];
	return (
		<>
			{random.map((text, index) => (
				<Float key={text + index} floatIntensity={5} speed={3}>
					<mesh
						position={[Math.random() * 50 - 25, Math.random() * 50 - 25, Math.random() * 50 - 25]}
					>
						<textGeometry args={[text, { font, size: 1, height: 1 }]} />
						<meshPhysicalMaterial color="orange" />
					</mesh>
				</Float>
			))}
		</>
	);
};

export const HomeText3d: FC<Text3dProps> = ({ onNextButtonClick }) => {
	const font = new FontLoader().parse(threeFontJson);

	return (
		<Canvas
			dpr={[1, 1.5]}
			camera={{ position: [0, 15, 24] }}
			className={styles.canvas}
			onClick={onNextButtonClick}
		>
			<Suspense fallback={null}>
				<directionalLight position={[0, 0, 5]} />
				<Rig>
					<Float floatIntensity={5} speed={3}>
						<mesh position={[-20, 8, 0]}>
							<textGeometry args={['Micro', { font, size: 5, height: 1 }]} />
							<meshPhysicalMaterial color="green" />
						</mesh>
					</Float>
					<Float floatIntensity={5} speed={3}>
						<mesh position={[-16, 0, 0]}>
							<textGeometry args={['Computer', { font, size: 5, height: 1 }]} />
							<meshPhysicalMaterial color="cyan" />
						</mesh>
					</Float>
					<Float floatIntensity={5} speed={3}>
						<mesh position={[2, -8, 0]}>
							<textGeometry args={['Club', { font, size: 5, height: 1 }]} />
							<meshPhysicalMaterial color="yellowgreen" />
						</mesh>
					</Float>
					<RandomText />
				</Rig>
			</Suspense>
		</Canvas>
	);
};
