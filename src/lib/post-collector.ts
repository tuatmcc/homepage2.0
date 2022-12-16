import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';
import { GetStaticProps } from 'next';

import { MetaData } from '~/components/types/meta';

// 記事を取得するためのクラス。index.tsxで使う生このpostCollectorと、
// [slug].tsxで使うdynamicRoutingというwrapperクラス用とで、2つの別インスタンスができてしまい、
// 一部処理が重複しているのが気になる。余裕があれば直したいが、タグの処理などほかの設計をちゃんと考えてから実装する必要がある。

/**
 * @param {string} slug - The slug of the post. This is the name of the markdown file without the extension.
 * @param frontmatter - The metadata of the post.
 */
export interface Post {
  slug: string;
  frontmatter: MetaData;
  content: string;
}

/**
 * @param slug filename without the extension
 * @param filePath absolute path to the file
 */
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
    this.targetDirFullPath = path.join(process.cwd(), 'posts', targetDir);
  }

  /**
   * Collects all posts from the target directory
   * @param slug src/pages/targetDir/slug.md
   * @returns
   */
  getPostBySlug = (slug: string): Post => {
    const fullPath = path.join(this.targetDirFullPath, `${slug}.md`);
    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
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
        slug: postName.replace(/\.md$/, ''),
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
    const postPaths = this.getAllPostPaths();
    const posts = this.getAllPosts();
    return {
      props: {
        posts: await Promise.all(posts),
      },
    };
  };
}
