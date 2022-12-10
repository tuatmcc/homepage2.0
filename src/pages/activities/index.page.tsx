import Link from 'next/link'

import { Page, PageMeta } from '../../components/Page/Page'
import { PostCollector, PostCollectorProps } from '../../lib/post-collector'

const meta: PageMeta = {
  title: '活動報告',
  description: 'Activities of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const Activities = ({ posts }: PostCollectorProps) => {
  return (
    <Page meta={meta}>
      {posts.map((post) => (
        <div key={0}>
          <Link href={`activities/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </Page>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('activities').getStaticProps

export default Activities
