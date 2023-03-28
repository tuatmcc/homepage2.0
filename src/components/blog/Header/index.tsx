import styles from './style.module.css';

export const BlogHeader = () => (
	<header className={styles.header}>
		<div className={styles.container}>
			<h1 className={styles.title}>BLOG</h1>
			<p className={styles.subtitle}>MCC部員が書いた、技術ブログ・ポエム一覧です</p>
		</div>
	</header>
);
