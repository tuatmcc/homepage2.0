import { defineDocumentType, makeSource } from 'contentlayer/source-files';

const generate = (documentType) =>
  defineDocumentType(() => ({
    name: documentType.charAt(0).toUpperCase() + documentType.slice(1),
    filePathPattern: `${documentType}/**/*/index.md`,
    fields: {
      title: {
        type: 'string',
        required: true,
      },
      description: {
        type: 'string',
      },
      date: {
        type: 'date',
        required: true,
      },
      img: {
        type: 'string',
        resolve: (doc) =>
          encodeURI(parseOgImage(doc._raw.img, doc._raw.flattenedPath)),
      },
      tags: {
        type: 'list',
        of: { type: 'string' },
      },
      author: {
        type: 'string',
      },
      listing: {
        type: 'boolean',
      },
    },
    computedFields: {
      slug: {
        type: 'list',
        of: { type: 'string' },
        resolve: (doc) =>
          doc._raw.flattenedPath
            .replace(`${documentType}/`, '')
            .replace(/\/.+?\.md/, '')
            .split('/'),
      },
      rootPath: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
      },
      dateStr: {
        type: 'string',
        resolve: (doc) => doc.date.replace(/T.*/, ''),
      },
    },
  }));

export const Blog = generate('blog');
export const News = generate('news');
export const Members = generate('members');

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, News, Members],
  markdown: {},
  onUnknownDocuments: 'skip-ignore',
});
