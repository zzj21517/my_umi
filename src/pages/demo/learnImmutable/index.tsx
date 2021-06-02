/*
 * @Author: your name
 * @Date: 2021-02-13 17:50:05
 * @LastEditTime: 2021-02-13 19:02:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnImmutable\index.tsx
 */

import React, { useState, useEffect } from 'react'
import { fromJS, isKeyed } from 'immutable'
export default function LearnImmutable() {
    useEffect(() => {
        let foo = fromJS({ a: { b: 1 } })
        // console.log(foo, 'foo', foo.getIn(['a','b']))
        let bar = { a: 10, b: [10, 20, 30], c: 40, d: 10, e: [10, 20, 30], f: { g: 10, h: { i: 20 } } }
        let demo = fromJS(bar, (key, value, path) => {
            console.log(isKeyed(key), `key=${key}`, `value=${value}`, `path=${path}`)
        })
    }, [])
    return (
        <div>

        </div>
    )
}

