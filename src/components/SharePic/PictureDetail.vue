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
        <div class="picturedetail-slt">
          <!--预览-->
          <vue-preview :slides="slide1" class="preview"></vue-preview>
        </div>
        
     <p style="font-size:12px;line-height:20px;text-align:left;margin-top:10px">
            不仅扩大了的比较开朗八块腹肌博客的拉丁饭店冷库妇女快乐的农夫看到了发你的防空雷达反倒是克里夫'f东方都对你豆腐皮二篇我给警告
        </p>

  
    </div>
 
    <!-- 评论区域 -->
    <comment :id="id"></comment>
  </div>
</template>
<script>
import comment from "../subcomponents/Comment";
export default {
  data() {
    return {
      slide1: [
        {
          src:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583829927533&di=67a741118b822f6d9aae8fafe53e89ea&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D3446073985%2C4093285840%26fm%3D214%26gp%3D0.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 612,
          h: 918
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 200
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 200
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 600,
          h: 200
        }
      ]
    };
  },
  methods: {
    handleClose() {
      console.log("close event");
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

.picturedetail{
  padding: 0 5px;
}

.preview img{
  box-shadow: 0 0 9px 1px #999;
}




</style>
