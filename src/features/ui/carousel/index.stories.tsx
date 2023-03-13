import { Carousel, CarouselProps } from '.';

import type { Story } from '@ladle/react';

const args: CarouselProps = {
	components: ['Slide 1', 'Slide 2', 'Slide 3'],
};

export const CarouselStory: Story = () => <Carousel {...args} />;
