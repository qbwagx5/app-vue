<template>


<div class="goods-list">
   <div class="goods-item">

    <img src="http://g.search3.alicdn.com/img/i3/122610140/TB2yN74BwmTBuNjy1XbXXaMrVXa_!!0-saturn_solar.jpg_220x220.jpg" alt="">
    <h1 class="title">中袖半袖柔美雪纺衫女2018新款大码女装夏装V领宽松洋气百搭上衣</h1>
    <div class="info">
      <p class="price">
           <span class="now">￥2199</span>
           <span class="old">￥2399</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>剩60件</span>
      </p>
     
    </div>
    </div>

<div class="goods-item">

    <img src="http://g.search3.alicdn.com/img/i3/122610140/TB2yN74BwmTBuNjy1XbXXaMrVXa_!!0-saturn_solar.jpg_220x220.jpg" alt="">
    <h1 class="title">中袖半袖柔码女装夏装V领宽松洋气百搭上衣</h1>
    <div class="info">
      <p class="price">
           <span class="now">￥2199</span>
           <span class="old">￥2399</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>剩60件</span>
      </p>
     
    </div>
</div>

  <div class="goods-item">
    <img src="http://g.search3.alicdn.com/img/i3/122610140/TB2yN74BwmTBuNjy1XbXXaMrVXa_!!0-saturn_solar.jpg_220x220.jpg" alt="">
    <h1 class="title">中袖半袖柔美雪纺衫女V领宽松洋气百搭上衣</h1>
    <div class="info">
      <p class="price">
           <span class="now">￥2199</span>
           <span class="old">￥2399</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>剩60件</span>
      </p>
     
    </div>
</div>
  <!-- <div class="goods-item">
    <img src="http://g.search3.alicdn.com/img/i3/122610140/TB2yN74BwmTBuNjy1XbXXaMrVXa_!!0-saturn_solar.jpg_220x220.jpg" alt="">
    <h1 class="title">中袖半袖柔美雪纺衫女2018新款大码女装夏装V领宽松洋气百搭上衣</h1>
    <div class="info">
      <p class="price">
           <span class="now">￥2199</span>
           <span class="old">￥2399</span>
      </p>
      <p class="sell">
        <span>热卖中</span>
        <span>剩60件</span>
      </p>
     
    </div>
</div> -->
</div>


    
    
</template>

<script>
    
</script>
  


  <style lang="scss" scoped>
  .goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    
    .goods-item{
      width: 49%;
      overflow: hidden;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      margin:4px 0;
      padding: 2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 293px;
      .img{
        width: 100%;
      }
  

      .title{
        font-size: 14px;
      }
      .info{
        background-color: #eee;
        p{margin: 0px;}
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      
       
       }
       .sell{
         display: flex;
         justify-content: space-between;

       }
      }
    }
  }
  
  </style>
  