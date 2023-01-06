import { FC } from 'react';

import styles from './style.module.css';

import { Helmet } from '~/components/common/helmet';
import { Layout } from '~/components/common/Layout';
import { R3fText3d } from '~/components/gallery/r3f-';

const Text3DPage: FC = () => {
	const meta = {
		title: 'Text3D',
		description: 'Text3D',
	};
	return (
		<>
			<Helmet meta={meta} />
			<Layout>
				<div className={styles.container}>
					<R3fText3d />
				</div>
			</Layout>
		</>
	);
};

export default Text3DPage;
