/*
 * @Author: your name
 * @Date: 2021-06-01 10:42:57
 * @LastEditTime: 2021-06-01 10:42:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/demo/game/index.tsx
 */
import React, { Component } from 'react';
import Game from '@/utils/game';
class Index extends Component {
  game = {} as Game;
  componentDidMount() {
    this.game = new Game();
    console.log(this.game, 'game');
    this.game.gameEnd = false;
    requestAnimationFrame(time => this.game.start(time));
  }
  componentWillUnmount() {
    this.game.gameEnd = true;
  }
  render() {
    return <div id="canvasWrap"></div>;
  }
}

export default Index;
