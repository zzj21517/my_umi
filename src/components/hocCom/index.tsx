/*
 * @Author: your name
 * @Date: 2021-02-11 11:40:36
 * @LastEditTime: 2021-02-13 11:45:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\components\hocCom\index.tsx
 */

import React, { Component, ComponentType } from 'react'

export default function ComWithLoading(Com: ComponentType<{ data: Array<string> }>, url: string) {
    class HOCCom extends Component {
        state = {
            data: [],
            loading: false,
        }
        componentDidMount = () => {
            this.getData()
        }
        getData = () => {
            this.setState({
                loading: true
            })
            setTimeout(() => {
                this.setState({
                    loading: false,
                    data: ['zzj', 'cy', 'nwz', 'zsq']
                })
            }, 1000)
        }
        render() {
            const { data, loading } = this.state
            return (
                <div>
                    {
                        loading ? <div>data loading ...</div> : <Com data={data} />
                    }
                </div>
            )
        }
    }
    return HOCCom
}

