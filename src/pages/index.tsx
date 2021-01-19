/*
 * @Author: your name
 * @Date: 2021-01-19 19:48:17
 * @LastEditTime: 2021-01-19 19:48:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\index.tsx
 */
import React, { Component } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import { debounce } from '@/utils/debounce'
import styles from './index.less'
let count = 0
class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/game">游戏</Link>
                <br />
                <Link to="/process">进度条</Link>
                <br />
                <Link to="/componentLearn">组件学习</Link>
                <br />
                <Link to="/myTable">table学习</Link>
                <br/>
                <Link to="/learnRxjs">Rxjs学习</Link>
                <br />
                <Link to='/debounce' >debounce学习</Link>
            </div>
        );
    }
}

export default connect()(Index)
