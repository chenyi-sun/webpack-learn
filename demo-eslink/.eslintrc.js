module.exports = {
    "env": {
        "node": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "no-useless-escape": "off",
        "no-const-assign": "off",//不准更改const固定变量的值
        "no-multiple-empty-lines": [
            "error"
            , {"max": 2}],//不准空行多于2行
        "no-use-before-define": "error",//不可以使用未定义的变量，必须先定义再使用,
        "no-var": "error",//不可以使用var，只能使用let,const变量
        "camelcase": "error",//强制驼峰命名
    },
    "globals":{
        "document": true
    }
};
