import type { Meta, StoryObj } from '@storybook/react';

import { Navbar } from './index';

const meta: Meta = {
  component: Navbar,
};

export default meta;

export const Default: StoryObj<typeof Navbar> = {
  args: {
    theme: 'opaque',
  },
};
