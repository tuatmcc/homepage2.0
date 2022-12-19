import { FC } from 'react';

import styles from './style.module.css';

export type HumbergurIconProps = {
	isActive?: boolean;
	as?: 'button' | 'span';
	className?: string;
	onClick?: () => void;
	onBlur?: () => void;
};

const HumbergurIcon: FC<HumbergurIconProps> = ({ isActive = false, as = 'span', onClick, onBlur, className = '' }) => {
	const content = (
		<>
			<span className={styles.lineTop} />
			<span className={styles.lineMiddle} />
			<span className={styles.lineBottom} />
		</>
	);
	switch (as) {
		case 'button': {
			return (
				<button
					className={`${styles.humbergurIcon} ${isActive ? styles._active : ''} ${className}}`}
					onClick={onClick}
					onBlur={onBlur}
				>
					{content}
				</button>
			);
		}
		default: {
			return (
				<span
					className={`${styles.humbergurIcon} ${isActive ? styles._active : ''} ${className}}`}
					onClick={onClick}
					onBlur={onClick}
				>
					{content}
				</span>
			);
		}
	}
};

export default HumbergurIcon;
