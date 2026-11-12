/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Nama repo: Website-PrangArt-Lab (case-sensitive!)
  basePath: process.env.NODE_ENV === 'production' ? '/Website-PrangArt-Lab' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Website-PrangArt-Lab/' : '',
};

module.exports = nextConfig;
