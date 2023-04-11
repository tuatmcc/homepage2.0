import type { Blog, Members, News } from 'contentlayer/generated';

export type Post = (Blog | News | Members) & {
	documentType: 'blog' | 'news' | 'members';
};
