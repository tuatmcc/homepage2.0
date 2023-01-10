import { NextPage } from 'next';

import { Navbar } from '~/features/components/Navbar';
import { SEO } from '~/features/components/SEO';
import { ArticleWrapper } from '~/features/markdown/components/ArticleWrapper';
import { Post, PostCollector } from '~/features/markdown/post-collector';
import { DynamicRouting } from '~/routes/dynamic-routing';

const postCollector = new PostCollector('news');
const dynamicRouting = new DynamicRouting(postCollector);

const NewsPost: NextPage<{ post: Post }> = ({ post }) => {
	return (
		<>
			<SEO meta={post.frontmatter} />
			<Navbar theme='auto' />
			<ArticleWrapper {...post.frontmatter} contentHtml={post.content} />
		</>
	);
};

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths = dynamicRouting.getStaticPaths;

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps = dynamicRouting.getStaticProps;

export default NewsPost;
