import { FC } from 'react';

import styles from './style.module.css';

import Page from '~/components/common/Page/Page';
import Art from '~/components/home/Art/Art';

// 超絶簡易なランディングページ
const LandingPage: FC = () => {
  return (
    <>
      <Page
        meta={{
          title: 'Home',
          description: '東京農工大学公認サークルMCC(マイクロコンピュータクラブ)のホームページです',
        }}
      >
        <div className={styles.landingPage}>
          <h1 className={styles.landingPage__text__title} hidden>
            MCC
          </h1>
          <div className={styles.art}>
            <Art />
          </div>
        </div>
      </Page>
    </>
  );
};

export default LandingPage;
