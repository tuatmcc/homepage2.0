import { FC } from 'react';

import { ArticleWrapper } from '~/components/common/article-wrapper';
import { Helmet } from '~/components/common/helmet';
import { Navbar } from '~/components/common/navbar';
import { DynamicRouting } from '~/lib/dynamic-routing';
import { Post, PostCollector } from '~/lib/post-collector';

const postCollector = new PostCollector('blog');
const dynamicRouting = new DynamicRouting(postCollector);

type WorksPostPageProps = {
	post: Post;
};

/**
 * works以下のマークダウンファイルへのパスはここに通されます。
 * @param param0
 * @returns
 */
const WorksPost: FC<WorksPostPageProps> = ({ post }) => {
	return (
		<>
			<Helmet meta={post.frontmatter} />
			<Navbar theme='auto' />
			<ArticleWrapper meta={post.frontmatter}>{post.content}</ArticleWrapper>
		</>
	);
};

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths = dynamicRouting.getStaticPaths;

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps = dynamicRouting.getStaticProps;

export default WorksPost;
