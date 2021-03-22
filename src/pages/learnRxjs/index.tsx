/*
 * @Author: your name
 * @Date: 2021-03-17 16:08:27
 * @LastEditTime: 2021-03-22 22:22:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnRxjs/index.tsx
 */
import React, { useState, useEffect } from 'react'
import { fromEvent, interval, combineLatest, timer } from 'rxjs'
import { mapTo, scan, switchMapTo, takeUntil, tap, startWith, map, switchMap, takeWhile } from 'rxjs/operators'
export default function index() {
  useEffect(() => {
    let inputDom = document.getElementById('input')
    let updateDom = document.getElementById('update')
    function compareNum(cur: number, old: number) {
      return cur > old ? 1 : -1
    }
    function takeUntilFunc(cur: number, old: number) {
      return cur > old ? (val: number) => val >= old : (val: number) => val <= old
    }
    let subscription = (function (old) {
      fromEvent(updateDom!, 'click').pipe(
        map(_ => (inputDom as any).value),
        switchMap(cur => {
          return timer(0, 20).pipe(
            mapTo(compareNum(cur, old)),
            startWith(old),
            scan((prev, curv) => prev + curv),
            takeWhile(takeUntilFunc(cur, old))
          )
        }),
        tap(v => (old = v)),
        startWith(old)
      ).subscribe(res => {
        console.log(res)
      })
    })(0)
  }, [])
  return (
    <div>
      <input id='input' type="text" />
      <button id='update' >更新</button>
    </div>
  )
}
