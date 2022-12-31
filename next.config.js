/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	pageExtensions: ['page.tsx'],
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

module.exports = nextConfig;
