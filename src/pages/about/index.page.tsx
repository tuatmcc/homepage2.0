import { FC } from 'react';

import Page from '~/components/common/Page/Page';

const meta = {
  title: 'About',
  description: 'About of TUATMCC',
};

const AboutPage: FC = () => {
  return (
    <Page meta={meta}>
      <h1>MCCについて</h1>
      <p>東京農工大学公認サークルの、マイクロコンピュータクラブです。</p>
    </Page>
  );
};

export default AboutPage;
