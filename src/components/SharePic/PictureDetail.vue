<template>
  <div class="picturedetail">
    <!-- 标题区域 -->
    <h1 style="font-size:16px;color:#3996e0;text-align:center;margin:20px">图片的标题菜单栏</h1>
    <p class="picturedetail_box1">
      <span>发表时间</span>
      <span>点击次数</span>
    </p>
    <hr />

    <!-- 图片内容显示区域 -->
    <div class="picturedetail-content">
      <div>
        <!--预览-->
        <vue-preview :slides="slide1" class="preview"></vue-preview>
      </div>

      <p
        style="font-size:12px;line-height:20px;text-align:left;margin-top:10px"
      >不仅扩大了的比较开朗八块腹肌博客的拉丁饭店冷库妇女快乐的农夫看到了发你的防空雷达反倒是克里夫'f东方都对你豆腐皮二篇我给警告</p>
    </div>

    <!-- 评论区域 -->
    <comment :id="sid"></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/Comment";
export default {
  data() {
    return {
      sid: this.$route.params.id,
      slide1: []
    };
  },
  created() {
    this.getImagesBySid();
  },
  methods: {
    handleClose() {
      console.log("close event");
    },

    getImagesBySid() {
      this.axios
        .get("/share/getImage", {
          params: {
            sid: this.sid
          }
        })
        .then(resp => {
          //数组的组合
          var formatData = [];
          resp.data.forEach(item => {
            var chgData = {};
            chgData.id = item.id;
            chgData.src = item.surl;
            chgData.title = item.title;
            chgData.content = item.content;
            chgData.msrc = item.surl;
            chgData.w = 600;
            chgData.h = 400;
            formatData.push(chgData);
          });
        this.slide1=formatData;
        });
    }
  },
  components: {
    comment
  }
};
</script>
<style scoped>
.picturedetail_box1 {
  display: flex;
  justify-content: space-between;
}

.picturedetail {
  padding: 0 5px;
}




</style>
