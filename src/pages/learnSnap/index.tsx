/*
 * @Author: your name
 * @Date: 2021-04-06 21:31:52
 * @LastEditTime: 2021-04-06 22:30:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnSnap\index.tsx
 */
import React,{useState,useEffect} from 'react'
import Snap from 'snapsvg-cjs'
export default function LearnSnap() {
    useEffect(()=>{
        console.log(Snap)
        let svg1=Snap(100,100)
        svg.circle(50,50,40)
        document.getElementById('svg')?.appendChild(svg.node)
    },[])
    return (
        <div>
           <div id="svg"></div>
        </div>
    )
}

