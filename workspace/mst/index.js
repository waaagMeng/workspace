// function Person() {
//     this.name = name
// }
// let p = new Person('wn')
// p.__proto__等于什么 Person.prototype 实例的隐式原型链和构造函数的显式原型链一样
// person的隐式原型链 Person.__proto__ = Function.prototype
// Function的隐式原型链是Object

// 实例的隐式原型链__proto__等于其构造函数的显式原型链prototype

var foo = {},  //一个对象
 F = function(){}; //一个函数

//  Object.prototype.a = 'valA'
//  Function.prototype.b = 'valB'
//  console.log(foo.a)  //valA
//  console.log(foo.b)  //undefined
//  console.log(F.a)  //valA
//  console.log(F.b)  //valB

//  function Person(name) {
//     this.name = name
//     return {}
// }
// let p = new Person('wn')
// console.log(p)  //{}
//---------构造函数是不需要返回值的，使用new来创建对象时，如果return的是非对象类型，会忽略返回值，如果return是对象，则返回该对象(若return null也会忽略返回值)

// function Person(name) {
//         this.name = name
// }
// function Student() {
    
// }
// Student.prototype = Person.prototype
// Student.prototype.constructor = Student //让student函数加上构造器，变成构造函数
// let s = new Student('wn')
// console.log(s instanceof Person) //true

// for(let i = 0;i<10;i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 0);  输出0-9
// }
//--------let 每次循环会生成一个封闭的作用域和setTimeout绑定，而var每次循环会覆盖掉上一次的作用域
//改成闭包写法  形成块级作用域
// for (var i = 0;i<10;i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 0);
//     })(i)
// }

// Array.prototype.method = function() {
//     console.log('wn')
// }
// var myArry = [1,2,3,4,5,6,7]
// myArry.name='wn'
// for(let index in myArry) {
//     console.log(index)
//     // console.log(myArry[index])
// }
//for in能遍历数组 有坑
//for in 遍历出来的是数组索引，也就是下标。for of遍历出来的是数组里的元素
//使用for in 可以遍历到所有可枚举的属性 包括原型链上的 最好别用  for of不会受影响
// for in
// 1. index索引为字符串型的数字，不能直接进行几何运算
// 2. 遍历顺序有可能不是按照实际数组的内部顺序进行的
// 3.使用for in 会遍历数组所有可枚举属性，包括原型链，所以for in更适合遍历对象

// for of
// for in 遍历的是数组的索引，for of遍历的是数组的元素
// for of 遍历的只是数组内的元素，而不包括数组原型属性和索引

let gArr = [1,2,[3,4],5,[2,7,[3,9]]]
let oArr = [1,2,3,4,5,2,7,3,9]
//递归
// function outputArr(arr) {
//     let res = []
//     for(let i = 0;i<arr.length;i++) {
//         //判断是否是数组
//         if(Array.isArray(arr[i])) {
//             res = res.concat(outputArr(arr[i])) //再去遍历这个数组 拼接到res里
//         }else { //不是数组就放到空数组里
//             res.push(arr[i])
//         }
//     }
//     return res
// }
//reduce
function outputArr(arr) {
    return arr.reduce(function(pre,item) { //reduce方法支持传入两个参数
        return pre.concat(Array.isArray(item) ? outputArr(item) : item)
    },[])
}
console.log(outputArr(gArr))
