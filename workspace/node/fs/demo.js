// js的后端node 用核心模块打理起服务器端开发
// 要读文件，先引入fs

const fs = require('fs');
// 读一个文件 有几步？ js 运行在服务器命令行上
// 首先要找到文件 代码由cpu执行 会用到内存 a.txt在磁盘文件里  IO操作
//要从内存跑到硬盘中找文件  要花时间   打开文件、读取文件、输出到命令行里 （典型的异步问题）
//耗时 callback 使用回调函数 文件读取完毕后执行此函数
// fs.readFile('./a.txt','utf8',(err,data) => {
//     console.log(data);
//     fs.readFile('./b.txt','utf8',(err,data) => {
//         console.log(data);
//     })
// })

// 当出现耗时问题时，找promise 这是一类问题
// Promise 是耗时问题的包裹 把要耗时的东西放进去
const fileAPromise = new Promise((resolve,reject) => {
    fs.readFile('./a.txt','utf8',(err,data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    })
});
const fileBPromise = new Promise ((resolve,reject) => {
    fs.readFile('./b.txt','utf8',(err,data) => {
        if (err) {
            reject(err);
            return;
        }
        resolve(data);
    })
});

fileAPromise
    .then(data => {
        console.log(data);
        return fileBPromise;  //读完a 去到b
    })
    .then(data => {
        console.log(data);   //就可以读取b的了
    })
    .catch(err => {
        console.log(err);
    })