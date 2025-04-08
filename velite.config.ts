import { transformerCopyButton } from '@rehype-pretty/transformers';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode, {
  type Options as RehypePrettyCodeOption,
} from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';
import { defineConfig, s } from 'velite';

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
  transformers: [
    transformerCopyButton({ visibility: 'always', feedbackDuration: 2000 }),
  ],
};

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

// Function to format ISO date to YYYY-MM-DD
const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return date.toISOString().split('T')[0]; // Gets YYYY-MM-DD part
};

export default defineConfig({
  collections: {
    blog: {
      name: 'Blog', // collection type name
      pattern: 'blog/**/index.md', // content files glob pattern
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.path(),
          date: s.isodate(),
          img: s.image().optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.markdown(),
          tags: s.array(s.string()).optional(),
          author: s.string().optional(),
        })
        // more additional fields (computed fields)
        .transform((data) => ({
          ...data,
          date: formatDate(data.date),
          permalink: `/${data.slug}`,
        })),
    },
    news: {
      name: 'News',
      pattern: 'news/**/index.md',
      schema: s
        .object({
          title: s.string().max(99),
          slug: s.path(),
          date: s.isodate(),
          img: s.image().optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.markdown(),
          tags: s.array(s.string()).optional(),
        })
        .transform((data) => ({
          ...data,
          date: formatDate(data.date),
          permalink: `/${data.slug}`,
        })),
    },
  },
  markdown: {
    gfm: true,
    remarkPlugins: [
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
  },
});
