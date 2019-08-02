# q1. js全局执行上下文为我们创建了两个东西：全局对象和this关键字
   new的实现原理：
     1. 创建一个空对象，构造函数的this指向这个空对象
     2. 这个新对象被执行【原型】连接
     3. 执行构造函数，将属性和方法添加到this引用的对象上
     4. 如果构造函数中没有返回其他对象，那么返回this，也就是创建的新对象，否则返回构造函数中返回的对象

# q2 call bind apply
   1. b.call(a) 就相当于把b里面的作用域强行指向到a里面去,第一个参数一定是this作用域要去到的地方，第二三四个...参数是该作用域里用到的值
   2. b.apply(a) 和call 一样 只是后面的参数必须是数组
   3. b.call() 或 b.apply() 没有指向作用域 那么此时this的作用域会指向window
   4. c = b.bind(a)
       c() 
      bind方法返回的是一个修改过的函数，所以该用函数该有的姿态去调用
      bind方法接收的参数是按照形参的顺序进行的

# q3.  浅拷贝 深拷贝
  1. 数组解构：
    let [x,y] = [1,2]  // x = 1,y = 2
  2. let {foo,bar} = {foo:"aaa",bar:"bbb"}  //foo = "aaa", bar = "bbb"
  另：(允许给赋值的变量重命名)
  let { foo:baz } = { foo: "abc"}  //baz = "abc"
  3. 浅拷贝只是第一层属性进行拷贝，当第一层的属性为基本数据类型时，新对象和原对象互不影响，但是如果第一层的属性值是#复杂数据类型，那么新对象和原对象的属性值其指向的是同一块内存地址
  4. 深拷贝是将对象及值复制过来，两个对象修改其中任意一个的值，其中一个不会改变

# q4 闭包
   闭包是指有权访问另一个函数作用域中的变量 的函数
    1. 能够访问函数定义时所在的词法作用域，（阻止其被回收）
    2. 私有化变量
    3. 模拟块级作用域

# q5 数组去重
  Set  indexOf  includes  map  reduce

# q6 防抖节流函数原理

# q7 __proto__和 prototype 关联 
    __proto__是每一个实例都有的属性，可以访问[prototype]属性，实例的__proto__(隐式原型)与其构造函数的prototype(显式原型)指向的是同一个对象 

# Q10 get post 请求在缓存方面的区别
  1. get请求类似于查找到过程，用户获取数据可以不用每次都与数据库链接，所以可以使用缓存
  post不同，post一般做的是修改和删除数据的工作，所以必须与数据库交互，所以不能使用缓存，因此get请求更适合于请求缓存

# Q11 url长度限制 
  http协议并没有限制url的长度，是浏览器或者web浏览器做了url长度的限制，并且只针对get请求做的限制

# Q12 前端事件流
  在DOM标准的事件模型中，事件流包括下面几个阶段：
    1. 事件捕获阶段
    2. 处于目标阶段
    3. 事件冒泡阶段
    addEventListener第三个参数为 true 时， 捕获， false时，冒泡， 默认是false (IE只支持事件冒泡)

# Q13 图片懒加载和预加载的区别
  预加载：提前加载图片，当用户需要查看图片时可直接从本地缓存中渲染
  懒加载：做为服务器的前端优化，减少请求或延迟请求（懒加载对服务器有一定的缓解压力作用，预加载则会增加服务器压力）


#q14 js中的各种位置
 clientHeight: 表示可视区域的高度，不包含border和滚动条
 offsetHeight: 表示可视区域的高度，包含border和滚动条
 scrollHeight: 表示所有区域的高度，包含因为滚动被隐藏的部分
 clientTop: 表示边框border的厚度，在未指定的情况下一般为0
 scrollTop: 滚动后被隐藏的高度
 

#q15 js拖拽功能的实现
 鼠标点下onmousedown(mousedown是jquery的方法) 设置一个开关变量为true，执行mousemove事件移动
 鼠标放开onmouseup 开关变量设置为false


#q16 类的创建和继承

#q17 click在ios手机上有300ms延迟，原因及解决方法
  1. 在这个上面加属性-禁止缩放 去掉了双击放大这个功能  initial-scale=no
     <meta name="viewport" content="width=device-width, initial-scale=no">
  2. FastClick, 其原理是： 检测到touchend事件(手指触摸屏幕 又离开了)后，立刻发出模拟click事件，并把浏览器300Ms之后真实发出的事件阻断

#q18 Cookie sessionStorage,localStorage的区别
  Cookie:数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器直接来回传递，而sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存.
  cookie还有路径(path)的概念，可以限制cookie只属于某个路径下，可以手动设置cookie往哪个路径下走，存储大小只有4K左右。
  sessionStorage：仅在当前浏览器窗口关闭前有效，不能长久保存
  localStorage：在所有的同源窗口都是共享的，cookie也是在所有同源窗口是共享的，localstorage的大小在5M左右
  