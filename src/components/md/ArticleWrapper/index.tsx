import { FC } from 'react';

import { HtmlParser } from '../HtmlParser';

import styles from './style.module.css';

import { BasicImage } from '~/components/ui/BasicImage';
import { BasicLink } from '~/components/ui/BasicLink';
import { Footer } from '~/components/ui/Footer';
import { Tag, TagList } from '~/components/ui/Tag';

export const ArticleWrapper: FC<{
	title: string;
	description?: string | undefined;
	img?: string | undefined;
	tags?: string[] | undefined;
	author?: string | undefined;
	slug: string;
	dateStr: string;
	html: string;
	group: string;
}> = ({ title, dateStr, img, tags, author, slug, html, group }) => {
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
					<HtmlParser html={html} documentType={group} slug={slug} />
				</div>
			</main>
			<Footer />
		</>
	);
};
