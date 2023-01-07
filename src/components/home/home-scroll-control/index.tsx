import { Preload, ScrollControls, Scroll, useScroll, Image as ImageImpl } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Link from 'next/link';
import { FC, Suspense, useContext, useEffect, useState } from 'react';

import styles from './style.module.css';

import { GitHubIcon } from '~/components/common/icons/github-icon';
import { TwitterIcon } from '~/components/common/icons/twitter-icon';
import { MediaQueryContext } from '~/providers/media-query-context-provider';
import classNames from '~/utils/classNames';

const pageAmout = 3.5;

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
				position={[0, -height * (pageAmout - 1), 0]}
				scale={[width, height]}
				url="/abstract-tech-image-1.webp"
			/>
		</group>
	);
};

type HtmlProps = {
	mediaQuery: {
		isMobile: boolean;
		orientation: 'portrait' | 'landscape';
	};
};

const Html: FC<HtmlProps> = ({ mediaQuery }) => {
	const { isMobile } = mediaQuery;
	const data = useScroll();
	const vH = window.innerHeight; // viewport height
	const [opacities, setOpacities] = useState<number[]>([]);

	useFrame(() => {
		setOpacities([
			data.range(0.01 / pageAmout, 0.1 / pageAmout),
			1 - data.range(0.01 / pageAmout, 0),
			data.range(0.5 / pageAmout, 0.2 / pageAmout),
			data.range(1.2 / pageAmout, 0.8 / pageAmout) * 0.5,
			data.range(1.8 / pageAmout, 1.5 / pageAmout) * 0.5,
			data.range(2.5 / pageAmout, 1.5 / pageAmout) * 0.5,
			data.range(1.4 / pageAmout, 0.5 / pageAmout),
		]);
	});
	// コントロールと見やすさのため仕方なく、styleを直接書いている
	return (
		<>
			<h1 className={styles.intro} style={{ top: vH * 0.2 }}>
				TUAT Tech Group
			</h1>
			<h1 className={styles.mcc} style={{ top: vH * 0.5 }}>
				MCC
			</h1>
			<div className={styles.downArrow} style={{ top: vH * 0.9, opacity: opacities[1] }} />
			<h2 className={styles.name2} style={{ top: vH * 1.1, opacity: opacities[2] }}>
				私たちは、東京農工大学
				<br />
				マイクロコンピュータークラブ、
				<br />
				TUATMCCです。
			</h2>
			<p className={styles.information} style={{ top: vH * 1.5, opacity: opacities[3] }}>
				Infomation
			</p>
			<p className={styles.and} style={{ top: vH * 2, opacity: opacities[4] }}>
				&
			</p>
			<p className={styles.technology} style={{ top: vH * 2.5, opacity: opacities[5] }}>
				Technology
			</p>
			<p className={styles.catchCopy} style={{ top: vH * 1.8, opacity: opacities[6] }}>
				<span className={styles.sentence}>技術を探求する部員が集結するMCC。</span>
				<span className={styles.sentence}>プログラミング、グラフィックデザイン、ハードウェアなど、</span>
				<span className={styles.sentence}>様々な興味を持つ部員たちが交流を重ね、</span>
				<span className={styles.sentence}>新しい視野を開拓する。</span>
				<span className={styles.sentence}>MCCで、あなたも技術を探求しませんか？</span>
				by ChatGPT
			</p>
			<div className={styles.bottms} style={{ top: vH * 2.8, height: vH * (3 - 2.5) }}>
				<div className={styles.cards}>
					<Link href="/about" className={styles.cardItem}>
						もっとMCCを知る →
					</Link>
					<Link href="/activities" className={styles.cardItem}>
						活動報告 →
					</Link>
					<Link href="/blog" className={styles.cardItem}>
						ブログ →
					</Link>
					<div className={styles.socials}>
						<a href="https://twitter.com/TUATMCC" target="_blank" rel="noopener noreferrer" aria-label='twitter link'>
							<TwitterIcon />
						</a>
						<a href="https://github.com/tuatmcc" target="_blank" rel="noopener noreferrer" aria-label='github link'>
							<GitHubIcon />
						</a>
						<a
							href="https://twitter.com/tuatkyopro"
							target="_blank"
							rel="noopener noreferrer"
							aria-label='twitter link'
						>
							<TwitterIcon />
						</a>
					</div>
				</div>
				{!isMobile && (
					<div className={styles.twitterWrapper}>
						<a
							className={classNames('twitter-timeline', styles.twitterTimeLine)}
							href="https://twitter.com/TUATMCC?ref_src=twsrc%5Etfw&lang=en"
						>
							Tweets by TUATMCC
						</a>
					</div>
				)}
			</div>
		</>
	);
};

export const HomeScrollControl: FC = () => {
	const mediaQuery = useContext(MediaQueryContext);
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://platform.twitter.com/widgets.js';
		script.async = true;
		document.body.appendChild(script);
	}, []);
	return (
		<Canvas gl={{ antialias: false }} dpr={[1, 1.5]} className={styles.canvas}>
			<Suspense fallback={null}>
				<ScrollControls damping={4} pages={pageAmout}>
					<Scroll>
						<Images />
					</Scroll>
					<Scroll html>
						<Html mediaQuery={mediaQuery} />
					</Scroll>
				</ScrollControls>
				<Preload />
			</Suspense>
		</Canvas>
	);
};
