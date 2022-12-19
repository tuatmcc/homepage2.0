import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export type CodeProps = {
	children: ReactNode | ReactNode[];
	className?: string;
};

const Code: FC<CodeProps> = ({ children = '', className = '' }) => <code className={styles.code}>{children}</code>;

export default Code;
