- 小程序 诞生于react大红之后
  MVVM 组件 vant
  数据驱动界面
  Vue 语法简洁
- Vue 与小程序共异
1. 思想
  网页，new Vue({
    el:'#app'
  })
2. 组件
  Vue.component('',{
    template:'',
    data(){
      return {

      }
    }
  })

- MVVM 不需要DOM 因为 DOM很低效
 但是要找元素怎么办？ ref 属性相当于id