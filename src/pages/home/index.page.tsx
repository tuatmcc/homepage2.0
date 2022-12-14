import Head from 'next/head';
import Image from 'next/image';
import { FC, useState } from 'react';

import styles from './style.module.css';

import HeaderTop from '~/components/common/HeaderPC/HeaderPC';
import HomeCanvas from '~/components/home/HomeCanvas/HomeCanvas';

export type LandingPageProps = {};

const LandingPage: FC<LandingPageProps> = () => {
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
        <HomeCanvas />
      </div>

      <HeaderTop />
    </>
  );
};

export default LandingPage;
