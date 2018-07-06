<template>
    <div class="phptoinfo-container">
        <h3>{{list.title}}</h3>
        <p class="subtitle">
            <span>发表时间&nbsp;&nbsp;:{{list.add_time}}</span>
            <span>点击次数： {{list.click}}次</span>

        </p>
        <hr>
        <!-- 缩略图区域 -->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        <!-- 图片内容区域 -->
        <div class="content">
            {{list.content}}
        </div>
        <!-- 评论子组件 -->
         <cmt-box :id="295"></cmt-box>
    </div>
</template>
 
 <script>
import comment from '../subcomponent/comment.vue'
 export default{
     data(){
         return{
             list:[],
             slide1: [
          {
            src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
            msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
            alt: 'picture1',
            title: 'Image Caption 1',
            w: 600,
            h: 400
          },
          {
            src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
            msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
            alt: 'picture2',
            title: 'Image Caption 2',
            w: 1200,
            h: 900
          }
        ]
      
             
         }; 
     },
     created(){
         this.getPhotoInfo()
     },
     methods:{
         getPhotoInfo(){
             this.$http.get('../data/photoinfo.json').then((data)=>{
                this.list=data.body.message[0]
                 console.log(this.list)
             })
         
         
     },
         handleClose(){
        console.log('close event')
         }
             

         
     },
    components:{
            "cmt-box":comment

        }
 }
     
 </script>

<style lang="scss" scoped>
.phptoinfo-container{
    padding: 3px;
    h3{
        color: #26a2ff; 
        font-size: 15px;
        text-align: center;
        margin:15px 0;
    }
    .subtitle{
        display: flex;
        justify-content: space-between;
        font-size: 13px;

    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }

}
</style>
