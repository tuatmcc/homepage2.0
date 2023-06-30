'use client';

import { FC } from 'react';

import styles from './styles.module.css';

type NavbarMenuButtonProps = {
  isExpanded: boolean;
  onClick?: () => void;
  color?: string;
};

export const NavbarMenuButton: FC<NavbarMenuButtonProps> = ({
  isExpanded,
  onClick,
  color,
}) => {
  return (
    <button
      className={styles.button}
      aria-label="Menu Button"
      aria-expanded={isExpanded}
      onClick={onClick}
    >
      <svg
        className={styles.svg}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke={color ? color : '#ffffff'}
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path1}
        />
        <path
          d="M4 12L20 12"
          stroke={color ? color : '#ffffff'}
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path2}
        />
        <path
          d="M4 6L20 6"
          stroke={color ? color : '#ffffff'}
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path3}
        />
      </svg>
    </button>
  );
};
