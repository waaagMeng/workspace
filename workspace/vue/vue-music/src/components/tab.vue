<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span class="tab-link">推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/singer">
      <span class="tab-link">歌手</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/rank">
      <span class="tab-link">排行</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/search">
      <span class="tab-link">搜索</span>
    </router-link>
  </div>
</template>

<script>
export default {
	name: 'tab'
};
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.tab
	display flex
	height px2rem(88px)
	line-height px2rem(88px)
	font-size 14px
	&-item
		flex 1
		text-align center
		.tab-link
			padding-bottom 5px
			color hsla(0,0%,100%,0.5)
		&.active
			.tab-link
				color #ea2448
				border-bottom 2px solid #ea2448
</style>
