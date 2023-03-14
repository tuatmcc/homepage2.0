import React, { FC, ComponentPropsWithoutRef } from 'react';

const UnoptimizedImage: FC<ComponentPropsWithoutRef<'img'>> = (props) => <img {...props} />;

export default UnoptimizedImage;
