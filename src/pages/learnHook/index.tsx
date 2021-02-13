/*
 * @Author: your name
 * @Date: 2021-02-05 14:25:09
 * @LastEditTime: 2021-02-13 11:44:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnHook/index.tsx
 */


import React, { useState, useEffect, Component } from 'react'
import ComWithLoading from '@/components/hocCom'
import RenderPropsCom from '@/components/renderPropsCom'
import HookCom from '@/components/hookCom'
function UserFriendStatus(props: { data: Array<string> }) {
    const { data } = props
    return (
        <div>
            <div style={{color:'red'}} >hoc</div>
            {
                data.map(item => <div key={item} >{item}</div>)
            }
            <div style={{color:'red'}} >render props</div>
            <RenderPropsCom render={
                (item: string) => <div>{item}</div>
            } />
            <div style={{color:'red'}} >hook</div>
            <HookCom />
        </div>
    )
}

export default ComWithLoading(UserFriendStatus, 'http://www.baidu.com')

