import type { Meta, StoryObj } from '@storybook/react';

import { MenuButton } from './index';

const meta: Meta = {
  component: MenuButton,
};

export default meta;

export const Drawer: StoryObj<typeof MenuButton> = {
  args: {
    isExpanded: false,
  },
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
