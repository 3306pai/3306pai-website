# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# 目录说明
  - blog: 博客
  - docs: 文档
  - mentors: 邀请嘉宾
  - mettings: 会议
  - static/json: mock数据

 
### Installation

可以先 fork 项目，例如 wubx/3306pai-website
https://github.com/wubx/3306pai-website 

把下面命令换个人 fork 的项目

```
$ git clone git:///github.com/wubx/3306pai-website.git
or
$ git clone git@github.com:3306pai/3306pai-website.git

$cd 3306pai-website
$ brew install yarn
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.


## 提交修改
 每次可以拉一下全量，然后在修改。

 可以 fork 项目后，提交 markdown 格式到 Blog 目录下，本地 yarn start 测试通过，就可以 request 主项目。




