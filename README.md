## 首页设置

>1、安装mintui组件
```
cnpm i mint-ui -S
```
main.js中引入

```
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
```

>2、在App中进行布局

hearder区域、
container区域、
bottom区域

>3、配置底部导航栏

+ 去mui中寻找该底部导航栏（将mui中的dist文件夹复制到项目的src下面，新建一个lib文件夹，dist文件放到lib中，并将dist命名为mui）
 
+ main.js中引入mui的css
```
import  './lib/mui/css/mui.css'
````
+ 将底部导航栏中的图标进行调换，其中购物车图标在拓展图标中，此时main.js中也要引入mui的拓展css样式（注意，引入拓展css则必须将拓展的.ttf文件放到fonts文件夹中，不然的话会报错）

```
import './lib/mui/css/icons-extra.css'
```
+ 创建导航对应的页面，并将其设置为路由导航，同时将路由显示的坑距离头部要设置padding-top:20px


## 改造首页九宫格&&新闻资讯和新闻列表详情
+ 使用mui中的九宫格内容
+ 解决新闻页面中最后一栏显示不全的问题
+ 处理新闻页面中图片大小不一样的问题
+ 新闻页面使用的是mui中的media-list
+ 配置时间格式化的全局配置

```
cnpm install moment -S //安装时间插件
import moment from 'moment'  //main.js中导入

//全局时间过滤器
Vue.filter('dateFormat', function (value,pattern="YYYY-MM-DD HH:mm:ss") {
  // 返回处理后的值
  return  moment(value).format(pattern);
})
```

- 新闻详情页面中图片显示不全的问题，可以将scope去掉同时将img设置为width:100%
- 新闻页面的整体padding:0 5px
- 处理一下video基本设置
```
audio, canvas, progress, video {
    display: inline-block;
    vertical-align: baseline;
    width: 100%;
}
```

## 创建评论组件&&给新闻详情添加该评论组件

>创建评论组件
+ 创建评论组件，在该组件中进行布局调整
+ 发表评论时候获取到文本框中的值要注意不能含有html标签和空格，处理空格使用v-mode.trim="",处理html标签则使用正则的方式，方法如下：
```
var commentContent = this.commentContent
        .replace(/<(style|script|iframe)[^>]*?>[\s\S]+?<\/\1\s*>/gi, "")
        .replace(/<[^>]+?>/g, "")
        .replace(/\s+/g, " ")
        .replace(/ /g, " ")
        .replace(/>/g, " ");

```
+ 查询评论内容的时候要注意防止返回的结果覆盖问题，如果。可以通过数组追加的方式来避免以后多次查询出现覆盖问题，可以使用concat进行数组追加，如：
```
.then(resp => {
          if (resp && resp.data.state === 1) {
            _this.commentList = _this.commentList.concat(resp.data.message); //数组追加
          }
```

+ 发表评论后如果将要发表的评论添加到数据库然后在从新刷新数据库获得自己的发表的评论，这样是比较消耗服务器，我们采用向原有数据的前面添加自己的内容的形式来造作，如：
```
 if (resp && resp.data.state === 1) {
            //创建追加的格式
            var cmt = {
              id: 9999,
              username: "匿名用户",
              commentContent: this.commentContent,
              commentDate: new Date()
            };

            this.commentList.unshift(cmt); //追加到原有的前面

           //省略其他 ...
 }
```

+ 其他的懒加载、成功后的提示自己看着引入就行


>新闻详情添加该评论组件
+ 引入该组件
```
i mport comment from '../subcomponents/Comment'

```
+ 注册该组件
```
  components:{
    comment
  }
```
+ 使用该组件
```
    <!-- 发表评论区域 -->
    <comment></comment>
```