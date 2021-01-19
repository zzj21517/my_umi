/*
 * @Author: zzj
 * @Date: 2021-01-18 15:40:21
 * @LastEditTime: 2021-01-19 09:23:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/debounce.ts
 */
/**
 * @description:防抖函数 
 * @param {Function} fn 事件函数
 * @param {Boolean} wait 触发事件的事件间隔
 * @param {Boolean} immediate 是否立即执行
 * @return {*}
 */
// 防抖
function debounce(fn: Function, wait: number, immediate: Boolean) {
  let timeout: number | null = null
  return function (this: any) {
    let context = this
    let args = arguments
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) { //立即执行
      let callNow = !timeout
      if (callNow) {
        fn.apply(context, args)
      }
      timeout = window.setTimeout(() => {
        timeout = null
      }, wait)
    } else {
      timeout = window.setTimeout(() => {
        fn.apply(context, args)
      }, wait)
    }
  }
}

export {
  debounce
}
