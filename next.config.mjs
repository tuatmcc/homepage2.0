import createMDX from '@next/mdx';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkToc from 'remark-toc';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ['tsx', 'mdx'],
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    // ------------------ SVG ------------------
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    );
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    // ------------------ MDX ------------------
    config.resolve.plugins = [
      new TsconfigPathsPlugin({
        extensions: ['.ts', '.tsx', '.mdx'],
      }),
    ];

    return config;
  },
};

const withMDX = createMDX({
  options: {
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
      [
        rehypePrettyCode,
        {
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
        },
      ],
      rehypeKatex,
      [rehypeStringify, { allowDangerousHtml: true }],
    ],
    remarkRehypeOptions: {
      allowDangerousHtml: true,
      footnoteLabel: '脚注',
      footnoteBackLabel: '戻る',
    },
    format: 'mdx',
  },
});

export default withMDX(nextConfig);
