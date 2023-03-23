// Because Contentlayer is not yet compatible with static export, I decided to use separately by npm-scripts.
// import { withContentlayer } from 'next-contentlayer';
import bundleAnalyzer from '@next/bundle-analyzer';

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

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
