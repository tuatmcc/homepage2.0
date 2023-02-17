import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { GetStaticProps } from 'next';

import { MetaData } from '~/types/meta';

export interface Post {
	slug: string;
	frontmatter: MetaData;
	content: string;
}

interface PostPath {
	slug: string;
	fullPath: string;
}

export interface PostCollectorProps {
	posts: Post[];
}

export class PostCollector {
	targetDir: string;
	targetDirFullPath: string;

	/**
	 * @param targetDir src/pages/targetDir
	 */
	constructor(targetDir: string) {
		this.targetDir = targetDir;
		this.targetDirFullPath = path.join(process.cwd(), 'public', targetDir);
	}

	/**
	 * Collects all posts from the target directory
	 * @param slug src/pages/targetDir/slug.md
	 * @returns
	 */
	getPostBySlug = (slug: string): Post => {
		const fullPath = path.join(this.targetDirFullPath, slug, 'index.md');
		try {
			const fileContents = fs.readFileSync(fullPath, 'utf8');
			const { data, content } = matter(fileContents) as unknown as { data: MetaData; content: string };
			data.date = data.date ? data.date : '';
			if (data.img?.startsWith('./')) {
				data.img = `/${this.targetDir}/${slug}/${data.img}`;
			} else if (data.img === undefined) {
				data.img = '/mcc-design.webp';
			}
			return { slug: slug, frontmatter: data as MetaData, content };
		} catch (e) {
			console.error(e);
			return { slug: '/404', frontmatter: { title: 'Page not found' }, content: '' };
		}
	};

	/**
	 * Collects all markdown files from the target directory
	 */
	getAllPostPaths = (): PostPath[] => {
		const postNames = fs.readdirSync(this.targetDirFullPath);
		const postPaths = postNames.map((postName) => {
			return {
				slug: postName.replace(/index\.md$/, ''),
				fullPath: `${this.targetDir}/${postName}`,
			};
		});
		return postPaths;
	};

	getAllPosts = () => {
		const postPaths = this.getAllPostPaths();
		const posts = postPaths.map((postPath) => this.getPostBySlug(postPath.slug));
		return posts;
	};

	/**
	 * 記事一覧ページのためのデータを作成する。
	 * @returns posts: { slug: string, frontmatter: { title: string, etc... } }[]
	 */
	getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
		const _postPaths = this.getAllPostPaths();
		const posts = this.getAllPosts();
		return {
			props: {
				posts: await Promise.all(posts),
			},
		};
	};
}
