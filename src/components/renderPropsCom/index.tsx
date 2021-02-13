/*
 * @Author: your name
 * @Date: 2021-02-11 14:41:23
 * @LastEditTime: 2021-02-13 11:43:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\components\renderPropsCom\index.tsx
 */

import React, { Component } from 'react'

export default class RenderPropsCom extends Component<{ render: Function }> {
    state = {
        loading: false,
        data: [],
    }
    componentDidMount() {
        this.getData()
    }
    getData = () => {
        this.setState({
            loading: true
        })
        setTimeout(() => {
            this.setState({
                loading: false,
                data: ['zzj', 'cy', 'zsq', 'nwz']
            })
        }, 1000)
    }
    render() {
        const { loading, data } = this.state
        const { render } = this.props
        return (
            <div>
                {
                    loading ? <div>loading ...</div> : data.map(item => render(item))
                }
            </div>
        )
    }
}
