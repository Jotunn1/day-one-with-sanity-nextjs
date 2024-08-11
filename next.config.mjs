/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com"],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
