/** @description parse image path to absolute path(https://**)
 *   @param src: string, image path
 *   @param group?: 'blog' | 'news' | 'members' | '', article group or empty(default)
 *   @return imageURL: string, absolute path(https://**) or root path(/**)
 *   @example parseImage('./images/1.jpg', 'blog') => https://raw.githubusercontent.com/tuatmcc/homepage2.0/main/blog/images/1.jpg
 *   @example parseImage('/images/1.jpg') => https://www.tuatmcc.com/images/1.jpg
 * */
export const parseOgImage = (src: string, group: 'blog' | 'news' | 'members' | '' = '') => {
	const baseURL = 'https://raw.githubusercontent.com/tuatmcc/homepage2.0/main';
	if (src.startsWith('/')) return src.replace(/^\//, 'https://www.tuatmcc.com/');
	else if (src.startsWith('./') && group) return src.replace(/^\.\//, `/${baseURL}/${group}`);
	else if (src.startsWith('http')) return src;
	else return 'https://www.tuatmcc.com/images/mcc-design.webp';
};
