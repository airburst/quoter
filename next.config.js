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
      {
        source: "/general-liability",
        destination: "/general-liability/info",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
