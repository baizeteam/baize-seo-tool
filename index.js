import { schedule } from 'node-cron'
// import { useSitemap } from './utils/sitemapHelper.js'
import { baiduSubmit } from './utils/baidu.js'
(async () => {
  async function job() {
    // 解析sitemap里的地址
    // const urls = await useSitemap({
    //   url: config.SITEMAP_URL
    // })
    // console.log(urls)
    // 仅提交首页
    const HOME_PAGE = Array(config.BAIDU_LIMIT).fill(config.HOME_PAGE_URL)

    // 提交链接
    const res = await baiduSubmit({
      urls: HOME_PAGE,
      siteUrl: config.SITE_URL,
      token: config.BAIDU_TOKEN
    })
    console.log(res)
  }
  job()
  // console.log("定时任务开启")
  // 配置每天0点执行提交，配置语法和 linux cron表达式一致
  // schedule("0 0 * * *", job)
})()