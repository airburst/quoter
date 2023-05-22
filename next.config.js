/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/trade",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
