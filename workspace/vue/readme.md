1. 引入cdn <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
2. 初始化vue 生命周期函数写字Vue里面
3. v-model 双向绑定 页面上的数据改变 数据源里的数据也随之改变
4. 计算属性 computed:{}  计算属性是一个属性  生命周期是方法
 - 对源数据进行改造输出
 - 写在计算属性里面的方法 这个方法名可以像数据源里的数据一样直接渲染使用
5. 扩展属性 如果methods里面和扩展方法重名了 扩展方法是出不来的