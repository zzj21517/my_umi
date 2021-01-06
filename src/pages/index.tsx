import React, { Component } from 'react';
import { connect, Link } from 'umi';
@connect()
class Index extends Component<{},{}> {
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

export default Index;
