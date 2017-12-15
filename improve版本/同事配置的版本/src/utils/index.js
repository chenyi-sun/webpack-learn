/**
 * Created by Struggle on 2017/9/11.
 * 常用方法
 */
'use strict'
const storage = window.localStorage
/**
 * 获取微信用户openid
 * @returns {string}
 */
export function getUserID() {
    return storage.getItem('wx_id') === '{$Think.session.wx_id}' ? '' : storage.getItem('wx_id')
}

export function getToken() {
  return  storage.getItem('token') === '{$Think.session.token}' ? '' : storage.getItem('token')
}

/**
 * 获取url中指定参数的值
 * @param name
 * @returns String
 */
export function getQueryString( name ) {
    if (!name)  return
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    const result = window.location.search.substr(1).match(reg);
    return result ? decodeURI(result[2]) : null;
}


/**
 * 格式化时间
 * @param cFormat 返回日期格式
 * {y}->年,{m}->月,{d}->日,{h}->时,{i}->分,{s}->秒,{a}->星期
 * @param time 传入时间戳，没有默认取当前时间
 * @returns {string}
 */
export function parseTime(cFormat, time ) {
    time = time || new Date()
    const format = cFormat || '{y}-{m}-{d} {h}:{i}'
    let date

    if (typeof time === 'object') {
        date = time
    } else {
        if (('' + time).length === 10) time = parseInt(time) * 1000
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
        let value = formatObj[key]
        if (key === 'a') return ['一', '二', '三', '四', '五', '六', '日'][value - 1]
        if (result.length > 0 && value < 10) {
            value = '0' + value
        }
        return value || 0
    })
    return time_str
}