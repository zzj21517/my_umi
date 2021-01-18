import React, { Component } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';
import { debounce } from '@/utils/debounce'
import styles from './index.less'
let count = 0
class Index extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.move = debounce(this.move,1000, true)
    }
    move = (dom: Element) => {
        console.log('move')
        count++
        dom.innerHTML = String(count)
    }
    componentDidMount() {
        let container = document.querySelector('#container')
        container?.addEventListener('mousemove', () => this.move(container!))
        console.log(container, 'ccc')
    }
    render() {
        return (
            <div>

                <div id='container' className={styles.container}></div>
            </div>
        );
    }
}

export default connect()(Index)