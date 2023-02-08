import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

import styles from './style.module.css';

export const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<motion.div
				className={styles.background}
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				exit={{ opacity: 1 }}
			/>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				{children}
			</motion.div>
		</>
	);
};
