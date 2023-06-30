import { Meta, StoryObj } from '@storybook/react';

import { NavbarMenuButton } from '.';

const meta: Meta = {
  component: NavbarMenuButton,
};

export default meta;

export const Normal: StoryObj<typeof NavbarMenuButton> = {
  args: {
    isExpanded: false,
  },
};
