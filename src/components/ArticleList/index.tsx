import { compareAsc } from 'date-fns';
import NextLink from 'next/link';

import styles from './styles.module.css';

import { NextImageWithFallback } from '~/components/NextImageWithFallback';
import { FC } from 'react';

type Props = {
  unorderedArticles: {
    href?: string;
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
          <NextLink href={href ?? ''} className={styles.newsItem}>
            <div className={styles.thumbnail}>

            <NextImageWithFallback
              width={320}
              height={180}
              className={styles.image}
              src={image}
              fallback="/images/wordmark-logo-image.png"
              alt="blog image"
            />
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              {author && <div className={styles.author}>@{author}</div>}
              <div className={styles.date}>{date}</div>
              <ul className={styles.tags}>
                {tags?.map((tag) => (
                  <li className={styles.tag} key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </NextLink>
        </li>
      ))}
    </ul>
  );
};
