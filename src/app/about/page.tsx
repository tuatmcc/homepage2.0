import Image from 'next/image';
import { FC } from 'react';

import styles from './style.module.css';

import { Navbar } from '~/components/Navbar';
import { Footer } from '~/components/ui/Footer';
import { TextLink } from '~/components/ui/TextLink';
import { classNames } from '~/utils/classNames';

const AboutPage: FC = () => {
  return (
  <>
    <Navbar theme="auto"/>
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>What is MCC?</h1>
            <h2 className={styles.pageSubTitle}>
                MCCについて
            </h2>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div className={styles.mainContainer}>
        <section>
          <div className={styles.introductionText}>
          <h2>MCCとは</h2>
          <div className={styles.brief}>
            <p>
            東京農工大学の公認サークル「マイクロコンピュータクラブ」の頭文字から来ています。
            IT系の活動をしているサークルです。
            </p>
          </div>
          <h2>活動内容</h2>
          <p className={styles.activities}>
          定期的に行われるミーティングを通して、部員それぞれの情報機器使用・プログラミング能力などを向上させ、
          その活動を元に<span className={styles.em}><b>学園祭での作品展示・部内講習会</b></span>
          の実施といった活動を行なっています。
          競技プログラミング部門では、<span className={styles.em}><b>プログラミングコンテストへの参加</b></span>を主体に活動しています。
          </p>
          </div>
        </section>

        <h2>活動場所</h2>
        <p>工学部小金井キャンパス・サークル棟</p>
        <h2>部員募集</h2>
        <div>
        </div>

        <p className={styles.description}>
        MCC では新入部員を随時募集してます。 お問合せ、入部希望者は以下からご連絡ください。
        </p>
        <ul>
          <li>TwitterDM: <TextLink href="https://twitter.com/tuatmcc" >@tuatmcc</TextLink></li>
        </ul>
        <div className={styles.gallery}>
          <Image className={styles.galleryItem} src="/images/wordmark-logo-image.png" alt="MCC" width={300} height={300} />
          <Image className={styles.galleryItem} src="/images/noko-fes-2022-illustrace.webp" alt="MCC" width={300} height={300} />
          <Image className={styles.galleryItem} src="/images/noko-fes-2022-room.webp" alt="MCC" width={300} height={300} />
        </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
