import { FC } from 'react';

import Layout from '~/components/common/Layout';
import Helmet from '~/components/common/MetaWrapper';

const meta = {
	title: '404',
	description: '404 Page Not Found',
};

const NotFoundPage: FC = () => {
	return (
		<>
			<Helmet meta={meta} />
			<Layout>404 Page Not Found</Layout>;
		</>
	);
};

export default NotFoundPage;
