// http://eslint.org/docs/user-guide/configuring
module.exports  = {
     //此项是用来告诉eslint找当前配置文件不能往父级查找
    "root": true,
     //此项指定环境的全局变量，下面的配置指定为浏览器环境  （安卓环境 / ios环境）
    "env": {
        browser: true,
    },
    // "off" -> 0 关闭规则
    // "warn" -> 1 开启警告规则
    //"error" -> 2 开启错误规则
    "rules":{
        // 禁止条件表达式中出现赋值操作符
        "no-cond-assign":2,
    }
}