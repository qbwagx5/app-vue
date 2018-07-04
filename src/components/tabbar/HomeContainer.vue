<template>
    <div>
        <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in lunbotutist" :key="item.url">
            <img :src="item.url" alt="">
         </mt-swipe-item>
        </mt-swipe>
         <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newlist">
		                    <img src="../../img/menu1.png" alt="" class="imgli"> 
		                    <div class="mui-media-body">自拍</div>
                            </router-link>     
                   </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu2.png" alt="" class="imgli">
		                    <div class="mui-media-body">亚洲</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu3.png" alt="" class="imgli">
		                    <div class="mui-media-body">欧洲大汉</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu4.png" alt="" class="imgli">
		                    <div class="mui-media-body">动漫卡通</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../img/menu5.png" alt="" class="imgli">
		                    <div class="mui-media-body">VIP视频</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../img/menu6.png" alt="" class="imgli">
		                    <div class="mui-media-body">未亡人</div></a></li>
		            <!-- <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li> -->
		        </ul> 



        <h3>HomeContainer</h3>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                lunbotutist:[
                    
                    {url:'../src/img/2.jpg'},
                    {url:"../src/img/11.jpg"},
                    {url:"../src/img/3.jpg"},
                ]
            }
        },
        created(){
            this.get();
        },
        methods:{
            get(){
                console.log(this.lunbotutist)
            }
        }
    }
</script>
<style lang="scss" scoped>
.mint-swipe{
    height:200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
         &:nth-child(2){
            background-color: green;
        }
         &:nth-child(3){
            background-color: yellow;
        }
        img{
            width: 100%;
            height: 100%;
        }
    }
        .mui-grid-view.mui-grid-9{
            background-color: #fff;
            border:none;

            
    }
 
            
         .mui-grid-view mui-grid-9 .mui-table-view-cell{
            border:none;          
            }
           
}
.mui-media-body{
    font-size: 13px;
}
.imgli{
    width: 60px;
    height: 60px;
}

</style>

