import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import type { Metadata } from 'next';

import { allBlogs } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';

export const metadata: Metadata = {
	title: 'Blog',
	description: '農工大公認サークルMCCのブログ記事の一覧です',
};

const BlogListPage: FC = () => {
	allBlogs.sort((a, b) => ((a.date || 1) < (b.date || 1) ? 1 : -1));
	return (
		<>
			<Navbar theme="auto" />
			<div className={styles.background} />
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<h1 className={styles.headerTitle}>Blog</h1>
					<div className={styles.typeWriterContainer}>
						<h2 className={styles.headerSubTitle}>MCC部員が書いたブログ・ポエム</h2>
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<div className={styles.mainContent}>
					<ul className={styles.list}>
						{allBlogs.map((post, _index) => {
							return (
								<li className={styles.listItem} key={post.rootPath}>
									<Link href={post.rootPath} className={styles.link}>
										<BasicImage
											className={styles.image}
											src={post.img || '/images/wordmark-logo-image.png'}
											alt={post.title}
											width={100}
											height={100}
											fallback
										/>
										<div className={styles.text}>
											<h2 className={styles.title}>{post.title}</h2>
											<div className={styles.details}>
												{post.date && (
													<div className={styles.date}>{post.date.replace(/T.+/, '')}</div>
												)}
												{post.author && <div className={styles.author}>@{post.author}</div>}
											</div>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
			</main>

			<Footer semitransparent />
		</>
	);
};

export default BlogListPage;
