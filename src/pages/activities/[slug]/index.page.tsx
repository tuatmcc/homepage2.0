import { FC } from 'react';

import { ArticleWrapper } from '~/components/common/ArticleWrapper';
import { Helmet } from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';
import { DynamicRouting } from '~/lib/dynamic-routing';
import { Post, PostCollector } from '~/lib/post-collector';

const postCollector = new PostCollector('activities');
const dynamicRouting = new DynamicRouting(postCollector);

type ActivitiesPostPageProps = {
	post: Post;
};

/**
 * works以下のマークダウンファイルへのパスはここに通されます。
 * @param param0
 * @returns
 */
const ActivitiesPost: FC<ActivitiesPostPageProps> = ({ post }) => {
	return (
		<>
			<Helmet meta={post.frontmatter} />
			<Layout>
				<ArticleWrapper meta={post.frontmatter}>{post.content}</ArticleWrapper>
			</Layout>
		</>
	);
};

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths = dynamicRouting.getStaticPaths;

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps = dynamicRouting.getStaticProps;

export default ActivitiesPost;
