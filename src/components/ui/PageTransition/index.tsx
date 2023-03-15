import { motion } from 'framer-motion';
import { FC, ReactNode } from 'react';

export const PageTransition: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<>
			<motion.div
				style={{
					position: 'fixed',
					top: 0,
					zIndex: -1,
					width: '100%',
					height: '100vh',
					overflow: 'hidden',
					backgroundColor: 'var(--color-mcc-primary)',
					backgroundSize: 'cover',
				}}
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
