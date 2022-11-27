import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { HomeContainer, HomeLayer } from '../components/home-layers'
/**
 * サイトのトップページ。パスは'/'でマッチします
 * @returns Home
 */
const Home = () => {
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
          <h1 className={styles.title} style={{ zIndex: 20 }}>
            <Image alt='logo' width={130} height={130} src='/mcc-logo.svg' />M
            <span style={{ fontSize: '1rem' }}>icro</span>C
            <span style={{ fontSize: '1rem' }}>omputer</span>C
            <span style={{ fontSize: '1rem' }}>lub</span>
          </h1>
        </HomeLayer>
        <HomeLayer>
          <div>
            <h2 className={styles.subTitle}>東京農工大学公認サークル</h2>
          </div>
        </HomeLayer>
        <HomeLayer>
          <iframe
            src='Builds/index.html'
            style={{ height: '100%', width: '100%', zIndex: 1 }}
          />
        </HomeLayer>
      </HomeContainer>
    </>
  )
}

export default Home
