import { Box, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { Page, PageMeta } from '../../components/page'
import { PostCollector, PostCollectorProps } from '../../lib/post-collector'

const meta: PageMeta = {
  title: 'お知らせ',
  description: 'News of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const Works = ({ posts }: PostCollectorProps) => {
  return (
    <Page meta={meta}>
      <Flex flexWrap='wrap'>
        {posts.map((post) => (
          <Flex key={0} flex='1 1 30em'>
            <Box>
              <Link href={post.filePath}>{post.filename}</Link>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Page>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('news').getStaticProps

export default Works
