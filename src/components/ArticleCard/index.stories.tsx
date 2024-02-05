import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from '.';

const meta: Meta = {
  title: 'Components/ArticleCard',
  component: ArticleCard,
};

export const Default: StoryObj<typeof ArticleCard> = {
  args: {
    title: 'Article Title',
    image: 'https://placehold.jp/320x180.png',
    date: '2021-01-01',
    href: '#',
    tags: ['tag1', 'tag2'],
    author: 'Author Name',
  },
};

export default meta;
