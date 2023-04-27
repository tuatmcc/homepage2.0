import { FC } from 'react';

import { Sections } from './Sections';
import styles from './style.module.css';

import { BackToTop } from '~/components/BackToTop';
import { Navbar } from '~/components/Navbar';
import { TwitterTimeline } from '~/components/TwitterTimeLine';
import { BasicImage } from '~/components/ui/BasicImage';
import { Footer } from '~/components/ui/Footer';

const AboutPage: FC = () => {
  return (
    <>
      <Navbar theme="auto" />
      <BasicImage src="/images/tuat-gate-filtered.webp" alt="" width={1920} height={1260} className={styles.background} />
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

          <Sections />

          <section className={styles.section}>
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
