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
  date,
  image,
  author,
  tags,
}) => {
  return (
    <>
      {image && (
        <div className={styles.heroImageWrapper}>
          <NextImageWithFallback
            src={image}
            alt={''}
            width={800}
            height={300}
            className={styles.heroImage}
            fallback={'/images/wordmark-logo.svg'}
          />
        </div>
      )}
      <header className={styles.header}>
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
    </>
  );
};
