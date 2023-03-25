import NextLink from 'next/link';
import { ReactNode } from 'react';

import styles from './style.module.css';

export type TextLinkProps = {
	href: string;
	children: ReactNode;
};

/**
 * A wrapper around Next.js' Link component that encodes the URL. It also detects if the URL is external or internal.
 * @param href The URL to link to.
 * @param children The children to render.
 * @returns The Link component.
 */
export const TextLink = ({ href, children }: TextLinkProps) => {
	if (href.startsWith('http')) {
		return (
			<a
				href={encodeURI(href)}
				className={styles.externalLink}
				target="_brank"
				rel="noopener noreferrer"
			>
				{children}
			</a>
		);
	} else {
		return (
			<NextLink href={encodeURI(href)} className={styles.internalLink}>
				{children}
			</NextLink>
		);
	}
};
