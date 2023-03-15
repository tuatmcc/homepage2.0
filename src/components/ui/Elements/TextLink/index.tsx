import Link from 'next/link';

import styles from './style.module.css';

export type TextLinkProps = {
	href?: string;
	children?: string;
};

export const TextLink = ({ href = '', children = '' }: TextLinkProps) => {
	if (href.startsWith('http')) {
		return (
			<a href={href} className={styles.externalLink} target="_brank" rel="noreferror">
				{children}
			</a>
		);
	} else {
		return (
			<Link href={href} className={styles.internalLink}>
				{children}
			</Link>
		);
	}
};
