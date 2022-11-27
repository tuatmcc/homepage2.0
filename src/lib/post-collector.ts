import { promises as fs } from 'fs'
import { GetStaticProps } from 'next'
import path from 'path'

export interface Post {
  filePath: string
  filename: string
  content: string
}

export class PostCollector {
  targetDir: string

  /**
   *
   * @param targetDir src/pages/targetDir
   */
  constructor(targetDir: string) {
    this.targetDir = targetDir
  }

  getStaticProps: GetStaticProps<{ posts: Post[] }> = async () => {
    // https://nextjs.org/docs/api-reference/data-fetching/get-static-props#reading-files-use-processcwd

    // This function gets called at build time on server-side.
    // It won't be called on client-side, so you can even do
    // direct database queries.
    const postsDirectory = path.join(
      process.cwd(),
      `src/pages/${this.targetDir}`
    )
    const filenames = await fs.readdir(postsDirectory)

    const posts: Promise<Post>[] = filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')

      // Generally you would parse/transform the contents
      // For example you can transform markdown to HTML here

      return {
        filePath: `/${this.targetDir}/${filename.replace(/\.mdx$/, '')}`,
        filename,
        content: fileContents,
      }
    })
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts: await Promise.all(posts),
      },
    }
  }
}
