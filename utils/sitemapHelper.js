import axios from "axios"
import { load } from "cheerio"

/**
 * 判断站点地图是否可用
 * @param url 远程站点地图地址
 * @returns 
 */
export function isSitemapUrl(url) {
  // 正则表达式匹配以 http 或 https 开头，并且以 /sitemap.xml 或 /sitemap.xml.gz 结尾的 URL
  const sitemapPattern = /^(https?:\/\/)[\w.-]+\/sitemap\.xml(\.gz)?$/i;
  return sitemapPattern.test(url);
}

/**
 * 异步获取站点地图文件内容
 * @param options 包含站点地图URL、超时时间和缓存清除规则的对象
 * @returns 返回站点地图的内容字符串。如果无法获取或内容为空，则返回空字符串
 */
export async function getSitemapFileStr(options) {
  console.log(options.url)
  if (!isSitemapUrl(options.url)) throw new Error('不是站点地图地址')
  const res = await axios.get(options.url, {
    timeout: options.timeout ?? 5000,
  })
  return res.data
}

/**
 * 检查提供的内容是否为站点地图。
 * @param content 需要检查的字符串内容。
 * @returns 返回一个布尔值，表示提供的内容是否为站点地图。
 */
export function isSitemap(content) {
  // 使用正则表达式检测内容是否包含站点地图的根元素或至少一个子元素
  const regex = /<urlset.*?>.*?<\/urlset>|<sitemapindex.*?>.*?<\/sitemapindex>/si;
  return regex.test(content);
}

/**
 * 解析sitemap文件
 * @param {*} str 站点地图内容
 * @returns 
 */
export function getUrls(str) {
  if (!isSitemap(str)) throw new Error('不是站点地图内容')
  const $ = load(str)
  return $("loc").map((_i, el) => $(el).text()).get()
}

/**
 * 使用给定的选项异步生成站点地图的URL列表。
 * @param {Object} options - 用于获取站点地图文件的选项对象。
 * @returns {Promise<Array<string>>} 一个承诺(Promise)，解析为包含所有URL的数组。
 */
export async function useSitemap(options) {
  try {
    const _str = await getSitemapFileStr(options)
    const _urls = getUrls(_str)
    return _urls
  } catch (_e) {
    console.log(_e)
  }
}

/**
 * 创建单url数组
 * @param {*} url 地址
 * @param {*} limit 额度
 * @returns 
 */
export function createOneUrlArr(url, limit) {
  return Array(+limit).fill(url)
}