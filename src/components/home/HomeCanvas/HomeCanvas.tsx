import { Environment, Plane } from '@react-three/drei';
import { Canvas, MeshProps, Props, useFrame } from '@react-three/fiber';
import React, { ReactNode, useRef, useState } from 'react';
import * as THREE from 'three';

import { Model } from '../Models/model';

import styles from './style.module.css';

const Box = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => {
    if (!mesh.current?.rotation) return;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
};

const MccModel = (props: any) => {
  const mesh = useRef<THREE.Mesh>(null!);
  // This reference will give us direct access to the mesh
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame

  useFrame((state, delta) => {
    if (!mesh.current?.rotation) return;
    mesh.current.rotation.y += 0.01;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      castShadow
    >
      <Model scale={2} rotation={[Math.PI / 2, 0, 0]} />
    </mesh>
  );
};

const HomeCanvas = () => {
  return (
    <Canvas className={styles.homeCanvas} camera={{ position: [-5, 0, 5], fov: 45 }}>
      <color attach="background" args={['#f0f0f0']} />
      <directionalLight position={[-10, 10, 5]} shadow-mapSize={[256, 256]} shadow-bias={-0.0001} castShadow>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
      </directionalLight>
      <MccModel position={[0, 0, 0]} />
      <Plane args={[100, 100]} position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <meshStandardMaterial color="#fff" side={THREE.DoubleSide} />
      </Plane>
    </Canvas>
  );
};

export default HomeCanvas;
