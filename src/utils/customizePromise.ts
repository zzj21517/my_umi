/*
 * @Author: your name
 * @Date: 2021-02-17 20:29:43
 * @LastEditTime: 2021-02-17 20:34:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\utils\customizePromise.ts
 */

export class CustomizePromise {
    constructor() {
        setTimeout(() => {
            console.log('a')
        })
    }
    then() {
        console.log('then')
    }
}
