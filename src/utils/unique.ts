/*
 * @Author: zzj
 * @Date: 2021-01-19 14:34:15
 * @LastEditTime: 2021-01-19 16:49:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/unique.ts
 */

/**
 * @description:数组去重
 * @param {*}
 * @return {*}
 */

//  1.双层循环
// 如果res中有arr中的值，则退出res循环,如果都不等，则说明元素唯一，这时候j的值就会等于res的长度，根据这个特性，将值添加进res
// function unique(arr: Array<any>) {
//     let res = []
//     for (let i = 0; i < arr.length; i++) {
//         let j = 0
//         for (; j < res.length; j++) {
//             if (arr[i] === res[j]) {
//                 break;
//             }
//         }
//         if (j = res.length) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// indexOf方式
// function unique(arr: Array<any>) {
//     let res: Array<any> = []
//     for (let i = 0; i < arr.length; i++) {
//         if (res.indexOf(arr[i]) === -1) {
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// 排序后去重
// 原理，比较前后两个是否相等，相同就说明重复，不相同就提交到res
// function unique(arr: Array<any>) {
//     let res: Array<any> = []
//     let sortedArr = arr.concat().sort()
//     let seen
//     for (let i = 0; i < sortedArr.length; i++) {
//         if (!i || sortedArr[i] !== seen) {
//             res.push(sortedArr[i])
//         }
//         seen = sortedArr[i]
//     }
//     return res
// }

// unique API
// 根据参数isSorted判断传入的参数是否排序过，如果为true，就判断相邻元素是否相等，否则，使用indexOf判断
// function unique(arr: Array<any>, isSorted: Boolean) {
//     let res: Array<any> = []
//     let seen
//     for (let i = 0; i < arr.length; i++) {
//         if (isSorted) {
//             if (!i || arr[i] !== seen) {
//                 res.push(arr[i])
//             }
//             seen = arr[i]
//         } else {
//             if (res.indexOf(arr[i]) === -1) {
//                 res.push(arr[i])
//             }
//         }
//     }

//     return res
// }

// filter方法

// es6