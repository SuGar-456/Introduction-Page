/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',         // 关键：导出纯静态到 out/
  images: { unoptimized: true }, // 避免使用 Next Image 优化（静态更省事）
  // 如果你用的是“项目页”（不是 username.github.io），请把 REPO_NAME 改成你的仓库名并取消下面两行注释：
  basePath: '/Introduction-Page',
  assetPrefix: '/Introduction-Page',
};
module.exports = nextConfig;
