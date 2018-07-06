
//导入路由组件

import Vue from 'vue'
import VueRouter from 'vue-router'
//引入mock.js
import Mock from 'mockjs'
//导入自己的路由模块
import router from './router.js'
//使用vueresource
import VueResource from 'vue-resource'


Vue.use(VueResource);
Vue.use(VueRouter)
//导入app根组件
import app from './APP.vue'
//按需导入Mint 的样式
// import {Header, Swipe, SwipeItem,Button} from 'mint-ui'
// Vue.component(Header.name, Header)
// //注册轮播图
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// //实现懒加载
// import { Lazyload } from 'mint-ui';

// Vue.use(Lazyload)
import MinUI from 'mint-ui'
Vue.use(MinUI)
import 'mint-ui/lib/style.css'

import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)




 var  vm =new Vue({
     el:'#app',
     render:c=>c(app),
     router

 })