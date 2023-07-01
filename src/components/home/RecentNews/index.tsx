import NextLink from 'next/link';
import { FC } from 'react';

import styles from './style.module.css';

import { allNews } from '.contentlayer/generated';

export const RecentNews: FC = () => {
  const recentNews = allNews
    .sort((a, b) => b.date.localeCompare(a.date))
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
              <h3 className={styles.newsTitle}>{news.title}</h3>
              <p className={styles.date}>{news.date}</p>
              <p className={styles.description}>{news.description}</p>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};
