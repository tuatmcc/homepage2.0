'use client';

import { type FC, useEffect, useState } from 'react';

import styles from './styles.module.css';

export const BackToTop: FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollY } = window;
      if (scrollY > window.innerHeight / 2) {
        setIsHidden(false);
      } else {
        setIsHidden(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  return (
    <button
      type="button"
      className={styles.backToTop}
      onClick={() =>
        window.document.body.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        })
      }
      aria-hidden={isHidden}
    >
      <svg
        width="44"
        height="44"
        viewBox="-8 -8 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Back to Top</title>
        <path
          d="M12 4L12.01 20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 12L12 4L20 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
