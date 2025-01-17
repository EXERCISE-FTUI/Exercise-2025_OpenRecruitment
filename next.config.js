/** @type {import('next').NextConfig} */
const nextConfig = {
    // this for timeline needs 
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })
    return config
  }
}

module.exports = nextConfig 