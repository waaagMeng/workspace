const EventEmitter = require('events');
class Ev extends EventEmitter{};

const ev = new Ev();

//绑定事件
['search','choose'].forEach(key => {
    //key 是数组里的每一项 on key 就相当于on search
    //把所有剩余函数参数整理为数组
    //args = [arg1,arg2,arg3]; 处理参数不固定
    //...args 的作用 fn(arg1,arg2,arg3);
    ev.on(key,async function(...args) {
        const fn = require(`./lib/${key}`);
        const res = await fn(...args);
        console.log('res 执行的结果',res);
        ev.emit('handle',key,res, ...args);
    })
})
ev.on('afterSearch',function(data,keyword) {
    if (!data || !data.result || !data.result.songs) {
        console.log(`没搜索到 ${keyword} 的相关结果`)
        return;
      }
      const songs = data.result.songs
      ev.emit('choose', songs)    
})
ev.on('handle',function(key,res, ...args) {
    switch (key) {
        case 'search':
            return ev.emit('afterSearch',res,args[0]);
    }
})  
function main (arg) {
    let keyword = arg[2];
    console.log(keyword);
    ev.emit('search',keyword);
}

main(process.argv);
