import { ReactNode } from 'react';

import styles from './style.module.css';

type UnderlineProps = {
	children: ReactNode;
};

export const Underline = ({ children }: UnderlineProps) => {
	return <span className={styles.underline}>{children}</span>;
};
