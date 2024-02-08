import type { FC } from 'react';

import type { IconProps } from './types';

export const DownArrowIcon: FC<IconProps> = ({ ...props }) => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Down Arrow</title>
    <path d="M8 42L32 64L55 42L51 38L36 52V0H28V52L12 38L8 42Z" fill="white" />
  </svg>
);
