基于Vue 2.0+vuex+vuerouter 全家桶实现方案来模仿网易云音乐Webapp项目 css预编译工具使用的是sass，音乐滚动加载用的是betterscroll，全面采用ES6风格代码。

解决了哪些问题
- 图片懒加载 vue-lazyload
- 前后端分离
  使用Node.js NeteaseCloudMusicAPI proxy
   8080+3000
- fastclick
- 设计了store
  songs  index  song(当前播放的歌曲)  singer  mode  favoriteList
  searchHistory  playHistory
- iconfont
- eslint


