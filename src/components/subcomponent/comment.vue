<template>


<div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要评论的内容(最多输入120字" maxlength="120" v-model="comment" ></textarea>
    <mt-button type="primary" size="large" @click="releasenewlist">发表评论</mt-button>

    <div class="cmt-list">
        <div class="cmt-item"  v-for="(item, i) in commentlist" :key="item.date">
          <div class="cmt-title">
           第{{i+1}}楼&nbsp;&nbsp;用户：{{item.nick_name}} &nbsp;&nbsp; 发表时间：{{item.date}} 
              </div>
                <div class="cmt-body">

                  {{item.comment}}
                </div>
            </div>
    </div>
    

  
</div>
    
</template>
<script>
import {Toast} from 'mint-ui'
    
export default{
    data(){
        return{
            comment:'',
            commentlist:[]
         
        }
    },
    created(){
        this.getcommentList()
    },
    methods:{

			releasenewlist(){
                console.log(  this.comment)
                console.log( this.id)
                if(this.comment.trim().length ===0){
                    Toast("评论内容不能空")
                    
                    }else(
				  this.$http.post('http://www.ftusix.com/static/data/comment.php', JSON.stringify({ user_id: 183, topic_id:this.id, comment:this.comment.trim()  }), { emulateJSON: true }).
                        then(data => {
                            if(data.status === 200){
                                Toast("发表评论成功")
                                var cmt={
                                    nick_name:"默认",
                                    date: Date.now(),
                                    comment:this.comment.trim()
                                    };
                                    this.commentlist.unshift(cmt);
                                    this.comment="";
                            }
                })
                    )

            },
            getcommentList(){
                	  this.$http.get('http://www.ftusix.com/static/data/commentList.php', {params:{ topic_id:this.id }}, { emulateJSON: true }).
                        then(data => {
					// console.log(data.body.data)
					if(data.status === 200){
                         this.commentlist=data.body.data
                        console.log(this.commentlist)


					

					}else(
						alert("获取评论列表失败")

					)
				});

            },
            postComment(){
                //发表评论

            }
        },
        props:["id"]
	};
</script>



<style lang="scss" scoped>
.cmt-container{
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin :0;
    }
    .cmt-list{
        margin: 5px 0px;
        .cmt-item{
            font-size: 13px;
            .cmt-title{
                line-height: 30px;
                background-color: #ccc;

            }
            .cmt-body{
                line-height: 35px;
                text-indent:2em;
 
            }
        }       
    }
}
</style>
