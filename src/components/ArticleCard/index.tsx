import { FC } from 'react';
import NextLink from 'next/link';
import { NextImageWithFallback } from '~/components/NextImageWithFallback';
import styles from './styles.module.css';

type Props = {
  href: string;
  image: string;
  title: string;
  date: string;
  tags?: string[];
  author?: string;
};

export const ArticleCard: FC<Props> = ({
  href,
  image,
  title,
  date,
  tags,
  author,
}) => {
  return (
    <NextLink href={href} className={styles.articleCard}>
      <div className={styles.thumbnail}>
        <NextImageWithFallback
          width={320}
          height={180}
          className={styles.image}
          src={image}
          fallback="/images/wordmark-logo-image.png"
          alt="article thumbnail"
        />
      </div>
      <div className={styles.textInfo}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.date}>{date}</div>
        {author && (
          <a href={`https://github.com/${author}`} className={styles.author}>
            @{author}
          </a>
        )}
        <ul className={styles.tags}>
          {tags?.map((tag) => (
            <li className={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </NextLink>
  );
};
