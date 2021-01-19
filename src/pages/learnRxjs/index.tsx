/*
 * @Author: your name
 * @Date: 2021-01-13 21:20:10
 * @LastEditTime: 2021-01-19 19:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnRxjs\index.tsx
 */
import React, { Component } from 'react'
import { fromEvent } from 'rxjs'
export default class LearnRxJs extends Component {
    componentDidMount() {
        let clicks$ = fromEvent(document, 'click')
        var subs = clicks$.subscribe({
            next: (d) => {
                console.log(d)
            }
        }) 
    }
    render() {
        return (
            <div>
                <button onClick={() => { console.log('点击了') }} >按钮</button>
            </div>
        )
    }
}

