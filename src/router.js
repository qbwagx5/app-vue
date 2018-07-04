import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/News/NewList.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则的
    {path:'/', redirect: '/home'},
    {path:'/home', component: HomeContainer},
    {path:'/vip', component: VipContainer},
    {path:'/shopcar', component: ShopcarContainer},
    {path:'/search', component: SearchContainer},
    {path:'/home/NewList', component:NewsList }
 
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router