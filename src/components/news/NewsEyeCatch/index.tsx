import { FC } from 'react';
import styles from './styles.module.css';

export const NewsEyeCatch: FC = () => {
  // famous poem or serif appropriate for tech news
  const poemList = [
    'Technology is best when it brings people together.',
    "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    'Technology is anything that wasn’t around when you were born.',
    'The art challenges the technology, and the technology inspires the art.',
    'The science of today is the technology of tomorrow.',
    'The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.',
    'The advance of technology is based on making it fit in so that you don’t really even notice it, so it’s part of everyday life.',
  ];
  return (
    <div className={styles.newsEyeCatch}>
      <div className={styles.container}>
        <h1 className={styles.title}>News</h1>
        <p className={styles.poem}>
          <span className={styles.typography}>
            {poemList[Math.floor(Math.random() * poemList.length)]}
          </span>
        </p>
      </div>
    </div>
  );
};
