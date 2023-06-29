import { FC } from 'react';

import styles from './styles.module.css';

export const NavbarMenuButton: FC = () => {
  return (
    <button className={styles.button}>
      <svg viewBox="0 0 100 100" className={styles.svg}>
        <path d="M 20,30 L 80,30" className={styles.line} />
        <path d="M 20,50 L 80,50" className={styles.line} />
        <path d="M 20,70 L 80,70" className={styles.line} />
      </svg>
    </button>
  );
};
