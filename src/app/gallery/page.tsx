import { Metadata } from 'next';
import Link from 'next/link';
import { FC } from 'react';

import styles from './styles.module.css';

import { Footer } from '~/components/Footer';
import { Navbar } from '~/components/Navbar';
import { metadataBase } from '~/lib/sharedmetadata';

export const metadata: Metadata = {
  metadataBase: metadataBase,
  title: 'Gallery',
  description: 'Gallery - where you can see our prototypes and designs',
};

const GalleryPage: FC = () => {
  const paths = ['/gallery/framer-parallax'];

  return (
    <>
      <Navbar />
      <div className={styles.background} />
      <header>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Gallery</h1>
          <h2 className={styles.headerSubTitle}>デザイン・試作置き場</h2>
        </div>
      </header>

      <main>
        <div className={styles.mainContent}>
          <ul className={styles.list}>
            {paths.map((path) => (
              <li key={path} className={styles.listItem}>
                <Link href={path} className={styles.link}>
                  {path}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer semitransparent />
    </>
  );
};

export default GalleryPage;
