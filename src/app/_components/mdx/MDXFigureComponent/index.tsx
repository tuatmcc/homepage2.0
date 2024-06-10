'use client';

import {
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import CopyIcon from '/public/icons/copy.svg';
import styles from './styles.module.css';

type MDXFigureComponentProps = ComponentPropsWithoutRef<'figure'>;

export const MDXFigureComponent: FC<MDXFigureComponentProps> = ({
  children,
  ...props
}) => {
  const [buttonInner, setButtonInner] = useState<ReactNode>(
    <CopyIcon width={24} height={24} />,
  );
  const ref = useRef<HTMLElement>(null);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(ref.current?.innerText || '');
    setButtonInner('Copied!');
    const timeout = setTimeout(
      () => setButtonInner(<CopyIcon width={24} height={24} />),
      1000,
    );

    return () => clearTimeout(timeout);
  }, []);

  return Object.hasOwn(props, 'data-rehype-pretty-code-figure') ? (
    <figure {...props} className={styles.codeFigure}>
      {children}
      <button
        type="button"
        className={styles.copyButton}
        onClick={copyCode}
        aria-label="copy"
      >
        {buttonInner}
      </button>
    </figure>
  ) : (
    <figure {...props}>{children}</figure>
  );
};
