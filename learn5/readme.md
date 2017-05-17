在3的基础上将less,css单独打包<br/>
在4的基础上将public的index.html自动生成<br/>
在4的基础上添加了css,sass的前缀补全

编译es6<br/>
生成静态文件<br/>
热加载,自动刷新<br/>
编译sass.css<br/>
<br/>
<br/>
<br/>
=================
-npm install<br/>
-npm run dev <br/>
(生产环境)
-webpack<br/>
(打包生成页面) <br/>
<br/>
<br/>
<br/>
==================
目录结构<br/>
-app<br/>
----依赖的js和less<br/>
-public<br/>
----打包好的index和js,css填充在bundle.js里面<br/>
-<br/>
<br/>
<br/>
==================
dev构建所依赖的几个文件<br/>
-public 下index.html<br/>
-app 下Main.js,greeter.js<br/>
-<br/>
打包所依赖的文件<br/>
-public 下index.html<br/>
-Public 下的bundle.js<br/>
