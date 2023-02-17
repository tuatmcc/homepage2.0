/**
 * convert path to https://raw.githubusercontent.com/tuatmcc/**.
 * @param src image's src attiributes from markdown file.
 */
export const imgsrc = (src: string, group: string, slug: string) => {
	const baseURL = 'https://raw.githubusercontent.com/tuatmcc/markdown-articles/main';
	if (src.startsWith('./')) {
		return `${baseURL}/${group}/${slug}/${src.replace(/^\.\//, '')}`;
	} else {
		return src;
	}
};
