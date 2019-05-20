// 缓存计算结果 不要重复计算，
// 计算了的，保存 哪里？方式？
let cache = {};    //对象字面量 key value
// 1,2,3  4,5,6  怎么识别不同的key
// key string  <= arguments 类数组
function mult() {
    // 参数数量是不定的
    let a = 1;
    // args相关，数组 => string key
    // [1,2,3] 变成"1,2,3"
    let key = Array.prototype.join.call(arguments,',');
    if (cache [key]) {
        console.log('从缓存中取');
         return cache[key];
    }
   
    for (var i = 0, l = arguments.length;i < l; i++) {
        a = a * arguments[i];
    }
    cache[key] = a;
    return a;
}

console.log(mult(1,2,3));
console.log(mult(1,2,3));
console.log(mult(1,2,3));