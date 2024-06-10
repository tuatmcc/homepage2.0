'use client';

import { type ComponentPropsWithoutRef, type FC, useEffect } from 'react';

type MDXScriptComponentProps = ComponentPropsWithoutRef<'script'> & {
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
