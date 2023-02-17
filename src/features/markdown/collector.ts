import { error } from 'console';
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

export const Collector = (group: 'blog' | 'news') => {
	const slugs = readdirSync(`${articlesDirName}/${group}`);
	const articles: Article[] = slugs.map((slug) => {
		const { data, content } = matter(readFileSync(`${articlesDirName}/${group}/${slug}/index.md`));
		const meta = data as MetaData;
		const markdown = content as string;

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

	return {
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
				const errorArticle: Article = {
					isExist: false,
					originalBaseURL: '',
					targetPath: '404',
					group: group,
					slug: slug,
					markdown: '',
					html: '',
					meta: {
						title: 'Error',
					},
				};

				return errorArticle;
			}
		},
	};
};
