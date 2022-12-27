import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type CodeBlockProps = {
	title?: string;
	children: ReactNode | ReactNode[];
	className?: string;
};

export const CodeBlock: FC<CodeBlockProps> = ({ children = '', className = '', title }) => {
	return (
		<div className={styles.codeBlock}>
			{title && <span className={styles.title}>{title}</span>}
			<pre className={`${styles.pre} ${className}`}>{children}</pre>
		</div>
	);
};
