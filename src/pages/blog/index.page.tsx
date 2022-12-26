import Link from 'next/link';

import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { PostCollector, PostCollectorProps } from '~/lib/post-collector';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Blog',
	description: 'Blog of TUATMCC',
};

// posts will be populated at build time by getStaticProps()
const WorksPage = ({ posts }: PostCollectorProps) => {
	return (
		<>
			<Helmet meta={meta} />
			<Layout>
				<h1>Blog</h1>
				{posts.map((post) => (
					<div key={post.slug}>
						<Link href={`blog/${post.slug}`}>{post.slug}</Link>
					</div>
				))}
			</Layout>
		</>
	);
};

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('blog').getStaticProps;

export default WorksPage;
