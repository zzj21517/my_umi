/*
 * @Author: your name
 * @Date: 2021-02-05 14:25:09
 * @LastEditTime: 2021-02-13 12:49:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnHook/index.tsx
 */


import React, { useState, useRef, useEffect, Component } from 'react'
import ComWithLoading from '@/components/hocCom'
import RenderPropsCom from '@/components/renderPropsCom'
import HookCom from '@/components/hookCom'
function UserFriendStatus(props: { data: Array<string> }) {
    const [count, setCount] = useState(0)
    const likeRef = useRef(0)
    const { data } = props
    const handleAlert = () => {
        setTimeout(() => {
            alert(count);
            alert(likeRef.current);
        }, 2000);
    }
    return (
        <div>
            <div style={{ color: 'red' }} >hoc</div>
            {
                data.map(item => <div key={item} >{item}</div>)
            }
            <div style={{ color: 'red' }} >render props</div>
            <RenderPropsCom render={
                (item: string) => <div>{item}</div>
            } />
            <div style={{ color: 'red' }} >hook</div>
            <HookCom />



            <div>button</div>
            <button onClick={() => {
                setCount(count + 1)
                likeRef.current++
            }} >+1</button>
            <br />
            <button onClick={
                handleAlert
            } >alert</button>
        </div>
    )
}

export default ComWithLoading(UserFriendStatus, 'http://www.baidu.com')

