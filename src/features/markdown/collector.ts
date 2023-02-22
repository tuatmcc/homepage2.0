import { readdirSync, readFileSync } from 'fs';

import matter from 'gray-matter';

import { markdownToHtml } from './markdown-to-html';

import { MetaData } from '~/types/meta';
import { imgsrc } from '~/utils/imgsrc';

type Group = 'blog' | 'news' | 'members';

export type Article = {
	isExist: boolean;
	originalBaseURL: string;
	targetPath: string;
	group: Group;
	slug: string;
	markdown: string;
	html: string;
	meta: MetaData;
};

const dummyArticle: Article = {
	isExist: false,
	originalBaseURL: '',
	targetPath: '',
	group: 'blog',
	slug: '',
	markdown: '',
	html: '',
	meta: { title: '' },
};

type CollectorMethods = {
	get(slug: string): Article;
	getAll(): Article[];
};

const articlesDirName = 'content';

export const Collector = (group: Group) => {
	try {
		const slugs = readdirSync(`${articlesDirName}/${group}`);
		const articles: Article[] = [];
    
    for (const slug of slugs) {
			const article = structuredClone(dummyArticle);
			const files = readdirSync(`${articlesDirName}/${group}/${slug}`);

			article.originalBaseURL = `https://raw.githubusercontent.com/tuatmcc/markdown-articles/main/${group}/${slug}/`;
			article.targetPath = `${group}/${slug}`;
			article.group = group;
			article.slug = slug;

			if (files.indexOf('index.md') !== 1) {
				const file = readFileSync(`${articlesDirName}/${group}/${slug}/index.md`);
				const { data, content } = matter(file);
				article.meta = data as MetaData;
				article.markdown = content as string;

				if (article.meta.img) article.meta.img = imgsrc(article.meta.img, group, slug);
				article.html = markdownToHtml(article.markdown);

        articles.push(article);
			}
		}

		const methods: CollectorMethods = {
			getAll() {
				return articles;
			},
			get(slug: string) {
				const target = articles.find((article, _i) => {
					return slug === article.slug;
				});
				if (target) {
					return target;
				} else {
					console.error('Something went wrong while generating articles');
					return dummyArticle;
				}
			},
		};
		return methods;
	} catch (e) {
		console.error(e);
		const methods: CollectorMethods = {
			getAll() {
				return [dummyArticle];
			},
			get(slug: string) {
				slug;
				return dummyArticle;
			},
		};

		return methods;
	}
};
