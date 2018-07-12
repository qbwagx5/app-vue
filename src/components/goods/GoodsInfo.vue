<template>
    
<div class="goodsinfo-container">


	        <transition @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
			 <div class="ball" v-show="ballFlag" ref="ball"></div>
			</transition>
            <!-- 商品轮播图区域 -->
            <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
					<swipter :lunbotuList="lunbotulist" :isfull="false"></swipter>
					</div>
				</div>
			</div>
	 
            <!-- 商品购买区域 -->
            <div class="mui-card" >
				<div class="mui-card-header">{{shopinfo.title}}</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p class="price">
							市场价:<del>￥{{shopinfo.mark_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">&nbsp;&nbsp;￥{{shopinfo.sell_price}}</span>
						</p>
						<p>
							购买数量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<numbox @getcount="getSelectedCount" :max="shopinfo.stock_quantity"></numbox>
						</p>
						<p>
							<mt-button type="primary" size="small">立即购买</mt-button>
							<mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
							
						</p>
					</div>
				</div>
            </div>
			
            <!-- 商品参数区域 -->
        <div class="mui-card" >
				<div class="mui-card-header">商品参数区域</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号:{{shopinfo.goods_no}}</p>
						<p>库存情况:{{shopinfo.stock_quantity}}件</p>
						<p>商家信息:</p>
					</div>
				</div>
				<div class="mui-card-footer">
						<mt-button type="primary" size="large" plain @click="godesc(id)">图文介绍</mt-button>
						<mt-button type="danger" size="large" plain @click="gocomment(id)">商品评论</mt-button>
				</div>
			</div>
</div>

	


</template>
<script>
import swipter from '../subcomponent/swipter.vue'
//导入数字选择框组件
import numbox from '../subcomponent/goodsinfo_numbox.vue'
export default{
  	data(){
			return{
                lunbotulist:[],
				id:this.$route.params.id,
				shopinfo:[],
				ballFlag:false, //控制小球显示和隐藏的标识符
				SelectedCount:1
			}
		},
  created(){
	  this.getlunbotu(),
	  this.getshopinfo()

  },
  methods:{
      getlunbotu(){
          console.log(this.id)
            this.$http.post('/goodslunbo',{ params:{id:this.id}}).then(res=>{
				// console.log(res)
				var img= res.data[0].img
			    // console.log(img);
				
             this.lunbotulist=img
            //  console.log(this.lunbotulist)
				  })

	  },
          getshopinfo(){
            this.$http.post('/shopinfo',{ params:{id:this.id}}).then(res=>{
				// console.log(res.data)
				this.shopinfo=res.data[0]
				console.log(this.shopinfo)
				console.log	(this.shopinfo.stock_quantity)		
				  })

		  },

		  godesc(id){
			 this.$router.push({path:"/home/goodsdesc/"+ id});
		  },
		  gocomment(id){
			  this.$router.push({path:"/home/goodscomment/"+ id});			  
		  },
		  addToShopCar(){
				  this.ballFlag=!this.ballFlag;
				  console.log(this.id)
				  console.log(this.SelectedCount)
				  console.log(this.shopinfo.sell_price)



				  var goodsinfo = {
					  id:this.id,
					  count:this.SelectedCount,
					  price:this.shopinfo.sell_price,
					  selected:true
				  };
				  this.$store.commit("addToCar",goodsinfo);
			
		},
		beforeEnter(el){
			el.style.transform="translate(0,0)";

		},
		enter(el,done){
			 el.offsetWidth;
			 //获取小球在页面中位置
			 const ballPosition= this.$refs.ball.getBoundingClientRect();
			 //获取小标在与页面中的位置 
			 const badgePosition= document.getElementById("badge").getBoundingClientRect();

			 const xDist=badgePosition.left-ballPosition.left;
			 const yDist=badgePosition.top-ballPosition.top;
			el.style.transform=`translate(${xDist}px, ${yDist}px)`;
			el.style.transition='all 0.5s cubic-bezier(.74,-0.29,1,.64)'
			done()

		}, 
		afterEnter(el){
			this.ballFlag=!this.ballFlag;

		},
		getSelectedCount(count) {
      // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
        this.SelectedCount = count;
	    console.log("父组件拿到的数量值为： " + this.SelectedCount);
	//   console.log(shopinfo.stock_quantity)
         }
		},
	
		
	  components:{
		  swipter,
		  numbox
	  }
    }
    





</script>

<style lang="scss" scoped>

.goodsinfo-container{
    background-color: #eee;
    overflow: hidden;
}
.now_price{

	color: red;
	font-size: 16px;
	font-weight: bold;
	

}
.mui-card-footer{
	display: block;
	button{
		margin: 15px 0;
	}
	
}
.ball{
		width: 15px;
		height: 15px;
		border-radius: 50%;
		background-color : red;
		position: absolute;
		z-index: 99;
		top: 407px;
		left: 167px;
		

	}



</style>

