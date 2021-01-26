/*
 * @Author: zzj
 * @Date: 2021-01-26 15:49:53
 * @LastEditTime: 2021-01-26 17:01:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/utils/shallowCopy.js
 */

interface IObj {
  [key: string]: any
}

/**
 * @description:实现一个浅拷贝 
 * @param {Object} obj 需要浅拷贝的对象，可能是一个数组，或者对象
 * @return {Object} 返回新的对象 
 */
export function shallowCopy(obj: IObj) {
  if (typeof obj !== 'object') {
    return obj
  }
  //   根据对象类型创建数组或者对象
  let newObj: IObj = obj instanceof Array ? [] : {}
  for (let i in obj) {
    console.log(typeof i, 'i')
    if (obj.hasOwnProperty(i)) {
      newObj[i] = obj[i]
    }
  }
  return newObj
}


export function deepCopy(obj: IObj) {
  if (typeof obj !== 'object') {
    return obj
  }
  //   根据对象类型创建数组或者对象
  let newObj: IObj = obj instanceof Array ? [] : {}
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      newObj[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i]
    }
  }
  return newObj
}
