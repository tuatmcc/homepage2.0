import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import { useEffect } from 'react'

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

      <div className={styles.container}>
        <div className={styles.center}>
          <h1 className={styles.title}>
            <Image alt='logo' width={130} height={130} src='/mcc-logo.svg' />M
            <span style={{ fontSize: '1rem' }}>icro</span>C
            <span style={{ fontSize: '1rem' }}>omputer</span>C
            <span style={{ fontSize: '1rem' }}>lub</span>
          </h1>
        </div>
        <div className={styles.top}>
          <h2 className={styles.subtitle}>東京農工大学Tech系サークル</h2>
        </div>
      </div>
    </>
  )
}

export default Home
