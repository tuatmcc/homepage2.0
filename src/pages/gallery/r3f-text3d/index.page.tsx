import { FC } from 'react';

import styles from './style.module.css';

import { SEO } from '~/features/SEO';
import { R3fText3d } from '~/features/gallery/r3f-text-3d';
import { Navbar } from '~/features/ui/Navbar';

const Text3DPage: FC = () => {
	const meta = {
		title: 'Text3D',
		description: 'Text3D',
	};
	return (
		<>
			<SEO meta={meta} />
			<Navbar />
			<div className={styles.container}>
				<R3fText3d />
			</div>
		</>
	);
};

export default Text3DPage;
