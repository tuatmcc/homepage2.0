import { FC } from 'react';

import styles from './style.module.css';

export type TagProps = {
	children: string;
	className?: string;
};

const Tag: FC<TagProps> = ({ children, className = '' }) => {
	return <div className={`${styles.tag} ${className}`}>{children}</div>;
};

export default Tag;
