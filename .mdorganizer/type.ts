export type PostTypeBlog = {
  title: string;
  date: string;
  description?: string;
  img?: string;
  tags?: string[];
  author?: string;
  postType: 'Blog';
  globPattern: 'content/blog/**/index.md';
  rootPath: string;
  markdown: string;
  html: string;
};

export type PostTypeNews = {
  title: string;
  date: string;
  description?: string;
  img?: string;
  tags?: string[];
  author?: string;
  postType: 'News';
  globPattern: 'content/news/**/index.md';
  rootPath: string;
  markdown: string;
  html: string;
};

export type PostTypeMember = {
  title: string;
  date: string;
  description?: string;
  img?: string;
  tags?: string[];
  author?: string;
  postType: 'Member';
  globPattern: 'content/members/**/index.md';
  rootPath: string;
  markdown: string;
  html: string;
};
