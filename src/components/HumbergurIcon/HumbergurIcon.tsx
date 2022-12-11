import { FC } from 'react';

import styles from './style.module.scss';

export type HumbergurIconProps = {
  isActive?: boolean;
  as?: 'button' | 'span';
  onClick?: () => void;
  className?: string;
};

const HumbergurIcon: FC<HumbergurIconProps> = ({ isActive = false, as = 'span', onClick, className = '' }) => {
  const content = (
    <>
      <span className={styles.lineTop} />
      <span className={styles.lineMiddle} />
      <span className={styles.lineBottom} />
    </>
  );
  switch (as) {
    case 'button': {
      return (
        <button className={`${styles.humbergurIcon} ${isActive ? styles._active : ''} ${className}}`} onClick={onClick}>
          {content}
        </button>
      );
    }
    default: {
      return (
        <span className={`${styles.humbergurIcon} ${isActive ? styles._active : ''} ${className}}`} onClick={onClick}>
          {content}
        </span>
      );
    }
  }
};

export default HumbergurIcon;
