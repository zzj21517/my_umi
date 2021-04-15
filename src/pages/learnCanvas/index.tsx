/*
 * @Author: your name
 * @Date: 2021-04-15 10:32:26
 * @LastEditTime: 2021-04-15 18:33:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnCanvas/index.tsx
 */
import React, { useState, useEffect } from 'react'
import styles from './index.less'
export default function LearnCanvas() {
    let canvasWidth = 350
    let canvasHeight = 530
    const [imgSrc, setImgSrc] = useState('')
    useEffect(() => {
        let [canvas, context] = initCanvas(canvasWidth, canvasHeight)
        console.log(window.devicePixelRatio,)
        drawCanvas(canvas!, context!)
    }, [])

    function initCanvas(width: number, height: number): [HTMLCanvasElement, CanvasRenderingContext2D] {
        let canvas = document.querySelector('canvas')
        canvas.width = width * window.devicePixelRatio
        canvas.height = height * window.devicePixelRatio
        canvas.style.width = width + 'px'
        canvas.style.height = height + 'px'
        let context = canvas.getContext('2d')
        context.scale(window.devicePixelRatio, window.devicePixelRatio)
        context.save()
        context.fillStyle = '#fff'
        context.fillRect(0, 0, canvasWidth, canvasHeight)
        context.restore()
        return [canvas, context]
    }

    function drawCanvas(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
        context.save()
        context.font = '20px SourceHanSerifCN-Medium'
        context.fillStyle = '#323233'
        context.textAlign = 'center'
        context.fillText('这里套餐名称', canvasWidth / 2, 48)
        context.font = '16px SourceHanSerifCN-Medium'
        context.fillText('有效期：开通后3日内有效', canvasWidth / 2, 75)
        let img = new Image()
        img.onload = (e) => {
            context.drawImage(img, (canvasWidth - 200) / 2, 88, 200, 200)

            context.font = '14px PingFangSC-Regular'
            context.textAlign = 'left'
            context.fillText('使用方法：', 40, 330)
            context.fillText('1、微信关注公众号【中国矿业报】', 40, 354)
            context.fillText('2、点击公众号底部【数字报刊】，进入矿业报；', 40, 378)
            context.fillText('3、点击底部【我的】，再点右上角【扫一扫】', 40, 402)
            context.fillText('4、扫描该二维码，即可领取', 40, 426)

            context.fillStyle = 'rgba(255,244,244,1)'
            context.fillRect(0, 450, 375, 530)
            setImgSrc(canvas.toDataURL())
        }
        img.src = require('@/asserts/images/cat.jpg')
    }
    return (
        <div className={styles.learn_canvas} >
            <canvas></canvas>

            <img width='350px' src={imgSrc} alt="" />
            <div className='content' >
                <div className="content_header">这里套餐名称</div>
                <div className="content_expire">有效期：开通后3日内有效</div>
                <div>{window.devicePixelRatio}</div>
            </div>
        </div>
    )
}
