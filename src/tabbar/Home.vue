<template>
  <div class="home">
    <!-- 轮播图 -->
    <Lunbotu :isfull="true" :imgList="imgList"></Lunbotu>

    <!-- 中央菜单 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/News/newsList/">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">水果资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/picticureList">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/goodsList">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/leavingMsg">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </router-link>
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
import Lunbotu from "../components/subcomponents/Lunbotu";
export default {
  data() {
    return {
      imgList: []
    };
  },
  created() {
    this.getlunbotu();
  },
  components: {
    Lunbotu
  },
  methods: {
    getlunbotu() {
      var _this = this;
      this.axios.get("/home/lunbo/web/getlunbo").then(resp => {
        if (resp && resp.status === 200) {
          _this.imgList = resp.data;
        }
      });
    }
  }
};
</script>
<style scoped>
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
