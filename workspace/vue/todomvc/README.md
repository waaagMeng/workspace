- el:#root 根挂载结点，
- App component + vue-router  + vuex 混合而一起的应用

new Vue({
    el: '#app',
    render: h => h(App)
})

- vue 的难点是 数据管理
   组件状态，data() {},
   两兄弟组件要共享状态时 比如说登录
   通过props 传递过去
   应用状态？

- 当页面上多个组件间要共享状态时，
  将共享状态，放置在这些组件的共同的父组件data来管理
  状态要唯一，放在一个地方(共同的父组件) 方便管理
  如果不统一，状态有可能不同步
  父子组件通信: v-on:increment="incrementCount"
  props:    this.$emit()

- 麻烦，找父节点有点麻烦，
 当你有很多状态要共享的时候，就有很多组件，组件的关系也错综复杂
 那就直接到App  这就叫全局数据管理 vuex 应用状态管理
 在main.js加一个store