/** @description parse image path to absolute path(https://**)
 *   @param src: string, image path
 *   @param group?: 'blog' | 'news' | 'members' | '', article group or empty(default)
 *   @return imageURL: string, absolute path(https://**) or root path(/**)
 *   @example parseImage('./images/1.jpg', 'blog') => https://raw.githubusercontent.com/tuatmcc/homepage2.0/main/blog/images/1.jpg
 *   @example parseImage('/images/1.jpg') => https://www.tuatmcc.com/images/1.jpg
 * */
export const parseOgImage = (src: string, rootPath: string) => {
	const baseURL = 'https://raw.githubusercontent.com/tuatmcc/hp-md-content/main';
	if (src.startsWith('http')) return src;
	else if (src.startsWith('./') && rootPath) return `${baseURL}/${rootPath}${src.slice(1)}`;
	else return 'https://www.tuatmcc.com/images/wordmark-logo-image.webp';
};
