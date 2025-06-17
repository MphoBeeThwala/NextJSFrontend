/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  // Ensure proper handling of client-side navigation
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Add proper redirects and rewrites
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/page',
      },
    ];
  },
}

export default nextConfig;
