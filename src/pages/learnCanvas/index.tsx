/*
 * @Author: your name
 * @Date: 2021-04-12 10:25:55
 * @LastEditTime: 2021-04-12 11:47:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnCanvas/index.tsx
 */


import React, { useState, useEffect } from 'react'
import styles from './index.less'
export default function LearnCanvas() {
    useEffect(() => {
        let canvas = document.querySelector('canvas')
        canvas!.width = 800
        canvas!.height = 800
        let context = canvas!.getContext('2d')
        context!.fillStyle = '#fff'
        context!.fillRect(0, 0, 800, 800)

        drawSky(context!)

        drawPrairie(context!)
    }, [])

    function drawPrairie(ctx: CanvasRenderingContext2D) {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(0, 420)
        ctx.bezierCurveTo(250, 300, 350, 550, 800, 400)
        ctx.lineTo(800, 600)
        ctx.lineTo(0, 600)
        ctx.closePath()

        var lineStyle = ctx.createLinearGradient(0, 600, 600, 0)
        lineStyle.addColorStop(0, '#00aa58')
        lineStyle.addColorStop(0.3, '#63aa7b')
        lineStyle.addColorStop(1, '#04aa00')

        ctx.fillStyle = lineStyle
        ctx.fill()

        ctx.restore()
    }

    function drawSky(ctx: CanvasRenderingContext2D) {
        ctx.save()

        ctx.beginPath()
        ctx.moveTo(0, 420)
        ctx.bezierCurveTo(250, 300, 350, 550, 800, 400)
        ctx.lineTo(800, 0)
        ctx.lineTo(0, 0)
        ctx.closePath()

        var lineStyle = ctx.createRadialGradient(400, 0, 50, 400, 0, 200)
        lineStyle.addColorStop(0, '#42a9aa')
        lineStyle.addColorStop(1, '#2491aa')
        ctx.fillStyle = lineStyle
        ctx.fill()
        ctx.restore()
    }

    return (
        <div className={styles.learn_canvas} >
            <canvas></canvas>
        </div>
    )
}

