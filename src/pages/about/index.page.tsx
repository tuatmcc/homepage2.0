import { FC } from 'react';

import { Del } from '~/components/common/Del';
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
      <h2>活動内容</h2>
      <p>
      定期的に行われるミーティングを通して、部員それぞれの情報機器使用・プログラミング能力などを向上させ、その活動を元に学園祭での作品展示・部内講習会の実施といった活動を行なっているサークルです。
      <br />
      競技プログラミング部門では、プログラミングコンテストへの参加を主体に活動しています。
      <br />
      <Del>昨年度から部室に GPU 搭載のデスクトップ PC を設置し、新たな製作物への挑戦も可能になりました。</Del>
        <br />
        部員たちの興味は様々であり、ACM-ICPCという競技プログラミングに出場することを目標に、プログラミングの練習をすることもあれば、CTF (Capture The Flag) と呼ばれるセキュリティコンテストに出場することを目標に講習会などを開いて勉強をしていることもあります。
        <br />
        ACM-ICPCについては、国内予選で5位という優秀な成績を残しアジア地区大会に進出したり、CTFについては国内大会で優秀な成果を残したりしています。ここ最近の部員による成果は目覚ましいものがあります。
        <br />
        普段の活動の中心は、コンピュータを核とした部員同士の交流と情報交換です。
      </p>
    </Layout>
  </>
  );
};

export default AboutPage;
