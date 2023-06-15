import { FC } from 'react';

import styles from './style.module.css';

import { NextImageWithFallback } from '~/components/ui/NextImageWithFallback';

export type ArticleHeaderProps = {
  title: string;
  image?: string;
  date?: string;
  author?: string;
  tags?: string[];
};

export const ArticleHeader: FC<ArticleHeaderProps> = ({
  title,
  image,
  date,
  author,
  tags,
}) => {
  return (
    <header className={styles.header}>
      {image && (
        <NextImageWithFallback
          className={styles.heroImage}
          width={800}
          height={300}
          src={image}
          fallback="/images/wordmark-logo-image.svg"
          role="presentation"
          alt=""
        />
      )}
      {date && <p className={styles.date}>{date}</p>}
      <h1 className={styles.title}>{title}</h1>
      {author && (
        <span>
          by{' '}
          <a href={`https://github.com/${author}`} className={styles.author}>
            @{author}
          </a>
        </span>
      )}
      {tags && (
        <ul className={styles.tagList}>
          {tags.map((x) => (
            <li key={x} className={styles.tagItem}>
              {x}
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};
