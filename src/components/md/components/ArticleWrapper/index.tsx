'use client';

import { IsoDateTimeString } from 'contentlayer/core';
import Link from 'next/link';
import { FC } from 'react';

import { HtmlParser } from '../HtmlParser';

import styles from './style.module.css';

import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';
import { Tag, TagList } from '~/components/ui/Tag';

export const ArticleWrapper: FC<{
	title: string;
	description?: string | undefined;
	date: IsoDateTimeString;
	img?: string | undefined;
	tags?: string[] | undefined;
	author?: string | undefined;
	slug: string;
	html: string;
	group: string;
}> = ({ title, date, img, tags, author, slug, html, group }) => {
	const tagList = tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
	return (
		<>
			<header>
				<div className={styles.headerContent}>
					<BasicImage
						src={img || '/images/wordmark-logo-image.svg'}
						alt="hero image"
						role="presentation"
						width={800}
						height={300}
						className={styles.heroImage}
						fallback
					/>
					<div className={styles.heroImageOverlay} />
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.info}>
						{author && (
							<Link href={`/members/${author}`} className={styles.author}>
								@{author}
							</Link>
						)}
						<div className={styles.date}>{date.replace(/T.+/, '')}</div>
						<TagList className={styles.tagList}>{tagList}</TagList>
					</div>
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<HtmlParser html={html} group={group} slug={slug} />
				</div>
			</main>
			<Footer />
		</>
	);
};
