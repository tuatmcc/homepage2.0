// import bundleAnalyzer from '@next/bundle-analyzer';
// Because Contentlayer is not yet compatible with static export, I decided to use separately by npm-scripts.
// import { withContentlayer } from 'next-contentlayer';
// import { createContentlayerPlugin } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
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

// const withBundleAnalyzer = bundleAnalyzer({
//	enabled: process.env.ANALYZE === 'true',
//});

export default nextConfig;
