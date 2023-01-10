import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { HtmlParser } from '../HtmlParser';

import styles from './style.module.css';

import { MetaData } from '~/features/seo';
import { Tag, TagList } from '~/features/ui/Tag';

export const ArticleWrapper: FC<MetaData & { contentHtml: string }> = ({
	title,
	img,
	date,
	tags,
	author,
	contentHtml,
}) => {
	const tagList = tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
	return (
		<>
			<header>
				<div className={styles.headerContent}>
					<Image
						src={img ? img : '/tuat-gate.webp'}
						alt="hero"
						width={800}
						height={300}
						className={styles.heroImage}
						onError={(e) => {
							e.currentTarget.src = '/tuat-gate.webp';
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
					<HtmlParser contentHtml={contentHtml} />
				</div>
			</main>
		</>
	);
};
