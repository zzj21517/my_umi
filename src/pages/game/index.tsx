import React, { Component } from 'react';
import Game from '../../utils/game';
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
