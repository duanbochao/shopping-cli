<template>
  <div id="app">
    <!-- 头部导航栏 -->
    <mt-header fixed title="百果园商超便利店">
      <a slot="left" @click.prevent="back" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>

    <!-- 内容显示区域 -->
    <div class="container">
      <router-view />
    </div>

    <!-- 底部导航栏 -->
    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item-my" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>

      <router-link class="mui-tab-item-my" to="/shop">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="shopCar">{{this.$store.getters.getCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>

      <router-link class="mui-tab-item-my" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>

      <router-link class="mui-tab-item-my" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      disabled: true,
      flag: true
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newValue) {
      if (newValue == "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
</script>

<style>
.container {
  padding-top: 40px;
  padding-bottom: 50px;
}

/*  该类名解决tabbar无法切换的问题*/
.mui-bar-tab.mui-tab-item-my.mui-active {
  color: #007aff;
}
.mui-bar-tab .mui-tab-item-my {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-my .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-my .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mui-active {
  color: red;
}

/**缩略图样式更改 */
.my-gallery {
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 100%;
  text-align: left;
}

.preview figure {
  float: left;
  width: 30%;
  height: calc(30vw - 0px);
  margin: 1.5%;
}

.preview figure img {
  width: 100%;
  height: 100%;
  box-shadow: 0 0 9px 1px #999;
}
</style>
