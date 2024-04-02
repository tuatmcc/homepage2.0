import { type CompileMDXResult, compileMDX } from 'next-mdx-remote/rsc';
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

import type { ComponentPropsWithoutRef, ReactElement } from 'react';

import type { MDXComponents } from 'mdx/types';

import { MDXFigureComponent } from '~/app/_components/mdx/MDXFigureComponent';
import { MDXLinkComponent } from '~/app/_components/mdx/MDXLinkComponent';
import { MDXScriptComponent } from '~/app/_components/mdx/MDXScriptComponent';

export const components = {
  a: (props: ComponentPropsWithoutRef<typeof MDXLinkComponent>) => (
    <MDXLinkComponent {...props} />
  ),
  figure: (props: ComponentPropsWithoutRef<typeof MDXFigureComponent>) => (
    <MDXFigureComponent {...props} />
  ),
  script: (props: ComponentPropsWithoutRef<typeof MDXScriptComponent>) => (
    <MDXScriptComponent {...props} />
  ),
} as MDXComponents;

const rehypePrettyCodeOptions: Partial<RehypePrettyCodeOption> = {
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

export default async function compile(source: string): Promise<ReactElement> {
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
          [rehypePrettyCode as () => void, rehypePrettyCodeOptions],
          rehypeKatex as () => void,
          rehypeRaw as () => void,
          [rehypeStringify as () => void, { allowDangerousHtml: true }],
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
