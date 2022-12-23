import { FC } from 'react';

import styles from './style.module.css';

import Page from '~/components/common/Page/Page';
import Text3d from '~/components/sandbox/Text3d/Text3d';

const Text3DPage: FC = () => {
	return (
		<Page meta={{ title: 'Text3D' }}>
			<div className={styles.container}>
				<Text3d />
			</div>
		</Page>
	);
};

export default Text3DPage;
