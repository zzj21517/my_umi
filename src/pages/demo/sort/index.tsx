/*
 * @Author: your name
 * @Date: 2021-06-18 15:50:17
 * @LastEditTime: 2021-06-18 17:03:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/demo/sort/index.tsx
 */

import React, { useState, useEffect } from 'react'
// 冒泡排序
function bubbleSort(list: Array<number> = []) {
    if (list.length <= 1) {
        return list
    }
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - i - 1; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }
    return list
}

// 计数排序
function coutSort(list: Array<number> = []) {
    if (list.length <= 1) {
        return list
    }
    let newArr: Array<number> = []
    for (let i = 0; i < list.length; i++) {
        newArr[list[i]] = (newArr[list[i]] || 0) + 1
    }
    let res: Array<number> = []
    for (let j = 0; j < newArr.length; j++) {
        if (newArr[j]) {
            res = res.concat(new Array(newArr[j]).fill(j))
        }
    }
    return res
}
export default function index() {
    useEffect(() => {
        console.log(bubbleSort([3, 5, 1, 4, 8, 6]))
        console.log(coutSort([3, 5, 1, 4, 8, 6]))
    }, [])
    return (
        <div>
            排序算法:
            1.冒泡排序O(n*n)
        </div>
    )
}
