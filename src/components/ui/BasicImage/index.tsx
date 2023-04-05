'use client';

import NextImage from 'next/image';
import { ComponentProps, SyntheticEvent, useState } from 'react';

export type BasicImageProps = ComponentProps<typeof NextImage> & {
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
export const BasicImage = ({ fallback, style, loading, ...props }: BasicImageProps) => {
	const onError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
		if (fallback === true) {
			e.currentTarget.src = defaultFallback;
		} else if (fallback) {
			e.currentTarget.src = fallback;
		}
	};
	const [opacity, setOpacity] = useState('0');
	return (
		<NextImage
			onError={onError}
			onLoad={() => setOpacity('1')}
			style={{
				opacity,
				transition: 'opacity 0.2s',
				...style,
			}}
			loading={loading ?? 'lazy'}
			{...props}
		/>
	);
};
