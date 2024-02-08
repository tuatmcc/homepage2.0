'use client';

import NextImage, { type ImageProps } from 'next/image';
import type { FC } from 'react';

type NextImageWithFallbackProps = ImageProps & {
  fallback: string;
};

export const NextImageWithFallback: FC<NextImageWithFallbackProps> = ({
  ...props
}) => {
  return (
    <NextImage
      {...props}
      onError={(e) => {
        e.currentTarget.src = props.fallback;
      }}
    />
  );
};
