import Link from 'next/link'
import { CommonPage, PageMeta } from '../../components/CommonPage/CommonPage'
import { PostCollector, PostCollectorProps } from '../../lib/post-collector'

const meta: PageMeta = {
  title: '作品',
  description: 'Works of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const Works = ({ posts }: PostCollectorProps) => {
  return (
    <CommonPage meta={meta}>
      {posts.map((post) => (
        <div key={post.slug}>
          <Link href={`works/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </CommonPage>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('works').getStaticProps

export default Works
