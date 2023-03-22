'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import type { Metadata } from 'next';

import { allMembers } from 'contentlayer/generated';
import { Footer } from '~/components/ui/Footer';
import { Navbar } from '~/components/ui/Navbar';

export const meta: Metadata = {
	title: 'Members',
	description: '農工大公認サークルMCCのブログ記事の一覧です',
};

const MemberListPage: FC = () => {
	allMembers.sort((a, b) => ((a.date || 1) < (b.date || 1) ? 1 : -1));
	return (
		<>
			<Navbar />
			<Image
				alt=""
				src="/images/abstract-tech-image-6.webp"
				width={1920}
				height={1280}
				role="presentation"
				className={styles.background}
			/>
			<header>
				<div className={styles.headerContent}>
					<h1 className={styles.headerTitle}>BLOGS</h1>
					<h2 className={styles.headerSubTitle}>ブログ</h2>
				</div>
			</header>
			<main>
				<div className={styles.mainContent}>
					<div className={styles.list}>
						{allMembers.map((post, _index) => {
							return (
								<Link href={post.rootPath} key={post.rootPath} className={styles.listItem}>
									<Image
										className={styles.image}
										src={post.img || '/images/mcc-design.webp'}
										alt={post.title}
										width={350}
										height={200}
										onError={(e) => {
											e.currentTarget.src = '/images/mcc-design.webp';
										}}
									/>
									<div className={styles.text}>
										<h2 className={styles.title}>{post.title}</h2>
										<div className={styles.details}>
											{post.date && <div className={styles.date}>{post.date}</div>}
											{post.author && <div className={styles.author}>@ {post.author}</div>}
										</div>
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

export default MemberListPage;
