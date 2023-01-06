import { FC } from 'react';

import styles from './style.module.css';

import { Helmet } from '~/components/common/helmet';
import { Navbar } from '~/components/common/navbar';
import { R3fText3d } from '~/components/gallery/r3f-text-3d';

const Text3DPage: FC = () => {
	const meta = {
		title: 'Text3D',
		description: 'Text3D',
	};
	return (
		<>
			<Helmet meta={meta} />
			<Navbar theme='auto' />
			<div className={styles.container}>
				<R3fText3d />
			</div>
		</>
	);
};

export default Text3DPage;
