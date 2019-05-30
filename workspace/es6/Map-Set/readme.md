## Map 
类似于一个 js 对象 {}
获取对象下面的所有key 
作用：
1. 优化逻辑判断
if else switch-case
2. 被新的 api 支持 URLSearchParams

区别：
{} 的key 是字符串Symbol 其他类型在遍历 key 的时候出现 toString() 的问题
app [object,HTMLelement];
Map() key 支持各个类型