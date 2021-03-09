/*
 * @Author: your name
 * @Date: 2021-01-13 21:20:10
 * @LastEditTime: 2021-03-09 09:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnRxjs\index.tsx
 */
import React, { Component } from 'react';
import { Tabs } from 'antd';
import { fromEvent, interval, timer, of, from, Subject } from 'rxjs';
import {
  switchMap,
  take,
  map,
  combineAll,
  zip,
  scan,
  mapTo,
  throttleTime,
} from 'rxjs/operators';
import moment from 'moment';
export default class LearnRxJs extends Component {
  constructor(props: any) {
    super(props);
  }
  state = {};
  componentDidMount() {
    // let button = document.querySelector('.ant-tabs-nav-wrap')
    // let click$ = fromEvent(button!, 'click')
    // click$.pipe(
    //     map(e => {
    //         console.log(e, 'e', e.currentTarget)
    //         return e.currentTarget
    //     })
    // ).subscribe(val => {
    //     console.log(val)
    // })
    this.rxjs1();
  }

  rxjs1() {
    console.log('rxjs1');
    var button = document.querySelector('.btnzzj');
    console.log(button, 'bbb');
    // button?.addEventListener('click', () => {
    //     console.log('clicked!')
    // })
    fromEvent(button!, 'click')
      .pipe(
        throttleTime(1000),
        map(event => event.clientX),
        scan((count, value, index) => {
          console.log(count, value, index);
          return count + 1;
        }, 0),
      )
      .subscribe(res => {
        console.log('clicked', res);
      });
  }
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Tab 1" key="1">
            1
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 2" key="2">
            2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Tab 3" key="3">
            3
          </Tabs.TabPane>
        </Tabs>

        <button className="btnzzj">zzzz</button>
      </div>
    );
  }
}
