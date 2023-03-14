// This is the config file for @ladle/react to work with postcss-nesting
import { defineConfig } from 'vite';
import postCssNesting from 'postcss-nesting';

export default defineConfig({
	css: {
		postcss: {
			plugins: [postCssNesting],
		},
	},
});
