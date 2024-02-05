import type { CategoryConfig, UserConfig } from 'mdorganizer';

const fields: CategoryConfig['fields'] = {
  title: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'string',
    required: true,
  },
  tags: {
    type: 'string[]',
  },
  description: {
    type: 'string',
  },
  img: {
    type: 'string',
  },
};

export default {
  documents: [
    {
      documentCategory: 'blog',
      globPattern: 'content/blog/**/index.md',
      fields: {
        ...fields,
        author: {
          type: 'string',
        },
      },
    },
    {
      documentCategory: 'news',
      globPattern: 'content/news/**/index.md',
      fields,
    },
  ],
} satisfies UserConfig;
