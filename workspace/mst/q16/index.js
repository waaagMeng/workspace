function Animal(name) {
    this.name = name;
    this.sleep = function() {
        console.log(this.name + '睡着了')
    }
}

Animal.prototype.eat = function (food) {
    console.log(this.name + '正在吃' + food)
}

//原型链的继承
// function Cat() {}
//  //让cat继承animal上的属性方法以及原型链上的方法
//  Cat.prototype = new Animal()  //在cat原型链上加上Animal的一个实例
//  Cat.prototype.name = 'cat'
// var cat = new Cat()
//     console.log(cat.name)
//     console.log(cat.eat('fish'))
//     console.log(cat.sleep())
//     console.log(cat instanceof Cat)
//     console.log(cat instanceof Animal)

//-------------------------------构造函数的继承
// function Cat(name) {
//     Animal.call(this) //使得animal对象的this指向Cat
//     this.name = name || 'Tom'
// }
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)
// console.log(cat instanceof Animal) //false  a instanceof b = true 表示a的隐式原型等于b的显示原型

//--------------------组合继承

// Cat.prototype = new Animal()
// var cat = new Cat()
// console.log(cat.name)
// console.log(cat.sleep())
// console.log(cat instanceof Cat)
// console.log(cat instanceof Animal) //true

//--------------寄生组合继承 
function Cat(name) {
    Animal.call(this) 
    this.name = name || 'Tom'
}
(function() {
    //创建一个没有实例方法的类
    var Super = function() {} //没有函数名 所以这是匿名函数 匿名函数没有构造器 不能被new实例
    Super.prototype = Animal.prototype //super也变成了高贵的构造函数了 可以New
    Cat.prototype = new Super()
})()
var cat = new Cat()
console.log(cat.name)
console.log(cat.sleep())
console.log(cat instanceof Cat)
console.log(cat instanceof Animal)