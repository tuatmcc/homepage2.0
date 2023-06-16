import { MDXComponents } from 'mdx/types';
import { compileMDX, CompileMDXResult } from 'next-mdx-remote/rsc';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, {
  Options as RehypePrettyCodeOption,
} from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

import {
  MDLinkComponent,
  type MDLinkComponentProps,
} from '~/components/markdown/MDLinkComponent';
import {
  MDPreComponent,
  type MDPreComponentProps,
} from '~/components/markdown/MDPreComponent';

const components = {
  a: (props: MDLinkComponentProps) => <MDLinkComponent {...props} />,
  pre: (props: MDPreComponentProps) => <MDPreComponent {...props} />,
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
          [remarkToc, { heading: '目次', tight: true }],
        ],
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutoLinkHeadings, { behavior: 'append' }],
          rehypeKatex,
          [rehypePrettyCode, rhypePrettyCodeOptions],
          rehypeRaw,
          [rehypeStringify, { allowDangerousHtml: true }],
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
