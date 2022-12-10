import { Page, PageMeta } from '../../components/Page/Page'

const meta: PageMeta = {
  title: 'お知らせ',
  description: 'News of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const NewsPage = () => {
  return <Page meta={meta}>あ</Page>
}

// This function gets called at build time on server-side.

export default NewsPage
