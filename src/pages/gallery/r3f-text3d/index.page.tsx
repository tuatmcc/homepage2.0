import { FC } from 'react';

import styles from './style.module.css';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { Text3d } from '~/components/sandbox/Text3d';

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
					<Text3d />
				</div>
			</Layout>
		</>
	);
};

export default Text3DPage;
