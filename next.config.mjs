import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		scrollRestoration: true,
	},
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['src'],
	},
};

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
// 	enabled: process.env.ANALYZE === 'true',
// });

export default withContentlayer(nextConfig);
