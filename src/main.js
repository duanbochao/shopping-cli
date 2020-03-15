// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'
import  './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
import VuePreview from 'vue-preview'
import store from './utils/store'


Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})




Vue.use(Mint);
//axios
import vueAxios from 'vue-axios'
import axios from 'axios'
import moment from '_moment@2.24.0@moment'
import { from } from '_array-flatten@2.1.2@array-flatten'
Vue.use(vueAxios, axios)

//全局时间过滤器
Vue.filter('dateFormat', function (value,pattern="YYYY-MM-DD HH:mm:ss") {
  // 返回处理后的值
  return  moment(value).format(pattern);
})

Vue.filter('filterHtml',{
  read:function(val){//val就是以获取的msg的值
      return val.replace(/<[^>]*>/g);//去除文字的<...></...>标签
  },
  write:function(){
      return val;
  }
});

Vue.config.productionTip = false
Vue.use(Mint);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
