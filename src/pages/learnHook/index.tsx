/*
 * @Author: your name
 * @Date: 2021-02-05 14:25:09
 * @LastEditTime: 2021-02-11 13:24:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /my_umi/src/pages/learnHook/index.tsx
 */


import React, { useState, useEffect, Component } from 'react'
import ComWithLoading from '@/components/hocCom'

function UserFriendStatus(props: { data: Array<string> }) {
    const { data } = props
    return (
        <div>
            {
                data.map(item => <div key={item} >{item}</div>)
            }
        </div>
    )
}

export default ComWithLoading(UserFriendStatus, 'http://www.baidu.com')

