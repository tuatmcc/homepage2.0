import { Meta, StoryObj } from '@storybook/react';

import { BlogList } from './index';

const meta: Meta = {
  title: 'Components/news/BlogList',
  component: BlogList,
};

export default meta;

const args = {
  unorderedBlogs: [
    {
      image: 'https://placehold.jp/320x180.png',
      title: 'sample blog title',
      date: '2021/10/10',
      tags: ['ICPC', '競プロ'],
      author: 'author',
    },
    {
      image: 'https://placehold.jp/320x180.png',
      title: 'ICPC2023国内予選に参加しましたたたたたたった長いタイトル',
      date: '2021/13/12',
    },
  ],
};

export const Default: StoryObj<typeof BlogList> = {
  args,
};

export const Xs: StoryObj<typeof BlogList> = {
  args,
  parameters: {
    viewport: {
      defaultViewport: 'xs',
    },
  },
};
