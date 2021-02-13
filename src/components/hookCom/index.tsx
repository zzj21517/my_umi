/*
 * @Author: your name
 * @Date: 2021-02-13 11:21:08
 * @LastEditTime: 2021-02-13 11:41:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\components\hookCom\index.tsx
 */

import React, { useState, useEffect } from 'react'

const useFetchData = () => {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setData(['zzj', 'cy', 'zsq', 'nwz'])
        }, 1000)
    }, [])
    return [data, loading]
}
export default function HookCom() {
    const [data, loading] = useFetchData()
    return (
        <div>
            {loading ? <div>loading....</div> : data.map(item => <div>{item}</div>)}
        </div>
    )
}


