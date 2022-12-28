import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import { animated } from '@react-spring/web';
import Image from 'next/image';
import React, { useRef } from 'react';

import styles from './style.module.css';

// Little helpers ...
const url = (name: string, wrap = false) =>
	`${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export const ParallaxTest = () => {
	const parallax = useRef<IParallax>(null!);
	return (
		<div className={styles.parallaxTest}>
			<Parallax ref={parallax} pages={3}>

				<ParallaxLayer offset={0} speed={0.4} style={{ pointerEvents: 'none' }}>
					<>
						<Image alt='' src='/random-programing-image-1.webp' width={10} height={10} className={styles.image1} />
					</>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={1}>
					<Image alt='' src='/mcc-desktop-pc.webp' width={10} height={10} className={styles.image2} />
				</ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.3}>
          <Image alt='' src='/school-fes-2022-room.webp' width={10} height={10} className={styles.image3} />
        </ParallaxLayer>

				<ParallaxLayer offset={1.5}>
					<animated.h1 className={styles.name2}>私たちは、東京農工大学マイクロコンピュータークラブです。</animated.h1>
				</ParallaxLayer>

				<ParallaxLayer offset={0.1}>
					<animated.h1 className={styles.intro}>A TUAT Tech Group</animated.h1>
				</ParallaxLayer>

				<ParallaxLayer offset={0.4}>
					<h1 className={styles.name1}>MCC</h1>
				</ParallaxLayer>

				<ParallaxLayer offset={2.3} speed={-0.5} style={{ opacity: 0.6 }}>
					<h2 className={styles.name3}>MCCで世界を平和に</h2>
				</ParallaxLayer>

				<ParallaxLayer
					offset={2.5}
					speed={-0.4}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						pointerEvents: 'none',
					}}
				>
					<Image alt='' src={url('earth')} className={styles.earth} width={10} height={10} />
				</ParallaxLayer>

				<ParallaxLayer
					offset={2}
					speed={-0.3}
					style={{
						backgroundSize: '80%',
						backgroundPosition: 'center',
						backgroundImage: url('clients', true),
					}}
				/>

				<ParallaxLayer
					offset={2}
					speed={-0}
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onClick={() => parallax.current.scrollTo(0)}
				>
					<Image alt='' src={url('clients-main')} className={styles.clientsMain} width={10} height={10} />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};
