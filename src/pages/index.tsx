/*
 * @Author: your name
 * @Date: 2021-01-19 19:48:17
 * @LastEditTime: 2021-05-31 10:28:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\index.tsx
 */
import React, { Component } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import { shallowCopy } from '@/utils/objectCopy'
import { flatten } from '@/utils/flatten'
import { debounce } from '@/utils/debounce'
import styles from './index.less'
let count = 0
class Index extends Component {
    componentDidMount() {
    }
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
                <Link to="/learnRxjs">Rxjs学习</Link>
                <br />
                <Link to='/debounce' >debounce学习</Link>
                <br />
                <Link to='/shihang' >shihang</Link>
                <br />
                <Link to='/learnLinkedList' >学习链表</Link>
                <br />
                <Link to='/learnHook' >学习Hook</Link>
                <br />
                <Link to='/learnImmutable'>学习不可变数据（immudiable data）</Link>
                <br />
                <Link to='/learnTs' >学习typescript</Link>

                <br />
                <Link to="/counter">counter</Link>

                <br />
                <Link to='/learnPromise' >learnPromise</Link>

                <br />
                <Link to='/learnGenerator' >learnGenerator</Link>

                <br />
                <Link to='/learnDescriptor' >学习descriptor</Link>

                <br />
                <Link to='/learnSnap' >学习snap.svg</Link>

                <br />
                <Link to='/learnCanvas' >学习canvas</Link>

                <br />
                <Link to='/learnMinio' >学习minio</Link>

                <br />
                <Link to='/pipeUpload' >学习文件切片上传</Link>
            </div>
        );
    }
}

export default connect()(Index)
