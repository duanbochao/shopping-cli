import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    stomp: null,
    count: 0,
    car: JSON.parse(window.localStorage.getItem('car') || '[]')
  },
  mutations: {

    addGoodsToCar(state, goodsInfo) {
      console.log("goodsInfo", goodsInfo);
      var flag = false;
      state.car.some(item => {
        if (item.id === goodsInfo.id) {
          item.count += goodsInfo.count;
          flag = true;
          return true;
        }
      });
      if (!flag) {
        console.log(goodsInfo);
        state.car.push(goodsInfo)
      }

      window.localStorage.setItem('car', JSON.stringify(state.car))
    },

    //更新id值
    updateCount(state, updateInfo) {
      state.car.forEach(item => {
        if (item.id === updateInfo.id) {
          item.count = parseInt(updateInfo.count);
        }
      });
      window.localStorage.setItem('car', JSON.stringify(state.car))
    }


  },
  getters: {
    getCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += parseInt(item.count);
        console.log(c);
      });
      return c;
    },
    getBudegt(state) {

      var sum = 0;
      var total = 0;
      state.car.forEach(item => {
        console.log('item.oldPrice', item);

        sum += parseFloat(item.count * item.price);
        total += parseInt(item.count)
      });
      var budget = {
        sum: sum,
        total: total
      };
      return budget;
    }
  },
  actions: {
    connect(context) {
      context.state.stomp = Stomp.over(new SockJS("/ws/endpointChat"));
      context.state.stomp.connect({}, function (frame) {
        context.state.stomp.subscribe("/user/queue/chat", function (response) {
          console.log("=============",response.body)
        })
      }, failedMsg=> {
        console.log("failedMsg==========")
      })

    }
  }
})