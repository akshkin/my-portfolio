const withMDX = require("@next/mdx")({
	extension: /\.mdx?$/,
});

module.exports = withMDX({
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
});

const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
