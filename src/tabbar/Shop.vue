<template>
  <div class="shopCar">
    <div class="mui-card" v-for="(item,index) in getGoodsInfo" :key="index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <!-- switch -->
          <mt-switch v-model="item.enabled"></mt-switch>
          <!-- 图片框 -->
          <div class="imgBox">
            <img :src="item.url" alt />
          </div>

          <!-- 内容区域 -->
          <div>
            <h1 style="font-size:16px;">{{item.title}}</h1>
            <p style="margin-bottom:0px"  class="shop_content">
              <span style="font-size:15px;font-weight:bold;color:red;padding-right:5px">￥{{item.price}}</span>
              <numbox @countChange="getCount($event)" :count="item.count" :id="item.id"></numbox>
            </p>
          </div>
        </div>
      </div>
    </div>
       <!-- 结算区域 -->
          <div class="budget">
            <div>
              <p>总计(不含运费)</p>
              <p>
                已经勾选商品<span class="red">{{getBudget.total}}</span>
                件,
                总价:<span class="red">￥{{getBudget.sum}}</span>
              </p>
            </div>
           <mt-button type="danger">去结算</mt-button>
          </div>

          {{this.$store.getters.getBudegt}}
  </div>
</template>
<script>
import numbox from "../components/subcomponents/NumBox";
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    getCount(value) {
      this.$store.commit("updateCount",value)
    }
  },
  components: {
    numbox
  },
  computed: {
    getGoodsInfo: function() {
      return this.$store.state.car;
    },
    getBudget:function(){
      return this.$store.getters.getBudegt
    }
  }
};
</script>
<style scoped>
.imgBox {
  width: 50px;
  height: 50px;
  margin: 0px 3px;
}

img {
  width: 100%;
  height: 100%;
}

.mui-card-content-inner{
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.shop_content{

 display: flex;
 justify-content: space-around;
 align-items: center;
}

.red{
  color: red;
  font-weight: bold;
}

.budget{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
}
</style>
