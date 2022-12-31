import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Link from 'next/link';
import { FC, Suspense, useState } from 'react';

import styles from './style.module.css';

const pageCount = 4;

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
			<ImageImpl position={[-2, 0, 0]} zoom={zoom[0]} scale={[4, height]} url="/random-tech-image-3.webp" />
			<ImageImpl position={[2, 0, 1]} scale={3} zoom={zoom[1]} url="/noko-fes-2022-illustrace.webp" />
			<ImageImpl position={[-2.3, -height, 2]} scale={[1, 3]} zoom={zoom[2]} url="/noko-fes-2022-room.webp" />
			<ImageImpl position={[-0.6, -height, 3]} scale={[1, 2]} zoom={zoom[3]} url="/random-tech-image-3.webp" />
			<ImageImpl position={[0.75, -height, 3.5]} scale={1.5} zoom={zoom[4]} url="/mcc-desktop-pc.webp" />
			<ImageImpl position={[0, -height * 1.5, 2.5]} scale={[2, 3]} zoom={zoom[5]} url="/random-tech-image-3.webp" />
			<ImageImpl
				zoom={zoom[6]}
				position={[0, -height * 2 - height / 1, 0]}
				scale={[width, height]}
				url="/random-tech-image-1.webp"
			/>
		</group>
	);
};

const Html: FC = () => {
	const data = useScroll();
	const [style, setStyles] = useState(new Array<{ opacity: number }>(4));
	useFrame(() => {
		setStyles([
			{
				opacity: data.range(0.01 / pageCount, 0.1 / pageCount),
			},
			{
				opacity: data.range(0.5 / pageCount, 0.7 / pageCount),
			},
			{
				opacity: data.range(1 / pageCount, 0.5 / pageCount) * 0.5,
			},
			{
				opacity: data.range(1.8 / pageCount, 1.3 / pageCount) * 0.5,
			},
			{
				opacity: data.range(2.5 / pageCount, 2 / pageCount) * 0.5,
			},
		]);
	});
	return (
		<>
			<h1 className={styles.intro}>TUAT Tech Group</h1>
			<h1 className={styles.name1} style={style[0]}>
				MCC
			</h1>
			<h2 className={styles.name2} style={style[1]}>
				私たちは、東京農工大学
				<br />
				マイクロコンピュータークラブです。
			</h2>
			<p className={styles.information} style={style[2]}>
				Infomation
			</p>
			<p className={styles.and} style={style[3]}>
				&
			</p>
			<p className={styles.technology} style={style[4]}>
				Technology
			</p>
			<p className={styles.catchCopy}>
				<span>部員たちの興味は様々。</span>
				<span>プログラミング、グラフィック、ハードウェア...</span>
				<span>それぞれの興味を持つ部員が集まり、交流を重ねることで、お互いの視野を広げる。</span>
				<span>それが、私たちTUATMCCです。</span>
			</p>
			<div className={styles.card1}>
				<Link href="/about" className={styles.aboutLink}>MCCについてもっとよく知る →</Link>
			</div>
      <div className={styles.card2}>
        <Link href="/activities" className={styles.activitiesLink}>MCCの活動報告 →</Link>
      </div>
      <div className={styles.card3}>
        <Link href="/contact" className={styles.blogLink}>MCCのブログ →</Link>
      </div>
		</>
	);
};

export const HomeScrollControl: FC = () => {
	return (
		<Canvas gl={{ antialias: false }} dpr={[1, 1.5]} className={styles.canvas}>
			<Suspense fallback={null}>
				<ScrollControls damping={4} pages={pageCount}>
					<Scroll>
						<Images />
					</Scroll>
					<Scroll html>
						<Html />
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</Canvas>
	);
};
