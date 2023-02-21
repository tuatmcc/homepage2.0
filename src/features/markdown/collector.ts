import { readdirSync, readFileSync } from 'fs';

import matter from 'gray-matter';

import { MetaData } from '~/types/meta';
import { imgsrc } from '~/utils/imgsrc';

const articlesDirName = 'content';

export type Article = {
	isExist: boolean;
	originalBaseURL: string;
	targetPath: string;
	group: 'blog' | 'news';
	slug: string;
	markdown: string;
	html: string;
	meta: MetaData;
};

const dummyArticle: Article = {
	isExist: false,
	originalBaseURL: '',
	targetPath: '404',
	group: 'blog',
	slug: '',
	markdown: '',
	html: '',
	meta: { title: 'Error' },
};

type CollectorMethods = {
	get(slug: string): Article;
	getAll(): Article[];
};

export const Collector = (group: 'blog' | 'news') => {
	try {
		const slugs = readdirSync(`${articlesDirName}/${group}`);
		const articles: Article[] = slugs.map((slug) => {
			const file = readFileSync(`${articlesDirName}/${group}/${slug}/index.md`);
			const { data, content } = matter(file);
			const meta = data as MetaData;
			const markdown = content as string;
			// サムネ画像のURLを
			if (meta.img) meta.img = imgsrc(meta.img, group, slug);

			return {
				isExist: true,
				originalBaseURL: `https://raw.githubusercontent.com/tuatmcc/markdown-articles/main/${group}/${slug}/`,
				targetPath: `${group}/${slug}`,
				group: group,
				slug: slug,
				markdown: markdown,
				html: '',
				meta: meta,
			};
		});

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
