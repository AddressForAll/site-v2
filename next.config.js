/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: [/\.md$/,/\.html$/],
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = nextConfig
