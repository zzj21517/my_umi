/*
 * @Author: your name
 * @Date: 2021-06-23 10:16:19
 * @LastEditTime: 2021-06-24 14:39:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/demo/sort/index.tsx
 */
import React, { useState, useEffect } from 'react'

// 冒泡排序
function bubbleSort(list: Array<number> = []) {
    if (list.length <= 1) {
        return
    }
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                [list[j], list[j + 1]] = [list[j + 1], list[j]]
            }
        }
    }
    return list
}
// 计数排序
function countSort(list: Array<number> = []) {
    if (list.length <= 1) {
        return list
    }
    let min = list[0], max = list[0];
    for (let i = 0; i < list.length; i++) {
        if (list[i] < min) {
            min = list[i]
        }
        if (list[i] > max) {
            max = list[i]
        }
    }
    let newLen = max - min
    let add = (min < 0 ? -min : 0)
    let newArr = new Array(newLen + 1 + add).fill(0)
    for (let i = 0; i < list.length; i++) {
        console.log(list[i] - min + add, min, add, 'mmmm')
        newArr[list[i] - min + add] += 1
    }
    console.log(newArr, 'newArrr')
    let result = []
    for (let i = 0; i < newArr.length; i++) {
        let temp = newArr[i]
        while (temp) {
            result.push(i - 1 - add)
            temp--
        }
    }
    return result
}

// 快速排序
function fastSort(list: Array<number> = []) {
    if (list.length <= 1) {
        return list
    }
    let left = [], right = []
    let mid = list.splice(list.length - 1, 1)[0]
    for (let i = 0; i < list.length; i++) {
        if (list[i] < mid) {
            left.push(list[i])
        } else {
            right.push(list[i])
        }
    }
    return [...fastSort(left), mid, ...fastSort(right)]
}
// 归并排序
function mergeSort(list: Array<number> = []) {
    if (list.length <= 1) {
        return list
    }
    let midIndex = Math.floor((list.length) / 2)
    let left = list.splice(0, midIndex)
    let right = list.splice(0)
    console.log(left, right, 'eee')
    return merge(mergeSort(left), mergeSort(right))
}
function merge(left: Array<number> = [], right: Array<number> = []) {
    let result = []
    while (left.length && right.length) {
        if (left[0] > right[0]) {
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
//  插入排序
function insertSort(list: Array<number> = []) {
    // debugger;
    if (list.length <= 1) {
        return list
    }
    for (let i = 0; i < list.length; i++) {
        let preIndex = i - 1
        let cur = list[i]
        while (preIndex >= 0 && list[preIndex] > cur) {
            list[preIndex + 1] = list[preIndex]
            preIndex--
        }
        list[preIndex + 1] = cur
    }
    return list
}

// 选择排序
function selectSort(list: Array<number> = []) {
    // debugger;
    if (list.length <= 1) {
        return list
    }
    for (let i = 0; i < list.length-1; i++) {
        let minIndex = i
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] < list[minIndex]) {
                minIndex = j
            }
        }
        [list[i], list[minIndex]] = [list[minIndex], list[i]]
    }
    return list
}
export default function Sort() {
    useEffect(() => {
        // console.log(bubbleSort([2, 9, 3, -1, 8, 3, 6, 2, 1]))
        // console.log(countSort([2, 9, 3, -1, 8, 3, 6, 2, 1]))
        // console.log(fastSort([2, 9, 3, -1, 8, 3, 6, 2, 1]))
        // console.log(mergeSort([2, 9, 3, -1, 8, 3, 6, 2, 1]))
        // console.log(insertSort([2, 9, 3, -1, 8, 3, 6, 2, 1]))
        console.log(selectSort([2, 9, 3, -1, 8, 3, 6, 2, 1]))
    }, [])
    return (
        <div>
            <ul>
                <li>冒泡排序O(n*n)</li>
                <li>计数排序O(n+k)</li>
                <li>快速排序O(nlogn)</li>
                <li>归并排序O(nlogn)</li>
                <li>插入排序O(n*n)</li>
                <li>选择排序O(n*n)</li>
            </ul>
        </div>
    )
}
