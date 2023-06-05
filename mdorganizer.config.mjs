import rehypeFormat from 'rehype-format';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';

/** @type {import('mdorganizer').Field} */
const metaField = {
  title: { type: 'string', required: true },
  date: { type: 'string', required: true },
  description: { type: 'string' },
  img: { type: 'string' },
  tags: { type: 'string[]' },
  author: { type: 'string' },
};

/** @type {import('rehype-pretty-code').Options} */
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

/** @type {import('mdorganizer').OrganizerConfig} */
const organizerConfig = {
  remarkRehypeOptions: {},
  remarkPlugins: [
    remarkGfm,
    remarkMath,
    remarkGemoji,
    [remarkToc, { heading: 'Table of Contents', tight: true }],
  ],
  rehypePlugins: [
    rehypeRaw,
    [rehypePrettyCode, rpcOptions],
    rehypeSlug,
    rehypeKatex,
    rehypeSanitize,
    rehypeStringify,
    rehypeFormat,
  ],
  postConfigs: [
    {
      postType: 'Blog',
      globPattern: 'content/blog/**/index.md',
      field: metaField,
    },
    {
      postType: 'News',
      globPattern: 'content/news/**/index.md',
      field: metaField,
    },
    {
      postType: 'Member',
      globPattern: 'content/members/**/index.md',
      field: metaField,
    },
  ],
};

export default organizerConfig;
