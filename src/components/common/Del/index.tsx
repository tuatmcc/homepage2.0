import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type DelProps = {
	children: ReactNode;
	className?: string;
};

/**
 * Convert `<del>` to `<span>` with `text-decoration: line-through`.
 * @param param0
 * @returns
 */
export const Del: FC<DelProps> = ({ children = '', className = '' }) => (
	<span className={`${styles.del} ${className}`}>{children}</span>
);
