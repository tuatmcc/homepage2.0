import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeHighlight from 'rehype-highlight';
import rehypeKatex from 'rehype-katex';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';

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
		.use(remarkToc, { heading: 'Index', tight: true })
		.use(remarkRehype)
		.use(rehypeKatex)
		.use(rehypeHighlight, { ignoreMissing: true })
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
