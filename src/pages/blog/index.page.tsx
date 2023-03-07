import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { useMediaQuery } from '~/features/MediaQuery';
import { SEO } from '~/features/SEO';
import { Article, Collector } from '~/features/markdown/collector';
import { Footer } from '~/features/ui/Footer';
import { Navbar } from '~/features/ui/Navbar';
import { PageTransition } from '~/features/ui/PageTransition';
import { MetaData } from '~/types/meta';
import classNames from '~/utils/classNames';

const meta: MetaData = {
	title: 'Blog',
	description: '農工大公認サークルMCCのブログ記事の一覧です',
};

const BlogListPage: FC<{ articles: Article[] }> = ({ articles }) => {
	articles.sort((a, b) => ((a.meta?.date || 1) < (b.meta?.date || 1) ? 1 : -1));
	return (
		<>
			<SEO meta={meta} />
			<Navbar />
			<PageTransition>
				<div className={styles.background} />
				<header>
					<div className={styles.headerContent}>
						<h1 className={styles.headerTitle}>Blog</h1>
						<h2 className={styles.headerSubTitle}>ブログ</h2>
					</div>
				</header>
				<main>
					<div className={styles.mainContent}>
						<div className={styles.list}>
							{articles.map((article, _index) => {
								return (
									<Link href={`${article.targetPath}`} key={article.slug} className={classNames(styles.listItem)}>
										{article.meta.img ? (
											<Image
												className={styles.image}
												src={article.meta.img}
												alt={article.meta.title}
												width={350}
												height={200}
												onError={(e) => {
													e.currentTarget.src = '/mcc-design.webp';
												}}
											/>
										) : (
											<Image
												className={styles.image}
												src="/mcc-design.webp"
												alt={article.meta.title}
												width={350}
												height={200}
											/>
										)}
										<div className={styles.text}>
											<h2 className={styles.title}>{article.meta.title}</h2>
											{article.meta.date && <div className={styles.date}>{article.meta.date}</div>}
										</div>
									</Link>
								);
							})}
						</div>
					</div>
				</main>

				<Footer semitransparent />
			</PageTransition>
		</>
	);
};

// This function gets called at build time on server-side.
export const getStaticProps: GetStaticProps<{ articles: Article[] }> = () => {
	const articles = Collector('blog').getAll();
	return {
		props: {
			articles,
		},
	};
};

export default BlogListPage;
