## async
async 函数就是 Generator 函数的语法糖。

## generate函数
```js
function* test() {
            let a = yield 1;
            console.log(a)
            let b = yield 2;
            console.log(b);
            let c = yield 3;
            console.log(c);
        }   
        //惰性的 不能直接test()来执行
        var g = test();
```
通过g.next()一步一步调用 每一步调用 执行到yield关键词 遇到yield就会停下
通过传参 可做为上一个yield语句的返回值