<template>
  <div class="pictureList">
    <!-- 头部滑动区域 -->
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
          @click="getPicByid(0)"
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >全部</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html" @click="getPicByid(0)">清纯美女</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html" @click="getPicByid(1)">极品诱惑</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html" @click="getPicByid(2)">大胸长腿</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html" @click="getPicByid(3)">国产自拍</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html" @click="getPicByid(4)">高清无码</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html" @click="getPicByid(5)">高清有码</a>
        </div>
      </div>
    </div>

    <!-- 图片显示区域 -->
    <div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img v-lazy="item.src" />
          <div class="img_content">
            <h1 style="color:white;font-size:18px">便踢踢踢踢踢踢</h1>
            <span style="color:white">neiongggddgngggddgaga哈neionngggddgaga哈neionngggddgaga哈neionaga哈neionggg</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"; // 建了lib文件夹，存放mui相关文件

export default {
  data() {
    return {
      list: [
        {
          id: 1,
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3753912988,4185946983&fm=26&gp=0.jpg"
        },
        {
          id: 2,
          src:
            " https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=440038702,167770921&fm=26&gp=0.jpg"
        },
        {
          id: 3,
          src:
            " https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1713171364,3482066240&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  activated() {},
  methods:{
    getPicByid(id){
      console.log(id);
      
    }
  }
};
</script>
<style scoped>
* {
  touch-action: pan-y;
}

ul li img[lazy="loading"] {
  width: 100%;
  height: 100;
  margin: auto;
  background-color: blue;
}

img {
  border: 0;
  width: 100%;
  vertical-align: middle;
}

ul {
  list-style: none;
  margin: 0px;
  padding: 0px 10px;
}
ul li {
  box-shadow: 0 0 9px 1px #999;
  padding: 0px 0px;
  margin: 10px 0px;
  position: relative;
}
.mui-slider {
  position: relative;
  z-index: 0;
  overflow: hidden;
  width: 100%;
}

.img_content{
  position:absolute;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  max-height: 84px;
}

</style>
