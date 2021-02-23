/*
 * @Author: your name
 * @Date: 2021-02-23 21:38:48
 * @LastEditTime: 2021-02-23 22:27:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnGenerator\index.tsx
 */

import React, { Component } from 'react'

export default class LearnGenerator extends Component {
    componentDidMount() {
        let g = this.gen()
        let result = g.next();
        (result.value as Promise<boolean>).then(res => {
            return res
        }).then(data => {
            g.next(data)
        })
    }

    fn(resolve: Function, reject: Function) {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    }
    *gen() {
        console.log('start')
        let promise = new Promise(this.fn)
        let result = yield promise
        console.log(result, 'end')
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

