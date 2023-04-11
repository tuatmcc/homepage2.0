import { FC } from 'react';

import { HtmlParser } from '../HtmlParser';

import styles from './style.module.css';
import { Post } from './types';

import { BackToTop } from '~/components/BackToTop';
import { BasicImage } from '~/components/ui/BasicImage';
import { BasicLink } from '~/components/ui/BasicLink';
import { Footer } from '~/components/ui/Footer';
import { Tag, TagList } from '~/components/ui/Tag';

export const ArticleWrapper: FC<Post> = ({
	title,
	dateStr,
	img,
	tags,
	author,
	slug,
	body,
	documentType,
}) => {
	const tagList = tags?.map((tag) => <Tag key={tag}>{tag}</Tag>);
	return (
		<>
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

			<header className={styles.header}>
				<div className={styles.headerContent}>
					<h1 className={styles.title}>{title}</h1>
					<div className={styles.info}>
						{author && (
							<BasicLink href={`/members/${author}`} className={styles.author}>
								@{author}
							</BasicLink>
						)}
						<div className={styles.date}>{dateStr}</div>
						<TagList className={styles.tagList}>{tagList}</TagList>
					</div>
				</div>
			</header>

			<main>
				<div className={styles.mainContent}>
					<HtmlParser html={body.html} documentType={documentType} slug={slug} />
					<BasicLink href={`/${documentType}#top`} className={styles.backLink}>
						← 記事一覧に戻る
					</BasicLink>
				</div>
			</main>
			<Footer />

			<BackToTop />
		</>
	);
};
