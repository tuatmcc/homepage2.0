import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { allNews } from 'contentlayer/generated';
import { Navbar } from '~/components/Navbar';
import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';

export const metadata: Metadata = {
	title: 'NEWS',
	description: '農工大公認サークルMCCのブログ記事の一覧です',
};

const NewsListPage: FC = () => {
	allNews.sort((a, b) => ((a.date || 1) < (b.date || 1) ? 1 : -1));
	return (
		<>
			<Navbar />
			<BasicImage
				alt=""
				src="/images/abstract-tech-image-4.webp"
				width={1920}
				height={1280}
				role="presentation"
				className={styles.background}
				fallback
			/>
			<header className={styles.header}>
				<div className={styles.headerContent}>
					<h1 className={styles.headerTitle}>News</h1>
					<div className={styles.typeWriterContainer}>
						<h2 className={styles.headerSubTitle}>MCCからのお知らせ</h2>
					</div>
				</div>
			</header>

			<main className={styles.main}>
				<div className={styles.mainContent}>
					<ul className={styles.list}>
						{allNews.map((post, _index) => {
							return (
								<li key={post.rootPath} className={styles.listItem}>
									<Link href={post.rootPath} className={styles.link}>
										<BasicImage
											className={styles.image}
											src={post.img || '/images/wordmark-logo-image.svg'}
											alt={post.title}
											width={350}
											height={200}
											fallback
										/>
										<div className={styles.text}>
											<h2 className={styles.title}>{post.title}</h2>
											<div className={styles.details}>
												{post.date && (
													<div className={styles.date}>{post.date.replace(/T.+/, '')}</div>
												)}
												{post.author && <div className={styles.author}>@ {post.author}</div>}
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

export default NewsListPage;
