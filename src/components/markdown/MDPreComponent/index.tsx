'use client';

import {
  ComponentPropsWithoutRef,
  FC,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import { CopyIcon } from '~/components/ui/Svg/CopyIcon';

export type MDPreComponentProps = ComponentPropsWithoutRef<'pre'>;

export const MDPreComponent: FC<ComponentPropsWithoutRef<'pre'>> = ({
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
