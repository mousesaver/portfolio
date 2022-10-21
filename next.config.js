/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // supply an array of trusted image domains (np http:// or https://)
    domains: ["github.com", 'raw.githubusercontent.com', "placekitten.com"]
  }
}

module.exports = nextConfig
