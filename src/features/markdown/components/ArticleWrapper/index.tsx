import Image from 'next/image';
import { FC } from 'react';

import { HtmlParser } from '../HtmlParser';

import styles from './style.module.css';

import { MetaData } from '~/features/seo';
import { Tag, TagList } from '~/features/ui/Tag';

export const ArticleWrapper: FC<MetaData & { contentHtml: string }> = ({ title, img, date, tags, contentHtml }) => {
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
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<div className={styles.article}>
						<div className={styles.date}>{date}</div>
						<TagList className={styles.tagList}>{tagList}</TagList>
						<HtmlParser contentHtml={contentHtml} />
					</div>
				</div>
			</main>
		</>
	);
};
