<template>
    
<div>

    <h3>新闻页面</h3>
    	<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.topic_id">
					<router-link :to="'/home/newsinfo/' +item.topic_id">
						<img  class="mui-media-object mui-pull-left" src="https://ss1.baidu.com/70cFfyinKgQFm2e88IuM_a/forum/pic/item/cdbf6c81800a19d8374c916a32fa828ba61e4615.jpg" >
						<div class="mui-media-body">
						<h1>{{item.title}}</h1>
							<p class='mui-ellipsis'>
								<span>发表时间：{{item.modify_time}}</span>
								<span>点击：{{item.browser_num}}次</span>
							
							</p>
						</div>
					</router-link>
				</li>

			</ul>
    </div>
</template>


<script>
    export default{
		data(){
			return{
				list:""
			}
		},
		created(){
			this.getnewlist()
  
		},
		methods:{
			getnewlist(){
				  this.$http.post('http://www.ftusix.com/static/data/myNote.php', ({ user_id: 183, page: null }), { emulateJSON: true }).
                        then(data => {
					console.log(data.body.data)
					if(data.status === 200){
						this.list=data.body.data;

					}else(
						alert("获取失败")

					)
				});
				// $ajax({
				// 	url:'../../data/newlist.json',
				// 	type:'get',
				// 	dataType:'json',
				// 	success:function(data){
				// 		console.log(data)
				// 	}
				// })
			}
		}
	}
</script>

<style lang="scss" scoped>
.mui-table-view{
li{
    h1{
        font-size:14px;
}
    .mui-ellipsis{
	font-size: 12px;
	color: #226aff;
	display: flex;
	justify-content:space-between;
}
    
}
}

</style>
