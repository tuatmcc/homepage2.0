import Page from '../../components/common/Page/Page';

const meta = {
  title: 'お知らせ',
  description: 'News of TUATMCC',
};

// posts will be populated at build time by getStaticProps()
const NewsPage = () => {
  return <Page meta={meta}>あaaa</Page>;
};

// This function gets called at build time on server-side.

export default NewsPage;
