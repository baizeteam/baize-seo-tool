import { schedule } from 'node-cron'
import { createOneUrlArr, useSitemap } from './utils/sitemapHelper.js'
import { baiduSubmit } from './utils/baidu.js'
import { config } from './utils/config.js'
import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.end("baize-seo-tool");
});

const port = process.env.PORT || 3000
const host = process.env.HOST || ''

app.server = app.listen(port, host, () => {
  console.log(`server running @ http://${host ? host : 'localhost'}:${port}`)
});

(async () => {
  async function job() {
    // 解析sitemap里的地址
    // const urls = await useSitemap({
    //   url: config.SITEMAP_URL
    // })
    // console.log(urls)

    // 仅提交首页
    const HOME_PAGE = createOneUrlArr(config.HOME_PAGE_URL, config.BAIDU_LIMIT)

    // 提交链接
    const res = await baiduSubmit({
      urls: HOME_PAGE,
      siteUrl: config.SITE_URL,
      token: config.BAIDU_TOKEN
    })
    console.log(res)
  }
  job()
  console.log("定时任务开启")
  // 配置每天0点执行提交，配置语法和 linux cron表达式一致
  schedule("0 0 * * *", job)
})()

export default app;