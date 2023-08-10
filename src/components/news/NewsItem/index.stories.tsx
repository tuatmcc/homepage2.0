import { Meta, StoryObj } from '@storybook/react';

import { NewsItem } from './index';

const meta: Meta = {
  title: 'Components/NewsItem',
  component: NewsItem,
};

export default meta;

export const Default: StoryObj<typeof NewsItem> = {
  args: {
    image: 'https://placehold.jp/320x180.png',
    title: 'ICPC2023国内予選に参加しました',
    date: '2021/10/10',
    tags: ['ICPC', '競プロ'],
  },
};
