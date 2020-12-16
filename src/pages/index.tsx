import React, { Component } from 'react'
import { connect } from 'dva'
type TImgName = 'backgroundImg' | 'monsterImg' | 'humterImg'
type TImgReadyName = 'backgroundReady' | 'monsterReady' | 'humterReady'
interface Role {
  x: number,
  y: number,
}

class Humter implements Role {
  x: number;
  y: number;
  speed: number;
  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed
  }
  move() {

  }
}

class Monster implements Role {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class Game {
  backgroundReady: boolean = false
  monsterReady: boolean = false
  humterReady: boolean = false
  backgroundImg: HTMLImageElement | null = null
  monsterImg: HTMLImageElement | null = null
  humterImg: HTMLImageElement | null = null
  context: CanvasRenderingContext2D | null = null
  // 创建画布
  createCanvas() {
    let canvas = document.getElementById('canvas')
    if (canvas instanceof HTMLCanvasElement) {
      this.context = canvas.getContext('2d')
      canvas.width = 512;
      canvas.height = 480;
    }
  }
  // 初始化图片
  initImg(imgName: TImgName, isImgReadyName: TImgReadyName) {
    this[imgName] = new Image()
    let tempImgName=this[imgName]
    if (tempImgName instanceof HTMLImageElement) {
      tempImgName.onload = () => {
        this[isImgReadyName] = true
      }
      tempImgName.src = require('../asserts/images/background.png')
    }
  }
}

class Index extends Component {
  render() {
    return (
      <div>
        <canvas id='canvas' ></canvas>
      </div>
    )
  }
}

export default connect()(Index)