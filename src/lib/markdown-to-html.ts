import { join } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import remarkToc from 'remark-toc'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeShiki from '@leafac/rehype-shiki'
import shiki from 'shiki'
import rehypeSlug from 'rehype-slug'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'

/**
 * Parse markdown to html at build time
 * @param markdown 
 * @returns 
 */
const MarkdownToHtml = async (markdown: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkGemoji)
    .use(remarkToc, { heading: 'Index', tight: true })
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeShiki, { highlighter: await shiki.getHighlighter({ theme: 'nord'}) })
    .use(rehypeSlug)
    .use(rehypeAutoLinkHeadings, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(markdown)

  return html
}

export default MarkdownToHtml