import { FC } from 'react';

import { Helmet }  from '~/components/common/Helmet';
import { Layout } from '~/components/common/Layout';

const meta = {
  title: 'About',
  description: 'About of TUATMCC',
};

const AboutPage: FC = () => {
  return (
  <>
    <Helmet meta={meta} />
    <Layout>
      <h1>MCCについて</h1>
      <p>東京農工大学公認サークルの、マイクロコンピュータクラブです。</p>
    </Layout>
  </>
  );
};

export default AboutPage;
