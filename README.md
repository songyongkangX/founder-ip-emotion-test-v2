# 创始人 IP 情绪风格测评

零依赖静态网页，打开 `index.html` 即可使用。

## 功能

- 33 道测评题（含 2 道可选八字题），自动累计怒、喜、哀、惧、爱、恶、欲七类情绪分数
- 自动生成主情绪、辅助情绪、内容比例、视频方向与档案卡
- 使用 html2canvas 将完整结果页导出为 PNG 图片，并保留 SVG 兜底方案
- 支持移动端布局

如果需要本地预览，可在项目目录运行任意静态服务器，例如：

```bash
python3 -m http.server 4173
```

然后打开 `http://localhost:4173`。

## 分享链接

外部结果链接支持通过 URL 参数直接打开结果页：

```text
https://你的域名.com/?answers=x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x.x
```

答案会编码在 URL 中，数据只保存在链接里，不会上传到服务器。将本文件夹部署到 GitHub Pages、Netlify、Vercel 静态托管或自己的域名后，访问带有 ?answers=... 的链接即可直接打开结果页。
