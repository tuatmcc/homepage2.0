/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
	swcMinify: true,
	pageExtensions: ['page.tsx'],
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
		dirs: ['src'],
	},
	trailingSlash: true,
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
	enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
