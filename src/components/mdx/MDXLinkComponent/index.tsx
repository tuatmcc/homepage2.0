import NextLink from 'next/link';
import { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import styles from './styles.module.css';

import { MiniLinkIcon } from '~/components/Svg';

export type MDXLinkComponentProps = ComponentPropsWithoutRef<'a'> & {
  children: ReactNode;
  href: string;
};

export const MDXLinkComponent: FC<MDXLinkComponentProps> = ({
  children,
  href,
  ...props
}) => {
  if (href.startsWith('#') && props['aria-label'] === 'heading-link') {
    return (
      <a {...props} href={href} className={styles.linkedHeading}>
        <MiniLinkIcon />
      </a>
    );
  } else if (href.startsWith('/')) {
    return <NextLink href={href}>{children}</NextLink>;
  } else {
    return (
      <a {...props} href={href} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};
