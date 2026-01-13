/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: false,
    domains: [],
  },
  // For static export if needed
  // output: 'export',
};

module.exports = nextConfig;
