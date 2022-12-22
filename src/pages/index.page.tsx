import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { ROUTES } from '~/constants/routes';

const IndexPage: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace(ROUTES.HOME.PATH);
	});
	return <div>Loading...</div>;
};

export default IndexPage;
