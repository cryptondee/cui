/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["beehiiv-images-production.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;
