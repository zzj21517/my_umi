/*
 * @Author: your name
 * @Date: 2021-04-06 21:31:52
 * @LastEditTime: 2021-04-08 15:04:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnSnap\index.tsx
 */
import React,{useState,useEffect} from 'react'
import Snap from 'snapsvg-cjs'
export default function LearnSnap() {
    useEffect(()=>{
        let svg=Snap('#svg')
        let c1=svg.paper.circle(50,50,40).attr({
            fill:'#f00'
        })
        let c2=svg.paper.circle(100,50,40).attr({
            fill:'#00f'
        })
        c2.after(c1)
    },[])
    return (
        <div>
           <svg id='svg' width='200px' height='200px' ></svg>
        </div>
    )
}

