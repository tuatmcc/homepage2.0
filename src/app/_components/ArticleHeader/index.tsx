import NextLink from 'next/link';
import type { FC } from 'react';

import styles from './styles.module.css';

import { NextImageWithFallback } from '~/app/_components/NextImageWithFallback';

export type ArticleHeaderProps = {
  breadcrumb: string[];
  title: string;
  image?: string;
  date?: string;
  author?: string;
  tags?: string[];
};

export const ArticleHeader: FC<ArticleHeaderProps> = ({
  breadcrumb,
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
        <ul className={styles.breadcrumb}>
          {breadcrumb.map((x, i, self) => (
            <li key={x} className={styles.breadcrumbItem}>
              <NextLink href={self.slice(0, i + 1).join('/')}>{x}</NextLink>
            </li>
          ))}
        </ul>
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
