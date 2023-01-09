import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

import styles from './style.module.css';

import { PostCollector, PostCollectorProps } from '~/features/markdown/post-collector';
import { MediaQueryContext } from '~/features/media-query';
import { SEO, MetaData } from '~/features/seo';
import { Footer } from '~/features/ui/Footer';
import { Navbar } from '~/features/ui/Navbar';
import { Tag, TagList } from '~/features/ui/Tag';
import classNames from '~/utils/classNames';

const meta: MetaData = {
	title: 'Blog',
	description: 'Blog of TUATMCC',
};

// posts will be populated at build time by getStaticProps()
const WorksPage = ({ posts }: PostCollectorProps) => {
	const { isMobile } = useContext(MediaQueryContext);
	posts.sort((a, b) => ((a.frontmatter?.date || 1) < (b.frontmatter?.date || 1) ? 1 : -1));
	return (
		<>
			<SEO meta={meta} />
			<Navbar theme="auto" />
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
						{posts.map((post, index) => {
							return (
								<Link
									href={`blog/${post.slug}`}
									key={post.slug}
									className={classNames(styles.listItem, !isMobile && index % 2 === 1 ? styles._reverse : '')}
								>
									{!isMobile &&
										(post.frontmatter.img ? (
											<Image
												className={styles.image}
												src={post.frontmatter.img}
												alt={post.frontmatter.title}
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
												alt={post.frontmatter.title}
												width={350}
												height={200}
											/>
										))}
									<div className={styles.text}>
										<h2 className={styles.title}>{post.frontmatter.title}</h2>
										{post.frontmatter.tags && !isMobile && (
											<TagList>
												{post.frontmatter.tags.map((tag) => (
													<Tag key={tag}>{tag}</Tag>
												))}
											</TagList>
										)}
										{post.frontmatter.date && <div>{post.frontmatter.date}</div>}
										{post.frontmatter.description && (
											<p className={styles.description}>{post.frontmatter.description}</p>
										)}
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</main>

			<Footer semitransparent />
		</>
	);
};

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('blog').getStaticProps;

export default WorksPage;
