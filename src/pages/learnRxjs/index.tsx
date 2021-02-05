/*
 * @Author: your name
 * @Date: 2021-01-13 21:20:10
 * @LastEditTime: 2021-02-03 16:07:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnRxjs\index.tsx
 */
import React, { Component } from 'react'
import { fromEvent, interval, timer, of, from } from 'rxjs'
import { switchMap, take, map, combineAll, zip, scan } from 'rxjs/operators'
import moment from 'moment'
export default class LearnRxJs extends Component {
    constructor(props: any) {
        super(props)
    }
    state = {
        timeList: [
            '2021/02/01 17:40', '2020-5-1', '2021-1-1'
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

        // this.tick()
        // this.tick1()
        // this.tick2()
        this.tick3()
    }

    tick3 = () => {
        const source = from('hello').pipe(zip(interval(600), (x, y) => {
            console.log(x, y, 'xy')
            return x
        }))
        const example = source.pipe(scan((origin, next) => {
            console.log(origin, next, 'origin,next')
            return origin + next
        }, ''))
        example.subscribe(val => {
            console.log(val)
        })
    }
    tick2 = () => {
        const source = interval(1000).pipe(take(2))
        const example = source.pipe(
            map(val => interval(1000).pipe(map(i => {
                console.log(i)
                return `${i}`
            }), take(5)))
        )

        const combined = example.pipe(combineAll())

        const subscribe = combined.subscribe((val) => {
            console.log(val)
        })
    }
    tick1 = () => {
        const source = timer(0, 5000);
        //switch to new inner observable when source emits, emit items that are emitted
        const example = source.pipe(switchMap(() => interval(500)));
        //output: 0,1,2,3,4,5,6,7,8,9...0,1,2,3,4,5,6,7,8
        const subscribe = example.subscribe(val => console.log(val));
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

