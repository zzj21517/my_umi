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
                <br />
                <Link to='/debounce' >debounce学习</Link>
            </div>
        );
    }
}

export default connect()(Index)
