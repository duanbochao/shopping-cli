<template>
  <div class="lunbotu">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgList" :key="index">
        <img :src="item.img" :class="{'isfull':isfull}" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  activated() {},
  props:["imgList","isfull"]
};
</script>
<style scoped>
.mint-swipe {
  height: 220px;
  padding-top: 5px;
}

img {
     height: 100%;
}

.isfull{
     width: 100%;
}
</style>
