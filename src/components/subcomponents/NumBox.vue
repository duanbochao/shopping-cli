<template>
  <div class="numbox">
    <div class="mui-numbox">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input class="mui-input-numbox" type="number" readonly ref="numbox" :id="id" :value="count" @change="CountChange" />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js"; // 建了lib文件夹，存放mui相关文件
export default {
  data() {
    return {};
  },
  methods: {
    CountChange() {
        var info={
            count:this.$refs.numbox.value,
            id:this.id
        }
      this.$emit("countChange",info);
    }
  },
  mounted() {
    mui(".mui-numbox").numbox();
  },
  props:['count','id']
};
</script>
<style scoped>
.mui-numbox {
  height: 30px;
}
</style>
