import Head from 'next/head';
import Image from 'next/image';
import { FC, useContext, useState } from 'react';

import styles from './style.module.css';

import NavbarMobile from '~/components/common/NavbarMobile/NavbarMobile';
import NavbarPC from '~/components/common/NavbarPC/NavbarPC';
import HomeCanvas from '~/components/sandbox/HomeCanvas/HomeCanvas';
import { MediaQueryContext } from '~/providers/MediaQueryProvider';

export type SandboxPageProps = {};

const SandboxPage: FC<SandboxPageProps> = () => {
  const { isMobile } = useContext(MediaQueryContext);
  return (
    <>
      <Head>
        <title>お砂場 - MCC</title>
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

      {isMobile ? <NavbarMobile /> : <NavbarPC />}
    </>
  );
};

export default SandboxPage;
