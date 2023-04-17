/**
 * convert path to https://raw.githubusercontent.com/tuatmcc/**. no fallback.
 * @param src image's src attiributes from markdown file.
 */
export const parseImageSrc = (src: string, rootPath: string) => {
	const baseURL = 'https://raw.githubusercontent.com/tuatmcc/hp-md-content/main';
	if (src.startsWith('./')) {
		return `${baseURL}/${rootPath}/${src.replace(/^\.\//, '')}`;
	} else {
		return src;
	}
};
