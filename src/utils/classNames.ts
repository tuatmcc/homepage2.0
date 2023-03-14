/**
 * A simple utility function to join class names together.
 * @param classNames
 * @returns
 */
const classNames = (...classNames: (string | false)[]) => {
	classNames = classNames.filter((className) => className);
	return classNames.join(' ');
};

export default classNames;
