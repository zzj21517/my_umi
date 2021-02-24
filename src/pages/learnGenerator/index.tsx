/*
 * @Author: your name
 * @Date: 2021-02-23 21:38:48
 * @LastEditTime: 2021-02-24 11:36:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnGenerator\index.tsx
 */

import React, { Component } from 'react'

export default class LearnGenerator extends Component {
    componentDidMount() {
        let g = this.gen()
        let result = g.next();
        let res=(result.value as Promise<boolean>).then(res => {
            return res
        })
        console.log(res,'res')
        res.then(data => {
            console.log(data,'ddd')
            g.next({value:1})
        })
    }

    fn(resolve: Function, reject: Function) {
        setTimeout(() => {
            resolve({name:'zzj'})
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

