/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "portfolio-curator.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["portfolio-curator.vercel.app/server-sitemap.xml"],
  },
};
