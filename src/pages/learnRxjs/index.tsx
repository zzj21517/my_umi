/*
 * @Author: your name
 * @Date: 2021-03-17 16:08:27
 * @LastEditTime: 2021-03-17 17:31:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnRxjs/index.tsx
 */
import React, { useState, useEffect } from 'react'
import { fromEvent, interval, combineLatest } from 'rxjs'
import { mapTo, scan, switchMapTo, takeUntil, tap, startWith, map } from 'rxjs/operators'
export default function index() {
    useEffect(() => {
        let btnStop = document.getElementById('btnStop')
        let btnEnlarge = document.getElementById('btnEnlarge')
        let btnAdd = document.getElementById('btnAdd')
        let btnReduce = document.getElementById('btnReduce')
        let stop$ = interval(2000).pipe(takeUntil(fromEvent(btnStop!, 'click')))
        let start = fromEvent(btnEnlarge!, 'click').pipe(
            switchMapTo(stop$), scan((prev, cur) => prev + 1, 0)
        )
        let add = fromEvent(btnAdd!, 'click').pipe(mapTo(1), startWith(0), scan((prev, cur) => prev + cur, 0))
        let reduce = fromEvent(btnReduce!, 'click').pipe(mapTo(-1), startWith(0), scan((prev, cur) => prev + cur, 0))
        combineLatest([start, add, reduce])
            // .pipe(map(([a, b, c]: Array<number>) => a + b + c))
            .subscribe(res => {
                console.log(res)
            })
    }, [])
    return (
        <div>
            <button id='btnStop' >停止</button>
            <button id='btnEnlarge'>放大</button>
            <button id='btnAdd'>++</button>
            <button id='btnReduce'>--</button>
        </div>
    )
}
