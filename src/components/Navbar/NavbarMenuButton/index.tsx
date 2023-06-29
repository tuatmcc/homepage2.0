import { FC } from 'react';

import styles from './styles.module.css';

export const NavbarMenuButton: FC = () => {
  return (
    <button className={styles.button}>
      <svg
        className={styles.svg}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 18L20 18"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path1}
        />
        <path
          d="M4 12L12 12"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path2}
        />
        <path
          d="M12 12L20 12"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path3}
        />
        <path
          d="M4 6L20 6"
          stroke="#ffffff"
          stroke-width="2"
          stroke-linecap="round"
          className={styles.path4}
        />
      </svg>
    </button>
  );
};
