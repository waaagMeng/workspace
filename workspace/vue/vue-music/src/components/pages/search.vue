<template>
  <div class="search">
		<div class="search-box-wrapper">
			<!-- 搜索框组件 -->
			<v-search-box></v-search-box>
		</div>
	</div>
</template>

<script>
import searchBox from '@/components/searchBox.vue'
export default {
	name: 'Search',
 data() {
	 return {
		 
	 }
 },
 components: {
	 'v-search-box': searchBox
 }
}
</script>

<style>

</style>
