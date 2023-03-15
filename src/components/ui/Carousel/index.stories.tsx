import { Carousel, CarouselProps } from '.';

import type { Story } from '@ladle/react';

const args: CarouselProps = {
	components: [
		<div key="a" style={{ backgroundColor: '#f00', height: '100%' }}>
			Slide 1
		</div>,
		<div key="b" style={{ backgroundColor: '#00f', height: '100%' }}>
			Slide 2
		</div>,
		<div key="c" style={{ backgroundColor: '#0f0', height: '100%' }}>
			Slide 3
		</div>,
	],
};

export const CarouselStory: Story = () => <Carousel {...args} />;
