//一个例子： 收到用户请求 并处理该请求

const Koa = require('koa');
const app = new Koa();

app.use(async (ctx,next) => {
    const start = Date.now();  //拿到用户请求的当前时间
    await next();
    const end = Date.now();    //拿到终止时间
    //writeHead()设置响应头 content-type
    ctx.set('X-Response-time',`${end - start}ms`);    //告诉用户花了多长时间  这里自定义了一个响应头 响应头信息可以在检查里面的network查看
    console.log('spend',`${end - start}ms`);
})
app.use(async (ctx) => {
    ctx.body = `hello koa`;
})
app.listen(8080, () => {
    console.log('server is running 8080');
})