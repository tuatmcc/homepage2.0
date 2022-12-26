import { FC } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';

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
