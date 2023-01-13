import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
// import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { Theme } from 'shiki';
import { unified } from 'unified';

const rcpOptions: Partial<Options> = {
	theme: 'github-dark' as Theme,
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = [{ type: 'text', value: ' ' }];
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className.push('highlighted');
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ['word'];
	},
};

/**
 * Parse markdown to html. This function must be used inside the getStaticProps function.
 * @param markdown
 * @returns
 */
export const markdownToHtml = async (markdown: string) => {
	const html = await unified()
		.use(remarkParse)

		.use(remarkGfm)
		.use(remarkGemoji)
		.use(remarkMath)
		.use(remarkToc, { heading: 'Index', tight: true })
		.use(remarkRehype)
		.use(rehypeKatex)
		.use(rehypeDocument, {
			css: ['https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css'],
		})
		.use(rehypePrettyCode, rcpOptions)
		.use(rehypeSlug)
		.use(rehypeAutoLinkHeadings, {
			behavior: 'append',
			content: { type: 'element', tagName: 'minilinkicon', properties: { className: ['icon-link'] } },
			// rome-ignore lint/suspicious/noExplicitAny: <explanation>
		} as any)
		.use(rehypeStringify)
		.process(markdown);

	return html.toString();
};
