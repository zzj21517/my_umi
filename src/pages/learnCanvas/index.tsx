/*
 * @Author: your name
 * @Date: 2021-04-12 10:25:55
 * @LastEditTime: 2021-04-14 11:04:57
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
    }, [])

    const [imgUrl, setImgUrl] = useState('')
    const [imgClass, setImgClass] = useState('')
    return (
        <div className={styles.learn_canvas} >
            <img width='150px' height='150px' src={require('@/asserts/images/smile.gif')} alt=""/>
            <img className={imgClass} width='150px' height='150px' src={imgUrl} onError={() => {
                setImgClass('error')
            }} alt="" />
            <canvas></canvas>
        </div>
    )
}

