import { defineConfig, s } from 'velite';

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
          permalink: `/blog/${data.slug}`,
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
          permalink: `/news/${data.slug}`,
        })),
    },
  },
});
