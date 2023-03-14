import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';

import styles from './style.module.css';

import { SEO }  from '~/features/SEO';
import {Carousel} from '~/features/ui/Carousel';
import {  TextLink } from '~/features/ui/Elements';
import { Footer } from '~/features/ui/Footer';
import { Navbar } from '~/features/ui/Navbar';
import { PageTransition } from '~/features/ui/PageTransition';
import { MetaData } from '~/types/meta';
import classNames from '~/utils/classNames';

const meta: MetaData = {
  title: 'About Us',
  description: 'About MCC',
  img: '/mcc-logo.svg',
};

const AboutPage: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
      const timeout = setTimeout(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
  <>
    <SEO meta={meta} />
    <Navbar />
    <PageTransition>

    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>What is MCC?</h1>
            <h2 className={styles.pageSubTitle}>
                {'MCCについて'.split('').map((x, i) => (
                  <span key={x+i} className={classNames(styles.anim)} style={{ animationDelay: `${0.6 + i* 0.1}s` }}>{x}</span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div className={styles.mainContainer}>
        <section>
        <div className={styles.mainSection} ref={ref}>
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
        <div className={styles.carousel}>
          <Carousel components={[
            <div key="a" className={styles.carouselItem}>
              <Image src="/abstract-tech-image-4.webp" alt="MCC" width={300} height={300} />
            </div>,
            <div key="b" className={styles.carouselItem}>
              <Image src="/abstract-tech-image-5.webp" alt="MCC" width={300} height={300} />
            </div>,
            <div key="c" className={styles.carouselItem}>
              <Image src="/abstract-tech-image-6.webp" alt="MCC" width={300} height={300} />
            </div>,
          ]} />
        </div>
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
        </div>
      </main>
      <Footer />
      </PageTransition>
    </>
  );
};

export default AboutPage;
