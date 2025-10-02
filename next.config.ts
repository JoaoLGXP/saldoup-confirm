/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false, // força usar pages/ ao invés de app/
  },
  reactStrictMode: true,
};

module.exports = nextConfig;