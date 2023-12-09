'use client';

import { FC } from 'react';

import styles from './styles.module.css';

type MenuButtonProps = {
  isExpanded: boolean;
  onClick?: () => void;
  color?: string;
  shadow?: boolean;
};

export const MenuButton: FC<MenuButtonProps> = ({
  isExpanded,
  onClick,
  color,
  shadow,
}) => {
  return (
    <button
      type="button"
      className={styles.button}
      aria-label="Menu Button"
      aria-expanded={isExpanded}
      onClick={onClick}
      data-shadow={shadow}
    >
      <svg
        className={styles.svg}
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path
          d="M4 18L20 18"
          stroke={color ? color : '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          className={styles.path1}
        />
        <path
          d="M4 12L20 12"
          stroke={color ? color : '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          className={styles.path2}
        />
        <path
          d="M4 6L20 6"
          stroke={color ? color : '#ffffff'}
          strokeWidth="2"
          strokeLinecap="round"
          className={styles.path3}
        />
      </svg>
    </button>
  );
};
