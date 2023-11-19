import { compileMDX, type CompileMDXResult } from 'next-mdx-remote/rsc';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOption,
} from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

import type { MDXComponents } from 'mdx/types';

import {
  MDXLinkComponent,
  type MDXLinkComponentProps,
} from '~/components/mdx/MDXLinkComponent';
import {
  MDXPreComponent,
  type MDXPreComponentProps,
} from '~/components/mdx/MDXPreComponent';
import {
  MDXScriptComponent,
  type MDXScriptComponentProps,
} from '~/components/mdx/MDXScriptComponent';

const components = {
  a: (props: MDXLinkComponentProps) => <MDXLinkComponent {...props} />,
  pre: (props: MDXPreComponentProps) => <MDXPreComponent {...props} />,
  script: (props: MDXScriptComponentProps) => <MDXScriptComponent {...props} />,
} as MDXComponents;

const rhypePrettyCodeOptions: Partial<RehypePrettyCodeOption> = {
  theme: 'github-dark',
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className?.push('line--highlighted');
  },
  onVisitHighlightedChars(node) {
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
          [remarkToc, { heading: '目次', tight: true }],
        ],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutoLinkHeadings,
            {
              behavior: 'append',
              properties: { 'aria-label': 'heading-link' },
            },
          ],
          [rehypePrettyCode, rhypePrettyCodeOptions],
          // rehypeKatex,
          // rehypeRaw,
          // [rehypeStringify, { allowDangerousHtml: true }],
        ],
        remarkRehypeOptions: {
          allowDangerousHtml: true,
          footnoteLabel: '脚注',
          footnoteBackLabel: '戻る',
        },
        format: 'md',
      },
    },
    components,
  });

  return content;
}
