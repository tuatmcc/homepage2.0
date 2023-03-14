// This is the config file for @ladle/react to work with postcss-nesting
import { defineConfig } from 'vite';
import path from 'path';
import postcssPresetEnv from 'postcss-preset-env';

import './src/styles/global.css';

export default defineConfig({
	css: {
		postcss: {
			plugins: [
				postcssPresetEnv({
					stage: 3,
					features: {
						'nesting-rules': true,
						'custom-media-queries': true,
					},
				}),
			],
		},
	},
	resolve: {
		alias: {
			'next/image': path.resolve(__dirname, './.ladle/UnoptimizedImage.tsx'),
		},
	},
});
