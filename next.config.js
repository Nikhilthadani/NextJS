/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "encrypted-tbn1.gstatic.com",
      "images-eu.ssl-images-amazon.com",
      "images-na.ssl-images-amazon.com",
    ],
  },
};

module.exports = nextConfig;
