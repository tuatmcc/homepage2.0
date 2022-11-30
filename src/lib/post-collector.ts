import { promises as fs } from 'fs'
import { GetStaticProps } from 'next'
import path from 'path'

interface Post {
  filePath: string
  filename: string
  content: string
}

export interface PostCollectorProps {
  posts: Post[]
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

    // Remove index.tsx from list as it is not a post
    filenames.splice(filenames.indexOf('index.tsx'), 1)

    const posts: Promise<Post>[] = filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')

      return {
        filePath: `/${this.targetDir}/${filename.replace(/\.mdx?$/, '')}`,
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
