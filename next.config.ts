import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["image.tmdb.org"],
  },
  webpack(config) {
    // Find the existing rule that handles SVG files
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    config.module.rules.push(
      // Reapply the existing file-loader rule, but only when importing SVGs with ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      // For all other *.svg imports, use SVGR to transform them into React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      },
    );

    // Exclude SVGs from the default file-loader since we handle them separately now
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
};

export default nextConfig;
