import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { Page, PageMeta } from '../../components/page'
import { PostCollector, PostCollectorProps } from '../../lib/post-collector'

const meta: PageMeta = {
  title: '活動報告',
  description: 'Activities of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const Works = ({ posts }: PostCollectorProps) => {
  return (
    <Page meta={meta}>
      <Flex flexDir='column'>
        {posts.map((post) => (
          <Flex key={0}>
              <Link href={post.filePath}>{post.filename}</Link>
          </Flex>
        ))}
      </Flex>
    </Page>
  )
}

// This function gets called at build time on server-side.
export const getStaticProps = new PostCollector('activities').getStaticProps

export default Works
