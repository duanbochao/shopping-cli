<template>
  <div class="goodsDetails">
    <!-- 轮播图区间 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <!-- 图片轮播图 -->
        <Lunbotu :isfull="false" :imgList="imgList"></Lunbotu>
      </div>
    </div>

    <!-- 中间显示区间 -->
    <div class="mui-card">
      <div class="mui-card-header" style="font-weight:bold">哈哈哈哈哈哈，这这hi的的中国的设计到</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p style="font-size:16px;color:black;font-weight:bold">
            <span>市场价：￥955</span>
            <span style="padding-left:20px;">
              销售价格:
              <span style="color:red">￥955</span>
            </span>
          </p>
          <div class="buyNumber">
            <span style="font-size:16px">购买数量：</span>
            <div class="mui-numbox">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input class="mui-input-numbox" type="number" />
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
          </div>
          <div style="margin-top:8px">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopCar">加入购物车</mt-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部区间 -->
    <div class="mui-card">
      <div class="mui-card-header" style="font-weight:bold">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>
            商品货号:
            <span>ddddgdddfdd</span>
          </p>
          <p>
            库存状况:
            <span>60件</span>
          </p>
          <p>
            上架时间:
            <span>2020.3.11</span>
          </p>
        </div>
      </div>
      <div class="mui-card-footer" style="display:block">
        <mt-button size="large" class="btn1">图文介绍</mt-button>
        <mt-button size="large" class="btn2">图文介绍</mt-button>
      </div>
    </div>

    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
          <div class="ball" v-show="state" ref="ball"></div>
    </transition>
  </div>
</template>
<script>
import Lunbotu from "../subcomponents/Lunbotu";
export default {
  data() {
    return {
      state: false,
      imgList: [
        {
          id: 1,
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1362786995,1511430767&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583927893318&di=4718f7813b12b730ad9b539518c04b79&imgtype=0&src=http%3A%2F%2Fimage.huahuibk.com%2Fuploads%2F20190227%2F23%2F1551280855-dJWcRQxOzq.jpg"
        },
        {
          id: 3,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583927893328&di=3a135e1bdcc1cdd271b8320e58a32608&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201312%2F11%2F20131211220142_YAkVT.jpeg"
        },
        {
          id: 4,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583928030014&di=b133ac15c9a70d59730ac03ec9be1dd8&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F17%2F12%2F03%2F7f21e9dc4268d2bbefa5893275f3c706.jpg"
        },
        {
          id: 5,
          img:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583928056294&di=5331926ac82a6e6e8dedd09c71b3701d&imgtype=0&src=http%3A%2F%2Fimages6.fanpop.com%2Fimage%2Fphotos%2F35200000%2FPineapples-pineapples-35247069-1338-1314.jpg"
        }
      ]
    };
  },
  activated() {},
  methods: {
    addShopCar() {
      this.state = !this.state;
    },

    beforeEnter(el) {
      el.style.transform="translate(0px, 0px)"; //放在定位点
    },

    enter(el,done) {
      //解决适配问题
      var ballPostion=this.$refs.ball.getBoundingClientRect();//获取小球的位置
      var shopCarPostion=document.getElementById('shopCar').getBoundingClientRect();
   
      var left=shopCarPostion.left-ballPostion.left;
      var top=shopCarPostion.top-ballPostion.top;

       el.offsetWidth;// 必须加上，不然没有动画
       el.style.transform=`translate(${left}px,${top}px)`; //终点位置
       el.style.transition='all .3s cubic-bezier(0.64,-0.33,0.6,1.18)'; //设置动画方式,可以使用cubic-bezier(.04,.64,.67,1.1)替换ease动画效果
       done(); //此处的done相当于afterEnter的引用
    },

    afterEnter(el) {
      this.state=!this.state;
    }
  },
  components: {
    Lunbotu
  }
};
</script>
<style scoped>
.mui-card-content {
  text-align: center;
}
.mui-card-content-inner {
  text-align: left;
}

.btn1 {
  border: 1px solid #4909f8;
  background-color: transparent;
  color: #4909f8;
}
.btn2 {
  margin-top: 10px;
  border: 1px solid #fd892a;
  background-color: transparent;
  color: #fd892a;
}
.mui-card {
    font-size: 14px;
    position: relative;
    overflow: hidden;
    margin: 10px;
    border-radius: 2px;
    background-color: white;
    background-clip: padding-box;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .3);
    box-shadow: 0 1px 14px rgba(0, 0, 17, 0.5);
}
.ball {
  width: 17.05px;
  height: 18px;
  background: red;
  border-radius: 50%;
  position: absolute;
  z-index: 100;
  left:161px;
  top: 378px;
  }

</style>