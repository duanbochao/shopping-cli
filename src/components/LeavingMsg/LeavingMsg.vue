<template>
  <div class="ls_container">
    <div class="content">
      <p v-for="(item,index) in msgList" :key="index" class="client_msg">
        <span style="font-size:18px; color:white;margin-right:10px;padding:7px;border-radius: 5%;background-color:#a6d4f2">{{item}}</span>
        <span>
          <img
            style="width:50px;height:50px; border-radius: 50%; border:2px solid gray"
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3488821615,2823821981&fm=26&gp=0.jpg"
          />
        </span>
      </p>
    </div>
    <div class="sendMsg">
      <input type="text" placeholder="请输入要发送的内容..." v-model="content" />
      <mt-button type="primary" style="margin-left:5px" @click="sendMsg" :disabled="content===''">发送</mt-button>
    </div>
  </div>
</template>
<script>
import "../../lib/sockjs";
import "../../lib/stomp";

export default {
  data() {
    return {
      content: "",
      msgList: [],
      sendButton: true,
      stompClient: null
    };
  },
  created() {
    this.getToken();
  },
  methods: {
    getToken() {
      var _this = this;
      var username = JSON.parse(window.localStorage.getItem("username"));
      var password = JSON.parse(window.localStorage.getItem("password"));

      if (username != null && password != null) {
        _this
          .postRequest("/home/login", {
            username: username,
            password: password
          })
          .then(resp => {
            _this.$store.dispatch("connect");
          });
      } else {
        this.axios.post("/home/lunbo/web/addTouristName").then(resp => {
          if (resp && resp.status === 200) {
            window.localStorage.setItem(
              "username",
              JSON.stringify(resp.data.username)
            );
            window.localStorage.setItem(
              "password",
              JSON.stringify(resp.data.password)
            );
            window.localStorage.setItem(
              "userface",
              JSON.stringify(resp.data.userface)
            );
            this.getToken();
          }
        });
      }
    },
    //发送数据
    sendMsg() {
        this.msgList.push(this.content);
      this.$store.state.stomp.send(
        "/chat",
        {},
        JSON.stringify({ to: "duanbochao", content: this.content,userface:"https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3488821615,2823821981&fm=26&gp=0.jpg" })
      );
      console.log(this.content);
      this.content = "";
    }
  }
};
</script>
<style scoped>
.ls_container {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 43px;
  bottom: 150px;
}
.content {
  width: 98%;
  height: 100%;
  margin-left: 1%;
  border: 2px solid rgb(186, 186, 245);
  overflow-y:auto;
}
.sendMsg {
  padding: 22px 7px;
  display: flex;
  justify-content: space-between;
  width: 100%;

}

.client_msg{
  display: flex;
  justify-content: flex-end;
  align-items: center;
 
}
</style>
