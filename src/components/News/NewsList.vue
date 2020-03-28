<template>
  <div class="newsList">
    <!-- 新闻缩略图 -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in newsList" :key="index">
        <router-link :to="'/News/newsList/NewsDetail/'+item.id">
          <img class="mui-media-object mui-pull-left" :src="item.newsIcon" style="width:100%" />
          <div class="mui-media-body">
            <h1 style="font-size:14px">   {{item.title}}</h1>
            <p class="mui-ellipsis" style="color:#7b7bf1">
                <span>
                    发表时间:{{item.createDate | dateFormat}}
                </span>
                <span style="margin-right:5px">
                    点击:{{item.count}}次
                </span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.loadNewsList();
  },
  methods: {
    loadNewsList() {
      var _this = this;
      this.axios.get("/home/news/web/getNewsListById").then(resp => {
        if (resp && resp.status === 200) {
         _this.newsList=resp.data;
        }
      });
    }
  }
};
</script>
<style scoped>
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
}

/* .mui-table-view {
    margin-bottom: 50px;
} */
</style>
