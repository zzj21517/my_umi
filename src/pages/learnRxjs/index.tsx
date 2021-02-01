/*
 * @Author: your name
 * @Date: 2021-01-13 21:20:10
 * @LastEditTime: 2021-02-01 17:38:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnRxjs\index.tsx
 */
import React, { Component } from 'react'
import { fromEvent, interval } from 'rxjs'
import moment from 'moment'
export default class LearnRxJs extends Component {
    constructor(props: any) {
        super(props)
    }
    state = {
        timeList: [
            '2020-12-28', '2020-5-1', '2021-1-1'
        ],
        diff: []
    }
    componentDidMount() {
        // let clicks$ = fromEvent(document, 'click')
        // var subs = clicks$.subscribe({
        //     next: (d) => {
        //         console.log(d)
        //     }
        // })

        this.tick()
    }

    tick = () => {
        let { timeList } = this.state
        interval(1000).subscribe(() => {
            console.log('触发了')
            let diff: Array<string> = []
            timeList.map((item, index) => {
                diff[index] = moment(item).fromNow()
            })
            this.setState({
                diff
            })
        })
    }
    render() {
        const { timeList, diff } = this.state
        return (
            <div>
                <button onClick={() => { console.log('点击了') }} >按钮</button>

                {diff.map(time => (
                    <div>{time}</div>
                ))}
            </div>
        )
    }
}

