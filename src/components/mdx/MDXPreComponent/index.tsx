'use client';

import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import { CopyIcon } from '~/components/Svg/CopyIcon';

export type MDXPreComponentProps = ComponentPropsWithoutRef<'pre'>;

// コードブロックは, <div> で囲まれており、その中に <pre> があるので
// このコンポーネントでは十分なスタイルを当てることができない
// そのため、このコンポーネントのスタイルは、<Article> で定義している
export const MDXPreComponent: FC<ComponentPropsWithoutRef<'pre'>> = ({
  children,
  ...props
}) => {
  const [buttonInner, setButtonInner] = useState<ReactNode>(<CopyIcon />);
  const ref = useRef<HTMLPreElement>(null);

  const copyCode = useCallback(() => {
    navigator.clipboard.writeText(ref.current?.innerText || '');
    setButtonInner('Copied!');
    const timeout = setTimeout(() => setButtonInner(<CopyIcon />), 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <pre ref={ref} {...props}>
        {children}
        <button type="button" onClick={copyCode} aria-label="copy">
          {buttonInner}
        </button>
      </pre>
    </>
  );
};