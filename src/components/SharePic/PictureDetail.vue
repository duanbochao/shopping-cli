<template>
  <div class="picturedetail">

    <!-- 标题区域 -->
    <h1 style="font-size:18px;color:#3996e0;text-align:center;margin:20px">{{getPicDetailInfo.title}}</h1>
    <p class="picturedetail_box1">
      <span>发表时间:{{getPicDetailInfo.createDate | dateFormat}}</span>
      <span>点击{{getPicDetailInfo.count}}次</span>
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
      >{{getPicDetailInfo.content}}</p>
    </div>

    <!-- 评论区域 -->
    <comment :id="this.$route.params.item.id" :commetType="1"></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/Comment";
export default {
  data() {
    return {
      slide1: []
    };
  },
  created() {
    
    this.getImagesBySid();
  },

  computed: {
    getPicDetailInfo() {
      return this.$route.params.item;
    }
  },
  methods: {
    handleClose() {
      console.log("close event");
    },
    getImagesBySid() {
      this.axios
        .get("/home/share/web/getImage", {
          params: {
            sid: this.getPicDetailInfo.id
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
          this.slide1 = formatData;
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
  font-size: 12px;
}

.picturedetail {
  padding: 0 5px;
}
</style>
