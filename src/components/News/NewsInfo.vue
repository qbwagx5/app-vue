

<template>
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsinfo.title}}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
        <span>发表时间{{newsinfo.modify_time}}</span>
        <span > 点击：{{newsinfo.browser_num}}次</span>
    </p>
     <hr>
      <!-- 内容区 -->
      <div class="content" v-html="newsinfo.content"></div>
      <!-- 评论区 -->
      <comment-box :id="this.id"></comment-box>


    </div>
</template>


<script>

import comment from '../subcomponent/comment.vue'
    export default {
        data(){
            return{
                 id:this.$route.params.id,
                 newsinfo:{}//新闻对象
            };
        },
        created(){
            this.getinfo()
        },
        methods:{
            getinfo(){
                console.log(this.id)
                var id=this.id
                this.$http.get('http://www.ftusix.com/static/data/content.php', {params:{ user_id: 183, topic_id:id }}, { emulateJSON: true }).
                        then(data => {
					// console.log(data.body.data)
					if(data.status === 200){
                        this.newsinfo=data.body.data;
                        console.log(this.newsinfo)

					}else(
						alert("获取失败")

					)
				});
	
			}
		},
        components:{
            "comment-box":comment

        }
	}
    
</script>


<style lang="scss" >
.newsinfo-container{
    padding: 0 4px;
    .title{
        font-size: 16px;
        text-align: center;
        margin:15px 0;
        color: red;

    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
       img{
           width: 100%;
       } 
    } 

}
</style>

