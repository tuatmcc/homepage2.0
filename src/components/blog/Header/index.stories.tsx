import { Meta, Story } from '@ladle/react';

import { BlogHeader } from './index';

export default {
	title: 'Components/Header',
	component: BlogHeader,
} as Meta;

export const Default: Story = () => <BlogHeader />;
