import Image from 'next/image';
import { FC } from 'react';

import styles from './style.module.css';

import {BackToTop} from '~/components/BackToTop';
import { Navbar } from '~/components/Navbar';
import {TwitterTimeline} from '~/components/TwitterTimeLine';
import { BasicImage } from '~/components/ui/BasicImage';
import {BasicLink} from '~/components/ui/BasicLink';
import { Footer } from '~/components/ui/Footer';
import {TwitterIcon} from '~/components/ui/Svg';
import {DiscordIcon} from '~/components/ui/Svg/DiscordIcon';

const AboutPage: FC = () => {
  return (
  <>
    <Navbar theme="auto"/>
    <div className={styles.background} />
    <header className={styles.header}>
      <div className={styles.headerContent}>
            <h1 className={styles.pageTitle}>What is MCC?</h1>
            <h2 className={styles.pageSubTitle}>
              MCCについて
            </h2>
          </div>
    </header>

    <main className={styles.main}>
      <div className={styles.mainContent}>

        <section>
          <h2>MCCとは</h2>
            <p className={styles.p}>
              東京農工大学の公認サークル「マイクロコンピュータクラブ」の頭文字から来ており、
            ITに関する活動を行うサークルです。
            </p>
            <p className={styles.p}>
              マイクロコンピューターという名前がついていますが、マイコンを使った活動を主にしているわけではなく、
              一般的なPCを使った活動全般を行っています。
            </p>
        </section>

        <section>
          <h2>活動内容</h2>
          <p className={styles.p}>
            定期的に行われるミーティングを通して、部員それぞれの情報機器使用・プログラミング能力などを向上させ、
            その活動を元に<span className={styles.em}><b>学園祭での作品展示・部内講習会</b></span>
            の実施といった活動を行なっています。
            競技プログラミング部門では、<span className={styles.em}><b>プログラミングコンテストへの参加</b></span>を主体に活動しています。
          </p>
        </section>

        <section>
        <h2>活動場所</h2>
        <p className={styles.p}>工学部小金井キャンパス・サークルB棟2階　MCC部室</p>
        <div className={styles.imageContainer}>
          <BasicImage className={styles.image} src="/images/campas-map.webp" alt="campas map" width={900} height={1200} />
          <BasicImage className={styles.image} src="/images/club-building-b.webp" alt="campas map" width={900} height={1200} />
        </div>
        </section>

        <section>
        <h2>部員募集</h2>
        <p className={styles.p}>
        MCC では新入部員を随時募集してます。 お問合せ、入部希望者は以下よりご連絡ください。
        </p>
           <BasicLink href="https://twitter.com/messages/compose?recipient_id=227598819&text=はじめまして！○科に所属の○年です！MCCに入部したいです！"
            className={styles.twitterDmButton}
            data-screen-name="@TUATMCC"
            data-size="large">
              <TwitterIcon color="#1DA1F2" size={24} />
            MCC
          </BasicLink>
          <BasicLink href="https://twitter.com/messages/compose?recipient_id=1449066255776825344&text=はじめまして！○科に所属の○年です！MCCに入部したいです！"
            className={styles.twitterDmButton}
            data-screen-name="@TUATKYOPRO"
            data-size="large">
              <TwitterIcon color="#1DA1F2" size={24} />
              Kyopro
          </BasicLink>
          <BasicLink href="https://discord.gg/mrEsx3w27E" className={styles.discordButton}>
              <DiscordIcon size={24} />
            Discord
          </BasicLink>
        </section>

        <section>
          <h2>活動の様子</h2>
        <div className={styles.gallery}>
          <Image className={styles.galleryItem} src="/images/wordmark-logo-image.png" alt="MCC" width={300} height={300} />
          <Image className={styles.galleryItem} src="/images/noko-fes-2022-illustrace.webp" alt="MCC" width={300} height={300} />
          <Image className={styles.galleryItem} src="/images/noko-fes-2022-room.webp" alt="MCC" width={300} height={300} />
        </div>
        </section>

        <section>
          <h2 className={styles.heading2}>Twitter</h2>
          <div className={styles.twitterFeed}>
          <TwitterTimeline />
          </div>
        </section>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </>
  );
};

export default AboutPage;
