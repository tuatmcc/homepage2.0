import { FC } from 'react';

import styles from './style.module.css';

import { AutoLink } from '~/components/common/AutoLink';
import { Del } from '~/components/common/Del';
import { Footer } from '~/components/common/Footer';
import { Helmet }  from '~/components/common/Helmet';
import { Navbar } from '~/components/common/Navbar';
import classNames from '~/utils/classNames';

const meta = {
  title: 'About',
  description: 'About of TUATMCC',
  img: '/mcc-logo.svg',
};

const AboutPage: FC = () => {
  return (
  <>
    <Helmet meta={meta} />
    <Navbar theme='auto' />
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <div className={styles.headerText}>
            <h1 className={styles.pageTitle}>What is MCC?</h1>
            <h2 className={styles.pageSubTitle}>
                {'MCCについて'.split('').map((x, i) => (
                  <span key={x+i} className={classNames(styles.anim)} style={{ animationDelay: `${0.8 + i* 0.1}s` }}>{x}</span>
                  ))}
            </h2>
          </div>
        </div>
      </div>
    </header>

    <main>
      <div className={styles.about}>
        <h2>MCCとは</h2>
        <div className={styles.brief}>
          <p>
          東京農工大学マイクロコンピュータクラブ(TUATMCC)の愛称。
          </p>
          <p>
          IT系の、大学公認サークルです。
          </p>
          </div>
        <h2>活動内容</h2>
        <p className={styles.description}>
          定期的に行われるミーティングを通して、部員それぞれの情報機器使用・プログラミング能力などを向上させ、
          その活動を元に学園祭での
          <span className={styles.em}>作品展示・部内講習会</span>
          の実施といった活動を行なっています。
          競技プログラミング部門では、プログラミングコンテストへの参加を主体に活動しています。
        </p>
        <p>
          <Del>昨年度から部室に GPU 搭載のデスクトップ PC を設置し、新たな製作物への挑戦も可能になりました。</Del>
        </p>
        <h2>活動場所</h2>
        <p>工学部小金井キャンパス・サークル棟</p>
        <h2>部員募集</h2>
        <div>

        <p className={styles.description}>
        MCC では新入部員を随時募集してます。 お問合せ、入部希望者は以下からご連絡ください。
        </p>
        <ul>
          <li>TwitterDM: <AutoLink href="https://twitter.com/tuatmcc" >@tuatmcc</AutoLink></li>
        </ul>
        </div>
        </div>
    </main>
    <Footer />
  </>
  );
};

export default AboutPage;
