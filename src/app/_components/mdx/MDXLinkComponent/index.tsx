import NextLink from 'next/link';
import type { ComponentPropsWithoutRef, FC, ReactNode } from 'react';

import styles from './styles.module.css';

import LinkIcon from '/public/icons/link.svg';

type MDXLinkComponentProps = ComponentPropsWithoutRef<'a'> & {
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
        <LinkIcon />
      </a>
    );
  }
  if (href.startsWith('/')) {
    return <NextLink href={href}>{children}</NextLink>;
  }
  return (
    <a {...props} href={href} rel="noopener noreferrer">
      {children}
    </a>
  );
};
