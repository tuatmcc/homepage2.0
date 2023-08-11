import { compareAsc } from 'date-fns';
import NextLink from 'next/link';

import styles from './styles.module.css';

import { NextImageWithFallback } from '~/components/NextImageWithFallback';

// Newsにはauthorはいらない
type NewsListProps = {
  unorderedNews: {
    href?: string;
    image: string;
    title: string;
    date: string;
    tags?: string[];
  }[];
};

export const NewsList = ({ unorderedNews }: NewsListProps) => {
  const news = unorderedNews.sort((a, b) =>
    compareAsc(new Date(b.date), new Date(a.date)),
  );

  return (
    <ul className={styles.list}>
      {news.map(({ href, image, title, date, tags }) => (
        <li className={styles.listItem} key={href}>
          <NextLink href={href ?? ''} className={styles.newsItem}>
            <NextImageWithFallback
              width={320}
              height={180}
              className={styles.image}
              src={image}
              fallback="/images/wordmark-logo-image.png"
              alt="news"
            />
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.date}>{date}</div>
            <ul className={styles.tags}>
              {tags?.map((tag) => (
                <li className={styles.tag} key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </NextLink>
        </li>
      ))}
    </ul>
  );
};
