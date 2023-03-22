'use client';

import { FC } from 'react';

import { SEO } from '~/components/SEO';
import { R3fScrollControl } from '~/components/gallery/r3f-scroll-control';
import { PageTransition } from '~/components/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'New Home Design',
	description: 'New Home Design',
	img: '/images/noko-fes-2022-illustrace.webp',
};

const NewHomeDesignPage: FC = () => {
	return (
		<>
			<SEO meta={meta} />
			<PageTransition>
				<R3fScrollControl />
			</PageTransition>
		</>
	);
};

export default NewHomeDesignPage;
