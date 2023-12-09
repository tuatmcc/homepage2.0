import { FC } from 'react';

import { IconProps } from './types';

export const MenuBurgerIcon: FC<IconProps> = ({ ...props }) => (
  <svg
    width="32"
    height="33"
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>Menu Burger</title>
    <g clipPath="url(#clip0_14_10)">
      <path
        d="M30.6667 15.1667H1.33333C0.596954 15.1667 0 15.7636 0 16.5C0 17.2364 0.596954 17.8333 1.33333 17.8333H30.6667C31.403 17.8333 32 17.2364 32 16.5C32 15.7636 31.403 15.1667 30.6667 15.1667Z"
        fill="#3A6973"
      />
      <path
        d="M30.6667 5.83334H1.33333C0.596954 5.83334 0 6.4303 0 7.16668C0 7.90306 0.596954 8.50001 1.33333 8.50001H30.6667C31.403 8.50001 32 7.90306 32 7.16668C32 6.4303 31.403 5.83334 30.6667 5.83334Z"
        fill="#3A6973"
      />
      <path
        d="M30.6667 24.5H1.33333C0.596954 24.5 0 25.097 0 25.8333C0 26.5697 0.596954 27.1667 1.33333 27.1667H30.6667C31.403 27.1667 32 26.5697 32 25.8333C32 25.097 31.403 24.5 30.6667 24.5Z"
        fill="#3A6973"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_10">
        <rect
          width="32"
          height="32"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);
