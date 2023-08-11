import { Meta, StoryObj } from '@storybook/react';

import { NewsList } from './index';

const meta: Meta = {
  title: 'Components/NewsList',
  component: NewsList,
};

export default meta;

export const Default: StoryObj<typeof NewsList> = {
  args: {
    unorderedNews: [
      {
        image: 'https://placehold.jp/320x180.png',
        title: 'ICPC2023国内予選に参加しました',
        date: '2021/10/10',
        tags: ['ICPC', '競プロ'],
      },
      {
        image: 'https://placehold.jp/320x180.png',
        title: 'ICPC2023国内予選に参加しましたたたたたたった長いタイトル',
        date: '2021/13/12',
      },
    ],
  },
};
