import Image from 'next/image';
import Link from 'next/link';
import { FC, useContext } from 'react';

import styles from './style.module.css';

import { PostCollector, PostCollectorProps } from '~/features/markdown/post-collector';
import { MediaQueryContext } from '~/features/media-query';
import { SEO } from '~/features/seo';
import { Footer } from '~/features/ui/Footer';
import { Navbar } from '~/features/ui/Navbar';
import { Tag, TagList } from '~/features/ui/Tag';
import classNames from '~/utils/classNames';

const meta = {
	title: 'お知らせ',
	description: 'News of TUATMCC',
	img: '/mcc-logo.svg',
};

// posts will be populated at build time by getStaticProps()
const NewsPage: FC<PostCollectorProps> = ({ posts }) => {
	const { isMobile } = useContext(MediaQueryContext);
	posts.sort((a, b) => ((a.frontmatter?.date || 1) < (b.frontmatter?.date || 1) ? 1 : -1));
	return (
		<>
			<SEO meta={meta} />
			<Navbar theme='auto' />
			<div className={styles.background} />
			<header>
				<div className={styles.headerContent}>
					<h1 className={styles.headerTitle}>News</h1>
					<h2 className={styles.headerSubTitle}>お知らせ</h2>
				</div>
			</header>
			<div className={styles.activities}>
				<div className={styles.list}>
					{posts.map((post, index) => {
						return (
							<div key={post.slug}>
								<Link
									href={`news/${post.slug}`}
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
							</div>
						);
					})}
				</div>
			</div>
			<Footer semitransparent />
		</>
	);
};

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('news').getStaticProps;

export default NewsPage;
