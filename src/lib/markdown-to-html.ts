import { join } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkGemoji from 'remark-gemoji'
import remarkToc from 'remark-toc'
import remarkRehype from 'remark-rehype'
import rehypeKatex from 'rehype-katex'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeStringify from 'rehype-stringify'

/**
 * Parse markdown to html. This function must be used inside the getStaticProps function.
 * @param markdown
 * @returns
 */
const markdownToHtml = async (markdown: string) => {
  const html = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkGemoji)
    .use(remarkToc, { heading: 'Index', tight: true })
    .use(remarkRehype)
    .use(rehypeKatex)
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeSlug)
    .use(rehypeAutoLinkHeadings, { behavior: 'wrap' })
    .use(rehypeStringify)
    .process(markdown)

  return html.toString()
}

export default markdownToHtml
