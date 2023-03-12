import { Carousel, CarouselProps } from '.';

import type { Story } from '@ladle/react';

const args: CarouselProps = {
	components: [<div key={1}>Slide 1</div>, <div key={2}>Slide 2</div>, <div key={3}>Slide 3</div>],
};

export const CarouselStory: Story = () => <Carousel {...args} />;
