import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { HtmlParser } from '../HtmlParser';

import styles from './style.module.css';

import { Footer } from '~/features/ui/Footer';
import { Tag, TagList } from '~/features/ui/Tag';
import { MetaData } from '~/types/meta';

export const ArticleWrapper: FC<{ meta: MetaData; contentHtml: string; group: string; slug: string }> = ({
	meta,
	contentHtml,
	group,
	slug,
}) => {
	const { title, img, tags, author, date } = meta;
	const tagList = tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
	return (
		<>
			<header>
				<div className={styles.headerContent}>
					<Image
						src={img ? img : '/tuat-gate-filtered.webp'}
						alt="hero"
						width={800}
						height={300}
						className={styles.heroImage}
						onError={(e) => {
							e.currentTarget.src = '/tuat-gate-filtered.webp';
						}}
						priority
					/>
					<div className={styles.heroImageOverlay} />
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.info}>
						{author && (
							<Link href={`/member/${author}`} className={styles.author}>
								@{author}
							</Link>
						)}
						<div className={styles.date}>{date}</div>
						<TagList className={styles.tagList}>{tagList}</TagList>
					</div>
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<HtmlParser contentHtml={contentHtml} group={group} slug={slug} />
				</div>
			</main>
			<Footer />
		</>
	);
};
