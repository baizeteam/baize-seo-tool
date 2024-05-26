import axios from "axios"
export async function baiduSubmit({ urls, siteUrl, token }) {
  let _res
  try {
    const api = `http://data.zz.baidu.com/urls?site=${siteUrl}&token=${token}`;

    _res = await axios.post(api, urls.join('\n'), {
      headers: {
        'Content-Type': 'text/plain'
      }
    })
    console.log('提交成功', urls)
  } catch (_e) {
    _res = _e.response
  }
  return _res.data
}