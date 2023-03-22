import { GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { useMediaQuery } from '~/components/MediaQuery';
import { SEO } from '~/components/SEO';
import { Article, Collector } from '~/components/markdown-content/collector';
import { Footer } from '~/components/ui/Footer';
import { Navbar } from '~/components/ui/Navbar';
import { PageTransition } from '~/components/ui/PageTransition';
import { MetaData } from '~/types/meta';

const meta: MetaData = {
	title: 'Members',
	description: '農工大公認サークルMCCのメンバ一覧です',
};

const MembersListPage: FC<{ articles: Article[] }> = ({ articles }) => {
	const { isMobile } = useMediaQuery();
	articles.sort((a, b) => ((a.meta?.date || 1) < (b.meta?.date || 1) ? 1 : -1));
	return (
		<>
			<SEO meta={meta} />
			<Navbar />
			<PageTransition>
				<div className={styles.background} />
				<header>
					<div className={styles.headerContent}>
						<h1 className={styles.headerTitle}>NEWS</h1>
						<h2 className={styles.headerSubTitle}>お知らせ</h2>
					</div>
				</header>
				<main>
					<div className={styles.mainContent}>
						<div className={styles.list}>
							{articles.map((article) => {
								return (
									<Link href={article.targetPath} key={article.slug}>
										{!isMobile &&
											(article.meta.img ? (
												<Image
													className={styles.image}
													src={article.meta.img}
													alt={article.meta.title}
													width={350}
													height={200}
													onError={(e) => {
														e.currentTarget.src = '/images/mcc-design.webp';
													}}
												/>
											) : (
												<Image
													className={styles.image}
													src="/images/mcc-design.webp"
													alt={article.meta.title}
													width={128}
													height={128}
												/>
											))}
										<div className={styles.text}>
											<h2 className={styles.title}>{article.meta.title}</h2>
											{article.meta.tags && !isMobile && (
												<div className={styles.tagList}>
													{article.meta.tags.map((tag) => (
														<div className={styles.tag} key={tag}>
															{tag}
														</div>
													))}
												</div>
											)}
											{article.meta.date && <div className={styles.date}>{article.meta.date}</div>}
											{article.meta.description && (
												<p className={styles.description}>{article.meta.description}</p>
											)}
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
	const articles = Collector('members').getAll();
	return {
		props: {
			articles,
		},
	};
};

export default MembersListPage;
