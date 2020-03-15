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
          @click="getPicByType(0)"
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >全部</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html" @click="getPicByType(1)">清纯美女</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html" @click="getPicByType(2)">极品诱惑</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html" @click="getPicByType(3)">大胸长腿</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html" @click="getPicByType(4)">国产自拍</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html" @click="getPicByType(5)">高清无码</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html" @click="getPicByType(6)">高清有码</a>
        </div>
      </div>
    </div>

    <!-- 图片显示区域 -->
    <div>
      <ul>
        <li @click="goPictureDetailPage(item)" v-for="(item,index) in Imglist" :key="index">
          <img v-lazy="item.url" />
          <div class="img_content">
            <h1 style="color:white;font-size:14px">{{item.title}}</h1>
            <span style="color:white;font-size:12px">{{item.content}}</span>
          </div>
        </li>
      </ul>
    </div>

    <!-- 下拉刷新区域 -->
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"; // 建了lib文件夹，存放mui相关文件

export default {
  data() {
    return {
      index:1,
      Imglist: [
      ]
    };
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  created() {
    this.getPicByType(0);
  },
  methods:{

    getPicByType(type){  //获取分类信息
      var _this=this;
      this.axios('/share/web/getSharePagesByType',{
        params:{
          page:this.index,
          type:type
        }
      }).then(resp=>{
        console.log(resp);
        if (resp && resp.status===200) {
            _this.Imglist=resp.data;
        }
      })
    },

    // 路由传递参数
      goPictureDetailPage(item){
        this.$router.push({name:'pictureDetail',params: {item:item}})
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
  padding-bottom: 5px;
  padding-left: 3px;
}

</style>
