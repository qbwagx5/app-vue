

const Mock = require('mockjs');
// 获取 mock.Random 对象
// const Random = Mock.Random;
// mock一组数据
var goodlist =
  [
    {
      "id": 87,
      "title": "啄木鸟中年男士短袖t恤纯棉翻领港版大码丝光棉polo衫爸爸装夏装",
      "add_time": "2018-07-06 08:59",
      "zhaiyao": "啄木鸟中年男士短袖t",
      "click": 0,
      "img": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/2759979267/TB2vdWsz25TBuNjSspmXXaDRVXa_!!2759979267.jpg_580x580Q90.jpg_.webp",
      "sell_price": 195,
      "mark_price": 205,
      "stock_quantity": 60

    },
    {
      "id": 88,
      "title": "短袖t恤男士速干套装韩版潮流夏季2018新款半袖体恤上衣男装夏装",
      "add_time": "2018-07-06 08:59",
      "zhaiyao": "短袖t恤男士速干",
      "click": 0,
      "img": "https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/2614424501/TB2iauucnmWBKNjSZFBXXXxUFXa_!!2614424501.jpg_580x580Q90.jpg_.webp",
      "sell_price": 108,
      "mark_price": 205,
      "stock_quantity": 200

    },
    {
      "id": 89,
      "title": "短袖t恤男士套装韩版潮流男装2018新款潮男休闲夏季一套衣服夏装",
      "add_time": "2018-07-06 08:59",
      "zhaiyao": "短袖t恤男士套装韩版潮",
      "click": 0,
      "img": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/654262260/TB28tuNw79WBuNjSspeXXaz5VXa_!!654262260.jpg_580x580Q90.jpg_.webp",
      "sell_price": 89,
      "mark_price": 106,
      "stock_quantity": 60

    },
    {
      "id": 90,
      "title": " 花花公子贵宾短袖t恤男夏季韩版潮流纯棉纯色polo衫半袖男士体恤",
      "add_time": "2018-07-06 08:59",
      "zhaiyao": "花花公子贵宾短袖t恤",
      "click": 0,
      "img": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/2857903026/TB2MhxuthuTBuNkHFNRXXc9qpXa_!!2857903026.jpg_580x580Q90.jpg_.webp",
      "sell_price": 165,
      "mark_price": 186,
      "stock_quantity": 80

    },
    {
      "id": 91,
      "title": "日版冠军have a nice day短袖rooster champion男女休闲情侣T恤夏",
      "add_time": "2018-07-06 08:59",
      "zhaiyao": "日版冠军have a nice day短袖",
      "click": 0,
      "img": "https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/2228488201/TB2x2Ghu_lYBeNjSszcXXbwhFXa_!!2228488201.jpg_580x580Q90.jpg_.webp",
      "sell_price": 114,
      "mark_price": 156,
      "stock_quantity": 90

    },
    {
      "id": 92,
      "title": "#OVDY 18SS 街头欧美潮牌t恤bf原宿风打底衫宽松半袖短袖男女tee",
      "add_time": "2018-07-06 08:59",
      "zhaiyao": "#OVDY 18SS 街头欧美潮牌t恤bf",
      "click": 0,
      "img": "https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/2937502276/TB2ekkqi5MnBKNjSZFoXXbOSFXa_!!2937502276.jpg_580x580Q90.jpg_.webp",
      "sell_price": 74,
      "mark_price": 106,
      "stock_quantity": 100

    }
  ]
const productData = function (options) {
  let rtype = options.type.toLowerCase();
  switch (rtype) {
    case 'get':
      break;
    case 'post':
      let id = parseInt(JSON.parse(options.body).params.id) //获取的id
      let b = goodlist.filter(a => {
        return a.id == id;

      })
      console.log(b);

  }
}
// const goodsData = function(){
//   return goodlist;


