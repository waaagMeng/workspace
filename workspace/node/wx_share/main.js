// live-server 
{/* <script src="./fs.js"></script> */}
// require进来  COMMONJS 模块化方案
const http = require('http');
const https = require('https');
let i = 0;
http
.createServer(function(request,response) {
    i++;
    response.end(`Hello World ${i}`);
})
.listen(8000);

// Web服务 在软件上理解就是一个HTTP访问的服务