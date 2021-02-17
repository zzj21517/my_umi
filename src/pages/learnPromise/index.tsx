/*
 * @Author: your name
 * @Date: 2021-02-17 20:29:14
 * @LastEditTime: 2021-02-17 20:34:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnPromise\index.tsx
 */

import React, { Component } from 'react'
import { CustomizePromise } from '@/utils/customizePromise'
export default class LearnPromise extends Component {
    componentDidMount() {
        new CustomizePromise().then()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}

