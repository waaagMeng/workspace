## why
无状态

## cookie
本地存储
怎么来：
1. js document.cookie 可读 可写
2. 服务端 通过Set-Cookie 响应头设置 cookie

内容： 
name:    
value:
path:   cookie 在哪个路径下生效 观察以下三个：
/               /所有路径
/user           /user user已经user 下面的
/usr/abc        /user/abc user/abc 以及下面的

domain:

httpOnly(很重要): true/false
如果设置为true，就不能通过Js获取cookie的值。

maxAge: 在几秒后 cookie 被删除  在koa里单位是ms  js是s

secure(也爱考): 安全 只会在https协议下传输 

作用范围：
domain + path
cookie在什么域名什么路径下面生效
浏览器检查存储的cookie,会发送给服务端的
而且：http 传输报文的大小
放在cookie 请求头里面发送

用途：
状态管理，t
用户个性化设置，f

## session
会话
靠后台自己实现的
很多个用户 产生很多个session

userId
sessionId 用户会话的时候 通过自己 sessionId 查询自己的状态
cookie: sessionID = id


