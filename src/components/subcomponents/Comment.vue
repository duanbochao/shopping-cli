<template>
  <div class="comment">
    <h1 style="font-size:24px">发表评论</h1>
    <hr />

    <!-- 发表评论区域 -->
    <textarea
      maxlength="120"
      placeholder="请输入你要评论的内容（最多bb120个字）"
      style="height:100px;font-size:14px"
      v-model.trim="commentContent"
    ></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>

    <!-- 显示评论区域 -->
    <div class="show-comment" v-for="(item,index) in commentList" :key="index">
      <p style="padding:10px 5px;background-color:#caccca;line-height:10px;">
        <span>第{{index+1}}楼 &nbsp;&nbsp;{{item.username}}</span>
        <span>发表时间:{{item.commentDate | dateFormat}}</span>
      </p>

      <p>{{item.commentContent}}</p>
    </div>

    <!-- 加载更多 -->
    <mt-button type="default" size="large" @click="getCommen(++index)">加载更多</mt-button>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
import { Indicator } from "mint-ui";

export default {
  data() {
    return {
      commentContent: "",
      index: 1,
      commentList: [],
      flag: false
    };
  },
  created() {
    this.flag = true;
    this.getCommen(1);
  },
  methods: {
    addComment() {
      var _this=this;
      //添加评论内容
      if (this.commentContent == null || this.commentContent === "") {
        Toast({
          message: "请输入要评论的内容",
          duration: 2000
        });
        return;
      }

      var commentContent = this.commentContent
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");

      this.axios
        .get("/comment/web/addComment", {
          params: {
            commentContent: commentContent,
            nid:_this.id,
            commetType:_this.commetType
          }
        })
        .then(resp => {
          if (resp && resp.data.state === 1) {
            //追加自己的评论内容
            var cmt = {
              id: 9999,
              username: "匿名用户",
              commentContent: this.commentContent,
              commentDate: new Date()
            };

            this.commentList.unshift(cmt);

            this.commentContent = "";
            Toast({
              message: resp.data.message,
              duration: 2000
            });
          }
        });
    },

    getCommen(index, id) {
      Indicator.open({
        text: "玩命加载中...",
        spinnerType: "fading-circle"
      });

      //加载评论内容
      var _this = this;
      this.axios
        .get("/comment/web/getCommentByPage", {
          params: {
            page: index,
            nid: _this.id,
            commetType:_this.commetType
          }
        })
        .then(resp => {
          if (resp && resp.data.state === 1) {
            this.flag = false;
            Indicator.close();
            _this.commentList = _this.commentList.concat(resp.data.message);
          }
          if (resp && resp.data.state === 0) {
            Indicator.close();

            if (!_this.flag) {
              Toast({
                message: resp.data.message,
                duration: 2000
              });
            }
          }
        });
    }
  },
  props: ["id","commetType"]
};
</script>
<style scoped>
.show-comment {
  margin-top: 10px;
}
</style>
