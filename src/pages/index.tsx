import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { TitleCanvas } from '../components/title-animations'
import { NextPage } from 'next'

const Home: NextPage = () => {
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
        <TitleCanvas />
        <h1 className={styles.title}>
          <Image alt="logo" width={130} height={130} src="/mcc-logo.svg" />
          M<span style={{fontSize: '1rem'}}>icro</span>C<span style={{fontSize: '1rem'}}>omputer</span>C<span style={{fontSize: '1rem'}}>lub</span>
        </h1>
      </main>
    </div>
  )
}

export default Home
