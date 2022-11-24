import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HOME - MCC</title>
        <meta
          name="description"
          content="東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <Image alt="logo" width={130} height={130} src="/mcc-logo.svg" />
          <span className='title-m1'>M</span>
          <span>C</span>
          <span>C</span>
        </h1>
      </main>
    </div>
  )
}

export default Home