import { Float, Center, OrbitControls, Text } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { FC, Suspense, useContext } from 'react';
import threeFontJson from 'three/examples/fonts/helvetiker_bold.typeface.json';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

import styles from './style.module.css';

import { MediaQueryContext } from '~/providers/MediaQueryProvider';

extend({ TextGeometry });

type Text3dProps = {
	onNextButtonClick?: () => void;
};

type ButtonProps = {
	onClick?: () => void;
};

const Button: FC<ButtonProps> = ({ onClick }) => {
	return (
		<mesh position={[2, -2, 0]} onClick={onClick}>
			<boxGeometry args={[2, 1, 0.2]}>
				<meshPhysicalMaterial color='white' />
			</boxGeometry>
			<Text color='black' fontSize={0.1} position={[0, 0, 0.2]} scale={[3, 3, 3]}>
				Enter {'>'}
			</Text>
		</mesh>
	);
};

export const Text3d: FC<Text3dProps> = ({ onNextButtonClick }) => {
	const { isMobile } = useContext(MediaQueryContext);
	const font = new FontLoader().parse(threeFontJson);

	return (
		<Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, isMobile ? 10 : 5] }} className={styles.canvas}>
			<directionalLight position={[0, 0, 5]} />
			<Suspense fallback={null}>
				<Float floatIntensity={3} speed={2}>
					<Button onClick={onNextButtonClick} />
				</Float>
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
