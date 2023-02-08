import { FC } from 'react';

import { SEO } from '~/features/SEO';
import { ArticleWrapper } from '~/features/markdown/components/ArticleWrapper';
import { Post, PostCollector } from '~/features/markdown/post-collector';
import { Navbar } from '~/features/ui/Navbar';
import { PageTransition } from '~/features/ui/PageTransition';
import { DynamicRouting } from '~/routes/dynamic-routing';

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
			<SEO meta={post.frontmatter} />
			<Navbar theme="auto" />
			<PageTransition>
				<ArticleWrapper {...post.frontmatter} contentHtml={post.content} />
			</PageTransition>
		</>
	);
};

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths = dynamicRouting.getStaticPaths;

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps = dynamicRouting.getStaticProps;

export default WorksPost;
