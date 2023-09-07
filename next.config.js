/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
   enabled: true
})

const nextConfig = {
   images: {
      domains: ["localhost", "cdn.plyr.io"]
   },
   experimental: {
      serverActions: true,
   },
}

module.exports = nextConfig
