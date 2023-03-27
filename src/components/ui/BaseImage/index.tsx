'use client';

import NextImage from 'next/image';
import { ComponentProps } from 'react';

export type BaseImageProps = ComponentProps<typeof NextImage> & {
	fallback?: string | true;
};

const defaultFallback = '/images/wordmark-logo-image.png';

/**
 * A wrapper around Next.js' Image component that adds a fallback image.
 * @param fallback The fallback image to use. If true, the default fallback image will be used.
 * @param props The rest of the props to pass to the Image component.
 * @returns The Image component.
 * @example
 * <Image src="/images/wordmark.svg" width={100} height={100} />
 * <Image src="/images/wordmark.svg" width={100} height={100} fallback="https://via.placeholder.com/100" />
 * <Image src="/images/wordmark.svg" width={100} height={100} fallback />
 */
export const BaseImage = ({ fallback, ...props }: BaseImageProps) => {
	if (fallback === true) {
		return <NextImage onError={(e) => (e.currentTarget.src = defaultFallback)} {...props} />;
	} else if (fallback) {
		return <NextImage onError={(e) => (e.currentTarget.src = fallback)} {...props} />;
	} else {
		return <NextImage {...props} />;
	}
};
