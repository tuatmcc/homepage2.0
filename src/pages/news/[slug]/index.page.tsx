import { GetStaticPaths, GetStaticProps } from 'next';
import { FC } from 'react';

import { SEO } from '~/features/SEO';
import { Article, Collector } from '~/features/markdown/collector';
import { ArticleWrapper } from '~/features/markdown/components/ArticleWrapper';
import { markdownToHtml } from '~/features/markdown/markdown-to-html';
import { Navbar } from '~/features/ui/Navbar';
import { PageTransition } from '~/features/ui/PageTransition';

const NewsArticlePage: FC<{ article: Article }> = ({ article }) => {
	return (
		<>
			<SEO meta={article.meta} />
			<Navbar theme="auto" />
			<PageTransition>
				<ArticleWrapper meta={article.meta} contentHtml={article.html} group={article.group} slug={article.slug} />
			</PageTransition>
		</>
	);
};

const collector = Collector('news');

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths: GetStaticPaths = () => {
	const articles = collector.getAll();
	const paths = articles.map((article) => {
		return {
			params: {
				slug: article.slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps: GetStaticProps<{ article: Article }> = async (context) => {
	const article: Article = collector.get(context.params?.slug as string);
	article.html = await markdownToHtml(article.markdown);
	article.markdown = '';
	return {
		props: {
			article: article,
		},
	};
};

export default NewsArticlePage;
