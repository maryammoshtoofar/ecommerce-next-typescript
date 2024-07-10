/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    typedRoutes: true,
  },
  typescript: {
    // additional TypeScript options
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/img/**',
      },
    ],
  },
};
