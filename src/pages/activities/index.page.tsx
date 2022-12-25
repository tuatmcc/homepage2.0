import Link from 'next/link';
import { FC } from 'react';

import Layout from '../../components/common/Layout';
import { PostCollector, PostCollectorProps } from '../../lib/post-collector';

import styles from './style.module.css';

const meta = {
	title: '活動報告',
	description: 'Activities of TUATMCC',
};

type ActivitiesProps = {
	posts: PostCollectorProps;
};

// posts will be populated at build time by getStaticProps()
const ActivitiesPage: FC<PostCollectorProps> = ({ posts }) => {
	return (
		<Layout meta={meta}>
			<h1 className={styles.title}>活動報告</h1>
			{posts.map((post) => (
				<div key={post.slug}>
					<Link href={`activities/${post.slug}`}>{post.slug}</Link>
				</div>
			))}
		</Layout>
	);
};

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('activities').getStaticProps;

export default ActivitiesPage;
