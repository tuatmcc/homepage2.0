/**
 * A simple utility function to join class names together.
 * @example classNames(styles.button, isDisabled && styles.disabled)
 */
export const classNames = (...classNames: (string | false)[]) => {
	classNames = classNames.filter((className) => className);
	return classNames.join(' ');
};
