<template>
  <div>
    <counter />
  </div>
</template>
<script>
//两个兄弟组件，共享count数据 count不应该属于counter组件私有
//所以count 不应该属于data(){} 应该属于props
import Counter from './components/Counter';
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
  },
  components: {
    'counter': Counter,
  }
}
</script>
<style>
  
</style>
