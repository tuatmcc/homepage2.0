import Link from 'next/link'
import { PostCollector, Post } from '../lib/post-collector'

interface Props {
  posts: Post[]
}

// posts will be populated at build time by getStaticProps()
const Works = ({ posts }: Props) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={0}>
          <h3>
            <Link href={post.filePath}>{post.filename}</Link>
          </h3>
        </li>
      ))}
    </ul>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('works').getStaticProps

export default Works
