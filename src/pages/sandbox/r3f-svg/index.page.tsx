import { Reflector, CameraShake, OrbitControls, useTexture, ReflectorProps } from '@react-three/drei';
import { Canvas, useThree, useFrame, useLoader, MeshProps, MaterialProps } from '@react-three/fiber';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
// import { KernelSize } from 'postprocessing';
import { useState, useRef, Suspense, useMemo, FC } from 'react';
import * as THREE from 'three';
import { Group, Vector2 } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

import styles from './style.module.css';

import Page from '~/components/common/Page/Page';

type TriangleProps = JSX.IntrinsicElements['group'] & { color: string } & MeshProps;

const Triangle: FC<TriangleProps> = ({ color, ...props }) => {
	const ref = useRef<Group>(null!);
	const [r] = useState(() => Math.random() * 10000);
	useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10));
	const {
		paths: [path1],
	} = useLoader(SVGLoader, '/mcc-logo.svg'); // prettier-ignore
	const geom1 = useMemo(
		() => SVGLoader.pointsToStroke(path1.subPaths[0].getPoints(), path1.userData?.style),
		[path1.subPaths, path1.userData?.style],
	);
	return (
		<group ref={ref}>
			<mesh geometry={geom1} {...props}>
				<meshBasicMaterial color={color} toneMapped={false} />
			</mesh>
		</group>
	);
};

const Triangle2: FC<TriangleProps> = ({ color, ...props }) => {
	const ref = useRef<Group>(null!);
	const [r] = useState(() => Math.random() * 10000);
	useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10));
	const {
		paths: [, path],
	} = useLoader(SVGLoader, '/mcc-logo.svg'); // prettier-ignore
	const geom = useMemo(
		() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData?.style),
		[path.subPaths, path.userData?.style],
	);
	return (
		<group ref={ref}>
			<mesh geometry={geom} {...props}>
				<meshBasicMaterial color={color} toneMapped={false} />
			</mesh>
		</group>
	);
};

const Triangle3: FC<TriangleProps> = ({ color, ...props }) => {
	const ref = useRef<Group>(null!);
	const [r] = useState(() => Math.random() * 10000);
	useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10));
	const {
		paths: [, , path],
	} = useLoader(SVGLoader, '/mcc-logo.svg'); // prettier-ignore
	const geom = useMemo(
		() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData?.style),
		[path.subPaths, path.userData?.style],
	);
	return (
		<group ref={ref}>
			<mesh geometry={geom} {...props}>
				<meshBasicMaterial color={color} toneMapped={false} />
			</mesh>
		</group>
	);
};

const Rig: FC<MeshProps> = ({ children }) => {
	const ref = useRef<Group>(null!);
	const vec = new THREE.Vector3();
	const { camera, mouse } = useThree();
	useFrame(() => {
		camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05);
		ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1);
		ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1);
	});
	return <group ref={ref}>{children}</group>;
};

const R3fTest: FC = () => {
	return (
		<Page meta={{ title: 'R3f Test' }}>
			<div className={styles.container}>
				<Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 15] }} className={styles.canvas}>
					<ambientLight />
					<OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
					<Suspense fallback={null}>
						<Rig>
							<Triangle color="white" scale={0.009} rotation={[0, 0, Math.PI / 2]} />
							<Triangle2 color="yellow" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
							<Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
							<Triangle3 color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
							<Triangle3 color="white" scale={0.009} rotation={[0, 0, Math.PI / 2]} />
							<Triangle color="yellow" scale={0.009} position={[4, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
							<Triangle2 color="orange" scale={0.009} position={[-4, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
							<Triangle2 color="white" scale={0.009} position={[-2, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
						</Rig>
						<EffectComposer multisampling={8}>
							<Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
							<Bloom kernelSize={5} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
						</EffectComposer>
					</Suspense>
					<CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />
				</Canvas>
			</div>
		</Page>
	);
};

export default R3fTest;
