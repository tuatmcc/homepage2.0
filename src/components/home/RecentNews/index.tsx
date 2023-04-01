import { FC } from 'react';

import styles from './style.module.css';

import { allNews } from 'contentlayer/generated';
import { BasicLink } from '~/components/ui/BasicLink';

export const RecentNews: FC = () => {
	const recentNews = allNews.sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4);

	return (
		<div className={styles.recentNews}>
			<h2 className={styles.title}>Recent News</h2>
			<ul className={styles.list}>
				{recentNews.map((news) => (
					<li key={news.slug} className={styles.listItem}>
						<BasicLink href={news.rootPath} className={styles.link}>
							<h3 className={styles.newsTitle}>{news.title}</h3>
							<p className={styles.date}>{news.date}</p>
							<p className={styles.description}>{news.description}</p>
						</BasicLink>
					</li>
				))}
			</ul>
		</div>
	);
};
