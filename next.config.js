/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "./",
  experimental: {
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
