const Koa = require('koa');
const Router = require('koa-router');
const koaSession = require('koa-session');
const staticServer = require('koa-static');
const path = require('path');
const app = new Koa();
const router = new Router();
const session_signed_key = ['secret'];  //加密

app.keys = session_signed_key;  //语法
const sessionConfig = {
    key: 'sid',         //放到cookie里面 可以理解为cookie的name属性
    maxAge: 10000

}

app.use(koaSession(sessionConfig,app));
app.use(
    staticServer(path.join(__dirname,'./static'))
);

// router.get('/',async (ctx) => {                //访问根路由/的时候
//     ctx.cookies.set('fromserver1','fromserver1',{
//         maxAge: 5000
//     });   //设置服务端 
//     ctx.cookies.set('user','user',{
//         path: '/user',
//         httpOnly: false
//     }) 
//     ctx.cookies.set('user-abc','user-abc',{
//         path: '/user/abc',
//     }) 
//     ctx.cookies.set('post','post',{
//         path: '/post',
//     })        
//     ctx.type = 'html';
//     ctx.body = `
//     <a href="/user"> -> user</a>
//     <a href="/post"> -> post</a>
//     `
// })
router.get('/user',async (ctx) => {
    ctx.body = 'user page';
})
router.get('/post', async (ctx) => {
    ctx.body = 'post page';
})
router.get('/user/abc',async (ctx) => {
    ctx.body = '/user/abc page'
})
router.get('/login',async (ctx) => {
    const { name, password } = ctx.query;
    if (name === 'test' && password === 'test') {
        //成功了就写到session里
        ctx.session.login = true;   //扩展了ctx  像Koa-views 扩展了render一样
        ctx.type = 'html';
        ctx.body = '登录成功' + '<a href="/testlogin">测试登录</a>';
    } else {
        ctx.session.login = false;
        ctx.body = '账号错误';
    }
})
router.get('/testlogin',async (ctx) => {
    if (ctx.session.login) {
        ctx.body = '成功登录'
    } else {
        ctx.redirect('/');
    }
})
app
.use(router.routes())
app.listen(7878, () => {
    console.log('server is running 7878');
})