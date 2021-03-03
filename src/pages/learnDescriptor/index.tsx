/*
 * @Author: your name
 * @Date: 2021-03-02 15:36:45
 * @LastEditTime: 2021-03-02 17:21:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnDescriptor/index.tsx
 */
import React, { Component } from 'react'
import { log, autobind } from '@/utils/decorator'
export default class LearnDescriptor extends Component {
    greeting = 'zzj'
    componentDidMount() {
        console.log(this)
        // this.fn()
    }
    // @log('一个方法')
    @autobind
    fn() {
        console.log('哈哈哈', this)
        return 'Hello,' + this.greeting
    }
    render() {
        return (
            <button onClick={this.fn} >button</button>
        )
    }
}


