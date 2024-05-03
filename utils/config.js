import dotenv from "dotenv"
dotenv.config()

export const config = {
  SITE_URL: process.env.SITE_URL,
  SITEMAP_URL: process.env.SITEMAP_URL,
  BAIDU_TOKEN: process.env.BAIDU_TOKEN,
  HOME_PAGE_URL: process.env.HOME_PAGE_URL,
  BAIDU_LIMIT: 10, //提交额度，百度限制每天10次
}
