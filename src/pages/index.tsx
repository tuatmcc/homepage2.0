import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { NextPage } from 'next'
import { HomeContainer, HomeLayer } from '../components/home-layers'

/**
 * サイトのトップページ。パスは'/'でマッチします
 * @returns Home
 */
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>HOME - MCC</title>
        <meta
          lang='ja'
          name='description'
          content='東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeContainer>
        <HomeLayer>
          <h1 className={styles.title}>
            <Image alt='logo' width={130} height={130} src='/mcc-logo.svg' />M
            <span style={{ fontSize: '1rem' }}>icro</span>C
            <span style={{ fontSize: '1rem' }}>omputer</span>C
            <span style={{ fontSize: '1rem' }}>lub</span>
          </h1>
        </HomeLayer>
        <HomeLayer>
          <h2 className={styles.subTitle}>東京農工大学公認サークル</h2>
        </HomeLayer>
      </HomeContainer>
    </>
  )
}

export default Home
