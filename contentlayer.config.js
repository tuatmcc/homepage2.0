/* ==========================================================================
 *
 * We use contentlayer just to generate the typed fromtmatter
 *
 * converting markdown to react server components is done by next-remote-mdx
 *
 ========================================================================== */

import { defineDocumentType, makeSource } from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').FieldDefs} */
const fields = {
  title: {
    type: 'string',
    required: true,
  },
  date: {
    type: 'date',
    required: true,
  },
  description: {
    type: 'string',
  },
  img: {
    type: 'string',
  },
  tags: {
    type: 'list',
    of: { type: 'string' },
  },
  author: {
    type: 'string',
  },
  unlist: {
    type: 'boolean',
  },
};

/**
 * @param {string} documentType
 * @returns {import('contentlayer/source-files').DocumentType<string>}
 */
const generateDocumentType = (documentType) => {
  /** @type {import('contentlayer/source-files').defineDocumentType} */
  return defineDocumentType(() => ({
    name: documentType.charAt(0).toUpperCase() + documentType.slice(1),
    filePathPattern: `${documentType}/**/*/index.md`,
    fields,
    computedFields: {
      documentType: {
        type: 'string',
        resolve: () => documentType,
      },
      dateStr: {
        type: 'string',
        resolve: (doc) => doc.date.replace(/T.*/, ''),
      },
      rootPath: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
      },
      parentPath: {
        type: 'string',
        resolve: (doc) =>
          doc._raw.flattenedPath.split('/').slice(0, -1).join('/'),
      },
    },
  }));
};

export const Blog = generateDocumentType('blog');
export const News = generateDocumentType('news');
export const Members = generateDocumentType('members');
export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Blog, News, Members],
  onUnknownDocuments: 'skip-warn',
});
