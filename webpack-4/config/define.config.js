const baseconfig = {
    isHash: true, //后缀是否带哈希
    whitesapce: false, //页面是否去空格
    htmlcache: false, //打包的时候页面更新才回去重新生成页面，否则不生成
    htmlJsPath: './', //页面引用的代码前缀设置 ./script/index.js ./就这个前缀 
};
module.exports = baseconfig;