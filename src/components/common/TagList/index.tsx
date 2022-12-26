import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type TagListProps = {
	children: ReactNode | ReactNode[];
	className?: string;
};

export const TagList: FC<TagListProps> = ({ children = [], className = '' }) => (
	<div className={`${styles.tagList} ${className}`}>{children}</div>
);
