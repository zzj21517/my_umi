/*
 * @Author: zzj
 * @Date: 2021-01-19 09:10:56
 * @LastEditTime: 2021-01-19 11:49:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/throttle.ts
 */

/**
 * @description:一个节流函数 一个持续触发的事件，每隔一段时间执行一次事件
 * @param {Function} fn 事件函数
 * @param {*} wait
 * @return {*}
 */
// 时间戳版本
// function throttle(fn: Function, wait: number) {
//     var context, args;
//     var previos = 0
//     return function (this: ThisType<any>) {
//         let now = +new Date()
//         context = this
//         args = arguments
//         if (now - previos > wait) {
//             fn.apply(context, args)
//             previos = now
//         }
//     }
// }

// 定时器版本
// function thorttle(fn: Function, wait: number) {
//     var context: ThisType<any>, args: IArguments;
//     var timeout: number | null = null
//     return function (this: ThisType<any>) {
//         context = this
//         args = arguments
//         if (!timeout) {
//             timeout = window.setTimeout(() => {
//                 fn.apply(context, args)
//                 timeout = null
//             }, wait)
//         }
//     }
// }

// 第一种事件会立刻执行，第二种事件会在   n秒后第一次执行
// 第一种事件停止触发后没有办法在执行事件，第二种事件停止触发还会执行一次

// 双剑合璧

function throttle(fn: Function, wait: number) {
    var timeout: number | null, context: ThisType<any>, args: IArguments, result;
    var previous: number = 0

    var later = function () {
        previous = +new Date()
        timeout = null
        fn.apply(context, args)
    }

    var throttled = function (this: ThisType<any>) {
        console.log('进入！')
        var now = +new Date()
        // 下次触发 fn 剩余的时间
        var remaining = wait - (now - previous)
        context = this
        args = arguments
        // 如果没有剩余的时间了或者你改了系统时间
        if (remaining <0 || remaining > wait) {
            console.log('时间戳',now,previous,wait)
            if (timeout) {
                clearTimeout(timeout)
                timeout = null
            }
            previous = now
            fn.apply(context, args)
        } else if (!timeout) {
            console.log('执行')
            timeout = window.setTimeout(later, remaining)
        }
    }
    return throttled
}

export { throttle }