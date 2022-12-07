import { CommonPage, PageMeta } from '../../components/CommonPage/CommonPage'

const meta: PageMeta = {
  title: 'お知らせ',
  description: 'News of TUATMCC',
}

// posts will be populated at build time by getStaticProps()
const NewsPage = () => {
  return <CommonPage meta={meta}>あ</CommonPage>
}

// This function gets called at build time on server-side.

export default NewsPage
