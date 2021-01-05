import React, { Component } from 'react'
import Game from '../../utils/game'
class Index extends Component {
  componentDidMount() {
    let game = new Game()
    console.log(game, 'game')
    requestAnimationFrame((time) => game.start(time))
  }
  render() {
    return (
      <div id='canvasWrap' >

      </div>
    )
  }
}

export default Index