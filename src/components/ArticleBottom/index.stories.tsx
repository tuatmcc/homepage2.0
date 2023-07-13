import { Meta, StoryObj } from '@storybook/react';

import { ArticleBottom } from './index';

const meta: Meta = {
  component: ArticleBottom,
};

export default meta;

export const Default: StoryObj<typeof ArticleBottom> = {
  args: {
    parent: {
      href: '/',
      children: 'hello',
    },
  },
};
