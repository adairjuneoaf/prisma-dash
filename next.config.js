/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    ssr: true,
    styledComponents: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
