/**
 * Created by Struggle on 2017/9/11.
 * 微信jssdk 配置文件
 */

'use strict'
import Vue from 'vue'
import { WechatPlugin } from 'vux'
import { getJsapiSign } from "./api/index";

Vue.use(WechatPlugin)
const url = window.location.origin + window.location.pathname + window.location.search
/*getJsapiSign({
    url: url
}).then((data) => {
    /!**
     * 微信js-sdk配置
     *!/
    Vue.wechat.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: data.data.appId, // 必填，公众号的唯一标识
        timestamp: data.data.timestamp, // 必填，生成签名的时间戳
        nonceStr: data.data.nonceStr, // 必填，生成签名的随机串
        signature: data.data.signature,// 必填，签名，见附录1
        jsApiList: [
            'openLocation',
            'getLocation',
            'chooseImage',
            'uploadImage',
            'hideMenuItems'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    })
})*/
/**
 * 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
 */
Vue.wechat.ready(function () {
    Vue.wechat.hideMenuItems({
        menuList: [
            'menuItem:share:appMessage',//发送给朋友
            'menuItem:share:timeline',//分享到朋友圈
            'menuItem:share:qq',//分享到QQ
            'menuItem:share:weiboApp',//分享到Weibo
            'menuItem:share:facebook',//分享到FB
            'menuItem:share:QZone',//分享到
        ]
    })
})

