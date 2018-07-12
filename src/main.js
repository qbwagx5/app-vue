
//导入路由组件

import Vue from 'vue'
import VueRouter from 'vue-router'
import './mock/mock.js'
//引入mock.js
// import Mock from "mockjs";
//导入自己的路由模块
import router from './router.js'
//使用vueresource
import VueResource from 'vue-resource'

//注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var car =JSON.parse(localStorage.getItem('car')||'[]')
 var store = new Vuex.Store({
     state:{
         car:car//购物车的数据
           
     },
     mutations:{

        
         addToCar(state,goodsinfo) {
            var flag= false

             state.car.some(item=>{ 
                 if(item.id == goodsinfo.id){
                     item.count +=parseInt(goodsinfo.count)
                     flag=true
                     return true
                     console.log(car)
                 }
                 
             })
             if(!flag){
                state.car.push(goodsinfo)
            } 
            //当更新 car之后， 把car数组，存储到 本地的 localStoreage中
            localStorage.setItem('car',JSON.stringify(state.car))

         }
     },
     getters:{
         getAllCount(state){
             var c=0;
             state.car.forEach(item=>{
                 c +=item.count
             })
             return c
         }
     }
 })


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
     router,
     store //挂载store状态管理对象
     

 })