'use client';

import { ComponentPropsWithoutRef, FC, useEffect } from 'react';

export type MDXScriptComponentProps = ComponentPropsWithoutRef<'script'> & {
  children?: string;
};

export const MDXScriptComponent: FC<MDXScriptComponentProps> = ({
  src,
  children,
  async = false,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = src || children || '';
    script.async = async;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [src, children, async]);

  return <></>;
};
