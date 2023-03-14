import Image from 'next/image';

import { Carousel, CarouselProps } from '.';

import type { Story } from '@ladle/react';

const args: CarouselProps = {
	components: [<Image key={'a'} src="/abstract-tech-image-5.webp" alt="" />, 'Slide 2', 'Slide 3'],
	height: '500px',
};

export const CarouselStory: Story = () => <Carousel {...args} />;
