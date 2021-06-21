/*
 * @Author: your name
 * @Date: 2021-06-18 15:50:17
 * @LastEditTime: 2021-06-21 22:31:02
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

// 快速排序
function quickSort(list: Array<number> = []): Array<number> {
    if (list.length <= 1) {
        return list
    }
    let mid = list.splice(list.length - 1, 1)[0]
    console.log(mid)
    let left: Array<number> = [], right: Array<number> = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < mid) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }
    return [...quickSort(left).concat(mid), ...quickSort(right)]
}

// 归并排序
function revertSort(list: Array<number> = []) {
    // debugger;
    if (list.length <= 1) {
        return list 
    }
    let midIndex = Math.floor((list.length) / 2)
    let leftArr = list.splice(0, midIndex)
    let rightArr = list.splice(0)
    return mergeSort(revertSort(leftArr), revertSort(rightArr))
}

function mergeSort(left: Array<number> = [], right: Array<number> = []) {
    console.log(left.toString(),right.toString(),'顺序')
    let result: Array<number> = []
    while (left.length && right.length) {
        if (left[0] >= right[0]) {
            console.log(right)
            result.push(right.splice(0, 1)[0])
        } else {
            result.push(left.splice(0, 1)[0])
        }
    }
    while (left.length) {
        result = result.concat(left.splice(0))
    }
    while (right.length) {
        result = result.concat(right.splice(0))
    }
    return result
}

export default function index() {
    useEffect(() => {
        // console.log(bubbleSort([3, 5, 1, 4, 8, 6]))
        // console.log(coutSort([3, 5, 1, 4, 8, 6]))
        // console.log(quickSort([3, 5, 1, 4, 8, 6]))
        console.log(revertSort([3, 5, 1, 4, 8, 6]))
    }, [])
    return (
        <div>
            排序算法:
            1.冒泡排序O(n*n)
            2.计数排序O(n+k)
            3.快速排序O(nlogn)
            4.归并排序O(nlogn)
            5.插入排序O(n*n)
            6.选择排序O(n*n)
        </div>
    )
}
