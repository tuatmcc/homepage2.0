import { Box, Flex } from '@chakra-ui/react'
import { Page, PageMeta } from '../../components/page'
import { PostCollector, PostCollectorProps } from '../../lib/post-collector'

const meta: PageMeta = {
  title: 'お知らせ',
  description: 'News of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const NewsPage = () => {
  return (
    <Page meta={meta}>
      <Flex flexDir="column"></Flex>
    </Page>
  )
}

// This function gets called at build time on server-side.

export default NewsPage
