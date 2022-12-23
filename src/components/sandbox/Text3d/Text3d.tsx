import { Physics, Debug, usePlane, useCompoundBody } from '@react-three/cannon';
import { Float, Center, OrbitControls, Html } from '@react-three/drei';
import { Canvas, extend, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { FC, Suspense, useContext, useEffect, useRef, useState } from 'react';
import { BoxGeometry, Mesh } from 'three';
import threeFontJson from 'three/examples/fonts/helvetiker_bold.typeface.json';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

import styles from './style.module.css';

import { MediaQueryContext } from '~/providers/MediaQueryProvider';

extend({ TextGeometry });

type Text3dProps = {
	onClose?: () => void;
};

type ButtonProps = {
	onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ onClick }) => {
	return (
		<mesh position={[2, -2, 0]} onClick={onClick}>
			<boxGeometry args={[0.5, 0.5, 0.5]}>
				<meshPhysicalMaterial color='white' />
				<Html distanceFactor={1.5} position={[2, -2.5, 0]} transform occlude>
					<h2 style={{ fontSize: 32 }}>↑ Click This</h2>
				</Html>
			</boxGeometry>
		</mesh>
	);
};

const Text3d: FC<Text3dProps> = () => {
	const { isMobile } = useContext(MediaQueryContext);
	const font = new FontLoader().parse(threeFontJson);
	const [isFolding, setIsFolding] = useState(false);

	return (
		<Canvas
			dpr={[1, 1.5]}
			camera={{ position: [0, 0, isMobile ? 10 : 5] }}
			className={`${styles.canvas} ${isFolding ? styles.folding : ''}`}
		>
			<directionalLight position={[0, 0, 5]} />
			<Button onClick={() => setIsFolding(!isFolding)} />
			<Suspense fallback={null}>
				<Center>
					<Float floatIntensity={3} speed={2}>
						<mesh position={[0, 2, 0]}>
							{/* @ts-ignore */}
							<textGeometry args={['Micro', { font, size: 1, height: 1 }]} />
							<meshPhysicalMaterial color='orange' />
						</mesh>
					</Float>
					<Float floatIntensity={3} speed={2}>
						<mesh position={[0, 0, 0]}>
							{/* @ts-ignore */}
							<textGeometry args={['Computer', { font, size: 1, height: 1 }]} />
							<meshPhysicalMaterial color='cyan' />
						</mesh>
					</Float>
					<Float floatIntensity={3} speed={2}>
						<mesh position={[0, -2, 0]}>
							{/* @ts-ignore */}
							<textGeometry args={['Club', { font, size: 1, height: 1 }]} />
							<meshPhysicalMaterial color='yellowgreen' />
						</mesh>
					</Float>
				</Center>
			</Suspense>
			<EffectComposer multisampling={8}>
				<Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.7} />
				<Bloom kernelSize={5} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
			</EffectComposer>
			<OrbitControls enableZoom={false} />
		</Canvas>
	);
};

export default Text3d;
