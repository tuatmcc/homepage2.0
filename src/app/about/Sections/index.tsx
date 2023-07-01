import NextImage from 'next/image';
import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

import { TwitterIcon } from '~/components/Svg';

const sections: { heading: string; node: ReactNode }[] = [
  {
    heading: 'MCCとは',
    node: (
      <>
        <p className={styles.para}>
          マイクロコンピュータークラブの略称で、IT系の活動全般をしている東京農工大学の公認サークルです。
        </p>
      </>
    ),
  },
  {
    heading: '活動内容',
    node: (
      <>
        <p className={styles.para}>
          定期的に行われるミーティングを通して、部員それぞれの情報機器使用・プログラミング能力などを向上させ、
          その活動を元に
          <span className={styles.em}>
            <b>学園祭へ向けて作品制作・展示</b>
          </span>
          や
          <span className={styles.em}>
            <b>部内講習会</b>
          </span>
          、
          <span className={styles.em}>
            <b>LT会</b>
          </span>
          、 の実施といった活動を行なっています。 競技プログラミング部門では、
          <span className={styles.em}>
            <b>プログラミングコンテストへの参加</b>
          </span>
          を主体に活動しています。
        </p>
      </>
    ),
  },
  {
    heading: '活動場所',
    node: (
      <>
        <p className={styles.para}>
          工学部小金井キャンパス・サークルB棟2階　MCC部室
        </p>
        <div className={styles.imageContainer}>
          <NextImage
            className={styles.image}
            src="/images/campas-map.webp"
            alt="campas map"
            width={900}
            height={1200}
          />
          <NextImage
            className={styles.image}
            src="/images/club-building-b.webp"
            alt="campas map"
            width={900}
            height={1200}
          />
        </div>
      </>
    ),
  },
  {
    heading: '活動の様子',
    node: (
      <>
        <div className={styles.gallery}>
          <NextImage
            className={styles.galleryItem}
            src="/images/spring-camp-2022-hackathon.webp"
            alt="MCC"
            width={300}
            height={300}
          />
          <NextImage
            className={styles.galleryItem}
            src="/images/noko-fes-2022-illustrace.webp"
            alt="MCC"
            width={300}
            height={300}
          />
          <NextImage
            className={styles.galleryItem}
            src="/images/noko-fes-2022-room.webp"
            alt="MCC"
            width={300}
            height={300}
          />
        </div>
      </>
    ),
  },
  {
    heading: '募集情報',
    node: (
      <>
        <p className={styles.para}>
          MCC では新入部員を随時募集してます。
          お問合せ、入部希望者は以下よりご連絡ください。
        </p>
        <a
          href="https://twitter.com/messages/compose?recipient_id=227598819&text=はじめまして！○科○年です！MCCに興味があるのですが！"
          className={styles.twitterDmButton}
          data-screen-name="@TUATMCC"
          data-size="large"
          rel="noopener noreferrer"
        >
          <TwitterIcon color="#1DA1F2" size={24} />
          Twitter DM
        </a>
      </>
    ),
  },
];

export const Sections: FC = () => (
  <div className={styles.sections}>
    {sections.map((section) => (
      <section className={styles.section} key={section.heading}>
        <h2 className={styles.h2}>{section.heading}</h2>
        <a href={`#${section.heading}`} className={styles.anchor} />
        {section.node}
      </section>
    ))}
  </div>
);
