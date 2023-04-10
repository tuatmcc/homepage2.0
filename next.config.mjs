// Because Contentlayer is not yet compatible with static export, I decided to use separately by npm-scripts.
// import { withContentlayer } from 'next-contentlayer';
// import { createContentlayerPlugin } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
