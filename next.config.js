/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repo = 'Introduction-Page'   

const nextConfig = {
  reactStrictMode: true,
  output: 'export',                 // 生成 out/ 静态站
  basePath: isProd ? `/${repo}` : '',
  assetPrefix: isProd ? `/${repo}/` : '',
  // 可选：多页面时开启可减少 404
  // trailingSlash: true,
}
module.exports = nextConfig
