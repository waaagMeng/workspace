- Koa是基于Node.js的下一代web框架，由Express团队打造，特点：优雅、简洁、灵活、体积小。几乎所有功能都需要通过中间件实现。
## koa 中间件
app.use(middleWare);
next 下一个中间件,
每一次use都会注册一个中间件
[middleWare1,middleWare2]
1. async 函数
2. 洋葱模型： 一层层往最里面执行，最后一个中间件执行完了，一层往外冒泡执行剩余的代码
3. 解耦：每一个中间件负责一件事

以X 开头的：自定义响应头

##koa 第三方中间件
koa   ctx 就是 req + res 组成的对象
ctx: {
    req: {},
    res: {},
    render: () => {}
}
koa-views
接着扩展 ctx,接着往ctx上面塞东西

## 
package.json 项目描述
依赖 npm install 下来的文件

-S 就是往这里面放
"dependencies": {
    "ejs": "^2.6.1",
    "koa": "^2.7.0",
    "koa-views": "^6.2.0"
  }

npm i node_modules 目录，
npm i 从json 文件里面读取依赖安装

## ejs
<%= %> 原样输出
<%- %> 解析 html
<% %> 解析 js
