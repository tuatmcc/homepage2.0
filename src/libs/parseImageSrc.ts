/**
 * convert path to https://raw.githubusercontent.com/tuatmcc/**. no fallback.
 * @param src image's src attiributes from markdown file.
 */
export const parseImageSrc = (src: string, documentType: string, slug: string) => {
	const baseURL = 'https://raw.githubusercontent.com/tuatmcc/hp-md-content/main';
	if (src.startsWith('./')) {
		return `${baseURL}/${documentType}/${slug}/${src.replace(/^\.\//, '')}`;
	} else {
		return src;
	}
};
