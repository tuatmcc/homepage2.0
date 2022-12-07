import { GetStaticProps } from 'next'

const IndexPage = () => <></>

export default IndexPage

// `/home` にリダイレクト
export const getStaticProps: GetStaticProps = async () => {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  }
}
