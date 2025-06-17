/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Ensure proper handling of client-side navigation
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Add rewrites if needed
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard/page',
      },
    ];
  },
};

export default nextConfig;
