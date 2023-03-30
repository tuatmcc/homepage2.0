import React, { ComponentPropsWithoutRef, FC } from 'react';

const UnoptimizedImage: FC<ComponentPropsWithoutRef<'img'> & { alt: string; src: string }> = ({
	src,
	alt,
	...props
}) => <img src={src} alt={alt} {...props} />;

export default UnoptimizedImage;
