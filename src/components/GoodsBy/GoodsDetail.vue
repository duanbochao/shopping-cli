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
      <div class="mui-card-header" style="font-weight:bold">{{item.title}}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p style="font-size:16px;color:black;font-weight:bold">
            <span>市场价：<del>￥{{item.oldPrice}}</del></span>
            <span style="padding-left:20px;">
              销售价:
              <span style="color:red">￥{{item.newPrice}}</span>
            </span>
          </p>
          <div class="buyNumber">
            <span style="font-size:16px">购买数量：</span>

            <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="test" class="mui-input-numbox" value="1" type="number" @change="CountChange" ref="numBox" />
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
            <span>{{item.idCard}}</span>
          </p>
          <p>
            库存状况:
            <span>{{item.count}}件</span>
          </p>
          <p>
            上架时间:
            <span>{{item.createDate | dateFormat}}</span>
          </p>
        </div>
      </div>
      <div class="mui-card-footer" style="display:block">
        <mt-button size="large" class="btn1">图文介绍</mt-button>
        <mt-button size="large" class="btn2">商品评论</mt-button>
      </div>
    </div>

    <transition v-on:before-enter="beforeEnter" v-on:enter="enter" v-on:after-enter="afterEnter">
      <div class="ball" v-show="state" ref="ball"></div>
    </transition>
  </div>
</template>
<script>
import Lunbotu from "../subcomponents/Lunbotu";
import mui from "../../lib/mui/js/mui.js"; // 建了lib文件夹，存放mui相关文件

export default {
  data() {
    return {
      state: false,
      count: 1,
      item:this.$route.params.item,
      imgList: []
    };
  },
  mounted(){
   mui(".mui-numbox").numbox()
  },
  created() {
    this.getGoodsDetailsLunbo();
  },
  methods: {
  
    getGoodsDetailsLunbo(){ //获取轮播图详情信息
      var _this=this;
      this.axios.get('/home/goods/web/getGoodsListByGid/'+this.item.id).then(resp=>{
        if (resp && resp.status===200) {
        resp.data.forEach(item => {
          item.img=item.surl
        });

         _this.imgList=resp.data;
        }
      })
    },
    CountChange(){
      var count=this.$refs.numBox.value;
      this.count=count;
    },
    addShopCar() {
      this.state = !this.state;
   
      var goodsInfo={
        id:this.item.id,
        title:this.item.title,
        price:this.item.newPrice,
        enabled:this.item.enabled,
        url:this.item.image,
        count:parseInt(this.count)
      };
      
      this.$store.commit('addGoodsToCar',goodsInfo)
    },

    countchange() {
      this.count = this.$refs.checkBox.value;
    },

    beforeEnter(el) {

      el.style.transform = "translate(0px, 0px)"; //放在定位点
    },
    enter(el, done) {
      //解决适配问题
      var ballPostion = this.$refs.ball.getBoundingClientRect(); //获取小球的位置
      var shopCarPostion = document
        .getElementById("shopCar")
        .getBoundingClientRect();

      var left = shopCarPostion.left - ballPostion.left;
      var top = shopCarPostion.top - ballPostion.top;

      el.offsetWidth; // 必须加上，不然没有动画
      el.style.transform = `translate(${left}px,${top}px)`; //终点位置
      el.style.transition = "all .3s cubic-bezier(0.64,-0.33,0.6,1.18)"; //设置动画方式,可以使用cubic-bezier(.04,.64,.67,1.1)替换ease动画效果
      done(); //此处的done相当于afterEnter的引用
    },
    afterEnter(el) {
      this.state = !this.state;
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
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 14px rgba(0, 0, 17, 0.5);
}
.ball {
  width: 17.05px;
  height: 18px;
  background: red;
  border-radius: 50%;
  position: absolute;
  z-index: 100;
  left: 161px;
  top: 378px;
}
</style>