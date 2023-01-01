import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Helmet } from '~/components/common/Helmet';
import { ROUTES } from '~/constants/routes';

const meta = {
	title: 'TUATMCC - 東京農工大学マイクロコンピュータクラブ',
	description: '東京農工大学マイクロコンピュータクラブ(TUATMCC)の公式ホームページです。',
	image: '/mcc-logo.svg',
};

const IndexPage: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace(ROUTES.HOME.PATH);
	}, [router]);
	return (
		<>
			<Helmet meta={meta} />
			<div>Loading...</div>;
		</>
	);
};

export default IndexPage;
