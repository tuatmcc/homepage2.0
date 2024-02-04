import { FC } from "react";
import { NextImageWithFallback } from "../NextImageWithFallback";
import styles from "./styles.module.css";

type Props = {
  href?: string;
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
    <div className={styles.articleCard}>
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
      <div className={styles.textInfo}>
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
    </div>
  );
};
