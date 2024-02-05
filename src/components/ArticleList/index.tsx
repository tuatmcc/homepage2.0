import { compareAsc } from 'date-fns';

import styles from './styles.module.css';

import type { FC } from 'react';
import { ArticleCard } from '../ArticleCard';

type Props = {
  unorderedArticles: {
    href: string;
    image: string;
    title: string;
    date: string;
    tags?: string[];
    author?: string;
  }[];
};

export const ArticleList: FC<Props> = ({ unorderedArticles }) => {
  const news = unorderedArticles.sort((a, b) =>
    compareAsc(new Date(b.date), new Date(a.date)),
  );

  return (
    <ul className={styles.articleList}>
      {news.map(({ href, image, title, date, tags, author }) => (
        <li className={styles.listItem} key={href}>
          <ArticleCard
            href={href}
            image={image}
            title={title}
            date={date}
            tags={tags}
            author={author}
          />
        </li>
      ))}
    </ul>
  );
};
