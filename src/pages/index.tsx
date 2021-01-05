import React, { Component } from 'react'
import {Link} from 'umi'
export default class Index extends Component {
    render(): JSX.Element {
        return (
            <div>
                <Link to='/game' >游戏</Link>
                <br/>
                <Link to='/process' >进度条</Link>
            </div>
        )
    }
}
