import {} from 'mdorganizer';

const fields: UserConfig['documents'][0]['fields'] = {
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
  author: {
    type: 'string',
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
      fields,
    },
    {
      documentCategory: 'news',
      globPattern: 'content/news/**/index.md',
      fields,
    },
  ],
} satisfies UserConfig;
