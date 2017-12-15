/**
 * 接口
 */
'use strict'

import {$post, $get } from '@/utils/pretreatment'

/**
 * 首页接口
 * @param param
 * @returns {*}  string
 */
export const getIndex = param => {
    return $post('index/Index/index',param)
}

export const getJsapiSign = param => {
    return 'xxx'
}