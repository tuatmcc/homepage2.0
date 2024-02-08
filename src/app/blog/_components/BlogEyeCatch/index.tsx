import styles from './styles.module.css';

export const BlogEyeCatch = () => {
  return (
    <div className={styles.blogEyeCatch}>
      <div className={styles.rotated}>
        <h1 className={styles.title}>MCC BLOG</h1>
        <p className={styles.description}>技術記事・作品紹介・ポエムなど</p>
      </div>
      <div className={styles.line} />
    </div>
  );
};
