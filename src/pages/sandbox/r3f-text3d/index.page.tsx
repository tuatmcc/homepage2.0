import { Text3D, Float, Center, OrbitControls } from '@react-three/drei';
import { Canvas, extend } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { FC, Suspense, useContext } from 'react';
import { Color } from 'three';
import threeFontJson from 'three/examples/fonts/helvetiker_bold.typeface.json';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

import styles from './style.module.css';

import Page from '~/components/common/Page/Page';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

extend({ TextGeometry });

const Text3DPage: FC = () => {
	const { isMobile } = useContext(MediaQueryContext);
	const font = new FontLoader().parse(threeFontJson);
	return (
		<Page meta={{ title: 'Text3D' }}>
			<div className={styles.container}>
				<Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, isMobile ? 10 : 5] }} className={styles.canvas}>
					<directionalLight position={[0, 0, 5]} />
					<Suspense fallback={null}>
						<Center>
							<Float floatIntensity={3} speed={2}>
								<mesh position={[0, 2, 0]}>
									{/* @ts-ignore */}
									<textGeometry args={['Micro', { font, size: 1, height: 1 }]} bevelEnabled />
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
						<Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
						<Bloom kernelSize={5} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
					</EffectComposer>
					<OrbitControls />
				</Canvas>
			</div>
		</Page>
	);
};

export default Text3DPage;
