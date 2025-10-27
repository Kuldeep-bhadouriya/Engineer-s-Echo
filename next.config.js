/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cloud.appwrite.io',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.appwrite.io',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  // Enable type checking in production builds
  typescript: {
    ignoreBuildErrors: false,
  },

  // Enable ESLint checking in production builds
  eslint: {
    ignoreDuringBuilds: false,
  },

  // Compression
  compress: true,

  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  },
};

module.exports = nextConfig;
