import { FC } from 'react';

import styles from './style.module.css';

export type ButtonProps = {
	children: string;
	className?: string;
	onClick?: () => void;
	variant?: 'primary' | 'secondary' | 'tertiary';
	size?: 'sm' | 'md' | 'lg';
};

const Button: FC<ButtonProps> = ({ children, className = '', onClick, variant = 'secondary', size = 'md' }) => {
	const variantAttr =
		variant === 'primary' ? styles.primary : variant === 'secondary' ? styles.secondary : styles.tertiary;
	const sizeAttr = size === 'sm' ? styles.sm : size === 'lg' ? styles.lg : styles.md;

	return (
		<button className={`${className} ${styles.button} ${variantAttr} ${sizeAttr}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
