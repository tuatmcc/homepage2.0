import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

const defaultImage = 'https://www.tuatmcc.com/images/wordmark-logo-image.png';

const parseOgImage = (src, rootPath) => {
	const remoteBase = 'https://raw.githubusercontent.com/tuatmcc/hp-md-content/main';
	console.log(src);
	if (!src) return defaultImage;
	else if (src.startsWith('http')) return src;
	else if (src.startsWith('./')) return `${remoteBase}/${rootPath}/${src.slice(2)}`;
	else return defaultImage;
};

const generate = (documentType) =>
	defineDocumentType(() => ({
		name: documentType.charAt(0).toUpperCase() + documentType.slice(1),
		filePathPattern: `${documentType}/**/index.md`,
		fields: {
			title: {
				type: 'string',
				required: true,
			},
			description: {
				type: 'string',
			},
			date: {
				type: 'date',
				required: true,
			},
			img: {
				type: 'string',
				resolve: (doc) => encodeURI(parseOgImage(doc._raw.img, doc._raw.flattenedPath)),
			},
			tags: {
				type: 'list',
				of: { type: 'string' },
			},
			author: {
				type: 'string',
			},
		},
		computedFields: {
			slug: {
				type: 'string',
				resolve: (doc) => doc._raw.flattenedPath.replace(`${documentType}/`, ''),
			},
			rootPath: {
				type: 'string',
				resolve: (doc) => doc._raw.flattenedPath,
			},
			dateStr: {
				type: 'string',
				resolve: (doc) => doc.date.replace(/T.*/, ''),
			},
		},
	}));

export const Blog = generate('blog');
export const News = generate('news');
export const Members = generate('members');

const rpcOptions = {
	theme: 'github-dark',
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }];
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className.push('line--highlighted');
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ['word--highlighted'];
	},
};

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Blog, News, Members],
	markdown: {
		remarkPlugins: [remarkGfm, remarkGemoji, remarkMath, [remarkToc, { heading: '', tight: true }]],
		rehypePlugins: [
			rehypeKatex,
			[
				rehypeDocument,
				{
					css: ['https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css'],
				},
			],
			[rehypePrettyCode, rpcOptions],
			rehypeSlug,
			[
				rehypeAutoLinkHeadings,
				{
					behavior: 'append',
				},
			],
		],
	},
});
