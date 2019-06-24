## 怎么用
只有一个参数时，省略（），
只有一条语句的时候，可以省略大括号{}和return

## 注意
参数箭头之间不能换行
返回一个对象时候

## arguments
- 所有函数里面都可以用的变量(除了箭头函数)
- [arg1,arg2,arg3]

## 区别
- 箭头函数不支持重复命名的形参，普通函数可以
- 箭头函数不能使用call apply等方法改变this
- 箭头函数没有 this  它的this指向的是定义时所处的上下文（外部函数）的this。
- 箭头函数没有原型对象 .prototype
- 箭头函数不能作为构造函数
- 箭头函数没有 arguments

## new target
- es6 引进的 返回new作用的那构造函数