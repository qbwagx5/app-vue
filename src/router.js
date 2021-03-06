import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import VipContainer from './components/tabbar/VipContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/News/NewList.vue'
import NewInfo from './components/News/NewsInfo.vue'
import Photolist from './components/photos/Photolist.vue'
import Photoinfo from './components/photos/Photoinfo.vue'
import GoodsList from './components/goods/GoodsList.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'


// 3. 创建路由对象
var router = new VueRouter({
  routes: [  //配置路由规则的
    {path:'/', redirect: '/home'},
    {path:'/home', component: HomeContainer},
    {path:'/vip', component: VipContainer},
    {path:'/shopcar', component: ShopcarContainer},
    {path:'/search', component: SearchContainer},
    {path:'/home/NewList', component:NewsList },
    {path:'/home/newsinfo/:id', component:NewInfo },
    {path:'/home/photolist', component:Photolist },
    {path:'/home/Photoinfo/:id', component:Photoinfo },
    {path:'/home/goodslist', component:GoodsList },
    {path:'/home/goodsinfo/:id', component:GoodsInfo },
    {path:'/home/goodsdesc/:id', component:GoodsDesc},
    {path:'/home/goodscomm  ent/:id', component:GoodsComment}
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类，默认的类叫做 router-link-active
})

// 把路由对象暴露出去
export default router