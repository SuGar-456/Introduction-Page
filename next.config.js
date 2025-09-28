/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'Introduction-Page'   

const nextConfig = {
  reactStrictMode: true,
  output: 'export',                 
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
}
module.exports = nextConfig
