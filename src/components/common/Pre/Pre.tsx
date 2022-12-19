import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type PreProps = {
	children: ReactNode | ReactNode[];
	className?: string;
};

const Pre: FC<PreProps> = ({ children = '', className = '' }) => (
	<pre className={`${styles.pre} ${className}`}>{children}</pre>
);

export default Pre;
