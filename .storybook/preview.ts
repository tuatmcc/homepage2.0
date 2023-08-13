import type { Preview } from '@storybook/react';

import '~/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
    viewport: {
      viewports: {
        xs: {
          name: 'xs',
          styles: {
            width: '500px',
            height: '500px',
          },
        },
        sm: {
          name: 'sm',
          styles: {
            width: '768px',
            height: '768px',
          },
        },
      },
    },
  },
};

export default preview;
