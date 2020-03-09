<template>
  <div class="home">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>

    <!-- 中央菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/News/newsList/">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      var _this = this;
      this.axios.get("/getlunbo").then(resp => {
        if (resp && resp.status === 200) {
          _this.imgList = resp.data;
        }
      });
    }
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
img {
  width: 100%;
}

.mui-grid-view.mui-grid-9 .mui-media {
  color: #797979;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border-right: 1px solid white;
  border-bottom: 1px solid white;
}

.mui-grid-view.mui-grid-9 {
  background-color: white;
}
</style>
