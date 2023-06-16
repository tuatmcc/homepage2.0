import NextLink from 'next/link';
import { FC, ReactNode } from 'react';

import styles from './styles.module.css';

import { MiniLinkIcon } from '~/components/ui/Svg';

export type MDLinkComponentProps = {
  children: ReactNode;
  href: string;
};

export const MDLinkComponent: FC<MDLinkComponentProps> = ({
  children,
  href,
}) => {
  if (href.startsWith('#')) {
    return (
      <a href={href} className={styles.linkedHeading} aria-label="link heading">
        <MiniLinkIcon />
      </a>
    );
  } else if (href.startsWith('/')) {
    return <NextLink href={href}>{children}</NextLink>;
  } else {
    return (
      <a href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};
