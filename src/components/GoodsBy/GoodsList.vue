<template>
  <div class="goodsList">
    <div class="goodsContainer" v-for="(item,index) in goodsList" key="index">
      <div class="imgContainer" @click="goGoodsDetailPage">
        <img
          :src="item.url"
          alt
        />
      </div>
      <div class="goodsTitle">
        <h1 style="font-size:18px">美女热卖中</h1>
      </div>
      <div class="goodsDetails">
        <p>
          <span style="font-size:18px;font-weight: bold;color:red">￥199</span>
          <span>
            <del>￥10</del>
          </span>
        </p>

        <p style="margin-bottom:0px; display: flex;
              justify-content: space-between;">
          <span>热卖中</span>
          <span>省2件</span>
        </p>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
        goodsList:[
            {   id:1,
                url:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2615283454,846087799&fm=26&gp=0.jpg'
            },
            {   id:2,
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583927893328&di=3a135e1bdcc1cdd271b8320e58a32608&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201312%2F11%2F20131211220142_YAkVT.jpeg'
            },
            {   id:3,
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583927893324&di=33391610d0f82e30457b9a3ca1bcfa86&imgtype=0&src=http%3A%2F%2Fpic16.nipic.com%2F20110930%2F7995528_081419584000_2.png'
            },
            {   id:4,
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583927893323&di=67e50ed6e3124bd11f66f7e1086a5888&imgtype=0&src=http%3A%2F%2Fimg.redocn.com%2Fsheying%2F20160321%2Fyigelvsezi_6031196.jpg'
            },
            {   id:5,
                url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583927893318&di=4718f7813b12b730ad9b539518c04b79&imgtype=0&src=http%3A%2F%2Fimage.huahuibk.com%2Fuploads%2F20190227%2F23%2F1551280855-dJWcRQxOzq.jpg'
            }
        ]
    };
  },
  activated() {},
  methods:{
    goGoodsDetailPage(){
      this.$router.push({path:'/goodsDetail'})
    }
  }
};
</script>
<style scoped>
.goodsList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 3px 5px;
}

.goodsContainer {
  width: 49%;
  margin-top: 10px;
  border: 1px solid rgb(247, 196, 196);
  box-shadow: 0 0 6px rgb(247, 196, 196);
  min-height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

}

.goodsDetails {
  background-color: #eceeeb;
  padding: 10px 5px;
}


img {
  width: 100%;
}


</style>