const productDatas = function () {
  return goodlist


}


  var lunbotuimg = [
      {
        "id": 90,
        img:[
        
          {"img":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/722067892/TB2pjDknLuSBuNkHFqDXXXfhVXa_!!722067892.jpg_580x580Q90.jpg_.webp"}
         ,{"img":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/2625926162/TB2GERXbQOWBuNjSsppXXXPgpXa_!!2625926162.jpg_580x580Q90.jpg_.webp"}
         ]
        
      },
      {
        "id": 88,
        img:[
        
          {"img":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/69937891/TB1eZwev9tYBeNjSspkXXbU8VXa_!!0-item_pic.jpg_580x580Q90.jpg_.webp"}
         ,{"img":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/2032144280/TB2A4HuAnlYBeNjSszcXXbwhFXa_!!2032144280.jpg_580x580Q90.jpg_.webp"}
         ]
        
        
      },
      {
        id: 87,
        img:[
        
         {"img":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/1669782352/TB1PYzqaTXYBeNkHFrdXXciuVXa_!!0-item_pic.jpg_580x580Q90.jpg_.webp"}
        ,{"img":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/868561903/TB2TVkRyoR1BeNjy0FmXXb0wVXa_!!868561903.jpg_580x580Q90.jpg_.webp"}
        ]
      },
      {
        "id": 89,
        img:[
        
          {"img":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/1060930836/TB2.XfHzeuSBuNjy1XcXXcYjFXa_!!1060930836.jpg_580x580Q90.jpg_.webp"}
         ,{"img":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/1986462382/TB2Ej1Hbk7mBKNjSZFyXXbydFXa_!!1986462382.jpg_580x580Q90.jpg_.webp"}
         ]
        
        
        
      },
      {
        "id": 91,
        img:[
        
          {"img":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i1/2212415897/TB1Rh0daCtYBeNjSspkXXbU8VXa_!!0-item_pic.jpg_580x580Q90.jpg_.webp"}
         ,{"img":"https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/112093499/TB21tRKu4XkpuFjy0FiXXbUfFXa_!!112093499.jpg_580x580Q90.jpg_.webp"}
         ]
        
        
      },
      {
        "id": 92,
        img:[
        
          {"img":"https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/864463747/TB2cFdLf8yWBuNkSmFPXXXguVXa_!!864463747.jpg_580x580Q90.jpg_.webp"}
         ,{"img":"https://g-search2.alicdn.com/img/bao/uploaded/i4/i3/2017050291/TB2vPS9CQCWBuNjy0FaXXXUlXXa_!!2017050291.jpg_580x580Q90.jpg_.webp"}
         ]
        
        
      }
    ]

  const lunbotu = (options) => {
    let rtype = options.type.toLowerCase();
    switch (rtype) {
      case 'get':
        break;
      case 'post':
        let id = parseInt(JSON.parse(options.body).params.id)//获取传入的id参数
        let b = lunbotuimg.filter(a => {
         return a.id == id;
         console.log(b)
        })
        
        return b;
        
       
    }
  }
  const shopinfo = (options) => {
    var shopinfo=[
      {
        "id": 87,
        "title": "日版冠军have a nice day短袖rooster champion男女休闲情侣T恤夏",
        "add_time": "2018-07-06 08:59",
        "goods_no": "SD3256325662",
        "sell_price": 114,
        "mark_price": 156,
        "stock_quantity": 90
  
      },
      {
        "id": 88,
        "title": "短袖t恤男士速干套装韩版潮流夏季2018新款半袖体恤上衣男装夏装",
        "add_time": "2018-07-06 08:59",
        "goods_no": "SD3256325663",
        "sell_price": 108,
        "mark_price": 205,
        "stock_quantity": 200
  
      },
      {
        "id": 89,
        "title": "短袖t恤男士套装韩版潮流男装2018新款潮男休闲夏季一套衣服夏装",
        "add_time": "2018-07-06 08:59",
        "goods_no": "SD3256325664",
        "sell_price": 89,
        "mark_price": 106,
        "stock_quantity": 60
  
      },
      {
        "id": 90,
        "title": " 花花公子贵宾短袖t恤男夏季韩版潮流纯棉纯色polo衫半袖男士体恤",
        "add_time": "2018-07-06 08:59",
        "goods_no": "SD3256325665",
        "sell_price": 165,
        "mark_price": 186,
        "stock_quantity": 80
  
      },
      {
        "id": 91,
        "title": "日版冠军have a nice day短袖rooster champion男女休闲情侣T恤夏",
        "add_time": "2018-07-06 08:59",
        "goods_no": "SD3256325666",
        "sell_price": 114,
        "mark_price": 156,
        "stock_quantity": 90
  
      },
      {
        "id": 92,
        "title": "#OVDY 18SS 街头欧美潮牌t恤bf原宿风打底衫宽松半袖短袖男女tee",
        "add_time": "2018-07-06 08:59",
        "goods_no": "SD3256325667",
        "sell_price": 74,
        "mark_price": 106,
        "stock_quantity": 100
  
      }
 
    ]
    let rtype = options.type.toLowerCase();
    switch (rtype) {
      case 'get':
        break;
      case 'post':
        let id = parseInt(JSON.parse(options.body).params.id)//获取传入的id参数
        let b = shopinfo.filter(a => {
         return a.id == id;
         console.log(b)
        })
        
        return b;
        
       
    }

  }
  






// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/user', 'post', productData);
Mock.mock('/users', 'post', productDatas);
Mock.mock('/goodslunbo', 'post', lunbotu);
Mock.mock('/shopinfo', 'post', shopinfo);

// Mock.mock('/goodslist', 'post', goodsData );

// Mock.mock('/user/query', 'post', productData);


export default Mock;
