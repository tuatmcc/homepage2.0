import Image from 'next/image';
import { FC, useEffect, useState } from 'react';

import styles from './style.module.css';

import Page from '~/components/common/Page/Page';

const CssDesignPage: FC = () => {
	const meta = {
		title: 'CSS Design',
		description: 'CSS Design',
		img: '/random-programing-image-1.webp',
	};
	return (
		<Page meta={meta}>
			<div className={styles.cssDesign}>
				<div className={styles.halfTone}>
					<Image
						src="/mcc-design.jpg"
						alt="random-programing-image"
						width={1000}
						height={500}
						className={styles.hero}
					/>
				</div>
			</div>
		</Page>
	);
};

export default CssDesignPage;
