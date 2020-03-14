<template>
  <div class="goodsList">
    <div class="goodsContainer" v-for="(item,index) in goodsList" :key="index">
      <div class="imgContainer" @click="goGoodsDetailPage(item)">
        <img :src="item.image" alt />
      </div>
      <div class="goodsTitle">
        <h1 style="font-size:18px;padding-left:10px">{{item.title}}</h1>
      </div>
      <div class="goodsDetails">
        <p>
          <span style="font-size:18px;font-weight: bold;color:red">￥{{item.newPrice}}</span>
          <span>
            <del>￥{{item.oldPrice}}</del>
          </span>
        </p>

        <p style="margin-bottom:0px; display: flex;
              justify-content: space-between;">
          <span>{{item.enabled ? "热卖中" : "已抢空"}}</span>
          <span>省余{{item.enabled ? item.count : "0"}}件</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    goGoodsDetailPage(item) {
      this.$router.push({
        name: "goodsDetail",
        params: {
          item: item
        }
      });
    },

    getGoodsList() {
      this.axios
        .get("/goods/getGoodsByPage", {
          params: {
            page: 1
          }
        })
        .then(resp => {
          if (resp && resp.status === 200) {
            this.goodsList = resp.data;
          }
        });
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

