import Link from 'next/link'
import { CommonPage, PageMeta } from '../../components/CommonPage/CommonPage'
import { PostCollector, PostCollectorProps } from '../../lib/post-collector'

const meta: PageMeta = {
  title: '活動報告',
  description: 'Activities of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const Activities = ({ posts }: PostCollectorProps) => {
  return (
    <CommonPage meta={meta}>
      <div>
        {posts.map((post) => (
          <div key={0}>
            <Link href={`activities/${post.slug}`}>{post.slug}</Link>
          </div>
        ))}
      </div>
    </CommonPage>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('activities').getStaticProps

export default Activities
