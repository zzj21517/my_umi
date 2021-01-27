/*
 * @Author: zzj
 * @Date: 2021-01-26 17:16:29
 * @LastEditTime: 2021-01-26 17:35:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/flatten.ts
 */


export function flatten(arr: Array<any>) {
    let newArr: Array<any> = []
    for (let key in arr) {
        if (arr.hasOwnProperty(key)) {
            if (arr[key] instanceof Array) {
                newArr = [...newArr, ...flatten(arr[key])]
            } else {
                newArr = [...newArr, arr[key]]
            }
        }
    }
    return newArr
}
