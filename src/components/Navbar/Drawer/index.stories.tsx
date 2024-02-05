import { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './index';

export default {
  component: Drawer,
} satisfies Meta;

export const Default: StoryObj<typeof Drawer> = {
  args: {
    isOpen: true,
  },
};
