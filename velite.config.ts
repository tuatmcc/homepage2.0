import { defineConfig, s } from 'velite';

// `s` is extended from Zod with some custom schemas,
// you can also import re-exported `z` from `velite` if you don't need these extension schemas.

export default defineConfig({
  collections: {
    blog: {
      name: 'Blog', // collection type name
      pattern: 'blog/**/*.md', // content files glob pattern
      schema: s
        .object({
          title: s.string().max(99), // Zod primitive type
          // slug: s.slug('blog'), // validate format, unique in posts collection
          slug: s.path(), // auto generate slug from file path
          date: s.isodate(), // input Date-like string, output ISO Date string.
          img: s.image().optional(), // validate image URL
          metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
          excerpt: s.excerpt(), // excerpt of markdown content
          content: s.markdown(), // transform markdown to html
          tags: s.array(s.string()).optional(), // array of string
        author: s.string().optional(), // author name
        })
        // more additional fields (computed fields)
        .transform((data) => ({ ...data, permalink: `/blog/${data.slug}` })),
    },
    news: {
      name: 'News',
      pattern: 'news/**/*.md',
      schema: s
        .object({
          title: s.string().max(99),
          // slug: s.slug('news'),
          slug: s.path(),
          date: s.isodate(),
          img: s.image().optional(),
          metadata: s.metadata(),
          excerpt: s.excerpt(),
          content: s.markdown(),
          tags: s.array(s.string()).optional(),
        })
        .transform((data) => ({ ...data, permalink: `/news/${data.slug}` })),
    },
  },
});
