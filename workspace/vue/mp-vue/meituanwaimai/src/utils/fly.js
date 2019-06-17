import Vue from 'vue';
const Fly = require('flyio/dist/npm/wx.js');
const fly = new fly();
// /dasouche/api/v2/get
// /dasouche/api/v2/set
// /dasouche/api/v2/update
fly.config.baseURL ="https://www.easy-mock.com/mock/5aded45053796b38dd26e970/"

Vue.prototype.$http = fly;