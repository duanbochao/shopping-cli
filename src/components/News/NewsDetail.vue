<template>
  <div class="newsDetail">
    <!-- 标题 -->
    <h1 style="font-size:16px;text-align:center;color:red;padding:10px 0px">{{newsInfo.title}}</h1>

    <!-- 发表时间 -->
    <p class="newsDetail_createDate">
      <span>{{newsInfo.createDate | dateFormat}}</span>
      <span>点击{{newsInfo.count}}次</span>
    </p>

    <hr/>
    <!-- 内容显示区域 -->
    <div class="newsDetail_content" v-html="newsInfo.content">
    </div>

    <!-- 发表评论区域 -->
    <comment></comment>

  </div>
</template>
<script>
import comment from '../subcomponents/Comment'
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsInfo:{}
    };
  },
  created() {
    this.getNewsById();
  },
  components:{
    comment
  },
  methods:{
      getNewsById(){
          var _this=this;
          this.axios.get('/news/getNewsListById',{params: {
              id:_this.id
              }
              }).then(resp=>{
              if (resp && resp.status===200) {
                  console.log(resp.data[0]);
                  
                  _this.newsInfo=resp.data[0];
              } 
          })
      }
  }
};
</script>
<style>
.newsDetail{
  padding:0 8px;
}
.newsDetail_createDate {
  display: flex;
  justify-content: space-between;
  color: blue;
}

.newsDetail_content img {
    width: 100%;
}
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
    width: 100%;
}
</style>
