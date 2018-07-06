 <template>
 <div>


   <!-- 这是顶部滑动条区域 -->
    <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							全部
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							nba
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
					</div>
				</div>

			</div> 
           <div>
            <!-- 图片列表区域  -->
            <ul class="photo-list">
                <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/'+item.id" tag="li">
                  <img v-lazy="item.img_url">
                  <div class="info">
                      <h1 class="info-title">{{item.title}}</h1>
                      <div class="info-body">{{item.zhaiyao}} </div>
                  </div>
                </router-link>
           </ul>
        </div>    
 </div>
     
 </template>
 

 <script>
     import mui from '../../lib/mui/js/mui.min.js'

    

     export default{
         data(){
             return{
                 list:[]
             };
         },
         mounted(){
              mui('.mui-scroll-wrapper').scroll({
	 deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
     });

         },
         created(){
             this.getimglist();
         },
     
     methods:{
         getimglist(){
             this.$http.get('../data/getnewslist.json').then((data)=>{
                 if(data.status==200){
                this.list=data.body.message
                console.log(this.list)
                 }
            });
         }
     }
     };
 </script>
 

 <style lang="scss" scoped>
 * { touch-action: pan-y; }
 
.photo-list{
     list-style: none;
     margin: 0;
     padding: 10px;
     padding-bottom: 0px;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;
        box-shadow: 0 0 9px #999;
        position: relative;
        img{
            width: 100%;
            height: 250px;
            vertical-align: middle;
        }
        
        img[lazy="loading"] {
          width: 40px;
          height: 300px;
          margin: auto;
}
.info{
    color: white;
    text-align: left;
    position: absolute;
    bottom: 0px;
    background-color: rgba(0,0,0,0.4);
    max-height: 84px;
     .info-title{
         font-size: 14px;
     }
     .info-body{
         font-size: 13px;
     }

}

    }

}


 </style>
 