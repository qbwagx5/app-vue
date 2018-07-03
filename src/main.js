
//导入路由组件

import Vue from 'vue'
import VueRouter from 'vue-router'

//导入自己的路由模块
import router from './router.js'
//使用vueresource
import VueResource from 'vue-resource'
Vue.use(VueResource)


Vue.use(VueRouter)
//导入app根组件
import app from './APP.vue'
//按需导入Mint 的样式
import {Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
//注册轮播图
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'



 var  vm =new Vue({
     el:'#app',
     render:c=>c(app),
     router

 })