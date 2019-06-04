//例子：koa做一个博客
const Koa = require('koa');
//koa-views 可以支持哪些模板引擎
const views = require('koa-views');
const ejs = require('ejs');
const path = require('path')
const app = new Koa();


const user = {
    name: 'pp',
    posts: [
        {
            id: 0,
            title: '小程序踩坑指南'
        },
        {
            id: 1,
            title: 'vue.js 浅析 组件数据传递'
        }
    ]
}
const postDetail = [
    {
        id: 0,
        content: 'wechat app'
    },
    {
        id: 1,
        content: '<strong>react 表示不服</strong>'
    }
]
app.use(
    //加载模板引擎
    views(path.join(__dirname,'./views'),{
        extension:'ejs'
    })
    
)

//进去有一个 /user 代表个人的主页面
// /posts 文章详情
app.use(async (ctx) => {
    //区分 页面
    // console.log(ctx.path);
    // 默认 /
    if (ctx.path === '/user') {
        await ctx.render('user',{ user });   //渲染views文件夹下user模板
    }else if (ctx.path === '/posts') {
        //http://localhost:8080/posts?id=0
        const { id } = ctx.query;
        const post = postDetail.find(postItem => postItem.id == id);
        await ctx.render('post',{ post });
    }else {
        ctx.body = '无法处理该请求'
    }
})
app.listen(8080, () => {
    console.log('server is running 8080');
})