import { MDXComponents } from 'mdx/types';
import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, { Options } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

const components = {} as MDXComponents;

const rhypePrettyCodeOptions: Partial<Options> = {
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

export default async function compile(source: string): Promise<JSX.Element> {
  const { content }: CompileMDXResult = await compileMDX({
    source,
    options: {
      mdxOptions: {
        remarkPlugins: [
          remarkGfm,
          remarkGemoji,
          remarkMath,
          [remarkToc, { heading: '目录', tight: true }],
        ],
        rehypePlugins: [
          rehypeKatex,
          [rehypePrettyCode, rhypePrettyCodeOptions],
          rehypeSlug,
          [rehypeAutoLinkHeadings, { behavior: 'append' }],
          [rehypeStringify, { allowDangerousHtml: true }],
        ],
        remarkRehypeOptions: {
          allowDangerousHtml: true,
        },
      },
    },
    components,
  });

  return content;
}
