import { FC } from 'react';

import Page from '~/components/common/Page/Page';

const meta = {
	title: '404',
	description: '404 Page Not Found',
};

const NotFoundPage: FC = () => {
	return <Page meta={meta}>404 Page Not Found</Page>;
};

export default NotFoundPage;
