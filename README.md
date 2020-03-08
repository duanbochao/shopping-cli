##首页设置

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


