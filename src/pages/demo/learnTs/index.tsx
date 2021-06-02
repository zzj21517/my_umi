/*
 * @Author: your name
 * @Date: 2021-02-15 10:56:41
 * @LastEditTime: 2021-02-15 18:28:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \umiapp\src\pages\learnTs\index.tsx
 */

import React from 'react'

type Props = {
    getValue: () => void
}

function Child({ getValue }: Props) {
    return <div> {getValue()} </div>
}

export default function Parent(): JSX.Element {
    const getValue = (): number => { return 2 }
    return (
        <div>
            <Child getValue={getValue} />
        </div>
    )
}

