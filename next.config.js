/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [
      16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 768, 1024, 1280, 1536,
    ],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    remotePatterns: [],
    quality: 80,
  },
  compress: true,
  poweredByHeader: false,
};

module.exports = nextConfig;
