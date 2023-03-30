'use client';

import NextImage from 'next/image';
import { ComponentProps } from 'react';

export type BasicImageProps = ComponentProps<typeof NextImage> & {
	fallback?: string | true;
	fadeIn?: string | true;
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
export const BasicImage = ({ fallback, fadeIn, ...props }: BasicImageProps) => {
	const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		if (fallback === true) {
			e.currentTarget.src = defaultFallback;
		} else if (fallback) {
			e.currentTarget.src = fallback;
		}
	};
	const onLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
		e.currentTarget.style.opacity = '1';
	};
	const style = {
		opacity: '0',
		transition: 'opacity 0.3s ease-in-out',
		...(props.style || {}),
	};
	if (fallback || fadeIn) {
		return <NextImage onError={onError} onLoad={onLoad} style={style} {...props} />;
	} else {
		return <NextImage {...props} />;
	}
};
