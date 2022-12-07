import Head from 'next/head'
import Image from 'next/image'
import HomeCanvas from '~/components/HomeCanvas/HomeCanvas'
import Navbar from '~/components/Navbar/Navbar'
import SidebarLeft from '~/components/SidebarLeft/SidebarLeft'

import styles from './style.module.scss'

const landingPage = () => {
  return (
    <>
      <Head>
        <title>HOME - MCC</title>
        <meta
          lang="ja"
          name="description"
          content="東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.landingPage}>
        <Navbar />
        <HomeCanvas />
        <div className={styles.sidebarLeft}>
          <SidebarLeft />
        </div>
      </div>
    </>
  )
}

export default landingPage
