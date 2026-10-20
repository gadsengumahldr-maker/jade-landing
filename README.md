# 翡翠落地页 + 独立后台

这是一个复刻「匠心胡子」风格的落地页，并附带简单可编辑后台。

## 文件结构

```
jade-landing/
├── public/
│   ├── index.html      # 前台落地页
│   ├── admin.html      # 后台管理页面
│   └── images/         # 图片目录（请把你的图片放这里）
├── data/
│   └── config.json     # 所有可修改的内容都在这里
├── server.js           # Node.js 服务（可选）
├── package.json
└── README.md
```

## 快速使用（推荐静态方式）

1. 把 `public/` 目录里的文件上传到你的服务器 / 对象存储 / GitHub Pages / Vercel 等。
2. 把 `data/config.json` 也放到能被访问的位置，或者直接把配置写进 index.html。
3. 修改 `config.json` 里的文字和图片路径即可更新页面。

## 使用独立后台（需要 Node.js）

```bash
cd jade-landing
npm install
node server.js
```

然后访问：
- 前台：http://你的域名/
- 后台：http://你的域名/admin.html

在后台修改内容后点「保存」，前台刷新即可生效。

## 图片替换

把你的横幅图、头像、手镯图放到 `public/images/` 目录，然后在后台或 config.json 里填写对应路径，例如：

```
/images/banner.jpg
/images/avatar.jpg
/images/bangle1.jpg
```

## 按钮跳转

在后台「按钮」栏填写：

```
手镯|https://你的微信链接或表单
挂件|https://...
找胡子私人定制|https://...
```

## 部署建议

- 最简单：把 public 文件夹丢到任何静态托管（Vercel、Netlify、阿里云OSS、腾讯云COS）
- 需要后台：用一台有 Node 的服务器（或 Railway、Render、Heroku）运行 server.js
