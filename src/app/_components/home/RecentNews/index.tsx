import NextLink from 'next/link';
import type { FC } from 'react';

import styles from './style.module.css';

import { allNewsDocuments } from '@/content';

export const RecentNews: FC = () => {
  const recentNews = allNewsDocuments
    .sort((a, b) => b.fields.date.localeCompare(a.fields.date))
    .slice(0, 4);

  return (
    <div className={styles.recentNews}>
      <h2 className={styles.title}>Recent News</h2>
      <ul className={styles.list}>
        {recentNews.map((news) => (
          <li key={news.rootPath} className={styles.listItem}>
            <NextLink
              href={news.rootPath.replace(/^content|\/index\.mdx?/g, '')}
              className={styles.link}
            >
              <h3 className={styles.newsTitle}>{news.fields.title}</h3>
              <p className={styles.date}>{news.fields.date}</p>
              <p className={styles.description}>{news.fields.description}</p>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
