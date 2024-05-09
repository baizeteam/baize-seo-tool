# baize-seo-tool

## 本地运行

在根目录下建 .env 文件

> 配置格式

```
SITE_URL=baize.plume.vip // 域名(不带协议)
SITEMAP_URL=https://baize.plume.vip/sitemap.xml // sitemap地址
BAIDU_TOKEN=你的token
HOME_PAGE_URL=https://baize.plume.vip // 首页地址
BAIDU_LIMIT=10 //提交额度，百度普通用户限制每天10次
```

## 部署到vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbaizeteam%2Fbaize-seo-tool&env=SITE_URL&env=SITEMAP_URL&env=BAIDU_TOKEN&env=HOME_PAGE_URL&project-name=baizeSeoTool&repository-name=baizeSeoTool)