import React, { Component } from 'react';
import { Link } from 'umi';
import { connect } from 'dva';

class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/game">游戏</Link>
                <br />
                <Link to="/process">进度条</Link>
            </div>
        );
    }
}

export default connect()(Index)
