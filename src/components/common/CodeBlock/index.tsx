import { FC, ReactNode } from 'react';

import styles from './style.module.css';

const copyToClipboard = (text: string) => {
	navigator.clipboard.writeText(text);
};

const changeButtonText = (button: HTMLButtonElement) => {
	button.innerText = 'Copied!';
	setTimeout(() => {
		button.innerText = 'Copy';
	}, 1000);
};

type CodeBlockProps = {
	title?: string;
	children: ReactNode | ReactNode[];
	className?: string;
};

export const CodeBlock: FC<CodeBlockProps> = ({ children = '', className = '', title }) => {
	const id = `codeblock${Math.random().toString()}`;
	return (
		<div className={styles.codeBlock}>
			{title && <span className={styles.title}>{title}</span>}
			<button
				className={styles.copyButton}
				onClick={(event) => {
					copyToClipboard(`${document.getElementById(id)?.innerText}`);
					changeButtonText(event.target as HTMLButtonElement);
				}}
			>
				Copy
			</button>
			<pre className={`${styles.pre} ${className}`} id={id}>
				{children}
			</pre>
		</div>
	);
};
