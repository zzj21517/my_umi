/*
 * @Author: your name
 * @Date: 2021-02-15 22:03:03
 * @LastEditTime: 2021-02-16 12:47:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\counter\index.tsx
 */

import React, { Component } from 'react'

export default class Counter extends Component<{ name: 'zzj' }, { count: number }> {
    constructor(props: { name: "zzj" } | Readonly<{ name: "zzj" }>) {
        super(props)
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        document.title = `You clicked ${this.state.count} times`
    }
    componentDidUpdate() {
        document.title = `You clicked ${this.state.count} times`
    }

    handleClick() {
        this.setState(state => ({
            count: state.count + 1
        }))
    }
    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={this.handleClick} >click me</button>
            </div>
        )
    }
}

